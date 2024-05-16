var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
<<<<<<< HEAD
  var i1488 = root || request.c( 'UnityEngine.JointSpring' )
  var i1489 = data
  i1488.spring = i1489[0]
  i1488.damper = i1489[1]
  i1488.targetPosition = i1489[2]
  return i1488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.JointMotor' )
  var i1491 = data
  i1490.m_TargetVelocity = i1491[0]
  i1490.m_Force = i1491[1]
  i1490.m_FreeSpin = i1491[2]
  return i1490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.JointLimits' )
  var i1493 = data
  i1492.m_Min = i1493[0]
  i1492.m_Max = i1493[1]
  i1492.m_Bounciness = i1493[2]
  i1492.m_BounceMinVelocity = i1493[3]
  i1492.m_ContactDistance = i1493[4]
  i1492.minBounce = i1493[5]
  i1492.maxBounce = i1493[6]
  return i1492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.JointDrive' )
  var i1495 = data
  i1494.m_PositionSpring = i1495[0]
  i1494.m_PositionDamper = i1495[1]
  i1494.m_MaximumForce = i1495[2]
  return i1494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1497 = data
  i1496.m_Spring = i1497[0]
  i1496.m_Damper = i1497[1]
  return i1496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1499 = data
  i1498.m_Limit = i1499[0]
  i1498.m_Bounciness = i1499[1]
  i1498.m_ContactDistance = i1499[2]
  return i1498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1501 = data
  i1500.m_ExtremumSlip = i1501[0]
  i1500.m_ExtremumValue = i1501[1]
  i1500.m_AsymptoteSlip = i1501[2]
  i1500.m_AsymptoteValue = i1501[3]
  i1500.m_Stiffness = i1501[4]
  return i1500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1503 = data
  i1502.m_LowerAngle = i1503[0]
  i1502.m_UpperAngle = i1503[1]
  return i1502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1505 = data
  i1504.m_MotorSpeed = i1505[0]
  i1504.m_MaximumMotorTorque = i1505[1]
  return i1504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1507 = data
  i1506.m_DampingRatio = i1507[0]
  i1506.m_Frequency = i1507[1]
  i1506.m_Angle = i1507[2]
  return i1506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1509 = data
  i1508.m_LowerTranslation = i1509[0]
  i1508.m_UpperTranslation = i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1510 = root || new pc.UnityMaterial()
  var i1511 = data
  i1510.name = i1511[0]
  request.r(i1511[1], i1511[2], 0, i1510, 'shader')
  i1510.renderQueue = i1511[3]
  i1510.enableInstancing = !!i1511[4]
  var i1513 = i1511[5]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1513[i + 0]) );
  }
  i1510.floatParameters = i1512
  var i1515 = i1511[6]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1515[i + 0]) );
  }
  i1510.colorParameters = i1514
  var i1517 = i1511[7]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1517[i + 0]) );
  }
  i1510.vectorParameters = i1516
  var i1519 = i1511[8]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1519[i + 0]) );
  }
  i1510.textureParameters = i1518
  var i1521 = i1511[9]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1521[i + 0]) );
  }
  i1510.materialFlags = i1520
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.value = i1525[1]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.value = new pc.Color(i1529[1], i1529[2], i1529[3], i1529[4])
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1533 = data
  i1532.name = i1533[0]
  i1532.value = new pc.Vec4( i1533[1], i1533[2], i1533[3], i1533[4] )
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1537 = data
  i1536.name = i1537[0]
  request.r(i1537[1], i1537[2], 0, i1536, 'value')
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1541 = data
  i1540.name = i1541[0]
  i1540.enabled = !!i1541[1]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1543 = data
  i1542.name = i1543[0]
  i1542.width = i1543[1]
  i1542.height = i1543[2]
  i1542.mipmapCount = i1543[3]
  i1542.anisoLevel = i1543[4]
  i1542.filterMode = i1543[5]
  i1542.hdr = !!i1543[6]
  i1542.format = i1543[7]
  i1542.wrapMode = i1543[8]
  i1542.alphaIsTransparency = !!i1543[9]
  i1542.alphaSource = i1543[10]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1545 = data
  i1544.position = new pc.Vec3( i1545[0], i1545[1], i1545[2] )
  i1544.scale = new pc.Vec3( i1545[3], i1545[4], i1545[5] )
  i1544.rotation = new pc.Quat(i1545[6], i1545[7], i1545[8], i1545[9])
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1547 = data
  request.r(i1547[0], i1547[1], 0, i1546, 'sharedMesh')
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1549 = data
  request.r(i1549[0], i1549[1], 0, i1548, 'additionalVertexStreams')
  i1548.enabled = !!i1549[2]
  request.r(i1549[3], i1549[4], 0, i1548, 'sharedMaterial')
  var i1551 = i1549[5]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 2, i1550, '')
  }
  i1548.sharedMaterials = i1550
  i1548.receiveShadows = !!i1549[6]
  i1548.shadowCastingMode = i1549[7]
  i1548.sortingLayerID = i1549[8]
  i1548.sortingOrder = i1549[9]
  i1548.lightmapIndex = i1549[10]
  i1548.lightmapSceneIndex = i1549[11]
  i1548.lightmapScaleOffset = new pc.Vec4( i1549[12], i1549[13], i1549[14], i1549[15] )
  i1548.lightProbeUsage = i1549[16]
  i1548.reflectionProbeUsage = i1549[17]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'animatorController')
  request.r(i1555[2], i1555[3], 0, i1554, 'avatar')
  i1554.updateMode = i1555[4]
  i1554.hasTransformHierarchy = !!i1555[5]
  i1554.applyRootMotion = !!i1555[6]
  var i1557 = i1555[7]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 2) {
  request.r(i1557[i + 0], i1557[i + 1], 2, i1556, '')
  }
  i1554.humanBones = i1556
  i1554.enabled = !!i1555[8]
  return i1554
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i1560 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'skeletonDataAsset')
  i1560.initialSkinName = i1561[2]
  i1560.fixPrefabOverrideViaMeshFilter = i1561[3]
  i1560.initialFlipX = !!i1561[4]
  i1560.initialFlipY = !!i1561[5]
  i1560.updateWhenInvisible = i1561[6]
  i1560.zSpacing = i1561[7]
  i1560.useClipping = !!i1561[8]
  i1560.immutableTriangles = !!i1561[9]
  i1560.pmaVertexColors = !!i1561[10]
  i1560.clearStateOnDisable = !!i1561[11]
  i1560.tintBlack = !!i1561[12]
  i1560.singleSubmesh = !!i1561[13]
  i1560.fixDrawOrder = !!i1561[14]
  i1560.addNormals = !!i1561[15]
  i1560.calculateTangents = !!i1561[16]
  i1560.maskInteraction = i1561[17]
  i1560.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1561[18], i1560.maskMaterials)
  i1560.disableRenderingOnOverride = !!i1561[19]
  i1560.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i1561[20], i1560.translator)
  i1560.updateTiming = i1561[21]
  var i1563 = i1561[22]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( i1563[i + 0] );
  }
  i1560.separatorSlotNames = i1562
  return i1560
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1564 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1565 = data
  var i1567 = i1565[0]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 2) {
  request.r(i1567[i + 0], i1567[i + 1], 2, i1566, '')
  }
  i1564.materialsMaskDisabled = i1566
  var i1569 = i1565[1]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 2, i1568, '')
  }
  i1564.materialsInsideMask = i1568
  var i1571 = i1565[2]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 2) {
  request.r(i1571[i + 0], i1571[i + 1], 2, i1570, '')
  }
  i1564.materialsOutsideMask = i1570
  return i1564
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i1572 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i1573 = data
  i1572.autoReset = !!i1573[0]
  i1572.useCustomMixMode = !!i1573[1]
  var i1575 = i1573[2]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( i1575[i + 0] );
  }
  i1572.layerMixModes = i1574
  var i1577 = i1573[3]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( i1577[i + 0] );
  }
  i1572.layerBlendModes = i1576
  return i1572
}

Deserializers["enemy"] = function (request, data, root) {
  var i1584 = root || request.c( 'enemy' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'gm')
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1587 = data
  i1586.name = i1587[0]
  i1586.tagId = i1587[1]
  i1586.enabled = !!i1587[2]
  i1586.isStatic = !!i1587[3]
  i1586.layer = i1587[4]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1589 = data
  i1588.name = i1589[0]
  i1588.halfPrecision = !!i1589[1]
  i1588.vertexCount = i1589[2]
  i1588.aabb = i1589[3]
  var i1591 = i1589[4]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( !!i1591[i + 0] );
  }
  i1588.streams = i1590
  i1588.vertices = i1589[5]
  var i1593 = i1589[6]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1593[i + 0]) );
  }
  i1588.subMeshes = i1592
  var i1595 = i1589[7]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 16) {
    i1594.push( new pc.Mat4().setData(i1595[i + 0], i1595[i + 1], i1595[i + 2], i1595[i + 3],  i1595[i + 4], i1595[i + 5], i1595[i + 6], i1595[i + 7],  i1595[i + 8], i1595[i + 9], i1595[i + 10], i1595[i + 11],  i1595[i + 12], i1595[i + 13], i1595[i + 14], i1595[i + 15]) );
  }
  i1588.bindposes = i1594
  var i1597 = i1589[8]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1597[i + 0]) );
  }
  i1588.blendShapes = i1596
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1603 = data
  i1602.triangles = i1603[0]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1609 = data
  i1608.name = i1609[0]
  var i1611 = i1609[1]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1611[i + 0]) );
  }
  i1608.frames = i1610
  return i1608
}

Deserializers["player"] = function (request, data, root) {
  var i1612 = root || request.c( 'player' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'gm')
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.atlasId = i1615[1]
  i1614.mipmapCount = i1615[2]
  i1614.hdr = !!i1615[3]
  i1614.size = i1615[4]
  i1614.anisoLevel = i1615[5]
  i1614.filterMode = i1615[6]
  i1614.wrapMode = i1615[7]
  var i1617 = i1615[8]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 4) {
    i1616.push( UnityEngine.Rect.MinMaxRect(i1617[i + 0], i1617[i + 1], i1617[i + 2], i1617[i + 3]) );
  }
  i1614.rects = i1616
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1621 = data
  i1620.name = i1621[0]
  i1620.index = i1621[1]
  i1620.startup = !!i1621[2]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1623 = data
  i1622.pivot = new pc.Vec2( i1623[0], i1623[1] )
  i1622.anchorMin = new pc.Vec2( i1623[2], i1623[3] )
  i1622.anchorMax = new pc.Vec2( i1623[4], i1623[5] )
  i1622.sizeDelta = new pc.Vec2( i1623[6], i1623[7] )
  i1622.anchoredPosition3D = new pc.Vec3( i1623[8], i1623[9], i1623[10] )
  i1622.rotation = new pc.Quat(i1623[11], i1623[12], i1623[13], i1623[14])
  i1622.scale = new pc.Vec3( i1623[15], i1623[16], i1623[17] )
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1625 = data
  i1624.enabled = !!i1625[0]
  i1624.aspect = i1625[1]
  i1624.orthographic = !!i1625[2]
  i1624.orthographicSize = i1625[3]
  i1624.backgroundColor = new pc.Color(i1625[4], i1625[5], i1625[6], i1625[7])
  i1624.nearClipPlane = i1625[8]
  i1624.farClipPlane = i1625[9]
  i1624.fieldOfView = i1625[10]
  i1624.depth = i1625[11]
  i1624.clearFlags = i1625[12]
  i1624.cullingMask = i1625[13]
  i1624.rect = i1625[14]
  request.r(i1625[15], i1625[16], 0, i1624, 'targetTexture')
  i1624.usePhysicalProperties = !!i1625[17]
  i1624.focalLength = i1625[18]
  i1624.sensorSize = new pc.Vec2( i1625[19], i1625[20] )
  i1624.lensShift = new pc.Vec2( i1625[21], i1625[22] )
  i1624.gateFit = i1625[23]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1627 = data
  i1626.enabled = !!i1627[0]
  i1626.planeDistance = i1627[1]
  i1626.referencePixelsPerUnit = i1627[2]
  i1626.isFallbackOverlay = !!i1627[3]
  i1626.renderMode = i1627[4]
  i1626.renderOrder = i1627[5]
  i1626.sortingLayerName = i1627[6]
  i1626.sortingOrder = i1627[7]
  i1626.scaleFactor = i1627[8]
  request.r(i1627[9], i1627[10], 0, i1626, 'worldCamera')
  i1626.overrideSorting = !!i1627[11]
  i1626.pixelPerfect = !!i1627[12]
  i1626.targetDisplay = i1627[13]
  i1626.overridePixelPerfect = !!i1627[14]
  return i1626
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1629 = data
  i1628.m_UiScaleMode = i1629[0]
  i1628.m_ReferencePixelsPerUnit = i1629[1]
  i1628.m_ScaleFactor = i1629[2]
  i1628.m_ReferenceResolution = new pc.Vec2( i1629[3], i1629[4] )
  i1628.m_ScreenMatchMode = i1629[5]
  i1628.m_MatchWidthOrHeight = i1629[6]
  i1628.m_PhysicalUnit = i1629[7]
  i1628.m_FallbackScreenDPI = i1629[8]
  i1628.m_DefaultSpriteDPI = i1629[9]
  i1628.m_DynamicPixelsPerUnit = i1629[10]
  i1628.m_PresetInfoIsWorld = !!i1629[11]
  return i1628
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1631 = data
  i1630.m_IgnoreReversedGraphics = !!i1631[0]
  i1630.m_BlockingObjects = i1631[1]
  i1630.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1631[2] )
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1633 = data
  i1632.cullTransparentMesh = !!i1633[0]
  return i1632
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.UI.Image' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'm_Sprite')
  i1634.m_Type = i1635[2]
  i1634.m_PreserveAspect = !!i1635[3]
  i1634.m_FillCenter = !!i1635[4]
  i1634.m_FillMethod = i1635[5]
  i1634.m_FillAmount = i1635[6]
  i1634.m_FillClockwise = !!i1635[7]
  i1634.m_FillOrigin = i1635[8]
  i1634.m_UseSpriteMesh = !!i1635[9]
  i1634.m_PixelsPerUnitMultiplier = i1635[10]
  request.r(i1635[11], i1635[12], 0, i1634, 'm_Material')
  i1634.m_Maskable = !!i1635[13]
  i1634.m_Color = new pc.Color(i1635[14], i1635[15], i1635[16], i1635[17])
  i1634.m_RaycastTarget = !!i1635[18]
  i1634.m_RaycastPadding = new pc.Vec4( i1635[19], i1635[20], i1635[21], i1635[22] )
  return i1634
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1637 = data
  i1636.m_StartCorner = i1637[0]
  i1636.m_StartAxis = i1637[1]
  i1636.m_CellSize = new pc.Vec2( i1637[2], i1637[3] )
  i1636.m_Spacing = new pc.Vec2( i1637[4], i1637[5] )
  i1636.m_Constraint = i1637[6]
  i1636.m_ConstraintCount = i1637[7]
  i1636.m_Padding = UnityEngine.RectOffset.FromPaddings(i1637[8], i1637[9], i1637[10], i1637[11])
  i1636.m_ChildAlignment = i1637[12]
  return i1636
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1639 = data
  i1638.m_HorizontalFit = i1639[0]
  i1638.m_VerticalFit = i1639[1]
  return i1638
}

