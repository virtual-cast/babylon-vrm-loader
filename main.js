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
/******/ 			if(installedChunks[chunkId]) {
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: VCAST_vci_material_unity, VRM, VRMFileLoader, IVRMMaterialPropertyShader, VRMManager, VRMMaterialGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcast-vci-material-unity */ "./src/vcast-vci-material-unity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCAST_vci_material_unity", function() { return _vcast_vci_material_unity__WEBPACK_IMPORTED_MODULE_0__["VCAST_vci_material_unity"]; });

/* harmony import */ var _vrm_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vrm-extension */ "./src/vrm-extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRM", function() { return _vrm_extension__WEBPACK_IMPORTED_MODULE_1__["VRM"]; });

/* harmony import */ var _vrm_file_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vrm-file-loader */ "./src/vrm-file-loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMFileLoader", function() { return _vrm_file_loader__WEBPACK_IMPORTED_MODULE_2__["VRMFileLoader"]; });

/* harmony import */ var _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vrm-interfaces */ "./src/vrm-interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IVRMMaterialPropertyShader", function() { return _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__["IVRMMaterialPropertyShader"]; });

/* harmony import */ var _vrm_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vrm-manager */ "./src/vrm-manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMManager", function() { return _vrm_manager__WEBPACK_IMPORTED_MODULE_4__["VRMManager"]; });

/* harmony import */ var _vrm_material_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vrm-material-generator */ "./src/vrm-material-generator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRMMaterialGenerator", function() { return _vrm_material_generator__WEBPACK_IMPORTED_MODULE_5__["VRMMaterialGenerator"]; });









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
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var debugProperties, canvas, engine, scene, camera, directionalLight, hemisphericLight, pointLight, standardMaterialSphere, shadowCaster, shadowGenerator, fileCount;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                    return [4 /*yield*/, scene.debugLayer.show({
                            globalRoot: document.getElementById('wrapper'),
                        })];
                case 1:
                    _a.sent();
                    // Expose current scene
                    window.currentScene = scene;
                    engine.runRenderLoop(function () {
                        scene.render();
                        shadowCaster.rotate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"].Up(), 0.01);
                    });
                    window.addEventListener('resize', function () {
                        engine.resize();
                    });
                    fileCount = 0;
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
        delete this.loader;
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
        this.meshesFrom = this.loader.babylonScene.meshes.length;
        this.transformNodesFrom = this.loader.babylonScene.transformNodes.length;
    }
    /**
     * @inheritdoc
     */
    VRM.prototype.dispose = function () {
        delete this.loader;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VRMFileLoader, _super);
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
/**
 * VRM キャラクターを動作させるためのマネージャ
 */
