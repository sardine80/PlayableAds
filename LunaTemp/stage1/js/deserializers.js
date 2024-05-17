var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.JointSpring' )
  var i1525 = data
  i1524.spring = i1525[0]
  i1524.damper = i1525[1]
  i1524.targetPosition = i1525[2]
  return i1524
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.JointMotor' )
  var i1527 = data
  i1526.m_TargetVelocity = i1527[0]
  i1526.m_Force = i1527[1]
  i1526.m_FreeSpin = i1527[2]
  return i1526
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.JointLimits' )
  var i1529 = data
  i1528.m_Min = i1529[0]
  i1528.m_Max = i1529[1]
  i1528.m_Bounciness = i1529[2]
  i1528.m_BounceMinVelocity = i1529[3]
  i1528.m_ContactDistance = i1529[4]
  i1528.minBounce = i1529[5]
  i1528.maxBounce = i1529[6]
  return i1528
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.JointDrive' )
  var i1531 = data
  i1530.m_PositionSpring = i1531[0]
  i1530.m_PositionDamper = i1531[1]
  i1530.m_MaximumForce = i1531[2]
  return i1530
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1533 = data
  i1532.m_Spring = i1533[0]
  i1532.m_Damper = i1533[1]
  return i1532
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1535 = data
  i1534.m_Limit = i1535[0]
  i1534.m_Bounciness = i1535[1]
  i1534.m_ContactDistance = i1535[2]
  return i1534
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1537 = data
  i1536.m_ExtremumSlip = i1537[0]
  i1536.m_ExtremumValue = i1537[1]
  i1536.m_AsymptoteSlip = i1537[2]
  i1536.m_AsymptoteValue = i1537[3]
  i1536.m_Stiffness = i1537[4]
  return i1536
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1539 = data
  i1538.m_LowerAngle = i1539[0]
  i1538.m_UpperAngle = i1539[1]
  return i1538
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1541 = data
  i1540.m_MotorSpeed = i1541[0]
  i1540.m_MaximumMotorTorque = i1541[1]
  return i1540
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1543 = data
  i1542.m_DampingRatio = i1543[0]
  i1542.m_Frequency = i1543[1]
  i1542.m_Angle = i1543[2]
  return i1542
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1545 = data
  i1544.m_LowerTranslation = i1545[0]
  i1544.m_UpperTranslation = i1545[1]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1546 = root || new pc.UnityMaterial()
  var i1547 = data
  i1546.name = i1547[0]
  request.r(i1547[1], i1547[2], 0, i1546, 'shader')
  i1546.renderQueue = i1547[3]
  i1546.enableInstancing = !!i1547[4]
  var i1549 = i1547[5]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1549[i + 0]) );
  }
  i1546.floatParameters = i1548
  var i1551 = i1547[6]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1551[i + 0]) );
  }
  i1546.colorParameters = i1550
  var i1553 = i1547[7]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1553[i + 0]) );
  }
  i1546.vectorParameters = i1552
  var i1555 = i1547[8]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1555[i + 0]) );
  }
  i1546.textureParameters = i1554
  var i1557 = i1547[9]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1557[i + 0]) );
  }
  i1546.materialFlags = i1556
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.value = i1561[1]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.value = new pc.Color(i1565[1], i1565[2], i1565[3], i1565[4])
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1569 = data
  i1568.name = i1569[0]
  i1568.value = new pc.Vec4( i1569[1], i1569[2], i1569[3], i1569[4] )
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1573 = data
  i1572.name = i1573[0]
  request.r(i1573[1], i1573[2], 0, i1572, 'value')
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.enabled = !!i1577[1]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1579 = data
  i1578.name = i1579[0]
  i1578.width = i1579[1]
  i1578.height = i1579[2]
  i1578.mipmapCount = i1579[3]
  i1578.anisoLevel = i1579[4]
  i1578.filterMode = i1579[5]
  i1578.hdr = !!i1579[6]
  i1578.format = i1579[7]
  i1578.wrapMode = i1579[8]
  i1578.alphaIsTransparency = !!i1579[9]
  i1578.alphaSource = i1579[10]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1581 = data
  i1580.position = new pc.Vec3( i1581[0], i1581[1], i1581[2] )
  i1580.scale = new pc.Vec3( i1581[3], i1581[4], i1581[5] )
  i1580.rotation = new pc.Quat(i1581[6], i1581[7], i1581[8], i1581[9])
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'sharedMesh')
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'additionalVertexStreams')
  i1584.enabled = !!i1585[2]
  request.r(i1585[3], i1585[4], 0, i1584, 'sharedMaterial')
  var i1587 = i1585[5]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 2) {
  request.r(i1587[i + 0], i1587[i + 1], 2, i1586, '')
  }
  i1584.sharedMaterials = i1586
  i1584.receiveShadows = !!i1585[6]
  i1584.shadowCastingMode = i1585[7]
  i1584.sortingLayerID = i1585[8]
  i1584.sortingOrder = i1585[9]
  i1584.lightmapIndex = i1585[10]
  i1584.lightmapSceneIndex = i1585[11]
  i1584.lightmapScaleOffset = new pc.Vec4( i1585[12], i1585[13], i1585[14], i1585[15] )
  i1584.lightProbeUsage = i1585[16]
  i1584.reflectionProbeUsage = i1585[17]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'animatorController')
  request.r(i1591[2], i1591[3], 0, i1590, 'avatar')
  i1590.updateMode = i1591[4]
  i1590.hasTransformHierarchy = !!i1591[5]
  i1590.applyRootMotion = !!i1591[6]
  var i1593 = i1591[7]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 2) {
  request.r(i1593[i + 0], i1593[i + 1], 2, i1592, '')
  }
  i1590.humanBones = i1592
  i1590.enabled = !!i1591[8]
  return i1590
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i1596 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'skeletonDataAsset')
  i1596.initialSkinName = i1597[2]
  i1596.fixPrefabOverrideViaMeshFilter = i1597[3]
  i1596.initialFlipX = !!i1597[4]
  i1596.initialFlipY = !!i1597[5]
  i1596.updateWhenInvisible = i1597[6]
  i1596.zSpacing = i1597[7]
  i1596.useClipping = !!i1597[8]
  i1596.immutableTriangles = !!i1597[9]
  i1596.pmaVertexColors = !!i1597[10]
  i1596.clearStateOnDisable = !!i1597[11]
  i1596.tintBlack = !!i1597[12]
  i1596.singleSubmesh = !!i1597[13]
  i1596.fixDrawOrder = !!i1597[14]
  i1596.addNormals = !!i1597[15]
  i1596.calculateTangents = !!i1597[16]
  i1596.maskInteraction = i1597[17]
  i1596.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1597[18], i1596.maskMaterials)
  i1596.disableRenderingOnOverride = !!i1597[19]
  i1596.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i1597[20], i1596.translator)
  i1596.updateTiming = i1597[21]
  var i1599 = i1597[22]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( i1599[i + 0] );
  }
  i1596.separatorSlotNames = i1598
  return i1596
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1600 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1601 = data
  var i1603 = i1601[0]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 2) {
  request.r(i1603[i + 0], i1603[i + 1], 2, i1602, '')
  }
  i1600.materialsMaskDisabled = i1602
  var i1605 = i1601[1]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 2) {
  request.r(i1605[i + 0], i1605[i + 1], 2, i1604, '')
  }
  i1600.materialsInsideMask = i1604
  var i1607 = i1601[2]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 2, i1606, '')
  }
  i1600.materialsOutsideMask = i1606
  return i1600
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i1608 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i1609 = data
  i1608.autoReset = !!i1609[0]
  i1608.useCustomMixMode = !!i1609[1]
  var i1611 = i1609[2]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( i1611[i + 0] );
  }
  i1608.layerMixModes = i1610
  var i1613 = i1609[3]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( i1613[i + 0] );
  }
  i1608.layerBlendModes = i1612
  return i1608
}

