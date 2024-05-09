var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.JointSpring' )
  var i1381 = data
  i1380.spring = i1381[0]
  i1380.damper = i1381[1]
  i1380.targetPosition = i1381[2]
  return i1380
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.JointMotor' )
  var i1383 = data
  i1382.m_TargetVelocity = i1383[0]
  i1382.m_Force = i1383[1]
  i1382.m_FreeSpin = i1383[2]
  return i1382
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.JointLimits' )
  var i1385 = data
  i1384.m_Min = i1385[0]
  i1384.m_Max = i1385[1]
  i1384.m_Bounciness = i1385[2]
  i1384.m_BounceMinVelocity = i1385[3]
  i1384.m_ContactDistance = i1385[4]
  i1384.minBounce = i1385[5]
  i1384.maxBounce = i1385[6]
  return i1384
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.JointDrive' )
  var i1387 = data
  i1386.m_PositionSpring = i1387[0]
  i1386.m_PositionDamper = i1387[1]
  i1386.m_MaximumForce = i1387[2]
  return i1386
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1389 = data
  i1388.m_Spring = i1389[0]
  i1388.m_Damper = i1389[1]
  return i1388
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1391 = data
  i1390.m_Limit = i1391[0]
  i1390.m_Bounciness = i1391[1]
  i1390.m_ContactDistance = i1391[2]
  return i1390
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1393 = data
  i1392.m_ExtremumSlip = i1393[0]
  i1392.m_ExtremumValue = i1393[1]
  i1392.m_AsymptoteSlip = i1393[2]
  i1392.m_AsymptoteValue = i1393[3]
  i1392.m_Stiffness = i1393[4]
  return i1392
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1395 = data
  i1394.m_LowerAngle = i1395[0]
  i1394.m_UpperAngle = i1395[1]
  return i1394
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1397 = data
  i1396.m_MotorSpeed = i1397[0]
  i1396.m_MaximumMotorTorque = i1397[1]
  return i1396
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1399 = data
  i1398.m_DampingRatio = i1399[0]
  i1398.m_Frequency = i1399[1]
  i1398.m_Angle = i1399[2]
  return i1398
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1401 = data
  i1400.m_LowerTranslation = i1401[0]
  i1400.m_UpperTranslation = i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1402 = root || new pc.UnityMaterial()
  var i1403 = data
  i1402.name = i1403[0]
  request.r(i1403[1], i1403[2], 0, i1402, 'shader')
  i1402.renderQueue = i1403[3]
  i1402.enableInstancing = !!i1403[4]
  var i1405 = i1403[5]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1405[i + 0]) );
  }
  i1402.floatParameters = i1404
  var i1407 = i1403[6]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1407[i + 0]) );
  }
  i1402.colorParameters = i1406
  var i1409 = i1403[7]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1409[i + 0]) );
  }
  i1402.vectorParameters = i1408
  var i1411 = i1403[8]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1411[i + 0]) );
  }
  i1402.textureParameters = i1410
  var i1413 = i1403[9]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1413[i + 0]) );
  }
  i1402.materialFlags = i1412
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.value = i1417[1]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1421 = data
  i1420.name = i1421[0]
  i1420.value = new pc.Color(i1421[1], i1421[2], i1421[3], i1421[4])
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1425 = data
  i1424.name = i1425[0]
  i1424.value = new pc.Vec4( i1425[1], i1425[2], i1425[3], i1425[4] )
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1429 = data
  i1428.name = i1429[0]
  request.r(i1429[1], i1429[2], 0, i1428, 'value')
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.enabled = !!i1433[1]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1435 = data
  i1434.name = i1435[0]
  i1434.width = i1435[1]
  i1434.height = i1435[2]
  i1434.mipmapCount = i1435[3]
  i1434.anisoLevel = i1435[4]
  i1434.filterMode = i1435[5]
  i1434.hdr = !!i1435[6]
  i1434.format = i1435[7]
  i1434.wrapMode = i1435[8]
  i1434.alphaIsTransparency = !!i1435[9]
  i1434.alphaSource = i1435[10]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1437 = data
  i1436.name = i1437[0]
  i1436.halfPrecision = !!i1437[1]
  i1436.vertexCount = i1437[2]
  i1436.aabb = i1437[3]
  var i1439 = i1437[4]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( !!i1439[i + 0] );
  }
  i1436.streams = i1438
  i1436.vertices = i1437[5]
  var i1441 = i1437[6]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1441[i + 0]) );
  }
  i1436.subMeshes = i1440
  var i1443 = i1437[7]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 16) {
    i1442.push( new pc.Mat4().setData(i1443[i + 0], i1443[i + 1], i1443[i + 2], i1443[i + 3],  i1443[i + 4], i1443[i + 5], i1443[i + 6], i1443[i + 7],  i1443[i + 8], i1443[i + 9], i1443[i + 10], i1443[i + 11],  i1443[i + 12], i1443[i + 13], i1443[i + 14], i1443[i + 15]) );
  }
  i1436.bindposes = i1442
  var i1445 = i1437[8]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1445[i + 0]) );
  }
  i1436.blendShapes = i1444
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1451 = data
  i1450.triangles = i1451[0]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1457 = data
  i1456.name = i1457[0]
  var i1459 = i1457[1]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1459[i + 0]) );
  }
  i1456.frames = i1458
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.atlasId = i1461[1]
  i1460.mipmapCount = i1461[2]
  i1460.hdr = !!i1461[3]
  i1460.size = i1461[4]
  i1460.anisoLevel = i1461[5]
  i1460.filterMode = i1461[6]
  i1460.wrapMode = i1461[7]
  var i1463 = i1461[8]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 4) {
    i1462.push( UnityEngine.Rect.MinMaxRect(i1463[i + 0], i1463[i + 1], i1463[i + 2], i1463[i + 3]) );
  }
  i1460.rects = i1462
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.index = i1467[1]
  i1466.startup = !!i1467[2]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1469 = data
  i1468.position = new pc.Vec3( i1469[0], i1469[1], i1469[2] )
  i1468.scale = new pc.Vec3( i1469[3], i1469[4], i1469[5] )
  i1468.rotation = new pc.Quat(i1469[6], i1469[7], i1469[8], i1469[9])
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1471 = data
  i1470.enabled = !!i1471[0]
  i1470.aspect = i1471[1]
  i1470.orthographic = !!i1471[2]
  i1470.orthographicSize = i1471[3]
  i1470.backgroundColor = new pc.Color(i1471[4], i1471[5], i1471[6], i1471[7])
  i1470.nearClipPlane = i1471[8]
  i1470.farClipPlane = i1471[9]
  i1470.fieldOfView = i1471[10]
  i1470.depth = i1471[11]
  i1470.clearFlags = i1471[12]
  i1470.cullingMask = i1471[13]
  i1470.rect = i1471[14]
  request.r(i1471[15], i1471[16], 0, i1470, 'targetTexture')
  i1470.usePhysicalProperties = !!i1471[17]
  i1470.focalLength = i1471[18]
  i1470.sensorSize = new pc.Vec2( i1471[19], i1471[20] )
  i1470.lensShift = new pc.Vec2( i1471[21], i1471[22] )
  i1470.gateFit = i1471[23]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.tagId = i1473[1]
  i1472.enabled = !!i1473[2]
  i1472.isStatic = !!i1473[3]
  i1472.layer = i1473[4]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1475 = data
  i1474.pivot = new pc.Vec2( i1475[0], i1475[1] )
  i1474.anchorMin = new pc.Vec2( i1475[2], i1475[3] )
  i1474.anchorMax = new pc.Vec2( i1475[4], i1475[5] )
  i1474.sizeDelta = new pc.Vec2( i1475[6], i1475[7] )
  i1474.anchoredPosition3D = new pc.Vec3( i1475[8], i1475[9], i1475[10] )
  i1474.rotation = new pc.Quat(i1475[11], i1475[12], i1475[13], i1475[14])
  i1474.scale = new pc.Vec3( i1475[15], i1475[16], i1475[17] )
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1477 = data
  i1476.enabled = !!i1477[0]
  i1476.planeDistance = i1477[1]
  i1476.referencePixelsPerUnit = i1477[2]
  i1476.isFallbackOverlay = !!i1477[3]
  i1476.renderMode = i1477[4]
  i1476.renderOrder = i1477[5]
  i1476.sortingLayerName = i1477[6]
  i1476.sortingOrder = i1477[7]
  i1476.scaleFactor = i1477[8]
  request.r(i1477[9], i1477[10], 0, i1476, 'worldCamera')
  i1476.overrideSorting = !!i1477[11]
  i1476.pixelPerfect = !!i1477[12]
  i1476.targetDisplay = i1477[13]
  i1476.overridePixelPerfect = !!i1477[14]
  return i1476
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1479 = data
  i1478.m_UiScaleMode = i1479[0]
  i1478.m_ReferencePixelsPerUnit = i1479[1]
  i1478.m_ScaleFactor = i1479[2]
  i1478.m_ReferenceResolution = new pc.Vec2( i1479[3], i1479[4] )
  i1478.m_ScreenMatchMode = i1479[5]
  i1478.m_MatchWidthOrHeight = i1479[6]
  i1478.m_PhysicalUnit = i1479[7]
  i1478.m_FallbackScreenDPI = i1479[8]
  i1478.m_DefaultSpriteDPI = i1479[9]
  i1478.m_DynamicPixelsPerUnit = i1479[10]
  i1478.m_PresetInfoIsWorld = !!i1479[11]
  return i1478
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1481 = data
  i1480.m_IgnoreReversedGraphics = !!i1481[0]
  i1480.m_BlockingObjects = i1481[1]
  i1480.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1481[2] )
  return i1480
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1483 = data
  i1482.m_StartCorner = i1483[0]
  i1482.m_StartAxis = i1483[1]
  i1482.m_CellSize = new pc.Vec2( i1483[2], i1483[3] )
  i1482.m_Spacing = new pc.Vec2( i1483[4], i1483[5] )
  i1482.m_Constraint = i1483[6]
  i1482.m_ConstraintCount = i1483[7]
  i1482.m_Padding = UnityEngine.RectOffset.FromPaddings(i1483[8], i1483[9], i1483[10], i1483[11])
  i1482.m_ChildAlignment = i1483[12]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1485 = data
  i1484.cullTransparentMesh = !!i1485[0]
  return i1484
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.UI.Image' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'm_Sprite')
  i1486.m_Type = i1487[2]
  i1486.m_PreserveAspect = !!i1487[3]
  i1486.m_FillCenter = !!i1487[4]
  i1486.m_FillMethod = i1487[5]
  i1486.m_FillAmount = i1487[6]
  i1486.m_FillClockwise = !!i1487[7]
  i1486.m_FillOrigin = i1487[8]
  i1486.m_UseSpriteMesh = !!i1487[9]
  i1486.m_PixelsPerUnitMultiplier = i1487[10]
  request.r(i1487[11], i1487[12], 0, i1486, 'm_Material')
  i1486.m_Maskable = !!i1487[13]
  i1486.m_Color = new pc.Color(i1487[14], i1487[15], i1487[16], i1487[17])
  i1486.m_RaycastTarget = !!i1487[18]
  i1486.m_RaycastPadding = new pc.Vec4( i1487[19], i1487[20], i1487[21], i1487[22] )
  return i1486
}

