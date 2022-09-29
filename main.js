(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["babylon-vrm-loader"] = factory();
	else
		root["babylon-vrm-loader"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/errors.ts":
/*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoneNotFoundError": () => (/* binding */ BoneNotFoundError)
/* harmony export */ });
/**
 * Throws when mandatory bone could not find
 */
class BoneNotFoundError extends Error {
    constructor(boneName) {
        super(`Bone:${boneName} NotFound`);
        this.boneName = boneName;
        this.name = 'BoneNotFoundError';
    }
}


/***/ }),

/***/ "./src/humanoid-bone.ts":
/*!******************************!*\
  !*** ./src/humanoid-bone.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HumanoidBone": () => (/* binding */ HumanoidBone)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/errors.ts");

/**
 * HumanoidBone を取得するメソッド群
 * @see https://docs.unity3d.com/ja/2018.3/ScriptReference/HumanBodyBones.html
 */
class HumanoidBone {
    constructor(nodeMap) {
        this.nodeMap = nodeMap;
    }
    dispose() {
        this.nodeMap = null;
    }
    /**
     * 尻
     */
    get hips() {
        return this.getMandatoryBone('hips');
    }
    /**
     * 左太もも
     */
    get leftUpperLeg() {
        return this.getMandatoryBone('leftUpperLeg');
    }
    /**
     * 右太もも
     */
    get rightUpperLeg() {
        return this.getMandatoryBone('rightUpperLeg');
    }
    /**
     * 左ひざ
     */
    get leftLowerLeg() {
        return this.getMandatoryBone('leftLowerLeg');
    }
    /**
     * 右ひざ
     */
    get rightLowerLeg() {
        return this.getMandatoryBone('rightLowerLeg');
    }
    /**
     * 左足首
     */
    get leftFoot() {
        return this.getMandatoryBone('leftFoot');
    }
    /**
     * 右足首
     */
    get rightFoot() {
        return this.getMandatoryBone('rightFoot');
    }
    /**
     * 脊椎の第一
     */
    get spine() {
        return this.getMandatoryBone('spine');
    }
    /**
     * 胸
     */
    get chest() {
        return this.getMandatoryBone('chest');
    }
    /**
     * 首
     */
    get neck() {
        return this.getMandatoryBone('neck');
    }
    /**
     * 頭
     */
    get head() {
        return this.getMandatoryBone('head');
    }
    /**
     * 左肩
     */
    get leftShoulder() {
        return this.getMandatoryBone('leftShoulder');
    }
    /**
     * 右肩
     */
    get rightShoulder() {
        return this.getMandatoryBone('rightShoulder');
    }
    /**
     * 左上腕
     */
    get leftUpperArm() {
        return this.getMandatoryBone('leftUpperArm');
    }
    /**
     * 右上腕
     */
    get rightUpperArm() {
        return this.getMandatoryBone('rightUpperArm');
    }
    /**
     * 左ひじ
     */
    get leftLowerArm() {
        return this.getMandatoryBone('leftLowerArm');
    }
    /**
     * 右ひじ
     */
    get rightLowerArm() {
        return this.getMandatoryBone('rightLowerArm');
    }
    /**
     * 左手首
     */
    get leftHand() {
        return this.getMandatoryBone('leftHand');
    }
    /**
     * 右手首
     */
    get rightHand() {
        return this.getMandatoryBone('rightHand');
    }
    /**
     * 左つま先(Optional)
     */
    get leftToes() {
        return this.getOptionalBone('leftToes');
    }
    /**
     * 右つま先(Optional)
     */
    get rightToes() {
        return this.getOptionalBone('rightToes');
    }
    /**
     * 左目(Optional)
     */
    get leftEye() {
        return this.getOptionalBone('leftEye');
    }
    /**
     * 右目(Optional)
     */
    get rightEye() {
        return this.getOptionalBone('rightEye');
    }
    /**
     * 顎(Optional)
     */
    get jaw() {
        return this.getOptionalBone('jaw');
    }
    /**
     * 左親指第一指骨(Optional)
     */
    get leftThumbProximal() {
        return this.getOptionalBone('leftThumbProximal');
    }
    /**
     * 左親指第二指骨(Optional)
     */
    get leftThumbIntermediate() {
        return this.getOptionalBone('leftThumbIntermediate');
    }
    /**
     * 左親指第三指骨(Optional)
     */
    get leftThumbDistal() {
        return this.getOptionalBone('leftThumbDistal');
    }
    /**
     * 左人差し指第一指骨(Optional)
     */
    get leftIndexProximal() {
        return this.getOptionalBone('leftIndexProximal');
    }
    /**
     * 左人差し指第二指骨(Optional)
     */
    get leftIndexIntermediate() {
        return this.getOptionalBone('leftIndexIntermediate');
    }
    /**
     * 左人差し指第三指骨(Optional)
     */
    get leftIndexDistal() {
        return this.getOptionalBone('leftIndexDistal');
    }
    /**
     * 左中指第一指骨(Optional)
     */
    get leftMiddleProximal() {
        return this.getOptionalBone('leftMiddleProximal');
    }
    /**
     * 左中指第二指骨(Optional)
     */
    get leftMiddleIntermediate() {
        return this.getOptionalBone('leftMiddleIntermediate');
    }
    /**
     * 左中指第三指骨(Optional)
     */
    get leftMiddleDistal() {
        return this.getOptionalBone('leftMiddleDistal');
    }
    /**
     * 左薬指第一指骨(Optional)
     */
    get leftRingProximal() {
        return this.getOptionalBone('leftRingProximal');
    }
    /**
     * 左薬指第二指骨(Optional)
     */
    get leftRingIntermediate() {
        return this.getOptionalBone('leftRingIntermediate');
    }
    /**
     * 左薬指第三指骨(Optional)
     */
    get leftRingDistal() {
        return this.getOptionalBone('leftRingDistal');
    }
    /**
     * 左小指第一指骨(Optional)
     */
    get leftLittleProximal() {
        return this.getOptionalBone('leftLittleProximal');
    }
    /**
     * 左小指第二指骨(Optional)
     */
    get leftLittleIntermediate() {
        return this.getOptionalBone('leftLittleIntermediate');
    }
    /**
     * 左小指第三指骨(Optional)
     */
    get leftLittleDistal() {
        return this.getOptionalBone('leftLittleDistal');
    }
    /**
     * 右親指第一指骨(Optional)
     */
    get rightThumbProximal() {
        return this.getOptionalBone('rightThumbProximal');
    }
    /**
     * 右親指第二指骨(Optional)
     */
    get rightThumbIntermediate() {
        return this.getOptionalBone('rightThumbIntermediate');
    }
    /**
     * 右親指第三指骨(Optional)
     */
    get rightThumbDistal() {
        return this.getOptionalBone('rightThumbDistal');
    }
    /**
     * 右人差し指第一指骨(Optional)
     */
    get rightIndexProximal() {
        return this.getOptionalBone('rightIndexProximal');
    }
    /**
     * 右人差し指第二指骨(Optional)
     */
    get rightIndexIntermediate() {
        return this.getOptionalBone('rightIndexIntermediate');
    }
    /**
     * 右人差し指第三指骨(Optional)
     */
    get rightIndexDistal() {
        return this.getOptionalBone('rightIndexDistal');
    }
    /**
     * 右中指第一指骨(Optional)
     */
    get rightMiddleProximal() {
        return this.getOptionalBone('rightMiddleProximal');
    }
    /**
     * 右中指第二指骨(Optional)
     */
    get rightMiddleIntermediate() {
        return this.getOptionalBone('rightMiddleIntermediate');
    }
    /**
     * 右中指第三指骨(Optional)
     */
    get rightMiddleDistal() {
        return this.getOptionalBone('rightMiddleDistal');
    }
    /**
     * 右薬指第一指骨(Optional)
     */
    get rightRingProximal() {
        return this.getOptionalBone('rightRingProximal');
    }
    /**
     * 右薬指第二指骨(Optional)
     */
    get rightRingIntermediate() {
        return this.getOptionalBone('rightRingIntermediate');
    }
    /**
     * 右薬指第三指骨(Optional)
     */
    get rightRingDistal() {
        return this.getOptionalBone('rightRingDistal');
    }
    /**
     * 右小指第一指骨(Optional)
     */
    get rightLittleProximal() {
        return this.getOptionalBone('rightLittleProximal');
    }
    /**
     * 右小指第二指骨(Optional)
     */
    get rightLittleIntermediate() {
        return this.getOptionalBone('rightLittleIntermediate');
    }
    /**
     * 右小指第三指骨(Optional)
     */
    get rightLittleDistal() {
        return this.getOptionalBone('rightLittleDistal');
    }
    /**
     * 上胸(Optional)
     */
    get upperChest() {
        return this.getOptionalBone('upperChest');
    }
    /**
     * 必須ボーンを取得する。取得出来ない場合は例外を発生する
     *
     * @throws BoneNotFoundError
     * @param name HumanoidBoneName
     */
    getMandatoryBone(name) {
        const node = this.nodeMap[name];
        if (!node) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_0__.BoneNotFoundError(name);
        }
        return node;
    }
    /**
     * オプショナルボーンを取得する
     *
     * @param name HumanoidBoneName
     */
    getOptionalBone(name) {
        return (this.nodeMap && this.nodeMap[name]) || null;
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoneNotFoundError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.BoneNotFoundError),
/* harmony export */   "HumanoidBone": () => (/* reexport safe */ _humanoid_bone__WEBPACK_IMPORTED_MODULE_1__.HumanoidBone),
/* harmony export */   "IVRMMaterialPropertyShader": () => (/* reexport safe */ _vrm_interfaces__WEBPACK_IMPORTED_MODULE_6__.IVRMMaterialPropertyShader),
/* harmony export */   "MaterialValueBindingMerger": () => (/* reexport safe */ _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_2__.MaterialValueBindingMerger),
/* harmony export */   "VCAST_vci_material_unity": () => (/* reexport safe */ _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_3__.VCAST_vci_material_unity),
/* harmony export */   "VRM": () => (/* reexport safe */ _vrm_extension__WEBPACK_IMPORTED_MODULE_4__.VRM),
/* harmony export */   "VRMFileLoader": () => (/* reexport safe */ _vrm_file_loader__WEBPACK_IMPORTED_MODULE_5__.VRMFileLoader),
/* harmony export */   "VRMManager": () => (/* reexport safe */ _vrm_manager__WEBPACK_IMPORTED_MODULE_7__.VRMManager),
/* harmony export */   "VRMMaterialGenerator": () => (/* reexport safe */ _vrm_material_generator__WEBPACK_IMPORTED_MODULE_8__.VRMMaterialGenerator)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/errors.ts");
/* harmony import */ var _humanoid_bone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./humanoid-bone */ "./src/humanoid-bone.ts");
/* harmony import */ var _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-value-binding-merger */ "./src/material-value-binding-merger.ts");
/* harmony import */ var _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vcast-vci-material-unity */ "./src/vcast-vci-material-unity.ts");
/* harmony import */ var _vrm_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vrm-extension */ "./src/vrm-extension.ts");
/* harmony import */ var _vrm_file_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vrm-file-loader */ "./src/vrm-file-loader.ts");
/* harmony import */ var _vrm_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vrm-interfaces */ "./src/vrm-interfaces.ts");
/* harmony import */ var _vrm_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vrm-manager */ "./src/vrm-manager.ts");
/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");












