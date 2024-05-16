using System;
using UnityEngine;

public class bread : MonoBehaviour
{
    public Transform from;

    public Transform to;

    public float moveTime;

    private float curMoveTime;

    private void OnEnable()
    {
        transform.position = from.position;
        curMoveTime = 0;
    }

    private void Update()
    {
        if (curMoveTime < moveTime)
        {
            curMoveTime += Time.deltaTime;
            transform.position = Vector3.Lerp(from.position, to.position, curMoveTime / moveTime);
        }
        else
        {
            curMoveTime = moveTime;
            transform.position = Vector3.Lerp(from.position, to.position, curMoveTime / moveTime);
            gameObject.SetActive(false);
        }
    }
}
