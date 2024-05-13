var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5302 = root || request.c( 'UnityEngine.JointSpring' )
  var i5303 = data
  i5302.spring = i5303[0]
  i5302.damper = i5303[1]
  i5302.targetPosition = i5303[2]
  return i5302
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5304 = root || request.c( 'UnityEngine.JointMotor' )
  var i5305 = data
  i5304.m_TargetVelocity = i5305[0]
  i5304.m_Force = i5305[1]
  i5304.m_FreeSpin = i5305[2]
  return i5304
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5306 = root || request.c( 'UnityEngine.JointLimits' )
  var i5307 = data
  i5306.m_Min = i5307[0]
  i5306.m_Max = i5307[1]
  i5306.m_Bounciness = i5307[2]
  i5306.m_BounceMinVelocity = i5307[3]
  i5306.m_ContactDistance = i5307[4]
  i5306.minBounce = i5307[5]
  i5306.maxBounce = i5307[6]
  return i5306
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5308 = root || request.c( 'UnityEngine.JointDrive' )
  var i5309 = data
  i5308.m_PositionSpring = i5309[0]
  i5308.m_PositionDamper = i5309[1]
  i5308.m_MaximumForce = i5309[2]
  return i5308
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5310 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5311 = data
  i5310.m_Spring = i5311[0]
  i5310.m_Damper = i5311[1]
  return i5310
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5312 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5313 = data
  i5312.m_Limit = i5313[0]
  i5312.m_Bounciness = i5313[1]
  i5312.m_ContactDistance = i5313[2]
  return i5312
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5314 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5315 = data
  i5314.m_ExtremumSlip = i5315[0]
  i5314.m_ExtremumValue = i5315[1]
  i5314.m_AsymptoteSlip = i5315[2]
  i5314.m_AsymptoteValue = i5315[3]
  i5314.m_Stiffness = i5315[4]
  return i5314
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5316 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5317 = data
  i5316.m_LowerAngle = i5317[0]
  i5316.m_UpperAngle = i5317[1]
  return i5316
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5318 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5319 = data
  i5318.m_MotorSpeed = i5319[0]
  i5318.m_MaximumMotorTorque = i5319[1]
  return i5318
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5320 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5321 = data
  i5320.m_DampingRatio = i5321[0]
  i5320.m_Frequency = i5321[1]
  i5320.m_Angle = i5321[2]
  return i5320
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5322 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5323 = data
  i5322.m_LowerTranslation = i5323[0]
  i5322.m_UpperTranslation = i5323[1]
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5324 = root || new pc.UnityMaterial()
  var i5325 = data
  i5324.name = i5325[0]
  request.r(i5325[1], i5325[2], 0, i5324, 'shader')
  i5324.renderQueue = i5325[3]
  i5324.enableInstancing = !!i5325[4]
  var i5327 = i5325[5]
  var i5326 = []
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5327[i + 0]) );
  }
  i5324.floatParameters = i5326
  var i5329 = i5325[6]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5329[i + 0]) );
  }
  i5324.colorParameters = i5328
  var i5331 = i5325[7]
  var i5330 = []
  for(var i = 0; i < i5331.length; i += 1) {
    i5330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5331[i + 0]) );
  }
  i5324.vectorParameters = i5330
  var i5333 = i5325[8]
  var i5332 = []
  for(var i = 0; i < i5333.length; i += 1) {
    i5332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5333[i + 0]) );
  }
  i5324.textureParameters = i5332
  var i5335 = i5325[9]
  var i5334 = []
  for(var i = 0; i < i5335.length; i += 1) {
    i5334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5335[i + 0]) );
  }
  i5324.materialFlags = i5334
  return i5324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5339 = data
  i5338.name = i5339[0]
  i5338.value = i5339[1]
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5343 = data
  i5342.name = i5343[0]
  i5342.value = new pc.Color(i5343[1], i5343[2], i5343[3], i5343[4])
  return i5342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5347 = data
  i5346.name = i5347[0]
  i5346.value = new pc.Vec4( i5347[1], i5347[2], i5347[3], i5347[4] )
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5351 = data
  i5350.name = i5351[0]
  request.r(i5351[1], i5351[2], 0, i5350, 'value')
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5355 = data
  i5354.name = i5355[0]
  i5354.enabled = !!i5355[1]
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5357 = data
  i5356.name = i5357[0]
  i5356.width = i5357[1]
  i5356.height = i5357[2]
  i5356.mipmapCount = i5357[3]
  i5356.anisoLevel = i5357[4]
  i5356.filterMode = i5357[5]
  i5356.hdr = !!i5357[6]
  i5356.format = i5357[7]
  i5356.wrapMode = i5357[8]
  i5356.alphaIsTransparency = !!i5357[9]
  i5356.alphaSource = i5357[10]
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5359 = data
  i5358.name = i5359[0]
  i5358.halfPrecision = !!i5359[1]
  i5358.vertexCount = i5359[2]
  i5358.aabb = i5359[3]
  var i5361 = i5359[4]
  var i5360 = []
  for(var i = 0; i < i5361.length; i += 1) {
    i5360.push( !!i5361[i + 0] );
  }
  i5358.streams = i5360
  i5358.vertices = i5359[5]
  var i5363 = i5359[6]
  var i5362 = []
  for(var i = 0; i < i5363.length; i += 1) {
    i5362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5363[i + 0]) );
  }
  i5358.subMeshes = i5362
  var i5365 = i5359[7]
  var i5364 = []
  for(var i = 0; i < i5365.length; i += 16) {
    i5364.push( new pc.Mat4().setData(i5365[i + 0], i5365[i + 1], i5365[i + 2], i5365[i + 3],  i5365[i + 4], i5365[i + 5], i5365[i + 6], i5365[i + 7],  i5365[i + 8], i5365[i + 9], i5365[i + 10], i5365[i + 11],  i5365[i + 12], i5365[i + 13], i5365[i + 14], i5365[i + 15]) );
  }
  i5358.bindposes = i5364
  var i5367 = i5359[8]
  var i5366 = []
  for(var i = 0; i < i5367.length; i += 1) {
    i5366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5367[i + 0]) );
  }
  i5358.blendShapes = i5366
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5373 = data
  i5372.triangles = i5373[0]
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5379 = data
  i5378.name = i5379[0]
  var i5381 = i5379[1]
  var i5380 = []
  for(var i = 0; i < i5381.length; i += 1) {
    i5380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5381[i + 0]) );
  }
  i5378.frames = i5380
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5383 = data
  i5382.name = i5383[0]
  i5382.atlasId = i5383[1]
  i5382.mipmapCount = i5383[2]
  i5382.hdr = !!i5383[3]
  i5382.size = i5383[4]
  i5382.anisoLevel = i5383[5]
  i5382.filterMode = i5383[6]
  i5382.wrapMode = i5383[7]
  var i5385 = i5383[8]
  var i5384 = []
  for(var i = 0; i < i5385.length; i += 4) {
    i5384.push( UnityEngine.Rect.MinMaxRect(i5385[i + 0], i5385[i + 1], i5385[i + 2], i5385[i + 3]) );
  }
  i5382.rects = i5384
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5389 = data
  i5388.name = i5389[0]
  i5388.index = i5389[1]
  i5388.startup = !!i5389[2]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5391 = data
  i5390.position = new pc.Vec3( i5391[0], i5391[1], i5391[2] )
  i5390.scale = new pc.Vec3( i5391[3], i5391[4], i5391[5] )
  i5390.rotation = new pc.Quat(i5391[6], i5391[7], i5391[8], i5391[9])
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5393 = data
  i5392.enabled = !!i5393[0]
  i5392.aspect = i5393[1]
  i5392.orthographic = !!i5393[2]
  i5392.orthographicSize = i5393[3]
  i5392.backgroundColor = new pc.Color(i5393[4], i5393[5], i5393[6], i5393[7])
  i5392.nearClipPlane = i5393[8]
  i5392.farClipPlane = i5393[9]
  i5392.fieldOfView = i5393[10]
  i5392.depth = i5393[11]
  i5392.clearFlags = i5393[12]
  i5392.cullingMask = i5393[13]
  i5392.rect = i5393[14]
  request.r(i5393[15], i5393[16], 0, i5392, 'targetTexture')
  i5392.usePhysicalProperties = !!i5393[17]
  i5392.focalLength = i5393[18]
  i5392.sensorSize = new pc.Vec2( i5393[19], i5393[20] )
  i5392.lensShift = new pc.Vec2( i5393[21], i5393[22] )
  i5392.gateFit = i5393[23]
  return i5392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5395 = data
  i5394.name = i5395[0]
  i5394.tagId = i5395[1]
  i5394.enabled = !!i5395[2]
  i5394.isStatic = !!i5395[3]
  i5394.layer = i5395[4]
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5397 = data
  i5396.pivot = new pc.Vec2( i5397[0], i5397[1] )
  i5396.anchorMin = new pc.Vec2( i5397[2], i5397[3] )
  i5396.anchorMax = new pc.Vec2( i5397[4], i5397[5] )
  i5396.sizeDelta = new pc.Vec2( i5397[6], i5397[7] )
  i5396.anchoredPosition3D = new pc.Vec3( i5397[8], i5397[9], i5397[10] )
  i5396.rotation = new pc.Quat(i5397[11], i5397[12], i5397[13], i5397[14])
  i5396.scale = new pc.Vec3( i5397[15], i5397[16], i5397[17] )
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5399 = data
  i5398.enabled = !!i5399[0]
  i5398.planeDistance = i5399[1]
  i5398.referencePixelsPerUnit = i5399[2]
  i5398.isFallbackOverlay = !!i5399[3]
  i5398.renderMode = i5399[4]
  i5398.renderOrder = i5399[5]
  i5398.sortingLayerName = i5399[6]
  i5398.sortingOrder = i5399[7]
  i5398.scaleFactor = i5399[8]
  request.r(i5399[9], i5399[10], 0, i5398, 'worldCamera')
  i5398.overrideSorting = !!i5399[11]
  i5398.pixelPerfect = !!i5399[12]
  i5398.targetDisplay = i5399[13]
  i5398.overridePixelPerfect = !!i5399[14]
  return i5398
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5400 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5401 = data
  i5400.m_UiScaleMode = i5401[0]
  i5400.m_ReferencePixelsPerUnit = i5401[1]
  i5400.m_ScaleFactor = i5401[2]
  i5400.m_ReferenceResolution = new pc.Vec2( i5401[3], i5401[4] )
  i5400.m_ScreenMatchMode = i5401[5]
  i5400.m_MatchWidthOrHeight = i5401[6]
  i5400.m_PhysicalUnit = i5401[7]
  i5400.m_FallbackScreenDPI = i5401[8]
  i5400.m_DefaultSpriteDPI = i5401[9]
  i5400.m_DynamicPixelsPerUnit = i5401[10]
  i5400.m_PresetInfoIsWorld = !!i5401[11]
  return i5400
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5402 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5403 = data
  i5402.m_IgnoreReversedGraphics = !!i5403[0]
  i5402.m_BlockingObjects = i5403[1]
  i5402.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5403[2] )
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5405 = data
  i5404.cullTransparentMesh = !!i5405[0]
  return i5404
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5406 = root || request.c( 'UnityEngine.UI.Image' )
  var i5407 = data
  request.r(i5407[0], i5407[1], 0, i5406, 'm_Sprite')
  i5406.m_Type = i5407[2]
  i5406.m_PreserveAspect = !!i5407[3]
  i5406.m_FillCenter = !!i5407[4]
  i5406.m_FillMethod = i5407[5]
  i5406.m_FillAmount = i5407[6]
  i5406.m_FillClockwise = !!i5407[7]
  i5406.m_FillOrigin = i5407[8]
  i5406.m_UseSpriteMesh = !!i5407[9]
  i5406.m_PixelsPerUnitMultiplier = i5407[10]
  request.r(i5407[11], i5407[12], 0, i5406, 'm_Material')
  i5406.m_Maskable = !!i5407[13]
  i5406.m_Color = new pc.Color(i5407[14], i5407[15], i5407[16], i5407[17])
  i5406.m_RaycastTarget = !!i5407[18]
  i5406.m_RaycastPadding = new pc.Vec4( i5407[19], i5407[20], i5407[21], i5407[22] )
  return i5406
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i5408 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i5409 = data
  i5408.m_StartCorner = i5409[0]
  i5408.m_StartAxis = i5409[1]
  i5408.m_CellSize = new pc.Vec2( i5409[2], i5409[3] )
  i5408.m_Spacing = new pc.Vec2( i5409[4], i5409[5] )
  i5408.m_Constraint = i5409[6]
  i5408.m_ConstraintCount = i5409[7]
  i5408.m_Padding = UnityEngine.RectOffset.FromPaddings(i5409[8], i5409[9], i5409[10], i5409[11])
  i5408.m_ChildAlignment = i5409[12]
  return i5408
}