Deserializers["test"] = function (request, data, root) {
  var i1640 = root || request.c( 'test' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'img')
  request.r(i1641[2], i1641[3], 0, i1640, 'sprite')
  request.r(i1641[4], i1641[5], 0, i1640, 'bg')
  i1640.x = i1641[6]
  request.r(i1641[7], i1641[8], 0, i1640, 'gm')
  i1640.scaleChangeTime = i1641[9]
  i1640.clickScale = i1641[10]
  i1640.clearScale = i1641[11]
  i1640.effectIndex = i1641[12]
  return i1640
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.UI.Button' )
  var i1643 = data
  i1642.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1643[0], i1642.m_OnClick)
  i1642.m_Navigation = request.d('UnityEngine.UI.Navigation', i1643[1], i1642.m_Navigation)
  i1642.m_Transition = i1643[2]
  i1642.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1643[3], i1642.m_Colors)
  i1642.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1643[4], i1642.m_SpriteState)
  i1642.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1643[5], i1642.m_AnimationTriggers)
  i1642.m_Interactable = !!i1643[6]
  request.r(i1643[7], i1643[8], 0, i1642, 'm_TargetGraphic')
  return i1642
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1645 = data
  i1644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1645[0], i1644.m_PersistentCalls)
  return i1644
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1647 = data
  var i1649 = i1647[0]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.add(request.d('UnityEngine.Events.PersistentCall', i1649[i + 0]));
  }
  i1646.m_Calls = i1648
  return i1646
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'm_Target')
  i1652.m_TargetAssemblyTypeName = i1653[2]
  i1652.m_MethodName = i1653[3]
  i1652.m_Mode = i1653[4]
  i1652.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1653[5], i1652.m_Arguments)
  i1652.m_CallState = i1653[6]
  return i1652
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_ObjectArgument')
  i1654.m_ObjectArgumentAssemblyTypeName = i1655[2]
  i1654.m_IntArgument = i1655[3]
  i1654.m_FloatArgument = i1655[4]
  i1654.m_StringArgument = i1655[5]
  i1654.m_BoolArgument = !!i1655[6]
  return i1654
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1657 = data
  i1656.m_Mode = i1657[0]
  i1656.m_WrapAround = !!i1657[1]
  request.r(i1657[2], i1657[3], 0, i1656, 'm_SelectOnUp')
  request.r(i1657[4], i1657[5], 0, i1656, 'm_SelectOnDown')
  request.r(i1657[6], i1657[7], 0, i1656, 'm_SelectOnLeft')
  request.r(i1657[8], i1657[9], 0, i1656, 'm_SelectOnRight')
  return i1656
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1659 = data
  i1658.m_NormalColor = new pc.Color(i1659[0], i1659[1], i1659[2], i1659[3])
  i1658.m_HighlightedColor = new pc.Color(i1659[4], i1659[5], i1659[6], i1659[7])
  i1658.m_PressedColor = new pc.Color(i1659[8], i1659[9], i1659[10], i1659[11])
  i1658.m_SelectedColor = new pc.Color(i1659[12], i1659[13], i1659[14], i1659[15])
  i1658.m_DisabledColor = new pc.Color(i1659[16], i1659[17], i1659[18], i1659[19])
  i1658.m_ColorMultiplier = i1659[20]
  i1658.m_FadeDuration = i1659[21]
  return i1658
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'm_HighlightedSprite')
  request.r(i1661[2], i1661[3], 0, i1660, 'm_PressedSprite')
  request.r(i1661[4], i1661[5], 0, i1660, 'm_SelectedSprite')
  request.r(i1661[6], i1661[7], 0, i1660, 'm_DisabledSprite')
  return i1660
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1663 = data
  i1662.m_NormalTrigger = i1663[0]
  i1662.m_HighlightedTrigger = i1663[1]
  i1662.m_PressedTrigger = i1663[2]
  i1662.m_SelectedTrigger = i1663[3]
  i1662.m_DisabledTrigger = i1663[4]
  return i1662
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1665 = data
  request.r(i1665[0], i1665[1], 0, i1664, 'm_FillRect')
  request.r(i1665[2], i1665[3], 0, i1664, 'm_HandleRect')
  i1664.m_Direction = i1665[4]
  i1664.m_MinValue = i1665[5]
  i1664.m_MaxValue = i1665[6]
  i1664.m_WholeNumbers = !!i1665[7]
  i1664.m_Value = i1665[8]
  i1664.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1665[9], i1664.m_OnValueChanged)
  i1664.m_Navigation = request.d('UnityEngine.UI.Navigation', i1665[10], i1664.m_Navigation)
  i1664.m_Transition = i1665[11]
  i1664.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1665[12], i1664.m_Colors)
  i1664.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1665[13], i1664.m_SpriteState)
  i1664.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1665[14], i1664.m_AnimationTriggers)
  i1664.m_Interactable = !!i1665[15]
  request.r(i1665[16], i1665[17], 0, i1664, 'm_TargetGraphic')
  return i1664
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1667 = data
  i1666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1667[0], i1666.m_PersistentCalls)
  return i1666
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.Text' )
  var i1669 = data
  i1668.m_FontData = request.d('UnityEngine.UI.FontData', i1669[0], i1668.m_FontData)
  i1668.m_Text = i1669[1]
  request.r(i1669[2], i1669[3], 0, i1668, 'm_Material')
  i1668.m_Maskable = !!i1669[4]
  i1668.m_Color = new pc.Color(i1669[5], i1669[6], i1669[7], i1669[8])
  i1668.m_RaycastTarget = !!i1669[9]
  i1668.m_RaycastPadding = new pc.Vec4( i1669[10], i1669[11], i1669[12], i1669[13] )
  return i1668
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'm_Font')
  i1670.m_FontSize = i1671[2]
  i1670.m_FontStyle = i1671[3]
  i1670.m_BestFit = !!i1671[4]
  i1670.m_MinSize = i1671[5]
  i1670.m_MaxSize = i1671[6]
  i1670.m_Alignment = i1671[7]
  i1670.m_AlignByGeometry = !!i1671[8]
  i1670.m_RichText = !!i1671[9]
  i1670.m_HorizontalOverflow = i1671[10]
  i1670.m_VerticalOverflow = i1671[11]
  i1670.m_LineSpacing = i1671[12]
  return i1670
}

Deserializers["endCard"] = function (request, data, root) {
  var i1672 = root || request.c( 'endCard' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'gm')
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1675 = data
  i1674.m_Alpha = i1675[0]
  i1674.m_Interactable = !!i1675[1]
  i1674.m_BlocksRaycasts = !!i1675[2]
  i1674.m_IgnoreParentGroups = !!i1675[3]
  i1674.enabled = !!i1675[4]
  return i1674
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1676 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'skeletonDataAsset')
  request.r(i1677[2], i1677[3], 0, i1676, 'additiveMaterial')
  request.r(i1677[4], i1677[5], 0, i1676, 'multiplyMaterial')
  request.r(i1677[6], i1677[7], 0, i1676, 'screenMaterial')
  i1676.initialSkinName = i1677[8]
  i1676.initialFlipX = !!i1677[9]
  i1676.initialFlipY = !!i1677[10]
  i1676.startingAnimation = i1677[11]
  i1676.startingLoop = !!i1677[12]
  i1676.timeScale = i1677[13]
  i1676.freeze = !!i1677[14]
  i1676.layoutScaleMode = i1677[15]
  i1676.updateWhenInvisible = i1677[16]
  i1676.allowMultipleCanvasRenderers = !!i1677[17]
  var i1679 = i1677[18]
  var i1678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1679.length; i += 2) {
  request.r(i1679[i + 0], i1679[i + 1], 1, i1678, '')
  }
  i1676.canvasRenderers = i1678
  i1676.enableSeparatorSlots = !!i1677[19]
  i1676.updateSeparatorPartLocation = !!i1677[20]
  i1676.updateSeparatorPartScale = !!i1677[21]
  i1676.disableMeshAssignmentOnOverride = !!i1677[22]
  i1676.referenceSize = new pc.Vec2( i1677[23], i1677[24] )
  i1676.referenceScale = i1677[25]
  i1676.rectTransformSize = new pc.Vec2( i1677[26], i1677[27] )
  i1676.editReferenceRect = !!i1677[28]
  var i1681 = i1677[29]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( i1681[i + 0] );
  }
  i1676.separatorSlotNames = i1680
  var i1683 = i1677[30]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1683.length; i += 2) {
  request.r(i1683[i + 0], i1683[i + 1], 1, i1682, '')
  }
  i1676.separatorParts = i1682
  i1676.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1677[31], i1676.meshGenerator)
  i1676.updateTiming = i1677[32]
  i1676.unscaledTime = !!i1677[33]
  request.r(i1677[34], i1677[35], 0, i1676, 'm_Material')
  i1676.m_Maskable = !!i1677[36]
  i1676.m_Color = new pc.Color(i1677[37], i1677[38], i1677[39], i1677[40])
  i1676.m_RaycastTarget = !!i1677[41]
  i1676.m_RaycastPadding = new pc.Vec4( i1677[42], i1677[43], i1677[44], i1677[45] )
  return i1676
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1688 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1689 = data
  i1688.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1689[0], i1688.settings)
  return i1688
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1690 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1691 = data
  i1690.useClipping = !!i1691[0]
  i1690.zSpacing = i1691[1]
  i1690.pmaVertexColors = !!i1691[2]
  i1690.tintBlack = !!i1691[3]
  i1690.canvasGroupTintBlack = !!i1691[4]
  i1690.calculateTangents = !!i1691[5]
  i1690.addNormals = !!i1691[6]
  i1690.immutableTriangles = !!i1691[7]
  return i1690
}

