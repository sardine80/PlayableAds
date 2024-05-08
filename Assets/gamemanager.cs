using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class gamemanager : MonoBehaviour
{
    public Sprite[] sprites;
    public test[] t;
    public test[] tests = new test[2];

    private void Awake()
    {
        for (int i = 0; i < t.Length; i++)
        {
            t[i].sprite = sprites[i / 2];
        }

        for (int i = t.Length - 1; i > 0; i--)
        {
            int j = Random.Range(0, i + 1);
            var temp = t[i].sprite;
            t[i].sprite = t[j].sprite;
            t[j].sprite = temp;
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
        
        Check();   
    }

    private void Check()
    {
        if (tests[0].sprite != tests[1].sprite)
        {
            tests[0].setDisable();
            tests[1].setDisable();

            tests[0] = tests[1] = null;
            return;
        }
        
        tests[0].setClear();
        tests[1].setClear();

        tests[0] = tests[1] = null;
    }
}
