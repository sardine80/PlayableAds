var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointSpring' )
  var i461 = data
  i460.spring = i461[0]
  i460.damper = i461[1]
  i460.targetPosition = i461[2]
  return i460
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointMotor' )
  var i463 = data
  i462.m_TargetVelocity = i463[0]
  i462.m_Force = i463[1]
  i462.m_FreeSpin = i463[2]
  return i462
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointLimits' )
  var i465 = data
  i464.m_Min = i465[0]
  i464.m_Max = i465[1]
  i464.m_Bounciness = i465[2]
  i464.m_BounceMinVelocity = i465[3]
  i464.m_ContactDistance = i465[4]
  i464.minBounce = i465[5]
  i464.maxBounce = i465[6]
  return i464
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointDrive' )
  var i467 = data
  i466.m_PositionSpring = i467[0]
  i466.m_PositionDamper = i467[1]
  i466.m_MaximumForce = i467[2]
  return i466
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i469 = data
  i468.m_Spring = i469[0]
  i468.m_Damper = i469[1]
  return i468
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i471 = data
  i470.m_Limit = i471[0]
  i470.m_Bounciness = i471[1]
  i470.m_ContactDistance = i471[2]
  return i470
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i473 = data
  i472.m_ExtremumSlip = i473[0]
  i472.m_ExtremumValue = i473[1]
  i472.m_AsymptoteSlip = i473[2]
  i472.m_AsymptoteValue = i473[3]
  i472.m_Stiffness = i473[4]
  return i472
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i475 = data
  i474.m_LowerAngle = i475[0]
  i474.m_UpperAngle = i475[1]
  return i474
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i477 = data
  i476.m_MotorSpeed = i477[0]
  i476.m_MaximumMotorTorque = i477[1]
  return i476
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i479 = data
  i478.m_DampingRatio = i479[0]
  i478.m_Frequency = i479[1]
  i478.m_Angle = i479[2]
  return i478
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i481 = data
  i480.m_LowerTranslation = i481[0]
  i480.m_UpperTranslation = i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i482 = root || new pc.UnityMaterial()
  var i483 = data
  i482.name = i483[0]
  request.r(i483[1], i483[2], 0, i482, 'shader')
  i482.renderQueue = i483[3]
  i482.enableInstancing = !!i483[4]
  var i485 = i483[5]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i485[i + 0]) );
  }
  i482.floatParameters = i484
  var i487 = i483[6]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i487[i + 0]) );
  }
  i482.colorParameters = i486
  var i489 = i483[7]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i489[i + 0]) );
  }
  i482.vectorParameters = i488
  var i491 = i483[8]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i491[i + 0]) );
  }
  i482.textureParameters = i490
  var i493 = i483[9]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i493[i + 0]) );
  }
  i482.materialFlags = i492
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i497 = data
  i496.name = i497[0]
  i496.value = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = new pc.Color(i501[1], i501[2], i501[3], i501[4])
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = new pc.Vec4( i505[1], i505[2], i505[3], i505[4] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i509 = data
  i508.name = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'value')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i513 = data
  i512.name = i513[0]
  i512.enabled = !!i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i515 = data
  i514.name = i515[0]
  i514.width = i515[1]
  i514.height = i515[2]
  i514.mipmapCount = i515[3]
  i514.anisoLevel = i515[4]
  i514.filterMode = i515[5]
  i514.hdr = !!i515[6]
  i514.format = i515[7]
  i514.wrapMode = i515[8]
  i514.alphaIsTransparency = !!i515[9]
  i514.alphaSource = i515[10]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i517 = data
  i516.name = i517[0]
  i516.halfPrecision = !!i517[1]
  i516.vertexCount = i517[2]
  i516.aabb = i517[3]
  var i519 = i517[4]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( !!i519[i + 0] );
  }
  i516.streams = i518
  i516.vertices = i517[5]
  var i521 = i517[6]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i521[i + 0]) );
  }
  i516.subMeshes = i520
  var i523 = i517[7]
  var i522 = []
  for(var i = 0; i < i523.length; i += 16) {
    i522.push( new pc.Mat4().setData(i523[i + 0], i523[i + 1], i523[i + 2], i523[i + 3],  i523[i + 4], i523[i + 5], i523[i + 6], i523[i + 7],  i523[i + 8], i523[i + 9], i523[i + 10], i523[i + 11],  i523[i + 12], i523[i + 13], i523[i + 14], i523[i + 15]) );
  }
  i516.bindposes = i522
  var i525 = i517[8]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i525[i + 0]) );
  }
  i516.blendShapes = i524
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i531 = data
  i530.triangles = i531[0]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i537 = data
  i536.name = i537[0]
  var i539 = i537[1]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i539[i + 0]) );
  }
  i536.frames = i538
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i541 = data
  i540.name = i541[0]
  i540.atlasId = i541[1]
  i540.mipmapCount = i541[2]
  i540.hdr = !!i541[3]
  i540.size = i541[4]
  i540.anisoLevel = i541[5]
  i540.filterMode = i541[6]
  i540.wrapMode = i541[7]
  var i543 = i541[8]
  var i542 = []
  for(var i = 0; i < i543.length; i += 4) {
    i542.push( UnityEngine.Rect.MinMaxRect(i543[i + 0], i543[i + 1], i543[i + 2], i543[i + 3]) );
  }
  i540.rects = i542
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i547 = data
  i546.name = i547[0]
  i546.index = i547[1]
  i546.startup = !!i547[2]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i549 = data
  i548.position = new pc.Vec3( i549[0], i549[1], i549[2] )
  i548.scale = new pc.Vec3( i549[3], i549[4], i549[5] )
  i548.rotation = new pc.Quat(i549[6], i549[7], i549[8], i549[9])
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i551 = data
  i550.enabled = !!i551[0]
  i550.aspect = i551[1]
  i550.orthographic = !!i551[2]
  i550.orthographicSize = i551[3]
  i550.backgroundColor = new pc.Color(i551[4], i551[5], i551[6], i551[7])
  i550.nearClipPlane = i551[8]
  i550.farClipPlane = i551[9]
  i550.fieldOfView = i551[10]
  i550.depth = i551[11]
  i550.clearFlags = i551[12]
  i550.cullingMask = i551[13]
  i550.rect = i551[14]
  request.r(i551[15], i551[16], 0, i550, 'targetTexture')
  i550.usePhysicalProperties = !!i551[17]
  i550.focalLength = i551[18]
  i550.sensorSize = new pc.Vec2( i551[19], i551[20] )
  i550.lensShift = new pc.Vec2( i551[21], i551[22] )
  i550.gateFit = i551[23]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i553 = data
  i552.name = i553[0]
  i552.tagId = i553[1]
  i552.enabled = !!i553[2]
  i552.isStatic = !!i553[3]
  i552.layer = i553[4]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i555 = data
  i554.pivot = new pc.Vec2( i555[0], i555[1] )
  i554.anchorMin = new pc.Vec2( i555[2], i555[3] )
  i554.anchorMax = new pc.Vec2( i555[4], i555[5] )
  i554.sizeDelta = new pc.Vec2( i555[6], i555[7] )
  i554.anchoredPosition3D = new pc.Vec3( i555[8], i555[9], i555[10] )
  i554.rotation = new pc.Quat(i555[11], i555[12], i555[13], i555[14])
  i554.scale = new pc.Vec3( i555[15], i555[16], i555[17] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i557 = data
  i556.enabled = !!i557[0]
  i556.planeDistance = i557[1]
  i556.referencePixelsPerUnit = i557[2]
  i556.isFallbackOverlay = !!i557[3]
  i556.renderMode = i557[4]
  i556.renderOrder = i557[5]
  i556.sortingLayerName = i557[6]
  i556.sortingOrder = i557[7]
  i556.scaleFactor = i557[8]
  request.r(i557[9], i557[10], 0, i556, 'worldCamera')
  i556.overrideSorting = !!i557[11]
  i556.pixelPerfect = !!i557[12]
  i556.targetDisplay = i557[13]
  i556.overridePixelPerfect = !!i557[14]
  return i556
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i559 = data
  i558.m_UiScaleMode = i559[0]
  i558.m_ReferencePixelsPerUnit = i559[1]
  i558.m_ScaleFactor = i559[2]
  i558.m_ReferenceResolution = new pc.Vec2( i559[3], i559[4] )
  i558.m_ScreenMatchMode = i559[5]
  i558.m_MatchWidthOrHeight = i559[6]
  i558.m_PhysicalUnit = i559[7]
  i558.m_FallbackScreenDPI = i559[8]
  i558.m_DefaultSpriteDPI = i559[9]
  i558.m_DynamicPixelsPerUnit = i559[10]
  i558.m_PresetInfoIsWorld = !!i559[11]
  return i558
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i561 = data
  i560.m_IgnoreReversedGraphics = !!i561[0]
  i560.m_BlockingObjects = i561[1]
  i560.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i561[2] )
  return i560
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i563 = data
  i562.m_StartCorner = i563[0]
  i562.m_StartAxis = i563[1]
  i562.m_CellSize = new pc.Vec2( i563[2], i563[3] )
  i562.m_Spacing = new pc.Vec2( i563[4], i563[5] )
  i562.m_Constraint = i563[6]
  i562.m_ConstraintCount = i563[7]
  i562.m_Padding = UnityEngine.RectOffset.FromPaddings(i563[8], i563[9], i563[10], i563[11])
  i562.m_ChildAlignment = i563[12]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i565 = data
  i564.cullTransparentMesh = !!i565[0]
  return i564
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.Image' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Sprite')
  i566.m_Type = i567[2]
  i566.m_PreserveAspect = !!i567[3]
  i566.m_FillCenter = !!i567[4]
  i566.m_FillMethod = i567[5]
  i566.m_FillAmount = i567[6]
  i566.m_FillClockwise = !!i567[7]
  i566.m_FillOrigin = i567[8]
  i566.m_UseSpriteMesh = !!i567[9]
  i566.m_PixelsPerUnitMultiplier = i567[10]
  request.r(i567[11], i567[12], 0, i566, 'm_Material')
  i566.m_Maskable = !!i567[13]
  i566.m_Color = new pc.Color(i567[14], i567[15], i567[16], i567[17])
  i566.m_RaycastTarget = !!i567[18]
  i566.m_RaycastPadding = new pc.Vec4( i567[19], i567[20], i567[21], i567[22] )
  return i566
}

