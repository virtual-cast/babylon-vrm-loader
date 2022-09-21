(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["babylon-vrm-loader"] = factory();
	else
		root["babylon-vrm-loader"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpbabylon_vrm_loader"] = window["webpackJsonpbabylon_vrm_loader"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/test/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/errors.ts":
/*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************/
/*! exports provided: BoneNotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneNotFoundError", function() { return BoneNotFoundError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Throws when mandatory bone could not find
 */
var BoneNotFoundError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BoneNotFoundError, _super);
    function BoneNotFoundError(boneName) {
        var _this = _super.call(this, "Bone:" + boneName + " NotFound") || this;
        _this.boneName = boneName;
        _this.name = 'BoneNotFoundError';
        return _this;
    }
    return BoneNotFoundError;
}(Error));



/***/ }),

/***/ "./src/humanoid-bone.ts":
/*!******************************!*\
  !*** ./src/humanoid-bone.ts ***!
  \******************************/
/*! exports provided: HumanoidBone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanoidBone", function() { return HumanoidBone; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/errors.ts");

/**
 * HumanoidBone を取得するメソッド群
 * @see https://docs.unity3d.com/ja/2018.3/ScriptReference/HumanBodyBones.html
 */
var HumanoidBone = /** @class */ (function () {
    function HumanoidBone(nodeMap) {
        this.nodeMap = nodeMap;
    }
    HumanoidBone.prototype.dispose = function () {
        this.nodeMap = null;
    };
    Object.defineProperty(HumanoidBone.prototype, "hips", {
        /**
         * 尻
         */
        get: function () {
            return this.getMandatoryBone('hips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftUpperLeg", {
        /**
         * 左太もも
         */
        get: function () {
            return this.getMandatoryBone('leftUpperLeg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightUpperLeg", {
        /**
         * 右太もも
         */
        get: function () {
            return this.getMandatoryBone('rightUpperLeg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftLowerLeg", {
        /**
         * 左ひざ
         */
        get: function () {
            return this.getMandatoryBone('leftLowerLeg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightLowerLeg", {
        /**
         * 右ひざ
         */
        get: function () {
            return this.getMandatoryBone('rightLowerLeg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftFoot", {
        /**
         * 左足首
         */
        get: function () {
            return this.getMandatoryBone('leftFoot');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightFoot", {
        /**
         * 右足首
         */
        get: function () {
            return this.getMandatoryBone('rightFoot');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "spine", {
        /**
         * 脊椎の第一
         */
        get: function () {
            return this.getMandatoryBone('spine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "chest", {
        /**
         * 胸
         */
        get: function () {
            return this.getMandatoryBone('chest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "neck", {
        /**
         * 首
         */
        get: function () {
            return this.getMandatoryBone('neck');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "head", {
        /**
         * 頭
         */
        get: function () {
            return this.getMandatoryBone('head');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftShoulder", {
        /**
         * 左肩
         */
        get: function () {
            return this.getMandatoryBone('leftShoulder');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightShoulder", {
        /**
         * 右肩
         */
        get: function () {
            return this.getMandatoryBone('rightShoulder');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftUpperArm", {
        /**
         * 左上腕
         */
        get: function () {
            return this.getMandatoryBone('leftUpperArm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightUpperArm", {
        /**
         * 右上腕
         */
        get: function () {
            return this.getMandatoryBone('rightUpperArm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftLowerArm", {
        /**
         * 左ひじ
         */
        get: function () {
            return this.getMandatoryBone('leftLowerArm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightLowerArm", {
        /**
         * 右ひじ
         */
        get: function () {
            return this.getMandatoryBone('rightLowerArm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftHand", {
        /**
         * 左手首
         */
        get: function () {
            return this.getMandatoryBone('leftHand');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightHand", {
        /**
         * 右手首
         */
        get: function () {
            return this.getMandatoryBone('rightHand');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftToes", {
        /**
         * 左つま先(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftToes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightToes", {
        /**
         * 右つま先(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightToes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftEye", {
        /**
         * 左目(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftEye');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightEye", {
        /**
         * 右目(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightEye');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "jaw", {
        /**
         * 顎(Optional)
         */
        get: function () {
            return this.getOptionalBone('jaw');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftThumbProximal", {
        /**
         * 左親指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftThumbProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftThumbIntermediate", {
        /**
         * 左親指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftThumbIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftThumbDistal", {
        /**
         * 左親指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftThumbDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftIndexProximal", {
        /**
         * 左人差し指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftIndexProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftIndexIntermediate", {
        /**
         * 左人差し指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftIndexIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftIndexDistal", {
        /**
         * 左人差し指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftIndexDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftMiddleProximal", {
        /**
         * 左中指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftMiddleProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftMiddleIntermediate", {
        /**
         * 左中指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftMiddleIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftMiddleDistal", {
        /**
         * 左中指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftMiddleDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftRingProximal", {
        /**
         * 左薬指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftRingProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftRingIntermediate", {
        /**
         * 左薬指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftRingIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftRingDistal", {
        /**
         * 左薬指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftRingDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftLittleProximal", {
        /**
         * 左小指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftLittleProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftLittleIntermediate", {
        /**
         * 左小指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftLittleIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "leftLittleDistal", {
        /**
         * 左小指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('leftLittleDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightThumbProximal", {
        /**
         * 右親指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightThumbProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightThumbIntermediate", {
        /**
         * 右親指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightThumbIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightThumbDistal", {
        /**
         * 右親指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightThumbDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightIndexProximal", {
        /**
         * 右人差し指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightIndexProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightIndexIntermediate", {
        /**
         * 右人差し指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightIndexIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightIndexDistal", {
        /**
         * 右人差し指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightIndexDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightMiddleProximal", {
        /**
         * 右中指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightMiddleProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightMiddleIntermediate", {
        /**
         * 右中指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightMiddleIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightMiddleDistal", {
        /**
         * 右中指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightMiddleDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightRingProximal", {
        /**
         * 右薬指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightRingProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightRingIntermediate", {
        /**
         * 右薬指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightRingIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightRingDistal", {
        /**
         * 右薬指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightRingDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightLittleProximal", {
        /**
         * 右小指第一指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightLittleProximal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightLittleIntermediate", {
        /**
         * 右小指第二指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightLittleIntermediate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "rightLittleDistal", {
        /**
         * 右小指第三指骨(Optional)
         */
        get: function () {
            return this.getOptionalBone('rightLittleDistal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanoidBone.prototype, "upperChest", {
        /**
         * 上胸(Optional)
         */
        get: function () {
            return this.getOptionalBone('upperChest');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 必須ボーンを取得する。取得出来ない場合は例外を発生する
     *
     * @throws BoneNotFoundError
     * @param name HumanoidBoneName
     */
    HumanoidBone.prototype.getMandatoryBone = function (name) {
        var node = this.nodeMap[name];
        if (!node) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_0__["BoneNotFoundError"](name);
        }
        return node;
    };
    /**
     * オプショナルボーンを取得する
     *
     * @param name HumanoidBoneName
     */
    HumanoidBone.prototype.getOptionalBone = function (name) {
        return this.nodeMap && this.nodeMap[name] || null;
    };
    return HumanoidBone;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: BoneNotFoundError, HumanoidBone, MaterialValueBindingMerger, VCAST_vci_material_unity, VRM, VRMFileLoader, IVRMMaterialPropertyShader, VRMManager, VRMMaterialGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoneNotFoundError", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["BoneNotFoundError"]; });

/* harmony import */ var _humanoid_bone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./humanoid-bone */ "./src/humanoid-bone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HumanoidBone", function() { return _humanoid_bone__WEBPACK_IMPORTED_MODULE_1__["HumanoidBone"]; });

/* harmony import */ var _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-value-binding-merger */ "./src/material-value-binding-merger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialValueBindingMerger", function() { return _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_2__["MaterialValueBindingMerger"]; });

/* harmony import */ var _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vcast-vci-material-unity */ "./src/vcast-vci-material-unity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCAST_vci_material_unity", function() { return _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_3__["VCAST_vci_material_unity"]; });

/* harmony import */ var _vci_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vci-interfaces */ "./src/vci-interfaces.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _vrm_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vrm-extension */ "./src/vrm-extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRM", function() { return _vrm_extension__WEBPACK_IMPORTED_MODULE_5__["VRM"]; });

/* harmony import */ var _vrm_file_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vrm-file-loader */ "./src/vrm-file-loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMFileLoader", function() { return _vrm_file_loader__WEBPACK_IMPORTED_MODULE_6__["VRMFileLoader"]; });

/* harmony import */ var _vrm_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vrm-interfaces */ "./src/vrm-interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IVRMMaterialPropertyShader", function() { return _vrm_interfaces__WEBPACK_IMPORTED_MODULE_7__["IVRMMaterialPropertyShader"]; });

/* harmony import */ var _vrm_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vrm-manager */ "./src/vrm-manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMManager", function() { return _vrm_manager__WEBPACK_IMPORTED_MODULE_8__["VRMManager"]; });

/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMMaterialGenerator", function() { return _vrm_material_generator__WEBPACK_IMPORTED_MODULE_9__["VRMMaterialGenerator"]; });













/***/ }),

/***/ "./src/material-value-binding-merger.ts":
/*!**********************************************!*\
  !*** ./src/material-value-binding-merger.ts ***!
  \**********************************************/
/*! exports provided: MaterialValueBindingMerger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialValueBindingMerger", function() { return MaterialValueBindingMerger; });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylon-mtoon-material */ "./node_modules/babylon-mtoon-material/dist/index.module.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__);



var PBRMaterialTextureMap = {
    _MainTex: 'albedoTexture',
};
var PBRMaterialColorMap = {
    _Color: 'albedoColor',
};
var MToonMaterialTextureMap = {
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
var MToonMaterialColorMap = {
    _Color: 'diffuseColor',
    _ShadeColor: 'shadeColor',
    _RimColor: 'rimColor',
    _EmissionColor: 'emissiveColor',
    _OutlineColor: 'outlineColor',
};
/**
 * @see https://github.com/vrm-c/UniVRM/blob/4ffd97c2e9339683ce9bf21e73f510bd90c2a5b2/Assets/VRM/Runtime/BlendShape/MaterialValueBindingMerger.cs
 */
var MaterialValueBindingMerger = /** @class */ (function () {
    /**
     * @param materials VRMの全 Material
     * @param materialValues
     */
    function MaterialValueBindingMerger(materials, materialValues) {
        var _this = this;
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
        materials.forEach(function (material) {
            if (material instanceof babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__["MToonMaterial"] || material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["PBRMaterial"]) {
                _this.m_materialMap[material.name] = material;
            }
        });
        materialValues.forEach(function (materialValue) {
            var bindingKey = _this.makeBindingKey(materialValue);
            if (_this.m_materialSetterMap[bindingKey]) {
                return;
            }
            var material = _this.m_materialMap[materialValue.materialName];
            if (!material) {
                return;
            }
            var baseValue = _this.getMaterialProperty(material, materialValue.propertyName);
            if (!baseValue || materialValue.targetValue.length !== 4) {
                return;
            }
            // モーフィング用に baseValue (初期値) と materialValue を保存する
            _this.baseValueCache[bindingKey] = baseValue;
            _this.materialValuesToApply[bindingKey] = materialValue;
            var targetValue = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector4"].FromArray(materialValue.targetValue);
            var valueName = materialValue.propertyName;
            // Unity と座標系が異なるため、テクスチャの vOffset を反転する
            if (material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["PBRMaterial"]) {
                if (Object.keys(PBRMaterialTextureMap).some(function (k) { return valueName.startsWith(k); })) {
                    targetValue.w *= -1;
                }
            }
            else if (Object.keys(MToonMaterialTextureMap).some(function (k) { return valueName.startsWith(k); })) {
                targetValue.w *= -1;
            }
            if (valueName.endsWith('_ST_S')) {
                // テクスチャの u方向 のみ更新する
                var setter = function (value, firstValue) {
                    var propValue = firstValue
                        ? baseValue.add((targetValue.subtract(baseValue)).scale(value))
                        : _this.getMaterialProperty(material, valueName).add(targetValue.subtract(baseValue).scale(value));
                    var src = _this.getMaterialProperty(material, valueName);
                    src.x = propValue.x;
                    src.z = propValue.z;
                    _this.updateMaterialProperty(material, valueName, src);
                };
                _this.m_materialSetterMap[bindingKey] = setter;
            }
            else if (valueName.endsWith('_ST_T')) {
                // テクスチャの v方向 のみ更新する
                var setter = function (value, firstValue) {
                    var propValue = firstValue
                        ? baseValue.add((targetValue.subtract(baseValue)).scale(value))
                        : _this.getMaterialProperty(material, valueName).add(targetValue.subtract(baseValue).scale(value));
                    var src = _this.getMaterialProperty(material, valueName);
                    src.y = propValue.y;
                    src.w = propValue.w;
                    _this.updateMaterialProperty(material, valueName, src);
                };
                _this.m_materialSetterMap[bindingKey] = setter;
            }
            else {
                var setter = function (value, firstValue) {
                    var propValue = firstValue
                        ? baseValue.add((targetValue.subtract(baseValue)).scale(value))
                        : _this.getMaterialProperty(material, valueName).add(targetValue.subtract(baseValue).scale(value));
                    _this.updateMaterialProperty(material, valueName, propValue);
                };
                _this.m_materialSetterMap[bindingKey] = setter;
            }
        });
    }
    /**
     * UniVRM では Dictionary のキー用のクラスを定義しているが、文字列で代用する
     * MaterialValueBinding.BaseValue は対応するプロパティの初期値なので無視できる
     */
    MaterialValueBindingMerger.prototype.makeBindingKey = function (materialValue) {
        return materialValue.materialName + "_" + materialValue.propertyName + "_" + materialValue.targetValue.join('-');
    };
    /**
     * UniVRM では Dictionary のキー用のクラスを定義しているが、文字列で代用する
     */
    MaterialValueBindingMerger.prototype.makeTargetKey = function (materialValue) {
        return materialValue.materialName + "_" + materialValue.propertyName;
    };
    /**
     * モーフィングを行う
     * @param value 値(0〜1)
     */
    MaterialValueBindingMerger.prototype.morphing = function (value) {
        this.accumulateValue(value);
        this.apply();
    };
    /**
     * materialValue ごとに重みを計算する
     */
    MaterialValueBindingMerger.prototype.accumulateValue = function (value) {
        var _this = this;
        this.materialValues.forEach(function (materialValue) {
            var bindingKey = _this.makeBindingKey(materialValue);
            if (_this.m_materialValueMap[bindingKey]) {
                _this.m_materialValueMap[bindingKey] += value;
            }
            else {
                _this.m_materialValueMap[bindingKey] = value;
            }
        });
    };
    /**
     * Material のプロパティを更新する
     */
    MaterialValueBindingMerger.prototype.apply = function () {
        var _this = this;
        this.m_used = {};
        Object.entries(this.materialValuesToApply).forEach(function (_a) {
            var bindingKey = _a[0], materialValue = _a[1];
            var targetKey = _this.makeTargetKey(materialValue);
            if (!(targetKey in _this.m_used)) {
                var material = _this.m_materialMap[materialValue.materialName];
                var value = _this.baseValueCache[bindingKey].clone();
                // 対象のプロパティを初期値に戻す
                var valueName = materialValue.propertyName;
                if (valueName.endsWith('_ST_S')) {
                    var v = _this.getMaterialProperty(material, valueName);
                    value.y = v.y;
                    value.w = v.w;
                }
                else if (valueName.endsWith('_ST_T')) {
                    var v = _this.getMaterialProperty(material, valueName);
                    value.x = v.x;
                    value.z = v.z;
                }
                _this.updateMaterialProperty(material, valueName, value);
                _this.m_used[targetKey] = true;
            }
            var setter = _this.m_materialSetterMap[bindingKey];
            if (setter) {
                setter(_this.m_materialValueMap[bindingKey], false);
            }
        });
        this.m_materialValueMap = {};
    };
    /**
     * マテリアルのテクスチャか色に対応する Vector4 を取得する
     */
    MaterialValueBindingMerger.prototype.getMaterialProperty = function (material, propertyName) {
        var match = propertyName.match(/^(_[^_]+)/);
        if (!match || !match[1]) {
            return null;
        }
        var key = match[1];
        if (material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["PBRMaterial"]) {
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
    };
    /**
     * Texture を Vector4 に変換する
     */
    MaterialValueBindingMerger.prototype.convertTextureIntoVector4WhenNotNull = function (texture) {
        if (!texture) {
            return null;
        }
        var t = texture;
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector4"](t.uScale, t.vScale, t.uOffset, t.vOffset);
    };
    /**
     * Color3 に alpha を加えて Vector4 に変換する
     */
    MaterialValueBindingMerger.prototype.convertColorIntoVector4 = function (color, alpha) {
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector4"](color.r, color.g, color.b, alpha);
    };
    /**
     * マテリアルのテクスチャか色を更新する
     */
    MaterialValueBindingMerger.prototype.updateMaterialProperty = function (material, propertyName, value) {
        var match = propertyName.match(/^(_[^_]+)/);
        if (!match || !match[1]) {
            return;
        }
        var key = match[1];
        if (material instanceof _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["PBRMaterial"]) {
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
    };
    /**
     * Texture を Vector4 で更新する
     */
    MaterialValueBindingMerger.prototype.updateTextureWhenNotNull = function (texture, value) {
        if (texture) {
            var t = texture;
            t.uScale = value.x;
            t.vScale = value.y;
            t.uOffset = value.z;
            t.vOffset = value.w;
        }
    };
    /**
     * Color3 を Vector4 で更新する
     */
    MaterialValueBindingMerger.prototype.updateColor = function (color, value) {
        color.r = value.x;
        color.g = value.y;
        color.b = value.z;
    };
    return MaterialValueBindingMerger;
}());



/***/ }),

/***/ "./src/secondary-animation/collider-group.ts":
/*!***************************************************!*\
  !*** ./src/secondary-animation/collider-group.ts ***!
  \***************************************************/
/*! exports provided: ColliderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColliderGroup", function() { return ColliderGroup; });
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/sphereBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collider */ "./src/secondary-animation/collider.ts");


/**
 * VRM SpringBone ColliderGroup
 */
var ColliderGroup = /** @class */ (function () {
    /**
     * @param transform The node of the collider group for setting up collision detections.
     */
    function ColliderGroup(transform) {
        this.transform = transform;
        this.colliders = [];
    }
    /**
     * Add offsetted collider
     *
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     */
    ColliderGroup.prototype.addCollider = function (offset, radius) {
        var sphere = _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_0__["SphereBuilder"].CreateSphere(this.transform.name + "_ColliderSphere", {
            segments: 6,
            diameter: radius * 2.0,
            updatable: true,
        }, this.transform.getScene());
        sphere.setParent(this.transform);
        sphere.setPositionWithLocalVector(offset);
        sphere.setEnabled(false);
        this.colliders.push(new _collider__WEBPACK_IMPORTED_MODULE_1__["Collider"](offset, radius, sphere));
    };
    return ColliderGroup;
}());



/***/ }),

/***/ "./src/secondary-animation/collider.ts":
/*!*********************************************!*\
  !*** ./src/secondary-animation/collider.ts ***!
  \*********************************************/
/*! exports provided: Collider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
/**
 * Collider
 */
var Collider = /** @class */ (function () {
    /**
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     * @param sphere The spehere mesh for worldMatrix and gizmo.
     */
    function Collider(offset, radius, sphere) {
        this.offset = offset;
        this.radius = radius;
        this.sphere = sphere;
    }
    return Collider;
}());



/***/ }),

/***/ "./src/secondary-animation/quaternion-helper.ts":
/*!******************************************************!*\
  !*** ./src/secondary-animation/quaternion-helper.ts ***!
  \******************************************************/
/*! exports provided: QuaternionHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuaternionHelper", function() { return QuaternionHelper; });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");

var _v3from = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
var _v3to = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
/**
 * Quaternion Helper
 */
var QuaternionHelper = /** @class */ (function () {
    function QuaternionHelper() {
    }
    /**
     * Creates a rotation which rotates from fromDirection to toDirection.
     *
     * @todo After upgrading babylon.js, use Quaternion.FromUnitVectorsToRef.
     * @see https://github.com/BabylonJS/Babylon.js/blob/2dbaeaa9761c42b7e39caddf494b920cdcdd2807/packages/dev/core/src/Maths/math.vector.ts#L4149-L4164
     */
    QuaternionHelper.fromToRotationToRef = function (from, to, result) {
        from.normalizeToRef(_v3from);
        to.normalizeToRef(_v3to);
        var r = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Dot(_v3from, _v3to) + 1;
        if (r < 0.001) {
            if (Math.abs(_v3from.x) > Math.abs(_v3from.z)) {
                result.set(-_v3from.y, _v3from.x, 0, 0);
            }
            else {
                result.set(0, -_v3from.z, _v3from.y, 0);
            }
        }
        else {
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].CrossToRef(_v3from, _v3to, _v3to);
            result.set(_v3to.x, _v3to.y, _v3to.z, r);
        }
        result.normalize();
    };
    return QuaternionHelper;
}());



/***/ }),

/***/ "./src/secondary-animation/spring-bone-controller.ts":
/*!***********************************************************!*\
  !*** ./src/secondary-animation/spring-bone-controller.ts ***!
  \***********************************************************/
/*! exports provided: SpringBoneController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringBoneController", function() { return SpringBoneController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _collider_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider-group */ "./src/secondary-animation/collider-group.ts");
/* harmony import */ var _vrm_spring_bone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vrm-spring-bone */ "./src/secondary-animation/vrm-spring-bone.ts");




/**
 * VRM SpringBone Controller
 */
var SpringBoneController = /** @class */ (function () {
    /**
     * @param ext SecondaryAnimation Object
     * @param getBone
     */
    function SpringBoneController(ext, getBone) {
        this.ext = ext;
        var colliderGroups = this.constructColliderGroups(getBone);
        this.springs = this.constructSprings(getBone, colliderGroups);
    }
    SpringBoneController.prototype.dispose = function () {
        this.springs = [];
    };
    /**
     * Update all SpringBones
     *
     * @param deltaTime Elapsed sec from previous frame
     * @see https://docs.unity3d.com/ScriptReference/Time-deltaTime.html
     */
    SpringBoneController.prototype.update = function (deltaTime) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var promises;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // ポーズ後のあらぶり防止のため clamp
                deltaTime = Math.max(0.0, Math.min(16.666, deltaTime)) / 1000;
                promises = this.springs.map(function (spring) {
                    return spring.update(deltaTime);
                });
                return [2 /*return*/, Promise.all(promises).then(function () { })];
            });
        });
    };
    SpringBoneController.prototype.constructColliderGroups = function (getBone) {
        if (!this.ext.colliderGroups || !this.ext.colliderGroups.length) {
            return [];
        }
        var colliderGroups = [];
        this.ext.colliderGroups.forEach(function (colliderGroup) {
            var bone = getBone(colliderGroup.node);
            var g = new _collider_group__WEBPACK_IMPORTED_MODULE_2__["ColliderGroup"](bone);
            colliderGroup.colliders.forEach(function (collider) {
                g.addCollider(
                // VRM 右手系Y_UP, -Z_Front から Babylon.js 左手系Y_UP, +Z_Front にする
                new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-collider.offset.x, collider.offset.y, -collider.offset.z), collider.radius);
            });
            colliderGroups.push(g);
        });
        return colliderGroups;
    };
    SpringBoneController.prototype.constructSprings = function (getBone, colliderGroups) {
        if (!this.ext.boneGroups || !this.ext.boneGroups.length) {
            return [];
        }
        var springs = [];
        this.ext.boneGroups.forEach(function (spring) {
            var rootBones = (spring.bones || []).map(function (bone) {
                return getBone(bone);
            });
            var springColliders = (spring.colliderGroups || []).map(function (g) {
                return colliderGroups[g];
            });
            springs.push(new _vrm_spring_bone__WEBPACK_IMPORTED_MODULE_3__["VRMSpringBone"](spring.comment, spring.stiffiness, spring.gravityPower, new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](
            // VRM 右手系Y_UP, -Z_Front から Babylon.js 左手系Y_UP, +Z_Front にする
            -spring.gravityDir.x, spring.gravityDir.y, -spring.gravityDir.z).normalize(), spring.dragForce, getBone(spring.center), spring.hitRadius, rootBones, springColliders));
        });
        return springs;
    };
    return SpringBoneController;
}());



/***/ }),

/***/ "./src/secondary-animation/vrm-spring-bone-logic.ts":
/*!**********************************************************!*\
  !*** ./src/secondary-animation/vrm-spring-bone-logic.ts ***!
  \**********************************************************/
/*! exports provided: VRMSpringBoneLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRMSpringBoneLogic", function() { return VRMSpringBoneLogic; });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _quaternion_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quaternion-helper */ "./src/secondary-animation/quaternion-helper.ts");


// based on
// http://rocketjump.skr.jp/unity3d/109/
// https://github.com/dwango/UniVRM/blob/master/Scripts/SpringBone/VRMSpringBone.cs
// https://github.com/pixiv/three-vrm/blob/aad551e041fad553c19d2091e5f5eaff1eb8faa8/packages/three-vrm/src/springbone/VRMSpringBone.ts
var IDENTITY_MATRIX = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Identity();
var _v3A = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
var _v3B = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
var _v3C = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
var _quatA = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]();
var _matA = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();
var _matB = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();
/**
 * Verlet Spring Bone
 */
var VRMSpringBoneLogic = /** @class */ (function () {
    /**
     * @param center Center reference of TransformNode
     * @param radius Collision Radius
     * @param transform Base TransformNode
     */
    function VRMSpringBoneLogic(center, radius, transform) {
        this.center = center;
        this.radius = radius;
        this.transform = transform;
        this.currentTail = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.prevTail = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.nextTail = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        // Initialize rotationQuaternion when not initialized
        if (!transform.rotationQuaternion) {
            transform.rotationQuaternion = transform.rotation.toQuaternion();
        }
        var worldMatrix = transform.getWorldMatrix();
        this.centerSpacePosition = worldMatrix.getTranslation();
        this.initialLocalMatrix = transform._localMatrix.clone();
        this.initialLocalRotation = transform.rotationQuaternion.clone();
        var children = transform.getChildTransformNodes(true);
        if (children.length === 0) {
            this.initialLocalChildPosition = transform.position.clone().normalize().scaleInPlace(0.07);
        }
        else {
            this.initialLocalChildPosition = children[0].position.clone();
        }
        _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(this.initialLocalChildPosition, worldMatrix, this.currentTail);
        this.prevTail.copyFrom(this.currentTail);
        this.nextTail.copyFrom(this.currentTail);
        this.boneAxis = this.initialLocalChildPosition.normalizeToNew();
        _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(this.initialLocalChildPosition, worldMatrix, _v3A);
        this.centerSpaceBoneLength = _v3A
            .subtractInPlace(this.centerSpacePosition)
            .length();
        if (center) {
            this.getMatrixWorldToCenter(_matA);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(this.currentTail, _matA, this.currentTail);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(this.prevTail, _matA, this.prevTail);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(this.nextTail, _matA, this.nextTail);
            worldMatrix.multiplyToRef(_matA, _matA);
            _matA.getTranslationToRef(this.centerSpacePosition);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(this.initialLocalChildPosition, _matA, _v3A);
            this.centerSpaceBoneLength = _v3A
                .subtractInPlace(this.centerSpacePosition)
                .length();
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
    VRMSpringBoneLogic.prototype.update = function (stiffnessForce, dragForce, external, colliderGroups) {
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
            _v3A
                .copyFrom(this.currentTail)
                .subtractInPlace(this.prevTail)
                .scaleInPlace(1.0 - dragForce);
            this.nextTail.addInPlace(_v3A);
        }
        {
            // 親の回転による子ボーンの移動目標
            _v3A.copyFrom(this.boneAxis);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(_v3A, this.initialLocalMatrix, _v3A);
            _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(_v3A, _matB, _v3A);
            _v3A
                .subtractInPlace(this.centerSpacePosition)
                .normalize()
                .scaleInPlace(stiffnessForce);
            this.nextTail.addInPlace(_v3A);
        }
        {
            // 外力による移動量
            this.nextTail.addInPlace(external);
        }
        {
            // 長さを boneLength に強制
            this.nextTail
                .subtractInPlace(this.centerSpacePosition)
                .normalize()
                .scaleInPlace(this.centerSpaceBoneLength)
                .addInPlace(this.centerSpacePosition);
        }
        {
            // Collision で移動
            this.collide(colliderGroups, this.nextTail);
        }
        this.prevTail.copyFrom(this.currentTail);
        this.currentTail.copyFrom(this.nextTail);
        this.initialLocalMatrix.multiplyToRef(_matB, _matA);
        var initialCenterSpaceMatrixInv = _matA.invert();
        _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinatesToRef(this.nextTail, initialCenterSpaceMatrixInv, _v3A);
        _quaternion_helper__WEBPACK_IMPORTED_MODULE_1__["QuaternionHelper"].fromToRotationToRef(this.boneAxis, _v3A, _quatA);
        var applyRotation = _quatA;
        this.initialLocalRotation.multiplyToRef(applyRotation, this.transform.rotationQuaternion);
        // update WorldMatrix
        this.transform.computeWorldMatrix(true);
    };
    /**
      * Create a matrix that converts world space into center space.
      * @param result Target matrix
      */
    VRMSpringBoneLogic.prototype.getMatrixWorldToCenter = function (result) {
        if (this.center) {
            this.center.getWorldMatrix().invertToRef(result);
        }
        else {
            result.copyFrom(IDENTITY_MATRIX);
        }
        return result;
    };
    /**
     * Returns the world matrix of its parent object.
     */
    VRMSpringBoneLogic.prototype.getParentMatrixWorld = function () {
        return this.transform.parent ? this.transform.parent.getWorldMatrix() : IDENTITY_MATRIX;
    };
    /**
     * 衝突判定を行う
     * @param colliderGroups
     * @param tail
     */
    VRMSpringBoneLogic.prototype.collide = function (colliderGroups, tail) {
        var _this = this;
        colliderGroups.forEach(function (colliderGroup) {
            colliderGroup.colliders.forEach(function (collider) {
                _this.getMatrixWorldToCenter(_matA);
                collider.sphere.computeWorldMatrix().multiplyToRef(_matA, _matA);
                _matA.getTranslationToRef(_v3A);
                var colliderCenterSpacePosition = _v3A;
                var maxAbsScale = 0;
                collider.sphere.absoluteScaling.asArray().forEach(function (s) {
                    maxAbsScale = Math.max(maxAbsScale, Math.abs(s));
                });
                var colliderRadius = collider.radius * maxAbsScale;
                var r = _this.radius + colliderRadius;
                tail.subtractToRef(colliderCenterSpacePosition, _v3B);
                if (_v3B.lengthSquared() <= r * r) {
                    var normal = _v3B
                        .copyFrom(tail)
                        .subtractInPlace(colliderCenterSpacePosition)
                        .normalize();
                    var posFromCollider = _v3C
                        .copyFrom(colliderCenterSpacePosition)
                        .addInPlace(normal.scaleInPlace(r));
                    tail.copyFrom(posFromCollider
                        .subtractInPlace(_this.centerSpacePosition)
                        .normalize()
                        .scaleInPlace(_this.centerSpaceBoneLength)
                        .addInPlace(_this.centerSpacePosition));
                }
            });
        });
    };
    return VRMSpringBoneLogic;
}());



/***/ }),

/***/ "./src/secondary-animation/vrm-spring-bone.ts":
/*!****************************************************!*\
  !*** ./src/secondary-animation/vrm-spring-bone.ts ***!
  \****************************************************/
/*! exports provided: VRMSpringBone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRMSpringBone", function() { return VRMSpringBone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Materials/standardMaterial */ "./node_modules/@babylonjs/core/Materials/standardMaterial.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
/* harmony import */ var _vrm_spring_bone_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vrm-spring-bone-logic */ "./src/secondary-animation/vrm-spring-bone-logic.ts");





/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
var VRMSpringBone = /** @class */ (function () {
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
    function VRMSpringBone(comment, stiffness, gravityPower, gravityDir, dragForce, center, hitRadius, bones, colliderGroups) {
        var _this = this;
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
        this.activeBones = this.bones.filter(function (bone) { return bone !== null; });
        this.activeBones.forEach(function (bone) {
            [bone].concat(bone.getChildTransformNodes()).forEach(function (b) {
                _this.verlets.push(new _vrm_spring_bone_logic__WEBPACK_IMPORTED_MODULE_4__["VRMSpringBoneLogic"](_this.center, _this.hitRadius, b));
            });
        });
        if (this.drawGizmo) {
            this.setupGizmo();
        }
    }
    VRMSpringBone.prototype.setupGizmo = function () {
        var _this = this;
        this.activeBones.forEach(function (bone) {
            var scene = bone.getScene();
            [bone].concat(bone.getChildTransformNodes()).forEach(function (b) {
                var boneGizmo = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__["MeshBuilder"].CreateSphere(b.name + '_boneGizmo', {
                    segments: 6,
                    diameter: _this.hitRadius * 2,
                    updatable: true,
                }, scene);
                var mat = new _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](b.name + '_boneGizmomat', scene);
                mat.emissiveColor = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_2__["Color3"].Red();
                mat.wireframe = true;
                boneGizmo.material = mat;
                boneGizmo.setParent(b);
                boneGizmo.position = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_2__["Vector3"].Zero();
            });
        });
        this.colliderGroups.forEach(function (group) {
            var scene = group.transform.getScene();
            group.colliders.forEach(function (collider) {
                var sphere = collider.sphere;
                if (!sphere.isEnabled(false)) {
                    sphere.setEnabled(true);
                    var mat = new _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](group.transform.name + '_colliderGizmomat', scene);
                    mat.emissiveColor = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_2__["Color3"].Yellow();
                    mat.wireframe = true;
                    sphere.material = mat;
                }
            });
        });
    };
    /**
     * Update bones
     *
     * @param deltaTime
     */
    VRMSpringBone.prototype.update = function (deltaTime) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var stiffness, external, promises;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                stiffness = this.stiffness * deltaTime;
                external = this.gravityDir.scale(this.gravityPower * deltaTime);
                promises = this.verlets.map(function (verlet) {
                    return new Promise(function (resolve) {
                        verlet.update(stiffness, _this.dragForce, external, _this.colliderGroups);
                        resolve();
                    });
                });
                return [2 /*return*/, Promise.all(promises).then(function () { })];
            });
        });
    };
    return VRMSpringBone;
}());



/***/ }),

