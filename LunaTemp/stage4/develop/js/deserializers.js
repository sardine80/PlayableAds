var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointSpring' )
  var i509 = data
  i508.spring = i509[0]
  i508.damper = i509[1]
  i508.targetPosition = i509[2]
  return i508
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointMotor' )
  var i511 = data
  i510.m_TargetVelocity = i511[0]
  i510.m_Force = i511[1]
  i510.m_FreeSpin = i511[2]
  return i510
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointLimits' )
  var i513 = data
  i512.m_Min = i513[0]
  i512.m_Max = i513[1]
  i512.m_Bounciness = i513[2]
  i512.m_BounceMinVelocity = i513[3]
  i512.m_ContactDistance = i513[4]
  i512.minBounce = i513[5]
  i512.maxBounce = i513[6]
  return i512
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointDrive' )
  var i515 = data
  i514.m_PositionSpring = i515[0]
  i514.m_PositionDamper = i515[1]
  i514.m_MaximumForce = i515[2]
  return i514
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i517 = data
  i516.m_Spring = i517[0]
  i516.m_Damper = i517[1]
  return i516
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i519 = data
  i518.m_Limit = i519[0]
  i518.m_Bounciness = i519[1]
  i518.m_ContactDistance = i519[2]
  return i518
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i521 = data
  i520.m_ExtremumSlip = i521[0]
  i520.m_ExtremumValue = i521[1]
  i520.m_AsymptoteSlip = i521[2]
  i520.m_AsymptoteValue = i521[3]
  i520.m_Stiffness = i521[4]
  return i520
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i523 = data
  i522.m_LowerAngle = i523[0]
  i522.m_UpperAngle = i523[1]
  return i522
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i525 = data
  i524.m_MotorSpeed = i525[0]
  i524.m_MaximumMotorTorque = i525[1]
  return i524
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i527 = data
  i526.m_DampingRatio = i527[0]
  i526.m_Frequency = i527[1]
  i526.m_Angle = i527[2]
  return i526
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i529 = data
  i528.m_LowerTranslation = i529[0]
  i528.m_UpperTranslation = i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i530 = root || new pc.UnityMaterial()
  var i531 = data
  i530.name = i531[0]
  request.r(i531[1], i531[2], 0, i530, 'shader')
  i530.renderQueue = i531[3]
  i530.enableInstancing = !!i531[4]
  var i533 = i531[5]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i533[i + 0]) );
  }
  i530.floatParameters = i532
  var i535 = i531[6]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i535[i + 0]) );
  }
  i530.colorParameters = i534
  var i537 = i531[7]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i537[i + 0]) );
  }
  i530.vectorParameters = i536
  var i539 = i531[8]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i539[i + 0]) );
  }
  i530.textureParameters = i538
  var i541 = i531[9]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i541[i + 0]) );
  }
  i530.materialFlags = i540
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i545 = data
  i544.name = i545[0]
  i544.value = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i549 = data
  i548.name = i549[0]
  i548.value = new pc.Color(i549[1], i549[2], i549[3], i549[4])
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i553 = data
  i552.name = i553[0]
  i552.value = new pc.Vec4( i553[1], i553[2], i553[3], i553[4] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i557 = data
  i556.name = i557[0]
  request.r(i557[1], i557[2], 0, i556, 'value')
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i561 = data
  i560.name = i561[0]
  i560.enabled = !!i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i563 = data
  i562.name = i563[0]
  i562.width = i563[1]
  i562.height = i563[2]
  i562.mipmapCount = i563[3]
  i562.anisoLevel = i563[4]
  i562.filterMode = i563[5]
  i562.hdr = !!i563[6]
  i562.format = i563[7]
  i562.wrapMode = i563[8]
  i562.alphaIsTransparency = !!i563[9]
  i562.alphaSource = i563[10]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i565 = data
  i564.position = new pc.Vec3( i565[0], i565[1], i565[2] )
  i564.scale = new pc.Vec3( i565[3], i565[4], i565[5] )
  i564.rotation = new pc.Quat(i565[6], i565[7], i565[8], i565[9])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'sharedMesh')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'additionalVertexStreams')
  i568.enabled = !!i569[2]
  request.r(i569[3], i569[4], 0, i568, 'sharedMaterial')
  var i571 = i569[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i568.sharedMaterials = i570
  i568.receiveShadows = !!i569[6]
  i568.shadowCastingMode = i569[7]
  i568.sortingLayerID = i569[8]
  i568.sortingOrder = i569[9]
  i568.lightmapIndex = i569[10]
  i568.lightmapSceneIndex = i569[11]
  i568.lightmapScaleOffset = new pc.Vec4( i569[12], i569[13], i569[14], i569[15] )
  i568.lightProbeUsage = i569[16]
  i568.reflectionProbeUsage = i569[17]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'animatorController')
  request.r(i575[2], i575[3], 0, i574, 'avatar')
  i574.updateMode = i575[4]
  i574.hasTransformHierarchy = !!i575[5]
  i574.applyRootMotion = !!i575[6]
  var i577 = i575[7]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.humanBones = i576
  i574.enabled = !!i575[8]
  return i574
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i580 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'skeletonDataAsset')
  i580.initialSkinName = i581[2]
  i580.fixPrefabOverrideViaMeshFilter = i581[3]
  i580.initialFlipX = !!i581[4]
  i580.initialFlipY = !!i581[5]
  i580.updateWhenInvisible = i581[6]
  i580.zSpacing = i581[7]
  i580.useClipping = !!i581[8]
  i580.immutableTriangles = !!i581[9]
  i580.pmaVertexColors = !!i581[10]
  i580.clearStateOnDisable = !!i581[11]
  i580.tintBlack = !!i581[12]
  i580.singleSubmesh = !!i581[13]
  i580.fixDrawOrder = !!i581[14]
  i580.addNormals = !!i581[15]
  i580.calculateTangents = !!i581[16]
  i580.maskInteraction = i581[17]
  i580.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i581[18], i580.maskMaterials)
  i580.disableRenderingOnOverride = !!i581[19]
  i580.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i581[20], i580.translator)
  i580.updateTiming = i581[21]
  var i583 = i581[22]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i580.separatorSlotNames = i582
  return i580
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i584 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i585 = data
  var i587 = i585[0]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.materialsMaskDisabled = i586
  var i589 = i585[1]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i584.materialsInsideMask = i588
  var i591 = i585[2]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i584.materialsOutsideMask = i590
  return i584
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i592 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i593 = data
  i592.autoReset = !!i593[0]
  i592.useCustomMixMode = !!i593[1]
  var i595 = i593[2]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( i595[i + 0] );
  }
  i592.layerMixModes = i594
  var i597 = i593[3]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( i597[i + 0] );
  }
  i592.layerBlendModes = i596
  return i592
}

