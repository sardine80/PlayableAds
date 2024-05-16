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


    public endCard endCover;
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
    private int score = 0;

    public GameObject[] breads1;
    public GameObject[] breads2;
    public GameObject[] breads3;
    
    private int breadIndex_x= 0;
    private int breadIndex_y= 0;

    private bool gameEnd;
    public GameObject displayer;

    private void Awake()
    {
        gameEnd = false;
        endCover.gameObject.SetActive(false);
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
                EndGame();
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
        score++;

        if (tests[0].effectIndex>=6 && tests[0].effectIndex<=7)
        {
            //공격력
            breadIndex_x++;
            breadIndex_y = 0;
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

            curEnemyHp -= enemyHpMax * 0.15f;
            
            if(curEnemyHp<=0)
                catchCover.SetActive(true);
        }
    }

    public void enemyAttack()
    {
        if (gameEnd)
            return;
        
        curHp -= enemyPower;

        playerHpbar.value = curHp / hpMax;

        if (curHp <= 0)
        {
            EndGame();
        }
    }

    private void EndGame()
    {
        endCover.gameObject.SetActive(true);
        displayer.SetActive(false);
        
        Luna.Unity.Analytics.LogEvent("CardMatch",score);
        Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
        
        Luna.Unity.LifeCycle.GameEnded();
        gameEnd = true;
    }

    public void playerAttack()
    {
        if (gameEnd)
            return;
        
        curEnemyHp -= curPlayerPower;
        enemyHpBar.value = curEnemyHp / enemyHpMax;
        
        dmgAni.SetTrigger("Damage");

        if (breadIndex_x == 0)
        {
            if (breads1[breadIndex_y].activeSelf)
                return;
            
            breads1[breadIndex_y].SetActive(true);
            breadIndex_y++;
            if (breadIndex_y >= breads1.Length)
                breadIndex_y = 0;
        }
        else if (breadIndex_x == 1)
        {
            if (breads2[breadIndex_y].activeSelf)
                return;
            
            breads2[breadIndex_y].SetActive(true);
            breadIndex_y++;
            if (breadIndex_y >= breads2.Length)
                breadIndex_y = 0;
        }
        else
        {
            if (breads3[breadIndex_y].activeSelf)
                return;
            
            breads3[breadIndex_y].SetActive(true);
            breadIndex_y++;
            if (breadIndex_y >= breads3.Length)
                breadIndex_y = 0;
        }

        if(curEnemyHp<=0)
            catchCover.SetActive(true);
        
    }
}