Deserializers["Spine.Unity.BoneFollowerGraphic"] = function (request, data, root) {
  var i1692 = root || request.c( 'Spine.Unity.BoneFollowerGraphic' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'skeletonGraphic')
  i1692.initializeOnAwake = !!i1693[2]
  i1692.boneName = i1693[3]
  i1692.followBoneRotation = !!i1693[4]
  i1692.followSkeletonFlip = !!i1693[5]
  i1692.followLocalScale = !!i1693[6]
  i1692.followParentWorldScale = !!i1693[7]
  i1692.followXYPosition = !!i1693[8]
  i1692.followZPosition = !!i1693[9]
  i1692.maintainedAxisOrientation = i1693[10]
  return i1692
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i1694 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_Material')
  i1694.m_Maskable = !!i1695[2]
  i1694.m_Color = new pc.Color(i1695[3], i1695[4], i1695[5], i1695[6])
  i1694.m_RaycastTarget = !!i1695[7]
  i1694.m_RaycastPadding = new pc.Vec4( i1695[8], i1695[9], i1695[10], i1695[11] )
  return i1694
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'm_FirstSelected')
  i1696.m_sendNavigationEvents = !!i1697[2]
  i1696.m_DragThreshold = i1697[3]
  return i1696
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1699 = data
  i1698.m_HorizontalAxis = i1699[0]
  i1698.m_VerticalAxis = i1699[1]
  i1698.m_SubmitButton = i1699[2]
  i1698.m_CancelButton = i1699[3]
  i1698.m_InputActionsPerSecond = i1699[4]
  i1698.m_RepeatDelay = i1699[5]
  i1698.m_ForceModuleActive = !!i1699[6]
  i1698.m_SendPointerHoverToParent = !!i1699[7]
  return i1698
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i1700 = root || request.c( 'gamemanager' )
  var i1701 = data
  var i1703 = i1701[0]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 2) {
  request.r(i1703[i + 0], i1703[i + 1], 2, i1702, '')
  }
  i1700.sprites = i1702
  var i1705 = i1701[1]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 2, i1704, '')
  }
  i1700.t = i1704
  var i1707 = i1701[2]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 2) {
  request.r(i1707[i + 0], i1707[i + 1], 2, i1706, '')
  }
  i1700.tests = i1706
  request.r(i1701[3], i1701[4], 0, i1700, 'playerHpbar')
  request.r(i1701[5], i1701[6], 0, i1700, 'enemyHpBar')
  request.r(i1701[7], i1701[8], 0, i1700, 'dmg')
  i1700.enemyHpMax = i1701[9]
  i1700.hpMax = i1701[10]
  i1700.enemyPower = i1701[11]
  i1700.playerPower = i1701[12]
  i1700.playerPowerMul = i1701[13]
  i1700.attackSpeed = i1701[14]
  i1700.attackSpeedMul = i1701[15]
  request.r(i1701[16], i1701[17], 0, i1700, 'endCover')
  request.r(i1701[18], i1701[19], 0, i1700, 'catchCover')
  i1700.curPlayerPower = System.Int64(i1701[20])
  request.r(i1701[21], i1701[22], 0, i1700, 'ani')
  request.r(i1701[23], i1701[24], 0, i1700, 'dmgAni')
  var i1709 = i1701[25]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 2, i1708, '')
  }
  i1700.pets = i1708
  request.r(i1701[26], i1701[27], 0, i1700, 'capsule')
  i1700.capsuleRotate = i1701[28]
  i1700.capsuleMoveTime = i1701[29]
  request.r(i1701[30], i1701[31], 0, i1700, 'capsuleTarget')
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1717 = data
  i1716.enabled = !!i1717[0]
  request.r(i1717[1], i1717[2], 0, i1716, 'sharedMaterial')
  var i1719 = i1717[3]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1716.sharedMaterials = i1718
  i1716.receiveShadows = !!i1717[4]
  i1716.shadowCastingMode = i1717[5]
  i1716.sortingLayerID = i1717[6]
  i1716.sortingOrder = i1717[7]
  i1716.lightmapIndex = i1717[8]
  i1716.lightmapSceneIndex = i1717[9]
  i1716.lightmapScaleOffset = new pc.Vec4( i1717[10], i1717[11], i1717[12], i1717[13] )
  i1716.lightProbeUsage = i1717[14]
  i1716.reflectionProbeUsage = i1717[15]
  i1716.color = new pc.Color(i1717[16], i1717[17], i1717[18], i1717[19])
  request.r(i1717[20], i1717[21], 0, i1716, 'sprite')
  i1716.flipX = !!i1717[22]
  i1716.flipY = !!i1717[23]
  i1716.drawMode = i1717[24]
  i1716.size = new pc.Vec2( i1717[25], i1717[26] )
  i1716.tileMode = i1717[27]
  i1716.adaptiveModeThreshold = i1717[28]
  i1716.maskInteraction = i1717[29]
  i1716.spriteSortPoint = i1717[30]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1721 = data
  i1720.playAutomatically = !!i1721[0]
  request.r(i1721[1], i1721[2], 0, i1720, 'clip')
  var i1723 = i1721[3]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 2, i1722, '')
  }
  i1720.clips = i1722
  i1720.wrapMode = i1721[4]
  i1720.enabled = !!i1721[5]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1727 = data
  i1726.ambientIntensity = i1727[0]
  i1726.reflectionIntensity = i1727[1]
  i1726.ambientMode = i1727[2]
  i1726.ambientLight = new pc.Color(i1727[3], i1727[4], i1727[5], i1727[6])
  i1726.ambientSkyColor = new pc.Color(i1727[7], i1727[8], i1727[9], i1727[10])
  i1726.ambientGroundColor = new pc.Color(i1727[11], i1727[12], i1727[13], i1727[14])
  i1726.ambientEquatorColor = new pc.Color(i1727[15], i1727[16], i1727[17], i1727[18])
  i1726.fogColor = new pc.Color(i1727[19], i1727[20], i1727[21], i1727[22])
  i1726.fogEndDistance = i1727[23]
  i1726.fogStartDistance = i1727[24]
  i1726.fogDensity = i1727[25]
  i1726.fog = !!i1727[26]
  request.r(i1727[27], i1727[28], 0, i1726, 'skybox')
  i1726.fogMode = i1727[29]
  var i1729 = i1727[30]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1729[i + 0]) );
  }
  i1726.lightmaps = i1728
  i1726.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1727[31], i1726.lightProbes)
  i1726.lightmapsMode = i1727[32]
  i1726.mixedBakeMode = i1727[33]
  i1726.environmentLightingMode = i1727[34]
  i1726.ambientProbe = new pc.SphericalHarmonicsL2(i1727[35])
  i1726.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1727[36])
  i1726.useReferenceAmbientProbe = !!i1727[37]
  request.r(i1727[38], i1727[39], 0, i1726, 'customReflection')
  request.r(i1727[40], i1727[41], 0, i1726, 'defaultReflection')
  i1726.defaultReflectionMode = i1727[42]
  i1726.defaultReflectionResolution = i1727[43]
  i1726.sunLightObjectId = i1727[44]
  i1726.pixelLightCount = i1727[45]
  i1726.defaultReflectionHDR = !!i1727[46]
  i1726.hasLightDataAsset = !!i1727[47]
  i1726.hasManualGenerate = !!i1727[48]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'lightmapColor')
  request.r(i1733[2], i1733[3], 0, i1732, 'lightmapDirection')
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1734 = root || new UnityEngine.LightProbes()
  var i1735 = data
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1743 = data
  var i1745 = i1743[0]
  var i1744 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1745[i + 0]));
  }
  i1742.ShaderCompilationErrors = i1744
  i1742.name = i1743[1]
  i1742.guid = i1743[2]
  var i1747 = i1743[3]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( i1747[i + 0] );
  }
  i1742.shaderDefinedKeywords = i1746
  var i1749 = i1743[4]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1749[i + 0]) );
  }
  i1742.passes = i1748
  var i1751 = i1743[5]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1751[i + 0]) );
  }
  i1742.usePasses = i1750
  var i1753 = i1743[6]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1753[i + 0]) );
  }
  i1742.defaultParameterValues = i1752
  request.r(i1743[7], i1743[8], 0, i1742, 'unityFallbackShader')
  i1742.readDepth = !!i1743[9]
  i1742.isCreatedByShaderGraph = !!i1743[10]
  i1742.usedBatchUniforms = i1743[11]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1757 = data
  i1756.shaderName = i1757[0]
  i1756.errorMessage = i1757[1]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1760 = root || new pc.UnityShaderPass()
  var i1761 = data
  i1760.id = i1761[0]
  i1760.subShaderIndex = i1761[1]
  i1760.name = i1761[2]
  i1760.passType = i1761[3]
  i1760.grabPassTextureName = i1761[4]
  i1760.usePass = !!i1761[5]
  i1760.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[6], i1760.zTest)
  i1760.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[7], i1760.zWrite)
  i1760.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[8], i1760.culling)
  i1760.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1761[9], i1760.blending)
  i1760.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1761[10], i1760.alphaBlending)
  i1760.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[11], i1760.colorWriteMask)
  i1760.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[12], i1760.offsetUnits)
  i1760.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[13], i1760.offsetFactor)
  i1760.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[14], i1760.stencilRef)
  i1760.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[15], i1760.stencilReadMask)
  i1760.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1761[16], i1760.stencilWriteMask)
  i1760.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1761[17], i1760.stencilOp)
  i1760.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1761[18], i1760.stencilOpFront)
  i1760.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1761[19], i1760.stencilOpBack)
  var i1763 = i1761[20]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1763[i + 0]) );
  }
  i1760.tags = i1762
  var i1765 = i1761[21]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( i1765[i + 0] );
  }
  i1760.passDefinedKeywords = i1764
  var i1767 = i1761[22]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1767[i + 0]) );
  }
  i1760.passDefinedKeywordGroups = i1766
  var i1769 = i1761[23]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1769[i + 0]) );
  }
  i1760.variants = i1768
  var i1771 = i1761[24]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1771[i + 0]) );
  }
  i1760.excludedVariants = i1770
  i1760.hasDepthReader = !!i1761[25]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1773 = data
  i1772.val = i1773[0]
  i1772.name = i1773[1]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1775 = data
  i1774.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1775[0], i1774.src)
  i1774.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1775[1], i1774.dst)
  i1774.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1775[2], i1774.op)
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1777 = data
  i1776.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1777[0], i1776.pass)
  i1776.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1777[1], i1776.fail)
  i1776.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1777[2], i1776.zFail)
  i1776.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1777[3], i1776.comp)
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1781 = data
  i1780.name = i1781[0]
  i1780.value = i1781[1]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1785 = data
  var i1787 = i1785[0]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( i1787[i + 0] );
  }
  i1784.keywords = i1786
  i1784.hasDiscard = !!i1785[1]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1791 = data
  i1790.passId = i1791[0]
  i1790.subShaderIndex = i1791[1]
  var i1793 = i1791[2]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1790.keywords = i1792
  i1790.vertexProgram = i1791[3]
  i1790.fragmentProgram = i1791[4]
  i1790.readDepth = !!i1791[5]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'shader')
  i1796.pass = i1797[2]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1801 = data
  i1800.name = i1801[0]
  i1800.type = i1801[1]
  i1800.value = new pc.Vec4( i1801[2], i1801[3], i1801[4], i1801[5] )
  i1800.textureValue = i1801[6]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1803 = data
  i1802.name = i1803[0]
  request.r(i1803[1], i1803[2], 0, i1802, 'texture')
  i1802.aabb = i1803[3]
  i1802.vertices = i1803[4]
  i1802.triangles = i1803[5]
  i1802.textureRect = UnityEngine.Rect.MinMaxRect(i1803[6], i1803[7], i1803[8], i1803[9])
  i1802.packedRect = UnityEngine.Rect.MinMaxRect(i1803[10], i1803[11], i1803[12], i1803[13])
  i1802.border = new pc.Vec4( i1803[14], i1803[15], i1803[16], i1803[17] )
  i1802.transparency = i1803[18]
  i1802.bounds = i1803[19]
  i1802.pixelsPerUnit = i1803[20]
  i1802.textureWidth = i1803[21]
  i1802.textureHeight = i1803[22]
  i1802.nativeSize = new pc.Vec2( i1803[23], i1803[24] )
  i1802.pivot = new pc.Vec2( i1803[25], i1803[26] )
  i1802.textureRectOffset = new pc.Vec2( i1803[27], i1803[28] )
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1805 = data
  i1804.name = i1805[0]
  i1804.wrapMode = i1805[1]
  i1804.isLooping = !!i1805[2]
  i1804.length = i1805[3]
  var i1807 = i1805[4]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1807[i + 0]) );
  }
  i1804.curves = i1806
  var i1809 = i1805[5]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1809[i + 0]) );
  }
  i1804.events = i1808
  i1804.halfPrecision = !!i1805[6]
  i1804.frameRate = i1805[7]
  i1804.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1805[8], i1804.localBounds)
  i1804.hasMuscleCurves = !!i1805[9]
  var i1811 = i1805[10]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( i1811[i + 0] );
  }
  i1804.clipMuscleConstant = i1810
  i1804.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1805[11], i1804.clipBindingConstant)
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1815 = data
  i1814.path = i1815[0]
  i1814.componentType = i1815[1]
  i1814.property = i1815[2]
  i1814.keys = i1815[3]
  var i1817 = i1815[4]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1817[i + 0]) );
  }
  i1814.objectReferenceKeys = i1816
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1821 = data
  i1820.time = i1821[0]
  request.r(i1821[1], i1821[2], 0, i1820, 'value')
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1825 = data
  i1824.functionName = i1825[0]
  i1824.floatParameter = i1825[1]
  i1824.intParameter = i1825[2]
  i1824.stringParameter = i1825[3]
  request.r(i1825[4], i1825[5], 0, i1824, 'objectReferenceParameter')
  i1824.time = i1825[6]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1827 = data
  i1826.center = new pc.Vec3( i1827[0], i1827[1], i1827[2] )
  i1826.extends = new pc.Vec3( i1827[3], i1827[4], i1827[5] )
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1831 = data
  var i1833 = i1831[0]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1830.genericBindings = i1832
  var i1835 = i1831[1]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( i1835[i + 0] );
  }
  i1830.pptrCurveMapping = i1834
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.ascent = i1837[1]
  i1836.originalLineHeight = i1837[2]
  i1836.fontSize = i1837[3]
  var i1839 = i1837[4]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1839[i + 0]) );
  }
  i1836.characterInfo = i1838
  request.r(i1837[5], i1837[6], 0, i1836, 'texture')
  i1836.originalFontSize = i1837[7]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1843 = data
  i1842.index = i1843[0]
  i1842.advance = i1843[1]
  i1842.bearing = i1843[2]
  i1842.glyphWidth = i1843[3]
  i1842.glyphHeight = i1843[4]
  i1842.minX = i1843[5]
  i1842.maxX = i1843[6]
  i1842.minY = i1843[7]
  i1842.maxY = i1843[8]
  i1842.uvBottomLeftX = i1843[9]
  i1842.uvBottomLeftY = i1843[10]
  i1842.uvBottomRightX = i1843[11]
  i1842.uvBottomRightY = i1843[12]
  i1842.uvTopLeftX = i1843[13]
  i1842.uvTopLeftY = i1843[14]
  i1842.uvTopRightX = i1843[15]
  i1842.uvTopRightY = i1843[16]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1845 = data
  i1844.name = i1845[0]
  var i1847 = i1845[1]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1847[i + 0]) );
  }
  i1844.states = i1846
  var i1849 = i1845[2]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1849[i + 0]) );
  }
  i1844.layers = i1848
  var i1851 = i1845[3]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1851[i + 0]) );
  }
  i1844.parameters = i1850
  i1844.animationClips = i1845[4]
  i1844.HasSubStateMachines = !!i1845[5]
  i1844.avatarUnsupported = i1845[6]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1855 = data
  i1854.cycleOffset = i1855[0]
  i1854.cycleOffsetParameter = i1855[1]
  i1854.cycleOffsetParameterActive = !!i1855[2]
  i1854.mirror = !!i1855[3]
  i1854.mirrorParameter = i1855[4]
  i1854.mirrorParameterActive = !!i1855[5]
  i1854.motionId = i1855[6]
  i1854.nameHash = i1855[7]
  i1854.fullPathHash = i1855[8]
  i1854.speed = i1855[9]
  i1854.speedParameter = i1855[10]
  i1854.speedParameterActive = !!i1855[11]
  i1854.tag = i1855[12]
  i1854.name = i1855[13]
  i1854.layer = i1855[14]
  i1854.writeDefaultValues = !!i1855[15]
  var i1857 = i1855[16]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1857[i + 0]) );
  }
  i1854.transitions = i1856
  var i1859 = i1855[17]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 2) {
  request.r(i1859[i + 0], i1859[i + 1], 2, i1858, '')
  }
  i1854.behaviours = i1858
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1863 = data
  i1862.fullPath = i1863[0]
  i1862.canTransitionToSelf = !!i1863[1]
  i1862.duration = i1863[2]
  i1862.exitTime = i1863[3]
  i1862.hasExitTime = !!i1863[4]
  i1862.hasFixedDuration = !!i1863[5]
  i1862.interruptionSource = i1863[6]
  i1862.offset = i1863[7]
  i1862.orderedInterruption = !!i1863[8]
  i1862.destinationStateNameHash = i1863[9]
  i1862.destinationStateMachineId = i1863[10]
  i1862.isExit = !!i1863[11]
  i1862.mute = !!i1863[12]
  i1862.solo = !!i1863[13]
  var i1865 = i1863[14]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1865[i + 0]) );
  }
  i1862.conditions = i1864
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1869 = data
  i1868.mode = i1869[0]
  i1868.parameter = i1869[1]
  i1868.threshold = i1869[2]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1875 = data
  i1874.blendingMode = i1875[0]
  i1874.defaultWeight = i1875[1]
  i1874.name = i1875[2]
  i1874.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1875[3], i1874.stateMachine)
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1877 = data
  i1876.id = i1877[0]
  i1876.defaultStateNameHash = i1877[1]
  var i1879 = i1877[2]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1879[i + 0]) );
  }
  i1876.entryTransitions = i1878
  var i1881 = i1877[3]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1881[i + 0]) );
  }
  i1876.anyStateTransitions = i1880
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1885 = data
  i1884.destinationStateNameHash = i1885[0]
  i1884.destinationStateMachineId = i1885[1]
  i1884.isExit = !!i1885[2]
  i1884.mute = !!i1885[3]
  i1884.solo = !!i1885[4]
  var i1887 = i1885[5]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1887[i + 0]) );
  }
  i1884.conditions = i1886
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1891 = data
  i1890.defaultBool = !!i1891[0]
  i1890.defaultFloat = i1891[1]
  i1890.defaultInt = i1891[2]
  i1890.name = i1891[3]
  i1890.nameHash = i1891[4]
  i1890.type = i1891[5]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.bytes64 = i1893[1]
  i1892.data = i1893[2]
  return i1892
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1894 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1895 = data
  var i1897 = i1895[0]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1894.atlasAssets = i1896
  i1894.scale = i1895[1]
  request.r(i1895[2], i1895[3], 0, i1894, 'skeletonJSON')
  i1894.isUpgradingBlendModeMaterials = !!i1895[4]
  i1894.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1895[5], i1894.blendModeMaterials)
  var i1899 = i1895[6]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 1, i1898, '')
  }
  i1894.skeletonDataModifiers = i1898
  var i1901 = i1895[7]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( i1901[i + 0] );
  }
  i1894.fromAnimation = i1900
  var i1903 = i1895[8]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( i1903[i + 0] );
  }
  i1894.toAnimation = i1902
  i1894.duration = i1895[9]
  i1894.defaultMix = i1895[10]
  request.r(i1895[11], i1895[12], 0, i1894, 'controller')
  return i1894
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1906 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1907 = data
  i1906.applyAdditiveMaterial = !!i1907[0]
  var i1909 = i1907[1]
  var i1908 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1909[i + 0]));
  }
  i1906.additiveMaterials = i1908
  var i1911 = i1907[2]
  var i1910 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1911[i + 0]));
  }
  i1906.multiplyMaterials = i1910
  var i1913 = i1907[3]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1913[i + 0]));
  }
  i1906.screenMaterials = i1912
  i1906.requiresBlendModeMaterials = !!i1907[4]
  return i1906
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1916 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1917 = data
  i1916.pageName = i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, 'material')
  return i1916
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1920 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'atlasFile')
  var i1923 = i1921[2]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 2, i1922, '')
  }
  i1920.materials = i1922
  i1920.textureLoadingMode = i1921[3]
  request.r(i1921[4], i1921[5], 0, i1920, 'onDemandTextureLoader')
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1925 = data
  var i1927 = i1925[0]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1927[i + 0]) );
  }
  i1924.files = i1926
  i1924.componentToPrefabIds = i1925[1]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1931 = data
  i1930.path = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'unityObject')
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1933 = data
  var i1935 = i1933[0]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1935[i + 0]) );
  }
  i1932.scriptsExecutionOrder = i1934
  var i1937 = i1933[1]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1937[i + 0]) );
  }
  i1932.sortingLayers = i1936
  var i1939 = i1933[2]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1939[i + 0]) );
  }
  i1932.cullingLayers = i1938
  i1932.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1933[3], i1932.timeSettings)
  i1932.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1933[4], i1932.physicsSettings)
  i1932.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1933[5], i1932.physics2DSettings)
  i1932.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1933[6], i1932.qualitySettings)
  i1932.enableRealtimeShadows = !!i1933[7]
  i1932.enableAutoInstancing = !!i1933[8]
  i1932.enableDynamicBatching = !!i1933[9]
  i1932.lightmapEncodingQuality = i1933[10]
  i1932.desiredColorSpace = i1933[11]
  var i1941 = i1933[12]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( i1941[i + 0] );
  }
  i1932.allTags = i1940
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.value = i1945[1]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1949 = data
  i1948.id = i1949[0]
  i1948.name = i1949[1]
  i1948.value = i1949[2]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1953 = data
  i1952.id = i1953[0]
  i1952.name = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1955 = data
  i1954.fixedDeltaTime = i1955[0]
  i1954.maximumDeltaTime = i1955[1]
  i1954.timeScale = i1955[2]
  i1954.maximumParticleTimestep = i1955[3]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1957 = data
  i1956.gravity = new pc.Vec3( i1957[0], i1957[1], i1957[2] )
  i1956.defaultSolverIterations = i1957[3]
  i1956.bounceThreshold = i1957[4]
  i1956.autoSyncTransforms = !!i1957[5]
  i1956.autoSimulation = !!i1957[6]
  var i1959 = i1957[7]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1959[i + 0]) );
  }
  i1956.collisionMatrix = i1958
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1963 = data
  i1962.enabled = !!i1963[0]
  i1962.layerId = i1963[1]
  i1962.otherLayerId = i1963[2]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'material')
  i1964.gravity = new pc.Vec2( i1965[2], i1965[3] )
  i1964.positionIterations = i1965[4]
  i1964.velocityIterations = i1965[5]
  i1964.velocityThreshold = i1965[6]
  i1964.maxLinearCorrection = i1965[7]
  i1964.maxAngularCorrection = i1965[8]
  i1964.maxTranslationSpeed = i1965[9]
  i1964.maxRotationSpeed = i1965[10]
  i1964.baumgarteScale = i1965[11]
  i1964.baumgarteTOIScale = i1965[12]
  i1964.timeToSleep = i1965[13]
  i1964.linearSleepTolerance = i1965[14]
  i1964.angularSleepTolerance = i1965[15]
  i1964.defaultContactOffset = i1965[16]
  i1964.autoSimulation = !!i1965[17]
  i1964.queriesHitTriggers = !!i1965[18]
  i1964.queriesStartInColliders = !!i1965[19]
  i1964.callbacksOnDisable = !!i1965[20]
  i1964.reuseCollisionCallbacks = !!i1965[21]
  i1964.autoSyncTransforms = !!i1965[22]
  var i1967 = i1965[23]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1967[i + 0]) );
  }
  i1964.collisionMatrix = i1966
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1971 = data
  i1970.enabled = !!i1971[0]
  i1970.layerId = i1971[1]
  i1970.otherLayerId = i1971[2]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1973 = data
  var i1975 = i1973[0]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1975[i + 0]) );
  }
  i1972.qualityLevels = i1974
  var i1977 = i1973[1]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1972.names = i1976
  i1972.shadows = i1973[2]
  i1972.anisotropicFiltering = i1973[3]
  i1972.antiAliasing = i1973[4]
  i1972.lodBias = i1973[5]
  i1972.shadowCascades = i1973[6]
  i1972.shadowDistance = i1973[7]
  i1972.shadowmaskMode = i1973[8]
  i1972.shadowProjection = i1973[9]
  i1972.shadowResolution = i1973[10]
  i1972.softParticles = !!i1973[11]
  i1972.softVegetation = !!i1973[12]
  i1972.activeColorSpace = i1973[13]
  i1972.desiredColorSpace = i1973[14]
  i1972.masterTextureLimit = i1973[15]
  i1972.maxQueuedFrames = i1973[16]
  i1972.particleRaycastBudget = i1973[17]
  i1972.pixelLightCount = i1973[18]
  i1972.realtimeReflectionProbes = !!i1973[19]
  i1972.shadowCascade2Split = i1973[20]
  i1972.shadowCascade4Split = new pc.Vec3( i1973[21], i1973[22], i1973[23] )
  i1972.streamingMipmapsActive = !!i1973[24]
  i1972.vSyncCount = i1973[25]
  i1972.asyncUploadBufferSize = i1973[26]
  i1972.asyncUploadTimeSlice = i1973[27]
  i1972.billboardsFaceCameraPosition = !!i1973[28]
  i1972.shadowNearPlaneOffset = i1973[29]
  i1972.streamingMipmapsMemoryBudget = i1973[30]
  i1972.maximumLODLevel = i1973[31]
  i1972.streamingMipmapsAddAllCameras = !!i1973[32]
  i1972.streamingMipmapsMaxLevelReduction = i1973[33]
  i1972.streamingMipmapsRenderersPerFrame = i1973[34]
  i1972.resolutionScalingFixedDPIFactor = i1973[35]
  i1972.streamingMipmapsMaxFileIORequests = i1973[36]
  i1972.currentQualityLevel = i1973[37]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1983 = data
  i1982.weight = i1983[0]
  i1982.vertices = i1983[1]
  i1982.normals = i1983[2]
  i1982.tangents = i1983[3]
  return i1982