Deserializers["enemy"] = function (request, data, root) {
  var i1620 = root || request.c( 'enemy' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'gm')
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.tagId = i1623[1]
  i1622.enabled = !!i1623[2]
  i1622.isStatic = !!i1623[3]
  i1622.layer = i1623[4]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1625 = data
  i1624.name = i1625[0]
  i1624.halfPrecision = !!i1625[1]
  i1624.vertexCount = i1625[2]
  i1624.aabb = i1625[3]
  var i1627 = i1625[4]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( !!i1627[i + 0] );
  }
  i1624.streams = i1626
  i1624.vertices = i1625[5]
  var i1629 = i1625[6]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1629[i + 0]) );
  }
  i1624.subMeshes = i1628
  var i1631 = i1625[7]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 16) {
    i1630.push( new pc.Mat4().setData(i1631[i + 0], i1631[i + 1], i1631[i + 2], i1631[i + 3],  i1631[i + 4], i1631[i + 5], i1631[i + 6], i1631[i + 7],  i1631[i + 8], i1631[i + 9], i1631[i + 10], i1631[i + 11],  i1631[i + 12], i1631[i + 13], i1631[i + 14], i1631[i + 15]) );
  }
  i1624.bindposes = i1630
  var i1633 = i1625[8]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1633[i + 0]) );
  }
  i1624.blendShapes = i1632
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1639 = data
  i1638.triangles = i1639[0]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1645 = data
  i1644.name = i1645[0]
  var i1647 = i1645[1]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1647[i + 0]) );
  }
  i1644.frames = i1646
  return i1644
}

Deserializers["player"] = function (request, data, root) {
  var i1648 = root || request.c( 'player' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'gm')
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1651 = data
  i1650.name = i1651[0]
  i1650.atlasId = i1651[1]
  i1650.mipmapCount = i1651[2]
  i1650.hdr = !!i1651[3]
  i1650.size = i1651[4]
  i1650.anisoLevel = i1651[5]
  i1650.filterMode = i1651[6]
  i1650.wrapMode = i1651[7]
  var i1653 = i1651[8]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 4) {
    i1652.push( UnityEngine.Rect.MinMaxRect(i1653[i + 0], i1653[i + 1], i1653[i + 2], i1653[i + 3]) );
  }
  i1650.rects = i1652
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.index = i1657[1]
  i1656.startup = !!i1657[2]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1659 = data
  i1658.pivot = new pc.Vec2( i1659[0], i1659[1] )
  i1658.anchorMin = new pc.Vec2( i1659[2], i1659[3] )
  i1658.anchorMax = new pc.Vec2( i1659[4], i1659[5] )
  i1658.sizeDelta = new pc.Vec2( i1659[6], i1659[7] )
  i1658.anchoredPosition3D = new pc.Vec3( i1659[8], i1659[9], i1659[10] )
  i1658.rotation = new pc.Quat(i1659[11], i1659[12], i1659[13], i1659[14])
  i1658.scale = new pc.Vec3( i1659[15], i1659[16], i1659[17] )
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1661 = data
  i1660.enabled = !!i1661[0]
  i1660.aspect = i1661[1]
  i1660.orthographic = !!i1661[2]
  i1660.orthographicSize = i1661[3]
  i1660.backgroundColor = new pc.Color(i1661[4], i1661[5], i1661[6], i1661[7])
  i1660.nearClipPlane = i1661[8]
  i1660.farClipPlane = i1661[9]
  i1660.fieldOfView = i1661[10]
  i1660.depth = i1661[11]
  i1660.clearFlags = i1661[12]
  i1660.cullingMask = i1661[13]
  i1660.rect = i1661[14]
  request.r(i1661[15], i1661[16], 0, i1660, 'targetTexture')
  i1660.usePhysicalProperties = !!i1661[17]
  i1660.focalLength = i1661[18]
  i1660.sensorSize = new pc.Vec2( i1661[19], i1661[20] )
  i1660.lensShift = new pc.Vec2( i1661[21], i1661[22] )
  i1660.gateFit = i1661[23]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1663 = data
  i1662.enabled = !!i1663[0]
  i1662.planeDistance = i1663[1]
  i1662.referencePixelsPerUnit = i1663[2]
  i1662.isFallbackOverlay = !!i1663[3]
  i1662.renderMode = i1663[4]
  i1662.renderOrder = i1663[5]
  i1662.sortingLayerName = i1663[6]
  i1662.sortingOrder = i1663[7]
  i1662.scaleFactor = i1663[8]
  request.r(i1663[9], i1663[10], 0, i1662, 'worldCamera')
  i1662.overrideSorting = !!i1663[11]
  i1662.pixelPerfect = !!i1663[12]
  i1662.targetDisplay = i1663[13]
  i1662.overridePixelPerfect = !!i1663[14]
  return i1662
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1665 = data
  i1664.m_UiScaleMode = i1665[0]
  i1664.m_ReferencePixelsPerUnit = i1665[1]
  i1664.m_ScaleFactor = i1665[2]
  i1664.m_ReferenceResolution = new pc.Vec2( i1665[3], i1665[4] )
  i1664.m_ScreenMatchMode = i1665[5]
  i1664.m_MatchWidthOrHeight = i1665[6]
  i1664.m_PhysicalUnit = i1665[7]
  i1664.m_FallbackScreenDPI = i1665[8]
  i1664.m_DefaultSpriteDPI = i1665[9]
  i1664.m_DynamicPixelsPerUnit = i1665[10]
  i1664.m_PresetInfoIsWorld = !!i1665[11]
  return i1664
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1667 = data
  i1666.m_IgnoreReversedGraphics = !!i1667[0]
  i1666.m_BlockingObjects = i1667[1]
  i1666.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1667[2] )
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1669 = data
  i1668.cullTransparentMesh = !!i1669[0]
  return i1668
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.Image' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'm_Sprite')
  i1670.m_Type = i1671[2]
  i1670.m_PreserveAspect = !!i1671[3]
  i1670.m_FillCenter = !!i1671[4]
  i1670.m_FillMethod = i1671[5]
  i1670.m_FillAmount = i1671[6]
  i1670.m_FillClockwise = !!i1671[7]
  i1670.m_FillOrigin = i1671[8]
  i1670.m_UseSpriteMesh = !!i1671[9]
  i1670.m_PixelsPerUnitMultiplier = i1671[10]
  request.r(i1671[11], i1671[12], 0, i1670, 'm_Material')
  i1670.m_Maskable = !!i1671[13]
  i1670.m_Color = new pc.Color(i1671[14], i1671[15], i1671[16], i1671[17])
  i1670.m_RaycastTarget = !!i1671[18]
  i1670.m_RaycastPadding = new pc.Vec4( i1671[19], i1671[20], i1671[21], i1671[22] )
  return i1670
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1673 = data
  i1672.m_StartCorner = i1673[0]
  i1672.m_StartAxis = i1673[1]
  i1672.m_CellSize = new pc.Vec2( i1673[2], i1673[3] )
  i1672.m_Spacing = new pc.Vec2( i1673[4], i1673[5] )
  i1672.m_Constraint = i1673[6]
  i1672.m_ConstraintCount = i1673[7]
  i1672.m_Padding = UnityEngine.RectOffset.FromPaddings(i1673[8], i1673[9], i1673[10], i1673[11])
  i1672.m_ChildAlignment = i1673[12]
  return i1672
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1675 = data
  i1674.m_HorizontalFit = i1675[0]
  i1674.m_VerticalFit = i1675[1]
  return i1674
}