/***/ }),

/***/ "./src/material-value-binding-merger.ts":
/*!**********************************************!*\
  !*** ./src/material-value-binding-merger.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialValueBindingMerger": () => (/* binding */ MaterialValueBindingMerger)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylon-mtoon-material */ "./node_modules/babylon-mtoon-material/dist/index.module.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__);



const PBRMaterialTextureMap = {
    _MainTex: 'albedoTexture',
};
const PBRMaterialColorMap = {
    _Color: 'albedoColor',
};
const MToonMaterialTextureMap = {
    _MainTex: 'diffuseTexture',
    _EmissionMap: 'emissiveTexture',
    _BumpMap: 'bumpTexture',
    _ShadeTexture: 'shadeTexture',
    _ReceiveShadowTexture: 'receiveShadowTexture',
    _ShadingGradeTexture: 'shadingGradeTexture',
    _RimTexture: 'rimTexture',
    _SphereAdd: 'matCapTexture',
    _OutlineWidthTexture: 'outlineWidthTexture',
    _UvAnimMaskTexture: 'uvAnimationMaskTexture',
};
const MToonMaterialColorMap = {
    _Color: 'diffuseColor',
    _ShadeColor: 'shadeColor',
    _RimColor: 'rimColor',
    _EmissionColor: 'emissiveColor',
    _OutlineColor: 'outlineColor',
};
/**
 * @see https://github.com/vrm-c/UniVRM/blob/4ffd97c2e9339683ce9bf21e73f510bd90c2a5b2/Assets/VRM/Runtime/BlendShape/MaterialValueBindingMerger.cs
 */
class MaterialValueBindingMerger {
    /**
     * @param materials VRMの全 Material
     * @param materialValues
     */
    constructor(materials, materialValues) {
        this.materialValues = materialValues;
        this.m_materialMap = {};
        this.m_materialSetterMap = {};
        this.m_materialValueMap = {};
        this.m_used = {};
        this.baseValueCache = {};
        this.materialValuesToApply = {};
        if (materials.length === 0 || materialValues.length === 0) {
            return;
        }
        // プロパティ名の変換に対応している MToonMaterial と PBRMaterial を保存する
        materials.forEach((material) => {
            if (material instanceof babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__.MToonMaterial || material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                this.m_materialMap[material.name] = material;
            }
        });
        materialValues.forEach((materialValue) => {
            const bindingKey = this.makeBindingKey(materialValue);
            if (this.m_materialSetterMap[bindingKey]) {
                return;
            }
            const material = this.m_materialMap[materialValue.materialName];
            if (!material) {
                return;
            }
            const baseValue = this.getMaterialProperty(material, materialValue.propertyName);
            if (!baseValue || materialValue.targetValue.length !== 4) {
                return;
            }
            // モーフィング用に baseValue (初期値) と materialValue を保存する
            this.baseValueCache[bindingKey] = baseValue;
            this.materialValuesToApply[bindingKey] = materialValue;
            const targetValue = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(materialValue.targetValue);
            const valueName = materialValue.propertyName;
            // Unity と座標系が異なるため、テクスチャの vOffset を反転する
            if (material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                if (Object.keys(PBRMaterialTextureMap).some((k) => valueName.startsWith(k))) {
                    targetValue.w *= -1;
                }
            }
            else if (Object.keys(MToonMaterialTextureMap).some((k) => valueName.startsWith(k))) {
                targetValue.w *= -1;
            }
            if (valueName.endsWith('_ST_S')) {
                // テクスチャの u方向 のみ更新する
                const setter = (value, firstValue) => {
                    const propValue = firstValue
                        ? baseValue.add(targetValue.subtract(baseValue).scale(value))
                        : this.getMaterialProperty(material, valueName).add(targetValue.subtract(baseValue).scale(value));
                    const src = this.getMaterialProperty(material, valueName);
                    src.x = propValue.x;
                    src.z = propValue.z;
                    this.updateMaterialProperty(material, valueName, src);
                };
                this.m_materialSetterMap[bindingKey] = setter;
            }
            else if (valueName.endsWith('_ST_T')) {
                // テクスチャの v方向 のみ更新する
                const setter = (value, firstValue) => {
                    const propValue = firstValue
                        ? baseValue.add(targetValue.subtract(baseValue).scale(value))
                        : this.getMaterialProperty(material, valueName).add(targetValue.subtract(baseValue).scale(value));
                    const src = this.getMaterialProperty(material, valueName);
                    src.y = propValue.y;
                    src.w = propValue.w;
                    this.updateMaterialProperty(material, valueName, src);
                };
                this.m_materialSetterMap[bindingKey] = setter;
            }
            else {
                const setter = (value, firstValue) => {
                    const propValue = firstValue
                        ? baseValue.add(targetValue.subtract(baseValue).scale(value))
                        : this.getMaterialProperty(material, valueName).add(targetValue.subtract(baseValue).scale(value));
                    this.updateMaterialProperty(material, valueName, propValue);
                };
                this.m_materialSetterMap[bindingKey] = setter;
            }
        });
    }
    /**
     * UniVRM では Dictionary のキー用のクラスを定義しているが、文字列で代用する
     * MaterialValueBinding.BaseValue は対応するプロパティの初期値なので無視できる
     */
    makeBindingKey(materialValue) {
        return `${materialValue.materialName}_${materialValue.propertyName}_${materialValue.targetValue.join('-')}`;
    }
    /**
     * UniVRM では Dictionary のキー用のクラスを定義しているが、文字列で代用する
     */
    makeTargetKey(materialValue) {
        return `${materialValue.materialName}_${materialValue.propertyName}`;
    }
    /**
     * モーフィングを行う
     * @param value 値(0〜1)
     */
    morphing(value) {
        this.accumulateValue(value);
        this.apply();
    }
    /**
     * materialValue ごとに重みを計算する
     */
    accumulateValue(value) {
        this.materialValues.forEach((materialValue) => {
            const bindingKey = this.makeBindingKey(materialValue);
            if (this.m_materialValueMap[bindingKey]) {
                this.m_materialValueMap[bindingKey] += value;
            }
            else {
                this.m_materialValueMap[bindingKey] = value;
            }
        });
    }
    /**
     * Material のプロパティを更新する
     */
    apply() {
        this.m_used = {};
        Object.entries(this.materialValuesToApply).forEach(([bindingKey, materialValue]) => {
            const targetKey = this.makeTargetKey(materialValue);
            if (!(targetKey in this.m_used)) {
                const material = this.m_materialMap[materialValue.materialName];
                const value = this.baseValueCache[bindingKey].clone();
                // 対象のプロパティを初期値に戻す
                const valueName = materialValue.propertyName;
                if (valueName.endsWith('_ST_S')) {
                    const v = this.getMaterialProperty(material, valueName);
                    value.y = v.y;
                    value.w = v.w;
                }
                else if (valueName.endsWith('_ST_T')) {
                    const v = this.getMaterialProperty(material, valueName);
                    value.x = v.x;
                    value.z = v.z;
                }
                this.updateMaterialProperty(material, valueName, value);
                this.m_used[targetKey] = true;
            }
            const setter = this.m_materialSetterMap[bindingKey];
            if (setter) {
                setter(this.m_materialValueMap[bindingKey], false);
            }
        });
        this.m_materialValueMap = {};
    }
    /**
     * マテリアルのテクスチャか色に対応する Vector4 を取得する
     */
    getMaterialProperty(material, propertyName) {
        const match = propertyName.match(/^(_[^_]+)/);
        if (!match || !match[1]) {
            return null;
        }
        const key = match[1];
        if (material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (PBRMaterialTextureMap[key]) {
                return this.convertTextureIntoVector4WhenNotNull(material[PBRMaterialTextureMap[key]]);
            }
            if (PBRMaterialColorMap[key]) {
                return this.convertColorIntoVector4(material[PBRMaterialColorMap[key]], material.alpha);
            }
            return null;
        }
        // MToonMaterial
        if (MToonMaterialTextureMap[key]) {
            return this.convertTextureIntoVector4WhenNotNull(material[MToonMaterialTextureMap[key]]);
        }
        if (MToonMaterialColorMap[key]) {
            return this.convertColorIntoVector4(material[MToonMaterialColorMap[key]], material.alpha);
        }
        return null;
    }
    /**
     * Texture を Vector4 に変換する
     */
    convertTextureIntoVector4WhenNotNull(texture) {
        if (!texture) {
            return null;
        }
        const t = texture;
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector4(t.uScale, t.vScale, t.uOffset, t.vOffset);
    }
    /**
     * Color3 に alpha を加えて Vector4 に変換する
     */
    convertColorIntoVector4(color, alpha) {
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector4(color.r, color.g, color.b, alpha);
    }
    /**
     * マテリアルのテクスチャか色を更新する
     */
    updateMaterialProperty(material, propertyName, value) {
        const match = propertyName.match(/^(_[^_]+)/);
        if (!match || !match[1]) {
            return;
        }
        const key = match[1];
        if (material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (PBRMaterialTextureMap[key]) {
                this.updateTextureWhenNotNull(material[PBRMaterialTextureMap[key]], value);
                return;
            }
            if (PBRMaterialColorMap[key]) {
                if (key === '_Color') {
                    material.alpha = value.w;
                }
                this.updateColor(material[PBRMaterialColorMap[key]], value);
            }
            return;
        }
        // MToonMaterial
        if (MToonMaterialTextureMap[key]) {
            this.updateTextureWhenNotNull(material[MToonMaterialTextureMap[key]], value);
            return;
        }
        if (MToonMaterialColorMap[key]) {
            if (key === '_Color') {
                material.alpha = value.w;
            }
            this.updateColor(material[MToonMaterialColorMap[key]], value);
        }
    }
    /**
     * Texture を Vector4 で更新する
     */
    updateTextureWhenNotNull(texture, value) {
        if (texture) {
            const t = texture;
            t.uScale = value.x;
            t.vScale = value.y;
            t.uOffset = value.z;
            t.vOffset = value.w;
        }
    }
    /**
     * Color3 を Vector4 で更新する
     */
    updateColor(color, value) {
        color.r = value.x;
        color.g = value.y;
        color.b = value.z;
    }
}