/***/ "./src/test/index.ts":
/*!***************************!*\
  !*** ./src/test/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Cameras/arcRotateCamera */ "./node_modules/@babylonjs/core/Cameras/arcRotateCamera.js");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Lights/directionalLight */ "./node_modules/@babylonjs/core/Lights/directionalLight.js");
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Lights/hemisphericLight */ "./node_modules/@babylonjs/core/Lights/hemisphericLight.js");
/* harmony import */ var _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Lights/pointLight */ "./node_modules/@babylonjs/core/Lights/pointLight.js");
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Lights/Shadows/shadowGenerator */ "./node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Loading/sceneLoader */ "./node_modules/@babylonjs/core/Loading/sceneLoader.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _babylonjs_core_Helpers_sceneHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/Helpers/sceneHelpers */ "./node_modules/@babylonjs/core/Helpers/sceneHelpers.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/sphereBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/torusKnotBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babylonjs/inspector */ "./node_modules/@babylonjs/inspector/babylon.inspector.bundle.max.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../index */ "./src/index.ts");
















function main() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var debugProperties, canvas, engine, scene, camera, directionalLight, hemisphericLight, pointLight, standardMaterialSphere, shadowCaster, shadowGenerator, fileCount;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debugProperties = getDebugProperties();
                    canvas = document.getElementById('main-canvas');
                    engine = new _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__["Engine"](canvas, true, {
                        alpha: false,
                        disableWebGL2Support: debugProperties.webgl1,
                    });
                    scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_10__["Scene"](engine);
                    camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_1__["ArcRotateCamera"]('MainCamera1', 0, 0, 3, new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 1.2, 0), scene, true);
                    camera.lowerRadiusLimit = 0.1;
                    camera.upperRadiusLimit = 20;
                    camera.wheelDeltaPercentage = 0.01;
                    camera.minZ = 0.3;
                    camera.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 1.2, -3);
                    camera.attachControl(canvas, true);
                    scene.createDefaultEnvironment({
                        createGround: true,
                        createSkybox: false,
                        enableGroundMirror: false,
                        enableGroundShadow: false,
                    });
                    directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_3__["DirectionalLight"]('DirectionalLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, -0.5, 1.0), scene);
                    directionalLight.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 25, -50);
                    directionalLight.setEnabled(true);
                    hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_4__["HemisphericLight"]('HemisphericLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](-0.2, -0.8, -1), scene);
                    hemisphericLight.setEnabled(false);
                    pointLight = new _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_5__["PointLight"]('PointLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 0, 1), scene);
                    pointLight.setEnabled(false);
                    standardMaterialSphere = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__["Mesh"].CreateSphere('StandardMaterialSphere1', 16, 1, scene);
                    standardMaterialSphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](1.5, 1.2, 0);
                    standardMaterialSphere.receiveShadows = true;
                    shadowCaster = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__["Mesh"].CreateTorusKnot('ShadowCaster', 1, 0.2, 32, 32, 2, 3, scene);
                    shadowCaster.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0.0, 5.0, -10.0);
                    shadowCaster.setEnabled(debugProperties.shadow);
                    if (debugProperties.shadow) {
                        shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__["ShadowGenerator"](1024, directionalLight);
                        shadowGenerator.addShadowCaster(shadowCaster);
                    }
                    if (!debugProperties.inspector) return [3 /*break*/, 2];
                    return [4 /*yield*/, scene.debugLayer.show({
                            globalRoot: document.getElementById('wrapper'),
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    // Expose current scene
                    window.currentScene = scene;
                    scene.onBeforeRenderObservable.add(function () {
                        // SpringBone
                        if (!scene.metadata || !scene.metadata.vrmManagers) {
                            return;
                        }
                        var managers = scene.metadata.vrmManagers;
                        var deltaTime = scene.getEngine().getDeltaTime();
                        managers.forEach(function (manager) {
                            manager.update(deltaTime);
                        });
                    });
                    engine.runRenderLoop(function () {
                        scene.render();
                        shadowCaster.rotate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"].Up(), 0.01);
                    });
                    window.addEventListener('resize', function () {
                        engine.resize();
                    });
                    return [4 /*yield*/, _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_7__["SceneLoader"].AppendAsync('./', 'AliciaSolid.vrm', scene)];
                case 3:
                    _a.sent();
                    fileCount = 1;
                    document.getElementById('file-input').addEventListener('change', function (evt) {
                        var file = evt.target.files[0];
                        console.log("loads " + file.name + " " + file.size + " bytes");
                        var currentMeshCount = scene.meshes.length;
                        _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_7__["SceneLoader"].Append('file:', file, scene, function () {
                            console.log("loaded " + file.name);
                            for (var i = currentMeshCount; i < scene.meshes.length; i++) {
                                scene.meshes[i].translate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"].Right(), 1.5 * fileCount);
                                scene.meshes[i].receiveShadows = true;
                            }
                            fileCount++;
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function getDebugProperties() {
    var href = window.location.href;
    return {
        webgl1: href.includes('webgl1'),
        shadow: href.includes('shadow'),
        inspector: href.includes('inspector'),
    };
}
main().catch(function (reason) {
    console.error(reason);
});


/***/ }),

/***/ "./src/vcast-vci-material-unity.ts":
/*!*****************************************!*\
  !*** ./src/vcast-vci-material-unity.ts ***!
  \*****************************************/
/*! exports provided: VCAST_vci_material_unity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCAST_vci_material_unity", function() { return VCAST_vci_material_unity; });
/* harmony import */ var _babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/loaders/glTF/2.0 */ "./node_modules/@babylonjs/loaders/glTF/2.0/index.js");
/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");


/**
 * `extensions` に入る拡張キー
 */
var NAME = 'VCAST_vci_material_unity';
/**
 * VCAST_vci_material_unity 拡張を処理する
 */
var VCAST_vci_material_unity = /** @class */ (function () {
    /**
     * @inheritdoc
     */
    function VCAST_vci_material_unity(loader) {
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
    VCAST_vci_material_unity.prototype.dispose = function () {
        this.loader = null;
    };
    /**
     * @inheritdoc
     */
    VCAST_vci_material_unity.prototype._loadMaterialAsync = function (context, material, mesh, babylonDrawMode, assign) {
        // ジェネレータでマテリアルを生成する
        return (new _vrm_material_generator__WEBPACK_IMPORTED_MODULE_1__["VRMMaterialGenerator"](this.loader)).generate(context, material, mesh, babylonDrawMode, assign);
    };
    return VCAST_vci_material_unity;
}());

// ローダーに登録する
_babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__["GLTFLoader"].RegisterExtension(NAME, function (loader) { return new VCAST_vci_material_unity(loader); });


/***/ }),

/***/ "./src/vci-interfaces.ts":
/*!*******************************!*\
  !*** ./src/vci-interfaces.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/vrm-extension.ts":
/*!******************************!*\
  !*** ./src/vrm-extension.ts ***!
  \******************************/
/*! exports provided: VRM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRM", function() { return VRM; });
/* harmony import */ var _babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/loaders/glTF/2.0 */ "./node_modules/@babylonjs/loaders/glTF/2.0/index.js");
/* harmony import */ var _vrm_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vrm-manager */ "./src/vrm-manager.ts");
/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");



/**
 * `extensions` に入る拡張キー
 */
var NAME = 'VRM';
/**
 * VRM 拡張を処理する
 * [Specification](https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0)
 */
var VRM = /** @class */ (function () {
    /**
     * @inheritdoc
     */
    function VRM(loader) {
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
    VRM.prototype.dispose = function () {
        this.loader = null;
    };
    /**
     * @inheritdoc
     */
    VRM.prototype.onReady = function () {
        var _this = this;
        if (!this.loader.gltf.extensions || !this.loader.gltf.extensions[NAME]) {
            return;
        }
        var scene = this.loader.babylonScene;
        var manager = new _vrm_manager__WEBPACK_IMPORTED_MODULE_1__["VRMManager"](this.loader.gltf.extensions[NAME], this.loader.babylonScene, this.meshesFrom, this.transformNodesFrom, this.materialsFrom);
        scene.metadata = scene.metadata || {};
        scene.metadata.vrmManagers = scene.metadata.vrmManagers || [];
        scene.metadata.vrmManagers.push(manager);
        this.loader.babylonScene.onDisposeObservable.add(function () {
            // Scene dispose 時に Manager も破棄する
            manager.dispose();
            _this.loader.babylonScene.metadata.vrmManagers = [];
        });
    };
    /**
     * @inheritdoc
     */
    VRM.prototype._loadVertexDataAsync = function (context, primitive, babylonMesh) {
        if (!primitive.extras || !primitive.extras.targetNames) {
            return null;
        }
        // まだ MorphTarget が生成されていないので、メタ情報にモーフターゲット情報を入れておく
        babylonMesh.metadata = babylonMesh.metadata || {};
        babylonMesh.metadata.vrmTargetNames = primitive.extras.targetNames;
        return null;
    };
    /**
     * @inheritdoc
     */
    VRM.prototype._loadMaterialAsync = function (context, material, mesh, babylonDrawMode, assign) {
        // ジェネレータでマテリアルを生成する
        return (new _vrm_material_generator__WEBPACK_IMPORTED_MODULE_2__["VRMMaterialGenerator"](this.loader)).generate(context, material, mesh, babylonDrawMode, assign);
    };
    return VRM;
}());

// ローダーに登録する
_babylonjs_loaders_glTF_2_0__WEBPACK_IMPORTED_MODULE_0__["GLTFLoader"].RegisterExtension(NAME, function (loader) { return new VRM(loader); });


/***/ }),

