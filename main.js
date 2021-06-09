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
/*! exports provided: BoneNotFoundError, HumanoidBone, VCAST_vci_material_unity, VRM, VRMFileLoader, IVRMMaterialPropertyShader, VRMManager, VRMMaterialGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoneNotFoundError", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["BoneNotFoundError"]; });

/* harmony import */ var _humanoid_bone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./humanoid-bone */ "./src/humanoid-bone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HumanoidBone", function() { return _humanoid_bone__WEBPACK_IMPORTED_MODULE_1__["HumanoidBone"]; });

/* harmony import */ var _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vcast-vci-material-unity */ "./src/vcast-vci-material-unity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCAST_vci_material_unity", function() { return _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_2__["VCAST_vci_material_unity"]; });

/* harmony import */ var _vci_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vci-interfaces */ "./src/vci-interfaces.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _vrm_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vrm-extension */ "./src/vrm-extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRM", function() { return _vrm_extension__WEBPACK_IMPORTED_MODULE_4__["VRM"]; });

/* harmony import */ var _vrm_file_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vrm-file-loader */ "./src/vrm-file-loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMFileLoader", function() { return _vrm_file_loader__WEBPACK_IMPORTED_MODULE_5__["VRMFileLoader"]; });

/* harmony import */ var _vrm_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vrm-interfaces */ "./src/vrm-interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IVRMMaterialPropertyShader", function() { return _vrm_interfaces__WEBPACK_IMPORTED_MODULE_6__["IVRMMaterialPropertyShader"]; });

/* harmony import */ var _vrm_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vrm-manager */ "./src/vrm-manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMManager", function() { return _vrm_manager__WEBPACK_IMPORTED_MODULE_7__["VRMManager"]; });

/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMMaterialGenerator", function() { return _vrm_material_generator__WEBPACK_IMPORTED_MODULE_8__["VRMMaterialGenerator"]; });












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
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collider */ "./src/secondary-animation/collider.ts");

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
        this.colliders.push(new _collider__WEBPACK_IMPORTED_MODULE_0__["Collider"](offset, radius));
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
     */
    function Collider(offset, radius) {
        this.offset = offset;
        this.radius = radius;
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

/**
 * Quaternion Helper
 */
var QuaternionHelper = /** @class */ (function () {
    function QuaternionHelper() {
    }
    /**
     * Rotates the point point with rotation.
     *
     * Quaternion * Vector3
     *
     * @param quat
     * @param vec
     * @see https://docs.unity3d.com/2017.4/Documentation/ScriptReference/Quaternion-operator_multiply.html
     * @see https://answers.unity.com/questions/372371/multiply-quaternion-by-vector3-how-is-done.html
     * @see https://github.com/adragonite/math3d/blob/master/src/Quaternion.js#L287
     */
    QuaternionHelper.multiplyWithVector3 = function (quat, vec) {
        var num = quat.x * 2;
        var num2 = quat.y * 2;
        var num3 = quat.z * 2;
        var num4 = quat.x * num;
        var num5 = quat.y * num2;
        var num6 = quat.z * num3;
        var num7 = quat.x * num2;
        var num8 = quat.x * num3;
        var num9 = quat.y * num3;
        var num10 = quat.w * num;
        var num11 = quat.w * num2;
        var num12 = quat.w * num3;
        var result = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        result.x = (1 - (num5 + num6)) * vec.x + (num7 - num12) * vec.y + (num8 + num11) * vec.z;
        result.y = (num7 + num12) * vec.x + (1 - (num4 + num6)) * vec.y + (num9 - num10) * vec.z;
        result.z = (num8 - num11) * vec.x + (num9 + num10) * vec.y + (1 - (num4 + num5)) * vec.z;
        return result;
    };
    /**
     * Creates a rotation which rotates from fromDirection to toDirection.
     *
     * @see https://docs.unity3d.com/2017.4/Documentation/ScriptReference/Quaternion.FromToRotation.html
     * @see https://stackoverflow.com/questions/51549366/what-is-the-math-behind-fromtorotation-unity3d
     */
    QuaternionHelper.fromToRotation = function (from, to) {
        var axis = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Cross(from, to).normalize();
        var a = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Dot(from, to);
        var b = from.length() * to.length();
        var phi = Math.acos(Math.max(0.0, Math.min(1.0, a / b)));
        var sin = Math.sin(phi / 2);
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Quaternion"](sin * axis.x, sin * axis.y, sin * axis.z, Math.cos(phi / 2));
    };
    return QuaternionHelper;
}());



/***/ }),