/***/ }),

/***/ "./src/secondary-animation/collider-group.ts":
/*!***************************************************!*\
  !*** ./src/secondary-animation/collider-group.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColliderGroup": () => (/* binding */ ColliderGroup)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/sphereBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collider */ "./src/secondary-animation/collider.ts");


/**
 * VRM SpringBone ColliderGroup
 */
class ColliderGroup {
    /**
     * @param transform The node of the collider group for setting up collision detections.
     */
    constructor(transform) {
        this.transform = transform;
        this.colliders = [];
    }
    /**
     * Add offsetted collider
     *
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     */
    addCollider(offset, radius) {
        const sphere = _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_0__.SphereBuilder.CreateSphere(`${this.transform.name}_ColliderSphere`, {
            segments: 6,
            diameter: radius * 2.0,
            updatable: true,
        }, this.transform.getScene());
        sphere.setParent(this.transform);
        sphere.setPositionWithLocalVector(offset);
        sphere.setEnabled(false);
        this.colliders.push(new _collider__WEBPACK_IMPORTED_MODULE_1__.Collider(offset, radius, sphere));
    }
}


/***/ }),

/***/ "./src/secondary-animation/collider.ts":
/*!*********************************************!*\
  !*** ./src/secondary-animation/collider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collider": () => (/* binding */ Collider)
/* harmony export */ });
/**
 * Collider
 */
class Collider {
    /**
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     * @param sphere The spehere mesh for worldMatrix and gizmo.
     */
    constructor(offset, radius, sphere) {
        this.offset = offset;
        this.radius = radius;
        this.sphere = sphere;
    }
}


/***/ }),

/***/ "./src/secondary-animation/quaternion-helper.ts":
/*!******************************************************!*\
  !*** ./src/secondary-animation/quaternion-helper.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuaternionHelper": () => (/* binding */ QuaternionHelper)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");

const _v3from = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _v3to = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
/**
 * Quaternion Helper
 */
class QuaternionHelper {
    /**
     * Creates a rotation which rotates from fromDirection to toDirection.
     *
     * @todo After upgrading babylon.js, use Quaternion.FromUnitVectorsToRef.
     * @see https://github.com/BabylonJS/Babylon.js/blob/2dbaeaa9761c42b7e39caddf494b920cdcdd2807/packages/dev/core/src/Maths/math.vector.ts#L4149-L4164
     */
    static fromToRotationToRef(from, to, result) {
        from.normalizeToRef(_v3from);
        to.normalizeToRef(_v3to);
        const r = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.Dot(_v3from, _v3to) + 1;
        if (r < 0.001) {
            if (Math.abs(_v3from.x) > Math.abs(_v3from.z)) {
                result.set(-_v3from.y, _v3from.x, 0, 0);
            }
            else {
                result.set(0, -_v3from.z, _v3from.y, 0);
            }
        }
        else {
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.CrossToRef(_v3from, _v3to, _v3to);
            result.set(_v3to.x, _v3to.y, _v3to.z, r);
        }
        result.normalize();
    }
}


/***/ }),

/***/ "./src/secondary-animation/spring-bone-controller.ts":
/*!***********************************************************!*\
  !*** ./src/secondary-animation/spring-bone-controller.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpringBoneController": () => (/* binding */ SpringBoneController)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _collider_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collider-group */ "./src/secondary-animation/collider-group.ts");
/* harmony import */ var _vrm_spring_bone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vrm-spring-bone */ "./src/secondary-animation/vrm-spring-bone.ts");



/**
 * VRM SpringBone Controller
 */
class SpringBoneController {
    /**
     * @param ext SecondaryAnimation Object
     * @param getBone
     */
    constructor(ext, getBone) {
        this.ext = ext;
        const colliderGroups = this.constructColliderGroups(getBone);
        this.springs = this.constructSprings(getBone, colliderGroups);
    }
    dispose() {
        this.springs = [];
    }
    /**
     * Update all SpringBones
     *
     * @param deltaTime Elapsed sec from previous frame
     * @see https://docs.unity3d.com/ScriptReference/Time-deltaTime.html
     */
    async update(deltaTime) {
        // ポーズ後のあらぶり防止のため clamp
        deltaTime = Math.max(0.0, Math.min(16.666, deltaTime)) / 1000;
        const promises = this.springs.map((spring) => {
            return spring.update(deltaTime);
        });
        return Promise.all(promises).then(() => {
            /* Do nothing */
        });
    }
    constructColliderGroups(getBone) {
        if (!this.ext.colliderGroups || !this.ext.colliderGroups.length) {
            return [];
        }
        const colliderGroups = [];
        this.ext.colliderGroups.forEach((colliderGroup) => {
            const bone = getBone(colliderGroup.node);
            const g = new _collider_group__WEBPACK_IMPORTED_MODULE_1__.ColliderGroup(bone);
            colliderGroup.colliders.forEach((collider) => {
                g.addCollider(
                // VRM 右手系Y_UP, -Z_Front から Babylon.js 左手系Y_UP, +Z_Front にする
                new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3(-collider.offset.x, collider.offset.y, -collider.offset.z), collider.radius);
            });
            colliderGroups.push(g);
        });
        return colliderGroups;
    }
    constructSprings(getBone, colliderGroups) {
        if (!this.ext.boneGroups || !this.ext.boneGroups.length) {
            return [];
        }
        const springs = [];
        this.ext.boneGroups.forEach((spring) => {
            const rootBones = (spring.bones || []).map((bone) => {
                return getBone(bone);
            });
            const springColliders = (spring.colliderGroups || []).map((g) => {
                return colliderGroups[g];
            });
            springs.push(new _vrm_spring_bone__WEBPACK_IMPORTED_MODULE_2__.VRMSpringBone(spring.comment, spring.stiffiness, spring.gravityPower, new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3(
            // VRM 右手系Y_UP, -Z_Front から Babylon.js 左手系Y_UP, +Z_Front にする
            -spring.gravityDir.x, spring.gravityDir.y, -spring.gravityDir.z).normalize(), spring.dragForce, getBone(spring.center), spring.hitRadius, rootBones, springColliders));
        });
        return springs;
    }
}


