/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dotsweb/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://dotsweb/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://dotsweb/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/js/canvas/canvas.js":
/*!*********************************!*\
  !*** ./src/js/canvas/canvas.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-canvas.js */ \"./src/js/canvas/init-canvas.js\");\n/* harmony import */ var _stages_stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stages/stage.js */ \"./src/js/canvas/stages/stage.js\");\n/* harmony import */ var _stages_game_loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stages/game-loading.js */ \"./src/js/canvas/stages/game-loading.js\");\n/* harmony import */ var _stages_mem_appear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stages/mem-appear.js */ \"./src/js/canvas/stages/mem-appear.js\");\n\n\n\n\nfunction startGame() {\n  lastTime = Date.now();\n  requestAnimationFrame(gameLoop);\n}\nvar lastTime = Date.now();\n\n_stages_stage_js__WEBPACK_IMPORTED_MODULE_1__.Stage.prototype.onComplete = function () {\n  currentStage = currentStage.getNext();\n}; //init game stages\n\n\nvar gameLoadStage = new _stages_game_loading_js__WEBPACK_IMPORTED_MODULE_2__.GameLoading();\nvar memAppearStage = new _stages_mem_appear_js__WEBPACK_IMPORTED_MODULE_3__.MemAppear();\nvar clearStage = new _stages_stage_js__WEBPACK_IMPORTED_MODULE_1__.Stage(); //game stages dependences\n\ngameLoadStage.setNext(memAppearStage);\nmemAppearStage.setNext(clearStage);\nvar currentStage = gameLoadStage;\n\nfunction gameLoop() {\n  var nowTime = Date.now();\n  var deltaTime = (nowTime - lastTime) / 1000;\n  lastTime = nowTime;\n  _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height);\n  currentStage.update(deltaTime);\n  requestAnimationFrame(gameLoop);\n}\n\n//# sourceURL=webpack://dotsweb/./src/js/canvas/canvas.js?");

/***/ }),

/***/ "./src/js/canvas/init-canvas.js":
/*!**************************************!*\
  !*** ./src/js/canvas/init-canvas.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx)\n/* harmony export */ });\nvar canvas = document.querySelector(\".canvas\");\nvar ctx = canvas.getContext(\"2d\");\n\n//# sourceURL=webpack://dotsweb/./src/js/canvas/init-canvas.js?");

/***/ }),