Deserializers["test"] = function (request, data, root) {
  var i1676 = root || request.c( 'test' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'img')
  request.r(i1677[2], i1677[3], 0, i1676, 'sprite')
  request.r(i1677[4], i1677[5], 0, i1676, 'bg')
  i1676.x = i1677[6]
  request.r(i1677[7], i1677[8], 0, i1676, 'gm')
  i1676.scaleChangeTime = i1677[9]
  i1676.clickScale = i1677[10]
  i1676.clearScale = i1677[11]
  i1676.effectIndex = i1677[12]
  return i1676
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.UI.Button' )
  var i1679 = data
  i1678.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1679[0], i1678.m_OnClick)
  i1678.m_Navigation = request.d('UnityEngine.UI.Navigation', i1679[1], i1678.m_Navigation)
  i1678.m_Transition = i1679[2]
  i1678.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1679[3], i1678.m_Colors)
  i1678.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1679[4], i1678.m_SpriteState)
  i1678.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1679[5], i1678.m_AnimationTriggers)
  i1678.m_Interactable = !!i1679[6]
  request.r(i1679[7], i1679[8], 0, i1678, 'm_TargetGraphic')
  return i1678
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1681 = data
  i1680.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1681[0], i1680.m_PersistentCalls)
  return i1680
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1683 = data
  var i1685 = i1683[0]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(request.d('UnityEngine.Events.PersistentCall', i1685[i + 0]));
  }
  i1682.m_Calls = i1684
  return i1682
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'm_Target')
  i1688.m_TargetAssemblyTypeName = i1689[2]
  i1688.m_MethodName = i1689[3]
  i1688.m_Mode = i1689[4]
  i1688.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1689[5], i1688.m_Arguments)
  i1688.m_CallState = i1689[6]
  return i1688
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'm_ObjectArgument')
  i1690.m_ObjectArgumentAssemblyTypeName = i1691[2]
  i1690.m_IntArgument = i1691[3]
  i1690.m_FloatArgument = i1691[4]
  i1690.m_StringArgument = i1691[5]
  i1690.m_BoolArgument = !!i1691[6]
  return i1690
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1693 = data
  i1692.m_Mode = i1693[0]
  i1692.m_WrapAround = !!i1693[1]
  request.r(i1693[2], i1693[3], 0, i1692, 'm_SelectOnUp')
  request.r(i1693[4], i1693[5], 0, i1692, 'm_SelectOnDown')
  request.r(i1693[6], i1693[7], 0, i1692, 'm_SelectOnLeft')
  request.r(i1693[8], i1693[9], 0, i1692, 'm_SelectOnRight')
  return i1692
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1695 = data
  i1694.m_NormalColor = new pc.Color(i1695[0], i1695[1], i1695[2], i1695[3])
  i1694.m_HighlightedColor = new pc.Color(i1695[4], i1695[5], i1695[6], i1695[7])
  i1694.m_PressedColor = new pc.Color(i1695[8], i1695[9], i1695[10], i1695[11])
  i1694.m_SelectedColor = new pc.Color(i1695[12], i1695[13], i1695[14], i1695[15])
  i1694.m_DisabledColor = new pc.Color(i1695[16], i1695[17], i1695[18], i1695[19])
  i1694.m_ColorMultiplier = i1695[20]
  i1694.m_FadeDuration = i1695[21]
  return i1694
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'm_HighlightedSprite')
  request.r(i1697[2], i1697[3], 0, i1696, 'm_PressedSprite')
  request.r(i1697[4], i1697[5], 0, i1696, 'm_SelectedSprite')
  request.r(i1697[6], i1697[7], 0, i1696, 'm_DisabledSprite')
  return i1696
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1699 = data
  i1698.m_NormalTrigger = i1699[0]
  i1698.m_HighlightedTrigger = i1699[1]
  i1698.m_PressedTrigger = i1699[2]
  i1698.m_SelectedTrigger = i1699[3]
  i1698.m_DisabledTrigger = i1699[4]
  return i1698
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'm_FillRect')
  request.r(i1701[2], i1701[3], 0, i1700, 'm_HandleRect')
  i1700.m_Direction = i1701[4]
  i1700.m_MinValue = i1701[5]
  i1700.m_MaxValue = i1701[6]
  i1700.m_WholeNumbers = !!i1701[7]
  i1700.m_Value = i1701[8]
  i1700.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1701[9], i1700.m_OnValueChanged)
  i1700.m_Navigation = request.d('UnityEngine.UI.Navigation', i1701[10], i1700.m_Navigation)
  i1700.m_Transition = i1701[11]
  i1700.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1701[12], i1700.m_Colors)
  i1700.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1701[13], i1700.m_SpriteState)
  i1700.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1701[14], i1700.m_AnimationTriggers)
  i1700.m_Interactable = !!i1701[15]
  request.r(i1701[16], i1701[17], 0, i1700, 'm_TargetGraphic')
  return i1700
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1703 = data
  i1702.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1703[0], i1702.m_PersistentCalls)
  return i1702
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.UI.Text' )
  var i1705 = data
  i1704.m_FontData = request.d('UnityEngine.UI.FontData', i1705[0], i1704.m_FontData)
  i1704.m_Text = i1705[1]
  request.r(i1705[2], i1705[3], 0, i1704, 'm_Material')
  i1704.m_Maskable = !!i1705[4]
  i1704.m_Color = new pc.Color(i1705[5], i1705[6], i1705[7], i1705[8])
  i1704.m_RaycastTarget = !!i1705[9]
  i1704.m_RaycastPadding = new pc.Vec4( i1705[10], i1705[11], i1705[12], i1705[13] )
  return i1704
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'm_Font')
  i1706.m_FontSize = i1707[2]
  i1706.m_FontStyle = i1707[3]
  i1706.m_BestFit = !!i1707[4]
  i1706.m_MinSize = i1707[5]
  i1706.m_MaxSize = i1707[6]
  i1706.m_Alignment = i1707[7]
  i1706.m_AlignByGeometry = !!i1707[8]
  i1706.m_RichText = !!i1707[9]
  i1706.m_HorizontalOverflow = i1707[10]
  i1706.m_VerticalOverflow = i1707[11]
  i1706.m_LineSpacing = i1707[12]
  return i1706
}