/***/ }),

/***/ "./src/secondary-animation/vrm-spring-bone-logic.ts":
/*!**********************************************************!*\
  !*** ./src/secondary-animation/vrm-spring-bone-logic.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VRMSpringBoneLogic": () => (/* binding */ VRMSpringBoneLogic)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _quaternion_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quaternion-helper */ "./src/secondary-animation/quaternion-helper.ts");


// based on
// http://rocketjump.skr.jp/unity3d/109/
// https://github.com/dwango/UniVRM/blob/master/Scripts/SpringBone/VRMSpringBone.cs
// https://github.com/pixiv/three-vrm/blob/aad551e041fad553c19d2091e5f5eaff1eb8faa8/packages/three-vrm/src/springbone/VRMSpringBone.ts
const IDENTITY_MATRIX = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity();
const _v3A = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _v3B = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _v3C = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _quatA = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
const _matA = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix();
const _matB = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix();
/**
 * Verlet Spring Bone
 */
class VRMSpringBoneLogic {
    /**
     * @param center Center reference of TransformNode
     * @param radius Collision Radius
     * @param transform Base TransformNode
     */
    constructor(center, radius, transform) {
        this.center = center;
        this.radius = radius;
        this.transform = transform;
        this.currentTail = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this.prevTail = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this.nextTail = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        // Initialize rotationQuaternion when not initialized
        if (!transform.rotationQuaternion) {
            transform.rotationQuaternion = transform.rotation.toQuaternion();
        }
        const worldMatrix = transform.getWorldMatrix();
        this.centerSpacePosition = worldMatrix.getTranslation();
        this.initialLocalMatrix = transform._localMatrix.clone();
        this.initialLocalRotation = transform.rotationQuaternion.clone();
        const children = transform.getChildTransformNodes(true);
        if (children.length === 0) {
            this.initialLocalChildPosition = transform.position.clone().normalize().scaleInPlace(0.07);
        }
        else {
            this.initialLocalChildPosition = children[0].position.clone();
        }
        _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.initialLocalChildPosition, worldMatrix, this.currentTail);
        this.prevTail.copyFrom(this.currentTail);
        this.nextTail.copyFrom(this.currentTail);
        this.boneAxis = this.initialLocalChildPosition.normalizeToNew();
        _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.initialLocalChildPosition, worldMatrix, _v3A);
        this.centerSpaceBoneLength = _v3A.subtractInPlace(this.centerSpacePosition).length();
        if (center) {
            this.getMatrixWorldToCenter(_matA);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.currentTail, _matA, this.currentTail);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.prevTail, _matA, this.prevTail);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.nextTail, _matA, this.nextTail);
            worldMatrix.multiplyToRef(_matA, _matA);
            _matA.getTranslationToRef(this.centerSpacePosition);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.initialLocalChildPosition, _matA, _v3A);
            this.centerSpaceBoneLength = _v3A.subtractInPlace(this.centerSpacePosition).length();
        }
    }
    /**
     * Update Tail position
     *
     * @param stiffnessForce Current frame stiffness
     * @param dragForce Current frame drag force
     * @param external Current frame external force
     * @param colliderGroups Current frame colliderGroups
     */
    update(stiffnessForce, dragForce, external, colliderGroups) {
        if (Number.isNaN(this.transform.getAbsolutePosition().x)) {
            // Do not update when absolute position is invalid
            return;
        }
        // Get bone position in center space
        this.getMatrixWorldToCenter(_matA);
        this.transform.getWorldMatrix().multiplyToRef(_matA, _matA);
        _matA.getTranslationToRef(this.centerSpacePosition);
        // Get parent position in center space
        this.getMatrixWorldToCenter(_matB);
        this.getParentMatrixWorld().multiplyToRef(_matB, _matB);
        // verlet積分で次の位置を計算
        this.nextTail.copyFrom(this.currentTail);
        {
            // 減衰付きで前のフレームの移動を継続
            _v3A.copyFrom(this.currentTail)
                .subtractInPlace(this.prevTail)
                .scaleInPlace(1.0 - dragForce);
            this.nextTail.addInPlace(_v3A);
        }
        {
            // 親の回転による子ボーンの移動目標
            _v3A.copyFrom(this.boneAxis);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(_v3A, this.initialLocalMatrix, _v3A);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(_v3A, _matB, _v3A);
            _v3A.subtractInPlace(this.centerSpacePosition).normalize().scaleInPlace(stiffnessForce);
            this.nextTail.addInPlace(_v3A);
        }
        {
            // 外力による移動量
            this.nextTail.addInPlace(external);
        }
        {
            // 長さを boneLength に強制
            this.nextTail.subtractInPlace(this.centerSpacePosition).normalize().scaleInPlace(this.centerSpaceBoneLength).addInPlace(this.centerSpacePosition);
        }
        {
            // Collision で移動
            this.collide(colliderGroups, this.nextTail);
        }
        this.prevTail.copyFrom(this.currentTail);
        this.currentTail.copyFrom(this.nextTail);
        this.initialLocalMatrix.multiplyToRef(_matB, _matA);
        const initialCenterSpaceMatrixInv = _matA.invert();
        _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.nextTail, initialCenterSpaceMatrixInv, _v3A);
        _quaternion_helper__WEBPACK_IMPORTED_MODULE_1__.QuaternionHelper.fromToRotationToRef(this.boneAxis, _v3A, _quatA);
        const applyRotation = _quatA;
        this.initialLocalRotation.multiplyToRef(applyRotation, this.transform.rotationQuaternion);
        // update WorldMatrix
        this.transform.computeWorldMatrix(true);
    }
    /**
     * Create a matrix that converts world space into center space.
     * @param result Target matrix
     */
    getMatrixWorldToCenter(result) {
        if (this.center) {
            this.center.getWorldMatrix().invertToRef(result);
        }
        else {
            result.copyFrom(IDENTITY_MATRIX);
        }
        return result;
    }
    /**
     * Returns the world matrix of its parent object.
     */
    getParentMatrixWorld() {
        return this.transform.parent ? this.transform.parent.getWorldMatrix() : IDENTITY_MATRIX;
    }
    /**
     * 衝突判定を行う
     * @param colliderGroups
     * @param tail
     */
    collide(colliderGroups, tail) {
        colliderGroups.forEach((colliderGroup) => {
            colliderGroup.colliders.forEach((collider) => {
                this.getMatrixWorldToCenter(_matA);
                collider.sphere.computeWorldMatrix().multiplyToRef(_matA, _matA);
                _matA.getTranslationToRef(_v3A);
                const colliderCenterSpacePosition = _v3A;
                let maxAbsScale = 0;
                collider.sphere.absoluteScaling.asArray().forEach((s) => {
                    maxAbsScale = Math.max(maxAbsScale, Math.abs(s));
                });
                const colliderRadius = collider.radius * maxAbsScale;
                const r = this.radius + colliderRadius;
                tail.subtractToRef(colliderCenterSpacePosition, _v3B);
                if (_v3B.lengthSquared() <= r * r) {
                    const normal = _v3B.copyFrom(tail).subtractInPlace(colliderCenterSpacePosition).normalize();
                    const posFromCollider = _v3C.copyFrom(colliderCenterSpacePosition).addInPlace(normal.scaleInPlace(r));
                    tail.copyFrom(posFromCollider.subtractInPlace(this.centerSpacePosition).normalize().scaleInPlace(this.centerSpaceBoneLength).addInPlace(this.centerSpacePosition));
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/secondary-animation/vrm-spring-bone.ts":
/*!****************************************************!*\
  !*** ./src/secondary-animation/vrm-spring-bone.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VRMSpringBone": () => (/* binding */ VRMSpringBone)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Materials/standardMaterial */ "./node_modules/@babylonjs/core/Materials/standardMaterial.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
/* harmony import */ var _vrm_spring_bone_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vrm-spring-bone-logic */ "./src/secondary-animation/vrm-spring-bone-logic.ts");




/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
class VRMSpringBone {
    /**
     * @see https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0
     * @param comment Annotation comment
     * @param stiffness The resilience of the swaying object (the power of returning to the initial pose).
     * @param gravityPower The strength of gravity.
     * @param gravityDir The direction of gravity. Set (0, -1, 0) for simulating the gravity. Set (1, 0, 0) for simulating the wind.
     * @param dragForce The resistance (deceleration) of automatic animation.
     * @param center The reference point of a swaying object can be set at any location except the origin.
     *               When implementing UI moving with warp,
     *               the parent node to move with warp can be specified if you don't want to make the object swaying with warp movement.
     * @param hitRadius The radius of the sphere used for the collision detection with colliders.
     * @param bones Specify the node index of the root bone of the swaying object.
     * @param colliderGroups Specify the index of the collider group for collisions with swaying objects.
     */
    constructor(comment, stiffness, gravityPower, gravityDir, dragForce, center, hitRadius, bones, colliderGroups) {
        this.comment = comment;
        this.stiffness = stiffness;
        this.gravityPower = gravityPower;
        this.gravityDir = gravityDir;
        this.dragForce = dragForce;
        this.center = center;
        this.hitRadius = hitRadius;
        this.bones = bones;
        this.colliderGroups = colliderGroups;
        this.verlets = [];
        this.activeBones = [];
        /** @hidden */
        this.drawGizmo = false;
        this.activeBones = this.bones.filter((bone) => bone !== null);
        this.activeBones.forEach((bone) => {
            [bone].concat(bone.getChildTransformNodes()).forEach((b) => {
                this.verlets.push(new _vrm_spring_bone_logic__WEBPACK_IMPORTED_MODULE_3__.VRMSpringBoneLogic(this.center, this.hitRadius, b));
            });
        });
        if (this.drawGizmo) {
            this.setupGizmo();
        }
    }
    setupGizmo() {
        this.activeBones.forEach((bone) => {
            const scene = bone.getScene();
            [bone].concat(bone.getChildTransformNodes()).forEach((b) => {
                const boneGizmo = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_2__.MeshBuilder.CreateSphere(b.name + '_boneGizmo', {
                    segments: 6,
                    diameter: this.hitRadius * 2,
                    updatable: true,
                }, scene);
                const mat = new _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(b.name + '_boneGizmomat', scene);
                mat.emissiveColor = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__.Color3.Red();
                mat.wireframe = true;
                boneGizmo.material = mat;
                boneGizmo.setParent(b);
                boneGizmo.position = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
            });
        });
        this.colliderGroups.forEach((group) => {
            const scene = group.transform.getScene();
            group.colliders.forEach((collider) => {
                const sphere = collider.sphere;
                if (!sphere.isEnabled(false)) {
                    sphere.setEnabled(true);
                    const mat = new _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(group.transform.name + '_colliderGizmomat', scene);
                    mat.emissiveColor = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__.Color3.Yellow();
                    mat.wireframe = true;
                    sphere.material = mat;
                }
            });
        });
    }
    /**
     * Update bones
     *
     * @param deltaTime
     */
    async update(deltaTime) {
        const stiffness = this.stiffness * deltaTime;
        const external = this.gravityDir.scale(this.gravityPower * deltaTime);
        const promises = this.verlets.map((verlet) => {
            return new Promise((resolve) => {
                verlet.update(stiffness, this.dragForce, external, this.colliderGroups);
                resolve();
            });
        });
        return Promise.all(promises).then(() => {
            /* Do Nothing */
        });
    }
}


/***/ }),

/***/ "./src/test/index.ts":
/*!***************************!*\
  !*** ./src/test/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Cameras/arcRotateCamera */ "./node_modules/@babylonjs/core/Cameras/arcRotateCamera.js");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Lights/directionalLight */ "./node_modules/@babylonjs/core/Lights/directionalLight.js");
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Lights/hemisphericLight */ "./node_modules/@babylonjs/core/Lights/hemisphericLight.js");
/* harmony import */ var _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Lights/pointLight */ "./node_modules/@babylonjs/core/Lights/pointLight.js");
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Lights/Shadows/shadowGenerator */ "./node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Loading/sceneLoader */ "./node_modules/@babylonjs/core/Loading/sceneLoader.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _babylonjs_core_Helpers_sceneHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/Helpers/sceneHelpers */ "./node_modules/@babylonjs/core/Helpers/sceneHelpers.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/sphereBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/torusKnotBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/inspector */ "./node_modules/@babylonjs/inspector/dist/babylon.inspector.bundle.max.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../index */ "./src/index.ts");














