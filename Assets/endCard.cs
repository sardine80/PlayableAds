using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class endCard : MonoBehaviour
{
    public gamemanager gm;
    public void OnClickDownload()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
