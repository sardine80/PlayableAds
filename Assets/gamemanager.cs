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
    public Text dmg;

    public float hpMax = 30;
    public float enemyPower = 1;

    public int playerPower = 1;
    public int playerPowerMul = 2;

    public float attackSpeed = 1f;
    public float attackSpeedMul = 1.5f;


    public GameObject endCover;

    public long curPlayerPower;
    private long curdmg;
    private float curHp;
    public Animator ani;
    public bool CanClick => tests[0] == null || tests[1] == null;
    private bool isCheck = false;

    private void Awake()
    {
        endCover.SetActive(false);
        curHp = hpMax;
        curdmg = 0;
        curPlayerPower = playerPower;
        isCheck = false;

        for (int i = 0; i < t.Length; i++)
        {
            t[i].sprite = sprites[i / 2];
        }

        for (int i = t.Length - 1; i >= 0; i--)
        {
            int j = Random.Range(0, i + 1);
            var temp = t[i].sprite;
            t[i].sprite = t[j].sprite;
            t[j].sprite = temp;
            t[i].img.sprite = t[i].sprite;
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
        
        curPlayerPower *= playerPowerMul;
        attackSpeed *= attackSpeedMul;
        ani.SetFloat("attackSpeed",attackSpeed);
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
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void playerAttack()
    {
        curdmg += curPlayerPower;
        dmg.text=curdmg.ToString();
    }
}