Deserializers["test"] = function (request, data, root) {
  var i1488 = root || request.c( 'test' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'img')
  request.r(i1489[2], i1489[3], 0, i1488, 'sprite')
  i1488.x = i1489[4]
  request.r(i1489[5], i1489[6], 0, i1488, 'gm')
  return i1488
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.UI.Button' )
  var i1491 = data
  i1490.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1491[0], i1490.m_OnClick)
  i1490.m_Navigation = request.d('UnityEngine.UI.Navigation', i1491[1], i1490.m_Navigation)
  i1490.m_Transition = i1491[2]
  i1490.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1491[3], i1490.m_Colors)
  i1490.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1491[4], i1490.m_SpriteState)
  i1490.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1491[5], i1490.m_AnimationTriggers)
  i1490.m_Interactable = !!i1491[6]
  request.r(i1491[7], i1491[8], 0, i1490, 'm_TargetGraphic')
  return i1490
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1493 = data
  i1492.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1493[0], i1492.m_PersistentCalls)
  return i1492
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('UnityEngine.Events.PersistentCall', i1497[i + 0]));
  }
  i1494.m_Calls = i1496
  return i1494
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'm_Target')
  i1500.m_TargetAssemblyTypeName = i1501[2]
  i1500.m_MethodName = i1501[3]
  i1500.m_Mode = i1501[4]
  i1500.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1501[5], i1500.m_Arguments)
  i1500.m_CallState = i1501[6]
  return i1500
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'm_ObjectArgument')
  i1502.m_ObjectArgumentAssemblyTypeName = i1503[2]
  i1502.m_IntArgument = i1503[3]
  i1502.m_FloatArgument = i1503[4]
  i1502.m_StringArgument = i1503[5]
  i1502.m_BoolArgument = !!i1503[6]
  return i1502
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1505 = data
  i1504.m_Mode = i1505[0]
  i1504.m_WrapAround = !!i1505[1]
  request.r(i1505[2], i1505[3], 0, i1504, 'm_SelectOnUp')
  request.r(i1505[4], i1505[5], 0, i1504, 'm_SelectOnDown')
  request.r(i1505[6], i1505[7], 0, i1504, 'm_SelectOnLeft')
  request.r(i1505[8], i1505[9], 0, i1504, 'm_SelectOnRight')
  return i1504
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1507 = data
  i1506.m_NormalColor = new pc.Color(i1507[0], i1507[1], i1507[2], i1507[3])
  i1506.m_HighlightedColor = new pc.Color(i1507[4], i1507[5], i1507[6], i1507[7])
  i1506.m_PressedColor = new pc.Color(i1507[8], i1507[9], i1507[10], i1507[11])
  i1506.m_SelectedColor = new pc.Color(i1507[12], i1507[13], i1507[14], i1507[15])
  i1506.m_DisabledColor = new pc.Color(i1507[16], i1507[17], i1507[18], i1507[19])
  i1506.m_ColorMultiplier = i1507[20]
  i1506.m_FadeDuration = i1507[21]
  return i1506
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1509 = data
  request.r(i1509[0], i1509[1], 0, i1508, 'm_HighlightedSprite')
  request.r(i1509[2], i1509[3], 0, i1508, 'm_PressedSprite')
  request.r(i1509[4], i1509[5], 0, i1508, 'm_SelectedSprite')
  request.r(i1509[6], i1509[7], 0, i1508, 'm_DisabledSprite')
  return i1508
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1511 = data
  i1510.m_NormalTrigger = i1511[0]
  i1510.m_HighlightedTrigger = i1511[1]
  i1510.m_PressedTrigger = i1511[2]
  i1510.m_SelectedTrigger = i1511[3]
  i1510.m_DisabledTrigger = i1511[4]
  return i1510
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1513 = data
  request.r(i1513[0], i1513[1], 0, i1512, 'm_FillRect')
  request.r(i1513[2], i1513[3], 0, i1512, 'm_HandleRect')
  i1512.m_Direction = i1513[4]
  i1512.m_MinValue = i1513[5]
  i1512.m_MaxValue = i1513[6]
  i1512.m_WholeNumbers = !!i1513[7]
  i1512.m_Value = i1513[8]
  i1512.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1513[9], i1512.m_OnValueChanged)
  i1512.m_Navigation = request.d('UnityEngine.UI.Navigation', i1513[10], i1512.m_Navigation)
  i1512.m_Transition = i1513[11]
  i1512.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1513[12], i1512.m_Colors)
  i1512.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1513[13], i1512.m_SpriteState)
  i1512.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1513[14], i1512.m_AnimationTriggers)
  i1512.m_Interactable = !!i1513[15]
  request.r(i1513[16], i1513[17], 0, i1512, 'm_TargetGraphic')
  return i1512
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1515 = data
  i1514.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1515[0], i1514.m_PersistentCalls)
  return i1514
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.UI.Text' )
  var i1517 = data
  i1516.m_FontData = request.d('UnityEngine.UI.FontData', i1517[0], i1516.m_FontData)
  i1516.m_Text = i1517[1]
  request.r(i1517[2], i1517[3], 0, i1516, 'm_Material')
  i1516.m_Maskable = !!i1517[4]
  i1516.m_Color = new pc.Color(i1517[5], i1517[6], i1517[7], i1517[8])
  i1516.m_RaycastTarget = !!i1517[9]
  i1516.m_RaycastPadding = new pc.Vec4( i1517[10], i1517[11], i1517[12], i1517[13] )
  return i1516
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_Font')
  i1518.m_FontSize = i1519[2]
  i1518.m_FontStyle = i1519[3]
  i1518.m_BestFit = !!i1519[4]
  i1518.m_MinSize = i1519[5]
  i1518.m_MaxSize = i1519[6]
  i1518.m_Alignment = i1519[7]
  i1518.m_AlignByGeometry = !!i1519[8]
  i1518.m_RichText = !!i1519[9]
  i1518.m_HorizontalOverflow = i1519[10]
  i1518.m_VerticalOverflow = i1519[11]
  i1518.m_LineSpacing = i1519[12]
  return i1518
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'm_FirstSelected')
  i1520.m_sendNavigationEvents = !!i1521[2]
  i1520.m_DragThreshold = i1521[3]
  return i1520
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1523 = data
  i1522.m_HorizontalAxis = i1523[0]
  i1522.m_VerticalAxis = i1523[1]
  i1522.m_SubmitButton = i1523[2]
  i1522.m_CancelButton = i1523[3]
  i1522.m_InputActionsPerSecond = i1523[4]
  i1522.m_RepeatDelay = i1523[5]
  i1522.m_ForceModuleActive = !!i1523[6]
  i1522.m_SendPointerHoverToParent = !!i1523[7]
  return i1522
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i1524 = root || request.c( 'gamemanager' )
  var i1525 = data
  var i1527 = i1525[0]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 2) {
  request.r(i1527[i + 0], i1527[i + 1], 2, i1526, '')
  }
  i1524.sprites = i1526
  var i1529 = i1525[1]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 2, i1528, '')
  }
  i1524.t = i1528
  var i1531 = i1525[2]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 2) {
  request.r(i1531[i + 0], i1531[i + 1], 2, i1530, '')
  }
  i1524.tests = i1530
  request.r(i1525[3], i1525[4], 0, i1524, 'playerHpbar')
  request.r(i1525[5], i1525[6], 0, i1524, 'dmg')
  i1524.hpMax = i1525[7]
  i1524.enemyPower = i1525[8]
  i1524.playerPower = i1525[9]
  i1524.playerPowerMul = i1525[10]
  request.r(i1525[11], i1525[12], 0, i1524, 'endCover')
  i1524.curPlayerPower = i1525[13]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1537 = data
  i1536.enabled = !!i1537[0]
  request.r(i1537[1], i1537[2], 0, i1536, 'sharedMaterial')
  var i1539 = i1537[3]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 2) {
  request.r(i1539[i + 0], i1539[i + 1], 2, i1538, '')
  }
  i1536.sharedMaterials = i1538
  i1536.receiveShadows = !!i1537[4]
  i1536.shadowCastingMode = i1537[5]
  i1536.sortingLayerID = i1537[6]
  i1536.sortingOrder = i1537[7]
  i1536.lightmapIndex = i1537[8]
  i1536.lightmapSceneIndex = i1537[9]
  i1536.lightmapScaleOffset = new pc.Vec4( i1537[10], i1537[11], i1537[12], i1537[13] )
  i1536.lightProbeUsage = i1537[14]
  i1536.reflectionProbeUsage = i1537[15]
  i1536.color = new pc.Color(i1537[16], i1537[17], i1537[18], i1537[19])
  request.r(i1537[20], i1537[21], 0, i1536, 'sprite')
  i1536.flipX = !!i1537[22]
  i1536.flipY = !!i1537[23]
  i1536.drawMode = i1537[24]
  i1536.size = new pc.Vec2( i1537[25], i1537[26] )
  i1536.tileMode = i1537[27]
  i1536.adaptiveModeThreshold = i1537[28]
  i1536.maskInteraction = i1537[29]
  i1536.spriteSortPoint = i1537[30]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'animatorController')
  request.r(i1543[2], i1543[3], 0, i1542, 'avatar')
  i1542.updateMode = i1543[4]
  i1542.hasTransformHierarchy = !!i1543[5]
  i1542.applyRootMotion = !!i1543[6]
  var i1545 = i1543[7]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 2) {
  request.r(i1545[i + 0], i1545[i + 1], 2, i1544, '')
  }
  i1542.humanBones = i1544
  i1542.enabled = !!i1543[8]
  return i1542
}