/***/ "./src/js/canvas/stages/game-loading.js":
/*!**********************************************!*\
  !*** ./src/js/canvas/stages/game-loading.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameLoading\": () => (/* binding */ GameLoading)\n/* harmony export */ });\n/* harmony import */ var _stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage.js */ \"./src/js/canvas/stages/stage.js\");\n/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../welcome-form.js */ \"./src/js/welcome-form.js\");\n/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../init-canvas.js */ \"./src/js/canvas/init-canvas.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\n\n\nvar _screenWidth = new WeakMap();\n\nvar _screenHeight = new WeakMap();\n\nvar _radius = new WeakMap();\n\nvar _totalShapeCount = new WeakMap();\n\nvar _circleCount = new WeakMap();\n\nvar _speed = new WeakMap();\n\nvar _offset = new WeakMap();\n\nvar _nowAlpha = new WeakMap();\n\nvar _getAngle = new WeakSet();\n\nvar GameLoading = /*#__PURE__*/function (_Stage) {\n  _inherits(GameLoading, _Stage);\n\n  var _super = _createSuper(GameLoading);\n\n  function GameLoading() {\n    var _this;\n\n    _classCallCheck(this, GameLoading);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _getAngle.add(_assertThisInitialized(_this));\n\n    _screenWidth.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.canvas.width\n    });\n\n    _screenHeight.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.canvas.height\n    });\n\n    _radius.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 10\n    });\n\n    _totalShapeCount.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 100\n    });\n\n    _circleCount.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 5\n    });\n\n    _speed.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 1\n    });\n\n    _offset.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 0\n    });\n\n    _nowAlpha.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 1\n    });\n\n    return _this;\n  }\n\n  _createClass(GameLoading, [{\n    key: \"update\",\n    value: function update(deltaTime) {\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.localPlayerColor;\n\n      for (var i = 0; i < _classPrivateFieldGet(this, _circleCount); ++i) {\n        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.beginPath();\n\n        var angle = _classPrivateMethodGet(this, _getAngle, _getAngle2).call(this, _classPrivateFieldGet(this, _offset) + i * 0.1);\n\n        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.arc(Math.sin(angle) * _classPrivateFieldGet(this, _totalShapeCount) + _classPrivateFieldGet(this, _screenWidth) / 2, Math.cos(angle) * _classPrivateFieldGet(this, _totalShapeCount) + _classPrivateFieldGet(this, _screenHeight) / 2, _classPrivateFieldGet(this, _radius), 0, Math.PI * 2);\n        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.fill();\n      }\n\n      _classPrivateFieldSet(this, _offset, _classPrivateFieldGet(this, _offset) + _classPrivateFieldGet(this, _speed) * deltaTime);\n\n      if (_classPrivateFieldGet(this, _offset) >= Math.PI) {\n        if (_classPrivateFieldGet(this, _nowAlpha) > 0) _classPrivateFieldSet(this, _nowAlpha, _classPrivateFieldGet(this, _nowAlpha) - _classPrivateFieldGet(this, _speed) * deltaTime);\n        _classPrivateFieldGet(this, _nowAlpha) < 0 ? _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.globalAlpha = 0 : _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.globalAlpha = _classPrivateFieldGet(this, _nowAlpha);\n\n        if (_classPrivateFieldGet(this, _nowAlpha) <= 0) {\n          this.onComplete();\n          _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.globalAlpha = 1;\n        }\n      }\n    }\n  }]);\n\n  return GameLoading;\n}(_stage_js__WEBPACK_IMPORTED_MODULE_0__.Stage);\n\nfunction _getAngle2(phase) {\n  return 4 * (Math.atan(phase % 2 - 1) + Math.PI * 4);\n}\n\n//# sourceURL=webpack://dotsweb/./src/js/canvas/stages/game-loading.js?");

/***/ }),

/***/ "./src/js/canvas/stages/mem-appear.js":
/*!********************************************!*\
  !*** ./src/js/canvas/stages/mem-appear.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemAppear\": () => (/* binding */ MemAppear)\n/* harmony export */ });\n/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../init-canvas.js */ \"./src/js/canvas/init-canvas.js\");\n/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../welcome-form.js */ \"./src/js/welcome-form.js\");\n/* harmony import */ var _stage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage.js */ \"./src/js/canvas/stages/stage.js\");\n/* harmony import */ var _img_mike_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/mike.jpg */ \"./src/img/mike.jpg\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\n\n\n\nvar _img = new WeakMap();\n\nvar _opacity = new WeakMap();\n\nvar _offset = new WeakMap();\n\nvar _getOppacity = new WeakSet();\n\nvar MemAppear = /*#__PURE__*/function (_Stage) {\n  _inherits(MemAppear, _Stage);\n\n  var _super = _createSuper(MemAppear);\n\n  function MemAppear() {\n    var _this;\n\n    _classCallCheck(this, MemAppear);\n\n    _this = _super.call(this);\n\n    _getOppacity.add(_assertThisInitialized(_this));\n\n    _img.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: new Image()\n    });\n\n    _opacity.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 0\n    });\n\n    _offset.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: 0\n    });\n\n    _classPrivateFieldGet(_assertThisInitialized(_this), _img).src = _img_mike_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    return _this;\n  }\n\n  _createClass(MemAppear, [{\n    key: \"update\",\n    value: function update(deltaTime) {\n      _classPrivateFieldSet(this, _offset, _classPrivateFieldGet(this, _offset) + deltaTime);\n\n      if (_classPrivateFieldGet(this, _offset) >= Math.PI) this.onComplete();\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.globalAlpha = _classPrivateMethodGet(this, _getOppacity, _getOppacity2).call(this, _classPrivateFieldGet(this, _offset));\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_classPrivateFieldGet(this, _img), _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width / 2 - _classPrivateFieldGet(this, _img).width / 2, 0);\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = \"35px Roboto\";\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"white\";\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = \"center\";\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textBaseline = \"bottom\";\n      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(_welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.localPlayerNickname, _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width / 2, _classPrivateFieldGet(this, _img).height - 2);\n    }\n  }]);\n\n  return MemAppear;\n}(_stage_js__WEBPACK_IMPORTED_MODULE_2__.Stage);\n\nfunction _getOppacity2(phase) {\n  var val = Math.sin(phase) * 1.5;\n  return val <= 1 ? val : 1;\n}\n\n//# sourceURL=webpack://dotsweb/./src/js/canvas/stages/mem-appear.js?");

