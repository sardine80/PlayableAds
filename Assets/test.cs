using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class test : MonoBehaviour
{
    public Image img;
    public Sprite sprite;
    public GameObject bg;

    public float x = 1;

    public gamemanager gm;

    private Transform t;
    private bool isClear;

    public float scaleChangeTime = 0.35f;
    private float curScaleChangeTime = 0f;

    private Vector3 prevScale;
    private bool isChangeScale = false;
    private Vector3 changeToScale=Vector3.zero;
    
    public float clickScale = 1.35f;
    public float clearScale = 0f;

    public int effectIndex=-1;
    
    private void Awake()
    {
        t = transform;
        isClear = false;
        isChangeScale = false;
    }

    public void setClear()
    {
        isClear = true;
        curScaleChangeTime = 0;
        changeToScale = Vector3.one * clearScale;
        isChangeScale = true;
        prevScale = t.localScale;
    }

    public void setDisable()
    {
        bg.SetActive(false);
        curScaleChangeTime = 0;
        changeToScale = Vector3.one;
        isChangeScale = true;
        prevScale = t.localScale;
    }

    public void onClick()
    {
        if (isClear)
            return;
        if (gm.CanClick == false)
            return;
        if (gm.tests[0] == this)
            return;
        
        bg.SetActive(true);   
        gm.onClickTest(this);

        changeToScale = Vector3.one * clickScale;
        curScaleChangeTime = 0;
        prevScale = t.localScale;
        isChangeScale = true;
    }

    private void Update()
    {
        if (isChangeScale)
        {
            if (curScaleChangeTime < scaleChangeTime)
            {
                curScaleChangeTime += Time.deltaTime;
                t.localScale = Vector3.Slerp(t.localScale, changeToScale, curScaleChangeTime / scaleChangeTime);
            }
            else
            {
                gm.EndProc();
                curScaleChangeTime = 0;
                t.localScale = changeToScale;
                isChangeScale = false;
            }
        }
    }
}
