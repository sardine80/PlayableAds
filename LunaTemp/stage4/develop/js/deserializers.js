var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7440 = root || request.c( 'UnityEngine.JointSpring' )
  var i7441 = data
  i7440.spring = i7441[0]
  i7440.damper = i7441[1]
  i7440.targetPosition = i7441[2]
  return i7440
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7442 = root || request.c( 'UnityEngine.JointMotor' )
  var i7443 = data
  i7442.m_TargetVelocity = i7443[0]
  i7442.m_Force = i7443[1]
  i7442.m_FreeSpin = i7443[2]
  return i7442
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7444 = root || request.c( 'UnityEngine.JointLimits' )
  var i7445 = data
  i7444.m_Min = i7445[0]
  i7444.m_Max = i7445[1]
  i7444.m_Bounciness = i7445[2]
  i7444.m_BounceMinVelocity = i7445[3]
  i7444.m_ContactDistance = i7445[4]
  i7444.minBounce = i7445[5]
  i7444.maxBounce = i7445[6]
  return i7444
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7446 = root || request.c( 'UnityEngine.JointDrive' )
  var i7447 = data
  i7446.m_PositionSpring = i7447[0]
  i7446.m_PositionDamper = i7447[1]
  i7446.m_MaximumForce = i7447[2]
  return i7446
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7448 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7449 = data
  i7448.m_Spring = i7449[0]
  i7448.m_Damper = i7449[1]
  return i7448
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7450 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7451 = data
  i7450.m_Limit = i7451[0]
  i7450.m_Bounciness = i7451[1]
  i7450.m_ContactDistance = i7451[2]
  return i7450
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7452 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7453 = data
  i7452.m_ExtremumSlip = i7453[0]
  i7452.m_ExtremumValue = i7453[1]
  i7452.m_AsymptoteSlip = i7453[2]
  i7452.m_AsymptoteValue = i7453[3]
  i7452.m_Stiffness = i7453[4]
  return i7452
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7454 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7455 = data
  i7454.m_LowerAngle = i7455[0]
  i7454.m_UpperAngle = i7455[1]
  return i7454
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7456 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7457 = data
  i7456.m_MotorSpeed = i7457[0]
  i7456.m_MaximumMotorTorque = i7457[1]
  return i7456
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7458 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7459 = data
  i7458.m_DampingRatio = i7459[0]
  i7458.m_Frequency = i7459[1]
  i7458.m_Angle = i7459[2]
  return i7458
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7460 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7461 = data
  i7460.m_LowerTranslation = i7461[0]
  i7460.m_UpperTranslation = i7461[1]
  return i7460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7462 = root || new pc.UnityMaterial()
  var i7463 = data
  i7462.name = i7463[0]
  request.r(i7463[1], i7463[2], 0, i7462, 'shader')
  i7462.renderQueue = i7463[3]
  i7462.enableInstancing = !!i7463[4]
  var i7465 = i7463[5]
  var i7464 = []
  for(var i = 0; i < i7465.length; i += 1) {
    i7464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7465[i + 0]) );
  }
  i7462.floatParameters = i7464
  var i7467 = i7463[6]
  var i7466 = []
  for(var i = 0; i < i7467.length; i += 1) {
    i7466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7467[i + 0]) );
  }
  i7462.colorParameters = i7466
  var i7469 = i7463[7]
  var i7468 = []
  for(var i = 0; i < i7469.length; i += 1) {
    i7468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7469[i + 0]) );
  }
  i7462.vectorParameters = i7468
  var i7471 = i7463[8]
  var i7470 = []
  for(var i = 0; i < i7471.length; i += 1) {
    i7470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7471[i + 0]) );
  }
  i7462.textureParameters = i7470
  var i7473 = i7463[9]
  var i7472 = []
  for(var i = 0; i < i7473.length; i += 1) {
    i7472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7473[i + 0]) );
  }
  i7462.materialFlags = i7472
  return i7462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7477 = data
  i7476.name = i7477[0]
  i7476.value = i7477[1]
  return i7476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7481 = data
  i7480.name = i7481[0]
  i7480.value = new pc.Color(i7481[1], i7481[2], i7481[3], i7481[4])
  return i7480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7485 = data
  i7484.name = i7485[0]
  i7484.value = new pc.Vec4( i7485[1], i7485[2], i7485[3], i7485[4] )
  return i7484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7489 = data
  i7488.name = i7489[0]
  request.r(i7489[1], i7489[2], 0, i7488, 'value')
  return i7488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7493 = data
  i7492.name = i7493[0]
  i7492.enabled = !!i7493[1]
  return i7492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7495 = data
  i7494.name = i7495[0]
  i7494.width = i7495[1]
  i7494.height = i7495[2]
  i7494.mipmapCount = i7495[3]
  i7494.anisoLevel = i7495[4]
  i7494.filterMode = i7495[5]
  i7494.hdr = !!i7495[6]
  i7494.format = i7495[7]
  i7494.wrapMode = i7495[8]
  i7494.alphaIsTransparency = !!i7495[9]
  i7494.alphaSource = i7495[10]
  return i7494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7497 = data
  i7496.position = new pc.Vec3( i7497[0], i7497[1], i7497[2] )
  i7496.scale = new pc.Vec3( i7497[3], i7497[4], i7497[5] )
  i7496.rotation = new pc.Quat(i7497[6], i7497[7], i7497[8], i7497[9])
  return i7496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7499 = data
  request.r(i7499[0], i7499[1], 0, i7498, 'sharedMesh')
  return i7498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7501 = data
  request.r(i7501[0], i7501[1], 0, i7500, 'additionalVertexStreams')
  i7500.enabled = !!i7501[2]
  request.r(i7501[3], i7501[4], 0, i7500, 'sharedMaterial')
  var i7503 = i7501[5]
  var i7502 = []
  for(var i = 0; i < i7503.length; i += 2) {
  request.r(i7503[i + 0], i7503[i + 1], 2, i7502, '')
  }
  i7500.sharedMaterials = i7502
  i7500.receiveShadows = !!i7501[6]
  i7500.shadowCastingMode = i7501[7]
  i7500.sortingLayerID = i7501[8]
  i7500.sortingOrder = i7501[9]
  i7500.lightmapIndex = i7501[10]
  i7500.lightmapSceneIndex = i7501[11]
  i7500.lightmapScaleOffset = new pc.Vec4( i7501[12], i7501[13], i7501[14], i7501[15] )
  i7500.lightProbeUsage = i7501[16]
  i7500.reflectionProbeUsage = i7501[17]
  return i7500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7507 = data
  request.r(i7507[0], i7507[1], 0, i7506, 'animatorController')
  request.r(i7507[2], i7507[3], 0, i7506, 'avatar')
  i7506.updateMode = i7507[4]
  i7506.hasTransformHierarchy = !!i7507[5]
  i7506.applyRootMotion = !!i7507[6]
  var i7509 = i7507[7]
  var i7508 = []
  for(var i = 0; i < i7509.length; i += 2) {
  request.r(i7509[i + 0], i7509[i + 1], 2, i7508, '')
  }
  i7506.humanBones = i7508
  i7506.enabled = !!i7507[8]
  return i7506
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i7512 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i7513 = data
  request.r(i7513[0], i7513[1], 0, i7512, 'skeletonDataAsset')
  i7512.initialSkinName = i7513[2]
  i7512.fixPrefabOverrideViaMeshFilter = i7513[3]
  i7512.initialFlipX = !!i7513[4]
  i7512.initialFlipY = !!i7513[5]
  i7512.updateWhenInvisible = i7513[6]
  i7512.zSpacing = i7513[7]
  i7512.useClipping = !!i7513[8]
  i7512.immutableTriangles = !!i7513[9]
  i7512.pmaVertexColors = !!i7513[10]
  i7512.clearStateOnDisable = !!i7513[11]
  i7512.tintBlack = !!i7513[12]
  i7512.singleSubmesh = !!i7513[13]
  i7512.fixDrawOrder = !!i7513[14]
  i7512.addNormals = !!i7513[15]
  i7512.calculateTangents = !!i7513[16]
  i7512.maskInteraction = i7513[17]
  i7512.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i7513[18], i7512.maskMaterials)
  i7512.disableRenderingOnOverride = !!i7513[19]
  i7512.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i7513[20], i7512.translator)
  i7512.updateTiming = i7513[21]
  var i7515 = i7513[22]
  var i7514 = []
  for(var i = 0; i < i7515.length; i += 1) {
    i7514.push( i7515[i + 0] );
  }
  i7512.separatorSlotNames = i7514
  return i7512
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i7516 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i7517 = data
  var i7519 = i7517[0]
  var i7518 = []
  for(var i = 0; i < i7519.length; i += 2) {
  request.r(i7519[i + 0], i7519[i + 1], 2, i7518, '')
  }
  i7516.materialsMaskDisabled = i7518
  var i7521 = i7517[1]
  var i7520 = []
  for(var i = 0; i < i7521.length; i += 2) {
  request.r(i7521[i + 0], i7521[i + 1], 2, i7520, '')
  }
  i7516.materialsInsideMask = i7520
  var i7523 = i7517[2]
  var i7522 = []
  for(var i = 0; i < i7523.length; i += 2) {
  request.r(i7523[i + 0], i7523[i + 1], 2, i7522, '')
  }
  i7516.materialsOutsideMask = i7522
  return i7516
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i7524 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i7525 = data
  i7524.autoReset = !!i7525[0]
  i7524.useCustomMixMode = !!i7525[1]
  var i7527 = i7525[2]
  var i7526 = []
  for(var i = 0; i < i7527.length; i += 1) {
    i7526.push( i7527[i + 0] );
  }
  i7524.layerMixModes = i7526
  var i7529 = i7525[3]
  var i7528 = []
  for(var i = 0; i < i7529.length; i += 1) {
    i7528.push( i7529[i + 0] );
  }
  i7524.layerBlendModes = i7528
  return i7524
}