Deserializers["enemy"] = function (request, data, root) {
  var i604 = root || request.c( 'enemy' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'gm')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i607 = data
  i606.name = i607[0]
  i606.tagId = i607[1]
  i606.enabled = !!i607[2]
  i606.isStatic = !!i607[3]
  i606.layer = i607[4]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i609 = data
  i608.name = i609[0]
  i608.halfPrecision = !!i609[1]
  i608.vertexCount = i609[2]
  i608.aabb = i609[3]
  var i611 = i609[4]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( !!i611[i + 0] );
  }
  i608.streams = i610
  i608.vertices = i609[5]
  var i613 = i609[6]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i613[i + 0]) );
  }
  i608.subMeshes = i612
  var i615 = i609[7]
  var i614 = []
  for(var i = 0; i < i615.length; i += 16) {
    i614.push( new pc.Mat4().setData(i615[i + 0], i615[i + 1], i615[i + 2], i615[i + 3],  i615[i + 4], i615[i + 5], i615[i + 6], i615[i + 7],  i615[i + 8], i615[i + 9], i615[i + 10], i615[i + 11],  i615[i + 12], i615[i + 13], i615[i + 14], i615[i + 15]) );
  }
  i608.bindposes = i614
  var i617 = i609[8]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i617[i + 0]) );
  }
  i608.blendShapes = i616
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i623 = data
  i622.triangles = i623[0]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i629 = data
  i628.name = i629[0]
  var i631 = i629[1]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i631[i + 0]) );
  }
  i628.frames = i630
  return i628
}

Deserializers["player"] = function (request, data, root) {
  var i632 = root || request.c( 'player' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'gm')
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i635 = data
  i634.name = i635[0]
  i634.atlasId = i635[1]
  i634.mipmapCount = i635[2]
  i634.hdr = !!i635[3]
  i634.size = i635[4]
  i634.anisoLevel = i635[5]
  i634.filterMode = i635[6]
  i634.wrapMode = i635[7]
  var i637 = i635[8]
  var i636 = []
  for(var i = 0; i < i637.length; i += 4) {
    i636.push( UnityEngine.Rect.MinMaxRect(i637[i + 0], i637[i + 1], i637[i + 2], i637[i + 3]) );
  }
  i634.rects = i636
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i641 = data
  i640.name = i641[0]
  i640.index = i641[1]
  i640.startup = !!i641[2]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i643 = data
  i642.pivot = new pc.Vec2( i643[0], i643[1] )
  i642.anchorMin = new pc.Vec2( i643[2], i643[3] )
  i642.anchorMax = new pc.Vec2( i643[4], i643[5] )
  i642.sizeDelta = new pc.Vec2( i643[6], i643[7] )
  i642.anchoredPosition3D = new pc.Vec3( i643[8], i643[9], i643[10] )
  i642.rotation = new pc.Quat(i643[11], i643[12], i643[13], i643[14])
  i642.scale = new pc.Vec3( i643[15], i643[16], i643[17] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i645 = data
  i644.enabled = !!i645[0]
  i644.aspect = i645[1]
  i644.orthographic = !!i645[2]
  i644.orthographicSize = i645[3]
  i644.backgroundColor = new pc.Color(i645[4], i645[5], i645[6], i645[7])
  i644.nearClipPlane = i645[8]
  i644.farClipPlane = i645[9]
  i644.fieldOfView = i645[10]
  i644.depth = i645[11]
  i644.clearFlags = i645[12]
  i644.cullingMask = i645[13]
  i644.rect = i645[14]
  request.r(i645[15], i645[16], 0, i644, 'targetTexture')
  i644.usePhysicalProperties = !!i645[17]
  i644.focalLength = i645[18]
  i644.sensorSize = new pc.Vec2( i645[19], i645[20] )
  i644.lensShift = new pc.Vec2( i645[21], i645[22] )
  i644.gateFit = i645[23]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.planeDistance = i647[1]
  i646.referencePixelsPerUnit = i647[2]
  i646.isFallbackOverlay = !!i647[3]
  i646.renderMode = i647[4]
  i646.renderOrder = i647[5]
  i646.sortingLayerName = i647[6]
  i646.sortingOrder = i647[7]
  i646.scaleFactor = i647[8]
  request.r(i647[9], i647[10], 0, i646, 'worldCamera')
  i646.overrideSorting = !!i647[11]
  i646.pixelPerfect = !!i647[12]
  i646.targetDisplay = i647[13]
  i646.overridePixelPerfect = !!i647[14]
  return i646
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i649 = data
  i648.m_UiScaleMode = i649[0]
  i648.m_ReferencePixelsPerUnit = i649[1]
  i648.m_ScaleFactor = i649[2]
  i648.m_ReferenceResolution = new pc.Vec2( i649[3], i649[4] )
  i648.m_ScreenMatchMode = i649[5]
  i648.m_MatchWidthOrHeight = i649[6]
  i648.m_PhysicalUnit = i649[7]
  i648.m_FallbackScreenDPI = i649[8]
  i648.m_DefaultSpriteDPI = i649[9]
  i648.m_DynamicPixelsPerUnit = i649[10]
  i648.m_PresetInfoIsWorld = !!i649[11]
  return i648
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i651 = data
  i650.m_IgnoreReversedGraphics = !!i651[0]
  i650.m_BlockingObjects = i651[1]
  i650.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i651[2] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i653 = data
  i652.cullTransparentMesh = !!i653[0]
  return i652
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.Image' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_Sprite')
  i654.m_Type = i655[2]
  i654.m_PreserveAspect = !!i655[3]
  i654.m_FillCenter = !!i655[4]
  i654.m_FillMethod = i655[5]
  i654.m_FillAmount = i655[6]
  i654.m_FillClockwise = !!i655[7]
  i654.m_FillOrigin = i655[8]
  i654.m_UseSpriteMesh = !!i655[9]
  i654.m_PixelsPerUnitMultiplier = i655[10]
  request.r(i655[11], i655[12], 0, i654, 'm_Material')
  i654.m_Maskable = !!i655[13]
  i654.m_Color = new pc.Color(i655[14], i655[15], i655[16], i655[17])
  i654.m_RaycastTarget = !!i655[18]
  i654.m_RaycastPadding = new pc.Vec4( i655[19], i655[20], i655[21], i655[22] )
  return i654
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i657 = data
  i656.m_StartCorner = i657[0]
  i656.m_StartAxis = i657[1]
  i656.m_CellSize = new pc.Vec2( i657[2], i657[3] )
  i656.m_Spacing = new pc.Vec2( i657[4], i657[5] )
  i656.m_Constraint = i657[6]
  i656.m_ConstraintCount = i657[7]
  i656.m_Padding = UnityEngine.RectOffset.FromPaddings(i657[8], i657[9], i657[10], i657[11])
  i656.m_ChildAlignment = i657[12]
  return i656
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i659 = data
  i658.m_HorizontalFit = i659[0]
  i658.m_VerticalFit = i659[1]
  return i658
}

