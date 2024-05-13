var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6266 = root || request.c( 'UnityEngine.JointSpring' )
  var i6267 = data
  i6266.spring = i6267[0]
  i6266.damper = i6267[1]
  i6266.targetPosition = i6267[2]
  return i6266
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6268 = root || request.c( 'UnityEngine.JointMotor' )
  var i6269 = data
  i6268.m_TargetVelocity = i6269[0]
  i6268.m_Force = i6269[1]
  i6268.m_FreeSpin = i6269[2]
  return i6268
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6270 = root || request.c( 'UnityEngine.JointLimits' )
  var i6271 = data
  i6270.m_Min = i6271[0]
  i6270.m_Max = i6271[1]
  i6270.m_Bounciness = i6271[2]
  i6270.m_BounceMinVelocity = i6271[3]
  i6270.m_ContactDistance = i6271[4]
  i6270.minBounce = i6271[5]
  i6270.maxBounce = i6271[6]
  return i6270
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6272 = root || request.c( 'UnityEngine.JointDrive' )
  var i6273 = data
  i6272.m_PositionSpring = i6273[0]
  i6272.m_PositionDamper = i6273[1]
  i6272.m_MaximumForce = i6273[2]
  return i6272
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6274 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6275 = data
  i6274.m_Spring = i6275[0]
  i6274.m_Damper = i6275[1]
  return i6274
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6276 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6277 = data
  i6276.m_Limit = i6277[0]
  i6276.m_Bounciness = i6277[1]
  i6276.m_ContactDistance = i6277[2]
  return i6276
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6278 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6279 = data
  i6278.m_ExtremumSlip = i6279[0]
  i6278.m_ExtremumValue = i6279[1]
  i6278.m_AsymptoteSlip = i6279[2]
  i6278.m_AsymptoteValue = i6279[3]
  i6278.m_Stiffness = i6279[4]
  return i6278
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6280 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6281 = data
  i6280.m_LowerAngle = i6281[0]
  i6280.m_UpperAngle = i6281[1]
  return i6280
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6282 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6283 = data
  i6282.m_MotorSpeed = i6283[0]
  i6282.m_MaximumMotorTorque = i6283[1]
  return i6282
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6284 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6285 = data
  i6284.m_DampingRatio = i6285[0]
  i6284.m_Frequency = i6285[1]
  i6284.m_Angle = i6285[2]
  return i6284
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6286 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6287 = data
  i6286.m_LowerTranslation = i6287[0]
  i6286.m_UpperTranslation = i6287[1]
  return i6286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6288 = root || new pc.UnityMaterial()
  var i6289 = data
  i6288.name = i6289[0]
  request.r(i6289[1], i6289[2], 0, i6288, 'shader')
  i6288.renderQueue = i6289[3]
  i6288.enableInstancing = !!i6289[4]
  var i6291 = i6289[5]
  var i6290 = []
  for(var i = 0; i < i6291.length; i += 1) {
    i6290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6291[i + 0]) );
  }
  i6288.floatParameters = i6290
  var i6293 = i6289[6]
  var i6292 = []
  for(var i = 0; i < i6293.length; i += 1) {
    i6292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6293[i + 0]) );
  }
  i6288.colorParameters = i6292
  var i6295 = i6289[7]
  var i6294 = []
  for(var i = 0; i < i6295.length; i += 1) {
    i6294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6295[i + 0]) );
  }
  i6288.vectorParameters = i6294
  var i6297 = i6289[8]
  var i6296 = []
  for(var i = 0; i < i6297.length; i += 1) {
    i6296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6297[i + 0]) );
  }
  i6288.textureParameters = i6296
  var i6299 = i6289[9]
  var i6298 = []
  for(var i = 0; i < i6299.length; i += 1) {
    i6298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6299[i + 0]) );
  }
  i6288.materialFlags = i6298
  return i6288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6303 = data
  i6302.name = i6303[0]
  i6302.value = i6303[1]
  return i6302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6307 = data
  i6306.name = i6307[0]
  i6306.value = new pc.Color(i6307[1], i6307[2], i6307[3], i6307[4])
  return i6306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6311 = data
  i6310.name = i6311[0]
  i6310.value = new pc.Vec4( i6311[1], i6311[2], i6311[3], i6311[4] )
  return i6310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6315 = data
  i6314.name = i6315[0]
  request.r(i6315[1], i6315[2], 0, i6314, 'value')
  return i6314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6319 = data
  i6318.name = i6319[0]
  i6318.enabled = !!i6319[1]
  return i6318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6321 = data
  i6320.name = i6321[0]
  i6320.width = i6321[1]
  i6320.height = i6321[2]
  i6320.mipmapCount = i6321[3]
  i6320.anisoLevel = i6321[4]
  i6320.filterMode = i6321[5]
  i6320.hdr = !!i6321[6]
  i6320.format = i6321[7]
  i6320.wrapMode = i6321[8]
  i6320.alphaIsTransparency = !!i6321[9]
  i6320.alphaSource = i6321[10]
  return i6320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6323 = data
  i6322.name = i6323[0]
  i6322.halfPrecision = !!i6323[1]
  i6322.vertexCount = i6323[2]
  i6322.aabb = i6323[3]
  var i6325 = i6323[4]
  var i6324 = []
  for(var i = 0; i < i6325.length; i += 1) {
    i6324.push( !!i6325[i + 0] );
  }
  i6322.streams = i6324
  i6322.vertices = i6323[5]
  var i6327 = i6323[6]
  var i6326 = []
  for(var i = 0; i < i6327.length; i += 1) {
    i6326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6327[i + 0]) );
  }
  i6322.subMeshes = i6326
  var i6329 = i6323[7]
  var i6328 = []
  for(var i = 0; i < i6329.length; i += 16) {
    i6328.push( new pc.Mat4().setData(i6329[i + 0], i6329[i + 1], i6329[i + 2], i6329[i + 3],  i6329[i + 4], i6329[i + 5], i6329[i + 6], i6329[i + 7],  i6329[i + 8], i6329[i + 9], i6329[i + 10], i6329[i + 11],  i6329[i + 12], i6329[i + 13], i6329[i + 14], i6329[i + 15]) );
  }
  i6322.bindposes = i6328
  var i6331 = i6323[8]
  var i6330 = []
  for(var i = 0; i < i6331.length; i += 1) {
    i6330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6331[i + 0]) );
  }
  i6322.blendShapes = i6330
  return i6322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6337 = data
  i6336.triangles = i6337[0]
  return i6336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6343 = data
  i6342.name = i6343[0]
  var i6345 = i6343[1]
  var i6344 = []
  for(var i = 0; i < i6345.length; i += 1) {
    i6344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6345[i + 0]) );
  }
  i6342.frames = i6344
  return i6342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6347 = data
  i6346.name = i6347[0]
  i6346.atlasId = i6347[1]
  i6346.mipmapCount = i6347[2]
  i6346.hdr = !!i6347[3]
  i6346.size = i6347[4]
  i6346.anisoLevel = i6347[5]
  i6346.filterMode = i6347[6]
  i6346.wrapMode = i6347[7]
  var i6349 = i6347[8]
  var i6348 = []
  for(var i = 0; i < i6349.length; i += 4) {
    i6348.push( UnityEngine.Rect.MinMaxRect(i6349[i + 0], i6349[i + 1], i6349[i + 2], i6349[i + 3]) );
  }
  i6346.rects = i6348
  return i6346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6353 = data
  i6352.name = i6353[0]
  i6352.index = i6353[1]
  i6352.startup = !!i6353[2]
  return i6352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6355 = data
  i6354.position = new pc.Vec3( i6355[0], i6355[1], i6355[2] )
  i6354.scale = new pc.Vec3( i6355[3], i6355[4], i6355[5] )
  i6354.rotation = new pc.Quat(i6355[6], i6355[7], i6355[8], i6355[9])
  return i6354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6357 = data
  i6356.enabled = !!i6357[0]
  i6356.aspect = i6357[1]
  i6356.orthographic = !!i6357[2]
  i6356.orthographicSize = i6357[3]
  i6356.backgroundColor = new pc.Color(i6357[4], i6357[5], i6357[6], i6357[7])
  i6356.nearClipPlane = i6357[8]
  i6356.farClipPlane = i6357[9]
  i6356.fieldOfView = i6357[10]
  i6356.depth = i6357[11]
  i6356.clearFlags = i6357[12]
  i6356.cullingMask = i6357[13]
  i6356.rect = i6357[14]
  request.r(i6357[15], i6357[16], 0, i6356, 'targetTexture')
  i6356.usePhysicalProperties = !!i6357[17]
  i6356.focalLength = i6357[18]
  i6356.sensorSize = new pc.Vec2( i6357[19], i6357[20] )
  i6356.lensShift = new pc.Vec2( i6357[21], i6357[22] )
  i6356.gateFit = i6357[23]
  return i6356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6359 = data
  i6358.name = i6359[0]
  i6358.tagId = i6359[1]
  i6358.enabled = !!i6359[2]
  i6358.isStatic = !!i6359[3]
  i6358.layer = i6359[4]
  return i6358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6361 = data
  i6360.pivot = new pc.Vec2( i6361[0], i6361[1] )
  i6360.anchorMin = new pc.Vec2( i6361[2], i6361[3] )
  i6360.anchorMax = new pc.Vec2( i6361[4], i6361[5] )
  i6360.sizeDelta = new pc.Vec2( i6361[6], i6361[7] )
  i6360.anchoredPosition3D = new pc.Vec3( i6361[8], i6361[9], i6361[10] )
  i6360.rotation = new pc.Quat(i6361[11], i6361[12], i6361[13], i6361[14])
  i6360.scale = new pc.Vec3( i6361[15], i6361[16], i6361[17] )
  return i6360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6363 = data
  i6362.enabled = !!i6363[0]
  i6362.planeDistance = i6363[1]
  i6362.referencePixelsPerUnit = i6363[2]
  i6362.isFallbackOverlay = !!i6363[3]
  i6362.renderMode = i6363[4]
  i6362.renderOrder = i6363[5]
  i6362.sortingLayerName = i6363[6]
  i6362.sortingOrder = i6363[7]
  i6362.scaleFactor = i6363[8]
  request.r(i6363[9], i6363[10], 0, i6362, 'worldCamera')
  i6362.overrideSorting = !!i6363[11]
  i6362.pixelPerfect = !!i6363[12]
  i6362.targetDisplay = i6363[13]
  i6362.overridePixelPerfect = !!i6363[14]
  return i6362
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6364 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6365 = data
  i6364.m_UiScaleMode = i6365[0]
  i6364.m_ReferencePixelsPerUnit = i6365[1]
  i6364.m_ScaleFactor = i6365[2]
  i6364.m_ReferenceResolution = new pc.Vec2( i6365[3], i6365[4] )
  i6364.m_ScreenMatchMode = i6365[5]
  i6364.m_MatchWidthOrHeight = i6365[6]
  i6364.m_PhysicalUnit = i6365[7]
  i6364.m_FallbackScreenDPI = i6365[8]
  i6364.m_DefaultSpriteDPI = i6365[9]
  i6364.m_DynamicPixelsPerUnit = i6365[10]
  i6364.m_PresetInfoIsWorld = !!i6365[11]
  return i6364
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6366 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6367 = data
  i6366.m_IgnoreReversedGraphics = !!i6367[0]
  i6366.m_BlockingObjects = i6367[1]
  i6366.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6367[2] )
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6369 = data
  i6368.cullTransparentMesh = !!i6369[0]
  return i6368
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6370 = root || request.c( 'UnityEngine.UI.Image' )
  var i6371 = data
  request.r(i6371[0], i6371[1], 0, i6370, 'm_Sprite')
  i6370.m_Type = i6371[2]
  i6370.m_PreserveAspect = !!i6371[3]
  i6370.m_FillCenter = !!i6371[4]
  i6370.m_FillMethod = i6371[5]
  i6370.m_FillAmount = i6371[6]
  i6370.m_FillClockwise = !!i6371[7]
  i6370.m_FillOrigin = i6371[8]
  i6370.m_UseSpriteMesh = !!i6371[9]
  i6370.m_PixelsPerUnitMultiplier = i6371[10]
  request.r(i6371[11], i6371[12], 0, i6370, 'm_Material')
  i6370.m_Maskable = !!i6371[13]
  i6370.m_Color = new pc.Color(i6371[14], i6371[15], i6371[16], i6371[17])
  i6370.m_RaycastTarget = !!i6371[18]
  i6370.m_RaycastPadding = new pc.Vec4( i6371[19], i6371[20], i6371[21], i6371[22] )
  return i6370
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i6372 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i6373 = data
  i6372.m_StartCorner = i6373[0]
  i6372.m_StartAxis = i6373[1]
  i6372.m_CellSize = new pc.Vec2( i6373[2], i6373[3] )
  i6372.m_Spacing = new pc.Vec2( i6373[4], i6373[5] )
  i6372.m_Constraint = i6373[6]
  i6372.m_ConstraintCount = i6373[7]
  i6372.m_Padding = UnityEngine.RectOffset.FromPaddings(i6373[8], i6373[9], i6373[10], i6373[11])
  i6372.m_ChildAlignment = i6373[12]
  return i6372
}