Deserializers["enemy"] = function (request, data, root) {
  var i7536 = root || request.c( 'enemy' )
  var i7537 = data
  request.r(i7537[0], i7537[1], 0, i7536, 'gm')
  return i7536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7539 = data
  i7538.name = i7539[0]
  i7538.tagId = i7539[1]
  i7538.enabled = !!i7539[2]
  i7538.isStatic = !!i7539[3]
  i7538.layer = i7539[4]
  return i7538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7541 = data
  i7540.name = i7541[0]
  i7540.halfPrecision = !!i7541[1]
  i7540.vertexCount = i7541[2]
  i7540.aabb = i7541[3]
  var i7543 = i7541[4]
  var i7542 = []
  for(var i = 0; i < i7543.length; i += 1) {
    i7542.push( !!i7543[i + 0] );
  }
  i7540.streams = i7542
  i7540.vertices = i7541[5]
  var i7545 = i7541[6]
  var i7544 = []
  for(var i = 0; i < i7545.length; i += 1) {
    i7544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7545[i + 0]) );
  }
  i7540.subMeshes = i7544
  var i7547 = i7541[7]
  var i7546 = []
  for(var i = 0; i < i7547.length; i += 16) {
    i7546.push( new pc.Mat4().setData(i7547[i + 0], i7547[i + 1], i7547[i + 2], i7547[i + 3],  i7547[i + 4], i7547[i + 5], i7547[i + 6], i7547[i + 7],  i7547[i + 8], i7547[i + 9], i7547[i + 10], i7547[i + 11],  i7547[i + 12], i7547[i + 13], i7547[i + 14], i7547[i + 15]) );
  }
  i7540.bindposes = i7546
  var i7549 = i7541[8]
  var i7548 = []
  for(var i = 0; i < i7549.length; i += 1) {
    i7548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7549[i + 0]) );
  }
  i7540.blendShapes = i7548
  return i7540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7555 = data
  i7554.triangles = i7555[0]
  return i7554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7561 = data
  i7560.name = i7561[0]
  var i7563 = i7561[1]
  var i7562 = []
  for(var i = 0; i < i7563.length; i += 1) {
    i7562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7563[i + 0]) );
  }
  i7560.frames = i7562
  return i7560
}

Deserializers["player"] = function (request, data, root) {
  var i7564 = root || request.c( 'player' )
  var i7565 = data
  request.r(i7565[0], i7565[1], 0, i7564, 'gm')
  return i7564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7567 = data
  i7566.name = i7567[0]
  i7566.atlasId = i7567[1]
  i7566.mipmapCount = i7567[2]
  i7566.hdr = !!i7567[3]
  i7566.size = i7567[4]
  i7566.anisoLevel = i7567[5]
  i7566.filterMode = i7567[6]
  i7566.wrapMode = i7567[7]
  var i7569 = i7567[8]
  var i7568 = []
  for(var i = 0; i < i7569.length; i += 4) {
    i7568.push( UnityEngine.Rect.MinMaxRect(i7569[i + 0], i7569[i + 1], i7569[i + 2], i7569[i + 3]) );
  }
  i7566.rects = i7568
  return i7566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7573 = data
  i7572.name = i7573[0]
  i7572.index = i7573[1]
  i7572.startup = !!i7573[2]
  return i7572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7575 = data
  i7574.pivot = new pc.Vec2( i7575[0], i7575[1] )
  i7574.anchorMin = new pc.Vec2( i7575[2], i7575[3] )
  i7574.anchorMax = new pc.Vec2( i7575[4], i7575[5] )
  i7574.sizeDelta = new pc.Vec2( i7575[6], i7575[7] )
  i7574.anchoredPosition3D = new pc.Vec3( i7575[8], i7575[9], i7575[10] )
  i7574.rotation = new pc.Quat(i7575[11], i7575[12], i7575[13], i7575[14])
  i7574.scale = new pc.Vec3( i7575[15], i7575[16], i7575[17] )
  return i7574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7577 = data
  i7576.enabled = !!i7577[0]
  i7576.aspect = i7577[1]
  i7576.orthographic = !!i7577[2]
  i7576.orthographicSize = i7577[3]
  i7576.backgroundColor = new pc.Color(i7577[4], i7577[5], i7577[6], i7577[7])
  i7576.nearClipPlane = i7577[8]
  i7576.farClipPlane = i7577[9]
  i7576.fieldOfView = i7577[10]
  i7576.depth = i7577[11]
  i7576.clearFlags = i7577[12]
  i7576.cullingMask = i7577[13]
  i7576.rect = i7577[14]
  request.r(i7577[15], i7577[16], 0, i7576, 'targetTexture')
  i7576.usePhysicalProperties = !!i7577[17]
  i7576.focalLength = i7577[18]
  i7576.sensorSize = new pc.Vec2( i7577[19], i7577[20] )
  i7576.lensShift = new pc.Vec2( i7577[21], i7577[22] )
  i7576.gateFit = i7577[23]
  return i7576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7579 = data
  i7578.enabled = !!i7579[0]
  i7578.planeDistance = i7579[1]
  i7578.referencePixelsPerUnit = i7579[2]
  i7578.isFallbackOverlay = !!i7579[3]
  i7578.renderMode = i7579[4]
  i7578.renderOrder = i7579[5]
  i7578.sortingLayerName = i7579[6]
  i7578.sortingOrder = i7579[7]
  i7578.scaleFactor = i7579[8]
  request.r(i7579[9], i7579[10], 0, i7578, 'worldCamera')
  i7578.overrideSorting = !!i7579[11]
  i7578.pixelPerfect = !!i7579[12]
  i7578.targetDisplay = i7579[13]
  i7578.overridePixelPerfect = !!i7579[14]
  return i7578
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7580 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7581 = data
  i7580.m_UiScaleMode = i7581[0]
  i7580.m_ReferencePixelsPerUnit = i7581[1]
  i7580.m_ScaleFactor = i7581[2]
  i7580.m_ReferenceResolution = new pc.Vec2( i7581[3], i7581[4] )
  i7580.m_ScreenMatchMode = i7581[5]
  i7580.m_MatchWidthOrHeight = i7581[6]
  i7580.m_PhysicalUnit = i7581[7]
  i7580.m_FallbackScreenDPI = i7581[8]
  i7580.m_DefaultSpriteDPI = i7581[9]
  i7580.m_DynamicPixelsPerUnit = i7581[10]
  i7580.m_PresetInfoIsWorld = !!i7581[11]
  return i7580
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7582 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7583 = data
  i7582.m_IgnoreReversedGraphics = !!i7583[0]
  i7582.m_BlockingObjects = i7583[1]
  i7582.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7583[2] )
  return i7582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7585 = data
  i7584.cullTransparentMesh = !!i7585[0]
  return i7584
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7586 = root || request.c( 'UnityEngine.UI.Image' )
  var i7587 = data
  request.r(i7587[0], i7587[1], 0, i7586, 'm_Sprite')
  i7586.m_Type = i7587[2]
  i7586.m_PreserveAspect = !!i7587[3]
  i7586.m_FillCenter = !!i7587[4]
  i7586.m_FillMethod = i7587[5]
  i7586.m_FillAmount = i7587[6]
  i7586.m_FillClockwise = !!i7587[7]
  i7586.m_FillOrigin = i7587[8]
  i7586.m_UseSpriteMesh = !!i7587[9]
  i7586.m_PixelsPerUnitMultiplier = i7587[10]
  request.r(i7587[11], i7587[12], 0, i7586, 'm_Material')
  i7586.m_Maskable = !!i7587[13]
  i7586.m_Color = new pc.Color(i7587[14], i7587[15], i7587[16], i7587[17])
  i7586.m_RaycastTarget = !!i7587[18]
  i7586.m_RaycastPadding = new pc.Vec4( i7587[19], i7587[20], i7587[21], i7587[22] )
  return i7586
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i7588 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i7589 = data
  i7588.m_StartCorner = i7589[0]
  i7588.m_StartAxis = i7589[1]
  i7588.m_CellSize = new pc.Vec2( i7589[2], i7589[3] )
  i7588.m_Spacing = new pc.Vec2( i7589[4], i7589[5] )
  i7588.m_Constraint = i7589[6]
  i7588.m_ConstraintCount = i7589[7]
  i7588.m_Padding = UnityEngine.RectOffset.FromPaddings(i7589[8], i7589[9], i7589[10], i7589[11])
  i7588.m_ChildAlignment = i7589[12]
  return i7588
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i7590 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i7591 = data
  i7590.m_HorizontalFit = i7591[0]
  i7590.m_VerticalFit = i7591[1]
  return i7590
}

