using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Random = UnityEngine.Random;

public class gamemanager : MonoBehaviour
{
    public Sprite[] sprites;
    public test[] t;
    public test[] tests = new test[2];

    public Slider playerHpbar;
    public Slider enemyHpBar;
    public Text dmg;

    public float enemyHpMax = 2000000000;
    public float hpMax = 30;
    public float enemyPower = 1;

    public int playerPower = 1;
    public int playerPowerMul = 2;

    public float attackSpeed = 1f;
    public float attackSpeedMul = 1.5f;


    public GameObject endCover;
    public GameObject catchCover;

    public long curPlayerPower;
    private long curdmg;
    private float curHp;
    private float curEnemyHp;
    public Animator ani;
    public Animator dmgAni;
    public bool CanClick => tests[0] == null || tests[1] == null;
    private bool isCheck = false;

    public GameObject[] pets;
    
    public GameObject capsule;
    public float capsuleRotate=30f;
    public float capsuleMoveTime=0.5f;
    private float curCapsuleMoveTime=0;
    private Vector3 capsuleOriPos;
    public GameObject capsuleTarget;

    private void Awake()
    {
        endCover.SetActive(false);
        catchCover.SetActive(false);
        
        capsule.SetActive(false);
        curHp = hpMax;
        curdmg = 0;
        curEnemyHp = enemyHpMax;
        curPlayerPower = playerPower;
        dmg.text=curPlayerPower.ToString();
        isCheck = false;

        enemyHpBar.value = curEnemyHp / enemyHpMax;

        for (int i = 0; i < pets.Length; i++)
        {
            pets[i].SetActive(false);
        }

        for (int i = 0; i < t.Length; i++)
        {
            t[i].sprite = sprites[i / 2];
            t[i].effectIndex = i / 2;
        }

        for (int i = t.Length - 1; i >= 0; i--)
        {
            int j = Random.Range(0, i + 1);
            var temp = (t[i].sprite,t[i].effectIndex);
            
            t[i].sprite = t[j].sprite;
            t[j].sprite = temp.sprite;
            
            t[i].effectIndex = t[j].effectIndex;
            t[j].effectIndex = temp.effectIndex;
            
            t[i].img.sprite = t[i].sprite;
        }
    }

    private void Update()
    {
        if (capsule.activeSelf)
        {
            if (curCapsuleMoveTime <= capsuleMoveTime)
            {
                curCapsuleMoveTime += Time.deltaTime;

                capsule.transform.position = Vector3.Lerp(capsuleOriPos, capsuleTarget.transform.position,
                    curCapsuleMoveTime / capsuleMoveTime);
                capsule.transform.Rotate(new Vector3(0,0,capsuleRotate)*Time.deltaTime);
            }
            else
            {
                capsule.transform.position = capsuleTarget.transform.position;
                capsule.SetActive(false);
                endCover.SetActive(true);
            }
        }
    }

    public void onClickTest(test t)
    {
        if (tests[0] != null && tests[1] != null)
            return;

        if (tests[0] == null)
        {
            tests[0] = t;
            return;
        }

        tests[1] = t;
    }

    public void EndProc()
    {
        if (tests[0] != null && tests[1] != null && isCheck == false)
        {
            isCheck =true;
            Check();
        }
        else if(tests[0] != null && tests[1] != null )
        {
            tests[0] =tests[1] =  null;
            isCheck = false;
        }
    }

    public void OnClickCatchBtn()
    {
        capsuleOriPos = capsule.transform.position;
        capsule.SetActive(true);
    }

    private void Check()
    {
        if (tests[0].sprite != tests[1].sprite)
        {
            tests[0].setDisable();
            tests[1].setDisable();
            
            return;
        }
        
        tests[0].setClear();
        tests[1].setClear();

        if (tests[0].effectIndex>=6 && tests[0].effectIndex<=7)
        {
            //공격력
            
            curPlayerPower *= playerPowerMul;
            dmg.text=curPlayerPower.ToString();
        }
        else if (tests[0].effectIndex>=8 && tests[0].effectIndex<=9)
        {
            //공속
            
            attackSpeed *= attackSpeedMul;
            ani.SetFloat("attackSpeed",attackSpeed);
            dmgAni.SetFloat("attackSpeed",attackSpeed);
        }
        else
        {
            pets[tests[0].effectIndex].SetActive(true);

            curEnemyHp -= enemyHpMax * 0.1f;
            
            if(curEnemyHp<=0)
                catchCover.SetActive(true);
        }
    }

    public void enemyAttack()
    {
        curHp -= enemyPower;

        playerHpbar.value = curHp / hpMax;

        if (curHp <= 0)
        {
            endCover.SetActive(true);
        }
    }

    public void EndGame()
    {
        // Luna.Unity.LifeCycle.GameEnded();
    }

    public void playerAttack()
    {
        curEnemyHp -= curPlayerPower;
        enemyHpBar.value = curEnemyHp / enemyHpMax;
        
        dmgAni.SetTrigger("Damage");
        
        if(curEnemyHp<=0)
            catchCover.SetActive(true);
        // curdmg += curPlayerPower;
        
    }
}