// eslint-disable-next-line import/no-internal-modules

async function main() {
    const debugProperties = getDebugProperties();
    const canvas = document.getElementById('main-canvas');
    const engine = new _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_1__.Engine(canvas, true, {
        alpha: false,
        disableWebGL2Support: debugProperties.webgl1,
    });
    const scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_9__.Scene(engine);
    const camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera('MainCamera1', 0, 0, 3, new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 1.2, 0), scene, true);
    camera.lowerRadiusLimit = 0.1;
    camera.upperRadiusLimit = 20;
    camera.wheelDeltaPercentage = 0.01;
    camera.minZ = 0.3;
    camera.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 1.2, -3);
    camera.attachControl(canvas, true);
    scene.createDefaultEnvironment({
        createGround: true,
        createSkybox: false,
        enableGroundMirror: false,
        enableGroundShadow: false,
    });
    // Lights
    const directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight('DirectionalLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, -0.5, 1.0), scene);
    directionalLight.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 25, -50);
    directionalLight.setEnabled(true);
    const hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_3__.HemisphericLight('HemisphericLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(-0.2, -0.8, -1), scene);
    hemisphericLight.setEnabled(false);
    const pointLight = new _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_4__.PointLight('PointLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 0, 1), scene);
    pointLight.setEnabled(false);
    // Meshes
    const standardMaterialSphere = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_8__.Mesh.CreateSphere('StandardMaterialSphere1', 16, 1, scene);
    standardMaterialSphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(1.5, 1.2, 0);
    standardMaterialSphere.receiveShadows = true;
    const shadowCaster = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_8__.Mesh.CreateTorusKnot('ShadowCaster', 1, 0.2, 32, 32, 2, 3, scene);
    shadowCaster.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0.0, 5.0, -10.0);
    shadowCaster.setEnabled(debugProperties.shadow);
    if (debugProperties.shadow) {
        const shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_5__.ShadowGenerator(1024, directionalLight);
        shadowGenerator.addShadowCaster(shadowCaster);
    }
    if (debugProperties.inspector) {
        await scene.debugLayer.show({
            globalRoot: document.getElementById('wrapper'),
        });
    }
    // Expose current scene
    window.currentScene = scene;
    scene.onBeforeRenderObservable.add(() => {
        // SpringBone
        if (!scene.metadata || !scene.metadata.vrmManagers) {
            return;
        }
        const managers = scene.metadata.vrmManagers;
        const deltaTime = scene.getEngine().getDeltaTime();
        managers.forEach((manager) => {
            manager.update(deltaTime);
        });
    });
    engine.runRenderLoop(() => {
        scene.render();
        shadowCaster.rotate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3.Up(), 0.01);
    });
    window.addEventListener('resize', () => {
        engine.resize();
    });
    await _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_6__.SceneLoader.AppendAsync('./', 'AliciaSolid.vrm', scene);
    let fileCount = 1;
    document.getElementById('file-input').addEventListener('change', (evt) => {
        const file = evt.target.files[0];
        console.log(`loads ${file.name} ${file.size} bytes`);
        const currentMeshCount = scene.meshes.length;
        _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_6__.SceneLoader.Append('file:', file, scene, () => {
            console.log(`loaded ${file.name}`);
            for (let i = currentMeshCount; i < scene.meshes.length; i++) {
                scene.meshes[i].translate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3.Right(), 1.5 * fileCount);
                scene.meshes[i].receiveShadows = true;
            }
            fileCount++;
        });
    });
}
function getDebugProperties() {
    const href = window.location.href;
    return {
        webgl1: href.includes('webgl1'),
        shadow: href.includes('shadow'),
        inspector: href.includes('inspector'),
    };
}
main().catch((reason) => {
    console.error(reason);
});


/***/ }),

/***/ "./src/vcast-vci-material-unity.ts":
/*!*****************************************!*\
  !*** ./src/vcast-vci-material-unity.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VCAST_vci_material_unity": () => (/* binding */ VCAST_vci_material_unity)
/* harmony export */ });
/* harmony import */ var _babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/loaders/glTF/2.0 */ "./node_modules/@babylonjs/loaders/glTF/2.0/index.js");
/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");


/**
 * `extensions` に入る拡張キー
 */
const NAME = 'VCAST_vci_material_unity';
/**
 * VCAST_vci_material_unity 拡張を処理する
 */