Deserializers["test"] = function (request, data, root) {
  var i660 = root || request.c( 'test' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'img')
  request.r(i661[2], i661[3], 0, i660, 'sprite')
  request.r(i661[4], i661[5], 0, i660, 'bg')
  i660.x = i661[6]
  request.r(i661[7], i661[8], 0, i660, 'gm')
  i660.scaleChangeTime = i661[9]
  i660.clickScale = i661[10]
  i660.clearScale = i661[11]
  i660.effectIndex = i661[12]
  return i660
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Button' )
  var i663 = data
  i662.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i663[0], i662.m_OnClick)
  i662.m_Navigation = request.d('UnityEngine.UI.Navigation', i663[1], i662.m_Navigation)
  i662.m_Transition = i663[2]
  i662.m_Colors = request.d('UnityEngine.UI.ColorBlock', i663[3], i662.m_Colors)
  i662.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i663[4], i662.m_SpriteState)
  i662.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i663[5], i662.m_AnimationTriggers)
  i662.m_Interactable = !!i663[6]
  request.r(i663[7], i663[8], 0, i662, 'm_TargetGraphic')
  return i662
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i665 = data
  i664.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i665[0], i664.m_PersistentCalls)
  return i664
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i667 = data
  var i669 = i667[0]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('UnityEngine.Events.PersistentCall', i669[i + 0]));
  }
  i666.m_Calls = i668
  return i666
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_Target')
  i672.m_TargetAssemblyTypeName = i673[2]
  i672.m_MethodName = i673[3]
  i672.m_Mode = i673[4]
  i672.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i673[5], i672.m_Arguments)
  i672.m_CallState = i673[6]
  return i672
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_ObjectArgument')
  i674.m_ObjectArgumentAssemblyTypeName = i675[2]
  i674.m_IntArgument = i675[3]
  i674.m_FloatArgument = i675[4]
  i674.m_StringArgument = i675[5]
  i674.m_BoolArgument = !!i675[6]
  return i674
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i677 = data
  i676.m_Mode = i677[0]
  i676.m_WrapAround = !!i677[1]
  request.r(i677[2], i677[3], 0, i676, 'm_SelectOnUp')
  request.r(i677[4], i677[5], 0, i676, 'm_SelectOnDown')
  request.r(i677[6], i677[7], 0, i676, 'm_SelectOnLeft')
  request.r(i677[8], i677[9], 0, i676, 'm_SelectOnRight')
  return i676
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i679 = data
  i678.m_NormalColor = new pc.Color(i679[0], i679[1], i679[2], i679[3])
  i678.m_HighlightedColor = new pc.Color(i679[4], i679[5], i679[6], i679[7])
  i678.m_PressedColor = new pc.Color(i679[8], i679[9], i679[10], i679[11])
  i678.m_SelectedColor = new pc.Color(i679[12], i679[13], i679[14], i679[15])
  i678.m_DisabledColor = new pc.Color(i679[16], i679[17], i679[18], i679[19])
  i678.m_ColorMultiplier = i679[20]
  i678.m_FadeDuration = i679[21]
  return i678
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_HighlightedSprite')
  request.r(i681[2], i681[3], 0, i680, 'm_PressedSprite')
  request.r(i681[4], i681[5], 0, i680, 'm_SelectedSprite')
  request.r(i681[6], i681[7], 0, i680, 'm_DisabledSprite')
  return i680
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i683 = data
  i682.m_NormalTrigger = i683[0]
  i682.m_HighlightedTrigger = i683[1]
  i682.m_PressedTrigger = i683[2]
  i682.m_SelectedTrigger = i683[3]
  i682.m_DisabledTrigger = i683[4]
  return i682
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Slider' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_FillRect')
  request.r(i685[2], i685[3], 0, i684, 'm_HandleRect')
  i684.m_Direction = i685[4]
  i684.m_MinValue = i685[5]
  i684.m_MaxValue = i685[6]
  i684.m_WholeNumbers = !!i685[7]
  i684.m_Value = i685[8]
  i684.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i685[9], i684.m_OnValueChanged)
  i684.m_Navigation = request.d('UnityEngine.UI.Navigation', i685[10], i684.m_Navigation)
  i684.m_Transition = i685[11]
  i684.m_Colors = request.d('UnityEngine.UI.ColorBlock', i685[12], i684.m_Colors)
  i684.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i685[13], i684.m_SpriteState)
  i684.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i685[14], i684.m_AnimationTriggers)
  i684.m_Interactable = !!i685[15]
  request.r(i685[16], i685[17], 0, i684, 'm_TargetGraphic')
  return i684
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i687 = data
  i686.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i687[0], i686.m_PersistentCalls)
  return i686
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Text' )
  var i689 = data
  i688.m_FontData = request.d('UnityEngine.UI.FontData', i689[0], i688.m_FontData)
  i688.m_Text = i689[1]
  request.r(i689[2], i689[3], 0, i688, 'm_Material')
  i688.m_Maskable = !!i689[4]
  i688.m_Color = new pc.Color(i689[5], i689[6], i689[7], i689[8])
  i688.m_RaycastTarget = !!i689[9]
  i688.m_RaycastPadding = new pc.Vec4( i689[10], i689[11], i689[12], i689[13] )
  return i688
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.FontData' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_Font')
  i690.m_FontSize = i691[2]
  i690.m_FontStyle = i691[3]
  i690.m_BestFit = !!i691[4]
  i690.m_MinSize = i691[5]
  i690.m_MaxSize = i691[6]
  i690.m_Alignment = i691[7]
  i690.m_AlignByGeometry = !!i691[8]
  i690.m_RichText = !!i691[9]
  i690.m_HorizontalOverflow = i691[10]
  i690.m_VerticalOverflow = i691[11]
  i690.m_LineSpacing = i691[12]
  return i690
}