/***/ }),

/***/ "./src/js/canvas/stages/stage.js":
/*!***************************************!*\
  !*** ./src/js/canvas/stages/stage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stage\": () => (/* binding */ Stage)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _next = new WeakMap();\n\nvar Stage = /*#__PURE__*/function () {\n  function Stage() {\n    _classCallCheck(this, Stage);\n\n    _next.set(this, {\n      writable: true,\n      value: this\n    });\n  }\n\n  _createClass(Stage, [{\n    key: \"getNext\",\n    value: function getNext() {\n      return _classPrivateFieldGet(this, _next);\n    }\n  }, {\n    key: \"setNext\",\n    value: function setNext(stage) {\n      _classPrivateFieldSet(this, _next, stage);\n    }\n  }, {\n    key: \"onComplete\",\n    value: function onComplete() {\n      alert(\"complete\");\n    }\n  }, {\n    key: \"update\",\n    value: function update(deltaTime) {}\n  }]);\n\n  return Stage;\n}();\n\n//# sourceURL=webpack://dotsweb/./src/js/canvas/stages/stage.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./src/index.html\");\n/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/fonts.css */ \"./src/css/fonts.css\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-form.js */ \"./src/js/welcome-form.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://dotsweb/./src/js/index.js?");

/***/ }),

/***/ "./src/js/welcome-form.js":
/*!********************************!*\
  !*** ./src/js/welcome-form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localPlayerColor\": () => (/* binding */ localPlayerColor),\n/* harmony export */   \"localPlayerNickname\": () => (/* binding */ localPlayerNickname)\n/* harmony export */ });\n/* harmony import */ var _canvas_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/canvas.js */ \"./src/js/canvas/canvas.js\");\nvar localPlayerColor;\nvar localPlayerNickname;\n\nsetButtonsColor();\nvar welcome_popup = document.querySelector(\".welcome-popup\");\nvar welcome_popup__form = welcome_popup.querySelector(\".welcome-popup__form\");\ndocument.addEventListener(\"DOMContentLoaded\", loadHandler);\nwelcome_popup__form.addEventListener(\"submit\", welcomeFormSubmit);\n\nfunction loadHandler() {\n  setTimeout(function () {\n    return welcome_popup.classList.toggle(\"welcome-popup_shown\");\n  }, 150);\n}\n\nfunction welcomeFormSubmit(event) {\n  if (welcome_popup.classList.contains(\"welcome-popup_shown\")) {\n    localPlayerColor = welcome_popup__form.color.value;\n    localPlayerNickname = welcome_popup__form.nickname.value;\n    if (localPlayerNickname == \"\") localPlayerNickname = welcome_popup__form.nickname.placeholder;\n    welcome_popup.classList.remove(\"welcome-popup_shown\");\n    (0,_canvas_canvas_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\n    setTimeout(function () {\n      return welcome_popup.classList.add(\"welcome-popup_hidden\");\n    }, 300);\n  }\n\n  event.preventDefault();\n}\n\nfunction setButtonsColor() {\n  var buttons = document.querySelectorAll(\".color-picker__button\");\n  buttons.forEach(function (element) {\n    element.style.backgroundColor = element.getAttribute(\"value\");\n  });\n}\n\n//# sourceURL=webpack://dotsweb/./src/js/welcome-form.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_roboto_v27_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/roboto-v27-latin_cyrillic-regular.woff2 */ \"./src/fonts/roboto-v27-latin_cyrillic-regular.woff2\");\n/* harmony import */ var _fonts_roboto_v27_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/roboto-v27-latin_cyrillic-regular.woff */ \"./src/fonts/roboto-v27-latin_cyrillic-regular.woff\");\n/* harmony import */ var _fonts_roboto_v27_latin_cyrillic_500_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/roboto-v27-latin_cyrillic-500.woff2 */ \"./src/fonts/roboto-v27-latin_cyrillic-500.woff2\");\n/* harmony import */ var _fonts_roboto_v27_latin_cyrillic_500_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/roboto-v27-latin_cyrillic-500.woff */ \"./src/fonts/roboto-v27-latin_cyrillic-500.woff\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_v27_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_v27_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_v27_latin_cyrillic_500_woff2__WEBPACK_IMPORTED_MODULE_4__);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_v27_latin_cyrillic_500_woff__WEBPACK_IMPORTED_MODULE_5__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* roboto-regular - latin_cyrillic */\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: local(\\\"\\\"),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"),\\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\n}\\n/* roboto-500 - latin_cyrillic */\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-style: normal;\\n  font-weight: 500;\\n  src: local(\\\"\\\"),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\"),\\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dotsweb/./src/css/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  color: whitesmoke;\\n  background-color: #1b1b25;\\n  font-family: \\\"Roboto\\\";\\n}\\n\\n.header__logo {\\n  height: 30px;\\n}\\n\\n.header {\\n  max-width: 1400px;\\n  width: 100%;\\n  margin: auto;\\n  margin-top: 10px;\\n}\\n\\n.welcome-popup {\\n  position: absolute;\\n  max-width: 300px;\\n  width: 100%;\\n  left: 50%;\\n  top: 20%;\\n  transform: translate(-50%, -50%);\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  padding: 20px;\\n\\n  transition: 125ms ease-in;\\n  background-color: rgb(37, 46, 51);\\n  border-radius: 20px;\\n  opacity: 0;\\n}\\n\\n.welcome-popup_shown {\\n  top: 40%;\\n  opacity: 100;\\n}\\n\\n.welcome-popup_hidden {\\n  display: none;\\n}\\n\\n.welcome-popup__title {\\n  margin-top: 0;\\n  text-align: center;\\n}\\n\\n.welcome-popup__form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.welcome-popup__nickname-section {\\n  width: 100%;\\n}\\n\\n.welcome-popup__nickname-label {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n\\n  font-size: 14pt;\\n}\\n.welcome-popup__nickname-field {\\n  max-width: 200px;\\n  border: none;\\n  border-radius: 5px;\\n  padding-left: 10px;\\n  box-sizing: border-box;\\n\\n  background-color: whitesmoke;\\n  font-weight: 500;\\n  color: rgb(37, 46, 51);\\n}\\n.welcome-popup__nickname-field:enabled {\\n  outline: none;\\n}\\n\\n.color-picker {\\n  width: 200px;\\n  padding: 10px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  list-style: none;\\n}\\n\\n.color-picker__button {\\n  appearance: none;\\n\\n  border-radius: 50%;\\n  width: 32px;\\n  height: 32px;\\n  outline: none;\\n  border: solid whitesmoke;\\n  border-width: 2px;\\n\\n  transition: 125ms ease;\\n}\\n\\n.color-picker__button:checked {\\n  border-radius: 30%;\\n  border-width: 4px;\\n  transform: scale(1.2);\\n}\\n\\n.color-picker__button:hover {\\n  border-radius: 30%;\\n}\\n\\n.welcome-popup__submit {\\n  max-width: 100px;\\n  width: 100%;\\n  height: 40px;\\n\\n  transition: 125ms ease;\\n  outline: none;\\n\\n  font-size: 14pt;\\n  font-weight: 500;\\n  color: rgb(37, 46, 51);\\n  background-color: whitesmoke;\\n  border: none;\\n  border-radius: 5px;\\n}\\n\\n.welcome-popup__submit:hover {\\n  opacity: 50%;\\n}\\n\\n.welcome-popup__submit:active {\\n  transform: scale(0.75);\\n}\\n\\n.canvas {\\n  display: block;\\n  width: 360px;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: -1;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dotsweb/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\n html {\\n    line-height: 1.15; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n  }\\n  \\n  /* Sections\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the margin in all browsers.\\n   */\\n  \\n  body {\\n    margin: 0;\\n  }\\n  \\n  /**\\n   * Render the `main` element consistently in IE.\\n   */\\n  \\n  main {\\n    display: block;\\n  }\\n  \\n  /**\\n   * Correct the font size and margin on `h1` elements within `section` and\\n   * `article` contexts in Chrome, Firefox, and Safari.\\n   */\\n  \\n  h1 {\\n    font-size: 2em;\\n    margin: 0.67em 0;\\n  }\\n  \\n  /* Grouping content\\n     ========================================================================== */\\n  \\n  /**\\n   * 1. Add the correct box sizing in Firefox.\\n   * 2. Show the overflow in Edge and IE.\\n   */\\n  \\n  hr {\\n    box-sizing: content-box; /* 1 */\\n    height: 0; /* 1 */\\n    overflow: visible; /* 2 */\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  \\n  pre {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n  \\n  /* Text-level semantics\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the gray background on active links in IE 10.\\n   */\\n  \\n  a {\\n    background-color: transparent;\\n  }\\n  \\n  /**\\n   * 1. Remove the bottom border in Chrome 57-\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n   */\\n  \\n  abbr[title] {\\n    border-bottom: none; /* 1 */\\n    text-decoration: underline; /* 2 */\\n    text-decoration: underline dotted; /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\n   */\\n  \\n  b,\\n  strong {\\n    font-weight: bolder;\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  \\n  code,\\n  kbd,\\n  samp {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font size in all browsers.\\n   */\\n  \\n  small {\\n    font-size: 80%;\\n  }\\n  \\n  /**\\n   * Prevent `sub` and `sup` elements from affecting the line height in\\n   * all browsers.\\n   */\\n  \\n  sub,\\n  sup {\\n    font-size: 75%;\\n    line-height: 0;\\n    position: relative;\\n    vertical-align: baseline;\\n  }\\n  \\n  sub {\\n    bottom: -0.25em;\\n  }\\n  \\n  sup {\\n    top: -0.5em;\\n  }\\n  \\n  /* Embedded content\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the border on images inside links in IE 10.\\n   */\\n  \\n  img {\\n    border-style: none;\\n  }\\n  \\n  /* Forms\\n     ========================================================================== */\\n  \\n  /**\\n   * 1. Change the font styles in all browsers.\\n   * 2. Remove the margin in Firefox and Safari.\\n   */\\n  \\n  button,\\n  input,\\n  optgroup,\\n  select,\\n  textarea {\\n    font-family: inherit; /* 1 */\\n    font-size: 100%; /* 1 */\\n    line-height: 1.15; /* 1 */\\n    margin: 0; /* 2 */\\n  }\\n  \\n  /**\\n   * Show the overflow in IE.\\n   * 1. Show the overflow in Edge.\\n   */\\n  \\n  button,\\n  input { /* 1 */\\n    overflow: visible;\\n  }\\n  \\n  /**\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n   * 1. Remove the inheritance of text transform in Firefox.\\n   */\\n  \\n  button,\\n  select { /* 1 */\\n    text-transform: none;\\n  }\\n  \\n  /**\\n   * Correct the inability to style clickable types in iOS and Safari.\\n   */\\n  \\n  button,\\n  [type=\\\"button\\\"],\\n  [type=\\\"reset\\\"],\\n  [type=\\\"submit\\\"] {\\n    -webkit-appearance: button;\\n  }\\n  \\n  /**\\n   * Remove the inner border and padding in Firefox.\\n   */\\n  \\n  button::-moz-focus-inner,\\n  [type=\\\"button\\\"]::-moz-focus-inner,\\n  [type=\\\"reset\\\"]::-moz-focus-inner,\\n  [type=\\\"submit\\\"]::-moz-focus-inner {\\n    border-style: none;\\n    padding: 0;\\n  }\\n  \\n  /**\\n   * Restore the focus styles unset by the previous rule.\\n   */\\n  \\n  button:-moz-focusring,\\n  [type=\\\"button\\\"]:-moz-focusring,\\n  [type=\\\"reset\\\"]:-moz-focusring,\\n  [type=\\\"submit\\\"]:-moz-focusring {\\n    outline: 1px dotted ButtonText;\\n  }\\n  \\n  /**\\n   * Correct the padding in Firefox.\\n   */\\n  \\n  fieldset {\\n    padding: 0.35em 0.75em 0.625em;\\n  }\\n  \\n  /**\\n   * 1. Correct the text wrapping in Edge and IE.\\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\\n   * 3. Remove the padding so developers are not caught out when they zero out\\n   *    `fieldset` elements in all browsers.\\n   */\\n  \\n  legend {\\n    box-sizing: border-box; /* 1 */\\n    color: inherit; /* 2 */\\n    display: table; /* 1 */\\n    max-width: 100%; /* 1 */\\n    padding: 0; /* 3 */\\n    white-space: normal; /* 1 */\\n  }\\n  \\n  /**\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n   */\\n  \\n  progress {\\n    vertical-align: baseline;\\n  }\\n  \\n  /**\\n   * Remove the default vertical scrollbar in IE 10+.\\n   */\\n  \\n  textarea {\\n    overflow: auto;\\n  }\\n  \\n  /**\\n   * 1. Add the correct box sizing in IE 10.\\n   * 2. Remove the padding in IE 10.\\n   */\\n  \\n  [type=\\\"checkbox\\\"],\\n  [type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n  }\\n  \\n  /**\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\n   */\\n  \\n  [type=\\\"number\\\"]::-webkit-inner-spin-button,\\n  [type=\\\"number\\\"]::-webkit-outer-spin-button {\\n    height: auto;\\n  }\\n  \\n  /**\\n   * 1. Correct the odd appearance in Chrome and Safari.\\n   * 2. Correct the outline style in Safari.\\n   */\\n  \\n  [type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    outline-offset: -2px; /* 2 */\\n  }\\n  \\n  /**\\n   * Remove the inner padding in Chrome and Safari on macOS.\\n   */\\n  \\n  [type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n  }\\n  \\n  /**\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\n   * 2. Change font properties to `inherit` in Safari.\\n   */\\n  \\n  ::-webkit-file-upload-button {\\n    -webkit-appearance: button; /* 1 */\\n    font: inherit; /* 2 */\\n  }\\n  \\n  /* Interactive\\n     ========================================================================== */\\n  \\n  /*\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\n   */\\n  \\n  details {\\n    display: block;\\n  }\\n  \\n  /*\\n   * Add the correct display in all browsers.\\n   */\\n  \\n  summary {\\n    display: list-item;\\n  }\\n  \\n  /* Misc\\n     ========================================================================== */\\n  \\n  /**\\n   * Add the correct display in IE 10+.\\n   */\\n  \\n  template {\\n    display: none;\\n  }\\n  \\n  /**\\n   * Add the correct display in IE 10.\\n   */\\n  \\n  [hidden] {\\n    display: none;\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dotsweb/./src/css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./js/index.js */ \"./src/js/index.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./svg/logo.svg */ \"./src/svg/logo.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <script type=\\\"module\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"></script>\\n    <title>Dots</title>\\n  </head>\\n  <body>\\n    <header class=\\\"header\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"logo\\\" class=\\\"header__logo\\\" />\\n      <p class=\\\"header__lobby-name\\\"></p>\\n    </header>\\n    <div class=\\\"welcome-popup\\\">\\n      <h3 class=\\\"welcome-popup__title\\\">Вход в игру</h3>\\n      <form class=\\\"welcome-popup__form\\\">\\n        <div class=\\\"welcome-popup__nickname-section\\\">\\n          <label class=\\\"welcome-popup__nickname-label\\\">\\n            Твое имя:\\n            <input\\n              class=\\\"welcome-popup__nickname-field\\\"\\n              type=\\\"text\\\"\\n              name=\\\"nickname\\\"\\n              placeholder=\\\"имя\\\"\\n              autocomplete=\\\"off\\\"\\n              autofocus=\\\"autofocus\\\"\\n            />\\n          </label>\\n        </div>\\n        <ul class=\\\"color-picker\\\">\\n          <li class=\\\"color-picker__item\\\">\\n            <input\\n              type=\\\"radio\\\"\\n              name=\\\"color\\\"\\n              value=\\\"#ee2b2b\\\"\\n              class=\\\"color-picker__button color-picker__button_picked\\\"\\n              checked\\n            />\\n          </li>\\n          <li class=\\\"color-picker__item\\\">\\n            <input\\n              type=\\\"radio\\\"\\n              name=\\\"color\\\"\\n              value=\\\"#0bb870\\\"\\n              class=\\\"color-picker__button\\\"\\n            />\\n          </li>\\n          <li class=\\\"color-picker__item\\\">\\n            <input\\n              type=\\\"radio\\\"\\n              name=\\\"color\\\"\\n              value=\\\"#0db1f1\\\"\\n              class=\\\"color-picker__button\\\"\\n            />\\n          </li>\\n          <li class=\\\"color-picker__item\\\">\\n            <input\\n              type=\\\"radio\\\"\\n              name=\\\"color\\\"\\n              value=\\\"#e9a6da\\\"\\n              class=\\\"color-picker__button\\\"\\n            />\\n          </li>\\n          <li class=\\\"color-picker__item\\\">\\n            <input\\n              type=\\\"radio\\\"\\n              name=\\\"color\\\"\\n              value=\\\"#831583\\\"\\n              class=\\\"color-picker__button\\\"\\n            />\\n          </li>\\n        </ul>\\n        <input\\n          class=\\\"welcome-popup__submit\\\"\\n          type=\\\"submit\\\"\\n          name=\\\"submit\\\"\\n          value=\\\"Играть\\\"\\n        />\\n      </form>\\n    </div>\\n    <canvas class=\\\"canvas\\\" width=\\\"360\\\" height=\\\"360\\\">update browser</canvas>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://dotsweb/./src/index.html?");