=======
  var i1512 = root || request.c( 'UnityEngine.JointSpring' )
  var i1513 = data
  i1512.spring = i1513[0]
  i1512.damper = i1513[1]
  i1512.targetPosition = i1513[2]
  return i1512
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.JointMotor' )
  var i1515 = data
  i1514.m_TargetVelocity = i1515[0]
  i1514.m_Force = i1515[1]
  i1514.m_FreeSpin = i1515[2]
  return i1514
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.JointLimits' )
  var i1517 = data
  i1516.m_Min = i1517[0]
  i1516.m_Max = i1517[1]
  i1516.m_Bounciness = i1517[2]
  i1516.m_BounceMinVelocity = i1517[3]
  i1516.m_ContactDistance = i1517[4]
  i1516.minBounce = i1517[5]
  i1516.maxBounce = i1517[6]
  return i1516
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.JointDrive' )
  var i1519 = data
  i1518.m_PositionSpring = i1519[0]
  i1518.m_PositionDamper = i1519[1]
  i1518.m_MaximumForce = i1519[2]
  return i1518
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1521 = data
  i1520.m_Spring = i1521[0]
  i1520.m_Damper = i1521[1]
  return i1520
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1523 = data
  i1522.m_Limit = i1523[0]
  i1522.m_Bounciness = i1523[1]
  i1522.m_ContactDistance = i1523[2]
  return i1522
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1525 = data
  i1524.m_ExtremumSlip = i1525[0]
  i1524.m_ExtremumValue = i1525[1]
  i1524.m_AsymptoteSlip = i1525[2]
  i1524.m_AsymptoteValue = i1525[3]
  i1524.m_Stiffness = i1525[4]
  return i1524
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1527 = data
  i1526.m_LowerAngle = i1527[0]
  i1526.m_UpperAngle = i1527[1]
  return i1526
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1529 = data
  i1528.m_MotorSpeed = i1529[0]
  i1528.m_MaximumMotorTorque = i1529[1]
  return i1528
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1531 = data
  i1530.m_DampingRatio = i1531[0]
  i1530.m_Frequency = i1531[1]
  i1530.m_Angle = i1531[2]
  return i1530
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1533 = data
  i1532.m_LowerTranslation = i1533[0]
  i1532.m_UpperTranslation = i1533[1]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1534 = root || new pc.UnityMaterial()
  var i1535 = data
  i1534.name = i1535[0]
  request.r(i1535[1], i1535[2], 0, i1534, 'shader')
  i1534.renderQueue = i1535[3]
  i1534.enableInstancing = !!i1535[4]
  var i1537 = i1535[5]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1537[i + 0]) );
  }
  i1534.floatParameters = i1536
  var i1539 = i1535[6]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1539[i + 0]) );
  }
  i1534.colorParameters = i1538
  var i1541 = i1535[7]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1541[i + 0]) );
  }
  i1534.vectorParameters = i1540
  var i1543 = i1535[8]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1543[i + 0]) );
  }
  i1534.textureParameters = i1542
  var i1545 = i1535[9]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1545[i + 0]) );
  }
  i1534.materialFlags = i1544
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1549 = data
  i1548.name = i1549[0]
  i1548.value = i1549[1]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1553 = data
  i1552.name = i1553[0]
  i1552.value = new pc.Color(i1553[1], i1553[2], i1553[3], i1553[4])
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1557 = data
  i1556.name = i1557[0]
  i1556.value = new pc.Vec4( i1557[1], i1557[2], i1557[3], i1557[4] )
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1561 = data
  i1560.name = i1561[0]
  request.r(i1561[1], i1561[2], 0, i1560, 'value')
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.enabled = !!i1565[1]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1567 = data
  i1566.name = i1567[0]
  i1566.width = i1567[1]
  i1566.height = i1567[2]
  i1566.mipmapCount = i1567[3]
  i1566.anisoLevel = i1567[4]
  i1566.filterMode = i1567[5]
  i1566.hdr = !!i1567[6]
  i1566.format = i1567[7]
  i1566.wrapMode = i1567[8]
  i1566.alphaIsTransparency = !!i1567[9]
  i1566.alphaSource = i1567[10]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1569 = data
  i1568.position = new pc.Vec3( i1569[0], i1569[1], i1569[2] )
  i1568.scale = new pc.Vec3( i1569[3], i1569[4], i1569[5] )
  i1568.rotation = new pc.Quat(i1569[6], i1569[7], i1569[8], i1569[9])
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1571 = data
  request.r(i1571[0], i1571[1], 0, i1570, 'sharedMesh')
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'additionalVertexStreams')
  i1572.enabled = !!i1573[2]
  request.r(i1573[3], i1573[4], 0, i1572, 'sharedMaterial')
  var i1575 = i1573[5]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 2) {
  request.r(i1575[i + 0], i1575[i + 1], 2, i1574, '')
  }
  i1572.sharedMaterials = i1574
  i1572.receiveShadows = !!i1573[6]
  i1572.shadowCastingMode = i1573[7]
  i1572.sortingLayerID = i1573[8]
  i1572.sortingOrder = i1573[9]
  i1572.lightmapIndex = i1573[10]
  i1572.lightmapSceneIndex = i1573[11]
  i1572.lightmapScaleOffset = new pc.Vec4( i1573[12], i1573[13], i1573[14], i1573[15] )
  i1572.lightProbeUsage = i1573[16]
  i1572.reflectionProbeUsage = i1573[17]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'animatorController')
  request.r(i1579[2], i1579[3], 0, i1578, 'avatar')
  i1578.updateMode = i1579[4]
  i1578.hasTransformHierarchy = !!i1579[5]
  i1578.applyRootMotion = !!i1579[6]
  var i1581 = i1579[7]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 2, i1580, '')
  }
  i1578.humanBones = i1580
  i1578.enabled = !!i1579[8]
  return i1578
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i1584 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'skeletonDataAsset')
  i1584.initialSkinName = i1585[2]
  i1584.fixPrefabOverrideViaMeshFilter = i1585[3]
  i1584.initialFlipX = !!i1585[4]
  i1584.initialFlipY = !!i1585[5]
  i1584.updateWhenInvisible = i1585[6]
  i1584.zSpacing = i1585[7]
  i1584.useClipping = !!i1585[8]
  i1584.immutableTriangles = !!i1585[9]
  i1584.pmaVertexColors = !!i1585[10]
  i1584.clearStateOnDisable = !!i1585[11]
  i1584.tintBlack = !!i1585[12]
  i1584.singleSubmesh = !!i1585[13]
  i1584.fixDrawOrder = !!i1585[14]
  i1584.addNormals = !!i1585[15]
  i1584.calculateTangents = !!i1585[16]
  i1584.maskInteraction = i1585[17]
  i1584.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1585[18], i1584.maskMaterials)
  i1584.disableRenderingOnOverride = !!i1585[19]
  i1584.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i1585[20], i1584.translator)
  i1584.updateTiming = i1585[21]
  var i1587 = i1585[22]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( i1587[i + 0] );
  }
  i1584.separatorSlotNames = i1586
  return i1584
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1588 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1589 = data
  var i1591 = i1589[0]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1588.materialsMaskDisabled = i1590
  var i1593 = i1589[1]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 2) {
  request.r(i1593[i + 0], i1593[i + 1], 2, i1592, '')
  }
  i1588.materialsInsideMask = i1592
  var i1595 = i1589[2]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 2) {
  request.r(i1595[i + 0], i1595[i + 1], 2, i1594, '')
  }
  i1588.materialsOutsideMask = i1594
  return i1588
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i1596 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i1597 = data
  i1596.autoReset = !!i1597[0]
  i1596.useCustomMixMode = !!i1597[1]
  var i1599 = i1597[2]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( i1599[i + 0] );
  }
  i1596.layerMixModes = i1598
  var i1601 = i1597[3]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( i1601[i + 0] );
  }
  i1596.layerBlendModes = i1600
  return i1596
}