Deserializers["test"] = function (request, data, root) {
  var i7592 = root || request.c( 'test' )
  var i7593 = data
  request.r(i7593[0], i7593[1], 0, i7592, 'img')
  request.r(i7593[2], i7593[3], 0, i7592, 'sprite')
  request.r(i7593[4], i7593[5], 0, i7592, 'bg')
  i7592.x = i7593[6]
  request.r(i7593[7], i7593[8], 0, i7592, 'gm')
  i7592.scaleChangeTime = i7593[9]
  i7592.clickScale = i7593[10]
  i7592.clearScale = i7593[11]
  i7592.effectIndex = i7593[12]
  return i7592
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7594 = root || request.c( 'UnityEngine.UI.Button' )
  var i7595 = data
  i7594.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7595[0], i7594.m_OnClick)
  i7594.m_Navigation = request.d('UnityEngine.UI.Navigation', i7595[1], i7594.m_Navigation)
  i7594.m_Transition = i7595[2]
  i7594.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7595[3], i7594.m_Colors)
  i7594.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7595[4], i7594.m_SpriteState)
  i7594.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7595[5], i7594.m_AnimationTriggers)
  i7594.m_Interactable = !!i7595[6]
  request.r(i7595[7], i7595[8], 0, i7594, 'm_TargetGraphic')
  return i7594
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7596 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7597 = data
  i7596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7597[0], i7596.m_PersistentCalls)
  return i7596
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7598 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7599 = data
  var i7601 = i7599[0]
  var i7600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7601.length; i += 1) {
    i7600.add(request.d('UnityEngine.Events.PersistentCall', i7601[i + 0]));
  }
  i7598.m_Calls = i7600
  return i7598
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7604 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7605 = data
  request.r(i7605[0], i7605[1], 0, i7604, 'm_Target')
  i7604.m_TargetAssemblyTypeName = i7605[2]
  i7604.m_MethodName = i7605[3]
  i7604.m_Mode = i7605[4]
  i7604.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7605[5], i7604.m_Arguments)
  i7604.m_CallState = i7605[6]
  return i7604
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7606 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7607 = data
  request.r(i7607[0], i7607[1], 0, i7606, 'm_ObjectArgument')
  i7606.m_ObjectArgumentAssemblyTypeName = i7607[2]
  i7606.m_IntArgument = i7607[3]
  i7606.m_FloatArgument = i7607[4]
  i7606.m_StringArgument = i7607[5]
  i7606.m_BoolArgument = !!i7607[6]
  return i7606
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7608 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7609 = data
  i7608.m_Mode = i7609[0]
  i7608.m_WrapAround = !!i7609[1]
  request.r(i7609[2], i7609[3], 0, i7608, 'm_SelectOnUp')
  request.r(i7609[4], i7609[5], 0, i7608, 'm_SelectOnDown')
  request.r(i7609[6], i7609[7], 0, i7608, 'm_SelectOnLeft')
  request.r(i7609[8], i7609[9], 0, i7608, 'm_SelectOnRight')
  return i7608
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7610 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7611 = data
  i7610.m_NormalColor = new pc.Color(i7611[0], i7611[1], i7611[2], i7611[3])
  i7610.m_HighlightedColor = new pc.Color(i7611[4], i7611[5], i7611[6], i7611[7])
  i7610.m_PressedColor = new pc.Color(i7611[8], i7611[9], i7611[10], i7611[11])
  i7610.m_SelectedColor = new pc.Color(i7611[12], i7611[13], i7611[14], i7611[15])
  i7610.m_DisabledColor = new pc.Color(i7611[16], i7611[17], i7611[18], i7611[19])
  i7610.m_ColorMultiplier = i7611[20]
  i7610.m_FadeDuration = i7611[21]
  return i7610
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7612 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7613 = data
  request.r(i7613[0], i7613[1], 0, i7612, 'm_HighlightedSprite')
  request.r(i7613[2], i7613[3], 0, i7612, 'm_PressedSprite')
  request.r(i7613[4], i7613[5], 0, i7612, 'm_SelectedSprite')
  request.r(i7613[6], i7613[7], 0, i7612, 'm_DisabledSprite')
  return i7612
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7614 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7615 = data
  i7614.m_NormalTrigger = i7615[0]
  i7614.m_HighlightedTrigger = i7615[1]
  i7614.m_PressedTrigger = i7615[2]
  i7614.m_SelectedTrigger = i7615[3]
  i7614.m_DisabledTrigger = i7615[4]
  return i7614
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i7616 = root || request.c( 'UnityEngine.UI.Slider' )
  var i7617 = data
  request.r(i7617[0], i7617[1], 0, i7616, 'm_FillRect')
  request.r(i7617[2], i7617[3], 0, i7616, 'm_HandleRect')
  i7616.m_Direction = i7617[4]
  i7616.m_MinValue = i7617[5]
  i7616.m_MaxValue = i7617[6]
  i7616.m_WholeNumbers = !!i7617[7]
  i7616.m_Value = i7617[8]
  i7616.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i7617[9], i7616.m_OnValueChanged)
  i7616.m_Navigation = request.d('UnityEngine.UI.Navigation', i7617[10], i7616.m_Navigation)
  i7616.m_Transition = i7617[11]
  i7616.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7617[12], i7616.m_Colors)
  i7616.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7617[13], i7616.m_SpriteState)
  i7616.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7617[14], i7616.m_AnimationTriggers)
  i7616.m_Interactable = !!i7617[15]
  request.r(i7617[16], i7617[17], 0, i7616, 'm_TargetGraphic')
  return i7616
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i7618 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i7619 = data
  i7618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7619[0], i7618.m_PersistentCalls)
  return i7618
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i7620 = root || request.c( 'UnityEngine.UI.Text' )
  var i7621 = data
  i7620.m_FontData = request.d('UnityEngine.UI.FontData', i7621[0], i7620.m_FontData)
  i7620.m_Text = i7621[1]
  request.r(i7621[2], i7621[3], 0, i7620, 'm_Material')
  i7620.m_Maskable = !!i7621[4]
  i7620.m_Color = new pc.Color(i7621[5], i7621[6], i7621[7], i7621[8])
  i7620.m_RaycastTarget = !!i7621[9]
  i7620.m_RaycastPadding = new pc.Vec4( i7621[10], i7621[11], i7621[12], i7621[13] )
  return i7620
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i7622 = root || request.c( 'UnityEngine.UI.FontData' )
  var i7623 = data
  request.r(i7623[0], i7623[1], 0, i7622, 'm_Font')
  i7622.m_FontSize = i7623[2]
  i7622.m_FontStyle = i7623[3]
  i7622.m_BestFit = !!i7623[4]
  i7622.m_MinSize = i7623[5]
  i7622.m_MaxSize = i7623[6]
  i7622.m_Alignment = i7623[7]
  i7622.m_AlignByGeometry = !!i7623[8]
  i7622.m_RichText = !!i7623[9]
  i7622.m_HorizontalOverflow = i7623[10]
  i7622.m_VerticalOverflow = i7623[11]
  i7622.m_LineSpacing = i7623[12]
  return i7622
}

