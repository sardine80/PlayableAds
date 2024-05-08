using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class test : MonoBehaviour
{
    public Image img;
    public Sprite sprite;

    public float x = 1;

    public gamemanager gm;

    private Transform t;
    private bool isRotate;
    private bool isDisable;
    private bool isClear;
    private bool isChangeSprite;
    private void Awake()
    {
        t = transform;
        isRotate = false;
        isDisable = true;
        isClear = false;
        isChangeSprite = false;
    }

    public void setClear()
    {
        isClear = true;
    }

    public void setDisable()
    {
        isRotate = true;
    }

    public void setEnable()
    {
        isRotate = true;
    }

    public void onClick()
    {
        if (isClear)
            return;
        
        isRotate = true;
    }

    private void Update()
    {
        if (isRotate)
        {
            if (isDisable)
            {
                t.localScale -= x * Time.deltaTime * Vector3.right;
                
                if (t.localScale.x <= 0 && isChangeSprite == false)
                {
                    isChangeSprite = true;
                    img.sprite = sprite;
                }

                if (t.localScale.x<=-1)
                {
                    isDisable = false;

                    t.localScale = new Vector3(-1, 1, 1);
                    isRotate = false;
                    isChangeSprite = false;

                    gm.onClickTest(this);
                }
            }
            else
            {
                t.localScale += x * Time.deltaTime * Vector3.right;
                
                if (t.localScale.x >= 0 && isChangeSprite == false)
                {
                    isChangeSprite = true;
                    img.sprite = null;
                }

                if (t.localScale.x>=1)
                {
                    isDisable = true;

                    t.localScale = Vector3.one;
                    isRotate = false;
                    isChangeSprite = false;
                }
            }
        }
    }
}