Deserializers["enemy"] = function (request, data, root) {
  var i1608 = root || request.c( 'enemy' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'gm')
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.tagId = i1611[1]
  i1610.enabled = !!i1611[2]
  i1610.isStatic = !!i1611[3]
  i1610.layer = i1611[4]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1613 = data
  i1612.name = i1613[0]
  i1612.halfPrecision = !!i1613[1]
  i1612.vertexCount = i1613[2]
  i1612.aabb = i1613[3]
  var i1615 = i1613[4]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( !!i1615[i + 0] );
  }
  i1612.streams = i1614
  i1612.vertices = i1613[5]
  var i1617 = i1613[6]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1617[i + 0]) );
  }
  i1612.subMeshes = i1616
  var i1619 = i1613[7]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 16) {
    i1618.push( new pc.Mat4().setData(i1619[i + 0], i1619[i + 1], i1619[i + 2], i1619[i + 3],  i1619[i + 4], i1619[i + 5], i1619[i + 6], i1619[i + 7],  i1619[i + 8], i1619[i + 9], i1619[i + 10], i1619[i + 11],  i1619[i + 12], i1619[i + 13], i1619[i + 14], i1619[i + 15]) );
  }
  i1612.bindposes = i1618
  var i1621 = i1613[8]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1621[i + 0]) );
  }
  i1612.blendShapes = i1620
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1627 = data
  i1626.triangles = i1627[0]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1633 = data
  i1632.name = i1633[0]
  var i1635 = i1633[1]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1635[i + 0]) );
  }
  i1632.frames = i1634
  return i1632
}

Deserializers["player"] = function (request, data, root) {
  var i1636 = root || request.c( 'player' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'gm')
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.atlasId = i1639[1]
  i1638.mipmapCount = i1639[2]
  i1638.hdr = !!i1639[3]
  i1638.size = i1639[4]
  i1638.anisoLevel = i1639[5]
  i1638.filterMode = i1639[6]
  i1638.wrapMode = i1639[7]
  var i1641 = i1639[8]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 4) {
    i1640.push( UnityEngine.Rect.MinMaxRect(i1641[i + 0], i1641[i + 1], i1641[i + 2], i1641[i + 3]) );
  }
  i1638.rects = i1640
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.index = i1645[1]
  i1644.startup = !!i1645[2]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1647 = data
  i1646.pivot = new pc.Vec2( i1647[0], i1647[1] )
  i1646.anchorMin = new pc.Vec2( i1647[2], i1647[3] )
  i1646.anchorMax = new pc.Vec2( i1647[4], i1647[5] )
  i1646.sizeDelta = new pc.Vec2( i1647[6], i1647[7] )
  i1646.anchoredPosition3D = new pc.Vec3( i1647[8], i1647[9], i1647[10] )
  i1646.rotation = new pc.Quat(i1647[11], i1647[12], i1647[13], i1647[14])
  i1646.scale = new pc.Vec3( i1647[15], i1647[16], i1647[17] )
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1649 = data
  i1648.enabled = !!i1649[0]
  i1648.aspect = i1649[1]
  i1648.orthographic = !!i1649[2]
  i1648.orthographicSize = i1649[3]
  i1648.backgroundColor = new pc.Color(i1649[4], i1649[5], i1649[6], i1649[7])
  i1648.nearClipPlane = i1649[8]
  i1648.farClipPlane = i1649[9]
  i1648.fieldOfView = i1649[10]
  i1648.depth = i1649[11]
  i1648.clearFlags = i1649[12]
  i1648.cullingMask = i1649[13]
  i1648.rect = i1649[14]
  request.r(i1649[15], i1649[16], 0, i1648, 'targetTexture')
  i1648.usePhysicalProperties = !!i1649[17]
  i1648.focalLength = i1649[18]
  i1648.sensorSize = new pc.Vec2( i1649[19], i1649[20] )
  i1648.lensShift = new pc.Vec2( i1649[21], i1649[22] )
  i1648.gateFit = i1649[23]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1651 = data
  i1650.enabled = !!i1651[0]
  i1650.planeDistance = i1651[1]
  i1650.referencePixelsPerUnit = i1651[2]
  i1650.isFallbackOverlay = !!i1651[3]
  i1650.renderMode = i1651[4]
  i1650.renderOrder = i1651[5]
  i1650.sortingLayerName = i1651[6]
  i1650.sortingOrder = i1651[7]
  i1650.scaleFactor = i1651[8]
  request.r(i1651[9], i1651[10], 0, i1650, 'worldCamera')
  i1650.overrideSorting = !!i1651[11]
  i1650.pixelPerfect = !!i1651[12]
  i1650.targetDisplay = i1651[13]
  i1650.overridePixelPerfect = !!i1651[14]
  return i1650
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1653 = data
  i1652.m_UiScaleMode = i1653[0]
  i1652.m_ReferencePixelsPerUnit = i1653[1]
  i1652.m_ScaleFactor = i1653[2]
  i1652.m_ReferenceResolution = new pc.Vec2( i1653[3], i1653[4] )
  i1652.m_ScreenMatchMode = i1653[5]
  i1652.m_MatchWidthOrHeight = i1653[6]
  i1652.m_PhysicalUnit = i1653[7]
  i1652.m_FallbackScreenDPI = i1653[8]
  i1652.m_DefaultSpriteDPI = i1653[9]
  i1652.m_DynamicPixelsPerUnit = i1653[10]
  i1652.m_PresetInfoIsWorld = !!i1653[11]
  return i1652
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1655 = data
  i1654.m_IgnoreReversedGraphics = !!i1655[0]
  i1654.m_BlockingObjects = i1655[1]
  i1654.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1655[2] )
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1657 = data
  i1656.cullTransparentMesh = !!i1657[0]
  return i1656
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.Image' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_Sprite')
  i1658.m_Type = i1659[2]
  i1658.m_PreserveAspect = !!i1659[3]
  i1658.m_FillCenter = !!i1659[4]
  i1658.m_FillMethod = i1659[5]
  i1658.m_FillAmount = i1659[6]
  i1658.m_FillClockwise = !!i1659[7]
  i1658.m_FillOrigin = i1659[8]
  i1658.m_UseSpriteMesh = !!i1659[9]
  i1658.m_PixelsPerUnitMultiplier = i1659[10]
  request.r(i1659[11], i1659[12], 0, i1658, 'm_Material')
  i1658.m_Maskable = !!i1659[13]
  i1658.m_Color = new pc.Color(i1659[14], i1659[15], i1659[16], i1659[17])
  i1658.m_RaycastTarget = !!i1659[18]
  i1658.m_RaycastPadding = new pc.Vec4( i1659[19], i1659[20], i1659[21], i1659[22] )
  return i1658
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1661 = data
  i1660.m_StartCorner = i1661[0]
  i1660.m_StartAxis = i1661[1]
  i1660.m_CellSize = new pc.Vec2( i1661[2], i1661[3] )
  i1660.m_Spacing = new pc.Vec2( i1661[4], i1661[5] )
  i1660.m_Constraint = i1661[6]
  i1660.m_ConstraintCount = i1661[7]
  i1660.m_Padding = UnityEngine.RectOffset.FromPaddings(i1661[8], i1661[9], i1661[10], i1661[11])
  i1660.m_ChildAlignment = i1661[12]
  return i1660
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1663 = data
  i1662.m_HorizontalFit = i1663[0]
  i1662.m_VerticalFit = i1663[1]
  return i1662
}