Deserializers["endCard"] = function (request, data, root) {
  var i1708 = root || request.c( 'endCard' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'gm')
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'clip')
  request.r(i1711[2], i1711[3], 0, i1710, 'outputAudioMixerGroup')
  i1710.playOnAwake = !!i1711[4]
  i1710.loop = !!i1711[5]
  i1710.time = i1711[6]
  i1710.volume = i1711[7]
  i1710.pitch = i1711[8]
  i1710.enabled = !!i1711[9]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1713 = data
  i1712.m_Alpha = i1713[0]
  i1712.m_Interactable = !!i1713[1]
  i1712.m_BlocksRaycasts = !!i1713[2]
  i1712.m_IgnoreParentGroups = !!i1713[3]
  i1712.enabled = !!i1713[4]
  return i1712
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1714 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'skeletonDataAsset')
  request.r(i1715[2], i1715[3], 0, i1714, 'additiveMaterial')
  request.r(i1715[4], i1715[5], 0, i1714, 'multiplyMaterial')
  request.r(i1715[6], i1715[7], 0, i1714, 'screenMaterial')
  i1714.initialSkinName = i1715[8]
  i1714.initialFlipX = !!i1715[9]
  i1714.initialFlipY = !!i1715[10]
  i1714.startingAnimation = i1715[11]
  i1714.startingLoop = !!i1715[12]
  i1714.timeScale = i1715[13]
  i1714.freeze = !!i1715[14]
  i1714.layoutScaleMode = i1715[15]
  i1714.updateWhenInvisible = i1715[16]
  i1714.allowMultipleCanvasRenderers = !!i1715[17]
  var i1717 = i1715[18]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1717.length; i += 2) {
  request.r(i1717[i + 0], i1717[i + 1], 1, i1716, '')
  }
  i1714.canvasRenderers = i1716
  i1714.enableSeparatorSlots = !!i1715[19]
  i1714.updateSeparatorPartLocation = !!i1715[20]
  i1714.updateSeparatorPartScale = !!i1715[21]
  i1714.disableMeshAssignmentOnOverride = !!i1715[22]
  i1714.referenceSize = new pc.Vec2( i1715[23], i1715[24] )
  i1714.referenceScale = i1715[25]
  i1714.rectTransformSize = new pc.Vec2( i1715[26], i1715[27] )
  i1714.editReferenceRect = !!i1715[28]
  var i1719 = i1715[29]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( i1719[i + 0] );
  }
  i1714.separatorSlotNames = i1718
  var i1721 = i1715[30]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 1, i1720, '')
  }
  i1714.separatorParts = i1720
  i1714.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1715[31], i1714.meshGenerator)
  i1714.updateTiming = i1715[32]
  i1714.unscaledTime = !!i1715[33]
  request.r(i1715[34], i1715[35], 0, i1714, 'm_Material')
  i1714.m_Maskable = !!i1715[36]
  i1714.m_Color = new pc.Color(i1715[37], i1715[38], i1715[39], i1715[40])
  i1714.m_RaycastTarget = !!i1715[41]
  i1714.m_RaycastPadding = new pc.Vec4( i1715[42], i1715[43], i1715[44], i1715[45] )
  return i1714
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1726 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1727 = data
  i1726.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1727[0], i1726.settings)
  return i1726
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1728 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1729 = data
  i1728.useClipping = !!i1729[0]
  i1728.zSpacing = i1729[1]
  i1728.pmaVertexColors = !!i1729[2]
  i1728.tintBlack = !!i1729[3]
  i1728.canvasGroupTintBlack = !!i1729[4]
  i1728.calculateTangents = !!i1729[5]
  i1728.addNormals = !!i1729[6]
  i1728.immutableTriangles = !!i1729[7]
  return i1728
}