Deserializers["test"] = function (request, data, root) {
  var i5410 = root || request.c( 'test' )
  var i5411 = data
  request.r(i5411[0], i5411[1], 0, i5410, 'img')
  request.r(i5411[2], i5411[3], 0, i5410, 'sprite')
  request.r(i5411[4], i5411[5], 0, i5410, 'bg')
  i5410.x = i5411[6]
  request.r(i5411[7], i5411[8], 0, i5410, 'gm')
  i5410.scaleChangeTime = i5411[9]
  i5410.clickScale = i5411[10]
  i5410.clearScale = i5411[11]
  return i5410
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5412 = root || request.c( 'UnityEngine.UI.Button' )
  var i5413 = data
  i5412.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5413[0], i5412.m_OnClick)
  i5412.m_Navigation = request.d('UnityEngine.UI.Navigation', i5413[1], i5412.m_Navigation)
  i5412.m_Transition = i5413[2]
  i5412.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5413[3], i5412.m_Colors)
  i5412.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5413[4], i5412.m_SpriteState)
  i5412.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5413[5], i5412.m_AnimationTriggers)
  i5412.m_Interactable = !!i5413[6]
  request.r(i5413[7], i5413[8], 0, i5412, 'm_TargetGraphic')
  return i5412
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5414 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5415 = data
  i5414.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5415[0], i5414.m_PersistentCalls)
  return i5414
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5416 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5417 = data
  var i5419 = i5417[0]
  var i5418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5419.length; i += 1) {
    i5418.add(request.d('UnityEngine.Events.PersistentCall', i5419[i + 0]));
  }
  i5416.m_Calls = i5418
  return i5416
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5422 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5423 = data
  request.r(i5423[0], i5423[1], 0, i5422, 'm_Target')
  i5422.m_TargetAssemblyTypeName = i5423[2]
  i5422.m_MethodName = i5423[3]
  i5422.m_Mode = i5423[4]
  i5422.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5423[5], i5422.m_Arguments)
  i5422.m_CallState = i5423[6]
  return i5422
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5424 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5425 = data
  request.r(i5425[0], i5425[1], 0, i5424, 'm_ObjectArgument')
  i5424.m_ObjectArgumentAssemblyTypeName = i5425[2]
  i5424.m_IntArgument = i5425[3]
  i5424.m_FloatArgument = i5425[4]
  i5424.m_StringArgument = i5425[5]
  i5424.m_BoolArgument = !!i5425[6]
  return i5424
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5426 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5427 = data
  i5426.m_Mode = i5427[0]
  i5426.m_WrapAround = !!i5427[1]
  request.r(i5427[2], i5427[3], 0, i5426, 'm_SelectOnUp')
  request.r(i5427[4], i5427[5], 0, i5426, 'm_SelectOnDown')
  request.r(i5427[6], i5427[7], 0, i5426, 'm_SelectOnLeft')
  request.r(i5427[8], i5427[9], 0, i5426, 'm_SelectOnRight')
  return i5426
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5428 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5429 = data
  i5428.m_NormalColor = new pc.Color(i5429[0], i5429[1], i5429[2], i5429[3])
  i5428.m_HighlightedColor = new pc.Color(i5429[4], i5429[5], i5429[6], i5429[7])
  i5428.m_PressedColor = new pc.Color(i5429[8], i5429[9], i5429[10], i5429[11])
  i5428.m_SelectedColor = new pc.Color(i5429[12], i5429[13], i5429[14], i5429[15])
  i5428.m_DisabledColor = new pc.Color(i5429[16], i5429[17], i5429[18], i5429[19])
  i5428.m_ColorMultiplier = i5429[20]
  i5428.m_FadeDuration = i5429[21]
  return i5428
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5430 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5431 = data
  request.r(i5431[0], i5431[1], 0, i5430, 'm_HighlightedSprite')
  request.r(i5431[2], i5431[3], 0, i5430, 'm_PressedSprite')
  request.r(i5431[4], i5431[5], 0, i5430, 'm_SelectedSprite')
  request.r(i5431[6], i5431[7], 0, i5430, 'm_DisabledSprite')
  return i5430
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5432 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5433 = data
  i5432.m_NormalTrigger = i5433[0]
  i5432.m_HighlightedTrigger = i5433[1]
  i5432.m_PressedTrigger = i5433[2]
  i5432.m_SelectedTrigger = i5433[3]
  i5432.m_DisabledTrigger = i5433[4]
  return i5432
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i5434 = root || request.c( 'UnityEngine.UI.Slider' )
  var i5435 = data
  request.r(i5435[0], i5435[1], 0, i5434, 'm_FillRect')
  request.r(i5435[2], i5435[3], 0, i5434, 'm_HandleRect')
  i5434.m_Direction = i5435[4]
  i5434.m_MinValue = i5435[5]
  i5434.m_MaxValue = i5435[6]
  i5434.m_WholeNumbers = !!i5435[7]
  i5434.m_Value = i5435[8]
  i5434.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i5435[9], i5434.m_OnValueChanged)
  i5434.m_Navigation = request.d('UnityEngine.UI.Navigation', i5435[10], i5434.m_Navigation)
  i5434.m_Transition = i5435[11]
  i5434.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5435[12], i5434.m_Colors)
  i5434.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5435[13], i5434.m_SpriteState)
  i5434.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5435[14], i5434.m_AnimationTriggers)
  i5434.m_Interactable = !!i5435[15]
  request.r(i5435[16], i5435[17], 0, i5434, 'm_TargetGraphic')
  return i5434
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i5436 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i5437 = data
  i5436.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5437[0], i5436.m_PersistentCalls)
  return i5436
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5438 = root || request.c( 'UnityEngine.UI.Text' )
  var i5439 = data
  i5438.m_FontData = request.d('UnityEngine.UI.FontData', i5439[0], i5438.m_FontData)
  i5438.m_Text = i5439[1]
  request.r(i5439[2], i5439[3], 0, i5438, 'm_Material')
  i5438.m_Maskable = !!i5439[4]
  i5438.m_Color = new pc.Color(i5439[5], i5439[6], i5439[7], i5439[8])
  i5438.m_RaycastTarget = !!i5439[9]
  i5438.m_RaycastPadding = new pc.Vec4( i5439[10], i5439[11], i5439[12], i5439[13] )
  return i5438
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5440 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5441 = data
  request.r(i5441[0], i5441[1], 0, i5440, 'm_Font')
  i5440.m_FontSize = i5441[2]
  i5440.m_FontStyle = i5441[3]
  i5440.m_BestFit = !!i5441[4]
  i5440.m_MinSize = i5441[5]
  i5440.m_MaxSize = i5441[6]
  i5440.m_Alignment = i5441[7]
  i5440.m_AlignByGeometry = !!i5441[8]
  i5440.m_RichText = !!i5441[9]
  i5440.m_HorizontalOverflow = i5441[10]
  i5440.m_VerticalOverflow = i5441[11]
  i5440.m_LineSpacing = i5441[12]
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5443 = data
  request.r(i5443[0], i5443[1], 0, i5442, 'animatorController')
  request.r(i5443[2], i5443[3], 0, i5442, 'avatar')
  i5442.updateMode = i5443[4]
  i5442.hasTransformHierarchy = !!i5443[5]
  i5442.applyRootMotion = !!i5443[6]
  var i5445 = i5443[7]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 2) {
  request.r(i5445[i + 0], i5445[i + 1], 2, i5444, '')
  }
  i5442.humanBones = i5444
  i5442.enabled = !!i5443[8]
  return i5442
}

