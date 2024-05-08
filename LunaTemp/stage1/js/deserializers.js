var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointSpring' )
  var i441 = data
  i440.spring = i441[0]
  i440.damper = i441[1]
  i440.targetPosition = i441[2]
  return i440
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointMotor' )
  var i443 = data
  i442.m_TargetVelocity = i443[0]
  i442.m_Force = i443[1]
  i442.m_FreeSpin = i443[2]
  return i442
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointLimits' )
  var i445 = data
  i444.m_Min = i445[0]
  i444.m_Max = i445[1]
  i444.m_Bounciness = i445[2]
  i444.m_BounceMinVelocity = i445[3]
  i444.m_ContactDistance = i445[4]
  i444.minBounce = i445[5]
  i444.maxBounce = i445[6]
  return i444
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointDrive' )
  var i447 = data
  i446.m_PositionSpring = i447[0]
  i446.m_PositionDamper = i447[1]
  i446.m_MaximumForce = i447[2]
  return i446
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i449 = data
  i448.m_Spring = i449[0]
  i448.m_Damper = i449[1]
  return i448
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i451 = data
  i450.m_Limit = i451[0]
  i450.m_Bounciness = i451[1]
  i450.m_ContactDistance = i451[2]
  return i450
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i453 = data
  i452.m_ExtremumSlip = i453[0]
  i452.m_ExtremumValue = i453[1]
  i452.m_AsymptoteSlip = i453[2]
  i452.m_AsymptoteValue = i453[3]
  i452.m_Stiffness = i453[4]
  return i452
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i455 = data
  i454.m_LowerAngle = i455[0]
  i454.m_UpperAngle = i455[1]
  return i454
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i457 = data
  i456.m_MotorSpeed = i457[0]
  i456.m_MaximumMotorTorque = i457[1]
  return i456
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i459 = data
  i458.m_DampingRatio = i459[0]
  i458.m_Frequency = i459[1]
  i458.m_Angle = i459[2]
  return i458
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i461 = data
  i460.m_LowerTranslation = i461[0]
  i460.m_UpperTranslation = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i462 = root || new pc.UnityMaterial()
  var i463 = data
  i462.name = i463[0]
  request.r(i463[1], i463[2], 0, i462, 'shader')
  i462.renderQueue = i463[3]
  i462.enableInstancing = !!i463[4]
  var i465 = i463[5]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i465[i + 0]) );
  }
  i462.floatParameters = i464
  var i467 = i463[6]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i467[i + 0]) );
  }
  i462.colorParameters = i466
  var i469 = i463[7]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i469[i + 0]) );
  }
  i462.vectorParameters = i468
  var i471 = i463[8]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i471[i + 0]) );
  }
  i462.textureParameters = i470
  var i473 = i463[9]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i473[i + 0]) );
  }
  i462.materialFlags = i472
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i477 = data
  i476.name = i477[0]
  i476.value = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i481 = data
  i480.name = i481[0]
  i480.value = new pc.Color(i481[1], i481[2], i481[3], i481[4])
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i485 = data
  i484.name = i485[0]
  i484.value = new pc.Vec4( i485[1], i485[2], i485[3], i485[4] )
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i489 = data
  i488.name = i489[0]
  request.r(i489[1], i489[2], 0, i488, 'value')
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i493 = data
  i492.name = i493[0]
  i492.enabled = !!i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i495 = data
  i494.name = i495[0]
  i494.width = i495[1]
  i494.height = i495[2]
  i494.mipmapCount = i495[3]
  i494.anisoLevel = i495[4]
  i494.filterMode = i495[5]
  i494.hdr = !!i495[6]
  i494.format = i495[7]
  i494.wrapMode = i495[8]
  i494.alphaIsTransparency = !!i495[9]
  i494.alphaSource = i495[10]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i497 = data
  i496.name = i497[0]
  i496.halfPrecision = !!i497[1]
  i496.vertexCount = i497[2]
  i496.aabb = i497[3]
  var i499 = i497[4]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( !!i499[i + 0] );
  }
  i496.streams = i498
  i496.vertices = i497[5]
  var i501 = i497[6]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i501[i + 0]) );
  }
  i496.subMeshes = i500
  var i503 = i497[7]
  var i502 = []
  for(var i = 0; i < i503.length; i += 16) {
    i502.push( new pc.Mat4().setData(i503[i + 0], i503[i + 1], i503[i + 2], i503[i + 3],  i503[i + 4], i503[i + 5], i503[i + 6], i503[i + 7],  i503[i + 8], i503[i + 9], i503[i + 10], i503[i + 11],  i503[i + 12], i503[i + 13], i503[i + 14], i503[i + 15]) );
  }
  i496.bindposes = i502
  var i505 = i497[8]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i505[i + 0]) );
  }
  i496.blendShapes = i504
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i511 = data
  i510.triangles = i511[0]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i517 = data
  i516.name = i517[0]
  var i519 = i517[1]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i519[i + 0]) );
  }
  i516.frames = i518
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i521 = data
  i520.name = i521[0]
  i520.atlasId = i521[1]
  i520.mipmapCount = i521[2]
  i520.hdr = !!i521[3]
  i520.size = i521[4]
  i520.anisoLevel = i521[5]
  i520.filterMode = i521[6]
  i520.wrapMode = i521[7]
  var i523 = i521[8]
  var i522 = []
  for(var i = 0; i < i523.length; i += 4) {
    i522.push( UnityEngine.Rect.MinMaxRect(i523[i + 0], i523[i + 1], i523[i + 2], i523[i + 3]) );
  }
  i520.rects = i522
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i527 = data
  i526.name = i527[0]
  i526.index = i527[1]
  i526.startup = !!i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i529 = data
  i528.position = new pc.Vec3( i529[0], i529[1], i529[2] )
  i528.scale = new pc.Vec3( i529[3], i529[4], i529[5] )
  i528.rotation = new pc.Quat(i529[6], i529[7], i529[8], i529[9])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i531 = data
  i530.enabled = !!i531[0]
  i530.aspect = i531[1]
  i530.orthographic = !!i531[2]
  i530.orthographicSize = i531[3]
  i530.backgroundColor = new pc.Color(i531[4], i531[5], i531[6], i531[7])
  i530.nearClipPlane = i531[8]
  i530.farClipPlane = i531[9]
  i530.fieldOfView = i531[10]
  i530.depth = i531[11]
  i530.clearFlags = i531[12]
  i530.cullingMask = i531[13]
  i530.rect = i531[14]
  request.r(i531[15], i531[16], 0, i530, 'targetTexture')
  i530.usePhysicalProperties = !!i531[17]
  i530.focalLength = i531[18]
  i530.sensorSize = new pc.Vec2( i531[19], i531[20] )
  i530.lensShift = new pc.Vec2( i531[21], i531[22] )
  i530.gateFit = i531[23]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i533 = data
  i532.name = i533[0]
  i532.tagId = i533[1]
  i532.enabled = !!i533[2]
  i532.isStatic = !!i533[3]
  i532.layer = i533[4]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'animatorController')
  request.r(i535[2], i535[3], 0, i534, 'avatar')
  i534.updateMode = i535[4]
  i534.hasTransformHierarchy = !!i535[5]
  i534.applyRootMotion = !!i535[6]
  var i537 = i535[7]
  var i536 = []
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 2, i536, '')
  }
  i534.humanBones = i536
  i534.enabled = !!i535[8]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'additionalVertexStreams')
  i540.enabled = !!i541[2]
  request.r(i541[3], i541[4], 0, i540, 'sharedMaterial')
  var i543 = i541[5]
  var i542 = []
  for(var i = 0; i < i543.length; i += 2) {
  request.r(i543[i + 0], i543[i + 1], 2, i542, '')
  }
  i540.sharedMaterials = i542
  i540.receiveShadows = !!i541[6]
  i540.shadowCastingMode = i541[7]
  i540.sortingLayerID = i541[8]
  i540.sortingOrder = i541[9]
  i540.lightmapIndex = i541[10]
  i540.lightmapSceneIndex = i541[11]
  i540.lightmapScaleOffset = new pc.Vec4( i541[12], i541[13], i541[14], i541[15] )
  i540.lightProbeUsage = i541[16]
  i540.reflectionProbeUsage = i541[17]
  return i540
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i546 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'skeletonDataAsset')
  i546.initialSkinName = i547[2]
  i546.fixPrefabOverrideViaMeshFilter = i547[3]
  i546.initialFlipX = !!i547[4]
  i546.initialFlipY = !!i547[5]
  i546.updateWhenInvisible = i547[6]
  i546.zSpacing = i547[7]
  i546.useClipping = !!i547[8]
  i546.immutableTriangles = !!i547[9]
  i546.pmaVertexColors = !!i547[10]
  i546.clearStateOnDisable = !!i547[11]
  i546.tintBlack = !!i547[12]
  i546.singleSubmesh = !!i547[13]
  i546.fixDrawOrder = !!i547[14]
  i546.addNormals = !!i547[15]
  i546.calculateTangents = !!i547[16]
  i546.maskInteraction = i547[17]
  i546.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i547[18], i546.maskMaterials)
  i546.disableRenderingOnOverride = !!i547[19]
  i546.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i547[20], i546.translator)
  i546.updateTiming = i547[21]
  var i549 = i547[22]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i546.separatorSlotNames = i548
  return i546
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i550 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i551 = data
  var i553 = i551[0]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i550.materialsMaskDisabled = i552
  var i555 = i551[1]
  var i554 = []
  for(var i = 0; i < i555.length; i += 2) {
  request.r(i555[i + 0], i555[i + 1], 2, i554, '')
  }
  i550.materialsInsideMask = i554
  var i557 = i551[2]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i550.materialsOutsideMask = i556
  return i550
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i558 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i559 = data
  i558.autoReset = !!i559[0]
  i558.useCustomMixMode = !!i559[1]
  var i561 = i559[2]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( i561[i + 0] );
  }
  i558.layerMixModes = i560
  var i563 = i559[3]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( i563[i + 0] );
  }
  i558.layerBlendModes = i562
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'sharedMesh')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i573 = data
  i572.enabled = !!i573[0]
  request.r(i573[1], i573[2], 0, i572, 'sharedMaterial')
  var i575 = i573[3]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.sharedMaterials = i574
  i572.receiveShadows = !!i573[4]
  i572.shadowCastingMode = i573[5]
  i572.sortingLayerID = i573[6]
  i572.sortingOrder = i573[7]
  i572.lightmapIndex = i573[8]
  i572.lightmapSceneIndex = i573[9]
  i572.lightmapScaleOffset = new pc.Vec4( i573[10], i573[11], i573[12], i573[13] )
  i572.lightProbeUsage = i573[14]
  i572.reflectionProbeUsage = i573[15]
  i572.color = new pc.Color(i573[16], i573[17], i573[18], i573[19])
  request.r(i573[20], i573[21], 0, i572, 'sprite')
  i572.flipX = !!i573[22]
  i572.flipY = !!i573[23]
  i572.drawMode = i573[24]
  i572.size = new pc.Vec2( i573[25], i573[26] )
  i572.tileMode = i573[27]
  i572.adaptiveModeThreshold = i573[28]
  i572.maskInteraction = i573[29]
  i572.spriteSortPoint = i573[30]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i577 = data
  i576.pivot = new pc.Vec2( i577[0], i577[1] )
  i576.anchorMin = new pc.Vec2( i577[2], i577[3] )
  i576.anchorMax = new pc.Vec2( i577[4], i577[5] )
  i576.sizeDelta = new pc.Vec2( i577[6], i577[7] )
  i576.anchoredPosition3D = new pc.Vec3( i577[8], i577[9], i577[10] )
  i576.rotation = new pc.Quat(i577[11], i577[12], i577[13], i577[14])
  i576.scale = new pc.Vec3( i577[15], i577[16], i577[17] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i579 = data
  i578.enabled = !!i579[0]
  i578.planeDistance = i579[1]
  i578.referencePixelsPerUnit = i579[2]
  i578.isFallbackOverlay = !!i579[3]
  i578.renderMode = i579[4]
  i578.renderOrder = i579[5]
  i578.sortingLayerName = i579[6]
  i578.sortingOrder = i579[7]
  i578.scaleFactor = i579[8]
  request.r(i579[9], i579[10], 0, i578, 'worldCamera')
  i578.overrideSorting = !!i579[11]
  i578.pixelPerfect = !!i579[12]
  i578.targetDisplay = i579[13]
  i578.overridePixelPerfect = !!i579[14]
  return i578
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i581 = data
  i580.m_UiScaleMode = i581[0]
  i580.m_ReferencePixelsPerUnit = i581[1]
  i580.m_ScaleFactor = i581[2]
  i580.m_ReferenceResolution = new pc.Vec2( i581[3], i581[4] )
  i580.m_ScreenMatchMode = i581[5]
  i580.m_MatchWidthOrHeight = i581[6]
  i580.m_PhysicalUnit = i581[7]
  i580.m_FallbackScreenDPI = i581[8]
  i580.m_DefaultSpriteDPI = i581[9]
  i580.m_DynamicPixelsPerUnit = i581[10]
  i580.m_PresetInfoIsWorld = !!i581[11]
  return i580
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i583 = data
  i582.m_IgnoreReversedGraphics = !!i583[0]
  i582.m_BlockingObjects = i583[1]
  i582.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i583[2] )
  return i582
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i585 = data
  i584.m_StartCorner = i585[0]
  i584.m_StartAxis = i585[1]
  i584.m_CellSize = new pc.Vec2( i585[2], i585[3] )
  i584.m_Spacing = new pc.Vec2( i585[4], i585[5] )
  i584.m_Constraint = i585[6]
  i584.m_ConstraintCount = i585[7]
  i584.m_Padding = UnityEngine.RectOffset.FromPaddings(i585[8], i585[9], i585[10], i585[11])
  i584.m_ChildAlignment = i585[12]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i587 = data
  i586.cullTransparentMesh = !!i587[0]
  return i586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.Image' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_Sprite')
  i588.m_Type = i589[2]
  i588.m_PreserveAspect = !!i589[3]
  i588.m_FillCenter = !!i589[4]
  i588.m_FillMethod = i589[5]
  i588.m_FillAmount = i589[6]
  i588.m_FillClockwise = !!i589[7]
  i588.m_FillOrigin = i589[8]
  i588.m_UseSpriteMesh = !!i589[9]
  i588.m_PixelsPerUnitMultiplier = i589[10]
  request.r(i589[11], i589[12], 0, i588, 'm_Material')
  i588.m_Maskable = !!i589[13]
  i588.m_Color = new pc.Color(i589[14], i589[15], i589[16], i589[17])
  i588.m_RaycastTarget = !!i589[18]
  i588.m_RaycastPadding = new pc.Vec4( i589[19], i589[20], i589[21], i589[22] )
  return i588
}