class VCAST_vci_material_unity {
    /**
     * @inheritdoc
     */
    constructor(loader) {
        this.loader = loader;
        /**
         * @inheritdoc
         */
        this.name = NAME;
        /**
         * @inheritdoc
         */
        this.enabled = true;
    }
    /**
     * @inheritdoc
     */
    dispose() {
        this.loader = null;
    }
    /**
     * @inheritdoc
     */
    _loadMaterialAsync(context, material, mesh, babylonDrawMode, assign) {
        // ジェネレータでマテリアルを生成する
        return new _vrm_material_generator__WEBPACK_IMPORTED_MODULE_1__.VRMMaterialGenerator(this.loader).generate(context, material, mesh, babylonDrawMode, assign);
    }
}
// ローダーに登録する
_babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, (loader) => new VCAST_vci_material_unity(loader));


/***/ }),

/***/ "./src/vrm-extension.ts":
/*!******************************!*\
  !*** ./src/vrm-extension.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VRM": () => (/* binding */ VRM)
/* harmony export */ });
/* harmony import */ var _babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/loaders/glTF/2.0 */ "./node_modules/@babylonjs/loaders/glTF/2.0/index.js");
/* harmony import */ var _vrm_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vrm-manager */ "./src/vrm-manager.ts");
/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");



/**
 * `extensions` に入る拡張キー
 */
const NAME = 'VRM';
/**
 * VRM 拡張を処理する
 * [Specification](https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0)
 */
class VRM {
    /**
     * @inheritdoc
     */
    constructor(loader) {
        this.loader = loader;
        /**
         * @inheritdoc
         */
        this.name = NAME;
        /**
         * @inheritdoc
         */
        this.enabled = true;
        /**
         * この Mesh index 以降が読み込み対象
         */
        this.meshesFrom = 0;
        /**
         * この TransformNode index 以降が読み込み対象
         */
        this.transformNodesFrom = 0;
        /**
         * この Material index 以降が読み込み対象
         */
        this.materialsFrom = 0;
        // GLTFLoader has already added rootMesh as __root__ before load extension
        // @see glTFLoader._loadData
        this.meshesFrom = this.loader.babylonScene.meshes.length - 1;
        this.transformNodesFrom = this.loader.babylonScene.transformNodes.length;
        this.materialsFrom = this.loader.babylonScene.materials.length;
    }
    /**
     * @inheritdoc
     */
    dispose() {
        this.loader = null;
    }
    /**
     * @inheritdoc
     */
    onReady() {
        if (!this.loader.gltf.extensions || !this.loader.gltf.extensions[NAME]) {
            return;
        }
        const scene = this.loader.babylonScene;
        const manager = new _vrm_manager__WEBPACK_IMPORTED_MODULE_1__.VRMManager(this.loader.gltf.extensions[NAME], this.loader.babylonScene, this.meshesFrom, this.transformNodesFrom, this.materialsFrom);
        scene.metadata = scene.metadata || {};
        scene.metadata.vrmManagers = scene.metadata.vrmManagers || [];
        scene.metadata.vrmManagers.push(manager);
        this.loader.babylonScene.onDisposeObservable.add(() => {
            // Scene dispose 時に Manager も破棄する
            manager.dispose();
            this.loader.babylonScene.metadata.vrmManagers = [];
        });
    }
    /**
     * @inheritdoc
     */
    _loadVertexDataAsync(context, primitive, babylonMesh) {
        if (!primitive.extras || !primitive.extras.targetNames) {
            return null;
        }
        // まだ MorphTarget が生成されていないので、メタ情報にモーフターゲット情報を入れておく
        babylonMesh.metadata = babylonMesh.metadata || {};
        babylonMesh.metadata.vrmTargetNames = primitive.extras.targetNames;
        return null;
    }
    /**
     * @inheritdoc
     */
    _loadMaterialAsync(context, material, mesh, babylonDrawMode, assign) {
        // ジェネレータでマテリアルを生成する
        return new _vrm_material_generator__WEBPACK_IMPORTED_MODULE_2__.VRMMaterialGenerator(this.loader).generate(context, material, mesh, babylonDrawMode, assign);
    }
}
// ローダーに登録する
_babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, (loader) => new VRM(loader));


/***/ }),

/***/ "./src/vrm-file-loader.ts":
/*!********************************!*\
  !*** ./src/vrm-file-loader.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VRMFileLoader": () => (/* binding */ VRMFileLoader)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Loading/sceneLoader */ "./node_modules/@babylonjs/core/Loading/sceneLoader.js");
/* harmony import */ var _babylonjs_loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/loaders/glTF/glTFFileLoader */ "./node_modules/@babylonjs/loaders/glTF/glTFFileLoader.js");


/**
 * VRM/VCI ファイルを読み込めるようにする
 * 拡張子を変更しただけ
 */
class VRMFileLoader extends _babylonjs_loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFFileLoader {
    constructor() {
        super(...arguments);
        this.name = 'vrm';
        this.extensions = {
            '.vrm': { isBinary: true },
            '.vci': { isBinary: true },
        };
    }
    createPlugin() {
        return new VRMFileLoader();
    }
}
if (_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__.SceneLoader) {
    _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.RegisterPlugin(new VRMFileLoader());
}


/***/ }),

/***/ "./src/vrm-interfaces.ts":
/*!*******************************!*\
  !*** ./src/vrm-interfaces.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IVRMMaterialPropertyShader": () => (/* binding */ IVRMMaterialPropertyShader)
/* harmony export */ });
var IVRMMaterialPropertyShader;
(function (IVRMMaterialPropertyShader) {
    IVRMMaterialPropertyShader["VRM_USE_GLTFSHADER"] = "VRM_USE_GLTFSHADER";
    IVRMMaterialPropertyShader["VRMMToon"] = "VRM/MToon";
    IVRMMaterialPropertyShader["VRMUnlitTransparentZWrite"] = "VRM/UnlitTransparentZWrite";
})(IVRMMaterialPropertyShader || (IVRMMaterialPropertyShader = {}));


/***/ }),

/***/ "./src/vrm-manager.ts":
/*!****************************!*\
  !*** ./src/vrm-manager.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VRMManager": () => (/* binding */ VRMManager)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _secondary_animation_spring_bone_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary-animation/spring-bone-controller */ "./src/secondary-animation/spring-bone-controller.ts");
/* harmony import */ var _humanoid_bone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./humanoid-bone */ "./src/humanoid-bone.ts");
/* harmony import */ var _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-value-binding-merger */ "./src/material-value-binding-merger.ts");




/**
 * VRM キャラクターを動作させるためのマネージャ
 */