Deserializers["endCard"] = function (request, data, root) {
  var i692 = root || request.c( 'endCard' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'gm')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'clip')
  request.r(i695[2], i695[3], 0, i694, 'outputAudioMixerGroup')
  i694.playOnAwake = !!i695[4]
  i694.loop = !!i695[5]
  i694.time = i695[6]
  i694.volume = i695[7]
  i694.pitch = i695[8]
  i694.enabled = !!i695[9]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i697 = data
  i696.m_Alpha = i697[0]
  i696.m_Interactable = !!i697[1]
  i696.m_BlocksRaycasts = !!i697[2]
  i696.m_IgnoreParentGroups = !!i697[3]
  i696.enabled = !!i697[4]
  return i696
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i698 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'skeletonDataAsset')
  request.r(i699[2], i699[3], 0, i698, 'additiveMaterial')
  request.r(i699[4], i699[5], 0, i698, 'multiplyMaterial')
  request.r(i699[6], i699[7], 0, i698, 'screenMaterial')
  i698.initialSkinName = i699[8]
  i698.initialFlipX = !!i699[9]
  i698.initialFlipY = !!i699[10]
  i698.startingAnimation = i699[11]
  i698.startingLoop = !!i699[12]
  i698.timeScale = i699[13]
  i698.freeze = !!i699[14]
  i698.layoutScaleMode = i699[15]
  i698.updateWhenInvisible = i699[16]
  i698.allowMultipleCanvasRenderers = !!i699[17]
  var i701 = i699[18]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 1, i700, '')
  }
  i698.canvasRenderers = i700
  i698.enableSeparatorSlots = !!i699[19]
  i698.updateSeparatorPartLocation = !!i699[20]
  i698.updateSeparatorPartScale = !!i699[21]
  i698.disableMeshAssignmentOnOverride = !!i699[22]
  i698.referenceSize = new pc.Vec2( i699[23], i699[24] )
  i698.referenceScale = i699[25]
  i698.rectTransformSize = new pc.Vec2( i699[26], i699[27] )
  i698.editReferenceRect = !!i699[28]
  var i703 = i699[29]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.separatorSlotNames = i702
  var i705 = i699[30]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 1, i704, '')
  }
  i698.separatorParts = i704
  i698.meshGenerator = request.d('Spine.Unity.MeshGenerator', i699[31], i698.meshGenerator)
  i698.updateTiming = i699[32]
  i698.unscaledTime = !!i699[33]
  request.r(i699[34], i699[35], 0, i698, 'm_Material')
  i698.m_Maskable = !!i699[36]
  i698.m_Color = new pc.Color(i699[37], i699[38], i699[39], i699[40])
  i698.m_RaycastTarget = !!i699[41]
  i698.m_RaycastPadding = new pc.Vec4( i699[42], i699[43], i699[44], i699[45] )
  return i698
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i710 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i711 = data
  i710.settings = request.d('Spine.Unity.MeshGenerator+Settings', i711[0], i710.settings)
  return i710
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i712 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i713 = data
  i712.useClipping = !!i713[0]
  i712.zSpacing = i713[1]
  i712.pmaVertexColors = !!i713[2]
  i712.tintBlack = !!i713[3]
  i712.canvasGroupTintBlack = !!i713[4]
  i712.calculateTangents = !!i713[5]
  i712.addNormals = !!i713[6]
  i712.immutableTriangles = !!i713[7]
  return i712
}

