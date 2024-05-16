var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointSpring' )
  var i505 = data
  i504.spring = i505[0]
  i504.damper = i505[1]
  i504.targetPosition = i505[2]
  return i504
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointMotor' )
  var i507 = data
  i506.m_TargetVelocity = i507[0]
  i506.m_Force = i507[1]
  i506.m_FreeSpin = i507[2]
  return i506
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointLimits' )
  var i509 = data
  i508.m_Min = i509[0]
  i508.m_Max = i509[1]
  i508.m_Bounciness = i509[2]
  i508.m_BounceMinVelocity = i509[3]
  i508.m_ContactDistance = i509[4]
  i508.minBounce = i509[5]
  i508.maxBounce = i509[6]
  return i508
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointDrive' )
  var i511 = data
  i510.m_PositionSpring = i511[0]
  i510.m_PositionDamper = i511[1]
  i510.m_MaximumForce = i511[2]
  return i510
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i513 = data
  i512.m_Spring = i513[0]
  i512.m_Damper = i513[1]
  return i512
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i515 = data
  i514.m_Limit = i515[0]
  i514.m_Bounciness = i515[1]
  i514.m_ContactDistance = i515[2]
  return i514
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i517 = data
  i516.m_ExtremumSlip = i517[0]
  i516.m_ExtremumValue = i517[1]
  i516.m_AsymptoteSlip = i517[2]
  i516.m_AsymptoteValue = i517[3]
  i516.m_Stiffness = i517[4]
  return i516
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i519 = data
  i518.m_LowerAngle = i519[0]
  i518.m_UpperAngle = i519[1]
  return i518
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i521 = data
  i520.m_MotorSpeed = i521[0]
  i520.m_MaximumMotorTorque = i521[1]
  return i520
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i523 = data
  i522.m_DampingRatio = i523[0]
  i522.m_Frequency = i523[1]
  i522.m_Angle = i523[2]
  return i522
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i525 = data
  i524.m_LowerTranslation = i525[0]
  i524.m_UpperTranslation = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i526 = root || new pc.UnityMaterial()
  var i527 = data
  i526.name = i527[0]
  request.r(i527[1], i527[2], 0, i526, 'shader')
  i526.renderQueue = i527[3]
  i526.enableInstancing = !!i527[4]
  var i529 = i527[5]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i529[i + 0]) );
  }
  i526.floatParameters = i528
  var i531 = i527[6]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i531[i + 0]) );
  }
  i526.colorParameters = i530
  var i533 = i527[7]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i533[i + 0]) );
  }
  i526.vectorParameters = i532
  var i535 = i527[8]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i535[i + 0]) );
  }
  i526.textureParameters = i534
  var i537 = i527[9]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i537[i + 0]) );
  }
  i526.materialFlags = i536
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i541 = data
  i540.name = i541[0]
  i540.value = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i545 = data
  i544.name = i545[0]
  i544.value = new pc.Color(i545[1], i545[2], i545[3], i545[4])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i549 = data
  i548.name = i549[0]
  i548.value = new pc.Vec4( i549[1], i549[2], i549[3], i549[4] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i553 = data
  i552.name = i553[0]
  request.r(i553[1], i553[2], 0, i552, 'value')
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i557 = data
  i556.name = i557[0]
  i556.enabled = !!i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i559 = data
  i558.name = i559[0]
  i558.width = i559[1]
  i558.height = i559[2]
  i558.mipmapCount = i559[3]
  i558.anisoLevel = i559[4]
  i558.filterMode = i559[5]
  i558.hdr = !!i559[6]
  i558.format = i559[7]
  i558.wrapMode = i559[8]
  i558.alphaIsTransparency = !!i559[9]
  i558.alphaSource = i559[10]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i561 = data
  i560.position = new pc.Vec3( i561[0], i561[1], i561[2] )
  i560.scale = new pc.Vec3( i561[3], i561[4], i561[5] )
  i560.rotation = new pc.Quat(i561[6], i561[7], i561[8], i561[9])
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'sharedMesh')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'additionalVertexStreams')
  i564.enabled = !!i565[2]
  request.r(i565[3], i565[4], 0, i564, 'sharedMaterial')
  var i567 = i565[5]
  var i566 = []
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 2, i566, '')
  }
  i564.sharedMaterials = i566
  i564.receiveShadows = !!i565[6]
  i564.shadowCastingMode = i565[7]
  i564.sortingLayerID = i565[8]
  i564.sortingOrder = i565[9]
  i564.lightmapIndex = i565[10]
  i564.lightmapSceneIndex = i565[11]
  i564.lightmapScaleOffset = new pc.Vec4( i565[12], i565[13], i565[14], i565[15] )
  i564.lightProbeUsage = i565[16]
  i564.reflectionProbeUsage = i565[17]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'animatorController')
  request.r(i571[2], i571[3], 0, i570, 'avatar')
  i570.updateMode = i571[4]
  i570.hasTransformHierarchy = !!i571[5]
  i570.applyRootMotion = !!i571[6]
  var i573 = i571[7]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i570.humanBones = i572
  i570.enabled = !!i571[8]
  return i570
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i576 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'skeletonDataAsset')
  i576.initialSkinName = i577[2]
  i576.fixPrefabOverrideViaMeshFilter = i577[3]
  i576.initialFlipX = !!i577[4]
  i576.initialFlipY = !!i577[5]
  i576.updateWhenInvisible = i577[6]
  i576.zSpacing = i577[7]
  i576.useClipping = !!i577[8]
  i576.immutableTriangles = !!i577[9]
  i576.pmaVertexColors = !!i577[10]
  i576.clearStateOnDisable = !!i577[11]
  i576.tintBlack = !!i577[12]
  i576.singleSubmesh = !!i577[13]
  i576.fixDrawOrder = !!i577[14]
  i576.addNormals = !!i577[15]
  i576.calculateTangents = !!i577[16]
  i576.maskInteraction = i577[17]
  i576.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i577[18], i576.maskMaterials)
  i576.disableRenderingOnOverride = !!i577[19]
  i576.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i577[20], i576.translator)
  i576.updateTiming = i577[21]
  var i579 = i577[22]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( i579[i + 0] );
  }
  i576.separatorSlotNames = i578
  return i576
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i580 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i581 = data
  var i583 = i581[0]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.materialsMaskDisabled = i582
  var i585 = i581[1]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i580.materialsInsideMask = i584
  var i587 = i581[2]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i580.materialsOutsideMask = i586
  return i580
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i588 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i589 = data
  i588.autoReset = !!i589[0]
  i588.useCustomMixMode = !!i589[1]
  var i591 = i589[2]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i588.layerMixModes = i590
  var i593 = i589[3]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( i593[i + 0] );
  }
  i588.layerBlendModes = i592
  return i588
}