class VRMManager {
    /**
     *
     * @param ext glTF.extensions.VRM の中身 json
     * @param scene
     * @param meshesFrom この番号以降のメッシュがこの VRM に該当する
     * @param transformNodesFrom この番号以降の TransformNode がこの VRM に該当する
     * @param materialsNodesFrom この番号以降の Material がこの VRM に該当する
     */
    constructor(ext, scene, meshesFrom, transformNodesFrom, materialsNodesFrom) {
        this.ext = ext;
        this.scene = scene;
        this.meshesFrom = meshesFrom;
        this.transformNodesFrom = transformNodesFrom;
        this.materialsNodesFrom = materialsNodesFrom;
        this.isBinaryMorphMap = {};
        this.morphTargetMap = {};
        this.materialValueBindingMergerMap = {};
        this.presetMorphTargetMap = {};
        this.transformNodeMap = {};
        this.transformNodeCache = {};
        this.meshCache = {};
        this.meshCache = this.constructMeshCache();
        this.transformNodeCache = this.constructTransformNodeCache();
        this.springBoneController = new _secondary_animation_spring_bone_controller__WEBPACK_IMPORTED_MODULE_1__.SpringBoneController(this.ext.secondaryAnimation, this.findTransformNode.bind(this));
        if (this.ext.blendShapeMaster && this.ext.blendShapeMaster.blendShapeGroups) {
            this.constructIsBinaryMap();
            this.constructMorphTargetMap();
            this.constructMaterialValueBindingMergerMap();
        }
        this.constructTransformNodeMap();
        this._humanoidBone = new _humanoid_bone__WEBPACK_IMPORTED_MODULE_2__.HumanoidBone(this.transformNodeMap);
    }
    /**
     * Secondary Animation を更新する
     *
     * @param deltaTime 前フレームからの経過秒数(sec)
     */
    async update(deltaTime) {
        await this.springBoneController.update(deltaTime);
    }
    /**
     * 破棄処理
     */
    dispose() {
        this.springBoneController.dispose();
        this._humanoidBone.dispose();
        this.morphTargetMap = null;
        this.materialValueBindingMergerMap = null;
        this.presetMorphTargetMap = null;
        this.transformNodeMap = null;
        this.transformNodeCache = null;
        this.meshCache = null;
        this._rootMesh = null;
    }
    /**
     * モーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    morphing(label, value) {
        const v = this.calcMorphValue(label, value);
        if (this.morphTargetMap[label]) {
            this.morphTargetMap[label].forEach((setting) => {
                setting.target.influence = v * (setting.weight / 100);
            });
        }
        if (this.materialValueBindingMergerMap[label]) {
            this.materialValueBindingMergerMap[label].morphing(v);
        }
    }
    /**
     * プリセットモーフのモーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    morphingPreset(label, value) {
        if (!this.presetMorphTargetMap[label]) {
            return;
        }
        const v = this.calcMorphValue(label, value);
        this.presetMorphTargetMap[label].forEach((setting) => {
            setting.target.influence = v * (setting.weight / 100);
        });
    }
    /**
     * モーフィング用の値を計算する
     * @param label モーフ名
     * @param value 値
     */
    calcMorphValue(label, value) {
        const v = Math.max(0.0, Math.min(1.0, value));
        if (this.isBinaryMorphMap[label]) {
            return v > 0.5 ? 1.0 : 0.0;
        }
        return v;
    }
    /**
     * list morphing name
     */
    getMorphingList() {
        return Object.keys(this.morphTargetMap);
    }
    /**
     * 一人称時のカメラ位置を絶対座標として取得する
     *
     * firstPersonBone が未設定の場合は null を返す
     *
     * @returns 一人称時のカメラの現在における絶対座標
     */
    getFirstPersonCameraPosition() {
        const firstPersonBone = this.getFirstPersonBone();
        if (!firstPersonBone) {
            return null;
        }
        const basePos = firstPersonBone.getAbsolutePosition();
        const offsetPos = this.ext.firstPerson.firstPersonBoneOffset;
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3(basePos.x + offsetPos.x, basePos.y + offsetPos.y, basePos.z + offsetPos.z);
    }
    /**
     * 一人称時に頭とみなす TransformNode を取得する
     */
    getFirstPersonBone() {
        return this.findTransformNode(this.ext.firstPerson.firstPersonBone);
    }
    /**
     * ボーン名からそのボーンに該当する TransformNode を取得する
     *
     * @param name HumanBoneName
     * @deprecated Use humanoidBone getter instead. This method will delete at v2.
     */
    getBone(name) {
        return this.transformNodeMap[name] || null;
    }
    /**
     * Get HumanoidBone Methods
     */
    get humanoidBone() {
        return this._humanoidBone;
    }
    /**
     * VRM Root mesh
     *
     * Useful for Model Transformation
     */
    get rootMesh() {
        return this._rootMesh;
    }
    /**
     * node 番号から該当する TransformNode を探す
     * 数が多くなるのでキャッシュに参照を持つ構造にする
     * gltf の node 番号は `metadata.gltf.pointers` に記録されている
     * @param nodeIndex
     */
    findTransformNode(nodeIndex) {
        return this.transformNodeCache[nodeIndex] || null;
    }
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     * @deprecated Use findMeshes instead. This method has broken.
     */
    findMesh(meshIndex) {
        return (this.meshCache[meshIndex] && this.meshCache[meshIndex][0]) || null;
    }
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     */
    findMeshes(meshIndex) {
        return this.meshCache[meshIndex] || null;
    }
    /**
     * 事前に MorphTarget と isBinary を紐付ける
     */
    constructIsBinaryMap() {
        this.ext.blendShapeMaster.blendShapeGroups.forEach((g) => {
            this.isBinaryMorphMap[g.name] = g.isBinary;
        });
    }
    /**
     * 事前に MorphTarget と BlendShape を紐付ける
     */
    constructMorphTargetMap() {
        this.ext.blendShapeMaster.blendShapeGroups.forEach((g) => {
            if (!g.binds) {
                return;
            }
            g.binds.forEach((b) => {
                const meshes = this.findMeshes(b.mesh);
                if (!meshes) {
                    console.log(`Undefined BlendShapeBind Mesh`, b);
                    return;
                }
                meshes.forEach((mesh) => {
                    const morphTargetManager = mesh.morphTargetManager;
                    if (!morphTargetManager) {
                        console.log(`Undefined morphTargetManager`, b);
                        return;
                    }
                    const target = morphTargetManager.getTarget(b.index);
                    this.morphTargetMap[g.name] = this.morphTargetMap[g.name] || [];
                    this.morphTargetMap[g.name].push({
                        target,
                        weight: b.weight,
                    });
                    if (g.presetName) {
                        this.presetMorphTargetMap[g.presetName] = this.presetMorphTargetMap[g.presetName] || [];
                        this.presetMorphTargetMap[g.presetName].push({
                            target,
                            weight: b.weight,
                        });
                    }
                });
            });
        });
    }
    /**
     * 事前に MaterialValueBindingMerger とモーフ名を紐付ける
     */
    constructMaterialValueBindingMergerMap() {
        const materials = this.scene.materials.slice(this.materialsNodesFrom);
        this.ext.blendShapeMaster.blendShapeGroups.forEach((g) => {
            if (!g.materialValues) {
                return;
            }
            this.materialValueBindingMergerMap[g.name] = new _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_3__.MaterialValueBindingMerger(materials, g.materialValues);
        });
    }
    /**
     * 事前に TransformNode と bone 名を紐づける
     */
    constructTransformNodeMap() {
        this.ext.humanoid.humanBones.forEach((b) => {
            const node = this.findTransformNode(b.node);
            if (!node) {
                return;
            }
            this.transformNodeMap[b.bone] = node;
        });
    }
    /**
     * node 番号と TransformNode を紐づける
     */
    constructTransformNodeCache() {
        const cache = {};
        for (let index = this.transformNodesFrom; index < this.scene.transformNodes.length; index++) {
            const node = this.scene.transformNodes[index];
            // ポインタが登録されていないものは省略
            if (!node || !node.metadata || !node.metadata.gltf || !node.metadata.gltf.pointers || node.metadata.gltf.pointers.length === 0) {
                continue;
            }
            for (const pointer of node.metadata.gltf.pointers) {
                if (pointer.startsWith('/nodes/')) {
                    const nodeIndex = parseInt(pointer.substr(7), 10);
                    cache[nodeIndex] = node;
                    break;
                }
            }
        }
        return cache;
    }
    /**
     * mesh 番号と Mesh を紐づける
     */
    constructMeshCache() {
        const cache = {};
        for (let index = this.meshesFrom; index < this.scene.meshes.length; index++) {
            const mesh = this.scene.meshes[index];
            if (mesh.id === '__root__') {
                this._rootMesh = mesh;
                continue;
            }
            // ポインタが登録されていないものは省略
            if (!mesh || !mesh.metadata || !mesh.metadata.gltf || !mesh.metadata.gltf.pointers || mesh.metadata.gltf.pointers.length === 0) {
                continue;
            }
            for (const pointer of mesh.metadata.gltf.pointers) {
                const match = pointer.match(/^\/meshes\/(\d+).+$/);
                if (match) {
                    const nodeIndex = parseInt(match[1], 10);
                    cache[nodeIndex] = cache[nodeIndex] || [];
                    cache[nodeIndex].push(mesh);
                    break;
                }
            }
        }
        return cache;
    }
}


/***/ }),

/***/ "./src/vrm-material-generator.ts":
/*!***************************************!*\
  !*** ./src/vrm-material-generator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VRMMaterialGenerator": () => (/* binding */ VRMMaterialGenerator)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylon-mtoon-material */ "./node_modules/babylon-mtoon-material/dist/index.module.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vrm-interfaces */ "./src/vrm-interfaces.ts");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");




/**
 * VRM で指定される Material を生成する
 * [VRM が提供するシェーダ](https://vrm.dev/en/univrm/shaders/index.html) を特定し読み込む
 * - UnlitTexture: 不透明, VRM ファイル側で [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_unlit) が定義されているため、何もしない
 * - UnlitCutout: 透明度が閾値以下の部分を透明とする, 同上
 * - UnlitTransparent: アルファブレンド。ZWriteしない, 同上
 * - UnlitTransparentZWrite: アルファブレンド。ZWriteする, 同上に加え、プロパティで ZWrite を強制しています
 * - MToon: MToonMaterial を差し替えています。
 */