Deserializers["enemy"] = function (request, data, root) {
  var i1548 = root || request.c( 'enemy' )
  var i1549 = data
  request.r(i1549[0], i1549[1], 0, i1548, 'gm')
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1551 = data
  request.r(i1551[0], i1551[1], 0, i1550, 'additionalVertexStreams')
  i1550.enabled = !!i1551[2]
  request.r(i1551[3], i1551[4], 0, i1550, 'sharedMaterial')
  var i1553 = i1551[5]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 2, i1552, '')
  }
  i1550.sharedMaterials = i1552
  i1550.receiveShadows = !!i1551[6]
  i1550.shadowCastingMode = i1551[7]
  i1550.sortingLayerID = i1551[8]
  i1550.sortingOrder = i1551[9]
  i1550.lightmapIndex = i1551[10]
  i1550.lightmapSceneIndex = i1551[11]
  i1550.lightmapScaleOffset = new pc.Vec4( i1551[12], i1551[13], i1551[14], i1551[15] )
  i1550.lightProbeUsage = i1551[16]
  i1550.reflectionProbeUsage = i1551[17]
  return i1550
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i1554 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'skeletonDataAsset')
  i1554.initialSkinName = i1555[2]
  i1554.fixPrefabOverrideViaMeshFilter = i1555[3]
  i1554.initialFlipX = !!i1555[4]
  i1554.initialFlipY = !!i1555[5]
  i1554.updateWhenInvisible = i1555[6]
  i1554.zSpacing = i1555[7]
  i1554.useClipping = !!i1555[8]
  i1554.immutableTriangles = !!i1555[9]
  i1554.pmaVertexColors = !!i1555[10]
  i1554.clearStateOnDisable = !!i1555[11]
  i1554.tintBlack = !!i1555[12]
  i1554.singleSubmesh = !!i1555[13]
  i1554.fixDrawOrder = !!i1555[14]
  i1554.addNormals = !!i1555[15]
  i1554.calculateTangents = !!i1555[16]
  i1554.maskInteraction = i1555[17]
  i1554.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1555[18], i1554.maskMaterials)
  i1554.disableRenderingOnOverride = !!i1555[19]
  i1554.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i1555[20], i1554.translator)
  i1554.updateTiming = i1555[21]
  var i1557 = i1555[22]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( i1557[i + 0] );
  }
  i1554.separatorSlotNames = i1556
  return i1554
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1558 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1559 = data
  var i1561 = i1559[0]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 2) {
  request.r(i1561[i + 0], i1561[i + 1], 2, i1560, '')
  }
  i1558.materialsMaskDisabled = i1560
  var i1563 = i1559[1]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 2) {
  request.r(i1563[i + 0], i1563[i + 1], 2, i1562, '')
  }
  i1558.materialsInsideMask = i1562
  var i1565 = i1559[2]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 2) {
  request.r(i1565[i + 0], i1565[i + 1], 2, i1564, '')
  }
  i1558.materialsOutsideMask = i1564
  return i1558
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i1566 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i1567 = data
  i1566.autoReset = !!i1567[0]
  i1566.useCustomMixMode = !!i1567[1]
  var i1569 = i1567[2]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.push( i1569[i + 0] );
  }
  i1566.layerMixModes = i1568
  var i1571 = i1567[3]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( i1571[i + 0] );
  }
  i1566.layerBlendModes = i1570
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'sharedMesh')
  return i1578
}