Deserializers["test"] = function (request, data, root) {
  var i568 = root || request.c( 'test' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'img')
  request.r(i569[2], i569[3], 0, i568, 'sprite')
  i568.x = i569[4]
  request.r(i569[5], i569[6], 0, i568, 'gm')
  return i568
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Button' )
  var i571 = data
  i570.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i571[0], i570.m_OnClick)
  i570.m_Navigation = request.d('UnityEngine.UI.Navigation', i571[1], i570.m_Navigation)
  i570.m_Transition = i571[2]
  i570.m_Colors = request.d('UnityEngine.UI.ColorBlock', i571[3], i570.m_Colors)
  i570.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i571[4], i570.m_SpriteState)
  i570.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i571[5], i570.m_AnimationTriggers)
  i570.m_Interactable = !!i571[6]
  request.r(i571[7], i571[8], 0, i570, 'm_TargetGraphic')
  return i570
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i573 = data
  i572.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i573[0], i572.m_PersistentCalls)
  return i572
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i575 = data
  var i577 = i575[0]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i577.length; i += 1) {
    i576.add(request.d('UnityEngine.Events.PersistentCall', i577[i + 0]));
  }
  i574.m_Calls = i576
  return i574
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_Target')
  i580.m_TargetAssemblyTypeName = i581[2]
  i580.m_MethodName = i581[3]
  i580.m_Mode = i581[4]
  i580.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i581[5], i580.m_Arguments)
  i580.m_CallState = i581[6]
  return i580
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_ObjectArgument')
  i582.m_ObjectArgumentAssemblyTypeName = i583[2]
  i582.m_IntArgument = i583[3]
  i582.m_FloatArgument = i583[4]
  i582.m_StringArgument = i583[5]
  i582.m_BoolArgument = !!i583[6]
  return i582
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i585 = data
  i584.m_Mode = i585[0]
  i584.m_WrapAround = !!i585[1]
  request.r(i585[2], i585[3], 0, i584, 'm_SelectOnUp')
  request.r(i585[4], i585[5], 0, i584, 'm_SelectOnDown')
  request.r(i585[6], i585[7], 0, i584, 'm_SelectOnLeft')
  request.r(i585[8], i585[9], 0, i584, 'm_SelectOnRight')
  return i584
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i587 = data
  i586.m_NormalColor = new pc.Color(i587[0], i587[1], i587[2], i587[3])
  i586.m_HighlightedColor = new pc.Color(i587[4], i587[5], i587[6], i587[7])
  i586.m_PressedColor = new pc.Color(i587[8], i587[9], i587[10], i587[11])
  i586.m_SelectedColor = new pc.Color(i587[12], i587[13], i587[14], i587[15])
  i586.m_DisabledColor = new pc.Color(i587[16], i587[17], i587[18], i587[19])
  i586.m_ColorMultiplier = i587[20]
  i586.m_FadeDuration = i587[21]
  return i586
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_HighlightedSprite')
  request.r(i589[2], i589[3], 0, i588, 'm_PressedSprite')
  request.r(i589[4], i589[5], 0, i588, 'm_SelectedSprite')
  request.r(i589[6], i589[7], 0, i588, 'm_DisabledSprite')
  return i588
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i591 = data
  i590.m_NormalTrigger = i591[0]
  i590.m_HighlightedTrigger = i591[1]
  i590.m_PressedTrigger = i591[2]
  i590.m_SelectedTrigger = i591[3]
  i590.m_DisabledTrigger = i591[4]
  return i590
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Slider' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_FillRect')
  request.r(i593[2], i593[3], 0, i592, 'm_HandleRect')
  i592.m_Direction = i593[4]
  i592.m_MinValue = i593[5]
  i592.m_MaxValue = i593[6]
  i592.m_WholeNumbers = !!i593[7]
  i592.m_Value = i593[8]
  i592.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i593[9], i592.m_OnValueChanged)
  i592.m_Navigation = request.d('UnityEngine.UI.Navigation', i593[10], i592.m_Navigation)
  i592.m_Transition = i593[11]
  i592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i593[12], i592.m_Colors)
  i592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i593[13], i592.m_SpriteState)
  i592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i593[14], i592.m_AnimationTriggers)
  i592.m_Interactable = !!i593[15]
  request.r(i593[16], i593[17], 0, i592, 'm_TargetGraphic')
  return i592
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i595 = data
  i594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i595[0], i594.m_PersistentCalls)
  return i594
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Text' )
  var i597 = data
  i596.m_FontData = request.d('UnityEngine.UI.FontData', i597[0], i596.m_FontData)
  i596.m_Text = i597[1]
  request.r(i597[2], i597[3], 0, i596, 'm_Material')
  i596.m_Maskable = !!i597[4]
  i596.m_Color = new pc.Color(i597[5], i597[6], i597[7], i597[8])
  i596.m_RaycastTarget = !!i597[9]
  i596.m_RaycastPadding = new pc.Vec4( i597[10], i597[11], i597[12], i597[13] )
  return i596
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.FontData' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_Font')
  i598.m_FontSize = i599[2]
  i598.m_FontStyle = i599[3]
  i598.m_BestFit = !!i599[4]
  i598.m_MinSize = i599[5]
  i598.m_MaxSize = i599[6]
  i598.m_Alignment = i599[7]
  i598.m_AlignByGeometry = !!i599[8]
  i598.m_RichText = !!i599[9]
  i598.m_HorizontalOverflow = i599[10]
  i598.m_VerticalOverflow = i599[11]
  i598.m_LineSpacing = i599[12]
  return i598
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'm_FirstSelected')
  i600.m_sendNavigationEvents = !!i601[2]
  i600.m_DragThreshold = i601[3]
  return i600
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i603 = data
  i602.m_HorizontalAxis = i603[0]
  i602.m_VerticalAxis = i603[1]
  i602.m_SubmitButton = i603[2]
  i602.m_CancelButton = i603[3]
  i602.m_InputActionsPerSecond = i603[4]
  i602.m_RepeatDelay = i603[5]
  i602.m_ForceModuleActive = !!i603[6]
  i602.m_SendPointerHoverToParent = !!i603[7]
  return i602
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i604 = root || request.c( 'gamemanager' )
  var i605 = data
  var i607 = i605[0]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.sprites = i606
  var i609 = i605[1]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i604.t = i608
  var i611 = i605[2]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i604.tests = i610
  request.r(i605[3], i605[4], 0, i604, 'playerHpbar')
  request.r(i605[5], i605[6], 0, i604, 'dmg')
  i604.hpMax = i605[7]
  i604.enemyPower = i605[8]
  i604.playerPower = i605[9]
  i604.playerPowerMul = i605[10]
  request.r(i605[11], i605[12], 0, i604, 'endCover')
  i604.curPlayerPower = i605[13]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i617 = data
  i616.enabled = !!i617[0]
  request.r(i617[1], i617[2], 0, i616, 'sharedMaterial')
  var i619 = i617[3]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.sharedMaterials = i618
  i616.receiveShadows = !!i617[4]
  i616.shadowCastingMode = i617[5]
  i616.sortingLayerID = i617[6]
  i616.sortingOrder = i617[7]
  i616.lightmapIndex = i617[8]
  i616.lightmapSceneIndex = i617[9]
  i616.lightmapScaleOffset = new pc.Vec4( i617[10], i617[11], i617[12], i617[13] )
  i616.lightProbeUsage = i617[14]
  i616.reflectionProbeUsage = i617[15]
  i616.color = new pc.Color(i617[16], i617[17], i617[18], i617[19])
  request.r(i617[20], i617[21], 0, i616, 'sprite')
  i616.flipX = !!i617[22]
  i616.flipY = !!i617[23]
  i616.drawMode = i617[24]
  i616.size = new pc.Vec2( i617[25], i617[26] )
  i616.tileMode = i617[27]
  i616.adaptiveModeThreshold = i617[28]
  i616.maskInteraction = i617[29]
  i616.spriteSortPoint = i617[30]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'animatorController')
  request.r(i623[2], i623[3], 0, i622, 'avatar')
  i622.updateMode = i623[4]
  i622.hasTransformHierarchy = !!i623[5]
  i622.applyRootMotion = !!i623[6]
  var i625 = i623[7]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i622.humanBones = i624
  i622.enabled = !!i623[8]
  return i622
}