Deserializers["enemy"] = function (request, data, root) {
  var i600 = root || request.c( 'enemy' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'gm')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i603 = data
  i602.name = i603[0]
  i602.tagId = i603[1]
  i602.enabled = !!i603[2]
  i602.isStatic = !!i603[3]
  i602.layer = i603[4]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i605 = data
  i604.name = i605[0]
  i604.halfPrecision = !!i605[1]
  i604.vertexCount = i605[2]
  i604.aabb = i605[3]
  var i607 = i605[4]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( !!i607[i + 0] );
  }
  i604.streams = i606
  i604.vertices = i605[5]
  var i609 = i605[6]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i609[i + 0]) );
  }
  i604.subMeshes = i608
  var i611 = i605[7]
  var i610 = []
  for(var i = 0; i < i611.length; i += 16) {
    i610.push( new pc.Mat4().setData(i611[i + 0], i611[i + 1], i611[i + 2], i611[i + 3],  i611[i + 4], i611[i + 5], i611[i + 6], i611[i + 7],  i611[i + 8], i611[i + 9], i611[i + 10], i611[i + 11],  i611[i + 12], i611[i + 13], i611[i + 14], i611[i + 15]) );
  }
  i604.bindposes = i610
  var i613 = i605[8]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i613[i + 0]) );
  }
  i604.blendShapes = i612
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i619 = data
  i618.triangles = i619[0]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i625 = data
  i624.name = i625[0]
  var i627 = i625[1]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i627[i + 0]) );
  }
  i624.frames = i626
  return i624
}

Deserializers["player"] = function (request, data, root) {
  var i628 = root || request.c( 'player' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'gm')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i631 = data
  i630.name = i631[0]
  i630.atlasId = i631[1]
  i630.mipmapCount = i631[2]
  i630.hdr = !!i631[3]
  i630.size = i631[4]
  i630.anisoLevel = i631[5]
  i630.filterMode = i631[6]
  i630.wrapMode = i631[7]
  var i633 = i631[8]
  var i632 = []
  for(var i = 0; i < i633.length; i += 4) {
    i632.push( UnityEngine.Rect.MinMaxRect(i633[i + 0], i633[i + 1], i633[i + 2], i633[i + 3]) );
  }
  i630.rects = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i637 = data
  i636.name = i637[0]
  i636.index = i637[1]
  i636.startup = !!i637[2]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i639 = data
  i638.pivot = new pc.Vec2( i639[0], i639[1] )
  i638.anchorMin = new pc.Vec2( i639[2], i639[3] )
  i638.anchorMax = new pc.Vec2( i639[4], i639[5] )
  i638.sizeDelta = new pc.Vec2( i639[6], i639[7] )
  i638.anchoredPosition3D = new pc.Vec3( i639[8], i639[9], i639[10] )
  i638.rotation = new pc.Quat(i639[11], i639[12], i639[13], i639[14])
  i638.scale = new pc.Vec3( i639[15], i639[16], i639[17] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i641 = data
  i640.enabled = !!i641[0]
  i640.aspect = i641[1]
  i640.orthographic = !!i641[2]
  i640.orthographicSize = i641[3]
  i640.backgroundColor = new pc.Color(i641[4], i641[5], i641[6], i641[7])
  i640.nearClipPlane = i641[8]
  i640.farClipPlane = i641[9]
  i640.fieldOfView = i641[10]
  i640.depth = i641[11]
  i640.clearFlags = i641[12]
  i640.cullingMask = i641[13]
  i640.rect = i641[14]
  request.r(i641[15], i641[16], 0, i640, 'targetTexture')
  i640.usePhysicalProperties = !!i641[17]
  i640.focalLength = i641[18]
  i640.sensorSize = new pc.Vec2( i641[19], i641[20] )
  i640.lensShift = new pc.Vec2( i641[21], i641[22] )
  i640.gateFit = i641[23]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.planeDistance = i643[1]
  i642.referencePixelsPerUnit = i643[2]
  i642.isFallbackOverlay = !!i643[3]
  i642.renderMode = i643[4]
  i642.renderOrder = i643[5]
  i642.sortingLayerName = i643[6]
  i642.sortingOrder = i643[7]
  i642.scaleFactor = i643[8]
  request.r(i643[9], i643[10], 0, i642, 'worldCamera')
  i642.overrideSorting = !!i643[11]
  i642.pixelPerfect = !!i643[12]
  i642.targetDisplay = i643[13]
  i642.overridePixelPerfect = !!i643[14]
  return i642
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i645 = data
  i644.m_UiScaleMode = i645[0]
  i644.m_ReferencePixelsPerUnit = i645[1]
  i644.m_ScaleFactor = i645[2]
  i644.m_ReferenceResolution = new pc.Vec2( i645[3], i645[4] )
  i644.m_ScreenMatchMode = i645[5]
  i644.m_MatchWidthOrHeight = i645[6]
  i644.m_PhysicalUnit = i645[7]
  i644.m_FallbackScreenDPI = i645[8]
  i644.m_DefaultSpriteDPI = i645[9]
  i644.m_DynamicPixelsPerUnit = i645[10]
  i644.m_PresetInfoIsWorld = !!i645[11]
  return i644
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i647 = data
  i646.m_IgnoreReversedGraphics = !!i647[0]
  i646.m_BlockingObjects = i647[1]
  i646.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i647[2] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i649 = data
  i648.cullTransparentMesh = !!i649[0]
  return i648
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Image' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_Sprite')
  i650.m_Type = i651[2]
  i650.m_PreserveAspect = !!i651[3]
  i650.m_FillCenter = !!i651[4]
  i650.m_FillMethod = i651[5]
  i650.m_FillAmount = i651[6]
  i650.m_FillClockwise = !!i651[7]
  i650.m_FillOrigin = i651[8]
  i650.m_UseSpriteMesh = !!i651[9]
  i650.m_PixelsPerUnitMultiplier = i651[10]
  request.r(i651[11], i651[12], 0, i650, 'm_Material')
  i650.m_Maskable = !!i651[13]
  i650.m_Color = new pc.Color(i651[14], i651[15], i651[16], i651[17])
  i650.m_RaycastTarget = !!i651[18]
  i650.m_RaycastPadding = new pc.Vec4( i651[19], i651[20], i651[21], i651[22] )
  return i650
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i653 = data
  i652.m_StartCorner = i653[0]
  i652.m_StartAxis = i653[1]
  i652.m_CellSize = new pc.Vec2( i653[2], i653[3] )
  i652.m_Spacing = new pc.Vec2( i653[4], i653[5] )
  i652.m_Constraint = i653[6]
  i652.m_ConstraintCount = i653[7]
  i652.m_Padding = UnityEngine.RectOffset.FromPaddings(i653[8], i653[9], i653[10], i653[11])
  i652.m_ChildAlignment = i653[12]
  return i652
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i655 = data
  i654.m_HorizontalFit = i655[0]
  i654.m_VerticalFit = i655[1]
  return i654
}