Deserializers["test"] = function (request, data, root) {
  var i1664 = root || request.c( 'test' )
  var i1665 = data
  request.r(i1665[0], i1665[1], 0, i1664, 'img')
  request.r(i1665[2], i1665[3], 0, i1664, 'sprite')
  request.r(i1665[4], i1665[5], 0, i1664, 'bg')
  i1664.x = i1665[6]
  request.r(i1665[7], i1665[8], 0, i1664, 'gm')
  i1664.scaleChangeTime = i1665[9]
  i1664.clickScale = i1665[10]
  i1664.clearScale = i1665[11]
  i1664.effectIndex = i1665[12]
  return i1664
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.Button' )
  var i1667 = data
  i1666.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1667[0], i1666.m_OnClick)
  i1666.m_Navigation = request.d('UnityEngine.UI.Navigation', i1667[1], i1666.m_Navigation)
  i1666.m_Transition = i1667[2]
  i1666.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1667[3], i1666.m_Colors)
  i1666.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1667[4], i1666.m_SpriteState)
  i1666.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1667[5], i1666.m_AnimationTriggers)
  i1666.m_Interactable = !!i1667[6]
  request.r(i1667[7], i1667[8], 0, i1666, 'm_TargetGraphic')
  return i1666
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1669 = data
  i1668.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1669[0], i1668.m_PersistentCalls)
  return i1668
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1671 = data
  var i1673 = i1671[0]
  var i1672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.add(request.d('UnityEngine.Events.PersistentCall', i1673[i + 0]));
  }
  i1670.m_Calls = i1672
  return i1670
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_Target')
  i1676.m_TargetAssemblyTypeName = i1677[2]
  i1676.m_MethodName = i1677[3]
  i1676.m_Mode = i1677[4]
  i1676.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1677[5], i1676.m_Arguments)
  i1676.m_CallState = i1677[6]
  return i1676
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_ObjectArgument')
  i1678.m_ObjectArgumentAssemblyTypeName = i1679[2]
  i1678.m_IntArgument = i1679[3]
  i1678.m_FloatArgument = i1679[4]
  i1678.m_StringArgument = i1679[5]
  i1678.m_BoolArgument = !!i1679[6]
  return i1678
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1681 = data
  i1680.m_Mode = i1681[0]
  i1680.m_WrapAround = !!i1681[1]
  request.r(i1681[2], i1681[3], 0, i1680, 'm_SelectOnUp')
  request.r(i1681[4], i1681[5], 0, i1680, 'm_SelectOnDown')
  request.r(i1681[6], i1681[7], 0, i1680, 'm_SelectOnLeft')
  request.r(i1681[8], i1681[9], 0, i1680, 'm_SelectOnRight')
  return i1680
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1683 = data
  i1682.m_NormalColor = new pc.Color(i1683[0], i1683[1], i1683[2], i1683[3])
  i1682.m_HighlightedColor = new pc.Color(i1683[4], i1683[5], i1683[6], i1683[7])
  i1682.m_PressedColor = new pc.Color(i1683[8], i1683[9], i1683[10], i1683[11])
  i1682.m_SelectedColor = new pc.Color(i1683[12], i1683[13], i1683[14], i1683[15])
  i1682.m_DisabledColor = new pc.Color(i1683[16], i1683[17], i1683[18], i1683[19])
  i1682.m_ColorMultiplier = i1683[20]
  i1682.m_FadeDuration = i1683[21]
  return i1682
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'm_HighlightedSprite')
  request.r(i1685[2], i1685[3], 0, i1684, 'm_PressedSprite')
  request.r(i1685[4], i1685[5], 0, i1684, 'm_SelectedSprite')
  request.r(i1685[6], i1685[7], 0, i1684, 'm_DisabledSprite')
  return i1684
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1687 = data
  i1686.m_NormalTrigger = i1687[0]
  i1686.m_HighlightedTrigger = i1687[1]
  i1686.m_PressedTrigger = i1687[2]
  i1686.m_SelectedTrigger = i1687[3]
  i1686.m_DisabledTrigger = i1687[4]
  return i1686
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'm_FillRect')
  request.r(i1689[2], i1689[3], 0, i1688, 'm_HandleRect')
  i1688.m_Direction = i1689[4]
  i1688.m_MinValue = i1689[5]
  i1688.m_MaxValue = i1689[6]
  i1688.m_WholeNumbers = !!i1689[7]
  i1688.m_Value = i1689[8]
  i1688.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1689[9], i1688.m_OnValueChanged)
  i1688.m_Navigation = request.d('UnityEngine.UI.Navigation', i1689[10], i1688.m_Navigation)
  i1688.m_Transition = i1689[11]
  i1688.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1689[12], i1688.m_Colors)
  i1688.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1689[13], i1688.m_SpriteState)
  i1688.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1689[14], i1688.m_AnimationTriggers)
  i1688.m_Interactable = !!i1689[15]
  request.r(i1689[16], i1689[17], 0, i1688, 'm_TargetGraphic')
  return i1688
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1691 = data
  i1690.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1691[0], i1690.m_PersistentCalls)
  return i1690
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.Text' )
  var i1693 = data
  i1692.m_FontData = request.d('UnityEngine.UI.FontData', i1693[0], i1692.m_FontData)
  i1692.m_Text = i1693[1]
  request.r(i1693[2], i1693[3], 0, i1692, 'm_Material')
  i1692.m_Maskable = !!i1693[4]
  i1692.m_Color = new pc.Color(i1693[5], i1693[6], i1693[7], i1693[8])
  i1692.m_RaycastTarget = !!i1693[9]
  i1692.m_RaycastPadding = new pc.Vec4( i1693[10], i1693[11], i1693[12], i1693[13] )
  return i1692
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_Font')
  i1694.m_FontSize = i1695[2]
  i1694.m_FontStyle = i1695[3]
  i1694.m_BestFit = !!i1695[4]
  i1694.m_MinSize = i1695[5]
  i1694.m_MaxSize = i1695[6]
  i1694.m_Alignment = i1695[7]
  i1694.m_AlignByGeometry = !!i1695[8]
  i1694.m_RichText = !!i1695[9]
  i1694.m_HorizontalOverflow = i1695[10]
  i1694.m_VerticalOverflow = i1695[11]
  i1694.m_LineSpacing = i1695[12]
  return i1694
}

Deserializers["endCard"] = function (request, data, root) {
  var i1696 = root || request.c( 'endCard' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'gm')
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1699 = data
  i1698.m_Alpha = i1699[0]
  i1698.m_Interactable = !!i1699[1]
  i1698.m_BlocksRaycasts = !!i1699[2]
  i1698.m_IgnoreParentGroups = !!i1699[3]
  i1698.enabled = !!i1699[4]
  return i1698
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1700 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'skeletonDataAsset')
  request.r(i1701[2], i1701[3], 0, i1700, 'additiveMaterial')
  request.r(i1701[4], i1701[5], 0, i1700, 'multiplyMaterial')
  request.r(i1701[6], i1701[7], 0, i1700, 'screenMaterial')
  i1700.initialSkinName = i1701[8]
  i1700.initialFlipX = !!i1701[9]
  i1700.initialFlipY = !!i1701[10]
  i1700.startingAnimation = i1701[11]
  i1700.startingLoop = !!i1701[12]
  i1700.timeScale = i1701[13]
  i1700.freeze = !!i1701[14]
  i1700.layoutScaleMode = i1701[15]
  i1700.updateWhenInvisible = i1701[16]
  i1700.allowMultipleCanvasRenderers = !!i1701[17]
  var i1703 = i1701[18]
  var i1702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1703.length; i += 2) {
  request.r(i1703[i + 0], i1703[i + 1], 1, i1702, '')
  }
  i1700.canvasRenderers = i1702
  i1700.enableSeparatorSlots = !!i1701[19]
  i1700.updateSeparatorPartLocation = !!i1701[20]
  i1700.updateSeparatorPartScale = !!i1701[21]
  i1700.disableMeshAssignmentOnOverride = !!i1701[22]
  i1700.referenceSize = new pc.Vec2( i1701[23], i1701[24] )
  i1700.referenceScale = i1701[25]
  i1700.rectTransformSize = new pc.Vec2( i1701[26], i1701[27] )
  i1700.editReferenceRect = !!i1701[28]
  var i1705 = i1701[29]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( i1705[i + 0] );
  }
  i1700.separatorSlotNames = i1704
  var i1707 = i1701[30]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1707.length; i += 2) {
  request.r(i1707[i + 0], i1707[i + 1], 1, i1706, '')
  }
  i1700.separatorParts = i1706
  i1700.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1701[31], i1700.meshGenerator)
  i1700.updateTiming = i1701[32]
  i1700.unscaledTime = !!i1701[33]
  request.r(i1701[34], i1701[35], 0, i1700, 'm_Material')
  i1700.m_Maskable = !!i1701[36]
  i1700.m_Color = new pc.Color(i1701[37], i1701[38], i1701[39], i1701[40])
  i1700.m_RaycastTarget = !!i1701[41]
  i1700.m_RaycastPadding = new pc.Vec4( i1701[42], i1701[43], i1701[44], i1701[45] )
  return i1700
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1712 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1713 = data
  i1712.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1713[0], i1712.settings)
  return i1712
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1714 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1715 = data
  i1714.useClipping = !!i1715[0]
  i1714.zSpacing = i1715[1]
  i1714.pmaVertexColors = !!i1715[2]
  i1714.tintBlack = !!i1715[3]
  i1714.canvasGroupTintBlack = !!i1715[4]
  i1714.calculateTangents = !!i1715[5]
  i1714.addNormals = !!i1715[6]
  i1714.immutableTriangles = !!i1715[7]
  return i1714
}