Deserializers["Spine.Unity.BoneFollowerGraphic"] = function (request, data, root) {
  var i1730 = root || request.c( 'Spine.Unity.BoneFollowerGraphic' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'skeletonGraphic')
  i1730.initializeOnAwake = !!i1731[2]
  i1730.boneName = i1731[3]
  i1730.followBoneRotation = !!i1731[4]
  i1730.followSkeletonFlip = !!i1731[5]
  i1730.followLocalScale = !!i1731[6]
  i1730.followParentWorldScale = !!i1731[7]
  i1730.followXYPosition = !!i1731[8]
  i1730.followZPosition = !!i1731[9]
  i1730.maintainedAxisOrientation = i1731[10]
  return i1730
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i1732 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'm_Material')
  i1732.m_Maskable = !!i1733[2]
  i1732.m_Color = new pc.Color(i1733[3], i1733[4], i1733[5], i1733[6])
  i1732.m_RaycastTarget = !!i1733[7]
  i1732.m_RaycastPadding = new pc.Vec4( i1733[8], i1733[9], i1733[10], i1733[11] )
  return i1732
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'm_FirstSelected')
  i1734.m_sendNavigationEvents = !!i1735[2]
  i1734.m_DragThreshold = i1735[3]
  return i1734
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1737 = data
  i1736.m_HorizontalAxis = i1737[0]
  i1736.m_VerticalAxis = i1737[1]
  i1736.m_SubmitButton = i1737[2]
  i1736.m_CancelButton = i1737[3]
  i1736.m_InputActionsPerSecond = i1737[4]
  i1736.m_RepeatDelay = i1737[5]
  i1736.m_ForceModuleActive = !!i1737[6]
  i1736.m_SendPointerHoverToParent = !!i1737[7]
  return i1736
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i1738 = root || request.c( 'gamemanager' )
  var i1739 = data
  var i1741 = i1739[0]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 2) {
  request.r(i1741[i + 0], i1741[i + 1], 2, i1740, '')
  }
  i1738.sprites = i1740
  var i1743 = i1739[1]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 2, i1742, '')
  }
  i1738.t = i1742
  var i1745 = i1739[2]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 2) {
  request.r(i1745[i + 0], i1745[i + 1], 2, i1744, '')
  }
  i1738.tests = i1744
  request.r(i1739[3], i1739[4], 0, i1738, 'playerHpbar')
  request.r(i1739[5], i1739[6], 0, i1738, 'enemyHpBar')
  request.r(i1739[7], i1739[8], 0, i1738, 'dmg')
  i1738.enemyHpMax = i1739[9]
  i1738.hpMax = i1739[10]
  i1738.enemyPower = i1739[11]
  i1738.playerPower = i1739[12]
  i1738.playerPowerMul = i1739[13]
  i1738.attackSpeed = i1739[14]
  i1738.attackSpeedMul = i1739[15]
  request.r(i1739[16], i1739[17], 0, i1738, 'endCover')
  request.r(i1739[18], i1739[19], 0, i1738, 'catchCover')
  i1738.curPlayerPower = System.Int64(i1739[20])
  request.r(i1739[21], i1739[22], 0, i1738, 'ani')
  request.r(i1739[23], i1739[24], 0, i1738, 'dmgAni')
  var i1747 = i1739[25]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 2) {
  request.r(i1747[i + 0], i1747[i + 1], 2, i1746, '')
  }
  i1738.pets = i1746
  request.r(i1739[26], i1739[27], 0, i1738, 'capsule')
  i1738.capsuleRotate = i1739[28]
  i1738.capsuleMoveTime = i1739[29]
  request.r(i1739[30], i1739[31], 0, i1738, 'capsuleTarget')
  var i1749 = i1739[32]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 2) {
  request.r(i1749[i + 0], i1749[i + 1], 2, i1748, '')
  }
  i1738.breads1 = i1748
  var i1751 = i1739[33]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 2) {
  request.r(i1751[i + 0], i1751[i + 1], 2, i1750, '')
  }
  i1738.breads2 = i1750
  var i1753 = i1739[34]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1738.breads3 = i1752
  request.r(i1739[35], i1739[36], 0, i1738, 'displayer')
  request.r(i1739[37], i1739[38], 0, i1738, 'cardGrid')
  request.r(i1739[39], i1739[40], 0, i1738, 'finger')
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1761 = data
  i1760.enabled = !!i1761[0]
  request.r(i1761[1], i1761[2], 0, i1760, 'sharedMaterial')
  var i1763 = i1761[3]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 2, i1762, '')
  }
  i1760.sharedMaterials = i1762
  i1760.receiveShadows = !!i1761[4]
  i1760.shadowCastingMode = i1761[5]
  i1760.sortingLayerID = i1761[6]
  i1760.sortingOrder = i1761[7]
  i1760.lightmapIndex = i1761[8]
  i1760.lightmapSceneIndex = i1761[9]
  i1760.lightmapScaleOffset = new pc.Vec4( i1761[10], i1761[11], i1761[12], i1761[13] )
  i1760.lightProbeUsage = i1761[14]
  i1760.reflectionProbeUsage = i1761[15]
  i1760.color = new pc.Color(i1761[16], i1761[17], i1761[18], i1761[19])
  request.r(i1761[20], i1761[21], 0, i1760, 'sprite')
  i1760.flipX = !!i1761[22]
  i1760.flipY = !!i1761[23]
  i1760.drawMode = i1761[24]
  i1760.size = new pc.Vec2( i1761[25], i1761[26] )
  i1760.tileMode = i1761[27]
  i1760.adaptiveModeThreshold = i1761[28]
  i1760.maskInteraction = i1761[29]
  i1760.spriteSortPoint = i1761[30]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1765 = data
  i1764.playAutomatically = !!i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'clip')
  var i1767 = i1765[3]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 2) {
  request.r(i1767[i + 0], i1767[i + 1], 2, i1766, '')
  }
  i1764.clips = i1766
  i1764.wrapMode = i1765[4]
  i1764.enabled = !!i1765[5]
  return i1764
}

