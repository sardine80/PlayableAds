using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class screen : MonoBehaviour
{
   public CanvasScaler canvas;

   private void Awake()
   {
      canvas.referenceResolution = new Vector2(Screen.width, Screen.height);
   }
}