var VRMManager = /** @class */ (function () {
    function VRMManager(ext, scene, meshesFrom, transformNodesFrom) {
        this.ext = ext;
        this.scene = scene;
        this.meshesFrom = meshesFrom;
        this.transformNodesFrom = transformNodesFrom;
        this.morphTargetMap = {};
        this.presetMorphTargetMap = {};
        this.transformNodeMap = {};
        this.transformNodeCache = null;
        this.constructMorphTargetMap();
        this.constructTransformNodeMap();
    }
    VRMManager.prototype.dispose = function () {
        this.morphTargetMap = {};
        this.presetMorphTargetMap = {};
        this.transformNodeMap = {};
        this.transformNodeCache = null;
    };
    /**
     * モーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    VRMManager.prototype.morphing = function (label, value) {
        if (!this.morphTargetMap[label]) {
            throw new Error("Unknown morph label " + label);
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
            throw new Error("Unknown preset morph label " + label);
        }
        this.presetMorphTargetMap[label].forEach(function (setting) {
            setting.target.influence = Math.max(0, Math.min(1, value)) * (setting.weight / 100);
        });
    };
    /**
     * ボーン名からそのボーンに該当する TransformNode を取得する
     * @param name HumanBoneName
     */
    VRMManager.prototype.getBone = function (name) {
        return this.transformNodeMap[name] || null;
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
                var mesh = _this.findMesh(b.mesh);
                if (!mesh) {
                    console.log("Undefined BlendShapeBind Mesh", b);
                    return;
                }
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
                    _this.presetMorphTargetMap[g.presetName] = _this.morphTargetMap[g.presetName] || [];
                    _this.presetMorphTargetMap[g.presetName].push({
                        target: target,
                        weight: b.weight,
                    });
                }
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
     * node 番号から該当する TransformNode を探す
     * 数が多くなるのでキャッシュに参照を持つ構造にする
     * gltf の node 番号は `metadata.gltf.pointers` に記録されている
     * @param nodeIndex
     */
    VRMManager.prototype.findTransformNode = function (nodeIndex) {
        var _this = this;
        if (!this.transformNodeCache) {
            this.transformNodeCache = this.scene.transformNodes.filter(function (n, index) {
                return index >= _this.transformNodesFrom
                    && !!n.metadata
                    && !!n.metadata.gltf
                    && !!n.metadata.gltf.pointers
                    && n.metadata.gltf.pointers.length !== 0;
            }).reduce(function (prev, curr) {
                var nodeIndex = -1;
                for (var _i = 0, _a = curr.metadata.gltf.pointers; _i < _a.length; _i++) {
                    var p = _a[_i];
                    if (p.startsWith("/nodes/")) {
                        nodeIndex = parseInt(p.substr(7), 10);
                    }
                }
                if (nodeIndex !== -1) {
                    prev[nodeIndex] = curr;
                }
                return prev;
            }, {});
        }
        return this.transformNodeCache[nodeIndex] || null;
    };
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     */
    VRMManager.prototype.findMesh = function (meshIndex) {
        var _this = this;
        var mesh = this.scene.meshes.find(function (m, index) {
            if (index < _this.meshesFrom || !m.metadata || !m.metadata.gltf || !m.metadata.gltf.pointers || m.metadata.gltf.pointers.length < 1) {
                return false;
            }
            var pointers = m.metadata.gltf.pointers;
            for (var _i = 0, pointers_1 = pointers; _i < pointers_1.length; _i++) {
                var p = pointers_1[_i];
                if (p.startsWith("/meshes/" + meshIndex)) {
                    return true;
                }
            }
            return false;
        });
        if (mesh) {
            return mesh;
        }
        return null;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylon-mtoon-material */ "./node_modules/babylon-mtoon-material/dist/index.js");
/* harmony import */ var babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vrm-interfaces */ "./src/vrm-interfaces.ts");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");





/**
 * VRM で指定される Material を生成する
 * [VRM が提供するシェーダ](https://dwango.github.io/vrm/vrm_spec/#vrm%E3%81%8C%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%80%E3%83%BC) を特定し読み込む
 * - UnlitTexture: 不透明, VRM ファイル側で [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit/) が定義されているため、何もしない
 * - UnlitCutout: 透明度が閾値以下の部分を透明とする, 同上
 * - UnlitTransparent: アルファブレンド。ZWriteしない, 同上
 * - UnlitTransparentZWrite: アルファブレンド。ZWriteする, 同上に加え、プロパティで ZWrite を強制しています
 * - MToon: MToonMaterial を実装し差し替えています。
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
        var materials = this.getMaterialProperties();
        if (!materials) {
            return null;
        }
        var materialProp = this.findMaterialPropertyByName(material.name, materials);
        if (!materialProp) {
            return null;
        }
        var newMaterial = this.createMaterialByShader(context, material, babylonDrawMode, materialProp);
        if (!newMaterial) {
            return null;
        }
        assign(newMaterial);
        if (newMaterial instanceof babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__["MToonMaterial"]) {
            mesh.alphaIndex = materialProp.renderQueue;
            return this.loadMToonTexturesAsync(context, newMaterial, materialProp);
        }
        return Promise.resolve(newMaterial);
    };
    /**
     * VRM または VCI からマテリアルプロパティの配列を探す
     */
    VRMMaterialGenerator.prototype.getMaterialProperties = function () {
        if (!this.loader.gltf.extensions) {
            return null;
        }
        if (this.loader.gltf.extensions.VRM && this.loader.gltf.extensions.VRM.materialProperties) {
            return this.loader.gltf.extensions.VRM.materialProperties;
        }
        if (this.loader.gltf.extensions.VCAST_vci_material_unity && this.loader.gltf.extensions.VCAST_vci_material_unity.materials) {
            return this.loader.gltf.extensions.VCAST_vci_material_unity.materials;
        }
        return null;
    };
    /**
     * テクスチャを読み込む
     * @param context 現在のコンテキスト
     * @param material 生成した MToonMaterial
     * @param prop 生成した MToonMaterial のマテリアルプロパティ
     */
    VRMMaterialGenerator.prototype.loadMToonTexturesAsync = function (context, material, prop) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promises, _i, _a, baseName, index, propName, assignTexture;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                promises = [];
                for (_i = 0, _a = Object.keys(VRMMaterialGenerator.TEXTURE_MAP); _i < _a.length; _i++) {
                    baseName = _a[_i];
                    index = prop.textureProperties[baseName];
                    if (typeof index === 'undefined') {
                        continue;
                    }
                    propName = VRMMaterialGenerator.TEXTURE_MAP[baseName];
                    assignTexture = (function (name, option) {
                        return function (babylonTexture) {
                            // 実際は Texture インスタンスが来るのでキャスト
                            var t = babylonTexture;
                            if (!!option) {
                                t.uOffset = option[0];
                                t.vOffset = option[1];
                                t.uScale = option[2];
                                t.vScale = option[3];
                            }
                            material[name] = t;
                        };
                    })(propName, prop.vectorProperties[baseName]);
                    promises.push(this.loader.loadTextureInfoAsync(context, {
                        index: index,
                        texCoord: 0,
                    }, assignTexture));
                }
                return [2 /*return*/, Promise.all(promises).then(function () { return material; })];
            });
        });
    };
    /**
     * シェーダ名からマテリアルを推測して生成する
     * @param context 現在のコンテキスト
     * @param material glTF マテリアル
     * @param babylonDrawMode 描画種類
     * @param prop 生成するマテリアルプロパティ
     */
    VRMMaterialGenerator.prototype.createMaterialByShader = function (context, material, babylonDrawMode, prop) {
        if (prop.shader === _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__["IVRMMaterialPropertyShader"].VRMMToon) {
            var mtoonMaterial = new babylon_mtoon_material__WEBPACK_IMPORTED_MODULE_2__["MToonMaterial"](material.name || "material" + material.index, this.loader.babylonScene);
            this.setMToonMaterialProperties(mtoonMaterial, prop);
            return mtoonMaterial;
        }
        if (prop.shader === _vrm_interfaces__WEBPACK_IMPORTED_MODULE_3__["IVRMMaterialPropertyShader"].VRMUnlitTransparentZWrite) {
            var mat = this.loader.createMaterial(context, material, babylonDrawMode);
            // 通常マテリアルに Depth Write を強制
            mat.disableDepthWrite = false;
            mat.forceDepthWrite = true;
            return mat;
        }
        return null;
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
            this.loader.log('Duplicated name found' + materialName);
        }
        return mats[mats.length - 1];
    };
    /**
     * マテリアルに VRM プロパティを設定
     * VRM プロパティとマテリアルプロパティのマッピングを行っている
     * 初期値はマテリアル実装側に持っているため、値がある場合のみ上書きする
     * @param material
     * @param prop
     */
    VRMMaterialGenerator.prototype.setMToonMaterialProperties = function (material, prop) {
        if (typeof prop.floatProperties._DebugMode !== 'undefined') {
            material.debugMode = prop.floatProperties._DebugMode;
        }
        if (typeof prop.floatProperties._OutlineWidthMode !== 'undefined') {
            material.outlineWidthMode = prop.floatProperties._OutlineWidthMode;
        }
        if (typeof prop.floatProperties._OutlineColorMode !== 'undefined') {
            material.outlineColorMode = prop.floatProperties._OutlineColorMode;
        }
        if (typeof prop.floatProperties._CullMode !== 'undefined') {
            material.cullMode = prop.floatProperties._CullMode;
        }
        if (typeof prop.floatProperties._OutlineCullMode !== 'undefined') {
            material.outlineCullMode = prop.floatProperties._OutlineCullMode;
        }
        if (typeof prop.floatProperties._Cutoff !== 'undefined') {
            material.alphaCutOff = prop.floatProperties._Cutoff;
        }
        if (typeof prop.vectorProperties._Color !== 'undefined') {
            material.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"](prop.vectorProperties._Color[0], prop.vectorProperties._Color[1], prop.vectorProperties._Color[2]);
            material.alpha = prop.vectorProperties._Color[3];
        }
        if (typeof prop.vectorProperties._ShadeColor !== 'undefined') {
            material.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"](prop.vectorProperties._ShadeColor[0], prop.vectorProperties._ShadeColor[1], prop.vectorProperties._ShadeColor[2]);
        }
        if (typeof prop.floatProperties._BumpScale !== 'undefined') {
            material.bumpScale = prop.floatProperties._BumpScale;
        }
        if (typeof prop.floatProperties._ReceiveShadowRate !== 'undefined') {
            material.receiveShadowRate = prop.floatProperties._ReceiveShadowRate;
        }
        if (typeof prop.floatProperties._ShadingGradeRate !== 'undefined') {
            material.shadingGradeRate = prop.floatProperties._ShadingGradeRate;
        }
        if (typeof prop.floatProperties._ShadeShift !== 'undefined') {
            material.shadeShift = prop.floatProperties._ShadeShift;
        }
        if (typeof prop.floatProperties._ShadeToony !== 'undefined') {
            material.shadeToony = prop.floatProperties._ShadeToony;
        }
        if (typeof prop.floatProperties._LightColorAttenuation !== 'undefined') {
            material.lightColorAttenuation = prop.floatProperties._LightColorAttenuation;
        }
        if (typeof prop.floatProperties._IndirectLightIntensity !== 'undefined') {
            material.indirectLightIntensity = prop.floatProperties._IndirectLightIntensity;
        }
        if (typeof prop.vectorProperties._EmissionColor !== 'undefined') {
            material.emissiveColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"](prop.vectorProperties._EmissionColor[0], prop.vectorProperties._EmissionColor[1], prop.vectorProperties._EmissionColor[2]);
        }
        if (typeof prop.floatProperties._OutlineWidth !== 'undefined') {
            material.outlineWidth = prop.floatProperties._OutlineWidth;
        }
        if (typeof prop.floatProperties._OutlineScaledMaxDistance !== 'undefined') {
            material.outlineScaledMaxDistance = prop.floatProperties._OutlineScaledMaxDistance;
        }
        if (typeof prop.vectorProperties._OutlineColor !== 'undefined') {
            material.outlineColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"](prop.vectorProperties._OutlineColor[0], prop.vectorProperties._OutlineColor[1], prop.vectorProperties._OutlineColor[2]);
        }
        if (typeof prop.floatProperties._OutlineLightingMix !== 'undefined') {
            material.outlineLightingMix = prop.floatProperties._OutlineLightingMix;
        }
        if (typeof prop.floatProperties._BlendMode !== 'undefined') {
            switch (prop.floatProperties._BlendMode) {
                case 0: // Opaque
                    material.alphaBlend = false;
                    material.alphaTest = false;
                    material.alphaMode = _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_4__["Engine"].ALPHA_DISABLE;
                    break;
                case 1: // TransparentCutout
                    material.alphaBlend = false;
                    material.alphaTest = true;
                    material.alphaMode = _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_4__["Engine"].ALPHA_COMBINE;
                    break;
                case 2: // Transparent
                    material.alphaBlend = true;
                    material.alphaTest = false;
                    material.alphaMode = _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_4__["Engine"].ALPHA_COMBINE;
                    break;
            }
        }
        if (typeof prop.keywordMap._ALPHABLEND_ON !== 'undefined') {
            material.alphaBlend = prop.keywordMap._ALPHABLEND_ON;
        }
        if (typeof prop.keywordMap._ALPHATEST_ON !== 'undefined') {
            material.alphaTest = prop.keywordMap._ALPHATEST_ON;
        }
        if (typeof prop.floatProperties._ZWrite !== 'undefined') {
            material.forceDepthWrite = prop.floatProperties._ZWrite === 1;
            if (material.forceDepthWrite) {
                material.disableDepthWrite = false;
            }
        }
    };
    /**
     * MToonMaterial テクスチャ名のマッピング
     */
    VRMMaterialGenerator.TEXTURE_MAP = {
        _MainTex: 'diffuseTexture',
        _ShadeTexture: 'shadeTexture',
        _EmissionMap: 'emissiveTexture',
        _BumpMap: 'bumpTexture',
        _ReceiveShadowTexture: 'receiveShadowTexture',
        _ShadingGradeTexture: 'shadingGradeTexture',
        _SphereAdd: 'matCapTexture',
        _OutlineWidthTexture: 'outlineWidthTexture',
    };
    return VRMMaterialGenerator;
}());



/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map