/***/ }),

/***/ "./src/css/fonts.css":
/*!***************************!*\
  !*** ./src/css/fonts.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dotsweb/./src/css/fonts.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dotsweb/./src/css/index.css?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dotsweb/./src/css/normalize.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dotsweb/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/fonts/roboto-v27-latin_cyrillic-500.woff":
/*!******************************************************!*\
  !*** ./src/fonts/roboto-v27-latin_cyrillic-500.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"roboto-v27-latin_cyrillic-500.woff\";\n\n//# sourceURL=webpack://dotsweb/./src/fonts/roboto-v27-latin_cyrillic-500.woff?");

/***/ }),

/***/ "./src/fonts/roboto-v27-latin_cyrillic-500.woff2":
/*!*******************************************************!*\
  !*** ./src/fonts/roboto-v27-latin_cyrillic-500.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"roboto-v27-latin_cyrillic-500.woff2\";\n\n//# sourceURL=webpack://dotsweb/./src/fonts/roboto-v27-latin_cyrillic-500.woff2?");

/***/ }),

/***/ "./src/fonts/roboto-v27-latin_cyrillic-regular.woff":
/*!**********************************************************!*\
  !*** ./src/fonts/roboto-v27-latin_cyrillic-regular.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"roboto-v27-latin_cyrillic-regular.woff\";\n\n//# sourceURL=webpack://dotsweb/./src/fonts/roboto-v27-latin_cyrillic-regular.woff?");

/***/ }),

/***/ "./src/fonts/roboto-v27-latin_cyrillic-regular.woff2":
/*!***********************************************************!*\
  !*** ./src/fonts/roboto-v27-latin_cyrillic-regular.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"roboto-v27-latin_cyrillic-regular.woff2\";\n\n//# sourceURL=webpack://dotsweb/./src/fonts/roboto-v27-latin_cyrillic-regular.woff2?");

/***/ }),

/***/ "./src/img/mike.jpg":
/*!**************************!*\
  !*** ./src/img/mike.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"mike.jpg\";\n\n//# sourceURL=webpack://dotsweb/./src/img/mike.jpg?");

/***/ }),

/***/ "./src/svg/logo.svg":
/*!**************************!*\
  !*** ./src/svg/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"logo.svg\";\n\n//# sourceURL=webpack://dotsweb/./src/svg/logo.svg?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;