Deserializers["enemy"] = function (request, data, root) {
  var i628 = root || request.c( 'enemy' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'gm')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'additionalVertexStreams')
  i630.enabled = !!i631[2]
  request.r(i631[3], i631[4], 0, i630, 'sharedMaterial')
  var i633 = i631[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.sharedMaterials = i632
  i630.receiveShadows = !!i631[6]
  i630.shadowCastingMode = i631[7]
  i630.sortingLayerID = i631[8]
  i630.sortingOrder = i631[9]
  i630.lightmapIndex = i631[10]
  i630.lightmapSceneIndex = i631[11]
  i630.lightmapScaleOffset = new pc.Vec4( i631[12], i631[13], i631[14], i631[15] )
  i630.lightProbeUsage = i631[16]
  i630.reflectionProbeUsage = i631[17]
  return i630
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i634 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'skeletonDataAsset')
  i634.initialSkinName = i635[2]
  i634.fixPrefabOverrideViaMeshFilter = i635[3]
  i634.initialFlipX = !!i635[4]
  i634.initialFlipY = !!i635[5]
  i634.updateWhenInvisible = i635[6]
  i634.zSpacing = i635[7]
  i634.useClipping = !!i635[8]
  i634.immutableTriangles = !!i635[9]
  i634.pmaVertexColors = !!i635[10]
  i634.clearStateOnDisable = !!i635[11]
  i634.tintBlack = !!i635[12]
  i634.singleSubmesh = !!i635[13]
  i634.fixDrawOrder = !!i635[14]
  i634.addNormals = !!i635[15]
  i634.calculateTangents = !!i635[16]
  i634.maskInteraction = i635[17]
  i634.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i635[18], i634.maskMaterials)
  i634.disableRenderingOnOverride = !!i635[19]
  i634.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i635[20], i634.translator)
  i634.updateTiming = i635[21]
  var i637 = i635[22]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( i637[i + 0] );
  }
  i634.separatorSlotNames = i636
  return i634
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i638 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i639 = data
  var i641 = i639[0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.materialsMaskDisabled = i640
  var i643 = i639[1]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i638.materialsInsideMask = i642
  var i645 = i639[2]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i638.materialsOutsideMask = i644
  return i638
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i646 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i647 = data
  i646.autoReset = !!i647[0]
  i646.useCustomMixMode = !!i647[1]
  var i649 = i647[2]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( i649[i + 0] );
  }
  i646.layerMixModes = i648
  var i651 = i647[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.layerBlendModes = i650
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'sharedMesh')
  return i658
}