/***/ "./src/vrm-file-loader.ts":
/*!********************************!*\
  !*** ./src/vrm-file-loader.ts ***!
  \********************************/
/*! exports provided: VRMFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRMFileLoader", function() { return VRMFileLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Loading/sceneLoader */ "./node_modules/@babylonjs/core/Loading/sceneLoader.js");
/* harmony import */ var _babylonjs_loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/loaders/glTF/glTFFileLoader */ "./node_modules/@babylonjs/loaders/glTF/glTFFileLoader.js");



/**
 * VRM/VCI ファイルを読み込めるようにする
 * 拡張子を変更しただけ
 */
var VRMFileLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VRMFileLoader, _super);
    function VRMFileLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'vrm';
        _this.extensions = {
            '.vrm': { isBinary: true },
            '.vci': { isBinary: true },
        };
        return _this;
    }
    VRMFileLoader.prototype.createPlugin = function () {
        return new VRMFileLoader();
    };
    return VRMFileLoader;
}(_babylonjs_loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFFileLoader"]));

if (_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_1__["SceneLoader"]) {
    _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_1__["SceneLoader"].RegisterPlugin(new VRMFileLoader());
}


/***/ }),

/***/ "./src/vrm-interfaces.ts":
/*!*******************************!*\
  !*** ./src/vrm-interfaces.ts ***!
  \*******************************/
/*! exports provided: IVRMMaterialPropertyShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVRMMaterialPropertyShader", function() { return IVRMMaterialPropertyShader; });
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
/*! exports provided: VRMManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRMManager", function() { return VRMManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _secondary_animation_spring_bone_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secondary-animation/spring-bone-controller */ "./src/secondary-animation/spring-bone-controller.ts");
/* harmony import */ var _humanoid_bone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humanoid-bone */ "./src/humanoid-bone.ts");
/* harmony import */ var _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-value-binding-merger */ "./src/material-value-binding-merger.ts");





/**
 * VRM キャラクターを動作させるためのマネージャ
 */
var VRMManager = /** @class */ (function () {
    /**
     *
     * @param ext glTF.extensions.VRM の中身 json
     * @param scene
     * @param meshesFrom この番号以降のメッシュがこの VRM に該当する
     * @param transformNodesFrom この番号以降の TransformNode がこの VRM に該当する
     * @param materialsNodesFrom この番号以降の Material がこの VRM に該当する
     */
    function VRMManager(ext, scene, meshesFrom, transformNodesFrom, materialsNodesFrom) {
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
        this.springBoneController = new _secondary_animation_spring_bone_controller__WEBPACK_IMPORTED_MODULE_2__["SpringBoneController"](this.ext.secondaryAnimation, this.findTransformNode.bind(this));
        if (this.ext.blendShapeMaster && this.ext.blendShapeMaster.blendShapeGroups) {
            this.constructIsBinaryMap();
            this.constructMorphTargetMap();
            this.constructMaterialValueBindingMergerMap();
        }
        this.constructTransformNodeMap();
        this._humanoidBone = new _humanoid_bone__WEBPACK_IMPORTED_MODULE_3__["HumanoidBone"](this.transformNodeMap);
    }
    /**
     * Secondary Animation を更新する
     *
     * @param deltaTime 前フレームからの経過秒数(sec)
     */
    VRMManager.prototype.update = function (deltaTime) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.springBoneController.update(deltaTime)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 破棄処理
     */
    VRMManager.prototype.dispose = function () {
        this.springBoneController.dispose();
        this._humanoidBone.dispose();
        this.morphTargetMap = null;
        this.materialValueBindingMergerMap = null;
        this.presetMorphTargetMap = null;
        this.transformNodeMap = null;
        this.transformNodeCache = null;
        this.meshCache = null;
        this._rootMesh = null;
    };
    /**
     * モーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    VRMManager.prototype.morphing = function (label, value) {
        var v = this.calcMorphValue(label, value);
        if (this.morphTargetMap[label]) {
            this.morphTargetMap[label].forEach(function (setting) {
                setting.target.influence = v * (setting.weight / 100);
            });
        }
        if (this.materialValueBindingMergerMap[label]) {
            this.materialValueBindingMergerMap[label].morphing(v);
        }
    };
    /**
     * プリセットモーフのモーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    VRMManager.prototype.morphingPreset = function (label, value) {
        if (!this.presetMorphTargetMap[label]) {
            return;
        }
        var v = this.calcMorphValue(label, value);
        this.presetMorphTargetMap[label].forEach(function (setting) {
            setting.target.influence = v * (setting.weight / 100);
        });
    };
    /**
     * モーフィング用の値を計算する
     * @param label モーフ名
     * @param value 値
     */
    VRMManager.prototype.calcMorphValue = function (label, value) {
        var v = Math.max(0.0, Math.min(1.0, value));
        if (this.isBinaryMorphMap[label]) {
            return v > 0.5 ? 1.0 : 0.0;
        }
        return v;
    };
    /**
     * list morphing name
     */
    VRMManager.prototype.getMorphingList = function () {
        return Object.keys(this.morphTargetMap);
    };
    /**
     * 一人称時のカメラ位置を絶対座標として取得する
     *
     * firstPersonBone が未設定の場合は null を返す
     *
     * @returns 一人称時のカメラの現在における絶対座標
     */
    VRMManager.prototype.getFirstPersonCameraPosition = function () {
        var firstPersonBone = this.getFirstPersonBone();
        if (!firstPersonBone) {
            return null;
        }
        var basePos = firstPersonBone.getAbsolutePosition();
        var offsetPos = this.ext.firstPerson.firstPersonBoneOffset;
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](basePos.x + offsetPos.x, basePos.y + offsetPos.y, basePos.z + offsetPos.z);
    };
    /**
     * 一人称時に頭とみなす TransformNode を取得する
     */
    VRMManager.prototype.getFirstPersonBone = function () {
        return this.findTransformNode(this.ext.firstPerson.firstPersonBone);
    };
    /**
     * ボーン名からそのボーンに該当する TransformNode を取得する
     *
     * @param name HumanBoneName
     * @deprecated Use humanoidBone getter instead. This method will delete at v2.
     */
    VRMManager.prototype.getBone = function (name) {
        return this.transformNodeMap[name] || null;
    };
    Object.defineProperty(VRMManager.prototype, "humanoidBone", {
        /**
         * Get HumanoidBone Methods
         */
        get: function () {
            return this._humanoidBone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRMManager.prototype, "rootMesh", {
        /**
         * VRM Root mesh
         *
         * Useful for Model Transformation
         */
        get: function () {
            return this._rootMesh;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * node 番号から該当する TransformNode を探す
     * 数が多くなるのでキャッシュに参照を持つ構造にする
     * gltf の node 番号は `metadata.gltf.pointers` に記録されている
     * @param nodeIndex
     */
    VRMManager.prototype.findTransformNode = function (nodeIndex) {
        return this.transformNodeCache[nodeIndex] || null;
    };
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     * @deprecated Use findMeshes instead. This method has broken.
     */
    VRMManager.prototype.findMesh = function (meshIndex) {
        return this.meshCache[meshIndex] && this.meshCache[meshIndex][0] || null;
    };
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     */
    VRMManager.prototype.findMeshes = function (meshIndex) {
        return this.meshCache[meshIndex] || null;
    };
    /**
     * 事前に MorphTarget と isBinary を紐付ける
     */
    VRMManager.prototype.constructIsBinaryMap = function () {
        var _this = this;
        this.ext.blendShapeMaster.blendShapeGroups.forEach(function (g) {
            _this.isBinaryMorphMap[g.name] = g.isBinary;
        });
    };
    /**
     * 事前に MorphTarget と BlendShape を紐付ける
     */
    VRMManager.prototype.constructMorphTargetMap = function () {
        var _this = this;
        this.ext.blendShapeMaster.blendShapeGroups.forEach(function (g) {
            if (!g.binds) {
                return;
            }
            g.binds.forEach(function (b) {
                var meshes = _this.findMeshes(b.mesh);
                if (!meshes) {
                    console.log("Undefined BlendShapeBind Mesh", b);
                    return;
                }
                meshes.forEach(function (mesh) {
                    var morphTargetManager = mesh.morphTargetManager;
                    if (!morphTargetManager) {
                        console.log("Undefined morphTargetManager", b);
                        return;
                    }
                    var target = morphTargetManager.getTarget(b.index);
                    _this.morphTargetMap[g.name] = _this.morphTargetMap[g.name] || [];
                    _this.morphTargetMap[g.name].push({
                        target: target,
                        weight: b.weight,
                    });
                    if (g.presetName) {
                        _this.presetMorphTargetMap[g.presetName] = _this.presetMorphTargetMap[g.presetName] || [];
                        _this.presetMorphTargetMap[g.presetName].push({
                            target: target,
                            weight: b.weight,
                        });
                    }
                });
            });
        });
    };
    /**
     * 事前に MaterialValueBindingMerger とモーフ名を紐付ける
     */
    VRMManager.prototype.constructMaterialValueBindingMergerMap = function () {
        var _this = this;
        var materials = this.scene.materials.slice(this.materialsNodesFrom);
        this.ext.blendShapeMaster.blendShapeGroups.forEach(function (g) {
            if (!g.materialValues) {
                return;
            }
            _this.materialValueBindingMergerMap[g.name] = new _material_value_binding_merger__WEBPACK_IMPORTED_MODULE_4__["MaterialValueBindingMerger"](materials, g.materialValues);
        });
    };
    /**
     * 事前に TransformNode と bone 名を紐づける
     */
    VRMManager.prototype.constructTransformNodeMap = function () {
        var _this = this;
        this.ext.humanoid.humanBones.forEach(function (b) {
            var node = _this.findTransformNode(b.node);
            if (!node) {
                return;
            }
            _this.transformNodeMap[b.bone] = node;
        });
    };
    /**
     * node 番号と TransformNode を紐づける
     */
    VRMManager.prototype.constructTransformNodeCache = function () {
        var cache = {};
        for (var index = this.transformNodesFrom; index < this.scene.transformNodes.length; index++) {
            var node = this.scene.transformNodes[index];
            // ポインタが登録されていないものは省略
            if (!node || !node.metadata || !node.metadata.gltf || !node.metadata.gltf.pointers || node.metadata.gltf.pointers.length === 0) {
                continue;
            }
            for (var _i = 0, _a = node.metadata.gltf.pointers; _i < _a.length; _i++) {
                var pointer = _a[_i];
                if (pointer.startsWith('/nodes/')) {
                    var nodeIndex = parseInt(pointer.substr(7), 10);
                    cache[nodeIndex] = node;
                    break;
                }
            }
        }
        return cache;
    };
    /**
     * mesh 番号と Mesh を紐づける
     */
    VRMManager.prototype.constructMeshCache = function () {
        var cache = {};
        for (var index = this.meshesFrom; index < this.scene.meshes.length; index++) {
            var mesh = this.scene.meshes[index];
            if (mesh.id === '__root__') {
                this._rootMesh = mesh;
                continue;
            }
            // ポインタが登録されていないものは省略
            if (!mesh || !mesh.metadata || !mesh.metadata.gltf || !mesh.metadata.gltf.pointers || mesh.metadata.gltf.pointers.length === 0) {
                continue;
            }
            for (var _i = 0, _a = mesh.metadata.gltf.pointers; _i < _a.length; _i++) {
                var pointer = _a[_i];
                var match = pointer.match(/^\/meshes\/(\d+).+$/);
                if (match) {
                    var nodeIndex = parseInt(match[1], 10);
                    cache[nodeIndex] = cache[nodeIndex] || [];
                    cache[nodeIndex].push(mesh);
                    break;
                }
            }
        }
        return cache;
    };
    return VRMManager;
}());



/***/ }),

/***/ "./src/vrm-material-generator.ts":
/*!***************************************!*\
  !*** ./src/vrm-material-generator.ts ***!
  \***************************************/
/*! exports provided: VRMMaterialGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRMMaterialGenerator", function() { return VRMMaterialGenerator; });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylon-mtoon-material */ "./node_modules/babylon-mtoon-material/dist/index.module.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vrm_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vrm-interfaces */ "./src/vrm-interfaces.ts");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");




/**
 * VRM で指定される Material を生成する
 * [VRM が提供するシェーダ](https://vrm.dev/en/univrm/shaders/index.html) を特定し読み込む
 * - UnlitTexture: 不透明, VRM ファイル側で [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_unlit) が定義されているため、何もしない
 * - UnlitCutout: 透明度が閾値以下の部分を透明とする, 同上
 * - UnlitTransparent: アルファブレンド。ZWriteしない, 同上
 * - UnlitTransparentZWrite: アルファブレンド。ZWriteする, 同上に加え、プロパティで ZWrite を強制しています
 * - MToon: MToonMaterial を差し替えています。
 */
var VRMMaterialGenerator = /** @class */ (function () {
    /**
     * @inheritdoc
     */
    function VRMMaterialGenerator(loader) {
        this.loader = loader;
    }
    /**
     * マテリアルを生成する Promise を返す
     * VRM 対象外の場合は null
     */
    VRMMaterialGenerator.prototype.generate = function (context, material, mesh, babylonDrawMode, assign) {
        var materialProp = this.findMaterialPropertyByName(material.name, this.getMaterialProperties());
        if (!materialProp) {
            return null;
        }
        mesh.alphaIndex = materialProp.renderQueue;
        var newMaterial = this.createMaterialByShader(context, material, babylonDrawMode, materialProp);
        if (!newMaterial) {
            return null;
        }
        assign(newMaterial);
        if (newMaterial instanceof babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__["MToonMaterial"]) {
            return this.loadMToonTexturesAsync(context, newMaterial, materialProp);
        }
        return Promise.resolve(newMaterial);
    };
    /**
     * VRM または VCI からマテリアルプロパティの配列を探す
     */
    VRMMaterialGenerator.prototype.getMaterialProperties = function () {
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
    };
    /**
     * マテリアル名から MaterialProperty を探す
     * @param materialName マテリアル名
     * @param extension 拡張データ
     */
    VRMMaterialGenerator.prototype.findMaterialPropertyByName = function (materialName, materials) {
        if (!materialName || !materials) {
            return null;
        }
        var mats = materials.filter(function (v) { return v.name === materialName; });
        if (mats.length === 0) {
            return null;
        }
        else if (mats.length >= 2) {
            this.loader.log("Duplicated vrm material name found: " + materialName);
        }
        return mats[mats.length - 1];
    };
    /**
     * テクスチャを読み込む
     * @param context 現在のコンテキスト
     * @param material 生成した MToonMaterial
     * @param prop 生成した MToonMaterial のマテリアルプロパティ
     */
    VRMMaterialGenerator.prototype.loadMToonTexturesAsync = function (context, material, prop) {
        var _this = this;
        var promises = [];
        // 全てのテクスチャの UV Offset & Scale はメインテクスチャのものを流用する
        var uvOffsetScale = prop.vectorProperties._MainTex;
        if (!uvOffsetScale) {
            return Promise.resolve(material);
        }
        var applyTexture = function (index, callback) {
            applyPropertyWhenDefined(index, function (value) {
                promises.push(_this.loader.loadTextureInfoAsync(context + "/textures/" + index, { index: value }, function (babylonTexture) {
                    // 実際は Texture インスタンスが来るのでキャスト
                    var t = babylonTexture;
                    t.uOffset = uvOffsetScale[0];
                    t.vOffset = uvOffsetScale[1];
                    t.uScale = uvOffsetScale[2];
                    t.vScale = uvOffsetScale[3];
                    callback(babylonTexture);
                }));
            });
        };
        applyTexture(prop.textureProperties._MainTex, function (texture) {
            if (material.alphaBlend || material.alphaTest) {
                texture.hasAlpha = true;
            }
            material.diffuseTexture = texture;
        });
        applyTexture(prop.textureProperties._ShadeTexture, function (texture) { return material.shadeTexture = texture; });
        applyTexture(prop.textureProperties._BumpMap, function (texture) { return material.bumpTexture = texture; });
        applyTexture(prop.textureProperties._ReceiveShadowTexture, function (texture) { return material.receiveShadowTexture = texture; });
        applyTexture(prop.textureProperties._ShadingGradeTexture, function (texture) { return material.shadingGradeTexture = texture; });
        applyTexture(prop.textureProperties._RimTexture, function (texture) { return material.rimTexture = texture; });
        applyTexture(prop.textureProperties._SphereAdd, function (texture) { return material.matCapTexture = texture; });
        applyTexture(prop.textureProperties._EmissionMap, function (texture) { return material.emissiveTexture = texture; });
        applyTexture(prop.textureProperties._OutlineWidthTexture, function (texture) { return material.outlineWidthTexture = texture; });
        applyTexture(prop.textureProperties._UvAnimMaskTexture, function (texture) { return material.uvAnimationMaskTexture = texture; });
        return Promise.all(promises).then(function () { return material; });
    };
    /**
     * シェーダ名からマテリアルを推測して生成する
     * @param context 現在のコンテキスト
     * @param material glTF マテリアル
     * @param babylonDrawMode 描画種類
     * @param prop 生成するマテリアルプロパティ
     */
    VRMMaterialGenerator.prototype.createMaterialByShader = function (context, material, babylonDrawMode, prop) {
        if (prop.shader === _vrm_interfaces__WEBPACK_IMPORTED_MODULE_2__["IVRMMaterialPropertyShader"].VRMMToon) {
            var mtoonMaterial = new babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_1__["MToonMaterial"](material.name || "MToonMaterial" + material.index, this.loader.babylonScene);
            this.setMToonMaterialProperties(mtoonMaterial, prop);
            return mtoonMaterial;
        }
        if (prop.shader === _vrm_interfaces__WEBPACK_IMPORTED_MODULE_2__["IVRMMaterialPropertyShader"].VRMUnlitTransparentZWrite) {
            var mat = this.loader.createMaterial(context, material, babylonDrawMode);
            // 通常マテリアルに Depth Write を強制
            mat.disableDepthWrite = false;
            mat.forceDepthWrite = true;
            return mat;
        }
        return null;
    };
    /**
     * マテリアルに VRM プロパティを設定
     * VRM プロパティとマテリアルプロパティのマッピングを行っている
     * 初期値はマテリアル実装側に持っているため、値がある場合のみ上書きする
     */
    VRMMaterialGenerator.prototype.setMToonMaterialProperties = function (material, prop) {
        applyPropertyWhenDefined(prop.floatProperties._Cutoff, function (value) { return material.alphaCutOff = value; });
        applyPropertyWhenDefined(prop.vectorProperties._Color, function (value) {
            material.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"](value[0], value[1], value[2]);
            material.alpha = value[3];
        });
        applyPropertyWhenDefined(prop.vectorProperties._ShadeColor, function (value) {
            material.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"](value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._BumpScale, function (value) { return material.bumpScale = value; });
        applyPropertyWhenDefined(prop.floatProperties._ReceiveShadowRate, function (value) { return material.receiveShadowRate = value; });
        applyPropertyWhenDefined(prop.floatProperties._ShadingGradeRate, function (value) { return material.shadingGradeRate = value; });
        applyPropertyWhenDefined(prop.floatProperties._ShadeShift, function (value) { return material.shadeShift = value; });
        applyPropertyWhenDefined(prop.floatProperties._ShadeToony, function (value) { return material.shadeToony = value; });
        applyPropertyWhenDefined(prop.floatProperties._LightColorAttenuation, function (value) { return material.lightColorAttenuation = value; });
        applyPropertyWhenDefined(prop.floatProperties._IndirectLightIntensity, function (value) { return material.indirectLightIntensity = value; });
        applyPropertyWhenDefined(prop.vectorProperties._RimColor, function (value) {
            material.rimColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"](value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._RimLightingMix, function (value) { return material.rimLightingMix = value; });
        applyPropertyWhenDefined(prop.floatProperties._RimFresnelPower, function (value) { return material.rimFresnelPower = value; });
        applyPropertyWhenDefined(prop.floatProperties._RimLift, function (value) { return material.rimLift = value; });
        applyPropertyWhenDefined(prop.vectorProperties._EmissionColor, function (value) {
            material.emissiveColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"](value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._OutlineWidth, function (value) { return material.outlineWidth = value; });
        applyPropertyWhenDefined(prop.floatProperties._OutlineScaledMaxDistance, function (value) { return material.outlineScaledMaxDistance = value; });
        applyPropertyWhenDefined(prop.vectorProperties._OutlineColor, function (value) {
            material.outlineColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"](value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined(prop.floatProperties._OutlineLightingMix, function (value) { return material.outlineLightingMix = value; });
        applyPropertyWhenDefined(prop.floatProperties._UvAnimScrollX, function (value) { return material.uvAnimationScrollX = value; });
        applyPropertyWhenDefined(prop.floatProperties._UvAnimScrollY, function (value) { return material.uvAnimationScrollY = value; });
        applyPropertyWhenDefined(prop.floatProperties._UvAnimRotation, function (value) { return material.uvAnimationRotation = value; });
        applyPropertyWhenDefined(prop.floatProperties._DebugMode, function (value) { return material.debugMode = value; });
        applyPropertyWhenDefined(prop.floatProperties._BlendMode, function (value) {
            switch (value) {
                case 0: // Opaque
                    material.alphaBlend = false;
                    material.alphaTest = false;
                    break;
                case 1: // TransparentCutout
                    material.alphaBlend = false;
                    material.alphaTest = true;
                    material.alphaMode = _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_3__["Engine"].ALPHA_COMBINE;
                    break;
                case 2: // Transparent
                    material.alphaBlend = true;
                    material.alphaTest = false;
                    material.alphaMode = _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_3__["Engine"].ALPHA_COMBINE;
                    break;
            }
        });
        applyPropertyWhenDefined(prop.floatProperties._OutlineWidthMode, function (value) { return material.outlineWidthMode = value; });
        applyPropertyWhenDefined(prop.floatProperties._OutlineColorMode, function (value) { return material.outlineColorMode = value; });
        applyPropertyWhenDefined(prop.floatProperties._CullMode, function (value) { return material.cullMode = value; });
        applyPropertyWhenDefined(prop.floatProperties._OutlineCullMode, function (value) { return material.outlineCullMode = value; });
        applyPropertyWhenDefined(prop.keywordMap._ALPHABLEND_ON, function (value) { return material.alphaBlend = value; });
        applyPropertyWhenDefined(prop.keywordMap._ALPHATEST_ON, function (value) { return material.alphaTest = value; });
        applyPropertyWhenDefined(prop.floatProperties._ZWrite, function (value) {
            material.forceDepthWrite = (Math.round(value) === 1);
            if (material.forceDepthWrite) {
                material.disableDepthWrite = false;
            }
        });
    };
    return VRMMaterialGenerator;
}());

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

/******/ });
});
//# sourceMappingURL=main.js.map