Deserializers["test"] = function (request, data, root) {
  var i590 = root || request.c( 'test' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'img')
  request.r(i591[2], i591[3], 0, i590, 'sprite')
  i590.x = i591[4]
  request.r(i591[5], i591[6], 0, i590, 'gm')
  return i590
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Button' )
  var i593 = data
  i592.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i593[0], i592.m_OnClick)
  i592.m_Navigation = request.d('UnityEngine.UI.Navigation', i593[1], i592.m_Navigation)
  i592.m_Transition = i593[2]
  i592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i593[3], i592.m_Colors)
  i592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i593[4], i592.m_SpriteState)
  i592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i593[5], i592.m_AnimationTriggers)
  i592.m_Interactable = !!i593[6]
  request.r(i593[7], i593[8], 0, i592, 'm_TargetGraphic')
  return i592
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i595 = data
  i594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i595[0], i594.m_PersistentCalls)
  return i594
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i597 = data
  var i599 = i597[0]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i599.length; i += 1) {
    i598.add(request.d('UnityEngine.Events.PersistentCall', i599[i + 0]));
  }
  i596.m_Calls = i598
  return i596
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_Target')
  i602.m_TargetAssemblyTypeName = i603[2]
  i602.m_MethodName = i603[3]
  i602.m_Mode = i603[4]
  i602.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i603[5], i602.m_Arguments)
  i602.m_CallState = i603[6]
  return i602
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_ObjectArgument')
  i604.m_ObjectArgumentAssemblyTypeName = i605[2]
  i604.m_IntArgument = i605[3]
  i604.m_FloatArgument = i605[4]
  i604.m_StringArgument = i605[5]
  i604.m_BoolArgument = !!i605[6]
  return i604
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i607 = data
  i606.m_Mode = i607[0]
  i606.m_WrapAround = !!i607[1]
  request.r(i607[2], i607[3], 0, i606, 'm_SelectOnUp')
  request.r(i607[4], i607[5], 0, i606, 'm_SelectOnDown')
  request.r(i607[6], i607[7], 0, i606, 'm_SelectOnLeft')
  request.r(i607[8], i607[9], 0, i606, 'm_SelectOnRight')
  return i606
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i609 = data
  i608.m_NormalColor = new pc.Color(i609[0], i609[1], i609[2], i609[3])
  i608.m_HighlightedColor = new pc.Color(i609[4], i609[5], i609[6], i609[7])
  i608.m_PressedColor = new pc.Color(i609[8], i609[9], i609[10], i609[11])
  i608.m_SelectedColor = new pc.Color(i609[12], i609[13], i609[14], i609[15])
  i608.m_DisabledColor = new pc.Color(i609[16], i609[17], i609[18], i609[19])
  i608.m_ColorMultiplier = i609[20]
  i608.m_FadeDuration = i609[21]
  return i608
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_HighlightedSprite')
  request.r(i611[2], i611[3], 0, i610, 'm_PressedSprite')
  request.r(i611[4], i611[5], 0, i610, 'm_SelectedSprite')
  request.r(i611[6], i611[7], 0, i610, 'm_DisabledSprite')
  return i610
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i613 = data
  i612.m_NormalTrigger = i613[0]
  i612.m_HighlightedTrigger = i613[1]
  i612.m_PressedTrigger = i613[2]
  i612.m_SelectedTrigger = i613[3]
  i612.m_DisabledTrigger = i613[4]
  return i612
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_FirstSelected')
  i614.m_sendNavigationEvents = !!i615[2]
  i614.m_DragThreshold = i615[3]
  return i614
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i617 = data
  i616.m_HorizontalAxis = i617[0]
  i616.m_VerticalAxis = i617[1]
  i616.m_SubmitButton = i617[2]
  i616.m_CancelButton = i617[3]
  i616.m_InputActionsPerSecond = i617[4]
  i616.m_RepeatDelay = i617[5]
  i616.m_ForceModuleActive = !!i617[6]
  i616.m_SendPointerHoverToParent = !!i617[7]
  return i616
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i618 = root || request.c( 'gamemanager' )
  var i619 = data
  var i621 = i619[0]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i618.sprites = i620
  var i623 = i619[1]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i618.t = i622
  var i625 = i619[2]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i618.tests = i624
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i631 = data
  i630.ambientIntensity = i631[0]
  i630.reflectionIntensity = i631[1]
  i630.ambientMode = i631[2]
  i630.ambientLight = new pc.Color(i631[3], i631[4], i631[5], i631[6])
  i630.ambientSkyColor = new pc.Color(i631[7], i631[8], i631[9], i631[10])
  i630.ambientGroundColor = new pc.Color(i631[11], i631[12], i631[13], i631[14])
  i630.ambientEquatorColor = new pc.Color(i631[15], i631[16], i631[17], i631[18])
  i630.fogColor = new pc.Color(i631[19], i631[20], i631[21], i631[22])
  i630.fogEndDistance = i631[23]
  i630.fogStartDistance = i631[24]
  i630.fogDensity = i631[25]
  i630.fog = !!i631[26]
  request.r(i631[27], i631[28], 0, i630, 'skybox')
  i630.fogMode = i631[29]
  var i633 = i631[30]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i633[i + 0]) );
  }
  i630.lightmaps = i632
  i630.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i631[31], i630.lightProbes)
  i630.lightmapsMode = i631[32]
  i630.mixedBakeMode = i631[33]
  i630.environmentLightingMode = i631[34]
  i630.ambientProbe = new pc.SphericalHarmonicsL2(i631[35])
  i630.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i631[36])
  i630.useReferenceAmbientProbe = !!i631[37]
  request.r(i631[38], i631[39], 0, i630, 'customReflection')
  request.r(i631[40], i631[41], 0, i630, 'defaultReflection')
  i630.defaultReflectionMode = i631[42]
  i630.defaultReflectionResolution = i631[43]
  i630.sunLightObjectId = i631[44]
  i630.pixelLightCount = i631[45]
  i630.defaultReflectionHDR = !!i631[46]
  i630.hasLightDataAsset = !!i631[47]
  i630.hasManualGenerate = !!i631[48]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'lightmapColor')
  request.r(i637[2], i637[3], 0, i636, 'lightmapDirection')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i638 = root || new UnityEngine.LightProbes()
  var i639 = data
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i649[i + 0]));
  }
  i646.ShaderCompilationErrors = i648
  i646.name = i647[1]
  i646.guid = i647[2]
  var i651 = i647[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.shaderDefinedKeywords = i650
  var i653 = i647[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i653[i + 0]) );
  }
  i646.passes = i652
  var i655 = i647[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i655[i + 0]) );
  }
  i646.usePasses = i654
  var i657 = i647[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i657[i + 0]) );
  }
  i646.defaultParameterValues = i656
  request.r(i647[7], i647[8], 0, i646, 'unityFallbackShader')
  i646.readDepth = !!i647[9]
  i646.isCreatedByShaderGraph = !!i647[10]
  i646.usedBatchUniforms = i647[11]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i661 = data
  i660.shaderName = i661[0]
  i660.errorMessage = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i664 = root || new pc.UnityShaderPass()
  var i665 = data
  i664.id = i665[0]
  i664.subShaderIndex = i665[1]
  i664.name = i665[2]
  i664.passType = i665[3]
  i664.grabPassTextureName = i665[4]
  i664.usePass = !!i665[5]
  i664.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[6], i664.zTest)
  i664.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[7], i664.zWrite)
  i664.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[8], i664.culling)
  i664.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i665[9], i664.blending)
  i664.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i665[10], i664.alphaBlending)
  i664.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[11], i664.colorWriteMask)
  i664.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[12], i664.offsetUnits)
  i664.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[13], i664.offsetFactor)
  i664.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[14], i664.stencilRef)
  i664.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[15], i664.stencilReadMask)
  i664.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[16], i664.stencilWriteMask)
  i664.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i665[17], i664.stencilOp)
  i664.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i665[18], i664.stencilOpFront)
  i664.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i665[19], i664.stencilOpBack)
  var i667 = i665[20]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i667[i + 0]) );
  }
  i664.tags = i666
  var i669 = i665[21]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i664.passDefinedKeywords = i668
  var i671 = i665[22]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i671[i + 0]) );
  }
  i664.passDefinedKeywordGroups = i670
  var i673 = i665[23]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i673[i + 0]) );
  }
  i664.variants = i672
  var i675 = i665[24]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i675[i + 0]) );
  }
  i664.excludedVariants = i674
  i664.hasDepthReader = !!i665[25]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i677 = data
  i676.val = i677[0]
  i676.name = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i679 = data
  i678.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[0], i678.src)
  i678.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[1], i678.dst)
  i678.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[2], i678.op)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i681 = data
  i680.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[0], i680.pass)
  i680.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[1], i680.fail)
  i680.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[2], i680.zFail)
  i680.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[3], i680.comp)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i685 = data
  i684.name = i685[0]
  i684.value = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i689 = data
  var i691 = i689[0]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i688.keywords = i690
  i688.hasDiscard = !!i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i695 = data
  i694.passId = i695[0]
  i694.subShaderIndex = i695[1]
  var i697 = i695[2]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i694.keywords = i696
  i694.vertexProgram = i695[3]
  i694.fragmentProgram = i695[4]
  i694.readDepth = !!i695[5]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'shader')
  i700.pass = i701[2]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i705 = data
  i704.name = i705[0]
  i704.type = i705[1]
  i704.value = new pc.Vec4( i705[2], i705[3], i705[4], i705[5] )
  i704.textureValue = i705[6]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i707 = data
  i706.name = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'texture')
  i706.aabb = i707[3]
  i706.vertices = i707[4]
  i706.triangles = i707[5]
  i706.textureRect = UnityEngine.Rect.MinMaxRect(i707[6], i707[7], i707[8], i707[9])
  i706.packedRect = UnityEngine.Rect.MinMaxRect(i707[10], i707[11], i707[12], i707[13])
  i706.border = new pc.Vec4( i707[14], i707[15], i707[16], i707[17] )
  i706.transparency = i707[18]
  i706.bounds = i707[19]
  i706.pixelsPerUnit = i707[20]
  i706.textureWidth = i707[21]
  i706.textureHeight = i707[22]
  i706.nativeSize = new pc.Vec2( i707[23], i707[24] )
  i706.pivot = new pc.Vec2( i707[25], i707[26] )
  i706.textureRectOffset = new pc.Vec2( i707[27], i707[28] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i709 = data
  i708.name = i709[0]
  i708.wrapMode = i709[1]
  i708.isLooping = !!i709[2]
  i708.length = i709[3]
  var i711 = i709[4]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i711[i + 0]) );
  }
  i708.curves = i710
  var i713 = i709[5]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i713[i + 0]) );
  }
  i708.events = i712
  i708.halfPrecision = !!i709[6]
  i708.frameRate = i709[7]
  i708.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i709[8], i708.localBounds)
  i708.hasMuscleCurves = !!i709[9]
  var i715 = i709[10]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( i715[i + 0] );
  }
  i708.clipMuscleConstant = i714
  i708.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i709[11], i708.clipBindingConstant)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i719 = data
  i718.path = i719[0]
  i718.componentType = i719[1]
  i718.property = i719[2]
  i718.keys = i719[3]
  var i721 = i719[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i721[i + 0]) );
  }
  i718.objectReferenceKeys = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i725 = data
  i724.time = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'value')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i729 = data
  i728.functionName = i729[0]
  i728.floatParameter = i729[1]
  i728.intParameter = i729[2]
  i728.stringParameter = i729[3]
  request.r(i729[4], i729[5], 0, i728, 'objectReferenceParameter')
  i728.time = i729[6]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i731 = data
  i730.center = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.extends = new pc.Vec3( i731[3], i731[4], i731[5] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i735 = data
  var i737 = i735[0]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i734.genericBindings = i736
  var i739 = i735[1]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i734.pptrCurveMapping = i738
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i741 = data
  i740.name = i741[0]
  var i743 = i741[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i743[i + 0]) );
  }
  i740.states = i742
  var i745 = i741[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i745[i + 0]) );
  }
  i740.layers = i744
  var i747 = i741[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i747[i + 0]) );
  }
  i740.parameters = i746
  i740.animationClips = i741[4]
  i740.HasSubStateMachines = !!i741[5]
  i740.avatarUnsupported = i741[6]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i751 = data
  i750.cycleOffset = i751[0]
  i750.cycleOffsetParameter = i751[1]
  i750.cycleOffsetParameterActive = !!i751[2]
  i750.mirror = !!i751[3]
  i750.mirrorParameter = i751[4]
  i750.mirrorParameterActive = !!i751[5]
  i750.motionId = i751[6]
  i750.nameHash = i751[7]
  i750.fullPathHash = i751[8]
  i750.speed = i751[9]
  i750.speedParameter = i751[10]
  i750.speedParameterActive = !!i751[11]
  i750.tag = i751[12]
  i750.name = i751[13]
  i750.layer = i751[14]
  i750.writeDefaultValues = !!i751[15]
  var i753 = i751[16]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i753[i + 0]) );
  }
  i750.transitions = i752
  var i755 = i751[17]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i750.behaviours = i754
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i759 = data
  i758.fullPath = i759[0]
  i758.canTransitionToSelf = !!i759[1]
  i758.duration = i759[2]
  i758.exitTime = i759[3]
  i758.hasExitTime = !!i759[4]
  i758.hasFixedDuration = !!i759[5]
  i758.interruptionSource = i759[6]
  i758.offset = i759[7]
  i758.orderedInterruption = !!i759[8]
  i758.destinationStateNameHash = i759[9]
  i758.destinationStateMachineId = i759[10]
  i758.isExit = !!i759[11]
  i758.mute = !!i759[12]
  i758.solo = !!i759[13]
  var i761 = i759[14]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i761[i + 0]) );
  }
  i758.conditions = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i767 = data
  i766.mode = i767[0]
  i766.parameter = i767[1]
  i766.threshold = i767[2]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i771 = data
  i770.blendingMode = i771[0]
  i770.defaultWeight = i771[1]
  i770.name = i771[2]
  i770.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i771[3], i770.stateMachine)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i773 = data
  i772.id = i773[0]
  i772.defaultStateNameHash = i773[1]
  var i775 = i773[2]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i775[i + 0]) );
  }
  i772.entryTransitions = i774
  var i777 = i773[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i777[i + 0]) );
  }
  i772.anyStateTransitions = i776
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i781 = data
  i780.destinationStateNameHash = i781[0]
  i780.destinationStateMachineId = i781[1]
  i780.isExit = !!i781[2]
  i780.mute = !!i781[3]
  i780.solo = !!i781[4]
  var i783 = i781[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i783[i + 0]) );
  }
  i780.conditions = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i787 = data
  i786.defaultBool = !!i787[0]
  i786.defaultFloat = i787[1]
  i786.defaultInt = i787[2]
  i786.name = i787[3]
  i786.nameHash = i787[4]
  i786.type = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i789 = data
  i788.name = i789[0]
  i788.bytes64 = i789[1]
  i788.data = i789[2]
  return i788
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i790 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i791 = data
  var i793 = i791[0]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.atlasAssets = i792
  i790.scale = i791[1]
  request.r(i791[2], i791[3], 0, i790, 'skeletonJSON')
  i790.isUpgradingBlendModeMaterials = !!i791[4]
  i790.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i791[5], i790.blendModeMaterials)
  var i795 = i791[6]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i790.skeletonDataModifiers = i794
  var i797 = i791[7]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i790.fromAnimation = i796
  var i799 = i791[8]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i790.toAnimation = i798
  i790.duration = i791[9]
  i790.defaultMix = i791[10]
  request.r(i791[11], i791[12], 0, i790, 'controller')
  return i790
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i802 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i803 = data
  i802.applyAdditiveMaterial = !!i803[0]
  var i805 = i803[1]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i805[i + 0]));
  }
  i802.additiveMaterials = i804
  var i807 = i803[2]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i807[i + 0]));
  }
  i802.multiplyMaterials = i806
  var i809 = i803[3]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i809[i + 0]));
  }
  i802.screenMaterials = i808
  i802.requiresBlendModeMaterials = !!i803[4]
  return i802
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i812 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i813 = data
  i812.pageName = i813[0]
  request.r(i813[1], i813[2], 0, i812, 'material')
  return i812
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i816 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'atlasFile')
  var i819 = i817[2]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.materials = i818
  i816.textureLoadingMode = i817[3]
  request.r(i817[4], i817[5], 0, i816, 'onDemandTextureLoader')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i823[i + 0]) );
  }
  i820.files = i822
  i820.componentToPrefabIds = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i827 = data
  i826.path = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'unityObject')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i829 = data
  var i831 = i829[0]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i831[i + 0]) );
  }
  i828.scriptsExecutionOrder = i830
  var i833 = i829[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i833[i + 0]) );
  }
  i828.sortingLayers = i832
  var i835 = i829[2]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i835[i + 0]) );
  }
  i828.cullingLayers = i834
  i828.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i829[3], i828.timeSettings)
  i828.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i829[4], i828.physicsSettings)
  i828.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i829[5], i828.physics2DSettings)
  i828.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i829[6], i828.qualitySettings)
  i828.enableRealtimeShadows = !!i829[7]
  i828.enableAutoInstancing = !!i829[8]
  i828.enableDynamicBatching = !!i829[9]
  i828.lightmapEncodingQuality = i829[10]
  i828.desiredColorSpace = i829[11]
  var i837 = i829[12]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i828.allTags = i836
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i841 = data
  i840.name = i841[0]
  i840.value = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i845 = data
  i844.id = i845[0]
  i844.name = i845[1]
  i844.value = i845[2]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i849 = data
  i848.id = i849[0]
  i848.name = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i851 = data
  i850.fixedDeltaTime = i851[0]
  i850.maximumDeltaTime = i851[1]
  i850.timeScale = i851[2]
  i850.maximumParticleTimestep = i851[3]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i853 = data
  i852.gravity = new pc.Vec3( i853[0], i853[1], i853[2] )
  i852.defaultSolverIterations = i853[3]
  i852.bounceThreshold = i853[4]
  i852.autoSyncTransforms = !!i853[5]
  i852.autoSimulation = !!i853[6]
  var i855 = i853[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i855[i + 0]) );
  }
  i852.collisionMatrix = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i859 = data
  i858.enabled = !!i859[0]
  i858.layerId = i859[1]
  i858.otherLayerId = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'material')
  i860.gravity = new pc.Vec2( i861[2], i861[3] )
  i860.positionIterations = i861[4]
  i860.velocityIterations = i861[5]
  i860.velocityThreshold = i861[6]
  i860.maxLinearCorrection = i861[7]
  i860.maxAngularCorrection = i861[8]
  i860.maxTranslationSpeed = i861[9]
  i860.maxRotationSpeed = i861[10]
  i860.baumgarteScale = i861[11]
  i860.baumgarteTOIScale = i861[12]
  i860.timeToSleep = i861[13]
  i860.linearSleepTolerance = i861[14]
  i860.angularSleepTolerance = i861[15]
  i860.defaultContactOffset = i861[16]
  i860.autoSimulation = !!i861[17]
  i860.queriesHitTriggers = !!i861[18]
  i860.queriesStartInColliders = !!i861[19]
  i860.callbacksOnDisable = !!i861[20]
  i860.reuseCollisionCallbacks = !!i861[21]
  i860.autoSyncTransforms = !!i861[22]
  var i863 = i861[23]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i863[i + 0]) );
  }
  i860.collisionMatrix = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i867 = data
  i866.enabled = !!i867[0]
  i866.layerId = i867[1]
  i866.otherLayerId = i867[2]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i871[i + 0]) );
  }
  i868.qualityLevels = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.names = i872
  i868.shadows = i869[2]
  i868.anisotropicFiltering = i869[3]
  i868.antiAliasing = i869[4]
  i868.lodBias = i869[5]
  i868.shadowCascades = i869[6]
  i868.shadowDistance = i869[7]
  i868.shadowmaskMode = i869[8]
  i868.shadowProjection = i869[9]
  i868.shadowResolution = i869[10]
  i868.softParticles = !!i869[11]
  i868.softVegetation = !!i869[12]
  i868.activeColorSpace = i869[13]
  i868.desiredColorSpace = i869[14]
  i868.masterTextureLimit = i869[15]
  i868.maxQueuedFrames = i869[16]
  i868.particleRaycastBudget = i869[17]
  i868.pixelLightCount = i869[18]
  i868.realtimeReflectionProbes = !!i869[19]
  i868.shadowCascade2Split = i869[20]
  i868.shadowCascade4Split = new pc.Vec3( i869[21], i869[22], i869[23] )
  i868.streamingMipmapsActive = !!i869[24]
  i868.vSyncCount = i869[25]
  i868.asyncUploadBufferSize = i869[26]
  i868.asyncUploadTimeSlice = i869[27]
  i868.billboardsFaceCameraPosition = !!i869[28]
  i868.shadowNearPlaneOffset = i869[29]
  i868.streamingMipmapsMemoryBudget = i869[30]
  i868.maximumLODLevel = i869[31]
  i868.streamingMipmapsAddAllCameras = !!i869[32]
  i868.streamingMipmapsMaxLevelReduction = i869[33]
  i868.streamingMipmapsRenderersPerFrame = i869[34]
  i868.resolutionScalingFixedDPIFactor = i869[35]
  i868.streamingMipmapsMaxFileIORequests = i869[36]
  i868.currentQualityLevel = i869[37]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i879 = data
  i878.weight = i879[0]
  i878.vertices = i879[1]
  i878.normals = i879[2]
  i878.tangents = i879[3]
  return i878
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[3],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[43],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[51],"59":[51],"60":[51],"61":[51],"62":[51],"63":[51],"64":[3],"65":[7],"66":[67],"68":[67],"17":[16],"69":[70],"71":[16],"72":[22,16],"73":[7],"74":[22,16],"10":[5,7],"75":[7],"76":[7,12],"77":[43],"78":[51],"79":[70],"80":[81],"82":[16],"83":[7,16],"84":[16,22],"85":[16],"86":[22,16],"87":[7],"88":[22,16],"89":[16],"90":[91],"92":[16],"93":[16],"20":[17],"23":[22,16],"94":[16],"19":[17],"95":[16],"21":[16],"96":[16],"97":[16],"98":[16],"99":[16],"100":[16],"101":[16],"102":[16],"103":[22,16],"104":[16],"105":[16],"106":[16],"107":[16],"108":[22,16],"109":[16],"110":[27],"111":[27],"28":[27],"112":[27],"113":[3],"114":[3],"115":[91],"116":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.GridLayoutGroup","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","test","gamemanager","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

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

Deserializers.buildID = "e165c4a6-8734-4129-b54c-fc3274136b92";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

