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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/fonts.css */ \"./src/css/fonts.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-form.js */ \"./src/js/welcome-form.js\");\n\n\n\n\n\n//# sourceURL=webpack://dotsweb/./src/js/index.js?");

/***/ }),

/***/ "./src/js/welcome-form.js":
/*!********************************!*\
  !*** ./src/js/welcome-form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localPlayerColor\": () => (/* binding */ localPlayerColor),\n/* harmony export */   \"localPlayerNickname\": () => (/* binding */ localPlayerNickname)\n/* harmony export */ });\n/* harmony import */ var _css_welcome_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/welcome-popup.css */ \"./src/css/welcome-popup.css\");\n/* harmony import */ var _canvas_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/canvas.js */ \"./src/js/canvas/canvas.js\");\n\n\nvar localPlayerColor;\nvar localPlayerNickname;\ndocument.addEventListener(\"DOMContentLoaded\", loadHandler);\n\nfunction loadHandler() {\n  setTimeout(function () {\n    document.body.append(createPopupElement());\n  }, 150);\n}\n\nfunction welcomeFormSubmit(event) {\n  alert(\"hi\");\n  event.preventDefault();\n}\n\nfunction createPopupElement() {\n  var div = document.createElement(\"div\");\n  div.className = \"welcome-popup welcome-popup_shown\"; //popupHeader\n\n  var popupHeader = document.createElement(\"h3\");\n  popupHeader.className = \"welcome-popup__title\";\n  popupHeader.innerText = \"Вход в игру\"; //form\n\n  var form = document.createElement(\"form\");\n  form.className = \"welcome-popup__form\"; //form: nickname section\n\n  var nickNameSection = document.createElement(\"div\");\n  nickNameSection.className = \"welcome-popup__nickname-section\";\n  var label = document.createElement(\"label\");\n  label.className = \"welcome-popup__nickname-label\";\n  label.innerHTML = \"\\u0422\\u0432\\u043E\\u0435 \\u0438\\u043C\\u044F:\\n  <input\\n    class=\\\"welcome-popup__nickname-field\\\"\\n    type=\\\"text\\\"\\n    name=\\\"nickname\\\"\\n    placeholder=\\\"\\u0413\\u0440\\u0435\\u0447\\u0430\\\"\\n    autocomplete=\\\"off\\\"\\n    autofocus=\\\"autofocus\\\"\\n  />\";\n  nickNameSection.append(label); //form:color picker\n\n  var colorPicker = document.createElement(\"ul\");\n  colorPicker.className = \"color-picker\";\n  var colors = [\"#ee2b2b\", \"#0bb870\", \"#0db1f1\", \"#e9a6da\", \"#831583\"];\n\n  for (var i = 0; i < 5; i++) {\n    var item = document.createElement(\"li\");\n    var itemInput = document.createElement(\"input\");\n    item.className = \"color-picker__item\";\n    itemInput.className = \"color-picker__button\";\n    itemInput.setAttribute(\"type\", \"radio\");\n    itemInput.setAttribute(\"name\", \"color\");\n    itemInput.setAttribute(\"value\", colors[i]);\n    item.append(itemInput);\n    itemInput.style.backgroundColor = colors[i];\n    colorPicker.append(item);\n  } //form:submit\n\n\n  var formSubmit = document.createElement(\"input\");\n  formSubmit.className = \"welcome-popup__submit\";\n  formSubmit.setAttribute(\"type\", \"submit\");\n  formSubmit.setAttribute(\"name\", \"submit\");\n  formSubmit.setAttribute(\"value\", \"Играть\"); //form fill\n\n  form.append(nickNameSection);\n  form.append(colorPicker);\n  form.append(formSubmit);\n  form.addEventListener(\"submit\", welcomeFormSubmit); //final\n\n  div.append(popupHeader);\n  div.append(form);\n  return div;\n}\n\n//# sourceURL=webpack://dotsweb/./src/js/welcome-form.js?");

/***/ }),

/***/ "./src/css/fonts.css":
/*!***************************!*\
  !*** ./src/css/fonts.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dotsweb/./src/css/fonts.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dotsweb/./src/css/index.css?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dotsweb/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/welcome-popup.css":
/*!***********************************!*\
  !*** ./src/css/welcome-popup.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dotsweb/./src/css/welcome-popup.css?");

/***/ }),

/***/ "./src/img/mike.jpg":
/*!**************************!*\
  !*** ./src/img/mike.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47a85ee166d23410ad2b.jpg\";\n\n//# sourceURL=webpack://dotsweb/./src/img/mike.jpg?");

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
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"styles": 0
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
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdotsweb"] = self["webpackChunkdotsweb"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;