class VRMMaterialGenerator {
    /**
     * @inheritdoc
     */
    constructor(loader) {
        this.loader = loader;
    }
    /**
     * マテリアルを生成する Promise を返す
     * VRM 対象外の場合は null
     */
    generate(context, material, mesh, babylonDrawMode, assign) {
        const materialProp = this.findMaterialPropertyByName(material.name, this.getMaterialProperties());
        if (!materialProp) {
            return null;
        }
        mesh.alphaIndex = materialProp.renderQueue;
        const newMaterial = this.createMaterialByShader(context, material, babylonDrawMode, materialProp);
        if (!newMaterial) {
            return null;
        }
        assign(newMaterial);
        if (newMaterial instanceof babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__.MToonMaterial) {
            return this.loadMToonTexturesAsync(context, newMaterial, materialProp);
        }
        return Promise.resolve(newMaterial);
    }
    /**
     * VRM または VCI からマテリアルプロパティの配列を探す
     */
    getMaterialProperties() {
        if (!this.loader.gltf.extensions) {
            return [];
        }
        if (this.loader.gltf.extensions.VRM && this.loader.gltf.extensions.VRM.materialProperties) {
            return this.loader.gltf.extensions.VRM.materialProperties;
        }
        if (this.loader.gltf.extensions.VCAST_vci_material_unity && this.loader.gltf.extensions.VCAST_vci_material_unity.materials) {
            return this.loader.gltf.extensions.VCAST_vci_material_unity.materials;
        }
        return [];
    }
    /**
     * マテリアル名から MaterialProperty を探す
     * @param materialName マテリアル名
     * @param extension 拡張データ
     */
    findMaterialPropertyByName(materialName, materials) {
        if (!materialName || !materials) {
            return null;
        }
        const mats = materials.filter((v) => v.name === materialName);
        if (mats.length === 0) {
            return null;
        }
        else if (mats.length >= 2) {
            this.loader.log(`Duplicated vrm material name found: ${materialName}`);
        }
        return mats[mats.length - 1];
    }
    /**
     * テクスチャを読み込む
     * @param context 現在のコンテキスト
     * @param material 生成した MToonMaterial
     * @param prop 生成した MToonMaterial のマテリアルプロパティ
     */
    loadMToonTexturesAsync(context, material, prop) {
        const promises = [];
        // 全てのテクスチャの UV Offset & Scale はメインテクスチャのものを流用する
        const uvOffsetScale = prop.vectorProperties._MainTex;
        if (!uvOffsetScale) {
            return Promise.resolve(material);
        }
        const applyTexture = (index, callback) => {
            applyPropertyWhenDefined(index, (value) => {
                promises.push(this.loader.loadTextureInfoAsync(`${context}/textures/${index}`, { index: value }, (babylonTexture) => {
                    // 実際は Texture インスタンスが来るのでキャスト
                    const t = babylonTexture;
                    t.uOffset = uvOffsetScale[0];
                    t.vOffset = uvOffsetScale[1];
                    t.uScale = uvOffsetScale[2];
                    t.vScale = uvOffsetScale[3];
                    callback(babylonTexture);
                }));
            });
        };
        applyTexture(prop.textureProperties._MainTex, (texture) => {
            if (material.alphaBlend || material.alphaTest) {
                texture.hasAlpha = true;
            }
            material.diffuseTexture = texture;
        });
        applyTexture(prop.textureProperties._ShadeTexture, (texture) => (material.shadeTexture = texture));
        applyTexture(prop.textureProperties._BumpMap, (texture) => (material.bumpTexture = texture));
        applyTexture(prop.textureProperties._ReceiveShadowTexture, (texture) => (material.receiveShadowTexture = texture));
        applyTexture(prop.textureProperties._ShadingGradeTexture, (texture) => (material.shadingGradeTexture = texture));
        applyTexture(prop.textureProperties._RimTexture, (texture) => (material.rimTexture = texture));
        applyTexture(prop.textureProperties._SphereAdd, (texture) => (material.matCapTexture = texture));
        applyTexture(prop.textureProperties._EmissionMap, (texture) => (material.emissiveTexture = texture));
        applyTexture(prop.textureProperties._OutlineWidthTexture, (texture) => (material.outlineWidthTexture = texture));
        applyTexture(prop.textureProperties._UvAnimMaskTexture, (texture) => (material.uvAnimationMaskTexture = texture));
        return Promise.all(promises).then(() => material);
    }
    /**
     * シェーダ名からマテリアルを推測して生成する
     * @param context 現在のコンテキスト
     * @param material glTF マテリアル
     * @param babylonDrawMode 描画種類
     * @param prop 生成するマテリアルプロパティ
     */
    createMaterialByShader(context, material, babylonDrawMode, prop) {
        if (prop.shader === _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__.IVRMMaterialPropertyShader.VRMMToon) {
            const mtoonMaterial = new babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__.MToonMaterial(material.name || `MToonMaterial${material.index}`, this.loader.babylonScene);
            this.setMToonMaterialProperties(mtoonMaterial, prop);
            return mtoonMaterial;
        }
        if (prop.shader === _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__.IVRMMaterialPropertyShader.VRMUnlitTransparentZWrite) {
            const mat = this.loader.createMaterial(context, material, babylonDrawMode);
            // 通常マテリアルに Depth Write を強制
            mat.disableDepthWrite = false;
            mat.forceDepthWrite = true;
            return mat;
        }
        return null;
    }
    /**
     * マテリアルに VRM プロパティを設定
     * VRM プロパティとマテリアルプロパティのマッピングを行っている
     * 初期値はマテリアル実装側に持っているため、値がある場合のみ上書きする
     */
    setMToonMaterialProperties(material, prop) {
        applyPropertyWhenDefined(prop.floatProperties._Cutoff, (value) => (material.alphaCutOff = value));
        applyPropertyWhenDefined(prop.vectorProperties._Color, (value) => {
            material.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(value[0], value[1], value[2]);
            material.alpha = value[3];
        });
        applyPropertyWhenDefined(prop.vectorProperties._ShadeColor, (value) => {
            material.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._BumpScale, (value) => (material.bumpScale = value));
        applyPropertyWhenDefined(prop.floatProperties._ReceiveShadowRate, (value) => (material.receiveShadowRate = value));
        applyPropertyWhenDefined(prop.floatProperties._ShadingGradeRate, (value) => (material.shadingGradeRate = value));
        applyPropertyWhenDefined(prop.floatProperties._ShadeShift, (value) => (material.shadeShift = value));
        applyPropertyWhenDefined(prop.floatProperties._ShadeToony, (value) => (material.shadeToony = value));
        applyPropertyWhenDefined(prop.floatProperties._LightColorAttenuation, (value) => (material.lightColorAttenuation = value));
        applyPropertyWhenDefined(prop.floatProperties._IndirectLightIntensity, (value) => (material.indirectLightIntensity = value));
        applyPropertyWhenDefined(prop.vectorProperties._RimColor, (value) => {
            material.rimColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._RimLightingMix, (value) => (material.rimLightingMix = value));
        applyPropertyWhenDefined(prop.floatProperties._RimFresnelPower, (value) => (material.rimFresnelPower = value));
        applyPropertyWhenDefined(prop.floatProperties._RimLift, (value) => (material.rimLift = value));
        applyPropertyWhenDefined(prop.vectorProperties._EmissionColor, (value) => {
            material.emissiveColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._OutlineWidth, (value) => (material.outlineWidth = value));
        applyPropertyWhenDefined(prop.floatProperties._OutlineScaledMaxDistance, (value) => (material.outlineScaledMaxDistance = value));
        applyPropertyWhenDefined(prop.vectorProperties._OutlineColor, (value) => {
            material.outlineColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._OutlineLightingMix, (value) => (material.outlineLightingMix = value));
        applyPropertyWhenDefined(prop.floatProperties._UvAnimScrollX, (value) => (material.uvAnimationScrollX = value));
        applyPropertyWhenDefined(prop.floatProperties._UvAnimScrollY, (value) => (material.uvAnimationScrollY = value));
        applyPropertyWhenDefined(prop.floatProperties._UvAnimRotation, (value) => (material.uvAnimationRotation = value));
        applyPropertyWhenDefined(prop.floatProperties._DebugMode, (value) => (material.debugMode = value));
        applyPropertyWhenDefined(prop.floatProperties._BlendMode, (value) => {
            switch (value) {
                case 0: // Opaque
                    material.alphaBlend = false;
                    material.alphaTest = false;
                    break;
                case 1: // TransparentCutout
                    material.alphaBlend = false;
                    material.alphaTest = true;
                    material.alphaMode = _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.ALPHA_COMBINE;
                    break;
                case 2: // Transparent
                    material.alphaBlend = true;
                    material.alphaTest = false;
                    material.alphaMode = _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.ALPHA_COMBINE;
                    break;
            }
        });
        applyPropertyWhenDefined(prop.floatProperties._OutlineWidthMode, (value) => (material.outlineWidthMode = value));
        applyPropertyWhenDefined(prop.floatProperties._OutlineColorMode, (value) => (material.outlineColorMode = value));
        applyPropertyWhenDefined(prop.floatProperties._CullMode, (value) => (material.cullMode = value));
        applyPropertyWhenDefined(prop.floatProperties._OutlineCullMode, (value) => (material.outlineCullMode = value));
        applyPropertyWhenDefined(prop.keywordMap._ALPHABLEND_ON, (value) => (material.alphaBlend = value));
        applyPropertyWhenDefined(prop.keywordMap._ALPHATEST_ON, (value) => (material.alphaTest = value));
        applyPropertyWhenDefined(prop.floatProperties._ZWrite, (value) => {
            material.forceDepthWrite = Math.round(value) === 1;
            if (material.forceDepthWrite) {
                material.disableDepthWrite = false;
            }
        });
    }
}
/**
 * プロパティが設定されていればコールバックを実行する
 */
function applyPropertyWhenDefined(prop, callback) {
    if (typeof prop === 'undefined') {
        return;
    }
    callback(prop);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbabylon_vrm_loader"] = self["webpackChunkbabylon_vrm_loader"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors~main"], () => (__webpack_require__("./src/test/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main.js.map