Deserializers["test"] = function (request, data, root) {
  var i6374 = root || request.c( 'test' )
  var i6375 = data
  request.r(i6375[0], i6375[1], 0, i6374, 'img')
  request.r(i6375[2], i6375[3], 0, i6374, 'sprite')
  request.r(i6375[4], i6375[5], 0, i6374, 'bg')
  i6374.x = i6375[6]
  request.r(i6375[7], i6375[8], 0, i6374, 'gm')
  i6374.scaleChangeTime = i6375[9]
  i6374.clickScale = i6375[10]
  i6374.clearScale = i6375[11]
  return i6374
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6376 = root || request.c( 'UnityEngine.UI.Button' )
  var i6377 = data
  i6376.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6377[0], i6376.m_OnClick)
  i6376.m_Navigation = request.d('UnityEngine.UI.Navigation', i6377[1], i6376.m_Navigation)
  i6376.m_Transition = i6377[2]
  i6376.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6377[3], i6376.m_Colors)
  i6376.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6377[4], i6376.m_SpriteState)
  i6376.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6377[5], i6376.m_AnimationTriggers)
  i6376.m_Interactable = !!i6377[6]
  request.r(i6377[7], i6377[8], 0, i6376, 'm_TargetGraphic')
  return i6376
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6378 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6379 = data
  i6378.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6379[0], i6378.m_PersistentCalls)
  return i6378
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6380 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6381 = data
  var i6383 = i6381[0]
  var i6382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6383.length; i += 1) {
    i6382.add(request.d('UnityEngine.Events.PersistentCall', i6383[i + 0]));
  }
  i6380.m_Calls = i6382
  return i6380
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6386 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6387 = data
  request.r(i6387[0], i6387[1], 0, i6386, 'm_Target')
  i6386.m_TargetAssemblyTypeName = i6387[2]
  i6386.m_MethodName = i6387[3]
  i6386.m_Mode = i6387[4]
  i6386.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6387[5], i6386.m_Arguments)
  i6386.m_CallState = i6387[6]
  return i6386
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6388 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6389 = data
  request.r(i6389[0], i6389[1], 0, i6388, 'm_ObjectArgument')
  i6388.m_ObjectArgumentAssemblyTypeName = i6389[2]
  i6388.m_IntArgument = i6389[3]
  i6388.m_FloatArgument = i6389[4]
  i6388.m_StringArgument = i6389[5]
  i6388.m_BoolArgument = !!i6389[6]
  return i6388
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6390 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6391 = data
  i6390.m_Mode = i6391[0]
  i6390.m_WrapAround = !!i6391[1]
  request.r(i6391[2], i6391[3], 0, i6390, 'm_SelectOnUp')
  request.r(i6391[4], i6391[5], 0, i6390, 'm_SelectOnDown')
  request.r(i6391[6], i6391[7], 0, i6390, 'm_SelectOnLeft')
  request.r(i6391[8], i6391[9], 0, i6390, 'm_SelectOnRight')
  return i6390
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6392 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6393 = data
  i6392.m_NormalColor = new pc.Color(i6393[0], i6393[1], i6393[2], i6393[3])
  i6392.m_HighlightedColor = new pc.Color(i6393[4], i6393[5], i6393[6], i6393[7])
  i6392.m_PressedColor = new pc.Color(i6393[8], i6393[9], i6393[10], i6393[11])
  i6392.m_SelectedColor = new pc.Color(i6393[12], i6393[13], i6393[14], i6393[15])
  i6392.m_DisabledColor = new pc.Color(i6393[16], i6393[17], i6393[18], i6393[19])
  i6392.m_ColorMultiplier = i6393[20]
  i6392.m_FadeDuration = i6393[21]
  return i6392
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6394 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6395 = data
  request.r(i6395[0], i6395[1], 0, i6394, 'm_HighlightedSprite')
  request.r(i6395[2], i6395[3], 0, i6394, 'm_PressedSprite')
  request.r(i6395[4], i6395[5], 0, i6394, 'm_SelectedSprite')
  request.r(i6395[6], i6395[7], 0, i6394, 'm_DisabledSprite')
  return i6394
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6396 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6397 = data
  i6396.m_NormalTrigger = i6397[0]
  i6396.m_HighlightedTrigger = i6397[1]
  i6396.m_PressedTrigger = i6397[2]
  i6396.m_SelectedTrigger = i6397[3]
  i6396.m_DisabledTrigger = i6397[4]
  return i6396
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6398 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6399 = data
  request.r(i6399[0], i6399[1], 0, i6398, 'm_FillRect')
  request.r(i6399[2], i6399[3], 0, i6398, 'm_HandleRect')
  i6398.m_Direction = i6399[4]
  i6398.m_MinValue = i6399[5]
  i6398.m_MaxValue = i6399[6]
  i6398.m_WholeNumbers = !!i6399[7]
  i6398.m_Value = i6399[8]
  i6398.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6399[9], i6398.m_OnValueChanged)
  i6398.m_Navigation = request.d('UnityEngine.UI.Navigation', i6399[10], i6398.m_Navigation)
  i6398.m_Transition = i6399[11]
  i6398.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6399[12], i6398.m_Colors)
  i6398.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6399[13], i6398.m_SpriteState)
  i6398.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6399[14], i6398.m_AnimationTriggers)
  i6398.m_Interactable = !!i6399[15]
  request.r(i6399[16], i6399[17], 0, i6398, 'm_TargetGraphic')
  return i6398
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6400 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6401 = data
  i6400.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6401[0], i6400.m_PersistentCalls)
  return i6400
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6402 = root || request.c( 'UnityEngine.UI.Text' )
  var i6403 = data
  i6402.m_FontData = request.d('UnityEngine.UI.FontData', i6403[0], i6402.m_FontData)
  i6402.m_Text = i6403[1]
  request.r(i6403[2], i6403[3], 0, i6402, 'm_Material')
  i6402.m_Maskable = !!i6403[4]
  i6402.m_Color = new pc.Color(i6403[5], i6403[6], i6403[7], i6403[8])
  i6402.m_RaycastTarget = !!i6403[9]
  i6402.m_RaycastPadding = new pc.Vec4( i6403[10], i6403[11], i6403[12], i6403[13] )
  return i6402
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6404 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6405 = data
  request.r(i6405[0], i6405[1], 0, i6404, 'm_Font')
  i6404.m_FontSize = i6405[2]
  i6404.m_FontStyle = i6405[3]
  i6404.m_BestFit = !!i6405[4]
  i6404.m_MinSize = i6405[5]
  i6404.m_MaxSize = i6405[6]
  i6404.m_Alignment = i6405[7]
  i6404.m_AlignByGeometry = !!i6405[8]
  i6404.m_RichText = !!i6405[9]
  i6404.m_HorizontalOverflow = i6405[10]
  i6404.m_VerticalOverflow = i6405[11]
  i6404.m_LineSpacing = i6405[12]
  return i6404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6407 = data
  request.r(i6407[0], i6407[1], 0, i6406, 'animatorController')
  request.r(i6407[2], i6407[3], 0, i6406, 'avatar')
  i6406.updateMode = i6407[4]
  i6406.hasTransformHierarchy = !!i6407[5]
  i6406.applyRootMotion = !!i6407[6]
  var i6409 = i6407[7]
  var i6408 = []
  for(var i = 0; i < i6409.length; i += 2) {
  request.r(i6409[i + 0], i6409[i + 1], 2, i6408, '')
  }
  i6406.humanBones = i6408
  i6406.enabled = !!i6407[8]
  return i6406
}

