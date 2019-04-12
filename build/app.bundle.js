/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./res/character_sheet.png":
/*!*********************************!*\
  !*** ./res/character_sheet.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"build/3f8b5eb2a965d26fa7f08a7f65e04603.png\";\n\n//# sourceURL=webpack:///./res/character_sheet.png?");

/***/ }),

/***/ "./src/js/Canvas.js":
/*!**************************!*\
  !*** ./src/js/Canvas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas(id, width, height) {\n    _classCallCheck(this, Canvas);\n\n    this._canvas = document.getElementById(id);\n    this._canvas.width = width;\n    this._canvas.height = height;\n  }\n\n  _createClass(Canvas, [{\n    key: \"context\",\n    get: function get() {\n      if (!this.context2D) {\n        this.context2D = this._canvas.getContext('2d');\n      }\n\n      return this.context2D;\n    }\n  }]);\n\n  return Canvas;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\n\n//# sourceURL=webpack:///./src/js/Canvas.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/js/Canvas.js\");\n/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/helpers */ \"./src/js/lib/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar FRAMES_PER_SECOND_CAP = 60;\nvar MINIMUM_TIME_BETWEEN_FRAMES = 1000 / 60; // 1000 milliseconds / 60 frames per second = number of milliseconds between frames\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(options) {\n    _classCallCheck(this, Game);\n\n    //Public Variables\n    this._width = options.width;\n    this._height = options.height; // Private Variables\n\n    this.lastTime;\n    this.cid = options.cid;\n    this.canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.cid, this._width, this._height);\n    this.context = this.canvas.context;\n    this.gameObjects = [];\n  }\n\n  _createClass(Game, [{\n    key: \"add\",\n    value: function add(gameObject) {\n      this.gameObjects.push(gameObject);\n    }\n  }, {\n    key: \"update\",\n    value: function update(deltaTime) {\n      this.gameObjects.forEach(function (gameObject) {\n        gameObject.update(deltaTime);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      this.context.clearRect(0, 0, this._width, this._height);\n      this.gameObjects.forEach(function (gameObject) {\n        gameObject.render(_this.context);\n      });\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Sprite.js":
/*!**************************!*\
  !*** ./src/js/Sprite.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Sprite =\n/*#__PURE__*/\nfunction () {\n  function Sprite(options) {\n    _classCallCheck(this, Sprite);\n\n    // Private Variables\n    this.tickCount = 0;\n    this.ticksPerFrame = 60 / options.framesPerSecond || 0;\n    this.initialFrameIndex = options.initialFrameIndex || 0;\n    this.numberOfFrames = options.numberOfFrames || 1;\n    this.frameIndex = this.initialFrameIndex; // Public Variables\n\n    this._width = options.width;\n    this._height = options.height;\n    this._image = options.image;\n    this._loop = options.loop;\n  }\n\n  _createClass(Sprite, [{\n    key: \"update\",\n    value: function update() {\n      this.tickCount++;\n\n      if (this.tickCount > this.ticksPerFrame) {\n        this.tickCount = 0;\n\n        if (this.frameIndex < this.numberOfFrames - 1) {\n          this.frameIndex++;\n        } else if (this._loop) {\n          this.frameIndex = this.initialFrameIndex;\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(context) {\n      context.drawImage(this._image, this.frameIndex * this._width, 0, this._width, this._height, 0, 0, this._width, this._height);\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return this._width;\n    },\n    set: function set(width) {\n      this._width = width;\n    }\n  }, {\n    key: \"height\",\n    get: function get() {\n      return this._height;\n    },\n    set: function set(height) {\n      this._height = height;\n    }\n  }, {\n    key: \"image\",\n    get: function get() {\n      return this._image;\n    },\n    set: function set(image) {\n      this._image = image;\n    }\n  }, {\n    key: \"loop\",\n    get: function get() {\n      return this._loop;\n    },\n    set: function set(loop) {\n      this._loop = loop;\n    }\n  }]);\n\n  return Sprite;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n//# sourceURL=webpack:///./src/js/Sprite.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/js/Sprite.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n/* harmony import */ var _res_character_sheet_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../res/character_sheet.png */ \"./res/character_sheet.png\");\n/* harmony import */ var _res_character_sheet_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_res_character_sheet_png__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar game;\nvar resources = {};\n\nfunction gameLoop(deltaTime) {\n  game.update(deltaTime);\n  game.render();\n  window.requestAnimationFrame(gameLoop);\n}\n\nfunction main() {\n  game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    cid: 'game',\n    width: 400,\n    height: 400\n  });\n  var character = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    width: 96,\n    height: 96,\n    image: resources.character,\n    loop: true,\n    // ticksPerFrame: 30,\n    framesPerSecond: 2,\n    initialFrameIndex: 2,\n    numberOfFrames: 4\n  });\n  game.add(character);\n  gameLoop(0);\n}\n\nvar paths = [{\n  key: 'character',\n  path: _res_character_sheet_png__WEBPACK_IMPORTED_MODULE_2___default.a\n}];\n\nfunction resourceLoader(callback) {\n  var counter = 0;\n\n  for (var idx = 0; idx < paths.length; idx++) {\n    (function (i) {\n      var img = new Image();\n      resources[paths[i].key] = img;\n      img.addEventListener('load', function () {\n        counter++;\n\n        if (counter >= paths.length) {\n          callback();\n        }\n      }, false);\n      img.addEventListener('error', function () {\n        counter++;\n\n        if (counter >= paths.length) {\n          callback();\n        }\n      }, false);\n      img.src = paths[i].path;\n    })(idx);\n  }\n}\n\nresourceLoader(main);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/lib/helpers.js":
/*!*******************************!*\
  !*** ./src/js/lib/helpers.js ***!
  \*******************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\nvar throttle = function throttle(func, limit) {\n  var inThrottle;\n  return function () {\n    var args = arguments;\n    var context = this;\n\n    if (!inThrottle) {\n      func.apply(context, args);\n      inThrottle = true;\n      setTimeout(function () {\n        return inThrottle = false;\n      }, limit);\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/js/lib/helpers.js?");

/***/ })

/******/ });