/***/ "./src/secondary-animation/sphere-collider.ts":
/*!****************************************************!*\
  !*** ./src/secondary-animation/sphere-collider.ts ***!
  \****************************************************/
/*! exports provided: SphereCollider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SphereCollider", function() { return SphereCollider; });
/**
 * Runtime Sphere Collider
 */
var SphereCollider = /** @class */ (function () {
    /**
     * @param position Absolute Collider Position
     * @param radius Collider radius
     */
    function SphereCollider(position, radius) {
        this.position = position;
        this.radius = radius;
    }
    return SphereCollider;
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
     * Initialize SpringBones
     */
    SpringBoneController.prototype.setup = function (force) {
        if (force === void 0) { force = false; }
        this.springs.forEach(function (spring) {
            spring.setup(force);
        });
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
                // Unity 座標系からの変換のため X, Z 軸を反転
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
            // Unity 座標系からの変換のため X, Z 軸を反転
            -spring.gravityDir.x, spring.gravityDir.y, -spring.gravityDir.z).normalize(), spring.dragForce, getBone(spring.center), spring.hitRadius, rootBones, springColliders));
        });
        return springs;
    };
    return SpringBoneController;
}());



/***/ }),

/***/ "./src/secondary-animation/vector3-helper.ts":
/*!***************************************************!*\
  !*** ./src/secondary-animation/vector3-helper.ts ***!
  \***************************************************/
/*! exports provided: Vector3Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3Helper", function() { return Vector3Helper; });
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");

/**
 * Vector3 Helper
 */