Deserializers["endCard"] = function (request, data, root) {
  var i6412 = root || request.c( 'endCard' )
  var i6413 = data
  request.r(i6413[0], i6413[1], 0, i6412, 'gm')
  return i6412
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i6414 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i6415 = data
  request.r(i6415[0], i6415[1], 0, i6414, 'skeletonDataAsset')
  request.r(i6415[2], i6415[3], 0, i6414, 'additiveMaterial')
  request.r(i6415[4], i6415[5], 0, i6414, 'multiplyMaterial')
  request.r(i6415[6], i6415[7], 0, i6414, 'screenMaterial')
  i6414.initialSkinName = i6415[8]
  i6414.initialFlipX = !!i6415[9]
  i6414.initialFlipY = !!i6415[10]
  i6414.startingAnimation = i6415[11]
  i6414.startingLoop = !!i6415[12]
  i6414.timeScale = i6415[13]
  i6414.freeze = !!i6415[14]
  i6414.layoutScaleMode = i6415[15]
  i6414.updateWhenInvisible = i6415[16]
  i6414.allowMultipleCanvasRenderers = !!i6415[17]
  var i6417 = i6415[18]
  var i6416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i6417.length; i += 2) {
  request.r(i6417[i + 0], i6417[i + 1], 1, i6416, '')
  }
  i6414.canvasRenderers = i6416
  i6414.enableSeparatorSlots = !!i6415[19]
  i6414.updateSeparatorPartLocation = !!i6415[20]
  i6414.updateSeparatorPartScale = !!i6415[21]
  i6414.disableMeshAssignmentOnOverride = !!i6415[22]
  i6414.referenceSize = new pc.Vec2( i6415[23], i6415[24] )
  i6414.referenceScale = i6415[25]
  i6414.rectTransformSize = new pc.Vec2( i6415[26], i6415[27] )
  i6414.editReferenceRect = !!i6415[28]
  var i6419 = i6415[29]
  var i6418 = []
  for(var i = 0; i < i6419.length; i += 1) {
    i6418.push( i6419[i + 0] );
  }
  i6414.separatorSlotNames = i6418
  var i6421 = i6415[30]
  var i6420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6421.length; i += 2) {
  request.r(i6421[i + 0], i6421[i + 1], 1, i6420, '')
  }
  i6414.separatorParts = i6420
  i6414.meshGenerator = request.d('Spine.Unity.MeshGenerator', i6415[31], i6414.meshGenerator)
  i6414.updateTiming = i6415[32]
  i6414.unscaledTime = !!i6415[33]
  request.r(i6415[34], i6415[35], 0, i6414, 'm_Material')
  i6414.m_Maskable = !!i6415[36]
  i6414.m_Color = new pc.Color(i6415[37], i6415[38], i6415[39], i6415[40])
  i6414.m_RaycastTarget = !!i6415[41]
  i6414.m_RaycastPadding = new pc.Vec4( i6415[42], i6415[43], i6415[44], i6415[45] )
  return i6414
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i6428 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i6429 = data
  i6428.settings = request.d('Spine.Unity.MeshGenerator+Settings', i6429[0], i6428.settings)
  return i6428
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i6430 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i6431 = data
  i6430.useClipping = !!i6431[0]
  i6430.zSpacing = i6431[1]
  i6430.pmaVertexColors = !!i6431[2]
  i6430.tintBlack = !!i6431[3]
  i6430.canvasGroupTintBlack = !!i6431[4]
  i6430.calculateTangents = !!i6431[5]
  i6430.addNormals = !!i6431[6]
  i6430.immutableTriangles = !!i6431[7]
  return i6430
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i6432 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i6433 = data
  request.r(i6433[0], i6433[1], 0, i6432, 'm_Material')
  i6432.m_Maskable = !!i6433[2]
  i6432.m_Color = new pc.Color(i6433[3], i6433[4], i6433[5], i6433[6])
  i6432.m_RaycastTarget = !!i6433[7]
  i6432.m_RaycastPadding = new pc.Vec4( i6433[8], i6433[9], i6433[10], i6433[11] )
  return i6432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6435 = data
  i6434.m_Alpha = i6435[0]
  i6434.m_Interactable = !!i6435[1]
  i6434.m_BlocksRaycasts = !!i6435[2]
  i6434.m_IgnoreParentGroups = !!i6435[3]
  i6434.enabled = !!i6435[4]
  return i6434
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6436 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6437 = data
  request.r(i6437[0], i6437[1], 0, i6436, 'm_FirstSelected')
  i6436.m_sendNavigationEvents = !!i6437[2]
  i6436.m_DragThreshold = i6437[3]
  return i6436
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6438 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6439 = data
  i6438.m_HorizontalAxis = i6439[0]
  i6438.m_VerticalAxis = i6439[1]
  i6438.m_SubmitButton = i6439[2]
  i6438.m_CancelButton = i6439[3]
  i6438.m_InputActionsPerSecond = i6439[4]
  i6438.m_RepeatDelay = i6439[5]
  i6438.m_ForceModuleActive = !!i6439[6]
  i6438.m_SendPointerHoverToParent = !!i6439[7]
  return i6438
}