Deserializers["player"] = function (request, data, root) {
  var i1580 = root || request.c( 'player' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'gm')
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1583 = data
  i1582.ambientIntensity = i1583[0]
  i1582.reflectionIntensity = i1583[1]
  i1582.ambientMode = i1583[2]
  i1582.ambientLight = new pc.Color(i1583[3], i1583[4], i1583[5], i1583[6])
  i1582.ambientSkyColor = new pc.Color(i1583[7], i1583[8], i1583[9], i1583[10])
  i1582.ambientGroundColor = new pc.Color(i1583[11], i1583[12], i1583[13], i1583[14])
  i1582.ambientEquatorColor = new pc.Color(i1583[15], i1583[16], i1583[17], i1583[18])
  i1582.fogColor = new pc.Color(i1583[19], i1583[20], i1583[21], i1583[22])
  i1582.fogEndDistance = i1583[23]
  i1582.fogStartDistance = i1583[24]
  i1582.fogDensity = i1583[25]
  i1582.fog = !!i1583[26]
  request.r(i1583[27], i1583[28], 0, i1582, 'skybox')
  i1582.fogMode = i1583[29]
  var i1585 = i1583[30]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1585[i + 0]) );
  }
  i1582.lightmaps = i1584
  i1582.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1583[31], i1582.lightProbes)
  i1582.lightmapsMode = i1583[32]
  i1582.mixedBakeMode = i1583[33]
  i1582.environmentLightingMode = i1583[34]
  i1582.ambientProbe = new pc.SphericalHarmonicsL2(i1583[35])
  i1582.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1583[36])
  i1582.useReferenceAmbientProbe = !!i1583[37]
  request.r(i1583[38], i1583[39], 0, i1582, 'customReflection')
  request.r(i1583[40], i1583[41], 0, i1582, 'defaultReflection')
  i1582.defaultReflectionMode = i1583[42]
  i1582.defaultReflectionResolution = i1583[43]
  i1582.sunLightObjectId = i1583[44]
  i1582.pixelLightCount = i1583[45]
  i1582.defaultReflectionHDR = !!i1583[46]
  i1582.hasLightDataAsset = !!i1583[47]
  i1582.hasManualGenerate = !!i1583[48]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'lightmapColor')
  request.r(i1589[2], i1589[3], 0, i1588, 'lightmapDirection')
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1590 = root || new UnityEngine.LightProbes()
  var i1591 = data
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1599 = data
  var i1601 = i1599[0]
  var i1600 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1601[i + 0]));
  }
  i1598.ShaderCompilationErrors = i1600
  i1598.name = i1599[1]
  i1598.guid = i1599[2]
  var i1603 = i1599[3]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( i1603[i + 0] );
  }
  i1598.shaderDefinedKeywords = i1602
  var i1605 = i1599[4]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1605[i + 0]) );
  }
  i1598.passes = i1604
  var i1607 = i1599[5]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1607[i + 0]) );
  }
  i1598.usePasses = i1606
  var i1609 = i1599[6]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1609[i + 0]) );
  }
  i1598.defaultParameterValues = i1608
  request.r(i1599[7], i1599[8], 0, i1598, 'unityFallbackShader')
  i1598.readDepth = !!i1599[9]
  i1598.isCreatedByShaderGraph = !!i1599[10]
  i1598.usedBatchUniforms = i1599[11]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1613 = data
  i1612.shaderName = i1613[0]
  i1612.errorMessage = i1613[1]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1616 = root || new pc.UnityShaderPass()
  var i1617 = data
  i1616.id = i1617[0]
  i1616.subShaderIndex = i1617[1]
  i1616.name = i1617[2]
  i1616.passType = i1617[3]
  i1616.grabPassTextureName = i1617[4]
  i1616.usePass = !!i1617[5]
  i1616.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[6], i1616.zTest)
  i1616.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[7], i1616.zWrite)
  i1616.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[8], i1616.culling)
  i1616.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1617[9], i1616.blending)
  i1616.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1617[10], i1616.alphaBlending)
  i1616.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[11], i1616.colorWriteMask)
  i1616.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[12], i1616.offsetUnits)
  i1616.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[13], i1616.offsetFactor)
  i1616.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[14], i1616.stencilRef)
  i1616.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[15], i1616.stencilReadMask)
  i1616.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[16], i1616.stencilWriteMask)
  i1616.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1617[17], i1616.stencilOp)
  i1616.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1617[18], i1616.stencilOpFront)
  i1616.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1617[19], i1616.stencilOpBack)
  var i1619 = i1617[20]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1619[i + 0]) );
  }
  i1616.tags = i1618
  var i1621 = i1617[21]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( i1621[i + 0] );
  }
  i1616.passDefinedKeywords = i1620
  var i1623 = i1617[22]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1623[i + 0]) );
  }
  i1616.passDefinedKeywordGroups = i1622
  var i1625 = i1617[23]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1625[i + 0]) );
  }
  i1616.variants = i1624
  var i1627 = i1617[24]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1627[i + 0]) );
  }
  i1616.excludedVariants = i1626
  i1616.hasDepthReader = !!i1617[25]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1629 = data
  i1628.val = i1629[0]
  i1628.name = i1629[1]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1631 = data
  i1630.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1631[0], i1630.src)
  i1630.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1631[1], i1630.dst)
  i1630.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1631[2], i1630.op)
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1633 = data
  i1632.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1633[0], i1632.pass)
  i1632.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1633[1], i1632.fail)
  i1632.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1633[2], i1632.zFail)
  i1632.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1633[3], i1632.comp)
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1637 = data
  i1636.name = i1637[0]
  i1636.value = i1637[1]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1641 = data
  var i1643 = i1641[0]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( i1643[i + 0] );
  }
  i1640.keywords = i1642
  i1640.hasDiscard = !!i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1647 = data
  i1646.passId = i1647[0]
  i1646.subShaderIndex = i1647[1]
  var i1649 = i1647[2]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( i1649[i + 0] );
  }
  i1646.keywords = i1648
  i1646.vertexProgram = i1647[3]
  i1646.fragmentProgram = i1647[4]
  i1646.readDepth = !!i1647[5]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'shader')
  i1652.pass = i1653[2]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.type = i1657[1]
  i1656.value = new pc.Vec4( i1657[2], i1657[3], i1657[4], i1657[5] )
  i1656.textureValue = i1657[6]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1659 = data
  i1658.name = i1659[0]
  request.r(i1659[1], i1659[2], 0, i1658, 'texture')
  i1658.aabb = i1659[3]
  i1658.vertices = i1659[4]
  i1658.triangles = i1659[5]
  i1658.textureRect = UnityEngine.Rect.MinMaxRect(i1659[6], i1659[7], i1659[8], i1659[9])
  i1658.packedRect = UnityEngine.Rect.MinMaxRect(i1659[10], i1659[11], i1659[12], i1659[13])
  i1658.border = new pc.Vec4( i1659[14], i1659[15], i1659[16], i1659[17] )
  i1658.transparency = i1659[18]
  i1658.bounds = i1659[19]
  i1658.pixelsPerUnit = i1659[20]
  i1658.textureWidth = i1659[21]
  i1658.textureHeight = i1659[22]
  i1658.nativeSize = new pc.Vec2( i1659[23], i1659[24] )
  i1658.pivot = new pc.Vec2( i1659[25], i1659[26] )
  i1658.textureRectOffset = new pc.Vec2( i1659[27], i1659[28] )
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.wrapMode = i1661[1]
  i1660.isLooping = !!i1661[2]
  i1660.length = i1661[3]
  var i1663 = i1661[4]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1663[i + 0]) );
  }
  i1660.curves = i1662
  var i1665 = i1661[5]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1665[i + 0]) );
  }
  i1660.events = i1664
  i1660.halfPrecision = !!i1661[6]
  i1660.frameRate = i1661[7]
  i1660.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1661[8], i1660.localBounds)
  i1660.hasMuscleCurves = !!i1661[9]
  var i1667 = i1661[10]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( i1667[i + 0] );
  }
  i1660.clipMuscleConstant = i1666
  i1660.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1661[11], i1660.clipBindingConstant)
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1671 = data
  i1670.path = i1671[0]
  i1670.componentType = i1671[1]
  i1670.property = i1671[2]
  i1670.keys = i1671[3]
  var i1673 = i1671[4]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1673[i + 0]) );
  }
  i1670.objectReferenceKeys = i1672
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1677 = data
  i1676.time = i1677[0]
  request.r(i1677[1], i1677[2], 0, i1676, 'value')
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1681 = data
  i1680.functionName = i1681[0]
  i1680.floatParameter = i1681[1]
  i1680.intParameter = i1681[2]
  i1680.stringParameter = i1681[3]
  request.r(i1681[4], i1681[5], 0, i1680, 'objectReferenceParameter')
  i1680.time = i1681[6]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1683 = data
  i1682.center = new pc.Vec3( i1683[0], i1683[1], i1683[2] )
  i1682.extends = new pc.Vec3( i1683[3], i1683[4], i1683[5] )
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1687 = data
  var i1689 = i1687[0]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1686.genericBindings = i1688
  var i1691 = i1687[1]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( i1691[i + 0] );
  }
  i1686.pptrCurveMapping = i1690
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1693 = data
  i1692.name = i1693[0]
  i1692.ascent = i1693[1]
  i1692.originalLineHeight = i1693[2]
  i1692.fontSize = i1693[3]
  var i1695 = i1693[4]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1695[i + 0]) );
  }
  i1692.characterInfo = i1694
  request.r(i1693[5], i1693[6], 0, i1692, 'texture')
  i1692.originalFontSize = i1693[7]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1699 = data
  i1698.index = i1699[0]
  i1698.advance = i1699[1]
  i1698.bearing = i1699[2]
  i1698.glyphWidth = i1699[3]
  i1698.glyphHeight = i1699[4]
  i1698.minX = i1699[5]
  i1698.maxX = i1699[6]
  i1698.minY = i1699[7]
  i1698.maxY = i1699[8]
  i1698.uvBottomLeftX = i1699[9]
  i1698.uvBottomLeftY = i1699[10]
  i1698.uvBottomRightX = i1699[11]
  i1698.uvBottomRightY = i1699[12]
  i1698.uvTopLeftX = i1699[13]
  i1698.uvTopLeftY = i1699[14]
  i1698.uvTopRightX = i1699[15]
  i1698.uvTopRightY = i1699[16]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1701 = data
  i1700.name = i1701[0]
  var i1703 = i1701[1]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1703[i + 0]) );
  }
  i1700.states = i1702
  var i1705 = i1701[2]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1705[i + 0]) );
  }
  i1700.layers = i1704
  var i1707 = i1701[3]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1707[i + 0]) );
  }
  i1700.parameters = i1706
  i1700.animationClips = i1701[4]
  i1700.HasSubStateMachines = !!i1701[5]
  i1700.avatarUnsupported = i1701[6]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1711 = data
  i1710.cycleOffset = i1711[0]
  i1710.cycleOffsetParameter = i1711[1]
  i1710.cycleOffsetParameterActive = !!i1711[2]
  i1710.mirror = !!i1711[3]
  i1710.mirrorParameter = i1711[4]
  i1710.mirrorParameterActive = !!i1711[5]
  i1710.motionId = i1711[6]
  i1710.nameHash = i1711[7]
  i1710.fullPathHash = i1711[8]
  i1710.speed = i1711[9]
  i1710.speedParameter = i1711[10]
  i1710.speedParameterActive = !!i1711[11]
  i1710.tag = i1711[12]
  i1710.name = i1711[13]
  i1710.layer = i1711[14]
  i1710.writeDefaultValues = !!i1711[15]
  var i1713 = i1711[16]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1713[i + 0]) );
  }
  i1710.transitions = i1712
  var i1715 = i1711[17]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 2, i1714, '')
  }
  i1710.behaviours = i1714
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1719 = data
  i1718.fullPath = i1719[0]
  i1718.canTransitionToSelf = !!i1719[1]
  i1718.duration = i1719[2]
  i1718.exitTime = i1719[3]
  i1718.hasExitTime = !!i1719[4]
  i1718.hasFixedDuration = !!i1719[5]
  i1718.interruptionSource = i1719[6]
  i1718.offset = i1719[7]
  i1718.orderedInterruption = !!i1719[8]
  i1718.destinationStateNameHash = i1719[9]
  i1718.destinationStateMachineId = i1719[10]
  i1718.isExit = !!i1719[11]
  i1718.mute = !!i1719[12]
  i1718.solo = !!i1719[13]
  var i1721 = i1719[14]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1721[i + 0]) );
  }
  i1718.conditions = i1720
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1727 = data
  i1726.blendingMode = i1727[0]
  i1726.defaultWeight = i1727[1]
  i1726.name = i1727[2]
  i1726.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1727[3], i1726.stateMachine)
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1729 = data
  i1728.id = i1729[0]
  i1728.defaultStateNameHash = i1729[1]
  var i1731 = i1729[2]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1731[i + 0]) );
  }
  i1728.entryTransitions = i1730
  var i1733 = i1729[3]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1733[i + 0]) );
  }
  i1728.anyStateTransitions = i1732
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1737 = data
  i1736.destinationStateNameHash = i1737[0]
  i1736.destinationStateMachineId = i1737[1]
  i1736.isExit = !!i1737[2]
  i1736.mute = !!i1737[3]
  i1736.solo = !!i1737[4]
  var i1739 = i1737[5]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1739[i + 0]) );
  }
  i1736.conditions = i1738
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1743 = data
  i1742.defaultBool = !!i1743[0]
  i1742.defaultFloat = i1743[1]
  i1742.defaultInt = i1743[2]
  i1742.name = i1743[3]
  i1742.nameHash = i1743[4]
  i1742.type = i1743[5]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1747 = data
  i1746.mode = i1747[0]
  i1746.parameter = i1747[1]
  i1746.threshold = i1747[2]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1749 = data
  i1748.name = i1749[0]
  i1748.bytes64 = i1749[1]
  i1748.data = i1749[2]
  return i1748
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1750 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1751 = data
  var i1753 = i1751[0]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1750.atlasAssets = i1752
  i1750.scale = i1751[1]
  request.r(i1751[2], i1751[3], 0, i1750, 'skeletonJSON')
  i1750.isUpgradingBlendModeMaterials = !!i1751[4]
  i1750.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1751[5], i1750.blendModeMaterials)
  var i1755 = i1751[6]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1755.length; i += 2) {
  request.r(i1755[i + 0], i1755[i + 1], 1, i1754, '')
  }
  i1750.skeletonDataModifiers = i1754
  var i1757 = i1751[7]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( i1757[i + 0] );
  }
  i1750.fromAnimation = i1756
  var i1759 = i1751[8]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( i1759[i + 0] );
  }
  i1750.toAnimation = i1758
  i1750.duration = i1751[9]
  i1750.defaultMix = i1751[10]
  request.r(i1751[11], i1751[12], 0, i1750, 'controller')
  return i1750
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1762 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1763 = data
  i1762.applyAdditiveMaterial = !!i1763[0]
  var i1765 = i1763[1]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1765[i + 0]));
  }
  i1762.additiveMaterials = i1764
  var i1767 = i1763[2]
  var i1766 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1767[i + 0]));
  }
  i1762.multiplyMaterials = i1766
  var i1769 = i1763[3]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1769[i + 0]));
  }
  i1762.screenMaterials = i1768
  i1762.requiresBlendModeMaterials = !!i1763[4]
  return i1762
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1772 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1773 = data
  i1772.pageName = i1773[0]
  request.r(i1773[1], i1773[2], 0, i1772, 'material')
  return i1772
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1776 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'atlasFile')
  var i1779 = i1777[2]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 2) {
  request.r(i1779[i + 0], i1779[i + 1], 2, i1778, '')
  }
  i1776.materials = i1778
  i1776.textureLoadingMode = i1777[3]
  request.r(i1777[4], i1777[5], 0, i1776, 'onDemandTextureLoader')
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1783[i + 0]) );
  }
  i1780.files = i1782
  i1780.componentToPrefabIds = i1781[1]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1787 = data
  i1786.path = i1787[0]
  request.r(i1787[1], i1787[2], 0, i1786, 'unityObject')
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1791[i + 0]) );
  }
  i1788.scriptsExecutionOrder = i1790
  var i1793 = i1789[1]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1793[i + 0]) );
  }
  i1788.sortingLayers = i1792
  var i1795 = i1789[2]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1795[i + 0]) );
  }
  i1788.cullingLayers = i1794
  i1788.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1789[3], i1788.timeSettings)
  i1788.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1789[4], i1788.physicsSettings)
  i1788.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1789[5], i1788.physics2DSettings)
  i1788.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1789[6], i1788.qualitySettings)
  i1788.enableRealtimeShadows = !!i1789[7]
  i1788.enableAutoInstancing = !!i1789[8]
  i1788.enableDynamicBatching = !!i1789[9]
  i1788.lightmapEncodingQuality = i1789[10]
  i1788.desiredColorSpace = i1789[11]
  var i1797 = i1789[12]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( i1797[i + 0] );
  }
  i1788.allTags = i1796
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1801 = data
  i1800.name = i1801[0]
  i1800.value = i1801[1]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1805 = data
  i1804.id = i1805[0]
  i1804.name = i1805[1]
  i1804.value = i1805[2]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1809 = data
  i1808.id = i1809[0]
  i1808.name = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1811 = data
  i1810.fixedDeltaTime = i1811[0]
  i1810.maximumDeltaTime = i1811[1]
  i1810.timeScale = i1811[2]
  i1810.maximumParticleTimestep = i1811[3]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1813 = data
  i1812.gravity = new pc.Vec3( i1813[0], i1813[1], i1813[2] )
  i1812.defaultSolverIterations = i1813[3]
  i1812.bounceThreshold = i1813[4]
  i1812.autoSyncTransforms = !!i1813[5]
  i1812.autoSimulation = !!i1813[6]
  var i1815 = i1813[7]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1815[i + 0]) );
  }
  i1812.collisionMatrix = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.layerId = i1819[1]
  i1818.otherLayerId = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1821 = data
  request.r(i1821[0], i1821[1], 0, i1820, 'material')
  i1820.gravity = new pc.Vec2( i1821[2], i1821[3] )
  i1820.positionIterations = i1821[4]
  i1820.velocityIterations = i1821[5]
  i1820.velocityThreshold = i1821[6]
  i1820.maxLinearCorrection = i1821[7]
  i1820.maxAngularCorrection = i1821[8]
  i1820.maxTranslationSpeed = i1821[9]
  i1820.maxRotationSpeed = i1821[10]
  i1820.baumgarteScale = i1821[11]
  i1820.baumgarteTOIScale = i1821[12]
  i1820.timeToSleep = i1821[13]
  i1820.linearSleepTolerance = i1821[14]
  i1820.angularSleepTolerance = i1821[15]
  i1820.defaultContactOffset = i1821[16]
  i1820.autoSimulation = !!i1821[17]
  i1820.queriesHitTriggers = !!i1821[18]
  i1820.queriesStartInColliders = !!i1821[19]
  i1820.callbacksOnDisable = !!i1821[20]
  i1820.reuseCollisionCallbacks = !!i1821[21]
  i1820.autoSyncTransforms = !!i1821[22]
  var i1823 = i1821[23]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1823[i + 0]) );
  }
  i1820.collisionMatrix = i1822
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1827 = data
  i1826.enabled = !!i1827[0]
  i1826.layerId = i1827[1]
  i1826.otherLayerId = i1827[2]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1829 = data
  var i1831 = i1829[0]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1831[i + 0]) );
  }
  i1828.qualityLevels = i1830
  var i1833 = i1829[1]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1828.names = i1832
  i1828.shadows = i1829[2]
  i1828.anisotropicFiltering = i1829[3]
  i1828.antiAliasing = i1829[4]
  i1828.lodBias = i1829[5]
  i1828.shadowCascades = i1829[6]
  i1828.shadowDistance = i1829[7]
  i1828.shadowmaskMode = i1829[8]
  i1828.shadowProjection = i1829[9]
  i1828.shadowResolution = i1829[10]
  i1828.softParticles = !!i1829[11]
  i1828.softVegetation = !!i1829[12]
  i1828.activeColorSpace = i1829[13]
  i1828.desiredColorSpace = i1829[14]
  i1828.masterTextureLimit = i1829[15]
  i1828.maxQueuedFrames = i1829[16]
  i1828.particleRaycastBudget = i1829[17]
  i1828.pixelLightCount = i1829[18]
  i1828.realtimeReflectionProbes = !!i1829[19]
  i1828.shadowCascade2Split = i1829[20]
  i1828.shadowCascade4Split = new pc.Vec3( i1829[21], i1829[22], i1829[23] )
  i1828.streamingMipmapsActive = !!i1829[24]
  i1828.vSyncCount = i1829[25]
  i1828.asyncUploadBufferSize = i1829[26]
  i1828.asyncUploadTimeSlice = i1829[27]
  i1828.billboardsFaceCameraPosition = !!i1829[28]
  i1828.shadowNearPlaneOffset = i1829[29]
  i1828.streamingMipmapsMemoryBudget = i1829[30]
  i1828.maximumLODLevel = i1829[31]
  i1828.streamingMipmapsAddAllCameras = !!i1829[32]
  i1828.streamingMipmapsMaxLevelReduction = i1829[33]
  i1828.streamingMipmapsRenderersPerFrame = i1829[34]
  i1828.resolutionScalingFixedDPIFactor = i1829[35]
  i1828.streamingMipmapsMaxFileIORequests = i1829[36]
  i1828.currentQualityLevel = i1829[37]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1839 = data
  i1838.weight = i1839[0]
  i1838.vertices = i1839[1]
  i1838.normals = i1839[2]
  i1838.tangents = i1839[3]
  return i1838
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[29],"72":[73],"74":[73],"6":[5],"75":[76],"77":[5],"78":[11,5],"79":[29],"80":[11,5],"30":[26,29],"81":[29],"82":[29,32],"83":[49],"84":[57],"85":[76],"86":[87],"88":[5],"89":[29,5],"90":[5,11],"91":[5],"92":[11,5],"93":[29],"94":[11,5],"95":[5],"96":[97],"98":[5],"99":[5],"9":[6],"12":[11,5],"100":[5],"8":[6],"101":[5],"10":[5],"102":[5],"103":[5],"104":[5],"105":[5],"106":[5],"107":[5],"108":[5],"109":[11,5],"110":[5],"111":[5],"112":[5],"18":[5],"19":[11,5],"113":[5],"114":[21],"115":[21],"22":[21],"116":[21],"117":[3],"118":[3],"119":[97],"120":[97]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.GridLayoutGroup","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","test","UnityEngine.Sprite","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","enemy","UnityEngine.MeshRenderer","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","player","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "05/08/2024 02:48:08";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1709";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3577";

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

Deserializers.buildID = "8af38936-9c5f-4588-be5b-d0e6d54b23b9";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

