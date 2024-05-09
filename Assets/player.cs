using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player : MonoBehaviour
{
    public gamemanager gm;
    public void hit()
    {
        gm.playerAttack();
    }
}