Deserializers["gamemanager"] = function (request, data, root) {
  var i6440 = root || request.c( 'gamemanager' )
  var i6441 = data
  var i6443 = i6441[0]
  var i6442 = []
  for(var i = 0; i < i6443.length; i += 2) {
  request.r(i6443[i + 0], i6443[i + 1], 2, i6442, '')
  }
  i6440.sprites = i6442
  var i6445 = i6441[1]
  var i6444 = []
  for(var i = 0; i < i6445.length; i += 2) {
  request.r(i6445[i + 0], i6445[i + 1], 2, i6444, '')
  }
  i6440.t = i6444
  var i6447 = i6441[2]
  var i6446 = []
  for(var i = 0; i < i6447.length; i += 2) {
  request.r(i6447[i + 0], i6447[i + 1], 2, i6446, '')
  }
  i6440.tests = i6446
  request.r(i6441[3], i6441[4], 0, i6440, 'playerHpbar')
  request.r(i6441[5], i6441[6], 0, i6440, 'dmg')
  i6440.hpMax = i6441[7]
  i6440.enemyPower = i6441[8]
  i6440.playerPower = i6441[9]
  i6440.playerPowerMul = i6441[10]
  i6440.attackSpeed = i6441[11]
  i6440.attackSpeedMul = i6441[12]
  request.r(i6441[13], i6441[14], 0, i6440, 'endCover')
  i6440.curPlayerPower = System.Int64(i6441[15])
  request.r(i6441[16], i6441[17], 0, i6440, 'ani')
  return i6440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6453 = data
  i6452.enabled = !!i6453[0]
  request.r(i6453[1], i6453[2], 0, i6452, 'sharedMaterial')
  var i6455 = i6453[3]
  var i6454 = []
  for(var i = 0; i < i6455.length; i += 2) {
  request.r(i6455[i + 0], i6455[i + 1], 2, i6454, '')
  }
  i6452.sharedMaterials = i6454
  i6452.receiveShadows = !!i6453[4]
  i6452.shadowCastingMode = i6453[5]
  i6452.sortingLayerID = i6453[6]
  i6452.sortingOrder = i6453[7]
  i6452.lightmapIndex = i6453[8]
  i6452.lightmapSceneIndex = i6453[9]
  i6452.lightmapScaleOffset = new pc.Vec4( i6453[10], i6453[11], i6453[12], i6453[13] )
  i6452.lightProbeUsage = i6453[14]
  i6452.reflectionProbeUsage = i6453[15]
  i6452.color = new pc.Color(i6453[16], i6453[17], i6453[18], i6453[19])
  request.r(i6453[20], i6453[21], 0, i6452, 'sprite')
  i6452.flipX = !!i6453[22]
  i6452.flipY = !!i6453[23]
  i6452.drawMode = i6453[24]
  i6452.size = new pc.Vec2( i6453[25], i6453[26] )
  i6452.tileMode = i6453[27]
  i6452.adaptiveModeThreshold = i6453[28]
  i6452.maskInteraction = i6453[29]
  i6452.spriteSortPoint = i6453[30]
  return i6452
}

Deserializers["enemy"] = function (request, data, root) {
  var i6458 = root || request.c( 'enemy' )
  var i6459 = data
  request.r(i6459[0], i6459[1], 0, i6458, 'gm')
  return i6458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6461 = data
  request.r(i6461[0], i6461[1], 0, i6460, 'additionalVertexStreams')
  i6460.enabled = !!i6461[2]
  request.r(i6461[3], i6461[4], 0, i6460, 'sharedMaterial')
  var i6463 = i6461[5]
  var i6462 = []
  for(var i = 0; i < i6463.length; i += 2) {
  request.r(i6463[i + 0], i6463[i + 1], 2, i6462, '')
  }
  i6460.sharedMaterials = i6462
  i6460.receiveShadows = !!i6461[6]
  i6460.shadowCastingMode = i6461[7]
  i6460.sortingLayerID = i6461[8]
  i6460.sortingOrder = i6461[9]
  i6460.lightmapIndex = i6461[10]
  i6460.lightmapSceneIndex = i6461[11]
  i6460.lightmapScaleOffset = new pc.Vec4( i6461[12], i6461[13], i6461[14], i6461[15] )
  i6460.lightProbeUsage = i6461[16]
  i6460.reflectionProbeUsage = i6461[17]
  return i6460
}

