var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
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
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[15],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[15],"79":[4],"80":[81],"82":[81],"17":[14],"83":[84],"36":[14],"37":[21,14],"85":[4],"35":[21,14],"9":[6,4],"86":[4],"87":[4,2],"88":[57],"89":[65],"90":[84],"91":[92],"93":[14],"94":[4,14],"95":[14,21],"96":[14],"97":[21,14],"98":[4],"99":[21,14],"100":[14],"101":[102],"103":[14],"104":[14],"20":[17],"22":[21,14],"105":[14],"19":[17],"25":[14],"24":[14],"106":[14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[21,14],"114":[14],"115":[14],"116":[14],"30":[14],"31":[21,14],"117":[14],"118":[38],"119":[38],"39":[38],"120":[38],"121":[15],"122":[15],"123":[102],"124":[102]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","enemy","UnityEngine.Texture2D","player","UnityEngine.RectTransform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","test","UnityEngine.GameObject","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","endCard","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "05/16/2024 08:06:18";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1687";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3656";

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

Deserializers.buildID = "dab6b8a4-d471-40a7-adbc-99921bcd8c24";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