Deserializers["test"] = function (request, data, root) {
  var i656 = root || request.c( 'test' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'img')
  request.r(i657[2], i657[3], 0, i656, 'sprite')
  request.r(i657[4], i657[5], 0, i656, 'bg')
  i656.x = i657[6]
  request.r(i657[7], i657[8], 0, i656, 'gm')
  i656.scaleChangeTime = i657[9]
  i656.clickScale = i657[10]
  i656.clearScale = i657[11]
  i656.effectIndex = i657[12]
  return i656
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Button' )
  var i659 = data
  i658.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i659[0], i658.m_OnClick)
  i658.m_Navigation = request.d('UnityEngine.UI.Navigation', i659[1], i658.m_Navigation)
  i658.m_Transition = i659[2]
  i658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i659[3], i658.m_Colors)
  i658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i659[4], i658.m_SpriteState)
  i658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i659[5], i658.m_AnimationTriggers)
  i658.m_Interactable = !!i659[6]
  request.r(i659[7], i659[8], 0, i658, 'm_TargetGraphic')
  return i658
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i661 = data
  i660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i661[0], i660.m_PersistentCalls)
  return i660
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('UnityEngine.Events.PersistentCall', i665[i + 0]));
  }
  i662.m_Calls = i664
  return i662
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_Target')
  i668.m_TargetAssemblyTypeName = i669[2]
  i668.m_MethodName = i669[3]
  i668.m_Mode = i669[4]
  i668.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i669[5], i668.m_Arguments)
  i668.m_CallState = i669[6]
  return i668
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_ObjectArgument')
  i670.m_ObjectArgumentAssemblyTypeName = i671[2]
  i670.m_IntArgument = i671[3]
  i670.m_FloatArgument = i671[4]
  i670.m_StringArgument = i671[5]
  i670.m_BoolArgument = !!i671[6]
  return i670
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i673 = data
  i672.m_Mode = i673[0]
  i672.m_WrapAround = !!i673[1]
  request.r(i673[2], i673[3], 0, i672, 'm_SelectOnUp')
  request.r(i673[4], i673[5], 0, i672, 'm_SelectOnDown')
  request.r(i673[6], i673[7], 0, i672, 'm_SelectOnLeft')
  request.r(i673[8], i673[9], 0, i672, 'm_SelectOnRight')
  return i672
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i675 = data
  i674.m_NormalColor = new pc.Color(i675[0], i675[1], i675[2], i675[3])
  i674.m_HighlightedColor = new pc.Color(i675[4], i675[5], i675[6], i675[7])
  i674.m_PressedColor = new pc.Color(i675[8], i675[9], i675[10], i675[11])
  i674.m_SelectedColor = new pc.Color(i675[12], i675[13], i675[14], i675[15])
  i674.m_DisabledColor = new pc.Color(i675[16], i675[17], i675[18], i675[19])
  i674.m_ColorMultiplier = i675[20]
  i674.m_FadeDuration = i675[21]
  return i674
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'm_HighlightedSprite')
  request.r(i677[2], i677[3], 0, i676, 'm_PressedSprite')
  request.r(i677[4], i677[5], 0, i676, 'm_SelectedSprite')
  request.r(i677[6], i677[7], 0, i676, 'm_DisabledSprite')
  return i676
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i679 = data
  i678.m_NormalTrigger = i679[0]
  i678.m_HighlightedTrigger = i679[1]
  i678.m_PressedTrigger = i679[2]
  i678.m_SelectedTrigger = i679[3]
  i678.m_DisabledTrigger = i679[4]
  return i678
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.Slider' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_FillRect')
  request.r(i681[2], i681[3], 0, i680, 'm_HandleRect')
  i680.m_Direction = i681[4]
  i680.m_MinValue = i681[5]
  i680.m_MaxValue = i681[6]
  i680.m_WholeNumbers = !!i681[7]
  i680.m_Value = i681[8]
  i680.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i681[9], i680.m_OnValueChanged)
  i680.m_Navigation = request.d('UnityEngine.UI.Navigation', i681[10], i680.m_Navigation)
  i680.m_Transition = i681[11]
  i680.m_Colors = request.d('UnityEngine.UI.ColorBlock', i681[12], i680.m_Colors)
  i680.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i681[13], i680.m_SpriteState)
  i680.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i681[14], i680.m_AnimationTriggers)
  i680.m_Interactable = !!i681[15]
  request.r(i681[16], i681[17], 0, i680, 'm_TargetGraphic')
  return i680
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i683 = data
  i682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i683[0], i682.m_PersistentCalls)
  return i682
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Text' )
  var i685 = data
  i684.m_FontData = request.d('UnityEngine.UI.FontData', i685[0], i684.m_FontData)
  i684.m_Text = i685[1]
  request.r(i685[2], i685[3], 0, i684, 'm_Material')
  i684.m_Maskable = !!i685[4]
  i684.m_Color = new pc.Color(i685[5], i685[6], i685[7], i685[8])
  i684.m_RaycastTarget = !!i685[9]
  i684.m_RaycastPadding = new pc.Vec4( i685[10], i685[11], i685[12], i685[13] )
  return i684
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.FontData' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_Font')
  i686.m_FontSize = i687[2]
  i686.m_FontStyle = i687[3]
  i686.m_BestFit = !!i687[4]
  i686.m_MinSize = i687[5]
  i686.m_MaxSize = i687[6]
  i686.m_Alignment = i687[7]
  i686.m_AlignByGeometry = !!i687[8]
  i686.m_RichText = !!i687[9]
  i686.m_HorizontalOverflow = i687[10]
  i686.m_VerticalOverflow = i687[11]
  i686.m_LineSpacing = i687[12]
  return i686
}