Deserializers["endCard"] = function (request, data, root) {
  var i7624 = root || request.c( 'endCard' )
  var i7625 = data
  request.r(i7625[0], i7625[1], 0, i7624, 'gm')
  return i7624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i7626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i7627 = data
  i7626.m_Alpha = i7627[0]
  i7626.m_Interactable = !!i7627[1]
  i7626.m_BlocksRaycasts = !!i7627[2]
  i7626.m_IgnoreParentGroups = !!i7627[3]
  i7626.enabled = !!i7627[4]
  return i7626
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i7628 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i7629 = data
  request.r(i7629[0], i7629[1], 0, i7628, 'skeletonDataAsset')
  request.r(i7629[2], i7629[3], 0, i7628, 'additiveMaterial')
  request.r(i7629[4], i7629[5], 0, i7628, 'multiplyMaterial')
  request.r(i7629[6], i7629[7], 0, i7628, 'screenMaterial')
  i7628.initialSkinName = i7629[8]
  i7628.initialFlipX = !!i7629[9]
  i7628.initialFlipY = !!i7629[10]
  i7628.startingAnimation = i7629[11]
  i7628.startingLoop = !!i7629[12]
  i7628.timeScale = i7629[13]
  i7628.freeze = !!i7629[14]
  i7628.layoutScaleMode = i7629[15]
  i7628.updateWhenInvisible = i7629[16]
  i7628.allowMultipleCanvasRenderers = !!i7629[17]
  var i7631 = i7629[18]
  var i7630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i7631.length; i += 2) {
  request.r(i7631[i + 0], i7631[i + 1], 1, i7630, '')
  }
  i7628.canvasRenderers = i7630
  i7628.enableSeparatorSlots = !!i7629[19]
  i7628.updateSeparatorPartLocation = !!i7629[20]
  i7628.updateSeparatorPartScale = !!i7629[21]
  i7628.disableMeshAssignmentOnOverride = !!i7629[22]
  i7628.referenceSize = new pc.Vec2( i7629[23], i7629[24] )
  i7628.referenceScale = i7629[25]
  i7628.rectTransformSize = new pc.Vec2( i7629[26], i7629[27] )
  i7628.editReferenceRect = !!i7629[28]
  var i7633 = i7629[29]
  var i7632 = []
  for(var i = 0; i < i7633.length; i += 1) {
    i7632.push( i7633[i + 0] );
  }
  i7628.separatorSlotNames = i7632
  var i7635 = i7629[30]
  var i7634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7635.length; i += 2) {
  request.r(i7635[i + 0], i7635[i + 1], 1, i7634, '')
  }
  i7628.separatorParts = i7634
  i7628.meshGenerator = request.d('Spine.Unity.MeshGenerator', i7629[31], i7628.meshGenerator)
  i7628.updateTiming = i7629[32]
  i7628.unscaledTime = !!i7629[33]
  request.r(i7629[34], i7629[35], 0, i7628, 'm_Material')
  i7628.m_Maskable = !!i7629[36]
  i7628.m_Color = new pc.Color(i7629[37], i7629[38], i7629[39], i7629[40])
  i7628.m_RaycastTarget = !!i7629[41]
  i7628.m_RaycastPadding = new pc.Vec4( i7629[42], i7629[43], i7629[44], i7629[45] )
  return i7628
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i7640 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i7641 = data
  i7640.settings = request.d('Spine.Unity.MeshGenerator+Settings', i7641[0], i7640.settings)
  return i7640
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i7642 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i7643 = data
  i7642.useClipping = !!i7643[0]
  i7642.zSpacing = i7643[1]
  i7642.pmaVertexColors = !!i7643[2]
  i7642.tintBlack = !!i7643[3]
  i7642.canvasGroupTintBlack = !!i7643[4]
  i7642.calculateTangents = !!i7643[5]
  i7642.addNormals = !!i7643[6]
  i7642.immutableTriangles = !!i7643[7]
  return i7642
}