Deserializers["endCard"] = function (request, data, root) {
  var i5448 = root || request.c( 'endCard' )
  var i5449 = data
  request.r(i5449[0], i5449[1], 0, i5448, 'gm')
  return i5448
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i5450 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i5451 = data
  request.r(i5451[0], i5451[1], 0, i5450, 'skeletonDataAsset')
  request.r(i5451[2], i5451[3], 0, i5450, 'additiveMaterial')
  request.r(i5451[4], i5451[5], 0, i5450, 'multiplyMaterial')
  request.r(i5451[6], i5451[7], 0, i5450, 'screenMaterial')
  i5450.initialSkinName = i5451[8]
  i5450.initialFlipX = !!i5451[9]
  i5450.initialFlipY = !!i5451[10]
  i5450.startingAnimation = i5451[11]
  i5450.startingLoop = !!i5451[12]
  i5450.timeScale = i5451[13]
  i5450.freeze = !!i5451[14]
  i5450.layoutScaleMode = i5451[15]
  i5450.updateWhenInvisible = i5451[16]
  i5450.allowMultipleCanvasRenderers = !!i5451[17]
  var i5453 = i5451[18]
  var i5452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i5453.length; i += 2) {
  request.r(i5453[i + 0], i5453[i + 1], 1, i5452, '')
  }
  i5450.canvasRenderers = i5452
  i5450.enableSeparatorSlots = !!i5451[19]
  i5450.updateSeparatorPartLocation = !!i5451[20]
  i5450.updateSeparatorPartScale = !!i5451[21]
  i5450.disableMeshAssignmentOnOverride = !!i5451[22]
  i5450.referenceSize = new pc.Vec2( i5451[23], i5451[24] )
  i5450.referenceScale = i5451[25]
  i5450.rectTransformSize = new pc.Vec2( i5451[26], i5451[27] )
  i5450.editReferenceRect = !!i5451[28]
  var i5455 = i5451[29]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.push( i5455[i + 0] );
  }
  i5450.separatorSlotNames = i5454
  var i5457 = i5451[30]
  var i5456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5457.length; i += 2) {
  request.r(i5457[i + 0], i5457[i + 1], 1, i5456, '')
  }
  i5450.separatorParts = i5456
  i5450.meshGenerator = request.d('Spine.Unity.MeshGenerator', i5451[31], i5450.meshGenerator)
  i5450.updateTiming = i5451[32]
  i5450.unscaledTime = !!i5451[33]
  request.r(i5451[34], i5451[35], 0, i5450, 'm_Material')
  i5450.m_Maskable = !!i5451[36]
  i5450.m_Color = new pc.Color(i5451[37], i5451[38], i5451[39], i5451[40])
  i5450.m_RaycastTarget = !!i5451[41]
  i5450.m_RaycastPadding = new pc.Vec4( i5451[42], i5451[43], i5451[44], i5451[45] )
  return i5450
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i5464 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i5465 = data
  i5464.settings = request.d('Spine.Unity.MeshGenerator+Settings', i5465[0], i5464.settings)
  return i5464
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i5466 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i5467 = data
  i5466.useClipping = !!i5467[0]
  i5466.zSpacing = i5467[1]
  i5466.pmaVertexColors = !!i5467[2]
  i5466.tintBlack = !!i5467[3]
  i5466.canvasGroupTintBlack = !!i5467[4]
  i5466.calculateTangents = !!i5467[5]
  i5466.addNormals = !!i5467[6]
  i5466.immutableTriangles = !!i5467[7]
  return i5466
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i5468 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i5469 = data
  request.r(i5469[0], i5469[1], 0, i5468, 'm_Material')
  i5468.m_Maskable = !!i5469[2]
  i5468.m_Color = new pc.Color(i5469[3], i5469[4], i5469[5], i5469[6])
  i5468.m_RaycastTarget = !!i5469[7]
  i5468.m_RaycastPadding = new pc.Vec4( i5469[8], i5469[9], i5469[10], i5469[11] )
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5471 = data
  i5470.m_Alpha = i5471[0]
  i5470.m_Interactable = !!i5471[1]
  i5470.m_BlocksRaycasts = !!i5471[2]
  i5470.m_IgnoreParentGroups = !!i5471[3]
  i5470.enabled = !!i5471[4]
  return i5470
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5472 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5473 = data
  request.r(i5473[0], i5473[1], 0, i5472, 'm_FirstSelected')
  i5472.m_sendNavigationEvents = !!i5473[2]
  i5472.m_DragThreshold = i5473[3]
  return i5472
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5474 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5475 = data
  i5474.m_HorizontalAxis = i5475[0]
  i5474.m_VerticalAxis = i5475[1]
  i5474.m_SubmitButton = i5475[2]
  i5474.m_CancelButton = i5475[3]
  i5474.m_InputActionsPerSecond = i5475[4]
  i5474.m_RepeatDelay = i5475[5]
  i5474.m_ForceModuleActive = !!i5475[6]
  i5474.m_SendPointerHoverToParent = !!i5475[7]
  return i5474
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i5476 = root || request.c( 'gamemanager' )
  var i5477 = data
  var i5479 = i5477[0]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 2) {
  request.r(i5479[i + 0], i5479[i + 1], 2, i5478, '')
  }
  i5476.sprites = i5478
  var i5481 = i5477[1]
  var i5480 = []
  for(var i = 0; i < i5481.length; i += 2) {
  request.r(i5481[i + 0], i5481[i + 1], 2, i5480, '')
  }
  i5476.t = i5480
  var i5483 = i5477[2]
  var i5482 = []
  for(var i = 0; i < i5483.length; i += 2) {
  request.r(i5483[i + 0], i5483[i + 1], 2, i5482, '')
  }
  i5476.tests = i5482
  request.r(i5477[3], i5477[4], 0, i5476, 'playerHpbar')
  request.r(i5477[5], i5477[6], 0, i5476, 'dmg')
  i5476.hpMax = i5477[7]
  i5476.enemyPower = i5477[8]
  i5476.playerPower = i5477[9]
  i5476.playerPowerMul = i5477[10]
  i5476.attackSpeed = i5477[11]
  i5476.attackSpeedMul = i5477[12]
  request.r(i5477[13], i5477[14], 0, i5476, 'endCover')
  i5476.curPlayerPower = System.Int64(i5477[15])
  request.r(i5477[16], i5477[17], 0, i5476, 'ani')
  return i5476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5489 = data
  i5488.enabled = !!i5489[0]
  request.r(i5489[1], i5489[2], 0, i5488, 'sharedMaterial')
  var i5491 = i5489[3]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 2) {
  request.r(i5491[i + 0], i5491[i + 1], 2, i5490, '')
  }
  i5488.sharedMaterials = i5490
  i5488.receiveShadows = !!i5489[4]
  i5488.shadowCastingMode = i5489[5]
  i5488.sortingLayerID = i5489[6]
  i5488.sortingOrder = i5489[7]
  i5488.lightmapIndex = i5489[8]
  i5488.lightmapSceneIndex = i5489[9]
  i5488.lightmapScaleOffset = new pc.Vec4( i5489[10], i5489[11], i5489[12], i5489[13] )
  i5488.lightProbeUsage = i5489[14]
  i5488.reflectionProbeUsage = i5489[15]
  i5488.color = new pc.Color(i5489[16], i5489[17], i5489[18], i5489[19])
  request.r(i5489[20], i5489[21], 0, i5488, 'sprite')
  i5488.flipX = !!i5489[22]
  i5488.flipY = !!i5489[23]
  i5488.drawMode = i5489[24]
  i5488.size = new pc.Vec2( i5489[25], i5489[26] )
  i5488.tileMode = i5489[27]
  i5488.adaptiveModeThreshold = i5489[28]
  i5488.maskInteraction = i5489[29]
  i5488.spriteSortPoint = i5489[30]
  return i5488
}