Deserializers["Spine.Unity.BoneFollowerGraphic"] = function (request, data, root) {
  var i1716 = root || request.c( 'Spine.Unity.BoneFollowerGraphic' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'skeletonGraphic')
  i1716.initializeOnAwake = !!i1717[2]
  i1716.boneName = i1717[3]
  i1716.followBoneRotation = !!i1717[4]
  i1716.followSkeletonFlip = !!i1717[5]
  i1716.followLocalScale = !!i1717[6]
  i1716.followParentWorldScale = !!i1717[7]
  i1716.followXYPosition = !!i1717[8]
  i1716.followZPosition = !!i1717[9]
  i1716.maintainedAxisOrientation = i1717[10]
  return i1716
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i1718 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'm_Material')
  i1718.m_Maskable = !!i1719[2]
  i1718.m_Color = new pc.Color(i1719[3], i1719[4], i1719[5], i1719[6])
  i1718.m_RaycastTarget = !!i1719[7]
  i1718.m_RaycastPadding = new pc.Vec4( i1719[8], i1719[9], i1719[10], i1719[11] )
  return i1718
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'm_FirstSelected')
  i1720.m_sendNavigationEvents = !!i1721[2]
  i1720.m_DragThreshold = i1721[3]
  return i1720
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1723 = data
  i1722.m_HorizontalAxis = i1723[0]
  i1722.m_VerticalAxis = i1723[1]
  i1722.m_SubmitButton = i1723[2]
  i1722.m_CancelButton = i1723[3]
  i1722.m_InputActionsPerSecond = i1723[4]
  i1722.m_RepeatDelay = i1723[5]
  i1722.m_ForceModuleActive = !!i1723[6]
  i1722.m_SendPointerHoverToParent = !!i1723[7]
  return i1722
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i1724 = root || request.c( 'gamemanager' )
  var i1725 = data
  var i1727 = i1725[0]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 2, i1726, '')
  }
  i1724.sprites = i1726
  var i1729 = i1725[1]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 2, i1728, '')
  }
  i1724.t = i1728
  var i1731 = i1725[2]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 2, i1730, '')
  }
  i1724.tests = i1730
  request.r(i1725[3], i1725[4], 0, i1724, 'playerHpbar')
  request.r(i1725[5], i1725[6], 0, i1724, 'enemyHpBar')
  request.r(i1725[7], i1725[8], 0, i1724, 'dmg')
  i1724.enemyHpMax = i1725[9]
  i1724.hpMax = i1725[10]
  i1724.enemyPower = i1725[11]
  i1724.playerPower = i1725[12]
  i1724.playerPowerMul = i1725[13]
  i1724.attackSpeed = i1725[14]
  i1724.attackSpeedMul = i1725[15]
  request.r(i1725[16], i1725[17], 0, i1724, 'endCover')
  request.r(i1725[18], i1725[19], 0, i1724, 'catchCover')
  i1724.curPlayerPower = System.Int64(i1725[20])
  request.r(i1725[21], i1725[22], 0, i1724, 'ani')
  request.r(i1725[23], i1725[24], 0, i1724, 'dmgAni')
  var i1733 = i1725[25]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 2) {
  request.r(i1733[i + 0], i1733[i + 1], 2, i1732, '')
  }
  i1724.pets = i1732
  request.r(i1725[26], i1725[27], 0, i1724, 'capsule')
  i1724.capsuleRotate = i1725[28]
  i1724.capsuleMoveTime = i1725[29]
  request.r(i1725[30], i1725[31], 0, i1724, 'capsuleTarget')
  var i1735 = i1725[32]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 2, i1734, '')
  }
  i1724.breads1 = i1734
  var i1737 = i1725[33]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 2, i1736, '')
  }
  i1724.breads2 = i1736
  var i1739 = i1725[34]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 2) {
  request.r(i1739[i + 0], i1739[i + 1], 2, i1738, '')
  }
  i1724.breads3 = i1738
  request.r(i1725[35], i1725[36], 0, i1724, 'displayer')
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1747 = data
  i1746.enabled = !!i1747[0]
  request.r(i1747[1], i1747[2], 0, i1746, 'sharedMaterial')
  var i1749 = i1747[3]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 2) {
  request.r(i1749[i + 0], i1749[i + 1], 2, i1748, '')
  }
  i1746.sharedMaterials = i1748
  i1746.receiveShadows = !!i1747[4]
  i1746.shadowCastingMode = i1747[5]
  i1746.sortingLayerID = i1747[6]
  i1746.sortingOrder = i1747[7]
  i1746.lightmapIndex = i1747[8]
  i1746.lightmapSceneIndex = i1747[9]
  i1746.lightmapScaleOffset = new pc.Vec4( i1747[10], i1747[11], i1747[12], i1747[13] )
  i1746.lightProbeUsage = i1747[14]
  i1746.reflectionProbeUsage = i1747[15]
  i1746.color = new pc.Color(i1747[16], i1747[17], i1747[18], i1747[19])
  request.r(i1747[20], i1747[21], 0, i1746, 'sprite')
  i1746.flipX = !!i1747[22]
  i1746.flipY = !!i1747[23]
  i1746.drawMode = i1747[24]
  i1746.size = new pc.Vec2( i1747[25], i1747[26] )
  i1746.tileMode = i1747[27]
  i1746.adaptiveModeThreshold = i1747[28]
  i1746.maskInteraction = i1747[29]
  i1746.spriteSortPoint = i1747[30]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1751 = data
  i1750.playAutomatically = !!i1751[0]
  request.r(i1751[1], i1751[2], 0, i1750, 'clip')
  var i1753 = i1751[3]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1750.clips = i1752
  i1750.wrapMode = i1751[4]
  i1750.enabled = !!i1751[5]
  return i1750
}