var Vector3Helper = /** @class */ (function () {
    function Vector3Helper() {
    }
    /**
     * Vector3 * float
     *
     * @param original
     * @param amount
     */
    Vector3Helper.multiplyByFloat = function (original, amount) {
        return new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"](original.x * amount, original.y * amount, original.z * amount);
    };
    return Vector3Helper;
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
/* harmony import */ var _vector3_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector3-helper */ "./src/secondary-animation/vector3-helper.ts");



/**
 * Verlet Spring Bone Logic
 */
var VRMSpringBoneLogic = /** @class */ (function () {
    /**
     * @param center Center reference of TransformNode
     * @param radius Collision Radius
     * @param transform Base TransformNode
     * @param localChildPosition
     */
    function VRMSpringBoneLogic(center, radius, transform, localChildPosition) {
        this.radius = radius;
        this.transform = transform;
        // Initialize rotationQuaternion when not initialized
        if (!transform.rotationQuaternion) {
            transform.rotationQuaternion = transform.rotation.toQuaternion();
        }
        var parent = transform.parent;
        if (parent !== null && parent.rotationQuaternion === null) {
            parent.rotationQuaternion = parent.rotation.toQuaternion();
        }
        this.parentRotation = parent && parent.rotationQuaternion || _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Identity();
        var worldChildPosition = transform.getAbsolutePosition().add(localChildPosition);
        this.currentTail = this.getCenterTranslatedPos(center, worldChildPosition);
        this.prevTail = this.currentTail;
        this.localRotation = transform.rotationQuaternion.clone();
        this.boneAxis = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Normalize(localChildPosition);
        this.boneLength = localChildPosition.length();
    }
    /**
     * Update Tail position
     *
     * @param center Center reference of TransformNode
     * @param stiffnessForce Current frame stiffness
     * @param dragForce Current frame drag force
     * @param external Current frame external force
     * @param colliders Current frame colliders
     */
    VRMSpringBoneLogic.prototype.update = function (center, stiffnessForce, dragForce, external, colliders) {
        var absPos = this.transform.getAbsolutePosition();
        if (Number.isNaN(absPos.x)) {
            // Do not update when absolute position is invalid
            return;
        }
        var currentTail = this.getCenterTranslatedWorldPos(center, this.currentTail);
        var prevTail = this.getCenterTranslatedWorldPos(center, this.prevTail);
        // verlet 積分で次の位置を計算
        var nextTail = currentTail;
        {
            // 減衰付きで前のフレームの移動を継続
            var attenuation = 1.0 - dragForce;
            var delta = _vector3_helper__WEBPACK_IMPORTED_MODULE_2__["Vector3Helper"].multiplyByFloat(currentTail.subtract(prevTail), attenuation);
            nextTail.addInPlace(delta);
        }
        {
            // 親の回転による子ボーンの移動目標
            var rotation = this.parentRotation.multiply(this.localRotation); // parentRotation * localRotation
            var rotatedVec = _quaternion_helper__WEBPACK_IMPORTED_MODULE_1__["QuaternionHelper"].multiplyWithVector3(rotation, this.boneAxis); // rotation * boneAxis
            var stiffedVec = _vector3_helper__WEBPACK_IMPORTED_MODULE_2__["Vector3Helper"].multiplyByFloat(rotatedVec, stiffnessForce); // rotatedVec * stiffnessForce
            nextTail.addInPlace(stiffedVec); // nextTail + stiffedVec
        }
        {
            // 外力による移動量
            nextTail.addInPlace(external);
        }
        {
            // 長さを boneLength に強制
            var normalized = nextTail.subtract(absPos).normalize();
            nextTail = absPos.add(_vector3_helper__WEBPACK_IMPORTED_MODULE_2__["Vector3Helper"].multiplyByFloat(normalized, this.boneLength));
        }
        {
            // Collision で移動
            nextTail = this.collide(colliders, nextTail);
        }
        this.prevTail = this.getCenterTranslatedPos(center, currentTail);
        this.currentTail = this.getCenterTranslatedPos(center, nextTail);
        // 回転を適用
        this.transform.rotationQuaternion = this.transformToRotation(nextTail);
    };
    VRMSpringBoneLogic.prototype.getCenterTranslatedWorldPos = function (center, pos) {
        if (center !== null) {
            return center.getAbsolutePosition().add(pos);
        }
        return pos;
    };
    VRMSpringBoneLogic.prototype.getCenterTranslatedPos = function (center, pos) {
        if (center !== null) {
            return center.position.add(pos);
        }
        return pos;
    };
    /**
     * 次のテールの位置情報から回転情報を生成する
     *
     * @see https://stackoverflow.com/questions/51549366/what-is-the-math-behind-fromtorotation-unity3d
     */
    VRMSpringBoneLogic.prototype.transformToRotation = function (nextTail) {
        var rotation = this.parentRotation.multiply(this.localRotation);
        var fromAxis = _quaternion_helper__WEBPACK_IMPORTED_MODULE_1__["QuaternionHelper"].multiplyWithVector3(rotation, this.boneAxis);
        var toAxis = nextTail.subtract(this.transform.absolutePosition).normalize();
        var result = _quaternion_helper__WEBPACK_IMPORTED_MODULE_1__["QuaternionHelper"].fromToRotation(fromAxis, toAxis);
        return result.multiplyInPlace(rotation);
    };
    /**
     * 衝突判定を行う
     * @param colliders SphereColliders
     * @param nextTail NextTail
     */
    VRMSpringBoneLogic.prototype.collide = function (colliders, nextTail) {
        var _this = this;
        colliders.forEach(function (collider) {
            var r = _this.radius + collider.radius;
            var axis = nextTail.subtract(collider.position);
            // 少数誤差許容のため 2 cm 判定を小さくする
            if (axis.lengthSquared() <= (r * r) - 0.02) {
                // ヒット。 Collider の半径方向に押し出す
                var posFromCollider = collider.position.add(_vector3_helper__WEBPACK_IMPORTED_MODULE_2__["Vector3Helper"].multiplyByFloat(axis.normalize(), r));
                // 長さを boneLength に強制
                var absPos = _this.transform.absolutePosition;
                nextTail = absPos.add(_vector3_helper__WEBPACK_IMPORTED_MODULE_2__["Vector3Helper"].multiplyByFloat(posFromCollider.subtractInPlace(absPos).normalize(), _this.boneLength));
            }
        });
        return nextTail;
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
/* harmony import */ var _sphere_collider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sphere-collider */ "./src/secondary-animation/sphere-collider.ts");
/* harmony import */ var _vector3_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vector3-helper */ "./src/secondary-animation/vector3-helper.ts");
/* harmony import */ var _vrm_spring_bone_logic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vrm-spring-bone-logic */ "./src/secondary-animation/vrm-spring-bone-logic.ts");







/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
var VRMSpringBone = /** @class */ (function () {
    /**
     * @see https://vrm.dev/en/vrm_spec/
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
        this.initialLocalRotations = [];
        this.activeBones = [];
        /** @hidden */
        this.drawGizmo = false;
        this.boneGizmoList = [];
        this.colliderGizmoList = [];
        this.activeBones = this.bones.filter(function (bone) { return bone !== null; });
        this.activeBones.forEach(function (bone) {
            bone.rotationQuaternion = bone.rotationQuaternion || bone.rotation.toQuaternion();
            _this.initialLocalRotations.push(bone.rotationQuaternion.clone());
        });
    }
    /**
     * Initialize bones
     *
     * @param force Force reset rotation
     */
    VRMSpringBone.prototype.setup = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (!force) {
            this.activeBones.forEach(function (bone, index) {
                bone.rotationQuaternion = _this.initialLocalRotations[index].clone();
            });
        }
        this.verlets = [];
        this.activeBones.forEach(function (bone, index) {
            _this.initialLocalRotations[index] = bone.rotationQuaternion;
            _this.setupRecursive(_this.center, bone);
        });
    };
    /**
     * Update bones
     *
     * @param deltaTime
     */
    VRMSpringBone.prototype.update = function (deltaTime) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var colliderList, stiffness, external, promises;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.verlets.length === 0) {
                    if (this.activeBones.length === 0) {
                        return [2 /*return*/];
                    }
                    this.setup();
                }
                colliderList = [];
                this.colliderGroups.forEach(function (group) {
                    if (!group) {
                        return;
                    }
                    var absPos = group.transform.getAbsolutePosition();
                    if (Number.isNaN(absPos.x)) {
                        return;
                    }
                    group.colliders.forEach(function (collider) {
                        var pos = absPos.add(collider.offset);
                        colliderList.push(new _sphere_collider__WEBPACK_IMPORTED_MODULE_4__["SphereCollider"](pos, collider.radius));
                        if (_this.drawGizmo) {
                            if (_this.colliderGizmoList.length < colliderList.length) {
                                var mesh = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__["MeshBuilder"].CreateSphere(group.transform.name + "_colliderGizmo", {
                                    segments: 8,
                                    diameter: 1,
                                    updatable: true,
                                }, group.transform.getScene());
                                var mat = new _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](group.transform.name + '_colliderGizmomat', group.transform.getScene());
                                mat.emissiveColor = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_2__["Color3"].Yellow();
                                mat.wireframe = true;
                                mesh.material = mat;
                                _this.colliderGizmoList.push(mesh);
                            }
                            _this.colliderGizmoList[colliderList.length - 1].position = pos;
                            _this.colliderGizmoList[colliderList.length - 1].scaling = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_2__["Vector3"](collider.radius * 2, collider.radius * 2, collider.radius * 2);
                        }
                    });
                });
                stiffness = this.stiffness * deltaTime;
                external = _vector3_helper__WEBPACK_IMPORTED_MODULE_5__["Vector3Helper"].multiplyByFloat(this.gravityDir, this.gravityPower * deltaTime);
                promises = this.verlets.map(function (verlet, index) {
                    return new Promise(function (resolve) {
                        verlet.update(_this.center, stiffness, _this.dragForce, external, colliderList);
                        if (_this.drawGizmo && _this.boneGizmoList[index]) {
                            _this.boneGizmoList[index].position = verlet.transform.absolutePosition;
                            _this.boneGizmoList[index].rotationQuaternion = verlet.transform.rotationQuaternion;
                        }
                        resolve();
                    });
                });
                return [2 /*return*/, Promise.all(promises).then(function () { })];
            });
        });
    };
    VRMSpringBone.prototype.setupRecursive = function (center, parent) {
        var _this = this;
        if (parent.getChildTransformNodes().length === 0) {
            // Leaf
            var ancestor = parent.parent;
            var delta = parent.getAbsolutePosition().subtract(ancestor.getAbsolutePosition()).normalize();
            var childPosition = parent.position.add(_vector3_helper__WEBPACK_IMPORTED_MODULE_5__["Vector3Helper"].multiplyByFloat(delta, 0.07));
            this.verlets.push(new _vrm_spring_bone_logic__WEBPACK_IMPORTED_MODULE_6__["VRMSpringBoneLogic"](center, this.hitRadius, parent, childPosition));
        }
        else {
            // Not leaf
            var firstChild = parent.getChildTransformNodes().shift();
            var localPosition = firstChild.position;
            var scale = firstChild.scaling;
            this.verlets.push(new _vrm_spring_bone_logic__WEBPACK_IMPORTED_MODULE_6__["VRMSpringBoneLogic"](center, this.hitRadius, parent, localPosition.multiply(scale)));
        }
        if (this.drawGizmo) {
            var boneGizmo = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__["MeshBuilder"].CreateSphere(parent.name + '_boneGizmo', {
                segments: 8,
                diameter: this.hitRadius * 2,
                updatable: true,
            }, parent.getScene());
            var mat = new _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](parent.name + '_boneGizmomat', parent.getScene());
            mat.emissiveColor = _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_2__["Color3"].Red();
            mat.wireframe = true;
            boneGizmo.material = mat;
            this.boneGizmoList.push(boneGizmo);
        }
        parent.getChildTransformNodes().forEach(function (child) {
            _this.setupRecursive(center, child);
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
 * [Specification](https://github.com/vrm-c/UniVRM/tree/master/specification/)
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
        // GLTFLoader has already added rootMesh as __root__ before load extension
        // @see glTFLoader._loadData
        this.meshesFrom = this.loader.babylonScene.meshes.length - 1;
        this.transformNodesFrom = this.loader.babylonScene.transformNodes.length;
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
        var manager = new _vrm_manager__WEBPACK_IMPORTED_MODULE_1__["VRMManager"](this.loader.gltf.extensions[NAME], this.loader.babylonScene, this.meshesFrom, this.transformNodesFrom);
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
     */
    function VRMManager(ext, scene, meshesFrom, transformNodesFrom) {
        this.ext = ext;
        this.scene = scene;
        this.meshesFrom = meshesFrom;
        this.transformNodesFrom = transformNodesFrom;
        this.morphTargetMap = {};
        this.presetMorphTargetMap = {};
        this.transformNodeMap = {};
        this.transformNodeCache = {};
        this.meshCache = {};
        this.meshCache = this.constructMeshCache();
        this.transformNodeCache = this.constructTransformNodeCache();
        this.springBoneController = new _secondary_animation_spring_bone_controller__WEBPACK_IMPORTED_MODULE_2__["SpringBoneController"](this.ext.secondaryAnimation, this.findTransformNode.bind(this));
        this.springBoneController.setup();
        this.constructMorphTargetMap();
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
        if (!this.morphTargetMap[label]) {
            return;
        }
        this.morphTargetMap[label].forEach(function (setting) {
            setting.target.influence = Math.max(0, Math.min(1, value)) * (setting.weight / 100);
        });
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
        this.presetMorphTargetMap[label].forEach(function (setting) {
            setting.target.influence = Math.max(0, Math.min(1, value)) * (setting.weight / 100);
        });
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
     * 事前に MorphTarget と BlendShape を紐付ける
     */
    VRMManager.prototype.constructMorphTargetMap = function () {
        var _this = this;
        if (!this.ext.blendShapeMaster || !this.ext.blendShapeMaster.blendShapeGroups) {
            return;
        }
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
            // TODO: materialValues
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
 * [VRM が提供するシェーダ](https://vrm.dev/vrm_spec/#vrm%E3%81%8C%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%80%E3%83%BC) を特定し読み込む
 * - UnlitTexture: 不透明, VRM ファイル側で [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit/) が定義されているため、何もしない
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
        applyTexture(prop.textureProperties._MainTex, function (texture) { return material.diffuseTexture = texture; });
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