Deserializers["enemy"] = function (request, data, root) {
  var i5494 = root || request.c( 'enemy' )
  var i5495 = data
  request.r(i5495[0], i5495[1], 0, i5494, 'gm')
  return i5494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5497 = data
  request.r(i5497[0], i5497[1], 0, i5496, 'additionalVertexStreams')
  i5496.enabled = !!i5497[2]
  request.r(i5497[3], i5497[4], 0, i5496, 'sharedMaterial')
  var i5499 = i5497[5]
  var i5498 = []
  for(var i = 0; i < i5499.length; i += 2) {
  request.r(i5499[i + 0], i5499[i + 1], 2, i5498, '')
  }
  i5496.sharedMaterials = i5498
  i5496.receiveShadows = !!i5497[6]
  i5496.shadowCastingMode = i5497[7]
  i5496.sortingLayerID = i5497[8]
  i5496.sortingOrder = i5497[9]
  i5496.lightmapIndex = i5497[10]
  i5496.lightmapSceneIndex = i5497[11]
  i5496.lightmapScaleOffset = new pc.Vec4( i5497[12], i5497[13], i5497[14], i5497[15] )
  i5496.lightProbeUsage = i5497[16]
  i5496.reflectionProbeUsage = i5497[17]
  return i5496
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i5500 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i5501 = data
  request.r(i5501[0], i5501[1], 0, i5500, 'skeletonDataAsset')
  i5500.initialSkinName = i5501[2]
  i5500.fixPrefabOverrideViaMeshFilter = i5501[3]
  i5500.initialFlipX = !!i5501[4]
  i5500.initialFlipY = !!i5501[5]
  i5500.updateWhenInvisible = i5501[6]
  i5500.zSpacing = i5501[7]
  i5500.useClipping = !!i5501[8]
  i5500.immutableTriangles = !!i5501[9]
  i5500.pmaVertexColors = !!i5501[10]
  i5500.clearStateOnDisable = !!i5501[11]
  i5500.tintBlack = !!i5501[12]
  i5500.singleSubmesh = !!i5501[13]
  i5500.fixDrawOrder = !!i5501[14]
  i5500.addNormals = !!i5501[15]
  i5500.calculateTangents = !!i5501[16]
  i5500.maskInteraction = i5501[17]
  i5500.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i5501[18], i5500.maskMaterials)
  i5500.disableRenderingOnOverride = !!i5501[19]
  i5500.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i5501[20], i5500.translator)
  i5500.updateTiming = i5501[21]
  var i5503 = i5501[22]
  var i5502 = []
  for(var i = 0; i < i5503.length; i += 1) {
    i5502.push( i5503[i + 0] );
  }
  i5500.separatorSlotNames = i5502
  return i5500
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i5504 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i5505 = data
  var i5507 = i5505[0]
  var i5506 = []
  for(var i = 0; i < i5507.length; i += 2) {
  request.r(i5507[i + 0], i5507[i + 1], 2, i5506, '')
  }
  i5504.materialsMaskDisabled = i5506
  var i5509 = i5505[1]
  var i5508 = []
  for(var i = 0; i < i5509.length; i += 2) {
  request.r(i5509[i + 0], i5509[i + 1], 2, i5508, '')
  }
  i5504.materialsInsideMask = i5508
  var i5511 = i5505[2]
  var i5510 = []
  for(var i = 0; i < i5511.length; i += 2) {
  request.r(i5511[i + 0], i5511[i + 1], 2, i5510, '')
  }
  i5504.materialsOutsideMask = i5510
  return i5504
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i5512 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i5513 = data
  i5512.autoReset = !!i5513[0]
  i5512.useCustomMixMode = !!i5513[1]
  var i5515 = i5513[2]
  var i5514 = []
  for(var i = 0; i < i5515.length; i += 1) {
    i5514.push( i5515[i + 0] );
  }
  i5512.layerMixModes = i5514
  var i5517 = i5513[3]
  var i5516 = []
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.push( i5517[i + 0] );
  }
  i5512.layerBlendModes = i5516
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5523 = data
  request.r(i5523[0], i5523[1], 0, i5522, 'sharedMesh')
  return i5522
}