Deserializers["Spine.Unity.SkeletonMecanim"] = function (request, data, root) {
  var i6464 = root || request.c( 'Spine.Unity.SkeletonMecanim' )
  var i6465 = data
  request.r(i6465[0], i6465[1], 0, i6464, 'skeletonDataAsset')
  i6464.initialSkinName = i6465[2]
  i6464.fixPrefabOverrideViaMeshFilter = i6465[3]
  i6464.initialFlipX = !!i6465[4]
  i6464.initialFlipY = !!i6465[5]
  i6464.updateWhenInvisible = i6465[6]
  i6464.zSpacing = i6465[7]
  i6464.useClipping = !!i6465[8]
  i6464.immutableTriangles = !!i6465[9]
  i6464.pmaVertexColors = !!i6465[10]
  i6464.clearStateOnDisable = !!i6465[11]
  i6464.tintBlack = !!i6465[12]
  i6464.singleSubmesh = !!i6465[13]
  i6464.fixDrawOrder = !!i6465[14]
  i6464.addNormals = !!i6465[15]
  i6464.calculateTangents = !!i6465[16]
  i6464.maskInteraction = i6465[17]
  i6464.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i6465[18], i6464.maskMaterials)
  i6464.disableRenderingOnOverride = !!i6465[19]
  i6464.translator = request.d('Spine.Unity.SkeletonMecanim+MecanimTranslator', i6465[20], i6464.translator)
  i6464.updateTiming = i6465[21]
  var i6467 = i6465[22]
  var i6466 = []
  for(var i = 0; i < i6467.length; i += 1) {
    i6466.push( i6467[i + 0] );
  }
  i6464.separatorSlotNames = i6466
  return i6464
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i6468 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i6469 = data
  var i6471 = i6469[0]
  var i6470 = []
  for(var i = 0; i < i6471.length; i += 2) {
  request.r(i6471[i + 0], i6471[i + 1], 2, i6470, '')
  }
  i6468.materialsMaskDisabled = i6470
  var i6473 = i6469[1]
  var i6472 = []
  for(var i = 0; i < i6473.length; i += 2) {
  request.r(i6473[i + 0], i6473[i + 1], 2, i6472, '')
  }
  i6468.materialsInsideMask = i6472
  var i6475 = i6469[2]
  var i6474 = []
  for(var i = 0; i < i6475.length; i += 2) {
  request.r(i6475[i + 0], i6475[i + 1], 2, i6474, '')
  }
  i6468.materialsOutsideMask = i6474
  return i6468
}

Deserializers["Spine.Unity.SkeletonMecanim+MecanimTranslator"] = function (request, data, root) {
  var i6476 = root || request.c( 'Spine.Unity.SkeletonMecanim+MecanimTranslator' )
  var i6477 = data
  i6476.autoReset = !!i6477[0]
  i6476.useCustomMixMode = !!i6477[1]
  var i6479 = i6477[2]
  var i6478 = []
  for(var i = 0; i < i6479.length; i += 1) {
    i6478.push( i6479[i + 0] );
  }
  i6476.layerMixModes = i6478
  var i6481 = i6477[3]
  var i6480 = []
  for(var i = 0; i < i6481.length; i += 1) {
    i6480.push( i6481[i + 0] );
  }
  i6476.layerBlendModes = i6480
  return i6476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6487 = data
  request.r(i6487[0], i6487[1], 0, i6486, 'sharedMesh')
  return i6486
}