Deserializers["bread"] = function (request, data, root) {
  var i1770 = root || request.c( 'bread' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'from')
  request.r(i1771[2], i1771[3], 0, i1770, 'to')
  i1770.moveTime = i1771[4]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1773 = data
  i1772.ambientIntensity = i1773[0]
  i1772.reflectionIntensity = i1773[1]
  i1772.ambientMode = i1773[2]
  i1772.ambientLight = new pc.Color(i1773[3], i1773[4], i1773[5], i1773[6])
  i1772.ambientSkyColor = new pc.Color(i1773[7], i1773[8], i1773[9], i1773[10])
  i1772.ambientGroundColor = new pc.Color(i1773[11], i1773[12], i1773[13], i1773[14])
  i1772.ambientEquatorColor = new pc.Color(i1773[15], i1773[16], i1773[17], i1773[18])
  i1772.fogColor = new pc.Color(i1773[19], i1773[20], i1773[21], i1773[22])
  i1772.fogEndDistance = i1773[23]
  i1772.fogStartDistance = i1773[24]
  i1772.fogDensity = i1773[25]
  i1772.fog = !!i1773[26]
  request.r(i1773[27], i1773[28], 0, i1772, 'skybox')
  i1772.fogMode = i1773[29]
  var i1775 = i1773[30]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1775[i + 0]) );
  }
  i1772.lightmaps = i1774
  i1772.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1773[31], i1772.lightProbes)
  i1772.lightmapsMode = i1773[32]
  i1772.mixedBakeMode = i1773[33]
  i1772.environmentLightingMode = i1773[34]
  i1772.ambientProbe = new pc.SphericalHarmonicsL2(i1773[35])
  i1772.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1773[36])
  i1772.useReferenceAmbientProbe = !!i1773[37]
  request.r(i1773[38], i1773[39], 0, i1772, 'customReflection')
  request.r(i1773[40], i1773[41], 0, i1772, 'defaultReflection')
  i1772.defaultReflectionMode = i1773[42]
  i1772.defaultReflectionResolution = i1773[43]
  i1772.sunLightObjectId = i1773[44]
  i1772.pixelLightCount = i1773[45]
  i1772.defaultReflectionHDR = !!i1773[46]
  i1772.hasLightDataAsset = !!i1773[47]
  i1772.hasManualGenerate = !!i1773[48]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1779 = data
  request.r(i1779[0], i1779[1], 0, i1778, 'lightmapColor')
  request.r(i1779[2], i1779[3], 0, i1778, 'lightmapDirection')
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1780 = root || new UnityEngine.LightProbes()
  var i1781 = data
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1791[i + 0]));
  }
  i1788.ShaderCompilationErrors = i1790
  i1788.name = i1789[1]
  i1788.guid = i1789[2]
  var i1793 = i1789[3]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1788.shaderDefinedKeywords = i1792
  var i1795 = i1789[4]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1795[i + 0]) );
  }
  i1788.passes = i1794
  var i1797 = i1789[5]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1797[i + 0]) );
  }
  i1788.usePasses = i1796
  var i1799 = i1789[6]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1799[i + 0]) );
  }
  i1788.defaultParameterValues = i1798
  request.r(i1789[7], i1789[8], 0, i1788, 'unityFallbackShader')
  i1788.readDepth = !!i1789[9]
  i1788.isCreatedByShaderGraph = !!i1789[10]
  i1788.usedBatchUniforms = i1789[11]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1803 = data
  i1802.shaderName = i1803[0]
  i1802.errorMessage = i1803[1]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1806 = root || new pc.UnityShaderPass()
  var i1807 = data
  i1806.id = i1807[0]
  i1806.subShaderIndex = i1807[1]
  i1806.name = i1807[2]
  i1806.passType = i1807[3]
  i1806.grabPassTextureName = i1807[4]
  i1806.usePass = !!i1807[5]
  i1806.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[6], i1806.zTest)
  i1806.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[7], i1806.zWrite)
  i1806.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[8], i1806.culling)
  i1806.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1807[9], i1806.blending)
  i1806.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1807[10], i1806.alphaBlending)
  i1806.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[11], i1806.colorWriteMask)
  i1806.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[12], i1806.offsetUnits)
  i1806.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[13], i1806.offsetFactor)
  i1806.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[14], i1806.stencilRef)
  i1806.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[15], i1806.stencilReadMask)
  i1806.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1807[16], i1806.stencilWriteMask)
  i1806.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1807[17], i1806.stencilOp)
  i1806.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1807[18], i1806.stencilOpFront)
  i1806.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1807[19], i1806.stencilOpBack)
  var i1809 = i1807[20]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1809[i + 0]) );
  }
  i1806.tags = i1808
  var i1811 = i1807[21]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( i1811[i + 0] );
  }
  i1806.passDefinedKeywords = i1810
  var i1813 = i1807[22]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1813[i + 0]) );
  }
  i1806.passDefinedKeywordGroups = i1812
  var i1815 = i1807[23]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1815[i + 0]) );
  }
  i1806.variants = i1814
  var i1817 = i1807[24]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1817[i + 0]) );
  }
  i1806.excludedVariants = i1816
  i1806.hasDepthReader = !!i1807[25]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1819 = data
  i1818.val = i1819[0]
  i1818.name = i1819[1]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1821 = data
  i1820.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1821[0], i1820.src)
  i1820.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1821[1], i1820.dst)
  i1820.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1821[2], i1820.op)
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1823 = data
  i1822.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1823[0], i1822.pass)
  i1822.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1823[1], i1822.fail)
  i1822.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1823[2], i1822.zFail)
  i1822.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1823[3], i1822.comp)
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.value = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1831 = data
  var i1833 = i1831[0]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1830.keywords = i1832
  i1830.hasDiscard = !!i1831[1]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1837 = data
  i1836.passId = i1837[0]
  i1836.subShaderIndex = i1837[1]
  var i1839 = i1837[2]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( i1839[i + 0] );
  }
  i1836.keywords = i1838
  i1836.vertexProgram = i1837[3]
  i1836.fragmentProgram = i1837[4]
  i1836.readDepth = !!i1837[5]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'shader')
  i1842.pass = i1843[2]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1847 = data
  i1846.name = i1847[0]
  i1846.type = i1847[1]
  i1846.value = new pc.Vec4( i1847[2], i1847[3], i1847[4], i1847[5] )
  i1846.textureValue = i1847[6]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1849 = data
  i1848.name = i1849[0]
  request.r(i1849[1], i1849[2], 0, i1848, 'texture')
  i1848.aabb = i1849[3]
  i1848.vertices = i1849[4]
  i1848.triangles = i1849[5]
  i1848.textureRect = UnityEngine.Rect.MinMaxRect(i1849[6], i1849[7], i1849[8], i1849[9])
  i1848.packedRect = UnityEngine.Rect.MinMaxRect(i1849[10], i1849[11], i1849[12], i1849[13])
  i1848.border = new pc.Vec4( i1849[14], i1849[15], i1849[16], i1849[17] )
  i1848.transparency = i1849[18]
  i1848.bounds = i1849[19]
  i1848.pixelsPerUnit = i1849[20]
  i1848.textureWidth = i1849[21]
  i1848.textureHeight = i1849[22]
  i1848.nativeSize = new pc.Vec2( i1849[23], i1849[24] )
  i1848.pivot = new pc.Vec2( i1849[25], i1849[26] )
  i1848.textureRectOffset = new pc.Vec2( i1849[27], i1849[28] )
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1851 = data
  i1850.name = i1851[0]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1853 = data
  i1852.name = i1853[0]
  i1852.wrapMode = i1853[1]
  i1852.isLooping = !!i1853[2]
  i1852.length = i1853[3]
  var i1855 = i1853[4]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1855[i + 0]) );
  }
  i1852.curves = i1854
  var i1857 = i1853[5]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1857[i + 0]) );
  }
  i1852.events = i1856
  i1852.halfPrecision = !!i1853[6]
  i1852.frameRate = i1853[7]
  i1852.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1853[8], i1852.localBounds)
  i1852.hasMuscleCurves = !!i1853[9]
  var i1859 = i1853[10]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1852.clipMuscleConstant = i1858
  i1852.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1853[11], i1852.clipBindingConstant)
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1863 = data
  i1862.path = i1863[0]
  i1862.componentType = i1863[1]
  i1862.property = i1863[2]
  i1862.keys = i1863[3]
  var i1865 = i1863[4]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1865[i + 0]) );
  }
  i1862.objectReferenceKeys = i1864
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1869 = data
  i1868.time = i1869[0]
  request.r(i1869[1], i1869[2], 0, i1868, 'value')
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1873 = data
  i1872.functionName = i1873[0]
  i1872.floatParameter = i1873[1]
  i1872.intParameter = i1873[2]
  i1872.stringParameter = i1873[3]
  request.r(i1873[4], i1873[5], 0, i1872, 'objectReferenceParameter')
  i1872.time = i1873[6]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1875 = data
  i1874.center = new pc.Vec3( i1875[0], i1875[1], i1875[2] )
  i1874.extends = new pc.Vec3( i1875[3], i1875[4], i1875[5] )
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1879 = data
  var i1881 = i1879[0]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( i1881[i + 0] );
  }
  i1878.genericBindings = i1880
  var i1883 = i1879[1]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( i1883[i + 0] );
  }
  i1878.pptrCurveMapping = i1882
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.ascent = i1885[1]
  i1884.originalLineHeight = i1885[2]
  i1884.fontSize = i1885[3]
  var i1887 = i1885[4]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1887[i + 0]) );
  }
  i1884.characterInfo = i1886
  request.r(i1885[5], i1885[6], 0, i1884, 'texture')
  i1884.originalFontSize = i1885[7]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1891 = data
  i1890.index = i1891[0]
  i1890.advance = i1891[1]
  i1890.bearing = i1891[2]
  i1890.glyphWidth = i1891[3]
  i1890.glyphHeight = i1891[4]
  i1890.minX = i1891[5]
  i1890.maxX = i1891[6]
  i1890.minY = i1891[7]
  i1890.maxY = i1891[8]
  i1890.uvBottomLeftX = i1891[9]
  i1890.uvBottomLeftY = i1891[10]
  i1890.uvBottomRightX = i1891[11]
  i1890.uvBottomRightY = i1891[12]
  i1890.uvTopLeftX = i1891[13]
  i1890.uvTopLeftY = i1891[14]
  i1890.uvTopRightX = i1891[15]
  i1890.uvTopRightY = i1891[16]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1893 = data
  i1892.name = i1893[0]
  var i1895 = i1893[1]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1895[i + 0]) );
  }
  i1892.states = i1894
  var i1897 = i1893[2]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1897[i + 0]) );
  }
  i1892.layers = i1896
  var i1899 = i1893[3]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1899[i + 0]) );
  }
  i1892.parameters = i1898
  i1892.animationClips = i1893[4]
  i1892.HasSubStateMachines = !!i1893[5]
  i1892.avatarUnsupported = i1893[6]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1903 = data
  i1902.cycleOffset = i1903[0]
  i1902.cycleOffsetParameter = i1903[1]
  i1902.cycleOffsetParameterActive = !!i1903[2]
  i1902.mirror = !!i1903[3]
  i1902.mirrorParameter = i1903[4]
  i1902.mirrorParameterActive = !!i1903[5]
  i1902.motionId = i1903[6]
  i1902.nameHash = i1903[7]
  i1902.fullPathHash = i1903[8]
  i1902.speed = i1903[9]
  i1902.speedParameter = i1903[10]
  i1902.speedParameterActive = !!i1903[11]
  i1902.tag = i1903[12]
  i1902.name = i1903[13]
  i1902.layer = i1903[14]
  i1902.writeDefaultValues = !!i1903[15]
  var i1905 = i1903[16]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1905[i + 0]) );
  }
  i1902.transitions = i1904
  var i1907 = i1903[17]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 2, i1906, '')
  }
  i1902.behaviours = i1906
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1911 = data
  i1910.fullPath = i1911[0]
  i1910.canTransitionToSelf = !!i1911[1]
  i1910.duration = i1911[2]
  i1910.exitTime = i1911[3]
  i1910.hasExitTime = !!i1911[4]
  i1910.hasFixedDuration = !!i1911[5]
  i1910.interruptionSource = i1911[6]
  i1910.offset = i1911[7]
  i1910.orderedInterruption = !!i1911[8]
  i1910.destinationStateNameHash = i1911[9]
  i1910.destinationStateMachineId = i1911[10]
  i1910.isExit = !!i1911[11]
  i1910.mute = !!i1911[12]
  i1910.solo = !!i1911[13]
  var i1913 = i1911[14]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1913[i + 0]) );
  }
  i1910.conditions = i1912
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1917 = data
  i1916.mode = i1917[0]
  i1916.parameter = i1917[1]
  i1916.threshold = i1917[2]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1923 = data
  i1922.blendingMode = i1923[0]
  i1922.defaultWeight = i1923[1]
  i1922.name = i1923[2]
  i1922.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1923[3], i1922.stateMachine)
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1925 = data
  i1924.id = i1925[0]
  i1924.defaultStateNameHash = i1925[1]
  var i1927 = i1925[2]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1927[i + 0]) );
  }
  i1924.entryTransitions = i1926
  var i1929 = i1925[3]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1929[i + 0]) );
  }
  i1924.anyStateTransitions = i1928
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1933 = data
  i1932.destinationStateNameHash = i1933[0]
  i1932.destinationStateMachineId = i1933[1]
  i1932.isExit = !!i1933[2]
  i1932.mute = !!i1933[3]
  i1932.solo = !!i1933[4]
  var i1935 = i1933[5]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1935[i + 0]) );
  }
  i1932.conditions = i1934
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1939 = data
  i1938.defaultBool = !!i1939[0]
  i1938.defaultFloat = i1939[1]
  i1938.defaultInt = i1939[2]
  i1938.name = i1939[3]
  i1938.nameHash = i1939[4]
  i1938.type = i1939[5]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.bytes64 = i1941[1]
  i1940.data = i1941[2]
  return i1940
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1942 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1943 = data
  var i1945 = i1943[0]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 2, i1944, '')
  }
  i1942.atlasAssets = i1944
  i1942.scale = i1943[1]
  request.r(i1943[2], i1943[3], 0, i1942, 'skeletonJSON')
  i1942.isUpgradingBlendModeMaterials = !!i1943[4]
  i1942.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1943[5], i1942.blendModeMaterials)
  var i1947 = i1943[6]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 1, i1946, '')
  }
  i1942.skeletonDataModifiers = i1946
  var i1949 = i1943[7]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( i1949[i + 0] );
  }
  i1942.fromAnimation = i1948
  var i1951 = i1943[8]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( i1951[i + 0] );
  }
  i1942.toAnimation = i1950
  i1942.duration = i1943[9]
  i1942.defaultMix = i1943[10]
  request.r(i1943[11], i1943[12], 0, i1942, 'controller')
  return i1942
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1954 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1955 = data
  i1954.applyAdditiveMaterial = !!i1955[0]
  var i1957 = i1955[1]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1957[i + 0]));
  }
  i1954.additiveMaterials = i1956
  var i1959 = i1955[2]
  var i1958 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1959[i + 0]));
  }
  i1954.multiplyMaterials = i1958
  var i1961 = i1955[3]
  var i1960 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1961[i + 0]));
  }
  i1954.screenMaterials = i1960
  i1954.requiresBlendModeMaterials = !!i1955[4]
  return i1954
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1964 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1965 = data
  i1964.pageName = i1965[0]
  request.r(i1965[1], i1965[2], 0, i1964, 'material')
  return i1964
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1968 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'atlasFile')
  var i1971 = i1969[2]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 2, i1970, '')
  }
  i1968.materials = i1970
  i1968.textureLoadingMode = i1969[3]
  request.r(i1969[4], i1969[5], 0, i1968, 'onDemandTextureLoader')
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1973 = data
  var i1975 = i1973[0]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1975[i + 0]) );
  }
  i1972.files = i1974
  i1972.componentToPrefabIds = i1973[1]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1979 = data
  i1978.path = i1979[0]
  request.r(i1979[1], i1979[2], 0, i1978, 'unityObject')
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1981 = data
  var i1983 = i1981[0]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1983[i + 0]) );
  }
  i1980.scriptsExecutionOrder = i1982
  var i1985 = i1981[1]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1985[i + 0]) );
  }
  i1980.sortingLayers = i1984
  var i1987 = i1981[2]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1987[i + 0]) );
  }
  i1980.cullingLayers = i1986
  i1980.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1981[3], i1980.timeSettings)
  i1980.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1981[4], i1980.physicsSettings)
  i1980.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1981[5], i1980.physics2DSettings)
  i1980.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1981[6], i1980.qualitySettings)
  i1980.enableRealtimeShadows = !!i1981[7]
  i1980.enableAutoInstancing = !!i1981[8]
  i1980.enableDynamicBatching = !!i1981[9]
  i1980.lightmapEncodingQuality = i1981[10]
  i1980.desiredColorSpace = i1981[11]
  var i1989 = i1981[12]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( i1989[i + 0] );
  }
  i1980.allTags = i1988
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.value = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1997 = data
  i1996.id = i1997[0]
  i1996.name = i1997[1]
  i1996.value = i1997[2]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2001 = data
  i2000.id = i2001[0]
  i2000.name = i2001[1]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2003 = data
  i2002.fixedDeltaTime = i2003[0]
  i2002.maximumDeltaTime = i2003[1]
  i2002.timeScale = i2003[2]
  i2002.maximumParticleTimestep = i2003[3]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2005 = data
  i2004.gravity = new pc.Vec3( i2005[0], i2005[1], i2005[2] )
  i2004.defaultSolverIterations = i2005[3]
  i2004.bounceThreshold = i2005[4]
  i2004.autoSyncTransforms = !!i2005[5]
  i2004.autoSimulation = !!i2005[6]
  var i2007 = i2005[7]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2007[i + 0]) );
  }
  i2004.collisionMatrix = i2006
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2011 = data
  i2010.enabled = !!i2011[0]
  i2010.layerId = i2011[1]
  i2010.otherLayerId = i2011[2]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'material')
  i2012.gravity = new pc.Vec2( i2013[2], i2013[3] )
  i2012.positionIterations = i2013[4]
  i2012.velocityIterations = i2013[5]
  i2012.velocityThreshold = i2013[6]
  i2012.maxLinearCorrection = i2013[7]
  i2012.maxAngularCorrection = i2013[8]
  i2012.maxTranslationSpeed = i2013[9]
  i2012.maxRotationSpeed = i2013[10]
  i2012.baumgarteScale = i2013[11]
  i2012.baumgarteTOIScale = i2013[12]
  i2012.timeToSleep = i2013[13]
  i2012.linearSleepTolerance = i2013[14]
  i2012.angularSleepTolerance = i2013[15]
  i2012.defaultContactOffset = i2013[16]
  i2012.autoSimulation = !!i2013[17]
  i2012.queriesHitTriggers = !!i2013[18]
  i2012.queriesStartInColliders = !!i2013[19]
  i2012.callbacksOnDisable = !!i2013[20]
  i2012.reuseCollisionCallbacks = !!i2013[21]
  i2012.autoSyncTransforms = !!i2013[22]
  var i2015 = i2013[23]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2015[i + 0]) );
  }
  i2012.collisionMatrix = i2014
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2019 = data
  i2018.enabled = !!i2019[0]
  i2018.layerId = i2019[1]
  i2018.otherLayerId = i2019[2]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2023[i + 0]) );
  }
  i2020.qualityLevels = i2022
  var i2025 = i2021[1]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( i2025[i + 0] );
  }
  i2020.names = i2024
  i2020.shadows = i2021[2]
  i2020.anisotropicFiltering = i2021[3]
  i2020.antiAliasing = i2021[4]
  i2020.lodBias = i2021[5]
  i2020.shadowCascades = i2021[6]
  i2020.shadowDistance = i2021[7]
  i2020.shadowmaskMode = i2021[8]
  i2020.shadowProjection = i2021[9]
  i2020.shadowResolution = i2021[10]
  i2020.softParticles = !!i2021[11]
  i2020.softVegetation = !!i2021[12]
  i2020.activeColorSpace = i2021[13]
  i2020.desiredColorSpace = i2021[14]
  i2020.masterTextureLimit = i2021[15]
  i2020.maxQueuedFrames = i2021[16]
  i2020.particleRaycastBudget = i2021[17]
  i2020.pixelLightCount = i2021[18]
  i2020.realtimeReflectionProbes = !!i2021[19]
  i2020.shadowCascade2Split = i2021[20]
  i2020.shadowCascade4Split = new pc.Vec3( i2021[21], i2021[22], i2021[23] )
  i2020.streamingMipmapsActive = !!i2021[24]
  i2020.vSyncCount = i2021[25]
  i2020.asyncUploadBufferSize = i2021[26]
  i2020.asyncUploadTimeSlice = i2021[27]
  i2020.billboardsFaceCameraPosition = !!i2021[28]
  i2020.shadowNearPlaneOffset = i2021[29]
  i2020.streamingMipmapsMemoryBudget = i2021[30]
  i2020.maximumLODLevel = i2021[31]
  i2020.streamingMipmapsAddAllCameras = !!i2021[32]
  i2020.streamingMipmapsMaxLevelReduction = i2021[33]
  i2020.streamingMipmapsRenderersPerFrame = i2021[34]
  i2020.resolutionScalingFixedDPIFactor = i2021[35]
  i2020.streamingMipmapsMaxFileIORequests = i2021[36]
  i2020.currentQualityLevel = i2021[37]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2031 = data
  i2030.weight = i2031[0]
  i2030.vertices = i2031[1]
  i2030.normals = i2031[2]
  i2030.tangents = i2031[3]
  return i2030
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[15],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[15],"82":[5],"83":[84],"85":[84],"17":[14],"86":[87],"38":[14],"39":[21,14],"88":[5],"37":[21,14],"10":[7,5],"89":[5],"90":[5,3],"91":[60],"92":[68],"93":[87],"94":[95],"96":[14],"97":[5,14],"98":[14,21],"99":[14],"100":[21,14],"101":[5],"102":[21,14],"103":[14],"104":[105],"106":[14],"107":[14],"20":[17],"22":[21,14],"108":[14],"19":[17],"25":[14],"24":[14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[14],"114":[14],"115":[14],"116":[21,14],"117":[14],"118":[14],"119":[14],"30":[14],"31":[21,14],"120":[14],"121":[40],"122":[40],"41":[40],"123":[40],"124":[15],"125":[15],"126":[105],"127":[105]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","enemy","player","UnityEngine.RectTransform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","test","UnityEngine.GameObject","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","endCard","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","bread","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "05/12/2024 23:50:46";

Deserializers.lunaDaysRunning = "4.1";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3654";

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

Deserializers.buildID = "b1282b23-238d-4c78-b8dd-bbdab387d2b6";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