Deserializers["endCard"] = function (request, data, root) {
  var i688 = root || request.c( 'endCard' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'gm')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i691 = data
  i690.m_Alpha = i691[0]
  i690.m_Interactable = !!i691[1]
  i690.m_BlocksRaycasts = !!i691[2]
  i690.m_IgnoreParentGroups = !!i691[3]
  i690.enabled = !!i691[4]
  return i690
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i692 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'skeletonDataAsset')
  request.r(i693[2], i693[3], 0, i692, 'additiveMaterial')
  request.r(i693[4], i693[5], 0, i692, 'multiplyMaterial')
  request.r(i693[6], i693[7], 0, i692, 'screenMaterial')
  i692.initialSkinName = i693[8]
  i692.initialFlipX = !!i693[9]
  i692.initialFlipY = !!i693[10]
  i692.startingAnimation = i693[11]
  i692.startingLoop = !!i693[12]
  i692.timeScale = i693[13]
  i692.freeze = !!i693[14]
  i692.layoutScaleMode = i693[15]
  i692.updateWhenInvisible = i693[16]
  i692.allowMultipleCanvasRenderers = !!i693[17]
  var i695 = i693[18]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i692.canvasRenderers = i694
  i692.enableSeparatorSlots = !!i693[19]
  i692.updateSeparatorPartLocation = !!i693[20]
  i692.updateSeparatorPartScale = !!i693[21]
  i692.disableMeshAssignmentOnOverride = !!i693[22]
  i692.referenceSize = new pc.Vec2( i693[23], i693[24] )
  i692.referenceScale = i693[25]
  i692.rectTransformSize = new pc.Vec2( i693[26], i693[27] )
  i692.editReferenceRect = !!i693[28]
  var i697 = i693[29]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i692.separatorSlotNames = i696
  var i699 = i693[30]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i692.separatorParts = i698
  i692.meshGenerator = request.d('Spine.Unity.MeshGenerator', i693[31], i692.meshGenerator)
  i692.updateTiming = i693[32]
  i692.unscaledTime = !!i693[33]
  request.r(i693[34], i693[35], 0, i692, 'm_Material')
  i692.m_Maskable = !!i693[36]
  i692.m_Color = new pc.Color(i693[37], i693[38], i693[39], i693[40])
  i692.m_RaycastTarget = !!i693[41]
  i692.m_RaycastPadding = new pc.Vec4( i693[42], i693[43], i693[44], i693[45] )
  return i692
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i704 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i705 = data
  i704.settings = request.d('Spine.Unity.MeshGenerator+Settings', i705[0], i704.settings)
  return i704
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i706 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i707 = data
  i706.useClipping = !!i707[0]
  i706.zSpacing = i707[1]
  i706.pmaVertexColors = !!i707[2]
  i706.tintBlack = !!i707[3]
  i706.canvasGroupTintBlack = !!i707[4]
  i706.calculateTangents = !!i707[5]
  i706.addNormals = !!i707[6]
  i706.immutableTriangles = !!i707[7]
  return i706
}

