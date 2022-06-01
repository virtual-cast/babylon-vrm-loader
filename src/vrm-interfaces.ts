export interface IVRMVector3 {
    x: number;
    y: number;
    z: number;
}

/**
 * extensions.VRM
 */
export interface IVRM {
    exporterVersion: string;
    specVersion: string;
    meta: IVRMMeta;
    humanoid: IVRMHumanoid;
    firstPerson: IVRMFirstPerson;
    blendShapeMaster: IVRMBlendShapeMaster;
    secondaryAnimation: IVRMSecondaryAnimation;
    materialProperties: IVRMMaterialProperty[];
}

/**
 * extensions.VRM.meta
 */
export interface IVRMMeta {
    title: string;
    version: string;
    author: string;
    contactInformation?: string;
    reference?: string;
    texture?: number;
}

/**
 * extensions.VRM.humanoid
 */
export interface IVRMHumanoid {
    humanBones: IVRMHumanoidBone[];
    armStretch?: number;
    legStretch?: number;
    upperArmTwist?: number;
    lowerArmTwist?: number;
    upperLegTwist?: number;
    lowerLegTwist?: number;
    feetSpacing?: number;
    hasTranslationDoF?: boolean;
}

export interface IVRMHumanoidBone {
    bone: string;
    node: number;
    useDefaultValues: boolean;
    min?: IVRMVector3;
    max?: IVRMVector3;
    center?: IVRMVector3;
    axisLength?: number;
}

export interface IVRMFirstPersonMeshAnnotation {
    mesh: number;
    firstPersonFlag: string;
}

export interface IVRMFirstPersonDegreeMap {
    curve: number[];
    xRange: number;
    yRange: number;
}

/**
 * extensions.VRM.firstPerson
 */
export interface IVRMFirstPerson {
    firstPersonBone: number;
    firstPersonBoneOffset: IVRMVector3;
    meshAnnotations: IVRMFirstPersonMeshAnnotation[];
    lookAtTypeName: 'Bone' | 'BlendShape';
    lookAtHorizontalInner: IVRMFirstPersonDegreeMap;
    lookAtHorizontalOuter: IVRMFirstPersonDegreeMap;
    lookAtVerticalDown: IVRMFirstPersonDegreeMap;
    lookAtVerticalUp: IVRMFirstPersonDegreeMap;
}

/**
 * extensions.VRM.blendShapeMaster
 */
export interface IVRMBlendShapeMaster {
    blendShapeGroups: IVRMBlendShapeGroup[];
}

export interface IVRMBlendShapeGroup {
    name: string;
    presetName: string;
    binds: IVRMBlendShapeBind[];
    materialValues: IVRMBlendShapeMaterialBind[];
    isBinary: boolean;
}

export interface IVRMBlendShapeBind {
    mesh: number;
    index: number;
    weight: number;
}

export interface IVRMBlendShapeMaterialBind {
    materialName: string;
    propertyName: string;
    targetValue: number[];
}

export interface IVRMSecondaryAnimationSpring {
    comment: string;
    stiffiness: number;
    gravityPower: number;
    gravityDir: IVRMVector3;
    dragForce: number;
    center: number;
    hitRadius: number;
    bones: number[];
    colliderGroups: number[];
}

export interface IVRMSecondaryAnimationCollider {
    offset: IVRMVector3;
    radius: number;
}

export interface IVRMSecondaryAnimationColliderGroup {
    node: number;
    colliders: IVRMSecondaryAnimationCollider[];
}

/**
 * extensions.VRM.secondaryAnimation
 */
export interface IVRMSecondaryAnimation {
    boneGroups: IVRMSecondaryAnimationSpring[];
    colliderGroups: IVRMSecondaryAnimationColliderGroup[];
}

export enum IVRMMaterialPropertyShader {
    VRM_USE_GLTFSHADER = 'VRM_USE_GLTFSHADER',
    VRMMToon = 'VRM/MToon',
    VRMUnlitTransparentZWrite = 'VRM/UnlitTransparentZWrite',
}

export interface IVRMMaterialPropertyFloatProperties {
    _Cutoff?: number;
    _BumpScale?: number;
    _ReceiveShadowRate?: number;
    _ShadingGradeRate?: number;
    _ShadeShift?: number;
    _ShadeToony?: number;
    _LightColorAttenuation?: number;
    _IndirectLightIntensity?: number;
    _RimLightingMix?: number;
    _RimFresnelPower?: number;
    _RimLift?: number;
    _OutlineWidth?: number;
    _OutlineScaledMaxDistance?: number;
    _OutlineLightingMix?: number;
    _UvAnimScrollX?: number;
    _UvAnimScrollY?: number;
    _UvAnimRotation?: number;
    _DebugMode?: number;
    _BlendMode?: number;
    _OutlineWidthMode?: number;
    _OutlineColorMode?: number;
    _CullMode?: number;
    _OutlineCullMode?: number;
    _SrcBlend?: number;
    _DstBlend?: number;
    _ZWrite?: number;
    [prop: string]: number | undefined;
}

export type IVRMVectorMaterialProperty = [number, number, number, number];

export interface IVRMMaterialPropertyVectorProperties {
    _Color?: IVRMVectorMaterialProperty;
    _ShadeColor?: IVRMVectorMaterialProperty;
    _MainTex?: IVRMVectorMaterialProperty;
    _ShadeTexture?: IVRMVectorMaterialProperty;
    _BumpMap?: IVRMVectorMaterialProperty;
    _ReceiveShadowTexture?: IVRMVectorMaterialProperty;
    _ShadingGradeTexture?: IVRMVectorMaterialProperty;
    _RimColor?: IVRMVectorMaterialProperty;
    _RimTexture?: IVRMVectorMaterialProperty;
    _SphereAdd?: IVRMVectorMaterialProperty;
    _EmissionColor?: IVRMVectorMaterialProperty;
    _EmissionMap?: IVRMVectorMaterialProperty;
    _OutlineWidthTexture?: IVRMVectorMaterialProperty;
    _OutlineColor?: IVRMVectorMaterialProperty;
    _UvAnimMaskTexture?: IVRMVectorMaterialProperty;
    [prop: string]: IVRMVectorMaterialProperty | undefined;
}

export interface IVRMMaterialPropertyTextureProperties {
    _MainTex?: number;
    _ShadeTexture?: number;
    _BumpMap?: number;
    _ReceiveShadowTexture?: number;
    _ShadingGradeTexture?: number;
    _RimTexture?: number;
    _SphereAdd?: number;
    _EmissionMap?: number;
    _OutlineWidthTexture?: number;
    _UvAnimMaskTexture?: number;
    [prop: string]: number | undefined;
}

export interface IVRMMaterialPropertyKeywordMap {
    _NORMALMAP?: boolean;
    _ALPHATEST_ON?: boolean;
    _ALPHABLEND_ON?: boolean;
    _ALPHAPREMULTIPLY_ON?: boolean;
}

export interface IVRMMaterialPropertyTagMap {
    RenderType?: 'Opaque' | 'TransparentCutout' | 'Transparent';
}

/**
 * extensions.VRM.materialProperties
 */
export interface IVRMMaterialProperty {
    name: string;
    shader: IVRMMaterialPropertyShader;
    renderQueue: number;
    floatProperties: IVRMMaterialPropertyFloatProperties;
    vectorProperties: IVRMMaterialPropertyVectorProperties;
    textureProperties: IVRMMaterialPropertyTextureProperties;
    keywordMap: IVRMMaterialPropertyKeywordMap;
    tagMap: IVRMMaterialPropertyTagMap;
}