Deserializers["Spine.Unity.BoneFollowerGraphic"] = function (request, data, root) {
  var i714 = root || request.c( 'Spine.Unity.BoneFollowerGraphic' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'skeletonGraphic')
  i714.initializeOnAwake = !!i715[2]
  i714.boneName = i715[3]
  i714.followBoneRotation = !!i715[4]
  i714.followSkeletonFlip = !!i715[5]
  i714.followLocalScale = !!i715[6]
  i714.followParentWorldScale = !!i715[7]
  i714.followXYPosition = !!i715[8]
  i714.followZPosition = !!i715[9]
  i714.maintainedAxisOrientation = i715[10]
  return i714
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i716 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_Material')
  i716.m_Maskable = !!i717[2]
  i716.m_Color = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.m_RaycastTarget = !!i717[7]
  i716.m_RaycastPadding = new pc.Vec4( i717[8], i717[9], i717[10], i717[11] )
  return i716
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_FirstSelected')
  i718.m_sendNavigationEvents = !!i719[2]
  i718.m_DragThreshold = i719[3]
  return i718
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i721 = data
  i720.m_HorizontalAxis = i721[0]
  i720.m_VerticalAxis = i721[1]
  i720.m_SubmitButton = i721[2]
  i720.m_CancelButton = i721[3]
  i720.m_InputActionsPerSecond = i721[4]
  i720.m_RepeatDelay = i721[5]
  i720.m_ForceModuleActive = !!i721[6]
  i720.m_SendPointerHoverToParent = !!i721[7]
  return i720
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i722 = root || request.c( 'gamemanager' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722.sprites = i724
  var i727 = i723[1]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i722.t = i726
  var i729 = i723[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i722.tests = i728
  request.r(i723[3], i723[4], 0, i722, 'playerHpbar')
  request.r(i723[5], i723[6], 0, i722, 'enemyHpBar')
  request.r(i723[7], i723[8], 0, i722, 'dmg')
  i722.enemyHpMax = i723[9]
  i722.hpMax = i723[10]
  i722.enemyPower = i723[11]
  i722.playerPower = i723[12]
  i722.playerPowerMul = i723[13]
  i722.attackSpeed = i723[14]
  i722.attackSpeedMul = i723[15]
  request.r(i723[16], i723[17], 0, i722, 'endCover')
  request.r(i723[18], i723[19], 0, i722, 'catchCover')
  i722.curPlayerPower = System.Int64(i723[20])
  request.r(i723[21], i723[22], 0, i722, 'ani')
  request.r(i723[23], i723[24], 0, i722, 'dmgAni')
  var i731 = i723[25]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i722.pets = i730
  request.r(i723[26], i723[27], 0, i722, 'capsule')
  i722.capsuleRotate = i723[28]
  i722.capsuleMoveTime = i723[29]
  request.r(i723[30], i723[31], 0, i722, 'capsuleTarget')
  var i733 = i723[32]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i722.breads1 = i732
  var i735 = i723[33]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i722.breads2 = i734
  var i737 = i723[34]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i722.breads3 = i736
  request.r(i723[35], i723[36], 0, i722, 'displayer')
  request.r(i723[37], i723[38], 0, i722, 'cardGrid')
  request.r(i723[39], i723[40], 0, i722, 'finger')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i745 = data
  i744.enabled = !!i745[0]
  request.r(i745[1], i745[2], 0, i744, 'sharedMaterial')
  var i747 = i745[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.sharedMaterials = i746
  i744.receiveShadows = !!i745[4]
  i744.shadowCastingMode = i745[5]
  i744.sortingLayerID = i745[6]
  i744.sortingOrder = i745[7]
  i744.lightmapIndex = i745[8]
  i744.lightmapSceneIndex = i745[9]
  i744.lightmapScaleOffset = new pc.Vec4( i745[10], i745[11], i745[12], i745[13] )
  i744.lightProbeUsage = i745[14]
  i744.reflectionProbeUsage = i745[15]
  i744.color = new pc.Color(i745[16], i745[17], i745[18], i745[19])
  request.r(i745[20], i745[21], 0, i744, 'sprite')
  i744.flipX = !!i745[22]
  i744.flipY = !!i745[23]
  i744.drawMode = i745[24]
  i744.size = new pc.Vec2( i745[25], i745[26] )
  i744.tileMode = i745[27]
  i744.adaptiveModeThreshold = i745[28]
  i744.maskInteraction = i745[29]
  i744.spriteSortPoint = i745[30]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i749 = data
  i748.playAutomatically = !!i749[0]
  request.r(i749[1], i749[2], 0, i748, 'clip')
  var i751 = i749[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.clips = i750
  i748.wrapMode = i749[4]
  i748.enabled = !!i749[5]
  return i748
}

Deserializers["bread"] = function (request, data, root) {
  var i754 = root || request.c( 'bread' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'from')
  request.r(i755[2], i755[3], 0, i754, 'to')
  i754.moveTime = i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i757 = data
  i756.ambientIntensity = i757[0]
  i756.reflectionIntensity = i757[1]
  i756.ambientMode = i757[2]
  i756.ambientLight = new pc.Color(i757[3], i757[4], i757[5], i757[6])
  i756.ambientSkyColor = new pc.Color(i757[7], i757[8], i757[9], i757[10])
  i756.ambientGroundColor = new pc.Color(i757[11], i757[12], i757[13], i757[14])
  i756.ambientEquatorColor = new pc.Color(i757[15], i757[16], i757[17], i757[18])
  i756.fogColor = new pc.Color(i757[19], i757[20], i757[21], i757[22])
  i756.fogEndDistance = i757[23]
  i756.fogStartDistance = i757[24]
  i756.fogDensity = i757[25]
  i756.fog = !!i757[26]
  request.r(i757[27], i757[28], 0, i756, 'skybox')
  i756.fogMode = i757[29]
  var i759 = i757[30]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i759[i + 0]) );
  }
  i756.lightmaps = i758
  i756.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i757[31], i756.lightProbes)
  i756.lightmapsMode = i757[32]
  i756.mixedBakeMode = i757[33]
  i756.environmentLightingMode = i757[34]
  i756.ambientProbe = new pc.SphericalHarmonicsL2(i757[35])
  i756.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i757[36])
  i756.useReferenceAmbientProbe = !!i757[37]
  request.r(i757[38], i757[39], 0, i756, 'customReflection')
  request.r(i757[40], i757[41], 0, i756, 'defaultReflection')
  i756.defaultReflectionMode = i757[42]
  i756.defaultReflectionResolution = i757[43]
  i756.sunLightObjectId = i757[44]
  i756.pixelLightCount = i757[45]
  i756.defaultReflectionHDR = !!i757[46]
  i756.hasLightDataAsset = !!i757[47]
  i756.hasManualGenerate = !!i757[48]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'lightmapColor')
  request.r(i763[2], i763[3], 0, i762, 'lightmapDirection')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i764 = root || new UnityEngine.LightProbes()
  var i765 = data
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i775[i + 0]));
  }
  i772.ShaderCompilationErrors = i774
  i772.name = i773[1]
  i772.guid = i773[2]
  var i777 = i773[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.shaderDefinedKeywords = i776
  var i779 = i773[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i779[i + 0]) );
  }
  i772.passes = i778
  var i781 = i773[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i781[i + 0]) );
  }
  i772.usePasses = i780
  var i783 = i773[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i783[i + 0]) );
  }
  i772.defaultParameterValues = i782
  request.r(i773[7], i773[8], 0, i772, 'unityFallbackShader')
  i772.readDepth = !!i773[9]
  i772.isCreatedByShaderGraph = !!i773[10]
  i772.usedBatchUniforms = i773[11]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i787 = data
  i786.shaderName = i787[0]
  i786.errorMessage = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i790 = root || new pc.UnityShaderPass()
  var i791 = data
  i790.id = i791[0]
  i790.subShaderIndex = i791[1]
  i790.name = i791[2]
  i790.passType = i791[3]
  i790.grabPassTextureName = i791[4]
  i790.usePass = !!i791[5]
  i790.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[6], i790.zTest)
  i790.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[7], i790.zWrite)
  i790.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[8], i790.culling)
  i790.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[9], i790.blending)
  i790.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[10], i790.alphaBlending)
  i790.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[11], i790.colorWriteMask)
  i790.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[12], i790.offsetUnits)
  i790.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[13], i790.offsetFactor)
  i790.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[14], i790.stencilRef)
  i790.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[15], i790.stencilReadMask)
  i790.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[16], i790.stencilWriteMask)
  i790.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[17], i790.stencilOp)
  i790.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[18], i790.stencilOpFront)
  i790.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[19], i790.stencilOpBack)
  var i793 = i791[20]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i793[i + 0]) );
  }
  i790.tags = i792
  var i795 = i791[21]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i790.passDefinedKeywords = i794
  var i797 = i791[22]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i797[i + 0]) );
  }
  i790.passDefinedKeywordGroups = i796
  var i799 = i791[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i799[i + 0]) );
  }
  i790.variants = i798
  var i801 = i791[24]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i801[i + 0]) );
  }
  i790.excludedVariants = i800
  i790.hasDepthReader = !!i791[25]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i803 = data
  i802.val = i803[0]
  i802.name = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i805 = data
  i804.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[0], i804.src)
  i804.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[1], i804.dst)
  i804.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[2], i804.op)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i807 = data
  i806.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[0], i806.pass)
  i806.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[1], i806.fail)
  i806.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[2], i806.zFail)
  i806.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[3], i806.comp)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i811 = data
  i810.name = i811[0]
  i810.value = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i814.keywords = i816
  i814.hasDiscard = !!i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i821 = data
  i820.passId = i821[0]
  i820.subShaderIndex = i821[1]
  var i823 = i821[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.keywords = i822
  i820.vertexProgram = i821[3]
  i820.fragmentProgram = i821[4]
  i820.readDepth = !!i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'shader')
  i826.pass = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i831 = data
  i830.name = i831[0]
  i830.type = i831[1]
  i830.value = new pc.Vec4( i831[2], i831[3], i831[4], i831[5] )
  i830.textureValue = i831[6]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i833 = data
  i832.name = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'texture')
  i832.aabb = i833[3]
  i832.vertices = i833[4]
  i832.triangles = i833[5]
  i832.textureRect = UnityEngine.Rect.MinMaxRect(i833[6], i833[7], i833[8], i833[9])
  i832.packedRect = UnityEngine.Rect.MinMaxRect(i833[10], i833[11], i833[12], i833[13])
  i832.border = new pc.Vec4( i833[14], i833[15], i833[16], i833[17] )
  i832.transparency = i833[18]
  i832.bounds = i833[19]
  i832.pixelsPerUnit = i833[20]
  i832.textureWidth = i833[21]
  i832.textureHeight = i833[22]
  i832.nativeSize = new pc.Vec2( i833[23], i833[24] )
  i832.pivot = new pc.Vec2( i833[25], i833[26] )
  i832.textureRectOffset = new pc.Vec2( i833[27], i833[28] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i835 = data
  i834.name = i835[0]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i837 = data
  i836.name = i837[0]
  i836.wrapMode = i837[1]
  i836.isLooping = !!i837[2]
  i836.length = i837[3]
  var i839 = i837[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i839[i + 0]) );
  }
  i836.curves = i838
  var i841 = i837[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i841[i + 0]) );
  }
  i836.events = i840
  i836.halfPrecision = !!i837[6]
  i836.frameRate = i837[7]
  i836.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i837[8], i836.localBounds)
  i836.hasMuscleCurves = !!i837[9]
  var i843 = i837[10]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i836.clipMuscleConstant = i842
  i836.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i837[11], i836.clipBindingConstant)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i847 = data
  i846.path = i847[0]
  i846.componentType = i847[1]
  i846.property = i847[2]
  i846.keys = i847[3]
  var i849 = i847[4]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i849[i + 0]) );
  }
  i846.objectReferenceKeys = i848
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i853 = data
  i852.time = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'value')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i857 = data
  i856.functionName = i857[0]
  i856.floatParameter = i857[1]
  i856.intParameter = i857[2]
  i856.stringParameter = i857[3]
  request.r(i857[4], i857[5], 0, i856, 'objectReferenceParameter')
  i856.time = i857[6]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i859 = data
  i858.center = new pc.Vec3( i859[0], i859[1], i859[2] )
  i858.extends = new pc.Vec3( i859[3], i859[4], i859[5] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.genericBindings = i864
  var i867 = i863[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i862.pptrCurveMapping = i866
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i869 = data
  i868.name = i869[0]
  i868.ascent = i869[1]
  i868.originalLineHeight = i869[2]
  i868.fontSize = i869[3]
  var i871 = i869[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i871[i + 0]) );
  }
  i868.characterInfo = i870
  request.r(i869[5], i869[6], 0, i868, 'texture')
  i868.originalFontSize = i869[7]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i875 = data
  i874.index = i875[0]
  i874.advance = i875[1]
  i874.bearing = i875[2]
  i874.glyphWidth = i875[3]
  i874.glyphHeight = i875[4]
  i874.minX = i875[5]
  i874.maxX = i875[6]
  i874.minY = i875[7]
  i874.maxY = i875[8]
  i874.uvBottomLeftX = i875[9]
  i874.uvBottomLeftY = i875[10]
  i874.uvBottomRightX = i875[11]
  i874.uvBottomRightY = i875[12]
  i874.uvTopLeftX = i875[13]
  i874.uvTopLeftY = i875[14]
  i874.uvTopRightX = i875[15]
  i874.uvTopRightY = i875[16]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i877 = data
  i876.name = i877[0]
  var i879 = i877[1]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i879[i + 0]) );
  }
  i876.states = i878
  var i881 = i877[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i881[i + 0]) );
  }
  i876.layers = i880
  var i883 = i877[3]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i883[i + 0]) );
  }
  i876.parameters = i882
  i876.animationClips = i877[4]
  i876.HasSubStateMachines = !!i877[5]
  i876.avatarUnsupported = i877[6]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i887 = data
  i886.cycleOffset = i887[0]
  i886.cycleOffsetParameter = i887[1]
  i886.cycleOffsetParameterActive = !!i887[2]
  i886.mirror = !!i887[3]
  i886.mirrorParameter = i887[4]
  i886.mirrorParameterActive = !!i887[5]
  i886.motionId = i887[6]
  i886.nameHash = i887[7]
  i886.fullPathHash = i887[8]
  i886.speed = i887[9]
  i886.speedParameter = i887[10]
  i886.speedParameterActive = !!i887[11]
  i886.tag = i887[12]
  i886.name = i887[13]
  i886.layer = i887[14]
  i886.writeDefaultValues = !!i887[15]
  var i889 = i887[16]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i889[i + 0]) );
  }
  i886.transitions = i888
  var i891 = i887[17]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.behaviours = i890
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i895 = data
  i894.fullPath = i895[0]
  i894.canTransitionToSelf = !!i895[1]
  i894.duration = i895[2]
  i894.exitTime = i895[3]
  i894.hasExitTime = !!i895[4]
  i894.hasFixedDuration = !!i895[5]
  i894.interruptionSource = i895[6]
  i894.offset = i895[7]
  i894.orderedInterruption = !!i895[8]
  i894.destinationStateNameHash = i895[9]
  i894.destinationStateMachineId = i895[10]
  i894.isExit = !!i895[11]
  i894.mute = !!i895[12]
  i894.solo = !!i895[13]
  var i897 = i895[14]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i897[i + 0]) );
  }
  i894.conditions = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i901 = data
  i900.mode = i901[0]
  i900.parameter = i901[1]
  i900.threshold = i901[2]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i907 = data
  i906.blendingMode = i907[0]
  i906.defaultWeight = i907[1]
  i906.name = i907[2]
  i906.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i907[3], i906.stateMachine)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i909 = data
  i908.id = i909[0]
  i908.defaultStateNameHash = i909[1]
  var i911 = i909[2]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i911[i + 0]) );
  }
  i908.entryTransitions = i910
  var i913 = i909[3]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i913[i + 0]) );
  }
  i908.anyStateTransitions = i912
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i917 = data
  i916.destinationStateNameHash = i917[0]
  i916.destinationStateMachineId = i917[1]
  i916.isExit = !!i917[2]
  i916.mute = !!i917[3]
  i916.solo = !!i917[4]
  var i919 = i917[5]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i919[i + 0]) );
  }
  i916.conditions = i918
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i923 = data
  i922.defaultBool = !!i923[0]
  i922.defaultFloat = i923[1]
  i922.defaultInt = i923[2]
  i922.name = i923[3]
  i922.nameHash = i923[4]
  i922.type = i923[5]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i925 = data
  i924.name = i925[0]
  i924.bytes64 = i925[1]
  i924.data = i925[2]
  return i924
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i926 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.atlasAssets = i928
  i926.scale = i927[1]
  request.r(i927[2], i927[3], 0, i926, 'skeletonJSON')
  i926.isUpgradingBlendModeMaterials = !!i927[4]
  i926.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i927[5], i926.blendModeMaterials)
  var i931 = i927[6]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i926.skeletonDataModifiers = i930
  var i933 = i927[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i926.fromAnimation = i932
  var i935 = i927[8]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i926.toAnimation = i934
  i926.duration = i927[9]
  i926.defaultMix = i927[10]
  request.r(i927[11], i927[12], 0, i926, 'controller')
  return i926
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i938 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i939 = data
  i938.applyAdditiveMaterial = !!i939[0]
  var i941 = i939[1]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i941[i + 0]));
  }
  i938.additiveMaterials = i940
  var i943 = i939[2]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i943[i + 0]));
  }
  i938.multiplyMaterials = i942
  var i945 = i939[3]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i945[i + 0]));
  }
  i938.screenMaterials = i944
  i938.requiresBlendModeMaterials = !!i939[4]
  return i938
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i948 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i949 = data
  i948.pageName = i949[0]
  request.r(i949[1], i949[2], 0, i948, 'material')
  return i948
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i952 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'atlasFile')
  var i955 = i953[2]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.materials = i954
  i952.textureLoadingMode = i953[3]
  request.r(i953[4], i953[5], 0, i952, 'onDemandTextureLoader')
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i959[i + 0]) );
  }
  i956.files = i958
  i956.componentToPrefabIds = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i963 = data
  i962.path = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'unityObject')
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i967[i + 0]) );
  }
  i964.scriptsExecutionOrder = i966
  var i969 = i965[1]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i969[i + 0]) );
  }
  i964.sortingLayers = i968
  var i971 = i965[2]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i971[i + 0]) );
  }
  i964.cullingLayers = i970
  i964.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i965[3], i964.timeSettings)
  i964.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i965[4], i964.physicsSettings)
  i964.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i965[5], i964.physics2DSettings)
  i964.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i965[6], i964.qualitySettings)
  i964.enableRealtimeShadows = !!i965[7]
  i964.enableAutoInstancing = !!i965[8]
  i964.enableDynamicBatching = !!i965[9]
  i964.lightmapEncodingQuality = i965[10]
  i964.desiredColorSpace = i965[11]
  var i973 = i965[12]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i964.allTags = i972
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i977 = data
  i976.name = i977[0]
  i976.value = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i981 = data
  i980.id = i981[0]
  i980.name = i981[1]
  i980.value = i981[2]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i985 = data
  i984.id = i985[0]
  i984.name = i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i987 = data
  i986.fixedDeltaTime = i987[0]
  i986.maximumDeltaTime = i987[1]
  i986.timeScale = i987[2]
  i986.maximumParticleTimestep = i987[3]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i989 = data
  i988.gravity = new pc.Vec3( i989[0], i989[1], i989[2] )
  i988.defaultSolverIterations = i989[3]
  i988.bounceThreshold = i989[4]
  i988.autoSyncTransforms = !!i989[5]
  i988.autoSimulation = !!i989[6]
  var i991 = i989[7]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i991[i + 0]) );
  }
  i988.collisionMatrix = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i995 = data
  i994.enabled = !!i995[0]
  i994.layerId = i995[1]
  i994.otherLayerId = i995[2]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'material')
  i996.gravity = new pc.Vec2( i997[2], i997[3] )
  i996.positionIterations = i997[4]
  i996.velocityIterations = i997[5]
  i996.velocityThreshold = i997[6]
  i996.maxLinearCorrection = i997[7]
  i996.maxAngularCorrection = i997[8]
  i996.maxTranslationSpeed = i997[9]
  i996.maxRotationSpeed = i997[10]
  i996.baumgarteScale = i997[11]
  i996.baumgarteTOIScale = i997[12]
  i996.timeToSleep = i997[13]
  i996.linearSleepTolerance = i997[14]
  i996.angularSleepTolerance = i997[15]
  i996.defaultContactOffset = i997[16]
  i996.autoSimulation = !!i997[17]
  i996.queriesHitTriggers = !!i997[18]
  i996.queriesStartInColliders = !!i997[19]
  i996.callbacksOnDisable = !!i997[20]
  i996.reuseCollisionCallbacks = !!i997[21]
  i996.autoSyncTransforms = !!i997[22]
  var i999 = i997[23]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i999[i + 0]) );
  }
  i996.collisionMatrix = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.layerId = i1003[1]
  i1002.otherLayerId = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1007[i + 0]) );
  }
  i1004.qualityLevels = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.names = i1008
  i1004.shadows = i1005[2]
  i1004.anisotropicFiltering = i1005[3]
  i1004.antiAliasing = i1005[4]
  i1004.lodBias = i1005[5]
  i1004.shadowCascades = i1005[6]
  i1004.shadowDistance = i1005[7]
  i1004.shadowmaskMode = i1005[8]
  i1004.shadowProjection = i1005[9]
  i1004.shadowResolution = i1005[10]
  i1004.softParticles = !!i1005[11]
  i1004.softVegetation = !!i1005[12]
  i1004.activeColorSpace = i1005[13]
  i1004.desiredColorSpace = i1005[14]
  i1004.masterTextureLimit = i1005[15]
  i1004.maxQueuedFrames = i1005[16]
  i1004.particleRaycastBudget = i1005[17]
  i1004.pixelLightCount = i1005[18]
  i1004.realtimeReflectionProbes = !!i1005[19]
  i1004.shadowCascade2Split = i1005[20]
  i1004.shadowCascade4Split = new pc.Vec3( i1005[21], i1005[22], i1005[23] )
  i1004.streamingMipmapsActive = !!i1005[24]
  i1004.vSyncCount = i1005[25]
  i1004.asyncUploadBufferSize = i1005[26]
  i1004.asyncUploadTimeSlice = i1005[27]
  i1004.billboardsFaceCameraPosition = !!i1005[28]
  i1004.shadowNearPlaneOffset = i1005[29]
  i1004.streamingMipmapsMemoryBudget = i1005[30]
  i1004.maximumLODLevel = i1005[31]
  i1004.streamingMipmapsAddAllCameras = !!i1005[32]
  i1004.streamingMipmapsMaxLevelReduction = i1005[33]
  i1004.streamingMipmapsRenderersPerFrame = i1005[34]
  i1004.resolutionScalingFixedDPIFactor = i1005[35]
  i1004.streamingMipmapsMaxFileIORequests = i1005[36]
  i1004.currentQualityLevel = i1005[37]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1015 = data
  i1014.weight = i1015[0]
  i1014.vertices = i1015[1]
  i1014.normals = i1015[2]
  i1014.tangents = i1015[3]
  return i1014
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

Deserializers.buildID = "ee42c883-93a2-4f10-872b-d7c130af78cd";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