Deserializers["Spine.Unity.BoneFollowerGraphic"] = function (request, data, root) {
  var i708 = root || request.c( 'Spine.Unity.BoneFollowerGraphic' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'skeletonGraphic')
  i708.initializeOnAwake = !!i709[2]
  i708.boneName = i709[3]
  i708.followBoneRotation = !!i709[4]
  i708.followSkeletonFlip = !!i709[5]
  i708.followLocalScale = !!i709[6]
  i708.followParentWorldScale = !!i709[7]
  i708.followXYPosition = !!i709[8]
  i708.followZPosition = !!i709[9]
  i708.maintainedAxisOrientation = i709[10]
  return i708
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i710 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Material')
  i710.m_Maskable = !!i711[2]
  i710.m_Color = new pc.Color(i711[3], i711[4], i711[5], i711[6])
  i710.m_RaycastTarget = !!i711[7]
  i710.m_RaycastPadding = new pc.Vec4( i711[8], i711[9], i711[10], i711[11] )
  return i710
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_FirstSelected')
  i712.m_sendNavigationEvents = !!i713[2]
  i712.m_DragThreshold = i713[3]
  return i712
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i715 = data
  i714.m_HorizontalAxis = i715[0]
  i714.m_VerticalAxis = i715[1]
  i714.m_SubmitButton = i715[2]
  i714.m_CancelButton = i715[3]
  i714.m_InputActionsPerSecond = i715[4]
  i714.m_RepeatDelay = i715[5]
  i714.m_ForceModuleActive = !!i715[6]
  i714.m_SendPointerHoverToParent = !!i715[7]
  return i714
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i716 = root || request.c( 'gamemanager' )
  var i717 = data
  var i719 = i717[0]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.sprites = i718
  var i721 = i717[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i716.t = i720
  var i723 = i717[2]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i716.tests = i722
  request.r(i717[3], i717[4], 0, i716, 'playerHpbar')
  request.r(i717[5], i717[6], 0, i716, 'enemyHpBar')
  request.r(i717[7], i717[8], 0, i716, 'dmg')
  i716.enemyHpMax = i717[9]
  i716.hpMax = i717[10]
  i716.enemyPower = i717[11]
  i716.playerPower = i717[12]
  i716.playerPowerMul = i717[13]
  i716.attackSpeed = i717[14]
  i716.attackSpeedMul = i717[15]
  request.r(i717[16], i717[17], 0, i716, 'endCover')
  request.r(i717[18], i717[19], 0, i716, 'catchCover')
  i716.curPlayerPower = System.Int64(i717[20])
  request.r(i717[21], i717[22], 0, i716, 'ani')
  request.r(i717[23], i717[24], 0, i716, 'dmgAni')
  var i725 = i717[25]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i716.pets = i724
  request.r(i717[26], i717[27], 0, i716, 'capsule')
  i716.capsuleRotate = i717[28]
  i716.capsuleMoveTime = i717[29]
  request.r(i717[30], i717[31], 0, i716, 'capsuleTarget')
  var i727 = i717[32]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i716.breads1 = i726
  var i729 = i717[33]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i716.breads2 = i728
  var i731 = i717[34]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i716.breads3 = i730
  request.r(i717[35], i717[36], 0, i716, 'displayer')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i739 = data
  i738.enabled = !!i739[0]
  request.r(i739[1], i739[2], 0, i738, 'sharedMaterial')
  var i741 = i739[3]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.sharedMaterials = i740
  i738.receiveShadows = !!i739[4]
  i738.shadowCastingMode = i739[5]
  i738.sortingLayerID = i739[6]
  i738.sortingOrder = i739[7]
  i738.lightmapIndex = i739[8]
  i738.lightmapSceneIndex = i739[9]
  i738.lightmapScaleOffset = new pc.Vec4( i739[10], i739[11], i739[12], i739[13] )
  i738.lightProbeUsage = i739[14]
  i738.reflectionProbeUsage = i739[15]
  i738.color = new pc.Color(i739[16], i739[17], i739[18], i739[19])
  request.r(i739[20], i739[21], 0, i738, 'sprite')
  i738.flipX = !!i739[22]
  i738.flipY = !!i739[23]
  i738.drawMode = i739[24]
  i738.size = new pc.Vec2( i739[25], i739[26] )
  i738.tileMode = i739[27]
  i738.adaptiveModeThreshold = i739[28]
  i738.maskInteraction = i739[29]
  i738.spriteSortPoint = i739[30]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i743 = data
  i742.playAutomatically = !!i743[0]
  request.r(i743[1], i743[2], 0, i742, 'clip')
  var i745 = i743[3]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.clips = i744
  i742.wrapMode = i743[4]
  i742.enabled = !!i743[5]
  return i742
}

Deserializers["bread"] = function (request, data, root) {
  var i748 = root || request.c( 'bread' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'from')
  request.r(i749[2], i749[3], 0, i748, 'to')
  i748.moveTime = i749[4]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i751 = data
  i750.ambientIntensity = i751[0]
  i750.reflectionIntensity = i751[1]
  i750.ambientMode = i751[2]
  i750.ambientLight = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.ambientSkyColor = new pc.Color(i751[7], i751[8], i751[9], i751[10])
  i750.ambientGroundColor = new pc.Color(i751[11], i751[12], i751[13], i751[14])
  i750.ambientEquatorColor = new pc.Color(i751[15], i751[16], i751[17], i751[18])
  i750.fogColor = new pc.Color(i751[19], i751[20], i751[21], i751[22])
  i750.fogEndDistance = i751[23]
  i750.fogStartDistance = i751[24]
  i750.fogDensity = i751[25]
  i750.fog = !!i751[26]
  request.r(i751[27], i751[28], 0, i750, 'skybox')
  i750.fogMode = i751[29]
  var i753 = i751[30]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i753[i + 0]) );
  }
  i750.lightmaps = i752
  i750.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i751[31], i750.lightProbes)
  i750.lightmapsMode = i751[32]
  i750.mixedBakeMode = i751[33]
  i750.environmentLightingMode = i751[34]
  i750.ambientProbe = new pc.SphericalHarmonicsL2(i751[35])
  i750.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i751[36])
  i750.useReferenceAmbientProbe = !!i751[37]
  request.r(i751[38], i751[39], 0, i750, 'customReflection')
  request.r(i751[40], i751[41], 0, i750, 'defaultReflection')
  i750.defaultReflectionMode = i751[42]
  i750.defaultReflectionResolution = i751[43]
  i750.sunLightObjectId = i751[44]
  i750.pixelLightCount = i751[45]
  i750.defaultReflectionHDR = !!i751[46]
  i750.hasLightDataAsset = !!i751[47]
  i750.hasManualGenerate = !!i751[48]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'lightmapColor')
  request.r(i757[2], i757[3], 0, i756, 'lightmapDirection')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i758 = root || new UnityEngine.LightProbes()
  var i759 = data
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i769[i + 0]));
  }
  i766.ShaderCompilationErrors = i768
  i766.name = i767[1]
  i766.guid = i767[2]
  var i771 = i767[3]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i766.shaderDefinedKeywords = i770
  var i773 = i767[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i773[i + 0]) );
  }
  i766.passes = i772
  var i775 = i767[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i775[i + 0]) );
  }
  i766.usePasses = i774
  var i777 = i767[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i777[i + 0]) );
  }
  i766.defaultParameterValues = i776
  request.r(i767[7], i767[8], 0, i766, 'unityFallbackShader')
  i766.readDepth = !!i767[9]
  i766.isCreatedByShaderGraph = !!i767[10]
  i766.usedBatchUniforms = i767[11]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i781 = data
  i780.shaderName = i781[0]
  i780.errorMessage = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i784 = root || new pc.UnityShaderPass()
  var i785 = data
  i784.id = i785[0]
  i784.subShaderIndex = i785[1]
  i784.name = i785[2]
  i784.passType = i785[3]
  i784.grabPassTextureName = i785[4]
  i784.usePass = !!i785[5]
  i784.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[6], i784.zTest)
  i784.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[7], i784.zWrite)
  i784.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[8], i784.culling)
  i784.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i785[9], i784.blending)
  i784.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i785[10], i784.alphaBlending)
  i784.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[11], i784.colorWriteMask)
  i784.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[12], i784.offsetUnits)
  i784.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[13], i784.offsetFactor)
  i784.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[14], i784.stencilRef)
  i784.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[15], i784.stencilReadMask)
  i784.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[16], i784.stencilWriteMask)
  i784.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i785[17], i784.stencilOp)
  i784.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i785[18], i784.stencilOpFront)
  i784.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i785[19], i784.stencilOpBack)
  var i787 = i785[20]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i787[i + 0]) );
  }
  i784.tags = i786
  var i789 = i785[21]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i784.passDefinedKeywords = i788
  var i791 = i785[22]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i791[i + 0]) );
  }
  i784.passDefinedKeywordGroups = i790
  var i793 = i785[23]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i793[i + 0]) );
  }
  i784.variants = i792
  var i795 = i785[24]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i795[i + 0]) );
  }
  i784.excludedVariants = i794
  i784.hasDepthReader = !!i785[25]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i797 = data
  i796.val = i797[0]
  i796.name = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i799 = data
  i798.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[0], i798.src)
  i798.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[1], i798.dst)
  i798.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[2], i798.op)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i801 = data
  i800.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[0], i800.pass)
  i800.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[1], i800.fail)
  i800.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[2], i800.zFail)
  i800.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[3], i800.comp)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i805 = data
  i804.name = i805[0]
  i804.value = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i808.keywords = i810
  i808.hasDiscard = !!i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i815 = data
  i814.passId = i815[0]
  i814.subShaderIndex = i815[1]
  var i817 = i815[2]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i814.keywords = i816
  i814.vertexProgram = i815[3]
  i814.fragmentProgram = i815[4]
  i814.readDepth = !!i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'shader')
  i820.pass = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i825 = data
  i824.name = i825[0]
  i824.type = i825[1]
  i824.value = new pc.Vec4( i825[2], i825[3], i825[4], i825[5] )
  i824.textureValue = i825[6]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i827 = data
  i826.name = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'texture')
  i826.aabb = i827[3]
  i826.vertices = i827[4]
  i826.triangles = i827[5]
  i826.textureRect = UnityEngine.Rect.MinMaxRect(i827[6], i827[7], i827[8], i827[9])
  i826.packedRect = UnityEngine.Rect.MinMaxRect(i827[10], i827[11], i827[12], i827[13])
  i826.border = new pc.Vec4( i827[14], i827[15], i827[16], i827[17] )
  i826.transparency = i827[18]
  i826.bounds = i827[19]
  i826.pixelsPerUnit = i827[20]
  i826.textureWidth = i827[21]
  i826.textureHeight = i827[22]
  i826.nativeSize = new pc.Vec2( i827[23], i827[24] )
  i826.pivot = new pc.Vec2( i827[25], i827[26] )
  i826.textureRectOffset = new pc.Vec2( i827[27], i827[28] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i829 = data
  i828.name = i829[0]
  i828.wrapMode = i829[1]
  i828.isLooping = !!i829[2]
  i828.length = i829[3]
  var i831 = i829[4]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i831[i + 0]) );
  }
  i828.curves = i830
  var i833 = i829[5]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i833[i + 0]) );
  }
  i828.events = i832
  i828.halfPrecision = !!i829[6]
  i828.frameRate = i829[7]
  i828.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i829[8], i828.localBounds)
  i828.hasMuscleCurves = !!i829[9]
  var i835 = i829[10]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i828.clipMuscleConstant = i834
  i828.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i829[11], i828.clipBindingConstant)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i839 = data
  i838.path = i839[0]
  i838.componentType = i839[1]
  i838.property = i839[2]
  i838.keys = i839[3]
  var i841 = i839[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i841[i + 0]) );
  }
  i838.objectReferenceKeys = i840
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i845 = data
  i844.time = i845[0]
  request.r(i845[1], i845[2], 0, i844, 'value')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i849 = data
  i848.functionName = i849[0]
  i848.floatParameter = i849[1]
  i848.intParameter = i849[2]
  i848.stringParameter = i849[3]
  request.r(i849[4], i849[5], 0, i848, 'objectReferenceParameter')
  i848.time = i849[6]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i851 = data
  i850.center = new pc.Vec3( i851[0], i851[1], i851[2] )
  i850.extends = new pc.Vec3( i851[3], i851[4], i851[5] )
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i855 = data
  var i857 = i855[0]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i854.genericBindings = i856
  var i859 = i855[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i854.pptrCurveMapping = i858
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i861 = data
  i860.name = i861[0]
  i860.ascent = i861[1]
  i860.originalLineHeight = i861[2]
  i860.fontSize = i861[3]
  var i863 = i861[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i863[i + 0]) );
  }
  i860.characterInfo = i862
  request.r(i861[5], i861[6], 0, i860, 'texture')
  i860.originalFontSize = i861[7]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i867 = data
  i866.index = i867[0]
  i866.advance = i867[1]
  i866.bearing = i867[2]
  i866.glyphWidth = i867[3]
  i866.glyphHeight = i867[4]
  i866.minX = i867[5]
  i866.maxX = i867[6]
  i866.minY = i867[7]
  i866.maxY = i867[8]
  i866.uvBottomLeftX = i867[9]
  i866.uvBottomLeftY = i867[10]
  i866.uvBottomRightX = i867[11]
  i866.uvBottomRightY = i867[12]
  i866.uvTopLeftX = i867[13]
  i866.uvTopLeftY = i867[14]
  i866.uvTopRightX = i867[15]
  i866.uvTopRightY = i867[16]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i869 = data
  i868.name = i869[0]
  var i871 = i869[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i871[i + 0]) );
  }
  i868.states = i870
  var i873 = i869[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i873[i + 0]) );
  }
  i868.layers = i872
  var i875 = i869[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i875[i + 0]) );
  }
  i868.parameters = i874
  i868.animationClips = i869[4]
  i868.HasSubStateMachines = !!i869[5]
  i868.avatarUnsupported = i869[6]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i879 = data
  i878.cycleOffset = i879[0]
  i878.cycleOffsetParameter = i879[1]
  i878.cycleOffsetParameterActive = !!i879[2]
  i878.mirror = !!i879[3]
  i878.mirrorParameter = i879[4]
  i878.mirrorParameterActive = !!i879[5]
  i878.motionId = i879[6]
  i878.nameHash = i879[7]
  i878.fullPathHash = i879[8]
  i878.speed = i879[9]
  i878.speedParameter = i879[10]
  i878.speedParameterActive = !!i879[11]
  i878.tag = i879[12]
  i878.name = i879[13]
  i878.layer = i879[14]
  i878.writeDefaultValues = !!i879[15]
  var i881 = i879[16]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i881[i + 0]) );
  }
  i878.transitions = i880
  var i883 = i879[17]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i878.behaviours = i882
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i887 = data
  i886.fullPath = i887[0]
  i886.canTransitionToSelf = !!i887[1]
  i886.duration = i887[2]
  i886.exitTime = i887[3]
  i886.hasExitTime = !!i887[4]
  i886.hasFixedDuration = !!i887[5]
  i886.interruptionSource = i887[6]
  i886.offset = i887[7]
  i886.orderedInterruption = !!i887[8]
  i886.destinationStateNameHash = i887[9]
  i886.destinationStateMachineId = i887[10]
  i886.isExit = !!i887[11]
  i886.mute = !!i887[12]
  i886.solo = !!i887[13]
  var i889 = i887[14]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i889[i + 0]) );
  }
  i886.conditions = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i893 = data
  i892.mode = i893[0]
  i892.parameter = i893[1]
  i892.threshold = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i899 = data
  i898.blendingMode = i899[0]
  i898.defaultWeight = i899[1]
  i898.name = i899[2]
  i898.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i899[3], i898.stateMachine)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i901 = data
  i900.id = i901[0]
  i900.defaultStateNameHash = i901[1]
  var i903 = i901[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i903[i + 0]) );
  }
  i900.entryTransitions = i902
  var i905 = i901[3]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i905[i + 0]) );
  }
  i900.anyStateTransitions = i904
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i909 = data
  i908.destinationStateNameHash = i909[0]
  i908.destinationStateMachineId = i909[1]
  i908.isExit = !!i909[2]
  i908.mute = !!i909[3]
  i908.solo = !!i909[4]
  var i911 = i909[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i911[i + 0]) );
  }
  i908.conditions = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i915 = data
  i914.defaultBool = !!i915[0]
  i914.defaultFloat = i915[1]
  i914.defaultInt = i915[2]
  i914.name = i915[3]
  i914.nameHash = i915[4]
  i914.type = i915[5]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i917 = data
  i916.name = i917[0]
  i916.bytes64 = i917[1]
  i916.data = i917[2]
  return i916
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i918 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.atlasAssets = i920
  i918.scale = i919[1]
  request.r(i919[2], i919[3], 0, i918, 'skeletonJSON')
  i918.isUpgradingBlendModeMaterials = !!i919[4]
  i918.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i919[5], i918.blendModeMaterials)
  var i923 = i919[6]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i918.skeletonDataModifiers = i922
  var i925 = i919[7]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i918.fromAnimation = i924
  var i927 = i919[8]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i918.toAnimation = i926
  i918.duration = i919[9]
  i918.defaultMix = i919[10]
  request.r(i919[11], i919[12], 0, i918, 'controller')
  return i918
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i930 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i931 = data
  i930.applyAdditiveMaterial = !!i931[0]
  var i933 = i931[1]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i933[i + 0]));
  }
  i930.additiveMaterials = i932
  var i935 = i931[2]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i935[i + 0]));
  }
  i930.multiplyMaterials = i934
  var i937 = i931[3]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i937[i + 0]));
  }
  i930.screenMaterials = i936
  i930.requiresBlendModeMaterials = !!i931[4]
  return i930
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i940 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i941 = data
  i940.pageName = i941[0]
  request.r(i941[1], i941[2], 0, i940, 'material')
  return i940
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i944 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'atlasFile')
  var i947 = i945[2]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.materials = i946
  i944.textureLoadingMode = i945[3]
  request.r(i945[4], i945[5], 0, i944, 'onDemandTextureLoader')
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i949 = data
  var i951 = i949[0]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i951[i + 0]) );
  }
  i948.files = i950
  i948.componentToPrefabIds = i949[1]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i955 = data
  i954.path = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'unityObject')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i959[i + 0]) );
  }
  i956.scriptsExecutionOrder = i958
  var i961 = i957[1]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i961[i + 0]) );
  }
  i956.sortingLayers = i960
  var i963 = i957[2]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i963[i + 0]) );
  }
  i956.cullingLayers = i962
  i956.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i957[3], i956.timeSettings)
  i956.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i957[4], i956.physicsSettings)
  i956.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i957[5], i956.physics2DSettings)
  i956.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i957[6], i956.qualitySettings)
  i956.enableRealtimeShadows = !!i957[7]
  i956.enableAutoInstancing = !!i957[8]
  i956.enableDynamicBatching = !!i957[9]
  i956.lightmapEncodingQuality = i957[10]
  i956.desiredColorSpace = i957[11]
  var i965 = i957[12]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i956.allTags = i964
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i969 = data
  i968.name = i969[0]
  i968.value = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i973 = data
  i972.id = i973[0]
  i972.name = i973[1]
  i972.value = i973[2]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i977 = data
  i976.id = i977[0]
  i976.name = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i979 = data
  i978.fixedDeltaTime = i979[0]
  i978.maximumDeltaTime = i979[1]
  i978.timeScale = i979[2]
  i978.maximumParticleTimestep = i979[3]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i981 = data
  i980.gravity = new pc.Vec3( i981[0], i981[1], i981[2] )
  i980.defaultSolverIterations = i981[3]
  i980.bounceThreshold = i981[4]
  i980.autoSyncTransforms = !!i981[5]
  i980.autoSimulation = !!i981[6]
  var i983 = i981[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i983[i + 0]) );
  }
  i980.collisionMatrix = i982
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i987 = data
  i986.enabled = !!i987[0]
  i986.layerId = i987[1]
  i986.otherLayerId = i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'material')
  i988.gravity = new pc.Vec2( i989[2], i989[3] )
  i988.positionIterations = i989[4]
  i988.velocityIterations = i989[5]
  i988.velocityThreshold = i989[6]
  i988.maxLinearCorrection = i989[7]
  i988.maxAngularCorrection = i989[8]
  i988.maxTranslationSpeed = i989[9]
  i988.maxRotationSpeed = i989[10]
  i988.baumgarteScale = i989[11]
  i988.baumgarteTOIScale = i989[12]
  i988.timeToSleep = i989[13]
  i988.linearSleepTolerance = i989[14]
  i988.angularSleepTolerance = i989[15]
  i988.defaultContactOffset = i989[16]
  i988.autoSimulation = !!i989[17]
  i988.queriesHitTriggers = !!i989[18]
  i988.queriesStartInColliders = !!i989[19]
  i988.callbacksOnDisable = !!i989[20]
  i988.reuseCollisionCallbacks = !!i989[21]
  i988.autoSyncTransforms = !!i989[22]
  var i991 = i989[23]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i991[i + 0]) );
  }
  i988.collisionMatrix = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i995 = data
  i994.enabled = !!i995[0]
  i994.layerId = i995[1]
  i994.otherLayerId = i995[2]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i997 = data
  var i999 = i997[0]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i999[i + 0]) );
  }
  i996.qualityLevels = i998
  var i1001 = i997[1]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i996.names = i1000
  i996.shadows = i997[2]
  i996.anisotropicFiltering = i997[3]
  i996.antiAliasing = i997[4]
  i996.lodBias = i997[5]
  i996.shadowCascades = i997[6]
  i996.shadowDistance = i997[7]
  i996.shadowmaskMode = i997[8]
  i996.shadowProjection = i997[9]
  i996.shadowResolution = i997[10]
  i996.softParticles = !!i997[11]
  i996.softVegetation = !!i997[12]
  i996.activeColorSpace = i997[13]
  i996.desiredColorSpace = i997[14]
  i996.masterTextureLimit = i997[15]
  i996.maxQueuedFrames = i997[16]
  i996.particleRaycastBudget = i997[17]
  i996.pixelLightCount = i997[18]
  i996.realtimeReflectionProbes = !!i997[19]
  i996.shadowCascade2Split = i997[20]
  i996.shadowCascade4Split = new pc.Vec3( i997[21], i997[22], i997[23] )
  i996.streamingMipmapsActive = !!i997[24]
  i996.vSyncCount = i997[25]
  i996.asyncUploadBufferSize = i997[26]
  i996.asyncUploadTimeSlice = i997[27]
  i996.billboardsFaceCameraPosition = !!i997[28]
  i996.shadowNearPlaneOffset = i997[29]
  i996.streamingMipmapsMemoryBudget = i997[30]
  i996.maximumLODLevel = i997[31]
  i996.streamingMipmapsAddAllCameras = !!i997[32]
  i996.streamingMipmapsMaxLevelReduction = i997[33]
  i996.streamingMipmapsRenderersPerFrame = i997[34]
  i996.resolutionScalingFixedDPIFactor = i997[35]
  i996.streamingMipmapsMaxFileIORequests = i997[36]
  i996.currentQualityLevel = i997[37]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1007 = data
  i1006.weight = i1007[0]
  i1006.vertices = i1007[1]
  i1006.normals = i1007[2]
  i1006.tangents = i1007[3]
  return i1006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[15],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[15],"80":[5],"81":[82],"83":[82],"17":[14],"84":[85],"36":[14],"37":[21,14],"86":[5],"35":[21,14],"10":[7,5],"87":[5],"88":[5,3],"89":[58],"90":[66],"91":[85],"92":[93],"94":[14],"95":[5,14],"96":[14,21],"97":[14],"98":[21,14],"99":[5],"100":[21,14],"101":[14],"102":[103],"104":[14],"105":[14],"20":[17],"22":[21,14],"106":[14],"19":[17],"25":[14],"24":[14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[14],"114":[21,14],"115":[14],"116":[14],"117":[14],"30":[14],"31":[21,14],"118":[14],"119":[38],"120":[38],"39":[38],"121":[38],"122":[15],"123":[15],"124":[103],"125":[103]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","enemy","player","UnityEngine.RectTransform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","test","UnityEngine.GameObject","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","endCard","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","bread","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "3.2";

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

Deserializers.buildID = "6f3e8251-b866-45c6-9004-fcec0ce98875";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

