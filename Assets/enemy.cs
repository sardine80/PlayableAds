using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemy : MonoBehaviour
{
    public gamemanager gm;
    public void attack()
    {
        gm.enemyAttack();
    }
}