Deserializers["player"] = function (request, data, root) {
  var i6488 = root || request.c( 'player' )
  var i6489 = data
  request.r(i6489[0], i6489[1], 0, i6488, 'gm')
  return i6488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6491 = data
  i6490.ambientIntensity = i6491[0]
  i6490.reflectionIntensity = i6491[1]
  i6490.ambientMode = i6491[2]
  i6490.ambientLight = new pc.Color(i6491[3], i6491[4], i6491[5], i6491[6])
  i6490.ambientSkyColor = new pc.Color(i6491[7], i6491[8], i6491[9], i6491[10])
  i6490.ambientGroundColor = new pc.Color(i6491[11], i6491[12], i6491[13], i6491[14])
  i6490.ambientEquatorColor = new pc.Color(i6491[15], i6491[16], i6491[17], i6491[18])
  i6490.fogColor = new pc.Color(i6491[19], i6491[20], i6491[21], i6491[22])
  i6490.fogEndDistance = i6491[23]
  i6490.fogStartDistance = i6491[24]
  i6490.fogDensity = i6491[25]
  i6490.fog = !!i6491[26]
  request.r(i6491[27], i6491[28], 0, i6490, 'skybox')
  i6490.fogMode = i6491[29]
  var i6493 = i6491[30]
  var i6492 = []
  for(var i = 0; i < i6493.length; i += 1) {
    i6492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6493[i + 0]) );
  }
  i6490.lightmaps = i6492
  i6490.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6491[31], i6490.lightProbes)
  i6490.lightmapsMode = i6491[32]
  i6490.mixedBakeMode = i6491[33]
  i6490.environmentLightingMode = i6491[34]
  i6490.ambientProbe = new pc.SphericalHarmonicsL2(i6491[35])
  i6490.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6491[36])
  i6490.useReferenceAmbientProbe = !!i6491[37]
  request.r(i6491[38], i6491[39], 0, i6490, 'customReflection')
  request.r(i6491[40], i6491[41], 0, i6490, 'defaultReflection')
  i6490.defaultReflectionMode = i6491[42]
  i6490.defaultReflectionResolution = i6491[43]
  i6490.sunLightObjectId = i6491[44]
  i6490.pixelLightCount = i6491[45]
  i6490.defaultReflectionHDR = !!i6491[46]
  i6490.hasLightDataAsset = !!i6491[47]
  i6490.hasManualGenerate = !!i6491[48]
  return i6490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6497 = data
  request.r(i6497[0], i6497[1], 0, i6496, 'lightmapColor')
  request.r(i6497[2], i6497[3], 0, i6496, 'lightmapDirection')
  return i6496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6498 = root || new UnityEngine.LightProbes()
  var i6499 = data
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6507 = data
  var i6509 = i6507[0]
  var i6508 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6509.length; i += 1) {
    i6508.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6509[i + 0]));
  }
  i6506.ShaderCompilationErrors = i6508
  i6506.name = i6507[1]
  i6506.guid = i6507[2]
  var i6511 = i6507[3]
  var i6510 = []
  for(var i = 0; i < i6511.length; i += 1) {
    i6510.push( i6511[i + 0] );
  }
  i6506.shaderDefinedKeywords = i6510
  var i6513 = i6507[4]
  var i6512 = []
  for(var i = 0; i < i6513.length; i += 1) {
    i6512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6513[i + 0]) );
  }
  i6506.passes = i6512
  var i6515 = i6507[5]
  var i6514 = []
  for(var i = 0; i < i6515.length; i += 1) {
    i6514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6515[i + 0]) );
  }
  i6506.usePasses = i6514
  var i6517 = i6507[6]
  var i6516 = []
  for(var i = 0; i < i6517.length; i += 1) {
    i6516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6517[i + 0]) );
  }
  i6506.defaultParameterValues = i6516
  request.r(i6507[7], i6507[8], 0, i6506, 'unityFallbackShader')
  i6506.readDepth = !!i6507[9]
  i6506.isCreatedByShaderGraph = !!i6507[10]
  i6506.usedBatchUniforms = i6507[11]
  return i6506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6521 = data
  i6520.shaderName = i6521[0]
  i6520.errorMessage = i6521[1]
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6524 = root || new pc.UnityShaderPass()
  var i6525 = data
  i6524.id = i6525[0]
  i6524.subShaderIndex = i6525[1]
  i6524.name = i6525[2]
  i6524.passType = i6525[3]
  i6524.grabPassTextureName = i6525[4]
  i6524.usePass = !!i6525[5]
  i6524.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[6], i6524.zTest)
  i6524.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[7], i6524.zWrite)
  i6524.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[8], i6524.culling)
  i6524.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6525[9], i6524.blending)
  i6524.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6525[10], i6524.alphaBlending)
  i6524.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[11], i6524.colorWriteMask)
  i6524.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[12], i6524.offsetUnits)
  i6524.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[13], i6524.offsetFactor)
  i6524.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[14], i6524.stencilRef)
  i6524.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[15], i6524.stencilReadMask)
  i6524.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6525[16], i6524.stencilWriteMask)
  i6524.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6525[17], i6524.stencilOp)
  i6524.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6525[18], i6524.stencilOpFront)
  i6524.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6525[19], i6524.stencilOpBack)
  var i6527 = i6525[20]
  var i6526 = []
  for(var i = 0; i < i6527.length; i += 1) {
    i6526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6527[i + 0]) );
  }
  i6524.tags = i6526
  var i6529 = i6525[21]
  var i6528 = []
  for(var i = 0; i < i6529.length; i += 1) {
    i6528.push( i6529[i + 0] );
  }
  i6524.passDefinedKeywords = i6528
  var i6531 = i6525[22]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 1) {
    i6530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6531[i + 0]) );
  }
  i6524.passDefinedKeywordGroups = i6530
  var i6533 = i6525[23]
  var i6532 = []
  for(var i = 0; i < i6533.length; i += 1) {
    i6532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6533[i + 0]) );
  }
  i6524.variants = i6532
  var i6535 = i6525[24]
  var i6534 = []
  for(var i = 0; i < i6535.length; i += 1) {
    i6534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6535[i + 0]) );
  }
  i6524.excludedVariants = i6534
  i6524.hasDepthReader = !!i6525[25]
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6537 = data
  i6536.val = i6537[0]
  i6536.name = i6537[1]
  return i6536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6539 = data
  i6538.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6539[0], i6538.src)
  i6538.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6539[1], i6538.dst)
  i6538.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6539[2], i6538.op)
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6541 = data
  i6540.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6541[0], i6540.pass)
  i6540.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6541[1], i6540.fail)
  i6540.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6541[2], i6540.zFail)
  i6540.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6541[3], i6540.comp)
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6545 = data
  i6544.name = i6545[0]
  i6544.value = i6545[1]
  return i6544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6549 = data
  var i6551 = i6549[0]
  var i6550 = []
  for(var i = 0; i < i6551.length; i += 1) {
    i6550.push( i6551[i + 0] );
  }
  i6548.keywords = i6550
  i6548.hasDiscard = !!i6549[1]
  return i6548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6555 = data
  i6554.passId = i6555[0]
  i6554.subShaderIndex = i6555[1]
  var i6557 = i6555[2]
  var i6556 = []
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.push( i6557[i + 0] );
  }
  i6554.keywords = i6556
  i6554.vertexProgram = i6555[3]
  i6554.fragmentProgram = i6555[4]
  i6554.readDepth = !!i6555[5]
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6561 = data
  request.r(i6561[0], i6561[1], 0, i6560, 'shader')
  i6560.pass = i6561[2]
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6565 = data
  i6564.name = i6565[0]
  i6564.type = i6565[1]
  i6564.value = new pc.Vec4( i6565[2], i6565[3], i6565[4], i6565[5] )
  i6564.textureValue = i6565[6]
  return i6564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6567 = data
  i6566.name = i6567[0]
  request.r(i6567[1], i6567[2], 0, i6566, 'texture')
  i6566.aabb = i6567[3]
  i6566.vertices = i6567[4]
  i6566.triangles = i6567[5]
  i6566.textureRect = UnityEngine.Rect.MinMaxRect(i6567[6], i6567[7], i6567[8], i6567[9])
  i6566.packedRect = UnityEngine.Rect.MinMaxRect(i6567[10], i6567[11], i6567[12], i6567[13])
  i6566.border = new pc.Vec4( i6567[14], i6567[15], i6567[16], i6567[17] )
  i6566.transparency = i6567[18]
  i6566.bounds = i6567[19]
  i6566.pixelsPerUnit = i6567[20]
  i6566.textureWidth = i6567[21]
  i6566.textureHeight = i6567[22]
  i6566.nativeSize = new pc.Vec2( i6567[23], i6567[24] )
  i6566.pivot = new pc.Vec2( i6567[25], i6567[26] )
  i6566.textureRectOffset = new pc.Vec2( i6567[27], i6567[28] )
  return i6566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6569 = data
  i6568.name = i6569[0]
  i6568.wrapMode = i6569[1]
  i6568.isLooping = !!i6569[2]
  i6568.length = i6569[3]
  var i6571 = i6569[4]
  var i6570 = []
  for(var i = 0; i < i6571.length; i += 1) {
    i6570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6571[i + 0]) );
  }
  i6568.curves = i6570
  var i6573 = i6569[5]
  var i6572 = []
  for(var i = 0; i < i6573.length; i += 1) {
    i6572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6573[i + 0]) );
  }
  i6568.events = i6572
  i6568.halfPrecision = !!i6569[6]
  i6568.frameRate = i6569[7]
  i6568.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6569[8], i6568.localBounds)
  i6568.hasMuscleCurves = !!i6569[9]
  var i6575 = i6569[10]
  var i6574 = []
  for(var i = 0; i < i6575.length; i += 1) {
    i6574.push( i6575[i + 0] );
  }
  i6568.clipMuscleConstant = i6574
  i6568.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6569[11], i6568.clipBindingConstant)
  return i6568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6579 = data
  i6578.path = i6579[0]
  i6578.componentType = i6579[1]
  i6578.property = i6579[2]
  i6578.keys = i6579[3]
  var i6581 = i6579[4]
  var i6580 = []
  for(var i = 0; i < i6581.length; i += 1) {
    i6580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6581[i + 0]) );
  }
  i6578.objectReferenceKeys = i6580
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6585 = data
  i6584.time = i6585[0]
  request.r(i6585[1], i6585[2], 0, i6584, 'value')
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6589 = data
  i6588.functionName = i6589[0]
  i6588.floatParameter = i6589[1]
  i6588.intParameter = i6589[2]
  i6588.stringParameter = i6589[3]
  request.r(i6589[4], i6589[5], 0, i6588, 'objectReferenceParameter')
  i6588.time = i6589[6]
  return i6588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6591 = data
  i6590.center = new pc.Vec3( i6591[0], i6591[1], i6591[2] )
  i6590.extends = new pc.Vec3( i6591[3], i6591[4], i6591[5] )
  return i6590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6595 = data
  var i6597 = i6595[0]
  var i6596 = []
  for(var i = 0; i < i6597.length; i += 1) {
    i6596.push( i6597[i + 0] );
  }
  i6594.genericBindings = i6596
  var i6599 = i6595[1]
  var i6598 = []
  for(var i = 0; i < i6599.length; i += 1) {
    i6598.push( i6599[i + 0] );
  }
  i6594.pptrCurveMapping = i6598
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6601 = data
  i6600.name = i6601[0]
  i6600.ascent = i6601[1]
  i6600.originalLineHeight = i6601[2]
  i6600.fontSize = i6601[3]
  var i6603 = i6601[4]
  var i6602 = []
  for(var i = 0; i < i6603.length; i += 1) {
    i6602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6603[i + 0]) );
  }
  i6600.characterInfo = i6602
  request.r(i6601[5], i6601[6], 0, i6600, 'texture')
  i6600.originalFontSize = i6601[7]
  return i6600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6607 = data
  i6606.index = i6607[0]
  i6606.advance = i6607[1]
  i6606.bearing = i6607[2]
  i6606.glyphWidth = i6607[3]
  i6606.glyphHeight = i6607[4]
  i6606.minX = i6607[5]
  i6606.maxX = i6607[6]
  i6606.minY = i6607[7]
  i6606.maxY = i6607[8]
  i6606.uvBottomLeftX = i6607[9]
  i6606.uvBottomLeftY = i6607[10]
  i6606.uvBottomRightX = i6607[11]
  i6606.uvBottomRightY = i6607[12]
  i6606.uvTopLeftX = i6607[13]
  i6606.uvTopLeftY = i6607[14]
  i6606.uvTopRightX = i6607[15]
  i6606.uvTopRightY = i6607[16]
  return i6606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6609 = data
  i6608.name = i6609[0]
  var i6611 = i6609[1]
  var i6610 = []
  for(var i = 0; i < i6611.length; i += 1) {
    i6610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6611[i + 0]) );
  }
  i6608.states = i6610
  var i6613 = i6609[2]
  var i6612 = []
  for(var i = 0; i < i6613.length; i += 1) {
    i6612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6613[i + 0]) );
  }
  i6608.layers = i6612
  var i6615 = i6609[3]
  var i6614 = []
  for(var i = 0; i < i6615.length; i += 1) {
    i6614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6615[i + 0]) );
  }
  i6608.parameters = i6614
  i6608.animationClips = i6609[4]
  i6608.HasSubStateMachines = !!i6609[5]
  i6608.avatarUnsupported = i6609[6]
  return i6608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6619 = data
  i6618.cycleOffset = i6619[0]
  i6618.cycleOffsetParameter = i6619[1]
  i6618.cycleOffsetParameterActive = !!i6619[2]
  i6618.mirror = !!i6619[3]
  i6618.mirrorParameter = i6619[4]
  i6618.mirrorParameterActive = !!i6619[5]
  i6618.motionId = i6619[6]
  i6618.nameHash = i6619[7]
  i6618.fullPathHash = i6619[8]
  i6618.speed = i6619[9]
  i6618.speedParameter = i6619[10]
  i6618.speedParameterActive = !!i6619[11]
  i6618.tag = i6619[12]
  i6618.name = i6619[13]
  i6618.layer = i6619[14]
  i6618.writeDefaultValues = !!i6619[15]
  var i6621 = i6619[16]
  var i6620 = []
  for(var i = 0; i < i6621.length; i += 1) {
    i6620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6621[i + 0]) );
  }
  i6618.transitions = i6620
  var i6623 = i6619[17]
  var i6622 = []
  for(var i = 0; i < i6623.length; i += 2) {
  request.r(i6623[i + 0], i6623[i + 1], 2, i6622, '')
  }
  i6618.behaviours = i6622
  return i6618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6627 = data
  i6626.fullPath = i6627[0]
  i6626.canTransitionToSelf = !!i6627[1]
  i6626.duration = i6627[2]
  i6626.exitTime = i6627[3]
  i6626.hasExitTime = !!i6627[4]
  i6626.hasFixedDuration = !!i6627[5]
  i6626.interruptionSource = i6627[6]
  i6626.offset = i6627[7]
  i6626.orderedInterruption = !!i6627[8]
  i6626.destinationStateNameHash = i6627[9]
  i6626.destinationStateMachineId = i6627[10]
  i6626.isExit = !!i6627[11]
  i6626.mute = !!i6627[12]
  i6626.solo = !!i6627[13]
  var i6629 = i6627[14]
  var i6628 = []
  for(var i = 0; i < i6629.length; i += 1) {
    i6628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6629[i + 0]) );
  }
  i6626.conditions = i6628
  return i6626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6635 = data
  i6634.blendingMode = i6635[0]
  i6634.defaultWeight = i6635[1]
  i6634.name = i6635[2]
  i6634.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6635[3], i6634.stateMachine)
  return i6634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6637 = data
  i6636.id = i6637[0]
  i6636.defaultStateNameHash = i6637[1]
  var i6639 = i6637[2]
  var i6638 = []
  for(var i = 0; i < i6639.length; i += 1) {
    i6638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6639[i + 0]) );
  }
  i6636.entryTransitions = i6638
  var i6641 = i6637[3]
  var i6640 = []
  for(var i = 0; i < i6641.length; i += 1) {
    i6640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6641[i + 0]) );
  }
  i6636.anyStateTransitions = i6640
  return i6636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6645 = data
  i6644.destinationStateNameHash = i6645[0]
  i6644.destinationStateMachineId = i6645[1]
  i6644.isExit = !!i6645[2]
  i6644.mute = !!i6645[3]
  i6644.solo = !!i6645[4]
  var i6647 = i6645[5]
  var i6646 = []
  for(var i = 0; i < i6647.length; i += 1) {
    i6646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6647[i + 0]) );
  }
  i6644.conditions = i6646
  return i6644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6651 = data
  i6650.defaultBool = !!i6651[0]
  i6650.defaultFloat = i6651[1]
  i6650.defaultInt = i6651[2]
  i6650.name = i6651[3]
  i6650.nameHash = i6651[4]
  i6650.type = i6651[5]
  return i6650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6655 = data
  i6654.mode = i6655[0]
  i6654.parameter = i6655[1]
  i6654.threshold = i6655[2]
  return i6654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6657 = data
  i6656.name = i6657[0]
  i6656.bytes64 = i6657[1]
  i6656.data = i6657[2]
  return i6656
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6658 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6659 = data
  var i6661 = i6659[0]
  var i6660 = []
  for(var i = 0; i < i6661.length; i += 2) {
  request.r(i6661[i + 0], i6661[i + 1], 2, i6660, '')
  }
  i6658.atlasAssets = i6660
  i6658.scale = i6659[1]
  request.r(i6659[2], i6659[3], 0, i6658, 'skeletonJSON')
  i6658.isUpgradingBlendModeMaterials = !!i6659[4]
  i6658.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6659[5], i6658.blendModeMaterials)
  var i6663 = i6659[6]
  var i6662 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6663.length; i += 2) {
  request.r(i6663[i + 0], i6663[i + 1], 1, i6662, '')
  }
  i6658.skeletonDataModifiers = i6662
  var i6665 = i6659[7]
  var i6664 = []
  for(var i = 0; i < i6665.length; i += 1) {
    i6664.push( i6665[i + 0] );
  }
  i6658.fromAnimation = i6664
  var i6667 = i6659[8]
  var i6666 = []
  for(var i = 0; i < i6667.length; i += 1) {
    i6666.push( i6667[i + 0] );
  }
  i6658.toAnimation = i6666
  i6658.duration = i6659[9]
  i6658.defaultMix = i6659[10]
  request.r(i6659[11], i6659[12], 0, i6658, 'controller')
  return i6658
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6670 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6671 = data
  i6670.applyAdditiveMaterial = !!i6671[0]
  var i6673 = i6671[1]
  var i6672 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6673.length; i += 1) {
    i6672.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6673[i + 0]));
  }
  i6670.additiveMaterials = i6672
  var i6675 = i6671[2]
  var i6674 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6675.length; i += 1) {
    i6674.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6675[i + 0]));
  }
  i6670.multiplyMaterials = i6674
  var i6677 = i6671[3]
  var i6676 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6677.length; i += 1) {
    i6676.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6677[i + 0]));
  }
  i6670.screenMaterials = i6676
  i6670.requiresBlendModeMaterials = !!i6671[4]
  return i6670
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6680 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6681 = data
  i6680.pageName = i6681[0]
  request.r(i6681[1], i6681[2], 0, i6680, 'material')
  return i6680
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6684 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6685 = data
  request.r(i6685[0], i6685[1], 0, i6684, 'atlasFile')
  var i6687 = i6685[2]
  var i6686 = []
  for(var i = 0; i < i6687.length; i += 2) {
  request.r(i6687[i + 0], i6687[i + 1], 2, i6686, '')
  }
  i6684.materials = i6686
  i6684.textureLoadingMode = i6685[3]
  request.r(i6685[4], i6685[5], 0, i6684, 'onDemandTextureLoader')
  return i6684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6689 = data
  var i6691 = i6689[0]
  var i6690 = []
  for(var i = 0; i < i6691.length; i += 1) {
    i6690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6691[i + 0]) );
  }
  i6688.files = i6690
  i6688.componentToPrefabIds = i6689[1]
  return i6688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6695 = data
  i6694.path = i6695[0]
  request.r(i6695[1], i6695[2], 0, i6694, 'unityObject')
  return i6694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6697 = data
  var i6699 = i6697[0]
  var i6698 = []
  for(var i = 0; i < i6699.length; i += 1) {
    i6698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6699[i + 0]) );
  }
  i6696.scriptsExecutionOrder = i6698
  var i6701 = i6697[1]
  var i6700 = []
  for(var i = 0; i < i6701.length; i += 1) {
    i6700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6701[i + 0]) );
  }
  i6696.sortingLayers = i6700
  var i6703 = i6697[2]
  var i6702 = []
  for(var i = 0; i < i6703.length; i += 1) {
    i6702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6703[i + 0]) );
  }
  i6696.cullingLayers = i6702
  i6696.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6697[3], i6696.timeSettings)
  i6696.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6697[4], i6696.physicsSettings)
  i6696.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6697[5], i6696.physics2DSettings)
  i6696.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6697[6], i6696.qualitySettings)
  i6696.enableRealtimeShadows = !!i6697[7]
  i6696.enableAutoInstancing = !!i6697[8]
  i6696.enableDynamicBatching = !!i6697[9]
  i6696.lightmapEncodingQuality = i6697[10]
  i6696.desiredColorSpace = i6697[11]
  var i6705 = i6697[12]
  var i6704 = []
  for(var i = 0; i < i6705.length; i += 1) {
    i6704.push( i6705[i + 0] );
  }
  i6696.allTags = i6704
  return i6696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6709 = data
  i6708.name = i6709[0]
  i6708.value = i6709[1]
  return i6708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6713 = data
  i6712.id = i6713[0]
  i6712.name = i6713[1]
  i6712.value = i6713[2]
  return i6712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6717 = data
  i6716.id = i6717[0]
  i6716.name = i6717[1]
  return i6716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6719 = data
  i6718.fixedDeltaTime = i6719[0]
  i6718.maximumDeltaTime = i6719[1]
  i6718.timeScale = i6719[2]
  i6718.maximumParticleTimestep = i6719[3]
  return i6718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6721 = data
  i6720.gravity = new pc.Vec3( i6721[0], i6721[1], i6721[2] )
  i6720.defaultSolverIterations = i6721[3]
  i6720.bounceThreshold = i6721[4]
  i6720.autoSyncTransforms = !!i6721[5]
  i6720.autoSimulation = !!i6721[6]
  var i6723 = i6721[7]
  var i6722 = []
  for(var i = 0; i < i6723.length; i += 1) {
    i6722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6723[i + 0]) );
  }
  i6720.collisionMatrix = i6722
  return i6720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6727 = data
  i6726.enabled = !!i6727[0]
  i6726.layerId = i6727[1]
  i6726.otherLayerId = i6727[2]
  return i6726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6729 = data
  request.r(i6729[0], i6729[1], 0, i6728, 'material')
  i6728.gravity = new pc.Vec2( i6729[2], i6729[3] )
  i6728.positionIterations = i6729[4]
  i6728.velocityIterations = i6729[5]
  i6728.velocityThreshold = i6729[6]
  i6728.maxLinearCorrection = i6729[7]
  i6728.maxAngularCorrection = i6729[8]
  i6728.maxTranslationSpeed = i6729[9]
  i6728.maxRotationSpeed = i6729[10]
  i6728.baumgarteScale = i6729[11]
  i6728.baumgarteTOIScale = i6729[12]
  i6728.timeToSleep = i6729[13]
  i6728.linearSleepTolerance = i6729[14]
  i6728.angularSleepTolerance = i6729[15]
  i6728.defaultContactOffset = i6729[16]
  i6728.autoSimulation = !!i6729[17]
  i6728.queriesHitTriggers = !!i6729[18]
  i6728.queriesStartInColliders = !!i6729[19]
  i6728.callbacksOnDisable = !!i6729[20]
  i6728.reuseCollisionCallbacks = !!i6729[21]
  i6728.autoSyncTransforms = !!i6729[22]
  var i6731 = i6729[23]
  var i6730 = []
  for(var i = 0; i < i6731.length; i += 1) {
    i6730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6731[i + 0]) );
  }
  i6728.collisionMatrix = i6730
  return i6728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6735 = data
  i6734.enabled = !!i6735[0]
  i6734.layerId = i6735[1]
  i6734.otherLayerId = i6735[2]
  return i6734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6737 = data
  var i6739 = i6737[0]
  var i6738 = []
  for(var i = 0; i < i6739.length; i += 1) {
    i6738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6739[i + 0]) );
  }
  i6736.qualityLevels = i6738
  var i6741 = i6737[1]
  var i6740 = []
  for(var i = 0; i < i6741.length; i += 1) {
    i6740.push( i6741[i + 0] );
  }
  i6736.names = i6740
  i6736.shadows = i6737[2]
  i6736.anisotropicFiltering = i6737[3]
  i6736.antiAliasing = i6737[4]
  i6736.lodBias = i6737[5]
  i6736.shadowCascades = i6737[6]
  i6736.shadowDistance = i6737[7]
  i6736.shadowmaskMode = i6737[8]
  i6736.shadowProjection = i6737[9]
  i6736.shadowResolution = i6737[10]
  i6736.softParticles = !!i6737[11]
  i6736.softVegetation = !!i6737[12]
  i6736.activeColorSpace = i6737[13]
  i6736.desiredColorSpace = i6737[14]
  i6736.masterTextureLimit = i6737[15]
  i6736.maxQueuedFrames = i6737[16]
  i6736.particleRaycastBudget = i6737[17]
  i6736.pixelLightCount = i6737[18]
  i6736.realtimeReflectionProbes = !!i6737[19]
  i6736.shadowCascade2Split = i6737[20]
  i6736.shadowCascade4Split = new pc.Vec3( i6737[21], i6737[22], i6737[23] )
  i6736.streamingMipmapsActive = !!i6737[24]
  i6736.vSyncCount = i6737[25]
  i6736.asyncUploadBufferSize = i6737[26]
  i6736.asyncUploadTimeSlice = i6737[27]
  i6736.billboardsFaceCameraPosition = !!i6737[28]
  i6736.shadowNearPlaneOffset = i6737[29]
  i6736.streamingMipmapsMemoryBudget = i6737[30]
  i6736.maximumLODLevel = i6737[31]
  i6736.streamingMipmapsAddAllCameras = !!i6737[32]
  i6736.streamingMipmapsMaxLevelReduction = i6737[33]
  i6736.streamingMipmapsRenderersPerFrame = i6737[34]
  i6736.resolutionScalingFixedDPIFactor = i6737[35]
  i6736.streamingMipmapsMaxFileIORequests = i6737[36]
  i6736.currentQualityLevel = i6737[37]
  return i6736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6747 = data
  i6746.weight = i6747[0]
  i6746.vertices = i6747[1]
  i6746.normals = i6747[2]
  i6746.tangents = i6747[3]
  return i6746
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

Deserializers.buildID = "0d13ff41-8121-42a9-932d-bfd7dbacd78b";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