Deserializers["player"] = function (request, data, root) {
  var i660 = root || request.c( 'player' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'gm')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i663 = data
  i662.ambientIntensity = i663[0]
  i662.reflectionIntensity = i663[1]
  i662.ambientMode = i663[2]
  i662.ambientLight = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.ambientSkyColor = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  i662.ambientGroundColor = new pc.Color(i663[11], i663[12], i663[13], i663[14])
  i662.ambientEquatorColor = new pc.Color(i663[15], i663[16], i663[17], i663[18])
  i662.fogColor = new pc.Color(i663[19], i663[20], i663[21], i663[22])
  i662.fogEndDistance = i663[23]
  i662.fogStartDistance = i663[24]
  i662.fogDensity = i663[25]
  i662.fog = !!i663[26]
  request.r(i663[27], i663[28], 0, i662, 'skybox')
  i662.fogMode = i663[29]
  var i665 = i663[30]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i665[i + 0]) );
  }
  i662.lightmaps = i664
  i662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i663[31], i662.lightProbes)
  i662.lightmapsMode = i663[32]
  i662.mixedBakeMode = i663[33]
  i662.environmentLightingMode = i663[34]
  i662.ambientProbe = new pc.SphericalHarmonicsL2(i663[35])
  i662.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i663[36])
  i662.useReferenceAmbientProbe = !!i663[37]
  request.r(i663[38], i663[39], 0, i662, 'customReflection')
  request.r(i663[40], i663[41], 0, i662, 'defaultReflection')
  i662.defaultReflectionMode = i663[42]
  i662.defaultReflectionResolution = i663[43]
  i662.sunLightObjectId = i663[44]
  i662.pixelLightCount = i663[45]
  i662.defaultReflectionHDR = !!i663[46]
  i662.hasLightDataAsset = !!i663[47]
  i662.hasManualGenerate = !!i663[48]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'lightmapColor')
  request.r(i669[2], i669[3], 0, i668, 'lightmapDirection')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i670 = root || new UnityEngine.LightProbes()
  var i671 = data
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i681[i + 0]));
  }
  i678.ShaderCompilationErrors = i680
  i678.name = i679[1]
  i678.guid = i679[2]
  var i683 = i679[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i678.shaderDefinedKeywords = i682
  var i685 = i679[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i685[i + 0]) );
  }
  i678.passes = i684
  var i687 = i679[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i687[i + 0]) );
  }
  i678.usePasses = i686
  var i689 = i679[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i689[i + 0]) );
  }
  i678.defaultParameterValues = i688
  request.r(i679[7], i679[8], 0, i678, 'unityFallbackShader')
  i678.readDepth = !!i679[9]
  i678.isCreatedByShaderGraph = !!i679[10]
  i678.usedBatchUniforms = i679[11]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i693 = data
  i692.shaderName = i693[0]
  i692.errorMessage = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i696 = root || new pc.UnityShaderPass()
  var i697 = data
  i696.id = i697[0]
  i696.subShaderIndex = i697[1]
  i696.name = i697[2]
  i696.passType = i697[3]
  i696.grabPassTextureName = i697[4]
  i696.usePass = !!i697[5]
  i696.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[6], i696.zTest)
  i696.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[7], i696.zWrite)
  i696.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[8], i696.culling)
  i696.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[9], i696.blending)
  i696.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[10], i696.alphaBlending)
  i696.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[11], i696.colorWriteMask)
  i696.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[12], i696.offsetUnits)
  i696.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[13], i696.offsetFactor)
  i696.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[14], i696.stencilRef)
  i696.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[15], i696.stencilReadMask)
  i696.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[16], i696.stencilWriteMask)
  i696.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[17], i696.stencilOp)
  i696.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[18], i696.stencilOpFront)
  i696.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[19], i696.stencilOpBack)
  var i699 = i697[20]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i699[i + 0]) );
  }
  i696.tags = i698
  var i701 = i697[21]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.passDefinedKeywords = i700
  var i703 = i697[22]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i703[i + 0]) );
  }
  i696.passDefinedKeywordGroups = i702
  var i705 = i697[23]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i696.variants = i704
  var i707 = i697[24]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i696.excludedVariants = i706
  i696.hasDepthReader = !!i697[25]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i709 = data
  i708.val = i709[0]
  i708.name = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i711 = data
  i710.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.src)
  i710.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.dst)
  i710.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.op)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i713 = data
  i712.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.pass)
  i712.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.fail)
  i712.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.zFail)
  i712.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[3], i712.comp)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i720.keywords = i722
  i720.hasDiscard = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i727 = data
  i726.passId = i727[0]
  i726.subShaderIndex = i727[1]
  var i729 = i727[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i726.keywords = i728
  i726.vertexProgram = i727[3]
  i726.fragmentProgram = i727[4]
  i726.readDepth = !!i727[5]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'shader')
  i732.pass = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i737 = data
  i736.name = i737[0]
  i736.type = i737[1]
  i736.value = new pc.Vec4( i737[2], i737[3], i737[4], i737[5] )
  i736.textureValue = i737[6]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'texture')
  i738.aabb = i739[3]
  i738.vertices = i739[4]
  i738.triangles = i739[5]
  i738.textureRect = UnityEngine.Rect.MinMaxRect(i739[6], i739[7], i739[8], i739[9])
  i738.packedRect = UnityEngine.Rect.MinMaxRect(i739[10], i739[11], i739[12], i739[13])
  i738.border = new pc.Vec4( i739[14], i739[15], i739[16], i739[17] )
  i738.transparency = i739[18]
  i738.bounds = i739[19]
  i738.pixelsPerUnit = i739[20]
  i738.textureWidth = i739[21]
  i738.textureHeight = i739[22]
  i738.nativeSize = new pc.Vec2( i739[23], i739[24] )
  i738.pivot = new pc.Vec2( i739[25], i739[26] )
  i738.textureRectOffset = new pc.Vec2( i739[27], i739[28] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i741 = data
  i740.name = i741[0]
  i740.wrapMode = i741[1]
  i740.isLooping = !!i741[2]
  i740.length = i741[3]
  var i743 = i741[4]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i743[i + 0]) );
  }
  i740.curves = i742
  var i745 = i741[5]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i745[i + 0]) );
  }
  i740.events = i744
  i740.halfPrecision = !!i741[6]
  i740.frameRate = i741[7]
  i740.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i741[8], i740.localBounds)
  i740.hasMuscleCurves = !!i741[9]
  var i747 = i741[10]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i740.clipMuscleConstant = i746
  i740.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i741[11], i740.clipBindingConstant)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i751 = data
  i750.path = i751[0]
  i750.componentType = i751[1]
  i750.property = i751[2]
  i750.keys = i751[3]
  var i753 = i751[4]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i753[i + 0]) );
  }
  i750.objectReferenceKeys = i752
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i757 = data
  i756.time = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'value')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i761 = data
  i760.functionName = i761[0]
  i760.floatParameter = i761[1]
  i760.intParameter = i761[2]
  i760.stringParameter = i761[3]
  request.r(i761[4], i761[5], 0, i760, 'objectReferenceParameter')
  i760.time = i761[6]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i763 = data
  i762.center = new pc.Vec3( i763[0], i763[1], i763[2] )
  i762.extends = new pc.Vec3( i763[3], i763[4], i763[5] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i767 = data
  var i769 = i767[0]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i766.genericBindings = i768
  var i771 = i767[1]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i766.pptrCurveMapping = i770
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i773 = data
  i772.name = i773[0]
  i772.ascent = i773[1]
  i772.originalLineHeight = i773[2]
  i772.fontSize = i773[3]
  var i775 = i773[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i775[i + 0]) );
  }
  i772.characterInfo = i774
  request.r(i773[5], i773[6], 0, i772, 'texture')
  i772.originalFontSize = i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i779 = data
  i778.index = i779[0]
  i778.advance = i779[1]
  i778.bearing = i779[2]
  i778.glyphWidth = i779[3]
  i778.glyphHeight = i779[4]
  i778.minX = i779[5]
  i778.maxX = i779[6]
  i778.minY = i779[7]
  i778.maxY = i779[8]
  i778.uvBottomLeftX = i779[9]
  i778.uvBottomLeftY = i779[10]
  i778.uvBottomRightX = i779[11]
  i778.uvBottomRightY = i779[12]
  i778.uvTopLeftX = i779[13]
  i778.uvTopLeftY = i779[14]
  i778.uvTopRightX = i779[15]
  i778.uvTopRightY = i779[16]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i781 = data
  i780.name = i781[0]
  var i783 = i781[1]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i783[i + 0]) );
  }
  i780.states = i782
  var i785 = i781[2]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i785[i + 0]) );
  }
  i780.layers = i784
  var i787 = i781[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i787[i + 0]) );
  }
  i780.parameters = i786
  i780.animationClips = i781[4]
  i780.HasSubStateMachines = !!i781[5]
  i780.avatarUnsupported = i781[6]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i791 = data
  i790.cycleOffset = i791[0]
  i790.cycleOffsetParameter = i791[1]
  i790.cycleOffsetParameterActive = !!i791[2]
  i790.mirror = !!i791[3]
  i790.mirrorParameter = i791[4]
  i790.mirrorParameterActive = !!i791[5]
  i790.motionId = i791[6]
  i790.nameHash = i791[7]
  i790.fullPathHash = i791[8]
  i790.speed = i791[9]
  i790.speedParameter = i791[10]
  i790.speedParameterActive = !!i791[11]
  i790.tag = i791[12]
  i790.name = i791[13]
  i790.layer = i791[14]
  i790.writeDefaultValues = !!i791[15]
  var i793 = i791[16]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i793[i + 0]) );
  }
  i790.transitions = i792
  var i795 = i791[17]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i790.behaviours = i794
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i799 = data
  i798.fullPath = i799[0]
  i798.canTransitionToSelf = !!i799[1]
  i798.duration = i799[2]
  i798.exitTime = i799[3]
  i798.hasExitTime = !!i799[4]
  i798.hasFixedDuration = !!i799[5]
  i798.interruptionSource = i799[6]
  i798.offset = i799[7]
  i798.orderedInterruption = !!i799[8]
  i798.destinationStateNameHash = i799[9]
  i798.destinationStateMachineId = i799[10]
  i798.isExit = !!i799[11]
  i798.mute = !!i799[12]
  i798.solo = !!i799[13]
  var i801 = i799[14]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i801[i + 0]) );
  }
  i798.conditions = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i807 = data
  i806.blendingMode = i807[0]
  i806.defaultWeight = i807[1]
  i806.name = i807[2]
  i806.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i807[3], i806.stateMachine)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i809 = data
  i808.id = i809[0]
  i808.defaultStateNameHash = i809[1]
  var i811 = i809[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i811[i + 0]) );
  }
  i808.entryTransitions = i810
  var i813 = i809[3]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i813[i + 0]) );
  }
  i808.anyStateTransitions = i812
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i817 = data
  i816.destinationStateNameHash = i817[0]
  i816.destinationStateMachineId = i817[1]
  i816.isExit = !!i817[2]
  i816.mute = !!i817[3]
  i816.solo = !!i817[4]
  var i819 = i817[5]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i819[i + 0]) );
  }
  i816.conditions = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i823 = data
  i822.defaultBool = !!i823[0]
  i822.defaultFloat = i823[1]
  i822.defaultInt = i823[2]
  i822.name = i823[3]
  i822.nameHash = i823[4]
  i822.type = i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i827 = data
  i826.mode = i827[0]
  i826.parameter = i827[1]
  i826.threshold = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i829 = data
  i828.name = i829[0]
  i828.bytes64 = i829[1]
  i828.data = i829[2]
  return i828
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i830 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i831 = data
  var i833 = i831[0]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.atlasAssets = i832
  i830.scale = i831[1]
  request.r(i831[2], i831[3], 0, i830, 'skeletonJSON')
  i830.isUpgradingBlendModeMaterials = !!i831[4]
  i830.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i831[5], i830.blendModeMaterials)
  var i835 = i831[6]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 1, i834, '')
  }
  i830.skeletonDataModifiers = i834
  var i837 = i831[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i830.fromAnimation = i836
  var i839 = i831[8]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i830.toAnimation = i838
  i830.duration = i831[9]
  i830.defaultMix = i831[10]
  request.r(i831[11], i831[12], 0, i830, 'controller')
  return i830
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i842 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i843 = data
  i842.applyAdditiveMaterial = !!i843[0]
  var i845 = i843[1]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i845[i + 0]));
  }
  i842.additiveMaterials = i844
  var i847 = i843[2]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i847[i + 0]));
  }
  i842.multiplyMaterials = i846
  var i849 = i843[3]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i849[i + 0]));
  }
  i842.screenMaterials = i848
  i842.requiresBlendModeMaterials = !!i843[4]
  return i842
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i852 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i853 = data
  i852.pageName = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'material')
  return i852
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i856 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'atlasFile')
  var i859 = i857[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.materials = i858
  i856.textureLoadingMode = i857[3]
  request.r(i857[4], i857[5], 0, i856, 'onDemandTextureLoader')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i861 = data
  var i863 = i861[0]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i863[i + 0]) );
  }
  i860.files = i862
  i860.componentToPrefabIds = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i867 = data
  i866.path = i867[0]
  request.r(i867[1], i867[2], 0, i866, 'unityObject')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i871[i + 0]) );
  }
  i868.scriptsExecutionOrder = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i873[i + 0]) );
  }
  i868.sortingLayers = i872
  var i875 = i869[2]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i875[i + 0]) );
  }
  i868.cullingLayers = i874
  i868.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i869[3], i868.timeSettings)
  i868.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i869[4], i868.physicsSettings)
  i868.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i869[5], i868.physics2DSettings)
  i868.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i869[6], i868.qualitySettings)
  i868.enableRealtimeShadows = !!i869[7]
  i868.enableAutoInstancing = !!i869[8]
  i868.enableDynamicBatching = !!i869[9]
  i868.lightmapEncodingQuality = i869[10]
  i868.desiredColorSpace = i869[11]
  var i877 = i869[12]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i868.allTags = i876
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i881 = data
  i880.name = i881[0]
  i880.value = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i885 = data
  i884.id = i885[0]
  i884.name = i885[1]
  i884.value = i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i889 = data
  i888.id = i889[0]
  i888.name = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i891 = data
  i890.fixedDeltaTime = i891[0]
  i890.maximumDeltaTime = i891[1]
  i890.timeScale = i891[2]
  i890.maximumParticleTimestep = i891[3]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i893 = data
  i892.gravity = new pc.Vec3( i893[0], i893[1], i893[2] )
  i892.defaultSolverIterations = i893[3]
  i892.bounceThreshold = i893[4]
  i892.autoSyncTransforms = !!i893[5]
  i892.autoSimulation = !!i893[6]
  var i895 = i893[7]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i895[i + 0]) );
  }
  i892.collisionMatrix = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i899 = data
  i898.enabled = !!i899[0]
  i898.layerId = i899[1]
  i898.otherLayerId = i899[2]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'material')
  i900.gravity = new pc.Vec2( i901[2], i901[3] )
  i900.positionIterations = i901[4]
  i900.velocityIterations = i901[5]
  i900.velocityThreshold = i901[6]
  i900.maxLinearCorrection = i901[7]
  i900.maxAngularCorrection = i901[8]
  i900.maxTranslationSpeed = i901[9]
  i900.maxRotationSpeed = i901[10]
  i900.baumgarteScale = i901[11]
  i900.baumgarteTOIScale = i901[12]
  i900.timeToSleep = i901[13]
  i900.linearSleepTolerance = i901[14]
  i900.angularSleepTolerance = i901[15]
  i900.defaultContactOffset = i901[16]
  i900.autoSimulation = !!i901[17]
  i900.queriesHitTriggers = !!i901[18]
  i900.queriesStartInColliders = !!i901[19]
  i900.callbacksOnDisable = !!i901[20]
  i900.reuseCollisionCallbacks = !!i901[21]
  i900.autoSyncTransforms = !!i901[22]
  var i903 = i901[23]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i903[i + 0]) );
  }
  i900.collisionMatrix = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i907 = data
  i906.enabled = !!i907[0]
  i906.layerId = i907[1]
  i906.otherLayerId = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i911[i + 0]) );
  }
  i908.qualityLevels = i910
  var i913 = i909[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i908.names = i912
  i908.shadows = i909[2]
  i908.anisotropicFiltering = i909[3]
  i908.antiAliasing = i909[4]
  i908.lodBias = i909[5]
  i908.shadowCascades = i909[6]
  i908.shadowDistance = i909[7]
  i908.shadowmaskMode = i909[8]
  i908.shadowProjection = i909[9]
  i908.shadowResolution = i909[10]
  i908.softParticles = !!i909[11]
  i908.softVegetation = !!i909[12]
  i908.activeColorSpace = i909[13]
  i908.desiredColorSpace = i909[14]
  i908.masterTextureLimit = i909[15]
  i908.maxQueuedFrames = i909[16]
  i908.particleRaycastBudget = i909[17]
  i908.pixelLightCount = i909[18]
  i908.realtimeReflectionProbes = !!i909[19]
  i908.shadowCascade2Split = i909[20]
  i908.shadowCascade4Split = new pc.Vec3( i909[21], i909[22], i909[23] )
  i908.streamingMipmapsActive = !!i909[24]
  i908.vSyncCount = i909[25]
  i908.asyncUploadBufferSize = i909[26]
  i908.asyncUploadTimeSlice = i909[27]
  i908.billboardsFaceCameraPosition = !!i909[28]
  i908.shadowNearPlaneOffset = i909[29]
  i908.streamingMipmapsMemoryBudget = i909[30]
  i908.maximumLODLevel = i909[31]
  i908.streamingMipmapsAddAllCameras = !!i909[32]
  i908.streamingMipmapsMaxLevelReduction = i909[33]
  i908.streamingMipmapsRenderersPerFrame = i909[34]
  i908.resolutionScalingFixedDPIFactor = i909[35]
  i908.streamingMipmapsMaxFileIORequests = i909[36]
  i908.currentQualityLevel = i909[37]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i919 = data
  i918.weight = i919[0]
  i918.vertices = i919[1]
  i918.normals = i919[2]
  i918.tangents = i919[3]
  return i918
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[29],"72":[73],"74":[73],"6":[5],"75":[76],"77":[5],"78":[11,5],"79":[29],"80":[11,5],"30":[26,29],"81":[29],"82":[29,32],"83":[49],"84":[57],"85":[76],"86":[87],"88":[5],"89":[29,5],"90":[5,11],"91":[5],"92":[11,5],"93":[29],"94":[11,5],"95":[5],"96":[97],"98":[5],"99":[5],"9":[6],"12":[11,5],"100":[5],"8":[6],"101":[5],"10":[5],"102":[5],"103":[5],"104":[5],"105":[5],"106":[5],"107":[5],"108":[5],"109":[11,5],"110":[5],"111":[5],"112":[5],"18":[5],"19":[11,5],"113":[5],"114":[21],"115":[21],"22":[21],"116":[21],"117":[3],"118":[3],"119":[97],"120":[97]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.GridLayoutGroup","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","test","UnityEngine.Sprite","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","enemy","UnityEngine.MeshRenderer","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","player","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.5.1";

Deserializers.lunaSHA = "d9158f5aa4694eeae25de2b11b9b9db4364983ec";

Deserializers.creativeName = "test";

Deserializers.lunaAppID = "21917";

Deserializers.projectId = "d08185603789a054f9d0715e979963e1";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1718";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3539";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.My-project--1-";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "74d82014-a066-494a-9add-17207eb53376";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