Deserializers["bread"] = function (request, data, root) {
  var i1756 = root || request.c( 'bread' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'from')
  request.r(i1757[2], i1757[3], 0, i1756, 'to')
  i1756.moveTime = i1757[4]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1759 = data
  i1758.ambientIntensity = i1759[0]
  i1758.reflectionIntensity = i1759[1]
  i1758.ambientMode = i1759[2]
  i1758.ambientLight = new pc.Color(i1759[3], i1759[4], i1759[5], i1759[6])
  i1758.ambientSkyColor = new pc.Color(i1759[7], i1759[8], i1759[9], i1759[10])
  i1758.ambientGroundColor = new pc.Color(i1759[11], i1759[12], i1759[13], i1759[14])
  i1758.ambientEquatorColor = new pc.Color(i1759[15], i1759[16], i1759[17], i1759[18])
  i1758.fogColor = new pc.Color(i1759[19], i1759[20], i1759[21], i1759[22])
  i1758.fogEndDistance = i1759[23]
  i1758.fogStartDistance = i1759[24]
  i1758.fogDensity = i1759[25]
  i1758.fog = !!i1759[26]
  request.r(i1759[27], i1759[28], 0, i1758, 'skybox')
  i1758.fogMode = i1759[29]
  var i1761 = i1759[30]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1761[i + 0]) );
  }
  i1758.lightmaps = i1760
  i1758.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1759[31], i1758.lightProbes)
  i1758.lightmapsMode = i1759[32]
  i1758.mixedBakeMode = i1759[33]
  i1758.environmentLightingMode = i1759[34]
  i1758.ambientProbe = new pc.SphericalHarmonicsL2(i1759[35])
  i1758.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1759[36])
  i1758.useReferenceAmbientProbe = !!i1759[37]
  request.r(i1759[38], i1759[39], 0, i1758, 'customReflection')
  request.r(i1759[40], i1759[41], 0, i1758, 'defaultReflection')
  i1758.defaultReflectionMode = i1759[42]
  i1758.defaultReflectionResolution = i1759[43]
  i1758.sunLightObjectId = i1759[44]
  i1758.pixelLightCount = i1759[45]
  i1758.defaultReflectionHDR = !!i1759[46]
  i1758.hasLightDataAsset = !!i1759[47]
  i1758.hasManualGenerate = !!i1759[48]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'lightmapColor')
  request.r(i1765[2], i1765[3], 0, i1764, 'lightmapDirection')
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1766 = root || new UnityEngine.LightProbes()
  var i1767 = data
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1775 = data
  var i1777 = i1775[0]
  var i1776 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1777[i + 0]));
  }
  i1774.ShaderCompilationErrors = i1776
  i1774.name = i1775[1]
  i1774.guid = i1775[2]
  var i1779 = i1775[3]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( i1779[i + 0] );
  }
  i1774.shaderDefinedKeywords = i1778
  var i1781 = i1775[4]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1781[i + 0]) );
  }
  i1774.passes = i1780
  var i1783 = i1775[5]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1783[i + 0]) );
  }
  i1774.usePasses = i1782
  var i1785 = i1775[6]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1785[i + 0]) );
  }
  i1774.defaultParameterValues = i1784
  request.r(i1775[7], i1775[8], 0, i1774, 'unityFallbackShader')
  i1774.readDepth = !!i1775[9]
  i1774.isCreatedByShaderGraph = !!i1775[10]
  i1774.usedBatchUniforms = i1775[11]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1789 = data
  i1788.shaderName = i1789[0]
  i1788.errorMessage = i1789[1]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1792 = root || new pc.UnityShaderPass()
  var i1793 = data
  i1792.id = i1793[0]
  i1792.subShaderIndex = i1793[1]
  i1792.name = i1793[2]
  i1792.passType = i1793[3]
  i1792.grabPassTextureName = i1793[4]
  i1792.usePass = !!i1793[5]
  i1792.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[6], i1792.zTest)
  i1792.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[7], i1792.zWrite)
  i1792.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[8], i1792.culling)
  i1792.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1793[9], i1792.blending)
  i1792.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1793[10], i1792.alphaBlending)
  i1792.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[11], i1792.colorWriteMask)
  i1792.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[12], i1792.offsetUnits)
  i1792.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[13], i1792.offsetFactor)
  i1792.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[14], i1792.stencilRef)
  i1792.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[15], i1792.stencilReadMask)
  i1792.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1793[16], i1792.stencilWriteMask)
  i1792.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1793[17], i1792.stencilOp)
  i1792.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1793[18], i1792.stencilOpFront)
  i1792.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1793[19], i1792.stencilOpBack)
  var i1795 = i1793[20]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1795[i + 0]) );
  }
  i1792.tags = i1794
  var i1797 = i1793[21]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( i1797[i + 0] );
  }
  i1792.passDefinedKeywords = i1796
  var i1799 = i1793[22]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1799[i + 0]) );
  }
  i1792.passDefinedKeywordGroups = i1798
  var i1801 = i1793[23]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1801[i + 0]) );
  }
  i1792.variants = i1800
  var i1803 = i1793[24]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1803[i + 0]) );
  }
  i1792.excludedVariants = i1802
  i1792.hasDepthReader = !!i1793[25]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1805 = data
  i1804.val = i1805[0]
  i1804.name = i1805[1]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1807 = data
  i1806.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[0], i1806.src)
  i1806.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[1], i1806.dst)
  i1806.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[2], i1806.op)
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1809 = data
  i1808.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1809[0], i1808.pass)
  i1808.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1809[1], i1808.fail)
  i1808.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1809[2], i1808.zFail)
  i1808.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1809[3], i1808.comp)
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.value = i1813[1]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1817 = data
  var i1819 = i1817[0]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( i1819[i + 0] );
  }
  i1816.keywords = i1818
  i1816.hasDiscard = !!i1817[1]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1823 = data
  i1822.passId = i1823[0]
  i1822.subShaderIndex = i1823[1]
  var i1825 = i1823[2]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( i1825[i + 0] );
  }
  i1822.keywords = i1824
  i1822.vertexProgram = i1823[3]
  i1822.fragmentProgram = i1823[4]
  i1822.readDepth = !!i1823[5]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1829 = data
  request.r(i1829[0], i1829[1], 0, i1828, 'shader')
  i1828.pass = i1829[2]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1833 = data
  i1832.name = i1833[0]
  i1832.type = i1833[1]
  i1832.value = new pc.Vec4( i1833[2], i1833[3], i1833[4], i1833[5] )
  i1832.textureValue = i1833[6]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1835 = data
  i1834.name = i1835[0]
  request.r(i1835[1], i1835[2], 0, i1834, 'texture')
  i1834.aabb = i1835[3]
  i1834.vertices = i1835[4]
  i1834.triangles = i1835[5]
  i1834.textureRect = UnityEngine.Rect.MinMaxRect(i1835[6], i1835[7], i1835[8], i1835[9])
  i1834.packedRect = UnityEngine.Rect.MinMaxRect(i1835[10], i1835[11], i1835[12], i1835[13])
  i1834.border = new pc.Vec4( i1835[14], i1835[15], i1835[16], i1835[17] )
  i1834.transparency = i1835[18]
  i1834.bounds = i1835[19]
  i1834.pixelsPerUnit = i1835[20]
  i1834.textureWidth = i1835[21]
  i1834.textureHeight = i1835[22]
  i1834.nativeSize = new pc.Vec2( i1835[23], i1835[24] )
  i1834.pivot = new pc.Vec2( i1835[25], i1835[26] )
  i1834.textureRectOffset = new pc.Vec2( i1835[27], i1835[28] )
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.wrapMode = i1837[1]
  i1836.isLooping = !!i1837[2]
  i1836.length = i1837[3]
  var i1839 = i1837[4]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1839[i + 0]) );
  }
  i1836.curves = i1838
  var i1841 = i1837[5]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1841[i + 0]) );
  }
  i1836.events = i1840
  i1836.halfPrecision = !!i1837[6]
  i1836.frameRate = i1837[7]
  i1836.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1837[8], i1836.localBounds)
  i1836.hasMuscleCurves = !!i1837[9]
  var i1843 = i1837[10]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( i1843[i + 0] );
  }
  i1836.clipMuscleConstant = i1842
  i1836.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1837[11], i1836.clipBindingConstant)
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1847 = data
  i1846.path = i1847[0]
  i1846.componentType = i1847[1]
  i1846.property = i1847[2]
  i1846.keys = i1847[3]
  var i1849 = i1847[4]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1849[i + 0]) );
  }
  i1846.objectReferenceKeys = i1848
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1853 = data
  i1852.time = i1853[0]
  request.r(i1853[1], i1853[2], 0, i1852, 'value')
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1857 = data
  i1856.functionName = i1857[0]
  i1856.floatParameter = i1857[1]
  i1856.intParameter = i1857[2]
  i1856.stringParameter = i1857[3]
  request.r(i1857[4], i1857[5], 0, i1856, 'objectReferenceParameter')
  i1856.time = i1857[6]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1859 = data
  i1858.center = new pc.Vec3( i1859[0], i1859[1], i1859[2] )
  i1858.extends = new pc.Vec3( i1859[3], i1859[4], i1859[5] )
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1863 = data
  var i1865 = i1863[0]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( i1865[i + 0] );
  }
  i1862.genericBindings = i1864
  var i1867 = i1863[1]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( i1867[i + 0] );
  }
  i1862.pptrCurveMapping = i1866
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1869 = data
  i1868.name = i1869[0]
  i1868.ascent = i1869[1]
  i1868.originalLineHeight = i1869[2]
  i1868.fontSize = i1869[3]
  var i1871 = i1869[4]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1871[i + 0]) );
  }
  i1868.characterInfo = i1870
  request.r(i1869[5], i1869[6], 0, i1868, 'texture')
  i1868.originalFontSize = i1869[7]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1875 = data
  i1874.index = i1875[0]
  i1874.advance = i1875[1]
  i1874.bearing = i1875[2]
  i1874.glyphWidth = i1875[3]
  i1874.glyphHeight = i1875[4]
  i1874.minX = i1875[5]
  i1874.maxX = i1875[6]
  i1874.minY = i1875[7]
  i1874.maxY = i1875[8]
  i1874.uvBottomLeftX = i1875[9]
  i1874.uvBottomLeftY = i1875[10]
  i1874.uvBottomRightX = i1875[11]
  i1874.uvBottomRightY = i1875[12]
  i1874.uvTopLeftX = i1875[13]
  i1874.uvTopLeftY = i1875[14]
  i1874.uvTopRightX = i1875[15]
  i1874.uvTopRightY = i1875[16]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1877 = data
  i1876.name = i1877[0]
  var i1879 = i1877[1]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1879[i + 0]) );
  }
  i1876.states = i1878
  var i1881 = i1877[2]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1881[i + 0]) );
  }
  i1876.layers = i1880
  var i1883 = i1877[3]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1883[i + 0]) );
  }
  i1876.parameters = i1882
  i1876.animationClips = i1877[4]
  i1876.HasSubStateMachines = !!i1877[5]
  i1876.avatarUnsupported = i1877[6]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1887 = data
  i1886.cycleOffset = i1887[0]
  i1886.cycleOffsetParameter = i1887[1]
  i1886.cycleOffsetParameterActive = !!i1887[2]
  i1886.mirror = !!i1887[3]
  i1886.mirrorParameter = i1887[4]
  i1886.mirrorParameterActive = !!i1887[5]
  i1886.motionId = i1887[6]
  i1886.nameHash = i1887[7]
  i1886.fullPathHash = i1887[8]
  i1886.speed = i1887[9]
  i1886.speedParameter = i1887[10]
  i1886.speedParameterActive = !!i1887[11]
  i1886.tag = i1887[12]
  i1886.name = i1887[13]
  i1886.layer = i1887[14]
  i1886.writeDefaultValues = !!i1887[15]
  var i1889 = i1887[16]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1889[i + 0]) );
  }
  i1886.transitions = i1888
  var i1891 = i1887[17]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 2) {
  request.r(i1891[i + 0], i1891[i + 1], 2, i1890, '')
  }
  i1886.behaviours = i1890
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1895 = data
  i1894.fullPath = i1895[0]
  i1894.canTransitionToSelf = !!i1895[1]
  i1894.duration = i1895[2]
  i1894.exitTime = i1895[3]
  i1894.hasExitTime = !!i1895[4]
  i1894.hasFixedDuration = !!i1895[5]
  i1894.interruptionSource = i1895[6]
  i1894.offset = i1895[7]
  i1894.orderedInterruption = !!i1895[8]
  i1894.destinationStateNameHash = i1895[9]
  i1894.destinationStateMachineId = i1895[10]
  i1894.isExit = !!i1895[11]
  i1894.mute = !!i1895[12]
  i1894.solo = !!i1895[13]
  var i1897 = i1895[14]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1897[i + 0]) );
  }
  i1894.conditions = i1896
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1901 = data
  i1900.mode = i1901[0]
  i1900.parameter = i1901[1]
  i1900.threshold = i1901[2]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1907 = data
  i1906.blendingMode = i1907[0]
  i1906.defaultWeight = i1907[1]
  i1906.name = i1907[2]
  i1906.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1907[3], i1906.stateMachine)
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1909 = data
  i1908.id = i1909[0]
  i1908.defaultStateNameHash = i1909[1]
  var i1911 = i1909[2]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1911[i + 0]) );
  }
  i1908.entryTransitions = i1910
  var i1913 = i1909[3]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1913[i + 0]) );
  }
  i1908.anyStateTransitions = i1912
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1917 = data
  i1916.destinationStateNameHash = i1917[0]
  i1916.destinationStateMachineId = i1917[1]
  i1916.isExit = !!i1917[2]
  i1916.mute = !!i1917[3]
  i1916.solo = !!i1917[4]
  var i1919 = i1917[5]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1919[i + 0]) );
  }
  i1916.conditions = i1918
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1923 = data
  i1922.defaultBool = !!i1923[0]
  i1922.defaultFloat = i1923[1]
  i1922.defaultInt = i1923[2]
  i1922.name = i1923[3]
  i1922.nameHash = i1923[4]
  i1922.type = i1923[5]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1925 = data
  i1924.name = i1925[0]
  i1924.bytes64 = i1925[1]
  i1924.data = i1925[2]
  return i1924
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1926 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1927 = data
  var i1929 = i1927[0]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 2, i1928, '')
  }
  i1926.atlasAssets = i1928
  i1926.scale = i1927[1]
  request.r(i1927[2], i1927[3], 0, i1926, 'skeletonJSON')
  i1926.isUpgradingBlendModeMaterials = !!i1927[4]
  i1926.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1927[5], i1926.blendModeMaterials)
  var i1931 = i1927[6]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 1, i1930, '')
  }
  i1926.skeletonDataModifiers = i1930
  var i1933 = i1927[7]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( i1933[i + 0] );
  }
  i1926.fromAnimation = i1932
  var i1935 = i1927[8]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( i1935[i + 0] );
  }
  i1926.toAnimation = i1934
  i1926.duration = i1927[9]
  i1926.defaultMix = i1927[10]
  request.r(i1927[11], i1927[12], 0, i1926, 'controller')
  return i1926
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1938 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1939 = data
  i1938.applyAdditiveMaterial = !!i1939[0]
  var i1941 = i1939[1]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1941[i + 0]));
  }
  i1938.additiveMaterials = i1940
  var i1943 = i1939[2]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1943[i + 0]));
  }
  i1938.multiplyMaterials = i1942
  var i1945 = i1939[3]
  var i1944 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1945[i + 0]));
  }
  i1938.screenMaterials = i1944
  i1938.requiresBlendModeMaterials = !!i1939[4]
  return i1938
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1948 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1949 = data
  i1948.pageName = i1949[0]
  request.r(i1949[1], i1949[2], 0, i1948, 'material')
  return i1948
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1952 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'atlasFile')
  var i1955 = i1953[2]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 2, i1954, '')
  }
  i1952.materials = i1954
  i1952.textureLoadingMode = i1953[3]
  request.r(i1953[4], i1953[5], 0, i1952, 'onDemandTextureLoader')
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1957 = data
  var i1959 = i1957[0]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1959[i + 0]) );
  }
  i1956.files = i1958
  i1956.componentToPrefabIds = i1957[1]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1963 = data
  i1962.path = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'unityObject')
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1965 = data
  var i1967 = i1965[0]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1967[i + 0]) );
  }
  i1964.scriptsExecutionOrder = i1966
  var i1969 = i1965[1]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1969[i + 0]) );
  }
  i1964.sortingLayers = i1968
  var i1971 = i1965[2]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1971[i + 0]) );
  }
  i1964.cullingLayers = i1970
  i1964.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1965[3], i1964.timeSettings)
  i1964.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1965[4], i1964.physicsSettings)
  i1964.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1965[5], i1964.physics2DSettings)
  i1964.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1965[6], i1964.qualitySettings)
  i1964.enableRealtimeShadows = !!i1965[7]
  i1964.enableAutoInstancing = !!i1965[8]
  i1964.enableDynamicBatching = !!i1965[9]
  i1964.lightmapEncodingQuality = i1965[10]
  i1964.desiredColorSpace = i1965[11]
  var i1973 = i1965[12]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( i1973[i + 0] );
  }
  i1964.allTags = i1972
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.value = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1981 = data
  i1980.id = i1981[0]
  i1980.name = i1981[1]
  i1980.value = i1981[2]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1985 = data
  i1984.id = i1985[0]
  i1984.name = i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1987 = data
  i1986.fixedDeltaTime = i1987[0]
  i1986.maximumDeltaTime = i1987[1]
  i1986.timeScale = i1987[2]
  i1986.maximumParticleTimestep = i1987[3]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1989 = data
  i1988.gravity = new pc.Vec3( i1989[0], i1989[1], i1989[2] )
  i1988.defaultSolverIterations = i1989[3]
  i1988.bounceThreshold = i1989[4]
  i1988.autoSyncTransforms = !!i1989[5]
  i1988.autoSimulation = !!i1989[6]
  var i1991 = i1989[7]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1991[i + 0]) );
  }
  i1988.collisionMatrix = i1990
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1995 = data
  i1994.enabled = !!i1995[0]
  i1994.layerId = i1995[1]
  i1994.otherLayerId = i1995[2]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'material')
  i1996.gravity = new pc.Vec2( i1997[2], i1997[3] )
  i1996.positionIterations = i1997[4]
  i1996.velocityIterations = i1997[5]
  i1996.velocityThreshold = i1997[6]
  i1996.maxLinearCorrection = i1997[7]
  i1996.maxAngularCorrection = i1997[8]
  i1996.maxTranslationSpeed = i1997[9]
  i1996.maxRotationSpeed = i1997[10]
  i1996.baumgarteScale = i1997[11]
  i1996.baumgarteTOIScale = i1997[12]
  i1996.timeToSleep = i1997[13]
  i1996.linearSleepTolerance = i1997[14]
  i1996.angularSleepTolerance = i1997[15]
  i1996.defaultContactOffset = i1997[16]
  i1996.autoSimulation = !!i1997[17]
  i1996.queriesHitTriggers = !!i1997[18]
  i1996.queriesStartInColliders = !!i1997[19]
  i1996.callbacksOnDisable = !!i1997[20]
  i1996.reuseCollisionCallbacks = !!i1997[21]
  i1996.autoSyncTransforms = !!i1997[22]
  var i1999 = i1997[23]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1999[i + 0]) );
  }
  i1996.collisionMatrix = i1998
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2003 = data
  i2002.enabled = !!i2003[0]
  i2002.layerId = i2003[1]
  i2002.otherLayerId = i2003[2]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2005 = data
  var i2007 = i2005[0]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2007[i + 0]) );
  }
  i2004.qualityLevels = i2006
  var i2009 = i2005[1]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( i2009[i + 0] );
  }
  i2004.names = i2008
  i2004.shadows = i2005[2]
  i2004.anisotropicFiltering = i2005[3]
  i2004.antiAliasing = i2005[4]
  i2004.lodBias = i2005[5]
  i2004.shadowCascades = i2005[6]
  i2004.shadowDistance = i2005[7]
  i2004.shadowmaskMode = i2005[8]
  i2004.shadowProjection = i2005[9]
  i2004.shadowResolution = i2005[10]
  i2004.softParticles = !!i2005[11]
  i2004.softVegetation = !!i2005[12]
  i2004.activeColorSpace = i2005[13]
  i2004.desiredColorSpace = i2005[14]
  i2004.masterTextureLimit = i2005[15]
  i2004.maxQueuedFrames = i2005[16]
  i2004.particleRaycastBudget = i2005[17]
  i2004.pixelLightCount = i2005[18]
  i2004.realtimeReflectionProbes = !!i2005[19]
  i2004.shadowCascade2Split = i2005[20]
  i2004.shadowCascade4Split = new pc.Vec3( i2005[21], i2005[22], i2005[23] )
  i2004.streamingMipmapsActive = !!i2005[24]
  i2004.vSyncCount = i2005[25]
  i2004.asyncUploadBufferSize = i2005[26]
  i2004.asyncUploadTimeSlice = i2005[27]
  i2004.billboardsFaceCameraPosition = !!i2005[28]
  i2004.shadowNearPlaneOffset = i2005[29]
  i2004.streamingMipmapsMemoryBudget = i2005[30]
  i2004.maximumLODLevel = i2005[31]
  i2004.streamingMipmapsAddAllCameras = !!i2005[32]
  i2004.streamingMipmapsMaxLevelReduction = i2005[33]
  i2004.streamingMipmapsRenderersPerFrame = i2005[34]
  i2004.resolutionScalingFixedDPIFactor = i2005[35]
  i2004.streamingMipmapsMaxFileIORequests = i2005[36]
  i2004.currentQualityLevel = i2005[37]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2015 = data
  i2014.weight = i2015[0]
  i2014.vertices = i2015[1]
  i2014.normals = i2015[2]
  i2014.tangents = i2015[3]
  return i2014
>>>>>>> 022d62e (업뎃)
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[15],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[15],"80":[5],"81":[82],"83":[82],"17":[14],"84":[85],"36":[14],"37":[21,14],"86":[5],"35":[21,14],"10":[7,5],"87":[5],"88":[5,3],"89":[58],"90":[66],"91":[85],"92":[93],"94":[14],"95":[5,14],"96":[14,21],"97":[14],"98":[21,14],"99":[5],"100":[21,14],"101":[14],"102":[103],"104":[14],"105":[14],"20":[17],"22":[21,14],"106":[14],"19":[17],"25":[14],"24":[14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[14],"114":[21,14],"115":[14],"116":[14],"117":[14],"30":[14],"31":[21,14],"118":[14],"119":[38],"120":[38],"39":[38],"121":[38],"122":[15],"123":[15],"124":[103],"125":[103]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","enemy","player","UnityEngine.RectTransform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","test","UnityEngine.GameObject","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","endCard","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","bread","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "05/16/2024 08:06:18";

<<<<<<< HEAD
Deserializers.lunaDaysRunning = "0.0";
=======
Deserializers.lunaDaysRunning = "3.2";
>>>>>>> 022d62e (업뎃)

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1695";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3655";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.My-project--1-";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

<<<<<<< HEAD
Deserializers.buildID = "dab6b8a4-d471-40a7-adbc-99921bcd8c24";
=======
Deserializers.buildID = "a1ac7b05-a292-40b3-9e3d-54f518d2fe83";
>>>>>>> 022d62e (업뎃)

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