Deserializers["player"] = function (request, data, root) {
  var i5524 = root || request.c( 'player' )
  var i5525 = data
  request.r(i5525[0], i5525[1], 0, i5524, 'gm')
  return i5524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5527 = data
  i5526.ambientIntensity = i5527[0]
  i5526.reflectionIntensity = i5527[1]
  i5526.ambientMode = i5527[2]
  i5526.ambientLight = new pc.Color(i5527[3], i5527[4], i5527[5], i5527[6])
  i5526.ambientSkyColor = new pc.Color(i5527[7], i5527[8], i5527[9], i5527[10])
  i5526.ambientGroundColor = new pc.Color(i5527[11], i5527[12], i5527[13], i5527[14])
  i5526.ambientEquatorColor = new pc.Color(i5527[15], i5527[16], i5527[17], i5527[18])
  i5526.fogColor = new pc.Color(i5527[19], i5527[20], i5527[21], i5527[22])
  i5526.fogEndDistance = i5527[23]
  i5526.fogStartDistance = i5527[24]
  i5526.fogDensity = i5527[25]
  i5526.fog = !!i5527[26]
  request.r(i5527[27], i5527[28], 0, i5526, 'skybox')
  i5526.fogMode = i5527[29]
  var i5529 = i5527[30]
  var i5528 = []
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5529[i + 0]) );
  }
  i5526.lightmaps = i5528
  i5526.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5527[31], i5526.lightProbes)
  i5526.lightmapsMode = i5527[32]
  i5526.mixedBakeMode = i5527[33]
  i5526.environmentLightingMode = i5527[34]
  i5526.ambientProbe = new pc.SphericalHarmonicsL2(i5527[35])
  i5526.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5527[36])
  i5526.useReferenceAmbientProbe = !!i5527[37]
  request.r(i5527[38], i5527[39], 0, i5526, 'customReflection')
  request.r(i5527[40], i5527[41], 0, i5526, 'defaultReflection')
  i5526.defaultReflectionMode = i5527[42]
  i5526.defaultReflectionResolution = i5527[43]
  i5526.sunLightObjectId = i5527[44]
  i5526.pixelLightCount = i5527[45]
  i5526.defaultReflectionHDR = !!i5527[46]
  i5526.hasLightDataAsset = !!i5527[47]
  i5526.hasManualGenerate = !!i5527[48]
  return i5526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5533 = data
  request.r(i5533[0], i5533[1], 0, i5532, 'lightmapColor')
  request.r(i5533[2], i5533[3], 0, i5532, 'lightmapDirection')
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5534 = root || new UnityEngine.LightProbes()
  var i5535 = data
  return i5534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5543 = data
  var i5545 = i5543[0]
  var i5544 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5545.length; i += 1) {
    i5544.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5545[i + 0]));
  }
  i5542.ShaderCompilationErrors = i5544
  i5542.name = i5543[1]
  i5542.guid = i5543[2]
  var i5547 = i5543[3]
  var i5546 = []
  for(var i = 0; i < i5547.length; i += 1) {
    i5546.push( i5547[i + 0] );
  }
  i5542.shaderDefinedKeywords = i5546
  var i5549 = i5543[4]
  var i5548 = []
  for(var i = 0; i < i5549.length; i += 1) {
    i5548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5549[i + 0]) );
  }
  i5542.passes = i5548
  var i5551 = i5543[5]
  var i5550 = []
  for(var i = 0; i < i5551.length; i += 1) {
    i5550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5551[i + 0]) );
  }
  i5542.usePasses = i5550
  var i5553 = i5543[6]
  var i5552 = []
  for(var i = 0; i < i5553.length; i += 1) {
    i5552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5553[i + 0]) );
  }
  i5542.defaultParameterValues = i5552
  request.r(i5543[7], i5543[8], 0, i5542, 'unityFallbackShader')
  i5542.readDepth = !!i5543[9]
  i5542.isCreatedByShaderGraph = !!i5543[10]
  i5542.usedBatchUniforms = i5543[11]
  return i5542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5557 = data
  i5556.shaderName = i5557[0]
  i5556.errorMessage = i5557[1]
  return i5556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5560 = root || new pc.UnityShaderPass()
  var i5561 = data
  i5560.id = i5561[0]
  i5560.subShaderIndex = i5561[1]
  i5560.name = i5561[2]
  i5560.passType = i5561[3]
  i5560.grabPassTextureName = i5561[4]
  i5560.usePass = !!i5561[5]
  i5560.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[6], i5560.zTest)
  i5560.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[7], i5560.zWrite)
  i5560.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[8], i5560.culling)
  i5560.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5561[9], i5560.blending)
  i5560.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5561[10], i5560.alphaBlending)
  i5560.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[11], i5560.colorWriteMask)
  i5560.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[12], i5560.offsetUnits)
  i5560.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[13], i5560.offsetFactor)
  i5560.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[14], i5560.stencilRef)
  i5560.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[15], i5560.stencilReadMask)
  i5560.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5561[16], i5560.stencilWriteMask)
  i5560.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5561[17], i5560.stencilOp)
  i5560.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5561[18], i5560.stencilOpFront)
  i5560.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5561[19], i5560.stencilOpBack)
  var i5563 = i5561[20]
  var i5562 = []
  for(var i = 0; i < i5563.length; i += 1) {
    i5562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5563[i + 0]) );
  }
  i5560.tags = i5562
  var i5565 = i5561[21]
  var i5564 = []
  for(var i = 0; i < i5565.length; i += 1) {
    i5564.push( i5565[i + 0] );
  }
  i5560.passDefinedKeywords = i5564
  var i5567 = i5561[22]
  var i5566 = []
  for(var i = 0; i < i5567.length; i += 1) {
    i5566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5567[i + 0]) );
  }
  i5560.passDefinedKeywordGroups = i5566
  var i5569 = i5561[23]
  var i5568 = []
  for(var i = 0; i < i5569.length; i += 1) {
    i5568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5569[i + 0]) );
  }
  i5560.variants = i5568
  var i5571 = i5561[24]
  var i5570 = []
  for(var i = 0; i < i5571.length; i += 1) {
    i5570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5571[i + 0]) );
  }
  i5560.excludedVariants = i5570
  i5560.hasDepthReader = !!i5561[25]
  return i5560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5573 = data
  i5572.val = i5573[0]
  i5572.name = i5573[1]
  return i5572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5575 = data
  i5574.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5575[0], i5574.src)
  i5574.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5575[1], i5574.dst)
  i5574.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5575[2], i5574.op)
  return i5574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5577 = data
  i5576.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5577[0], i5576.pass)
  i5576.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5577[1], i5576.fail)
  i5576.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5577[2], i5576.zFail)
  i5576.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5577[3], i5576.comp)
  return i5576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5581 = data
  i5580.name = i5581[0]
  i5580.value = i5581[1]
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5585 = data
  var i5587 = i5585[0]
  var i5586 = []
  for(var i = 0; i < i5587.length; i += 1) {
    i5586.push( i5587[i + 0] );
  }
  i5584.keywords = i5586
  i5584.hasDiscard = !!i5585[1]
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5591 = data
  i5590.passId = i5591[0]
  i5590.subShaderIndex = i5591[1]
  var i5593 = i5591[2]
  var i5592 = []
  for(var i = 0; i < i5593.length; i += 1) {
    i5592.push( i5593[i + 0] );
  }
  i5590.keywords = i5592
  i5590.vertexProgram = i5591[3]
  i5590.fragmentProgram = i5591[4]
  i5590.readDepth = !!i5591[5]
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5597 = data
  request.r(i5597[0], i5597[1], 0, i5596, 'shader')
  i5596.pass = i5597[2]
  return i5596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5601 = data
  i5600.name = i5601[0]
  i5600.type = i5601[1]
  i5600.value = new pc.Vec4( i5601[2], i5601[3], i5601[4], i5601[5] )
  i5600.textureValue = i5601[6]
  return i5600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5603 = data
  i5602.name = i5603[0]
  request.r(i5603[1], i5603[2], 0, i5602, 'texture')
  i5602.aabb = i5603[3]
  i5602.vertices = i5603[4]
  i5602.triangles = i5603[5]
  i5602.textureRect = UnityEngine.Rect.MinMaxRect(i5603[6], i5603[7], i5603[8], i5603[9])
  i5602.packedRect = UnityEngine.Rect.MinMaxRect(i5603[10], i5603[11], i5603[12], i5603[13])
  i5602.border = new pc.Vec4( i5603[14], i5603[15], i5603[16], i5603[17] )
  i5602.transparency = i5603[18]
  i5602.bounds = i5603[19]
  i5602.pixelsPerUnit = i5603[20]
  i5602.textureWidth = i5603[21]
  i5602.textureHeight = i5603[22]
  i5602.nativeSize = new pc.Vec2( i5603[23], i5603[24] )
  i5602.pivot = new pc.Vec2( i5603[25], i5603[26] )
  i5602.textureRectOffset = new pc.Vec2( i5603[27], i5603[28] )
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5605 = data
  i5604.name = i5605[0]
  i5604.wrapMode = i5605[1]
  i5604.isLooping = !!i5605[2]
  i5604.length = i5605[3]
  var i5607 = i5605[4]
  var i5606 = []
  for(var i = 0; i < i5607.length; i += 1) {
    i5606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5607[i + 0]) );
  }
  i5604.curves = i5606
  var i5609 = i5605[5]
  var i5608 = []
  for(var i = 0; i < i5609.length; i += 1) {
    i5608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5609[i + 0]) );
  }
  i5604.events = i5608
  i5604.halfPrecision = !!i5605[6]
  i5604.frameRate = i5605[7]
  i5604.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5605[8], i5604.localBounds)
  i5604.hasMuscleCurves = !!i5605[9]
  var i5611 = i5605[10]
  var i5610 = []
  for(var i = 0; i < i5611.length; i += 1) {
    i5610.push( i5611[i + 0] );
  }
  i5604.clipMuscleConstant = i5610
  i5604.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5605[11], i5604.clipBindingConstant)
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5615 = data
  i5614.path = i5615[0]
  i5614.componentType = i5615[1]
  i5614.property = i5615[2]
  i5614.keys = i5615[3]
  var i5617 = i5615[4]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 1) {
    i5616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5617[i + 0]) );
  }
  i5614.objectReferenceKeys = i5616
  return i5614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5621 = data
  i5620.time = i5621[0]
  request.r(i5621[1], i5621[2], 0, i5620, 'value')
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5625 = data
  i5624.functionName = i5625[0]
  i5624.floatParameter = i5625[1]
  i5624.intParameter = i5625[2]
  i5624.stringParameter = i5625[3]
  request.r(i5625[4], i5625[5], 0, i5624, 'objectReferenceParameter')
  i5624.time = i5625[6]
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5627 = data
  i5626.center = new pc.Vec3( i5627[0], i5627[1], i5627[2] )
  i5626.extends = new pc.Vec3( i5627[3], i5627[4], i5627[5] )
  return i5626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5631 = data
  var i5633 = i5631[0]
  var i5632 = []
  for(var i = 0; i < i5633.length; i += 1) {
    i5632.push( i5633[i + 0] );
  }
  i5630.genericBindings = i5632
  var i5635 = i5631[1]
  var i5634 = []
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.push( i5635[i + 0] );
  }
  i5630.pptrCurveMapping = i5634
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5637 = data
  i5636.name = i5637[0]
  i5636.ascent = i5637[1]
  i5636.originalLineHeight = i5637[2]
  i5636.fontSize = i5637[3]
  var i5639 = i5637[4]
  var i5638 = []
  for(var i = 0; i < i5639.length; i += 1) {
    i5638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5639[i + 0]) );
  }
  i5636.characterInfo = i5638
  request.r(i5637[5], i5637[6], 0, i5636, 'texture')
  i5636.originalFontSize = i5637[7]
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5643 = data
  i5642.index = i5643[0]
  i5642.advance = i5643[1]
  i5642.bearing = i5643[2]
  i5642.glyphWidth = i5643[3]
  i5642.glyphHeight = i5643[4]
  i5642.minX = i5643[5]
  i5642.maxX = i5643[6]
  i5642.minY = i5643[7]
  i5642.maxY = i5643[8]
  i5642.uvBottomLeftX = i5643[9]
  i5642.uvBottomLeftY = i5643[10]
  i5642.uvBottomRightX = i5643[11]
  i5642.uvBottomRightY = i5643[12]
  i5642.uvTopLeftX = i5643[13]
  i5642.uvTopLeftY = i5643[14]
  i5642.uvTopRightX = i5643[15]
  i5642.uvTopRightY = i5643[16]
  return i5642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5645 = data
  i5644.name = i5645[0]
  var i5647 = i5645[1]
  var i5646 = []
  for(var i = 0; i < i5647.length; i += 1) {
    i5646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5647[i + 0]) );
  }
  i5644.states = i5646
  var i5649 = i5645[2]
  var i5648 = []
  for(var i = 0; i < i5649.length; i += 1) {
    i5648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5649[i + 0]) );
  }
  i5644.layers = i5648
  var i5651 = i5645[3]
  var i5650 = []
  for(var i = 0; i < i5651.length; i += 1) {
    i5650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5651[i + 0]) );
  }
  i5644.parameters = i5650
  i5644.animationClips = i5645[4]
  i5644.HasSubStateMachines = !!i5645[5]
  i5644.avatarUnsupported = i5645[6]
  return i5644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5655 = data
  i5654.cycleOffset = i5655[0]
  i5654.cycleOffsetParameter = i5655[1]
  i5654.cycleOffsetParameterActive = !!i5655[2]
  i5654.mirror = !!i5655[3]
  i5654.mirrorParameter = i5655[4]
  i5654.mirrorParameterActive = !!i5655[5]
  i5654.motionId = i5655[6]
  i5654.nameHash = i5655[7]
  i5654.fullPathHash = i5655[8]
  i5654.speed = i5655[9]
  i5654.speedParameter = i5655[10]
  i5654.speedParameterActive = !!i5655[11]
  i5654.tag = i5655[12]
  i5654.name = i5655[13]
  i5654.layer = i5655[14]
  i5654.writeDefaultValues = !!i5655[15]
  var i5657 = i5655[16]
  var i5656 = []
  for(var i = 0; i < i5657.length; i += 1) {
    i5656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5657[i + 0]) );
  }
  i5654.transitions = i5656
  var i5659 = i5655[17]
  var i5658 = []
  for(var i = 0; i < i5659.length; i += 2) {
  request.r(i5659[i + 0], i5659[i + 1], 2, i5658, '')
  }
  i5654.behaviours = i5658
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5663 = data
  i5662.fullPath = i5663[0]
  i5662.canTransitionToSelf = !!i5663[1]
  i5662.duration = i5663[2]
  i5662.exitTime = i5663[3]
  i5662.hasExitTime = !!i5663[4]
  i5662.hasFixedDuration = !!i5663[5]
  i5662.interruptionSource = i5663[6]
  i5662.offset = i5663[7]
  i5662.orderedInterruption = !!i5663[8]
  i5662.destinationStateNameHash = i5663[9]
  i5662.destinationStateMachineId = i5663[10]
  i5662.isExit = !!i5663[11]
  i5662.mute = !!i5663[12]
  i5662.solo = !!i5663[13]
  var i5665 = i5663[14]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5665[i + 0]) );
  }
  i5662.conditions = i5664
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5671 = data
  i5670.blendingMode = i5671[0]
  i5670.defaultWeight = i5671[1]
  i5670.name = i5671[2]
  i5670.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5671[3], i5670.stateMachine)
  return i5670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5673 = data
  i5672.id = i5673[0]
  i5672.defaultStateNameHash = i5673[1]
  var i5675 = i5673[2]
  var i5674 = []
  for(var i = 0; i < i5675.length; i += 1) {
    i5674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5675[i + 0]) );
  }
  i5672.entryTransitions = i5674
  var i5677 = i5673[3]
  var i5676 = []
  for(var i = 0; i < i5677.length; i += 1) {
    i5676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5677[i + 0]) );
  }
  i5672.anyStateTransitions = i5676
  return i5672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5681 = data
  i5680.destinationStateNameHash = i5681[0]
  i5680.destinationStateMachineId = i5681[1]
  i5680.isExit = !!i5681[2]
  i5680.mute = !!i5681[3]
  i5680.solo = !!i5681[4]
  var i5683 = i5681[5]
  var i5682 = []
  for(var i = 0; i < i5683.length; i += 1) {
    i5682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5683[i + 0]) );
  }
  i5680.conditions = i5682
  return i5680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5687 = data
  i5686.defaultBool = !!i5687[0]
  i5686.defaultFloat = i5687[1]
  i5686.defaultInt = i5687[2]
  i5686.name = i5687[3]
  i5686.nameHash = i5687[4]
  i5686.type = i5687[5]
  return i5686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5691 = data
  i5690.mode = i5691[0]
  i5690.parameter = i5691[1]
  i5690.threshold = i5691[2]
  return i5690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5693 = data
  i5692.name = i5693[0]
  i5692.bytes64 = i5693[1]
  i5692.data = i5693[2]
  return i5692
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i5694 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i5695 = data
  var i5697 = i5695[0]
  var i5696 = []
  for(var i = 0; i < i5697.length; i += 2) {
  request.r(i5697[i + 0], i5697[i + 1], 2, i5696, '')
  }
  i5694.atlasAssets = i5696
  i5694.scale = i5695[1]
  request.r(i5695[2], i5695[3], 0, i5694, 'skeletonJSON')
  i5694.isUpgradingBlendModeMaterials = !!i5695[4]
  i5694.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i5695[5], i5694.blendModeMaterials)
  var i5699 = i5695[6]
  var i5698 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i5699.length; i += 2) {
  request.r(i5699[i + 0], i5699[i + 1], 1, i5698, '')
  }
  i5694.skeletonDataModifiers = i5698
  var i5701 = i5695[7]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( i5701[i + 0] );
  }
  i5694.fromAnimation = i5700
  var i5703 = i5695[8]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.push( i5703[i + 0] );
  }
  i5694.toAnimation = i5702
  i5694.duration = i5695[9]
  i5694.defaultMix = i5695[10]
  request.r(i5695[11], i5695[12], 0, i5694, 'controller')
  return i5694
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i5706 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i5707 = data
  i5706.applyAdditiveMaterial = !!i5707[0]
  var i5709 = i5707[1]
  var i5708 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5709.length; i += 1) {
    i5708.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5709[i + 0]));
  }
  i5706.additiveMaterials = i5708
  var i5711 = i5707[2]
  var i5710 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5711.length; i += 1) {
    i5710.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5711[i + 0]));
  }
  i5706.multiplyMaterials = i5710
  var i5713 = i5707[3]
  var i5712 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5713.length; i += 1) {
    i5712.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5713[i + 0]));
  }
  i5706.screenMaterials = i5712
  i5706.requiresBlendModeMaterials = !!i5707[4]
  return i5706
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i5716 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i5717 = data
  i5716.pageName = i5717[0]
  request.r(i5717[1], i5717[2], 0, i5716, 'material')
  return i5716
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i5720 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i5721 = data
  request.r(i5721[0], i5721[1], 0, i5720, 'atlasFile')
  var i5723 = i5721[2]
  var i5722 = []
  for(var i = 0; i < i5723.length; i += 2) {
  request.r(i5723[i + 0], i5723[i + 1], 2, i5722, '')
  }
  i5720.materials = i5722
  i5720.textureLoadingMode = i5721[3]
  request.r(i5721[4], i5721[5], 0, i5720, 'onDemandTextureLoader')
  return i5720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5725 = data
  var i5727 = i5725[0]
  var i5726 = []
  for(var i = 0; i < i5727.length; i += 1) {
    i5726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5727[i + 0]) );
  }
  i5724.files = i5726
  i5724.componentToPrefabIds = i5725[1]
  return i5724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5731 = data
  i5730.path = i5731[0]
  request.r(i5731[1], i5731[2], 0, i5730, 'unityObject')
  return i5730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5733 = data
  var i5735 = i5733[0]
  var i5734 = []
  for(var i = 0; i < i5735.length; i += 1) {
    i5734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5735[i + 0]) );
  }
  i5732.scriptsExecutionOrder = i5734
  var i5737 = i5733[1]
  var i5736 = []
  for(var i = 0; i < i5737.length; i += 1) {
    i5736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5737[i + 0]) );
  }
  i5732.sortingLayers = i5736
  var i5739 = i5733[2]
  var i5738 = []
  for(var i = 0; i < i5739.length; i += 1) {
    i5738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5739[i + 0]) );
  }
  i5732.cullingLayers = i5738
  i5732.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5733[3], i5732.timeSettings)
  i5732.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5733[4], i5732.physicsSettings)
  i5732.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5733[5], i5732.physics2DSettings)
  i5732.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5733[6], i5732.qualitySettings)
  i5732.enableRealtimeShadows = !!i5733[7]
  i5732.enableAutoInstancing = !!i5733[8]
  i5732.enableDynamicBatching = !!i5733[9]
  i5732.lightmapEncodingQuality = i5733[10]
  i5732.desiredColorSpace = i5733[11]
  var i5741 = i5733[12]
  var i5740 = []
  for(var i = 0; i < i5741.length; i += 1) {
    i5740.push( i5741[i + 0] );
  }
  i5732.allTags = i5740
  return i5732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5745 = data
  i5744.name = i5745[0]
  i5744.value = i5745[1]
  return i5744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5749 = data
  i5748.id = i5749[0]
  i5748.name = i5749[1]
  i5748.value = i5749[2]
  return i5748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5753 = data
  i5752.id = i5753[0]
  i5752.name = i5753[1]
  return i5752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5755 = data
  i5754.fixedDeltaTime = i5755[0]
  i5754.maximumDeltaTime = i5755[1]
  i5754.timeScale = i5755[2]
  i5754.maximumParticleTimestep = i5755[3]
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5757 = data
  i5756.gravity = new pc.Vec3( i5757[0], i5757[1], i5757[2] )
  i5756.defaultSolverIterations = i5757[3]
  i5756.bounceThreshold = i5757[4]
  i5756.autoSyncTransforms = !!i5757[5]
  i5756.autoSimulation = !!i5757[6]
  var i5759 = i5757[7]
  var i5758 = []
  for(var i = 0; i < i5759.length; i += 1) {
    i5758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5759[i + 0]) );
  }
  i5756.collisionMatrix = i5758
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5763 = data
  i5762.enabled = !!i5763[0]
  i5762.layerId = i5763[1]
  i5762.otherLayerId = i5763[2]
  return i5762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5765 = data
  request.r(i5765[0], i5765[1], 0, i5764, 'material')
  i5764.gravity = new pc.Vec2( i5765[2], i5765[3] )
  i5764.positionIterations = i5765[4]
  i5764.velocityIterations = i5765[5]
  i5764.velocityThreshold = i5765[6]
  i5764.maxLinearCorrection = i5765[7]
  i5764.maxAngularCorrection = i5765[8]
  i5764.maxTranslationSpeed = i5765[9]
  i5764.maxRotationSpeed = i5765[10]
  i5764.baumgarteScale = i5765[11]
  i5764.baumgarteTOIScale = i5765[12]
  i5764.timeToSleep = i5765[13]
  i5764.linearSleepTolerance = i5765[14]
  i5764.angularSleepTolerance = i5765[15]
  i5764.defaultContactOffset = i5765[16]
  i5764.autoSimulation = !!i5765[17]
  i5764.queriesHitTriggers = !!i5765[18]
  i5764.queriesStartInColliders = !!i5765[19]
  i5764.callbacksOnDisable = !!i5765[20]
  i5764.reuseCollisionCallbacks = !!i5765[21]
  i5764.autoSyncTransforms = !!i5765[22]
  var i5767 = i5765[23]
  var i5766 = []
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5767[i + 0]) );
  }
  i5764.collisionMatrix = i5766
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5771 = data
  i5770.enabled = !!i5771[0]
  i5770.layerId = i5771[1]
  i5770.otherLayerId = i5771[2]
  return i5770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5773 = data
  var i5775 = i5773[0]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 1) {
    i5774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5775[i + 0]) );
  }
  i5772.qualityLevels = i5774
  var i5777 = i5773[1]
  var i5776 = []
  for(var i = 0; i < i5777.length; i += 1) {
    i5776.push( i5777[i + 0] );
  }
  i5772.names = i5776
  i5772.shadows = i5773[2]
  i5772.anisotropicFiltering = i5773[3]
  i5772.antiAliasing = i5773[4]
  i5772.lodBias = i5773[5]
  i5772.shadowCascades = i5773[6]
  i5772.shadowDistance = i5773[7]
  i5772.shadowmaskMode = i5773[8]
  i5772.shadowProjection = i5773[9]
  i5772.shadowResolution = i5773[10]
  i5772.softParticles = !!i5773[11]
  i5772.softVegetation = !!i5773[12]
  i5772.activeColorSpace = i5773[13]
  i5772.desiredColorSpace = i5773[14]
  i5772.masterTextureLimit = i5773[15]
  i5772.maxQueuedFrames = i5773[16]
  i5772.particleRaycastBudget = i5773[17]
  i5772.pixelLightCount = i5773[18]
  i5772.realtimeReflectionProbes = !!i5773[19]
  i5772.shadowCascade2Split = i5773[20]
  i5772.shadowCascade4Split = new pc.Vec3( i5773[21], i5773[22], i5773[23] )
  i5772.streamingMipmapsActive = !!i5773[24]
  i5772.vSyncCount = i5773[25]
  i5772.asyncUploadBufferSize = i5773[26]
  i5772.asyncUploadTimeSlice = i5773[27]
  i5772.billboardsFaceCameraPosition = !!i5773[28]
  i5772.shadowNearPlaneOffset = i5773[29]
  i5772.streamingMipmapsMemoryBudget = i5773[30]
  i5772.maximumLODLevel = i5773[31]
  i5772.streamingMipmapsAddAllCameras = !!i5773[32]
  i5772.streamingMipmapsMaxLevelReduction = i5773[33]
  i5772.streamingMipmapsRenderersPerFrame = i5773[34]
  i5772.resolutionScalingFixedDPIFactor = i5773[35]
  i5772.streamingMipmapsMaxFileIORequests = i5773[36]
  i5772.currentQualityLevel = i5773[37]
  return i5772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5783 = data
  i5782.weight = i5783[0]
  i5782.vertices = i5783[1]
  i5782.normals = i5783[2]
  i5782.tangents = i5783[3]
  return i5782
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[34],"76":[77],"78":[77],"6":[5],"79":[80],"81":[5],"28":[10,5],"82":[34],"25":[10,5],"35":[22,34],"83":[34],"84":[34,36],"85":[53],"86":[61],"87":[80],"88":[89],"90":[5],"91":[34,5],"92":[5,10],"93":[5],"94":[10,5],"95":[34],"96":[10,5],"97":[5],"98":[99],"100":[5],"101":[5],"9":[6],"11":[10,5],"102":[5],"8":[6],"103":[5],"13":[5],"104":[5],"105":[5],"106":[5],"107":[5],"108":[5],"109":[5],"110":[5],"111":[10,5],"112":[5],"113":[5],"114":[5],"19":[5],"20":[10,5],"115":[5],"116":[30],"117":[30],"31":[30],"118":[30],"119":[3],"120":[3],"121":[99],"122":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GridLayoutGroup","UnityEngine.MonoBehaviour","test","UnityEngine.GameObject","gamemanager","UnityEngine.UI.Button","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","endCard","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","enemy","UnityEngine.MeshRenderer","Spine.Unity.SkeletonMecanim","UnityEngine.MeshFilter","UnityEngine.Mesh","player","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.19f1";

Deserializers.productName = "My project (1)";

Deserializers.lunaInitializationTime = "05/12/2024 23:50:46";

Deserializers.lunaDaysRunning = "0.6";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1699";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3646";

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

Deserializers.buildID = "3514fd3c-fef7-4340-a816-885c4ed214a5";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

