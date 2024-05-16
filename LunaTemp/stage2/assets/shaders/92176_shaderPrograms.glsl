["\n#version 100\n\nuniform \tvec4 _Time;\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nuniform \tvec4 _MaskTex_ST;\nuniform \tfloat _Image01_X_Speed;\nuniform \tfloat _Image01_Y_Speed;\nuniform \tfloat _Image02_X_Speed;\nuniform \tfloat _Image02_Y_Speed;\nattribute highp vec4 in_POSITION0;\nattribute highp vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    vs_COLOR0 = in_COLOR0;\n    u_xlat0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD0.xy = (-_Time.xx) * vec2(_Image01_X_Speed, _Image01_Y_Speed) + u_xlat0.xy;\n    u_xlat0.xy = in_TEXCOORD0.xy * _MaskTex_ST.xy + _MaskTex_ST.zw;\n    vs_TEXCOORD1.xy = (-_Time.xx) * vec2(_Image02_X_Speed, _Image02_Y_Speed) + u_xlat0.xy;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tvec4 _TintColor;\nuniform \tfloat _Image01_Brightness;\nuniform \tfloat _Alpha;\nuniform lowp sampler2D _MainTex;\nuniform lowp sampler2D _MaskTex;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\n#define SV_TARGET0 gl_FragData[0]\nvec3 u_xlat0;\nlowp float u_xlat10_0;\nlowp vec4 u_xlat10_1;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MaskTex, vs_TEXCOORD1.xy).x;\n    u_xlat0.x = u_xlat10_0 * _Alpha;\n    u_xlat0.x = u_xlat0.x * vs_COLOR0.w;\n    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    SV_TARGET0.w = u_xlat0.x * u_xlat10_1.w;\n    u_xlat0.xyz = u_xlat10_1.xyz * vec3(_Image01_Brightness);\n    u_xlat0.xyz = u_xlat0.xyz * _TintColor.xyz;\n    SV_TARGET0.xyz = u_xlat0.xyz * vs_COLOR0.xyz;\n    return;\n}\n\n"]