Deserializers["Spine.Unity.BoneFollowerGraphic"] = function (request, data, root) {
  var i7644 = root || request.c( 'Spine.Unity.BoneFollowerGraphic' )
  var i7645 = data
  request.r(i7645[0], i7645[1], 0, i7644, 'skeletonGraphic')
  i7644.initializeOnAwake = !!i7645[2]
  i7644.boneName = i7645[3]
  i7644.followBoneRotation = !!i7645[4]
  i7644.followSkeletonFlip = !!i7645[5]
  i7644.followLocalScale = !!i7645[6]
  i7644.followParentWorldScale = !!i7645[7]
  i7644.followXYPosition = !!i7645[8]
  i7644.followZPosition = !!i7645[9]
  i7644.maintainedAxisOrientation = i7645[10]
  return i7644
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i7646 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i7647 = data
  request.r(i7647[0], i7647[1], 0, i7646, 'm_Material')
  i7646.m_Maskable = !!i7647[2]
  i7646.m_Color = new pc.Color(i7647[3], i7647[4], i7647[5], i7647[6])
  i7646.m_RaycastTarget = !!i7647[7]
  i7646.m_RaycastPadding = new pc.Vec4( i7647[8], i7647[9], i7647[10], i7647[11] )
  return i7646
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7648 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7649 = data
  request.r(i7649[0], i7649[1], 0, i7648, 'm_FirstSelected')
  i7648.m_sendNavigationEvents = !!i7649[2]
  i7648.m_DragThreshold = i7649[3]
  return i7648
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7650 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7651 = data
  i7650.m_HorizontalAxis = i7651[0]
  i7650.m_VerticalAxis = i7651[1]
  i7650.m_SubmitButton = i7651[2]
  i7650.m_CancelButton = i7651[3]
  i7650.m_InputActionsPerSecond = i7651[4]
  i7650.m_RepeatDelay = i7651[5]
  i7650.m_ForceModuleActive = !!i7651[6]
  i7650.m_SendPointerHoverToParent = !!i7651[7]
  return i7650
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i7652 = root || request.c( 'gamemanager' )
  var i7653 = data
  var i7655 = i7653[0]
  var i7654 = []
  for(var i = 0; i < i7655.length; i += 2) {
  request.r(i7655[i + 0], i7655[i + 1], 2, i7654, '')
  }
  i7652.sprites = i7654
  var i7657 = i7653[1]
  var i7656 = []
  for(var i = 0; i < i7657.length; i += 2) {
  request.r(i7657[i + 0], i7657[i + 1], 2, i7656, '')
  }
  i7652.t = i7656
  var i7659 = i7653[2]
  var i7658 = []
  for(var i = 0; i < i7659.length; i += 2) {
  request.r(i7659[i + 0], i7659[i + 1], 2, i7658, '')
  }
  i7652.tests = i7658
  request.r(i7653[3], i7653[4], 0, i7652, 'playerHpbar')
  request.r(i7653[5], i7653[6], 0, i7652, 'enemyHpBar')
  request.r(i7653[7], i7653[8], 0, i7652, 'dmg')
  i7652.enemyHpMax = i7653[9]
  i7652.hpMax = i7653[10]
  i7652.enemyPower = i7653[11]
  i7652.playerPower = i7653[12]
  i7652.playerPowerMul = i7653[13]
  i7652.attackSpeed = i7653[14]
  i7652.attackSpeedMul = i7653[15]
  request.r(i7653[16], i7653[17], 0, i7652, 'endCover')
  request.r(i7653[18], i7653[19], 0, i7652, 'catchCover')
  i7652.curPlayerPower = System.Int64(i7653[20])
  request.r(i7653[21], i7653[22], 0, i7652, 'ani')
  request.r(i7653[23], i7653[24], 0, i7652, 'dmgAni')
  var i7661 = i7653[25]
  var i7660 = []
  for(var i = 0; i < i7661.length; i += 2) {
  request.r(i7661[i + 0], i7661[i + 1], 2, i7660, '')
  }
  i7652.pets = i7660
  request.r(i7653[26], i7653[27], 0, i7652, 'capsule')
  i7652.capsuleRotate = i7653[28]
  i7652.capsuleMoveTime = i7653[29]
  request.r(i7653[30], i7653[31], 0, i7652, 'capsuleTarget')
  return i7652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7669 = data
  i7668.enabled = !!i7669[0]
  request.r(i7669[1], i7669[2], 0, i7668, 'sharedMaterial')
  var i7671 = i7669[3]
  var i7670 = []
  for(var i = 0; i < i7671.length; i += 2) {
  request.r(i7671[i + 0], i7671[i + 1], 2, i7670, '')
  }
  i7668.sharedMaterials = i7670
  i7668.receiveShadows = !!i7669[4]
  i7668.shadowCastingMode = i7669[5]
  i7668.sortingLayerID = i7669[6]
  i7668.sortingOrder = i7669[7]
  i7668.lightmapIndex = i7669[8]
  i7668.lightmapSceneIndex = i7669[9]
  i7668.lightmapScaleOffset = new pc.Vec4( i7669[10], i7669[11], i7669[12], i7669[13] )
  i7668.lightProbeUsage = i7669[14]
  i7668.reflectionProbeUsage = i7669[15]
  i7668.color = new pc.Color(i7669[16], i7669[17], i7669[18], i7669[19])
  request.r(i7669[20], i7669[21], 0, i7668, 'sprite')
  i7668.flipX = !!i7669[22]
  i7668.flipY = !!i7669[23]
  i7668.drawMode = i7669[24]
  i7668.size = new pc.Vec2( i7669[25], i7669[26] )
  i7668.tileMode = i7669[27]
  i7668.adaptiveModeThreshold = i7669[28]
  i7668.maskInteraction = i7669[29]
  i7668.spriteSortPoint = i7669[30]
  return i7668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i7672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i7673 = data
  i7672.playAutomatically = !!i7673[0]
  request.r(i7673[1], i7673[2], 0, i7672, 'clip')
  var i7675 = i7673[3]
  var i7674 = []
  for(var i = 0; i < i7675.length; i += 2) {
  request.r(i7675[i + 0], i7675[i + 1], 2, i7674, '')
  }
  i7672.clips = i7674
  i7672.wrapMode = i7673[4]
  i7672.enabled = !!i7673[5]
  return i7672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7679 = data
  i7678.ambientIntensity = i7679[0]
  i7678.reflectionIntensity = i7679[1]
  i7678.ambientMode = i7679[2]
  i7678.ambientLight = new pc.Color(i7679[3], i7679[4], i7679[5], i7679[6])
  i7678.ambientSkyColor = new pc.Color(i7679[7], i7679[8], i7679[9], i7679[10])
  i7678.ambientGroundColor = new pc.Color(i7679[11], i7679[12], i7679[13], i7679[14])
  i7678.ambientEquatorColor = new pc.Color(i7679[15], i7679[16], i7679[17], i7679[18])
  i7678.fogColor = new pc.Color(i7679[19], i7679[20], i7679[21], i7679[22])
  i7678.fogEndDistance = i7679[23]
  i7678.fogStartDistance = i7679[24]
  i7678.fogDensity = i7679[25]
  i7678.fog = !!i7679[26]
  request.r(i7679[27], i7679[28], 0, i7678, 'skybox')
  i7678.fogMode = i7679[29]
  var i7681 = i7679[30]
  var i7680 = []
  for(var i = 0; i < i7681.length; i += 1) {
    i7680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7681[i + 0]) );
  }
  i7678.lightmaps = i7680
  i7678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7679[31], i7678.lightProbes)
  i7678.lightmapsMode = i7679[32]
  i7678.mixedBakeMode = i7679[33]
  i7678.environmentLightingMode = i7679[34]
  i7678.ambientProbe = new pc.SphericalHarmonicsL2(i7679[35])
  i7678.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7679[36])
  i7678.useReferenceAmbientProbe = !!i7679[37]
  request.r(i7679[38], i7679[39], 0, i7678, 'customReflection')
  request.r(i7679[40], i7679[41], 0, i7678, 'defaultReflection')
  i7678.defaultReflectionMode = i7679[42]
  i7678.defaultReflectionResolution = i7679[43]
  i7678.sunLightObjectId = i7679[44]
  i7678.pixelLightCount = i7679[45]
  i7678.defaultReflectionHDR = !!i7679[46]
  i7678.hasLightDataAsset = !!i7679[47]
  i7678.hasManualGenerate = !!i7679[48]
  return i7678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7685 = data
  request.r(i7685[0], i7685[1], 0, i7684, 'lightmapColor')
  request.r(i7685[2], i7685[3], 0, i7684, 'lightmapDirection')
  return i7684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7686 = root || new UnityEngine.LightProbes()
  var i7687 = data
  return i7686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7695 = data
  var i7697 = i7695[0]
  var i7696 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7697.length; i += 1) {
    i7696.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7697[i + 0]));
  }
  i7694.ShaderCompilationErrors = i7696
  i7694.name = i7695[1]
  i7694.guid = i7695[2]
  var i7699 = i7695[3]
  var i7698 = []
  for(var i = 0; i < i7699.length; i += 1) {
    i7698.push( i7699[i + 0] );
  }
  i7694.shaderDefinedKeywords = i7698
  var i7701 = i7695[4]
  var i7700 = []
  for(var i = 0; i < i7701.length; i += 1) {
    i7700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7701[i + 0]) );
  }
  i7694.passes = i7700
  var i7703 = i7695[5]
  var i7702 = []
  for(var i = 0; i < i7703.length; i += 1) {
    i7702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7703[i + 0]) );
  }
  i7694.usePasses = i7702
  var i7705 = i7695[6]
  var i7704 = []
  for(var i = 0; i < i7705.length; i += 1) {
    i7704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7705[i + 0]) );
  }
  i7694.defaultParameterValues = i7704
  request.r(i7695[7], i7695[8], 0, i7694, 'unityFallbackShader')
  i7694.readDepth = !!i7695[9]
  i7694.isCreatedByShaderGraph = !!i7695[10]
  i7694.usedBatchUniforms = i7695[11]
  return i7694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7709 = data
  i7708.shaderName = i7709[0]
  i7708.errorMessage = i7709[1]
  return i7708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7712 = root || new pc.UnityShaderPass()
  var i7713 = data
  i7712.id = i7713[0]
  i7712.subShaderIndex = i7713[1]
  i7712.name = i7713[2]
  i7712.passType = i7713[3]
  i7712.grabPassTextureName = i7713[4]
  i7712.usePass = !!i7713[5]
  i7712.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[6], i7712.zTest)
  i7712.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[7], i7712.zWrite)
  i7712.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[8], i7712.culling)
  i7712.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7713[9], i7712.blending)
  i7712.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7713[10], i7712.alphaBlending)
  i7712.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[11], i7712.colorWriteMask)
  i7712.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[12], i7712.offsetUnits)
  i7712.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[13], i7712.offsetFactor)
  i7712.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[14], i7712.stencilRef)
  i7712.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[15], i7712.stencilReadMask)
  i7712.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7713[16], i7712.stencilWriteMask)
  i7712.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7713[17], i7712.stencilOp)
  i7712.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7713[18], i7712.stencilOpFront)
  i7712.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7713[19], i7712.stencilOpBack)
  var i7715 = i7713[20]
  var i7714 = []
  for(var i = 0; i < i7715.length; i += 1) {
    i7714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7715[i + 0]) );
  }
  i7712.tags = i7714
  var i7717 = i7713[21]
  var i7716 = []
  for(var i = 0; i < i7717.length; i += 1) {
    i7716.push( i7717[i + 0] );
  }
  i7712.passDefinedKeywords = i7716
  var i7719 = i7713[22]
  var i7718 = []
  for(var i = 0; i < i7719.length; i += 1) {
    i7718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7719[i + 0]) );
  }
  i7712.passDefinedKeywordGroups = i7718
  var i7721 = i7713[23]
  var i7720 = []
  for(var i = 0; i < i7721.length; i += 1) {
    i7720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7721[i + 0]) );
  }
  i7712.variants = i7720
  var i7723 = i7713[24]
  var i7722 = []
  for(var i = 0; i < i7723.length; i += 1) {
    i7722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7723[i + 0]) );
  }
  i7712.excludedVariants = i7722
  i7712.hasDepthReader = !!i7713[25]
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7725 = data
  i7724.val = i7725[0]
  i7724.name = i7725[1]
  return i7724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7727 = data
  i7726.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7727[0], i7726.src)
  i7726.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7727[1], i7726.dst)
  i7726.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7727[2], i7726.op)
  return i7726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7729 = data
  i7728.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7729[0], i7728.pass)
  i7728.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7729[1], i7728.fail)
  i7728.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7729[2], i7728.zFail)
  i7728.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7729[3], i7728.comp)
  return i7728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7733 = data
  i7732.name = i7733[0]
  i7732.value = i7733[1]
  return i7732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7737 = data
  var i7739 = i7737[0]
  var i7738 = []
  for(var i = 0; i < i7739.length; i += 1) {
    i7738.push( i7739[i + 0] );
  }
  i7736.keywords = i7738
  i7736.hasDiscard = !!i7737[1]
  return i7736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7743 = data
  i7742.passId = i7743[0]
  i7742.subShaderIndex = i7743[1]
  var i7745 = i7743[2]
  var i7744 = []
  for(var i = 0; i < i7745.length; i += 1) {
    i7744.push( i7745[i + 0] );
  }
  i7742.keywords = i7744
  i7742.vertexProgram = i7743[3]
  i7742.fragmentProgram = i7743[4]
  i7742.readDepth = !!i7743[5]
  return i7742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7749 = data
  request.r(i7749[0], i7749[1], 0, i7748, 'shader')
  i7748.pass = i7749[2]
  return i7748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7753 = data
  i7752.name = i7753[0]
  i7752.type = i7753[1]
  i7752.value = new pc.Vec4( i7753[2], i7753[3], i7753[4], i7753[5] )
  i7752.textureValue = i7753[6]
  return i7752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7755 = data
  i7754.name = i7755[0]
  request.r(i7755[1], i7755[2], 0, i7754, 'texture')
  i7754.aabb = i7755[3]
  i7754.vertices = i7755[4]
  i7754.triangles = i7755[5]
  i7754.textureRect = UnityEngine.Rect.MinMaxRect(i7755[6], i7755[7], i7755[8], i7755[9])
  i7754.packedRect = UnityEngine.Rect.MinMaxRect(i7755[10], i7755[11], i7755[12], i7755[13])
  i7754.border = new pc.Vec4( i7755[14], i7755[15], i7755[16], i7755[17] )
  i7754.transparency = i7755[18]
  i7754.bounds = i7755[19]
  i7754.pixelsPerUnit = i7755[20]
  i7754.textureWidth = i7755[21]
  i7754.textureHeight = i7755[22]
  i7754.nativeSize = new pc.Vec2( i7755[23], i7755[24] )
  i7754.pivot = new pc.Vec2( i7755[25], i7755[26] )
  i7754.textureRectOffset = new pc.Vec2( i7755[27], i7755[28] )
  return i7754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7757 = data
  i7756.name = i7757[0]
  i7756.wrapMode = i7757[1]
  i7756.isLooping = !!i7757[2]
  i7756.length = i7757[3]
  var i7759 = i7757[4]
  var i7758 = []
  for(var i = 0; i < i7759.length; i += 1) {
    i7758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7759[i + 0]) );
  }
  i7756.curves = i7758
  var i7761 = i7757[5]
  var i7760 = []
  for(var i = 0; i < i7761.length; i += 1) {
    i7760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7761[i + 0]) );
  }
  i7756.events = i7760
  i7756.halfPrecision = !!i7757[6]
  i7756.frameRate = i7757[7]
  i7756.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7757[8], i7756.localBounds)
  i7756.hasMuscleCurves = !!i7757[9]
  var i7763 = i7757[10]
  var i7762 = []
  for(var i = 0; i < i7763.length; i += 1) {
    i7762.push( i7763[i + 0] );
  }
  i7756.clipMuscleConstant = i7762
  i7756.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7757[11], i7756.clipBindingConstant)
  return i7756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7767 = data
  i7766.path = i7767[0]
  i7766.componentType = i7767[1]
  i7766.property = i7767[2]
  i7766.keys = i7767[3]
  var i7769 = i7767[4]
  var i7768 = []
  for(var i = 0; i < i7769.length; i += 1) {
    i7768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7769[i + 0]) );
  }
  i7766.objectReferenceKeys = i7768
  return i7766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7773 = data
  i7772.time = i7773[0]
  request.r(i7773[1], i7773[2], 0, i7772, 'value')
  return i7772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7777 = data
  i7776.functionName = i7777[0]
  i7776.floatParameter = i7777[1]
  i7776.intParameter = i7777[2]
  i7776.stringParameter = i7777[3]
  request.r(i7777[4], i7777[5], 0, i7776, 'objectReferenceParameter')
  i7776.time = i7777[6]
  return i7776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7779 = data
  i7778.center = new pc.Vec3( i7779[0], i7779[1], i7779[2] )
  i7778.extends = new pc.Vec3( i7779[3], i7779[4], i7779[5] )
  return i7778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7783 = data
  var i7785 = i7783[0]
  var i7784 = []
  for(var i = 0; i < i7785.length; i += 1) {
    i7784.push( i7785[i + 0] );
  }
  i7782.genericBindings = i7784
  var i7787 = i7783[1]
  var i7786 = []
  for(var i = 0; i < i7787.length; i += 1) {
    i7786.push( i7787[i + 0] );
  }
  i7782.pptrCurveMapping = i7786
  return i7782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7789 = data
  i7788.name = i7789[0]
  i7788.ascent = i7789[1]
  i7788.originalLineHeight = i7789[2]
  i7788.fontSize = i7789[3]
  var i7791 = i7789[4]
  var i7790 = []
  for(var i = 0; i < i7791.length; i += 1) {
    i7790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7791[i + 0]) );
  }
  i7788.characterInfo = i7790
  request.r(i7789[5], i7789[6], 0, i7788, 'texture')
  i7788.originalFontSize = i7789[7]
  return i7788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7795 = data
  i7794.index = i7795[0]
  i7794.advance = i7795[1]
  i7794.bearing = i7795[2]
  i7794.glyphWidth = i7795[3]
  i7794.glyphHeight = i7795[4]
  i7794.minX = i7795[5]
  i7794.maxX = i7795[6]
  i7794.minY = i7795[7]
  i7794.maxY = i7795[8]
  i7794.uvBottomLeftX = i7795[9]
  i7794.uvBottomLeftY = i7795[10]
  i7794.uvBottomRightX = i7795[11]
  i7794.uvBottomRightY = i7795[12]
  i7794.uvTopLeftX = i7795[13]
  i7794.uvTopLeftY = i7795[14]
  i7794.uvTopRightX = i7795[15]
  i7794.uvTopRightY = i7795[16]
  return i7794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7797 = data
  i7796.name = i7797[0]
  var i7799 = i7797[1]
  var i7798 = []
  for(var i = 0; i < i7799.length; i += 1) {
    i7798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7799[i + 0]) );
  }
  i7796.states = i7798
  var i7801 = i7797[2]
  var i7800 = []
  for(var i = 0; i < i7801.length; i += 1) {
    i7800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7801[i + 0]) );
  }
  i7796.layers = i7800
  var i7803 = i7797[3]
  var i7802 = []
  for(var i = 0; i < i7803.length; i += 1) {
    i7802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7803[i + 0]) );
  }
  i7796.parameters = i7802
  i7796.animationClips = i7797[4]
  i7796.HasSubStateMachines = !!i7797[5]
  i7796.avatarUnsupported = i7797[6]
  return i7796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7807 = data
  i7806.cycleOffset = i7807[0]
  i7806.cycleOffsetParameter = i7807[1]
  i7806.cycleOffsetParameterActive = !!i7807[2]
  i7806.mirror = !!i7807[3]
  i7806.mirrorParameter = i7807[4]
  i7806.mirrorParameterActive = !!i7807[5]
  i7806.motionId = i7807[6]
  i7806.nameHash = i7807[7]
  i7806.fullPathHash = i7807[8]
  i7806.speed = i7807[9]
  i7806.speedParameter = i7807[10]
  i7806.speedParameterActive = !!i7807[11]
  i7806.tag = i7807[12]
  i7806.name = i7807[13]
  i7806.layer = i7807[14]
  i7806.writeDefaultValues = !!i7807[15]
  var i7809 = i7807[16]
  var i7808 = []
  for(var i = 0; i < i7809.length; i += 1) {
    i7808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7809[i + 0]) );
  }
  i7806.transitions = i7808
  var i7811 = i7807[17]
  var i7810 = []
  for(var i = 0; i < i7811.length; i += 2) {
  request.r(i7811[i + 0], i7811[i + 1], 2, i7810, '')
  }
  i7806.behaviours = i7810
  return i7806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7815 = data
  i7814.fullPath = i7815[0]
  i7814.canTransitionToSelf = !!i7815[1]
  i7814.duration = i7815[2]
  i7814.exitTime = i7815[3]
  i7814.hasExitTime = !!i7815[4]
  i7814.hasFixedDuration = !!i7815[5]
  i7814.interruptionSource = i7815[6]
  i7814.offset = i7815[7]
  i7814.orderedInterruption = !!i7815[8]
  i7814.destinationStateNameHash = i7815[9]
  i7814.destinationStateMachineId = i7815[10]
  i7814.isExit = !!i7815[11]
  i7814.mute = !!i7815[12]
  i7814.solo = !!i7815[13]
  var i7817 = i7815[14]
  var i7816 = []
  for(var i = 0; i < i7817.length; i += 1) {
    i7816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7817[i + 0]) );
  }
  i7814.conditions = i7816
  return i7814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7821 = data
  i7820.mode = i7821[0]
  i7820.parameter = i7821[1]
  i7820.threshold = i7821[2]
  return i7820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7827 = data
  i7826.blendingMode = i7827[0]
  i7826.defaultWeight = i7827[1]
  i7826.name = i7827[2]
  i7826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7827[3], i7826.stateMachine)
  return i7826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7829 = data
  i7828.id = i7829[0]
  i7828.defaultStateNameHash = i7829[1]
  var i7831 = i7829[2]
  var i7830 = []
  for(var i = 0; i < i7831.length; i += 1) {
    i7830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7831[i + 0]) );
  }
  i7828.entryTransitions = i7830
  var i7833 = i7829[3]
  var i7832 = []
  for(var i = 0; i < i7833.length; i += 1) {
    i7832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7833[i + 0]) );
  }
  i7828.anyStateTransitions = i7832
  return i7828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7837 = data
  i7836.destinationStateNameHash = i7837[0]
  i7836.destinationStateMachineId = i7837[1]
  i7836.isExit = !!i7837[2]
  i7836.mute = !!i7837[3]
  i7836.solo = !!i7837[4]
  var i7839 = i7837[5]
  var i7838 = []
  for(var i = 0; i < i7839.length; i += 1) {
    i7838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7839[i + 0]) );
  }
  i7836.conditions = i7838
  return i7836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7843 = data
  i7842.defaultBool = !!i7843[0]
  i7842.defaultFloat = i7843[1]
  i7842.defaultInt = i7843[2]
  i7842.name = i7843[3]
  i7842.nameHash = i7843[4]
  i7842.type = i7843[5]
  return i7842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7845 = data
  i7844.name = i7845[0]
  i7844.bytes64 = i7845[1]
  i7844.data = i7845[2]
  return i7844
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i7846 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i7847 = data
  var i7849 = i7847[0]
  var i7848 = []
  for(var i = 0; i < i7849.length; i += 2) {
  request.r(i7849[i + 0], i7849[i + 1], 2, i7848, '')
  }
  i7846.atlasAssets = i7848
  i7846.scale = i7847[1]
  request.r(i7847[2], i7847[3], 0, i7846, 'skeletonJSON')
  i7846.isUpgradingBlendModeMaterials = !!i7847[4]
  i7846.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i7847[5], i7846.blendModeMaterials)
  var i7851 = i7847[6]
  var i7850 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i7851.length; i += 2) {
  request.r(i7851[i + 0], i7851[i + 1], 1, i7850, '')
  }
  i7846.skeletonDataModifiers = i7850
  var i7853 = i7847[7]
  var i7852 = []
  for(var i = 0; i < i7853.length; i += 1) {
    i7852.push( i7853[i + 0] );
  }
  i7846.fromAnimation = i7852
  var i7855 = i7847[8]
  var i7854 = []
  for(var i = 0; i < i7855.length; i += 1) {
    i7854.push( i7855[i + 0] );
  }
  i7846.toAnimation = i7854
  i7846.duration = i7847[9]
  i7846.defaultMix = i7847[10]
  request.r(i7847[11], i7847[12], 0, i7846, 'controller')
  return i7846
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i7858 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i7859 = data
  i7858.applyAdditiveMaterial = !!i7859[0]
  var i7861 = i7859[1]
  var i7860 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7861.length; i += 1) {
    i7860.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7861[i + 0]));
  }
  i7858.additiveMaterials = i7860
  var i7863 = i7859[2]
  var i7862 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7863.length; i += 1) {
    i7862.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7863[i + 0]));
  }
  i7858.multiplyMaterials = i7862
  var i7865 = i7859[3]
  var i7864 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7865.length; i += 1) {
    i7864.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7865[i + 0]));
  }
  i7858.screenMaterials = i7864
  i7858.requiresBlendModeMaterials = !!i7859[4]
  return i7858
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i7868 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i7869 = data
  i7868.pageName = i7869[0]
  request.r(i7869[1], i7869[2], 0, i7868, 'material')
  return i7868
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i7872 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i7873 = data
  request.r(i7873[0], i7873[1], 0, i7872, 'atlasFile')
  var i7875 = i7873[2]
  var i7874 = []
  for(var i = 0; i < i7875.length; i += 2) {
  request.r(i7875[i + 0], i7875[i + 1], 2, i7874, '')
  }
  i7872.materials = i7874
  i7872.textureLoadingMode = i7873[3]
  request.r(i7873[4], i7873[5], 0, i7872, 'onDemandTextureLoader')
  return i7872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7877 = data
  var i7879 = i7877[0]
  var i7878 = []
  for(var i = 0; i < i7879.length; i += 1) {
    i7878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7879[i + 0]) );
  }
  i7876.files = i7878
  i7876.componentToPrefabIds = i7877[1]
  return i7876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7883 = data
  i7882.path = i7883[0]
  request.r(i7883[1], i7883[2], 0, i7882, 'unityObject')
  return i7882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7885 = data
  var i7887 = i7885[0]
  var i7886 = []
  for(var i = 0; i < i7887.length; i += 1) {
    i7886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7887[i + 0]) );
  }
  i7884.scriptsExecutionOrder = i7886
  var i7889 = i7885[1]
  var i7888 = []
  for(var i = 0; i < i7889.length; i += 1) {
    i7888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7889[i + 0]) );
  }
  i7884.sortingLayers = i7888
  var i7891 = i7885[2]
  var i7890 = []
  for(var i = 0; i < i7891.length; i += 1) {
    i7890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7891[i + 0]) );
  }
  i7884.cullingLayers = i7890
  i7884.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7885[3], i7884.timeSettings)
  i7884.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7885[4], i7884.physicsSettings)
  i7884.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7885[5], i7884.physics2DSettings)
  i7884.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7885[6], i7884.qualitySettings)
  i7884.enableRealtimeShadows = !!i7885[7]
  i7884.enableAutoInstancing = !!i7885[8]
  i7884.enableDynamicBatching = !!i7885[9]
  i7884.lightmapEncodingQuality = i7885[10]
  i7884.desiredColorSpace = i7885[11]
  var i7893 = i7885[12]
  var i7892 = []
  for(var i = 0; i < i7893.length; i += 1) {
    i7892.push( i7893[i + 0] );
  }
  i7884.allTags = i7892
  return i7884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7897 = data
  i7896.name = i7897[0]
  i7896.value = i7897[1]
  return i7896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7901 = data
  i7900.id = i7901[0]
  i7900.name = i7901[1]
  i7900.value = i7901[2]
  return i7900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7905 = data
  i7904.id = i7905[0]
  i7904.name = i7905[1]
  return i7904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7907 = data
  i7906.fixedDeltaTime = i7907[0]
  i7906.maximumDeltaTime = i7907[1]
  i7906.timeScale = i7907[2]
  i7906.maximumParticleTimestep = i7907[3]
  return i7906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7909 = data
  i7908.gravity = new pc.Vec3( i7909[0], i7909[1], i7909[2] )
  i7908.defaultSolverIterations = i7909[3]
  i7908.bounceThreshold = i7909[4]
  i7908.autoSyncTransforms = !!i7909[5]
  i7908.autoSimulation = !!i7909[6]
  var i7911 = i7909[7]
  var i7910 = []
  for(var i = 0; i < i7911.length; i += 1) {
    i7910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7911[i + 0]) );
  }
  i7908.collisionMatrix = i7910
  return i7908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7915 = data
  i7914.enabled = !!i7915[0]
  i7914.layerId = i7915[1]
  i7914.otherLayerId = i7915[2]
  return i7914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7917 = data
  request.r(i7917[0], i7917[1], 0, i7916, 'material')
  i7916.gravity = new pc.Vec2( i7917[2], i7917[3] )
  i7916.positionIterations = i7917[4]
  i7916.velocityIterations = i7917[5]
  i7916.velocityThreshold = i7917[6]
  i7916.maxLinearCorrection = i7917[7]
  i7916.maxAngularCorrection = i7917[8]
  i7916.maxTranslationSpeed = i7917[9]
  i7916.maxRotationSpeed = i7917[10]
  i7916.baumgarteScale = i7917[11]
  i7916.baumgarteTOIScale = i7917[12]
  i7916.timeToSleep = i7917[13]
  i7916.linearSleepTolerance = i7917[14]
  i7916.angularSleepTolerance = i7917[15]
  i7916.defaultContactOffset = i7917[16]
  i7916.autoSimulation = !!i7917[17]
  i7916.queriesHitTriggers = !!i7917[18]
  i7916.queriesStartInColliders = !!i7917[19]
  i7916.callbacksOnDisable = !!i7917[20]
  i7916.reuseCollisionCallbacks = !!i7917[21]
  i7916.autoSyncTransforms = !!i7917[22]
  var i7919 = i7917[23]
  var i7918 = []
  for(var i = 0; i < i7919.length; i += 1) {
    i7918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7919[i + 0]) );
  }
  i7916.collisionMatrix = i7918
  return i7916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7923 = data
  i7922.enabled = !!i7923[0]
  i7922.layerId = i7923[1]
  i7922.otherLayerId = i7923[2]
  return i7922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7925 = data
  var i7927 = i7925[0]
  var i7926 = []
  for(var i = 0; i < i7927.length; i += 1) {
    i7926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7927[i + 0]) );
  }
  i7924.qualityLevels = i7926
  var i7929 = i7925[1]
  var i7928 = []
  for(var i = 0; i < i7929.length; i += 1) {
    i7928.push( i7929[i + 0] );
  }
  i7924.names = i7928
  i7924.shadows = i7925[2]
  i7924.anisotropicFiltering = i7925[3]
  i7924.antiAliasing = i7925[4]
  i7924.lodBias = i7925[5]
  i7924.shadowCascades = i7925[6]
  i7924.shadowDistance = i7925[7]
  i7924.shadowmaskMode = i7925[8]
  i7924.shadowProjection = i7925[9]
  i7924.shadowResolution = i7925[10]
  i7924.softParticles = !!i7925[11]
  i7924.softVegetation = !!i7925[12]
  i7924.activeColorSpace = i7925[13]
  i7924.desiredColorSpace = i7925[14]
  i7924.masterTextureLimit = i7925[15]
  i7924.maxQueuedFrames = i7925[16]
  i7924.particleRaycastBudget = i7925[17]
  i7924.pixelLightCount = i7925[18]
  i7924.realtimeReflectionProbes = !!i7925[19]
  i7924.shadowCascade2Split = i7925[20]
  i7924.shadowCascade4Split = new pc.Vec3( i7925[21], i7925[22], i7925[23] )
  i7924.streamingMipmapsActive = !!i7925[24]
  i7924.vSyncCount = i7925[25]
  i7924.asyncUploadBufferSize = i7925[26]
  i7924.asyncUploadTimeSlice = i7925[27]
  i7924.billboardsFaceCameraPosition = !!i7925[28]
  i7924.shadowNearPlaneOffset = i7925[29]
  i7924.streamingMipmapsMemoryBudget = i7925[30]
  i7924.maximumLODLevel = i7925[31]
  i7924.streamingMipmapsAddAllCameras = !!i7925[32]
  i7924.streamingMipmapsMaxLevelReduction = i7925[33]
  i7924.streamingMipmapsRenderersPerFrame = i7925[34]
  i7924.resolutionScalingFixedDPIFactor = i7925[35]
  i7924.streamingMipmapsMaxFileIORequests = i7925[36]
  i7924.currentQualityLevel = i7925[37]
  return i7924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7935 = data
  i7934.weight = i7935[0]
  i7934.vertices = i7935[1]
  i7934.normals = i7935[2]
  i7934.tangents = i7935[3]
  return i7934
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[15],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[15],"79":[4],"80":[81],"82":[81],"17":[14],"83":[84],"36":[14],"37":[21,14],"85":[4],"35":[21,14],"9":[6,4],"86":[4],"87":[4,2],"88":[57],"89":[65],"90":[84],"91":[92],"93":[14],"94":[4,14],"95":[14,21],"96":[14],"97":[21,14],"98":[4],"99":[21,14],"100":[14],"101":[102],"103":[14],"104":[14],"20":[17],"22":[21,14],"105":[14],"19":[17],"25":[14],"24":[14],"106":[14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[21,14],"114":[14],"115":[14],"116":[14],"30":[14],"31":[21,14],"117":[14],"118":[38],"119":[38],"39":[38],"120":[38],"121":[15],"122":[15],"123":[102],"124":[102]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonDataAsset","enemy","UnityEngine.Texture2D","player","UnityEngine.RectTransform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","test","UnityEngine.GameObject","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","endCard","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "05/12/2024 23:50:46";

Deserializers.lunaDaysRunning = "3.1";

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

Deserializers.buildID = "af441208-2e48-4cb2-b75c-74644332607a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

