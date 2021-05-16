/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lobby/js/canvas/canvas.js":
/*!***************************************!*\
  !*** ./src/lobby/js/canvas/canvas.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-canvas.js */ "./src/lobby/js/canvas/init-canvas.js");
/* harmony import */ var _stages_stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stages/stage.js */ "./src/lobby/js/canvas/stages/stage.js");
/* harmony import */ var _stages_game_loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stages/game-loading.js */ "./src/lobby/js/canvas/stages/game-loading.js");
/* harmony import */ var _stages_field_appear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stages/field-appear.js */ "./src/lobby/js/canvas/stages/field-appear.js");
/* harmony import */ var _stages_game_stage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stages/game-stage.js */ "./src/lobby/js/canvas/stages/game-stage.js");





function startGame() {
  lastTime = Date.now();
  _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
  requestAnimationFrame(gameLoop);
}
var lastTime = Date.now();

_stages_stage_js__WEBPACK_IMPORTED_MODULE_1__.Stage.prototype.onComplete = function () {
  currentStage = currentStage.getNext();
  currentStage.init();
  _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
}; //init game stages


var gameLoadStage = new _stages_game_loading_js__WEBPACK_IMPORTED_MODULE_2__.GameLoading();
var fieldAppearStage = new _stages_field_appear_js__WEBPACK_IMPORTED_MODULE_3__.FieldAppear();
var gameStage = new _stages_game_stage_js__WEBPACK_IMPORTED_MODULE_4__.GameStage(); //game stages dependences

var currentStage = gameLoadStage;
gameLoadStage.setNext(fieldAppearStage);
fieldAppearStage.setNext(gameStage);

function gameLoop() {
  var nowTime = Date.now();
  var deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height);
  currentStage.update(deltaTime);
  requestAnimationFrame(gameLoop);
}

/***/ }),

/***/ "./src/lobby/js/canvas/cursor.js":
/*!***************************************!*\
  !*** ./src/lobby/js/canvas/cursor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cursor": () => (/* binding */ cursor)
/* harmony export */ });
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ "./src/lobby/js/canvas/vector.js");
/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-canvas.js */ "./src/lobby/js/canvas/init-canvas.js");
/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome-form.js */ "./src/lobby/js/welcome-form.js");



var nowRadius = 0;
var animationProgress = 100;
var animationSpeed = 500; //percent per second
//calculate value between 0 and 1 dependent on animation Progress(0:100);

function getProgress(progress) {
  var prog = progress / 100;
  return prog;
}

function Cursor() {
  this.pos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector();
  this.target = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector();
  this.radius = 10;
  nowRadius = this.radius;
  this.speed = 10;

  this.draw = function () {
    _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();
    _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _welcome_form_js__WEBPACK_IMPORTED_MODULE_2__.player.local.color;
    _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.arc(cursor.pos.x, cursor.pos.y, nowRadius, 0, 2 * Math.PI);
    _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.fill();
  };

  this.click = function () {
    animationProgress = 0;
    nowRadius = 0;
  };

  this.update = function (deltaTime) {
    if (animationProgress < 100) {
      nowRadius = this.radius * getProgress(animationProgress);
      animationProgress += deltaTime * animationSpeed;
    } else nowRadius = this.radius;
  };
}

var cursor = new Cursor();

/***/ }),

/***/ "./src/lobby/js/canvas/dots.js":
/*!*************************************!*\
  !*** ./src/lobby/js/canvas/dots.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dots": () => (/* binding */ dots)
/* harmony export */ });
/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-canvas.js */ "./src/lobby/js/canvas/init-canvas.js");
/* harmony import */ var _pathFinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathFinder.js */ "./src/lobby/js/canvas/pathFinder.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var TWO_PI = 2 * Math.PI;

function Dot() {
  this.color = "";
  this.connected = false;
  this.inside = false;
}

function DotArr(meshSize) {
  var arr = [];

  for (var i = 0; i < meshSize.x; i++) {
    arr[i] = [];

    for (var j = 0; j < meshSize.y; j++) {
      arr[i][j] = new Dot();
    }
  }

  this.size = meshSize;

  this.getColor = function (pos) {
    return arr[pos.x][pos.y].color;
  };

  this.setColor = function (pos, color) {
    arr[pos.x][pos.y].color = color;
  };

  this.connect = function (pos) {
    arr[pos.x][pos.y].connected = true;
  };

  this.isConnected = function (pos) {
    return arr[pos.x][pos.y].connected;
  };

  this.markInside = function (pos) {
    arr[pos.x][pos.y].inside = true;
  };

  this.isInside = function (pos) {
    return arr[pos.x][pos.y].inside;
  };
}

var dotArr = {};

var _step = new WeakMap();

var _size = new WeakMap();

var _dotRadius = new WeakMap();

var _paths = new WeakMap();

var Dots = function Dots() {
  _classCallCheck(this, Dots);

  _step.set(this, {
    writable: true,
    value: 0
  });

  _size.set(this, {
    writable: true,
    value: {}
  });

  _dotRadius.set(this, {
    writable: true,
    value: 8
  });

  _paths.set(this, {
    writable: true,
    value: []
  });

  this.init = function (size, step) {
    _classPrivateFieldSet(this, _step, step);

    _classPrivateFieldSet(this, _size, size);

    dotArr = new DotArr(size);
    _pathFinder_js__WEBPACK_IMPORTED_MODULE_1__.pathFinder.assignArr(dotArr);
  };

  this.push = function (pos, color) {
    var _this = this;

    if (dotArr.getColor(pos) != "" || dotArr.isInside(pos)) return false;
    dotArr.setColor(pos, color);
    _pathFinder_js__WEBPACK_IMPORTED_MODULE_1__.pathFinder.findPath(pos).then(function (path) {
      if (path && path.length > 0) _classPrivateFieldGet(_this, _paths).push(path);
    });
    return true;
  };

  this.drawPaths = function () {
    for (var i = 0; i < _classPrivateFieldGet(this, _paths).length; i++) {
      var path = _classPrivateFieldGet(this, _paths)[i];

      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = dotArr.getColor(path[0]);
      if (i == _classPrivateFieldGet(this, _paths).length - 1) _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = "white";
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 3;

      var _iterator = _createForOfIteratorHelper(path),
          _step2;

      try {
        for (_iterator.s(); !(_step2 = _iterator.n()).done;) {
          var pos = _step2.value;
          _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(pos.x * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, pos.y * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();
    }
  };

  this.fillPaths = function () {
    //fill paths
    for (var i = _classPrivateFieldGet(this, _paths).length - 1; i >= 0; i--) {
      var path = _classPrivateFieldGet(this, _paths)[i];

      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = getFillColor(dotArr.getColor(path[0]));

      var _iterator2 = _createForOfIteratorHelper(path),
          _step3;

      try {
        for (_iterator2.s(); !(_step3 = _iterator2.n()).done;) {
          var pos = _step3.value;
          _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(pos.x * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, pos.y * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();
    }
  };

  this.drawDots = function () {
    for (var i = 0; i < _classPrivateFieldGet(this, _size).x; i++) {
      for (var j = 0; j < _classPrivateFieldGet(this, _size).y; j++) {
        var color = dotArr.getColor({
          x: i,
          y: j
        });
        if (color == "") continue;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = color;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(i * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, j * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, _classPrivateFieldGet(this, _dotRadius), 0, TWO_PI);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();
      }
    }
  };
};

function getFillColor(hex) {
  var opacity = 0.5;
  var rgb = hex.match(/[a-f\d]{2}/gi).map(function (elem) {
    return parseInt(elem, 16) * opacity;
  }).join(",");
  return "rgb(".concat(rgb, ")");
}

var dots = new Dots();

/***/ }),

/***/ "./src/lobby/js/canvas/field.js":
/*!**************************************!*\
  !*** ./src/lobby/js/canvas/field.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "field": () => (/* binding */ field)
/* harmony export */ });
/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-canvas.js */ "./src/lobby/js/canvas/init-canvas.js");
/* harmony import */ var _dots_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dots.js */ "./src/lobby/js/canvas/dots.js");
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../websocket.js */ "./src/lobby/js/websocket.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





function map(val, beg, end) {
  var ret = val > end ? end : val;
  ret = ret < beg ? beg : ret;
  return ret;
}

var _step = new WeakMap();

var Field = /*#__PURE__*/function () {
  function Field() {
    _classCallCheck(this, Field);

    _step.set(this, {
      writable: true,
      value: 0
    });

    //Размер поля
    this.size = {
      x: 15,
      y: 15
    };
    var path = new Path2D(); //Путь для рисования поля

    _classPrivateFieldSet(this, _step, _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width / this.size.x); //шаг сетки
    //рисуем сетку


    for (var i = 0; i < this.size.x; i++) {
      path.moveTo(i * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, 0);
      path.lineTo(i * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height);
    }

    for (var _i = 0; _i < this.size.y; _i++) {
      path.moveTo(0, _i * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2);
      path.lineTo(_init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _i * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2);
    }

    _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.init(this.size, _classPrivateFieldGet(this, _step)); //функция рисования поля

    this.drawField = function () {
      _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.fillPaths();
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = "black";
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 2;
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke(path);
      _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.drawPaths();
      _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.drawDots();
    };
  }

  _createClass(Field, [{
    key: "placeDot",
    value: function placeDot(pos, color) {
      var newPos = this.getMeshCoord(pos);

      if (_dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.push(newPos, color)) {
        _websocket_js__WEBPACK_IMPORTED_MODULE_2__.gameServer.place(newPos);
        return true;
      } else return false;
    } //use for place dot from remote server pos-mesh coord

  }, {
    key: "placeDotDirect",
    value: function placeDotDirect(pos, color) {
      return _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.push(pos, color);
    }
  }, {
    key: "getMeshCoord",
    value: function getMeshCoord(pos) {
      return {
        x: map(Math.floor(pos.x / _classPrivateFieldGet(this, _step)), 0, this.size.x - 1),
        y: map(Math.floor(pos.y / _classPrivateFieldGet(this, _step)), 0, this.size.y - 1)
      };
    }
  }, {
    key: "getTargetCoord",
    value: function getTargetCoord(pos) {
      var meshPos = {};
      meshPos.x = map(Math.floor(pos.x / _classPrivateFieldGet(this, _step)), 0, this.size.x - 1);
      meshPos.y = map(Math.floor(pos.y / _classPrivateFieldGet(this, _step)), 0, this.size.y - 1);
      return {
        x: meshPos.x * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2,
        y: meshPos.y * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2
      };
    }
  }]);

  return Field;
}();

var field = new Field();

/***/ }),

/***/ "./src/lobby/js/canvas/init-canvas.js":
/*!********************************************!*\
  !*** ./src/lobby/js/canvas/init-canvas.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "ctx": () => (/* binding */ ctx)
/* harmony export */ });
var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");
ctx.save();

/***/ }),

/***/ "./src/lobby/js/canvas/pathFinder.js":
/*!*******************************************!*\
  !*** ./src/lobby/js/canvas/pathFinder.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pathFinder": () => (/* binding */ pathFinder)
/* harmony export */ });
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ "./src/lobby/js/canvas/vector.js");
/* harmony import */ var _pathWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathWorker.js */ "./src/lobby/js/canvas/pathWorker.js");
/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome-form.js */ "./src/lobby/js/welcome-form.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var dotArr = {};
var startPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector();
var color = "";
var candidatePaths = [];
var connectedDots = []; //count of connected dots for each canditate path

function nextPos(dir, pos) {
  var newPos;

  switch (dir) {
    case 0:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x + 1, pos.y);
      break;

    case 1:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x + 1, pos.y + 1);
      break;

    case 2:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y + 1);
      break;

    case 3:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x - 1, pos.y + 1);
      break;

    case 4:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x - 1, pos.y);
      break;

    case 5:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x - 1, pos.y - 1);
      break;

    case 6:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y - 1);
      break;

    case 7:
      newPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x + 1, pos.y - 1);
      break;
  }

  if (newPos.x < 0 || newPos.x >= dotArr.size.x || newPos.y < 0 || newPos.y >= dotArr.size.y) return undefined;
  return newPos;
} //find condidates with minimal connected nodes


function filterCanditates() {
  var result = [];
  var min = connectedDots[0];

  for (var _i = 0, _connectedDots = connectedDots; _i < _connectedDots.length; _i++) {
    var val = _connectedDots[_i];
    if (val < min) min = val;
  }

  for (var i = 0; i < connectedDots.length; i++) {
    if (connectedDots[i] == min) result.push(candidatePaths[i]);
  }

  return result;
}

var findPath = function findPath(pos) {
  return new Promise(function (resolve, reject) {
    startPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y);
    color = dotArr.getColor(pos);
    candidatePaths = [];
    connectedDots = [];
    var result = [];
    recurcivePath(startPos, [], startPos, 0);

    if (candidatePaths.length > 0) {
      //candidatePaths = filterCanditates();
      var pathIndex = _pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.maxAreaIndex(candidatePaths);

      if (pathIndex >= 0) {
        result = _toConsumableArray(candidatePaths[pathIndex]);
        markDotsAsConnected(result);
        result = _pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.simplifyPath(result);
        markDotsInsidePath(result);
      }

      console.log(result.path.length);
      resolve(result.path);
    } else resolve(result);
  });
};
/*В этом алгоритме присутствует проверка всех эллементов во избеании замыкания. Это нужно убрать*/


function recurcivePath(pos, path, prevPos, connectedDotsCount) {
  var next;

  if (path.length != 0 && pos.x == startPos.x && pos.y == startPos.y) {
    candidatePaths.push(_toConsumableArray(path));
    connectedDots.push(connectedDotsCount);
    return;
  }

  path.push(pos);

  for (var i = 0; i < 8; i++) {
    next = nextPos(i, pos);
    if (!next || next.x == prevPos.x && next.y == prevPos.y) continue;

    if (dotArr.getColor(next) == color && !dotArr.isInside(next) && !_pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.findIntersects(path, next)) {
      recurcivePath(next, _toConsumableArray(path), pos, dotArr.isConnected(pos) ? connectedDotsCount + 1 : connectedDotsCount);
    }
  }
}

function markDotsAsConnected(path) {
  var _iterator = _createForOfIteratorHelper(path),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pos = _step.value;
      dotArr.connect(pos);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} //IMPORTANT in this function, path is object with boundings and optimized path fields


function markDotsInsidePath(polygon) {
  var pos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector();
  var color = dotArr.getColor(polygon.path[0]);
  var localPlayer = color == _welcome_form_js__WEBPACK_IMPORTED_MODULE_2__.player.local.color;

  for (var i = polygon.bounding.min.x; i < polygon.bounding.max.x; i++) {
    for (var j = polygon.bounding.min.y; j < polygon.bounding.max.y; j++) {
      pos.x = i;
      pos.y = j;
      var nowColor = dotArr.getColor(pos);
      if (dotArr.isConnected(pos) && nowColor == color) continue;

      if (_pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.isInsidePath(polygon.path, pos)) {
        dotArr.setColor(pos, "black");

        if (nowColor != color && nowColor != "" && !dotArr.isInside(pos)) {
          localPlayer ? _welcome_form_js__WEBPACK_IMPORTED_MODULE_2__.player.local.score += 1 : _welcome_form_js__WEBPACK_IMPORTED_MODULE_2__.player.remote.score += 1;
        }

        dotArr.markInside(pos);
        dotArr.setColor(pos, "white");
      }
    }
  }
}

var PathFinder = function PathFinder() {
  this.assignArr = function (arr) {
    dotArr = arr;
  };

  this.findPath = findPath;
};

var pathFinder = new PathFinder();

/***/ }),

/***/ "./src/lobby/js/canvas/pathWorker.js":
/*!*******************************************!*\
  !*** ./src/lobby/js/canvas/pathWorker.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findIntersects": () => (/* binding */ findIntersects),
/* harmony export */   "maxAreaIndex": () => (/* binding */ maxAreaIndex),
/* harmony export */   "simplifyPath": () => (/* binding */ simplifyPath),
/* harmony export */   "isInsidePath": () => (/* binding */ isInsidePath)
/* harmony export */ });
function findIntersects(path, pos) {
  for (var i = path.length - 1; i >= 1; --i) {
    if (pos.x == path[i].x && pos.y == path[i].y) {
      return true;
    }
  }

  return false;
}
function maxAreaIndex(paths) {
  var nowArea = 0;
  var maxNodes = 0;
  var insideNodes = 0;
  var indexes = [];
  var areas = [];

  for (var i = 0; i < paths.length; i++) {
    nowArea = findArea(paths[i]);
    if (nowArea <= 0) continue;
    insideNodes = nowArea - paths[i].length / 2 + 1; //формула пика

    if (insideNodes <= 0) continue;

    if (insideNodes > maxNodes) {
      maxNodes = insideNodes;
      indexes = [i];
      areas = [nowArea];
    } else if (insideNodes == maxNodes) {
      indexes.push(i);
      areas.push(nowArea);
    }
  }

  if (maxNodes == 0) return -1;
  if (indexes.length < 1) return -1;
  var minArea = areas[0];
  var resIndex = indexes[0];

  for (var _i = 1; _i < indexes.length; _i++) {
    if (areas[_i] < minArea) {
      resIndex = indexes[_i];
      minArea = areas[_i];
    }
  }

  return resIndex;
}

function findArea(path) {
  //формула Гаусса
  var area = 0;

  for (var i = 0; i < path.length; i++) {
    area += path[i].x * path[(i + 1) % path.length].y / 2;
    area -= path[(i + 1) % path.length].x * path[i].y / 2;
  }

  return area;
} //todo: return bounding box


function simplifyPath(path) {
  var result = [];
  var direction = 4; //can be 5 2 1 0 3 6 7 8, 4 no direction

  var nowDirection = 4;
  var bounding = {
    min: {
      x: path[0].x,
      y: path[0].y
    },
    max: {
      x: path[0].x,
      y: path[0].y
    }
  };

  for (var i = 0; i < path.length - 1; i++) {
    var next = path[i + 1];
    var pos = path[i];
    if (pos.x < bounding.min.x) bounding.min.x = pos.x;
    if (pos.y < bounding.min.y) bounding.min.y = pos.y;
    if (pos.x > bounding.max.x) bounding.max.x = pos.x;
    if (pos.y > bounding.max.y) bounding.max.y = pos.y;
    nowDirection = next.x - pos.x + (next.y - pos.y) * 3 + 4;

    if (nowDirection != direction) {
      direction = nowDirection;
      result.push(pos);
    }
  }

  result.push(path[path.length - 1]);
  return {
    path: result,
    bounding: bounding,
    source: path
  };
}
function isInsidePath(path, pos) {
  var horLineY = pos.y + 0.5;
  var intersects = 0;
  var now;
  var next;

  for (var i = 0; i < path.length; i++) {
    if (i == path.length - 1) {
      now = path[i];
      next = path[0];
    } else {
      now = path[i];
      next = path[i + 1];
    }

    var interX = (horLineY - now.y) * (next.x - now.x) / (next.y - now.y) + now.x;
    if (interX < pos.x) continue;
    var deltaA = horLineY - now.y;
    var deltaB = horLineY - next.y;
    if (deltaA == 0 || deltaB == 0) intersects++;
    if (Math.sign(deltaA) != Math.sign(deltaB)) intersects++;
  }

  return intersects % 2 == 1 ? true : false;
}

/***/ }),

/***/ "./src/lobby/js/canvas/stages/field-appear.js":
/*!****************************************************!*\
  !*** ./src/lobby/js/canvas/stages/field-appear.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldAppear": () => (/* binding */ FieldAppear)
/* harmony export */ });
/* harmony import */ var _stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage.js */ "./src/lobby/js/canvas/stages/stage.js");
/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../init-canvas.js */ "./src/lobby/js/canvas/init-canvas.js");
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../field.js */ "./src/lobby/js/canvas/field.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FieldAppear = /*#__PURE__*/function (_Stage) {
  _inherits(FieldAppear, _Stage);

  var _super = _createSuper(FieldAppear);

  function FieldAppear() {
    var _this;

    _classCallCheck(this, FieldAppear);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "step", _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.canvas.width / _field_js__WEBPACK_IMPORTED_MODULE_2__.field.size.x);

    _defineProperty(_assertThisInitialized(_this), "offset", 0);

    _defineProperty(_assertThisInitialized(_this), "speed", _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.canvas.height * 4);

    return _this;
  }

  _createClass(FieldAppear, [{
    key: "update",
    value: function update(deltaTime) {
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.strokeStyle = "black";
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = 2;
      this.offset += deltaTime * this.speed;
      if (this.offset >= _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.canvas.height) this.onComplete();

      for (var i = 0; i < _field_js__WEBPACK_IMPORTED_MODULE_2__.field.size.x; i++) {
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.moveTo(i * this.step + this.step / 2, 0);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(i * this.step + this.step / 2, this.offset);
      }

      for (var _i = 0; _i < _field_js__WEBPACK_IMPORTED_MODULE_2__.field.size.y; _i++) {
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.moveTo(0, _i * this.step + this.step / 2);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(this.offset, _i * this.step + this.step / 2);
      }

      _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();
    }
  }]);

  return FieldAppear;
}(_stage_js__WEBPACK_IMPORTED_MODULE_0__.Stage);

/***/ }),

/***/ "./src/lobby/js/canvas/stages/game-loading.js":
/*!****************************************************!*\
  !*** ./src/lobby/js/canvas/stages/game-loading.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameLoading": () => (/* binding */ GameLoading)
/* harmony export */ });
/* harmony import */ var _stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage.js */ "./src/lobby/js/canvas/stages/stage.js");
/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../welcome-form.js */ "./src/lobby/js/welcome-form.js");
/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../init-canvas.js */ "./src/lobby/js/canvas/init-canvas.js");
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../websocket.js */ "./src/lobby/js/websocket.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }





var loaded = false;
_websocket_js__WEBPACK_IMPORTED_MODULE_3__.gameServer.onStart(function (socket) {
  socket.send("player ".concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.local.color, " ").concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.local.nickname));
  loaded = true;
});
_websocket_js__WEBPACK_IMPORTED_MODULE_3__.gameServer.onPlayerRequest(function (color, nick) {
  _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.remote.color = color;
  _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.remote.nickname = nick;
});

var _screenWidth = new WeakMap();

var _screenHeight = new WeakMap();

var _radius = new WeakMap();

var _totalShapeRadius = new WeakMap();

var _circleCount = new WeakMap();

var _speed = new WeakMap();

var _offset = new WeakMap();

var _nowAlpha = new WeakMap();

var _getAngle = new WeakSet();

var GameLoading = /*#__PURE__*/function (_Stage) {
  _inherits(GameLoading, _Stage);

  var _super = _createSuper(GameLoading);

  function GameLoading() {
    var _this;

    _classCallCheck(this, GameLoading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _getAngle.add(_assertThisInitialized(_this));

    _screenWidth.set(_assertThisInitialized(_this), {
      writable: true,
      value: _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.canvas.width
    });

    _screenHeight.set(_assertThisInitialized(_this), {
      writable: true,
      value: _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.canvas.height
    });

    _radius.set(_assertThisInitialized(_this), {
      writable: true,
      value: 7
    });

    _totalShapeRadius.set(_assertThisInitialized(_this), {
      writable: true,
      value: 70
    });

    _circleCount.set(_assertThisInitialized(_this), {
      writable: true,
      value: 5
    });

    _speed.set(_assertThisInitialized(_this), {
      writable: true,
      value: 1
    });

    _offset.set(_assertThisInitialized(_this), {
      writable: true,
      value: 0
    });

    _nowAlpha.set(_assertThisInitialized(_this), {
      writable: true,
      value: 1
    });

    return _this;
  }

  _createClass(GameLoading, [{
    key: "update",
    value: function update(deltaTime) {
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.local.color;

      for (var i = 0; i < _classPrivateFieldGet(this, _circleCount); ++i) {
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.beginPath();

        var angle = _classPrivateMethodGet(this, _getAngle, _getAngle2).call(this, _classPrivateFieldGet(this, _offset) + i * 0.1);

        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.arc(Math.sin(angle) * _classPrivateFieldGet(this, _totalShapeRadius) + _classPrivateFieldGet(this, _screenWidth) / 2, Math.cos(angle) * _classPrivateFieldGet(this, _totalShapeRadius) + _classPrivateFieldGet(this, _screenHeight) / 2, _classPrivateFieldGet(this, _radius), 0, Math.PI * 2);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.fill();
      }

      _classPrivateFieldSet(this, _offset, _classPrivateFieldGet(this, _offset) + _classPrivateFieldGet(this, _speed) * deltaTime);

      if (loaded) {
        if (_classPrivateFieldGet(this, _nowAlpha) > 0) _classPrivateFieldSet(this, _nowAlpha, _classPrivateFieldGet(this, _nowAlpha) - _classPrivateFieldGet(this, _speed) * deltaTime);
        _classPrivateFieldGet(this, _nowAlpha) < 0 ? _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.globalAlpha = 0 : _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.globalAlpha = _classPrivateFieldGet(this, _nowAlpha);

        if (_classPrivateFieldGet(this, _nowAlpha) <= 0) {
          this.onComplete();
        }
      }
    }
  }]);

  return GameLoading;
}(_stage_js__WEBPACK_IMPORTED_MODULE_0__.Stage);

function _getAngle2(phase) {
  return 4 * (Math.atan(phase % 2 - 1) + Math.PI * 4);
}

/***/ }),

/***/ "./src/lobby/js/canvas/stages/game-stage.js":
/*!**************************************************!*\
  !*** ./src/lobby/js/canvas/stages/game-stage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStage": () => (/* binding */ GameStage)
/* harmony export */ });
/* harmony import */ var _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../init-canvas.js */ "./src/lobby/js/canvas/init-canvas.js");
/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../welcome-form.js */ "./src/lobby/js/welcome-form.js");
/* harmony import */ var _stage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage.js */ "./src/lobby/js/canvas/stages/stage.js");
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field.js */ "./src/lobby/js/canvas/field.js");
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vector.js */ "./src/lobby/js/canvas/vector.js");
/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cursor.js */ "./src/lobby/js/canvas/cursor.js");
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../websocket.js */ "./src/lobby/js/websocket.js");
/* harmony import */ var _game_ui_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../game-ui.js */ "./src/lobby/js/game-ui.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var mousePos = new _vector_js__WEBPACK_IMPORTED_MODULE_4__.Vector();
var localTurn = false; //ходит ли сейчас локальный игрок

var DEV_MODE = false;
_websocket_js__WEBPACK_IMPORTED_MODULE_6__.gameServer.onPlace(function (pos) {
  _field_js__WEBPACK_IMPORTED_MODULE_3__.field.placeDotDirect(pos, _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.remote.color);
  localTurn = true;
  _game_ui_js__WEBPACK_IMPORTED_MODULE_7__.setTurn(localTurn);
});
_websocket_js__WEBPACK_IMPORTED_MODULE_6__.gameServer.onTurn(function (turn) {
  if (turn == "local") {
    localTurn = true;
  } else {
    localTurn = false;
  }
});

function getMouseHandler() {
  var rect = _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.getBoundingClientRect();
  var scaleX = _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width / rect.width;
  var scaleY = _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height / rect.height;
  return function (event) {
    mousePos.x = (event.clientX - rect.left) * scaleX;
    mousePos.y = (event.clientY - rect.top) * scaleY;
  };
}

var GameStage = /*#__PURE__*/function (_Stage) {
  _inherits(GameStage, _Stage);

  var _super = _createSuper(GameStage);

  function GameStage() {
    _classCallCheck(this, GameStage);

    return _super.apply(this, arguments);
  }

  _createClass(GameStage, [{
    key: "init",
    value: function init() {
      _game_ui_js__WEBPACK_IMPORTED_MODULE_7__.init(localTurn);
      document.addEventListener("mousemove", getMouseHandler());
      document.addEventListener("click", function () {
        if (localTurn || DEV_MODE) {
          _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.click();

          if (_field_js__WEBPACK_IMPORTED_MODULE_3__.field.placeDot(mousePos, _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.local.color)) {
            localTurn = DEV_MODE ? !localTurn : false;
            _game_ui_js__WEBPACK_IMPORTED_MODULE_7__.setTurn(localTurn);
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      _field_js__WEBPACK_IMPORTED_MODULE_3__.field.drawField();
      _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.target = _field_js__WEBPACK_IMPORTED_MODULE_3__.field.getTargetCoord(mousePos);
      _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.pos.x += (_cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.target.x - _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.pos.x) * deltaTime * _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.speed;
      _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.pos.y += (_cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.target.y - _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.pos.y) * deltaTime * _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.speed;
      _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.update(deltaTime);
      _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.draw();
    }
  }]);

  return GameStage;
}(_stage_js__WEBPACK_IMPORTED_MODULE_2__.Stage);

/***/ }),

/***/ "./src/lobby/js/canvas/stages/stage.js":
/*!*********************************************!*\
  !*** ./src/lobby/js/canvas/stages/stage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stage": () => (/* binding */ Stage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _next = new WeakMap();

var Stage = /*#__PURE__*/function () {
  function Stage() {
    _classCallCheck(this, Stage);

    _next.set(this, {
      writable: true,
      value: this
    });
  }

  _createClass(Stage, [{
    key: "getNext",
    value: function getNext() {
      return _classPrivateFieldGet(this, _next);
    }
  }, {
    key: "setNext",
    value: function setNext(stage) {
      _classPrivateFieldSet(this, _next, stage);
    }
  }, {
    key: "onComplete",
    value: function onComplete() {
      alert("complete");
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "update",
    value: function update(deltaTime) {}
  }]);

  return Stage;
}();

/***/ }),

/***/ "./src/lobby/js/canvas/vector.js":
/*!***************************************!*\
  !*** ./src/lobby/js/canvas/vector.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector": () => (/* binding */ Vector)
/* harmony export */ });
function Vector(x, y) {
  if (typeof x != "number") {
    this.x = 0;
    this.y = 0;
  } else if (typeof y != "number") {
    this.x = x;
    this.y = x;
  } else {
    this.x = x;
    this.y = y;
  }
}

/***/ }),

/***/ "./src/lobby/js/game-ui.js":
/*!*********************************!*\
  !*** ./src/lobby/js/game-ui.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTurn": () => (/* binding */ setTurn),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-form.js */ "./src/lobby/js/welcome-form.js");
/* harmony import */ var _css_game_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/game-ui.css */ "./src/lobby/css/game-ui.css");


var nowTurn = document.createElement("div");
nowTurn.classList.add("now-turn");
var nowTurnText = document.createElement("p");
nowTurnText.classList.add("now-turn__text");
nowTurnText.innerText = "Сейчас ходит:";
nowTurn.append(nowTurnText);
var turnContainer = document.createElement("div");
turnContainer.classList.add("turn-container");
var localPlayerElement = document.createElement("p");
localPlayerElement.classList.add("turn-container__player");
var remotePlayerElement = document.createElement("p");
remotePlayerElement.classList.add("turn-container__player");
nowTurn.append(turnContainer); //players score

var playerScoreWrapper = document.createElement("div");
playerScoreWrapper.classList.add("player-score-wrapper");
var localPlayerScoreElement = document.createElement("p");
localPlayerScoreElement.classList.add("player-score");
var remotePlayerScoreElement = document.createElement("p");
remotePlayerScoreElement.classList.add("player-score");
playerScoreWrapper.append(localPlayerScoreElement, remotePlayerScoreElement);
function setTurn(localTurn) {
  if (localTurn) {
    remotePlayerElement.classList.add("turn-container__player_hidden");
    turnContainer.append(localPlayerElement);
    setTimeout(function () {
      remotePlayerElement.remove();
      remotePlayerElement.classList.remove("turn-container__player_hidden");
    }, 200);
  } else {
    localPlayerElement.classList.add("turn-container__player_hidden");
    turnContainer.append(remotePlayerElement);
    setTimeout(function () {
      localPlayerElement.remove();
      localPlayerElement.classList.remove("turn-container__player_hidden");
    }, 200);
  }

  updateScore();
}
var lastScore = {
  local: 0,
  remote: 0
};

function updateScore() {
  if (_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.score != lastScore.local) {
    lastScore.local = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.score;
    localPlayerScoreElement.innerText = "".concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.nickname, ": ").concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.score);
  }

  if (_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.score != lastScore.remote) {
    lastScore.remote = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.score;
    remotePlayerScoreElement.innerText = "".concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.nickname, ": ").concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.score);
  }
}

function init(localTurn) {
  document.querySelector(".header__logo").after(nowTurn);
  localPlayerElement.innerText = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.nickname;
  localPlayerElement.style.color = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.color;
  remotePlayerElement.innerText = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.nickname;
  remotePlayerElement.style.color = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.color;
  turnContainer.append(localTurn ? localPlayerElement : remotePlayerElement); //players score

  localPlayerScoreElement.innerText = "".concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.nickname, ": 0");
  remotePlayerScoreElement.innerText = "".concat(_welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.nickname, ": 0");
  localPlayerScoreElement.style.borderColor = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.local.color;
  remotePlayerScoreElement.style.borderColor = _welcome_form_js__WEBPACK_IMPORTED_MODULE_0__.player.remote.color;
  document.body.append(playerScoreWrapper);
}

/***/ }),

/***/ "./src/lobby/js/websocket.js":
/*!***********************************!*\
  !*** ./src/lobby/js/websocket.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameServer": () => (/* binding */ gameServer)
/* harmony export */ });
var socket = new WebSocket("ws://" + window.location.host + window.location.pathname);

var onstart = function onstart(socket) {};

var playerRequest = function playerRequest(color, nick) {};

var place = function place(pos) {};

var changeTurn = function changeTurn(turn) {};

var gameServer = {
  onStart: function onStart(callback) {
    onstart = callback;
  },
  onPlayerRequest: function onPlayerRequest(callback) {
    playerRequest = callback;
  },
  join: function join() {
    socket.send("join");
  },
  place: function place(pos) {
    socket.send("place ".concat(pos.x, " ").concat(pos.y));
  },
  onPlace: function onPlace(callback) {
    place = callback;
  },
  onTurn: function onTurn(callback) {
    changeTurn = callback;
  }
};

socket.onopen = function (e) {
  socket.send("con");
};

socket.onmessage = function (event) {
  var message = event.data;
  var command = message.split(" ");

  if (command[0] == "start") {
    onstart(socket);
  }

  if (command[0] == "player") {
    playerRequest(command[1], command[2]);
  }

  if (command[0] == "place") {
    place({
      x: Number(command[1]),
      y: Number(command[2])
    });
  }

  if (command[0] == "turn") {
    changeTurn(command[1]);
  }
};

/***/ }),

/***/ "./src/lobby/js/welcome-form.js":
/*!**************************************!*\
  !*** ./src/lobby/js/welcome-form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _css_welcome_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/welcome-popup.css */ "./src/lobby/css/welcome-popup.css");
/* harmony import */ var _canvas_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/canvas.js */ "./src/lobby/js/canvas/canvas.js");
/* harmony import */ var _websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket */ "./src/lobby/js/websocket.js");



var RAND_NICKNAMES = ["Щас_бы_на_дачу", "SuperDominator", "Placeholder", "Плейсхолдер", "Что-то_грустно", "За_шо", "Твое_имя", "Petr", "Паравозик_томас", "Alukard", "Милый_кисик", "Доброжелатель", "Абонент"];

function getRandNick() {
  return RAND_NICKNAMES[Math.floor(Math.random() * RAND_NICKNAMES.length)];
} //scrore считается в pathFinder


var player = {
  local: {
    score: 0
  },
  remote: {
    color: "pink",
    nickname: getRandNick(),
    score: 0
  }
};
var popupForm = createFormElement();
var popup = createPopupElement(popupForm); //document.addEventListener("DOMContentLoaded", loadHandler);

window.onload = loadHandler;

function loadHandler() {
  document.body.append(popup);
  requestAnimationFrame(function () {
    popup.classList.toggle("welcome-popup_shown");
  });
}

function welcomeFormSubmit(event) {
  if (popup.classList.contains("welcome-popup_shown")) {
    player.local.color = popupForm.color.value;
    player.local.nickname = popupForm.nickname.value;
    if (player.local.nickname == "") player.local.nickname = popupForm.nickname.placeholder;
    popup.classList.remove("welcome-popup_shown");
    _websocket__WEBPACK_IMPORTED_MODULE_2__.gameServer.join();
    (0,_canvas_canvas_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();
    setTimeout(function () {
      return popup.remove();
    }, 150);
  }

  event.preventDefault();
}

function createFormElement() {
  //form
  var form = document.createElement("form");
  form.className = "welcome-popup__form"; //form: nickname section

  var nickNameSection = document.createElement("div");
  nickNameSection.className = "welcome-popup__nickname-section";
  var label = document.createElement("label");
  label.className = "welcome-popup__nickname-label";
  label.innerHTML = "\u0422\u0432\u043E\u0435 \u0438\u043C\u044F:\n  <input\n    class=\"welcome-popup__nickname-field\"\n    type=\"text\"\n    name=\"nickname\"\n    placeholder=\"".concat(getRandNick(), "\"\n    autocomplete=\"off\"\n    autofocus=\"autofocus\"\n  />");
  nickNameSection.append(label); //form:color picker

  var colorPicker = document.createElement("ul");
  colorPicker.className = "color-picker";
  var colors = ["#ee2b2b", "#0bb870", "#0db1f1", "#e9a6da", "#831583"];

  for (var i = 0; i < 5; i++) {
    var item = document.createElement("li");
    var itemInput = document.createElement("input");
    item.className = "color-picker__item";
    itemInput.className = "color-picker__button";
    itemInput.setAttribute("type", "radio");
    itemInput.setAttribute("name", "color");
    itemInput.setAttribute("value", colors[i]);
    if (i == 0) itemInput.setAttribute("checked", "");
    item.append(itemInput);
    itemInput.style.backgroundColor = colors[i];
    colorPicker.append(item);
  } //form:submit


  var formSubmit = document.createElement("input");
  formSubmit.className = "welcome-popup__submit";
  formSubmit.setAttribute("type", "submit");
  formSubmit.setAttribute("name", "submit");
  formSubmit.setAttribute("value", "Играть"); //form fill

  form.append(nickNameSection);
  form.append(colorPicker);
  form.append(formSubmit);
  form.addEventListener("submit", welcomeFormSubmit);
  return form;
}

function createPopupElement(form) {
  var div = document.createElement("div");
  div.className = "welcome-popup"; //popupHeader

  var popupHeader = document.createElement("h3");
  popupHeader.className = "welcome-popup__title";
  popupHeader.innerText = "Вход в игру"; //final

  div.append(popupHeader);
  div.append(form);
  return div;
}

/***/ }),

/***/ "./src/lobby/css/fonts.css":
/*!*********************************!*\
  !*** ./src/lobby/css/fonts.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lobby/css/game-ui.css":
/*!***********************************!*\
  !*** ./src/lobby/css/game-ui.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lobby/css/index.css":
/*!*********************************!*\
  !*** ./src/lobby/css/index.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lobby/css/normalize.css":
/*!*************************************!*\
  !*** ./src/lobby/css/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lobby/css/welcome-popup.css":
/*!*****************************************!*\
  !*** ./src/lobby/css/welcome-popup.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/lobby/js/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/normalize.css */ "./src/lobby/css/normalize.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/fonts.css */ "./src/lobby/css/fonts.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/lobby/css/index.css");
/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-form.js */ "./src/lobby/js/welcome-form.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvY3Vyc29yLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL2RvdHMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvaW5pdC1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvcGF0aEZpbmRlci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9wYXRoV29ya2VyLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3N0YWdlcy9maWVsZC1hcHBlYXIuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL2dhbWUtbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9zdGFnZXMvZ2FtZS1zdGFnZS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9zdGFnZXMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvdmVjdG9yLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvZ2FtZS11aS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlbGNvbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3MvZ2FtZS11aS5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3Mvd2VsY29tZS1wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG90c3dlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvaW5kZXguanMiXSwibmFtZXMiOlsic3RhcnRHYW1lIiwibGFzdFRpbWUiLCJEYXRlIiwibm93IiwiY3R4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJTdGFnZSIsImN1cnJlbnRTdGFnZSIsImdldE5leHQiLCJpbml0IiwiZ2FtZUxvYWRTdGFnZSIsIkdhbWVMb2FkaW5nIiwiZmllbGRBcHBlYXJTdGFnZSIsIkZpZWxkQXBwZWFyIiwiZ2FtZVN0YWdlIiwiR2FtZVN0YWdlIiwic2V0TmV4dCIsIm5vd1RpbWUiLCJkZWx0YVRpbWUiLCJjYW52YXMiLCJ1cGRhdGUiLCJub3dSYWRpdXMiLCJhbmltYXRpb25Qcm9ncmVzcyIsImFuaW1hdGlvblNwZWVkIiwiZ2V0UHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInByb2ciLCJDdXJzb3IiLCJwb3MiLCJWZWN0b3IiLCJ0YXJnZXQiLCJyYWRpdXMiLCJzcGVlZCIsImRyYXciLCJwbGF5ZXIiLCJjdXJzb3IiLCJ4IiwieSIsIk1hdGgiLCJQSSIsImNsaWNrIiwiVFdPX1BJIiwiRG90IiwiY29sb3IiLCJjb25uZWN0ZWQiLCJpbnNpZGUiLCJEb3RBcnIiLCJtZXNoU2l6ZSIsImFyciIsImkiLCJqIiwic2l6ZSIsImdldENvbG9yIiwic2V0Q29sb3IiLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJtYXJrSW5zaWRlIiwiaXNJbnNpZGUiLCJkb3RBcnIiLCJEb3RzIiwic3RlcCIsInBhdGhGaW5kZXIiLCJwdXNoIiwidGhlbiIsInBhdGgiLCJsZW5ndGgiLCJkcmF3UGF0aHMiLCJmaWxsUGF0aHMiLCJnZXRGaWxsQ29sb3IiLCJkcmF3RG90cyIsImhleCIsIm9wYWNpdHkiLCJyZ2IiLCJtYXRjaCIsIm1hcCIsImVsZW0iLCJwYXJzZUludCIsImpvaW4iLCJkb3RzIiwidmFsIiwiYmVnIiwiZW5kIiwicmV0IiwiRmllbGQiLCJQYXRoMkQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3RmllbGQiLCJuZXdQb3MiLCJnZXRNZXNoQ29vcmQiLCJnYW1lU2VydmVyIiwiZmxvb3IiLCJtZXNoUG9zIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0Iiwic2F2ZSIsInN0YXJ0UG9zIiwiY2FuZGlkYXRlUGF0aHMiLCJjb25uZWN0ZWREb3RzIiwibmV4dFBvcyIsImRpciIsInVuZGVmaW5lZCIsImZpbHRlckNhbmRpdGF0ZXMiLCJyZXN1bHQiLCJtaW4iLCJmaW5kUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjdXJjaXZlUGF0aCIsInBhdGhJbmRleCIsInBhdGhXb3JrZXIiLCJtYXJrRG90c0FzQ29ubmVjdGVkIiwibWFya0RvdHNJbnNpZGVQYXRoIiwiY29uc29sZSIsImxvZyIsInByZXZQb3MiLCJjb25uZWN0ZWREb3RzQ291bnQiLCJuZXh0IiwicG9seWdvbiIsImxvY2FsUGxheWVyIiwiYm91bmRpbmciLCJtYXgiLCJub3dDb2xvciIsIlBhdGhGaW5kZXIiLCJhc3NpZ25BcnIiLCJmaW5kSW50ZXJzZWN0cyIsIm1heEFyZWFJbmRleCIsInBhdGhzIiwibm93QXJlYSIsIm1heE5vZGVzIiwiaW5zaWRlTm9kZXMiLCJpbmRleGVzIiwiYXJlYXMiLCJmaW5kQXJlYSIsIm1pbkFyZWEiLCJyZXNJbmRleCIsImFyZWEiLCJzaW1wbGlmeVBhdGgiLCJkaXJlY3Rpb24iLCJub3dEaXJlY3Rpb24iLCJzb3VyY2UiLCJpc0luc2lkZVBhdGgiLCJob3JMaW5lWSIsImludGVyc2VjdHMiLCJpbnRlclgiLCJkZWx0YUEiLCJkZWx0YUIiLCJzaWduIiwib2Zmc2V0Iiwib25Db21wbGV0ZSIsImxvYWRlZCIsInNvY2tldCIsInNlbmQiLCJuaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJhbmdsZSIsInNpbiIsImNvcyIsInBoYXNlIiwiYXRhbiIsIm1vdXNlUG9zIiwibG9jYWxUdXJuIiwiREVWX01PREUiLCJnYW1lVWkiLCJ0dXJuIiwiZ2V0TW91c2VIYW5kbGVyIiwicmVjdCIsInNjYWxlWCIsInNjYWxlWSIsImV2ZW50IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YWdlIiwiYWxlcnQiLCJub3dUdXJuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5vd1R1cm5UZXh0IiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwidHVybkNvbnRhaW5lciIsImxvY2FsUGxheWVyRWxlbWVudCIsInJlbW90ZVBsYXllckVsZW1lbnQiLCJwbGF5ZXJTY29yZVdyYXBwZXIiLCJsb2NhbFBsYXllclNjb3JlRWxlbWVudCIsInJlbW90ZVBsYXllclNjb3JlRWxlbWVudCIsInNldFR1cm4iLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidXBkYXRlU2NvcmUiLCJsYXN0U2NvcmUiLCJsb2NhbCIsInJlbW90ZSIsImFmdGVyIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImJvZHkiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJwYXRobmFtZSIsIm9uc3RhcnQiLCJwbGF5ZXJSZXF1ZXN0IiwicGxhY2UiLCJjaGFuZ2VUdXJuIiwib25TdGFydCIsImNhbGxiYWNrIiwib25QbGF5ZXJSZXF1ZXN0Iiwib25QbGFjZSIsIm9uVHVybiIsIm9ub3BlbiIsImUiLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwiZGF0YSIsImNvbW1hbmQiLCJzcGxpdCIsIk51bWJlciIsIlJBTkRfTklDS05BTUVTIiwiZ2V0UmFuZE5pY2siLCJyYW5kb20iLCJzY29yZSIsIm5pY2tuYW1lIiwicG9wdXBGb3JtIiwiY3JlYXRlRm9ybUVsZW1lbnQiLCJwb3B1cCIsImNyZWF0ZVBvcHVwRWxlbWVudCIsIm9ubG9hZCIsImxvYWRIYW5kbGVyIiwidG9nZ2xlIiwid2VsY29tZUZvcm1TdWJtaXQiLCJjb250YWlucyIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjbGFzc05hbWUiLCJuaWNrTmFtZVNlY3Rpb24iLCJsYWJlbCIsImlubmVySFRNTCIsImNvbG9yUGlja2VyIiwiY29sb3JzIiwiaXRlbSIsIml0ZW1JbnB1dCIsInNldEF0dHJpYnV0ZSIsImJhY2tncm91bmRDb2xvciIsImZvcm1TdWJtaXQiLCJkaXYiLCJwb3B1cEhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQzFCQyxVQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFYO0FBQ0FDLHVEQUFBO0FBQ0FDLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0Q7QUFDRCxJQUFJTCxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFmOztBQUVBSSx3RUFBQSxHQUE2QixZQUFNO0FBQ2pDQyxjQUFZLEdBQUdBLFlBQVksQ0FBQ0MsT0FBYixFQUFmO0FBQ0FELGNBQVksQ0FBQ0UsSUFBYjtBQUNBTiwwREFBQTtBQUNELENBSkQsQyxDQU1BOzs7QUFDQSxJQUFJTyxhQUFhLEdBQUcsSUFBSUMsZ0VB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QUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsImZpbGUiOiJsb2JieS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcblxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvc3RhZ2UuanNcIjtcbmltcG9ydCB7IEdhbWVMb2FkaW5nIH0gZnJvbSBcIi4vc3RhZ2VzL2dhbWUtbG9hZGluZy5qc1wiO1xuaW1wb3J0IHsgRmllbGRBcHBlYXIgfSBmcm9tIFwiLi9zdGFnZXMvZmllbGQtYXBwZWFyLmpzXCI7XG5pbXBvcnQgeyBHYW1lU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvZ2FtZS1zdGFnZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBsYXN0VGltZSA9IERhdGUubm93KCk7XG4gIGN0eC5zYXZlKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5sZXQgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG5TdGFnZS5wcm90b3R5cGUub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgY3VycmVudFN0YWdlID0gY3VycmVudFN0YWdlLmdldE5leHQoKTtcbiAgY3VycmVudFN0YWdlLmluaXQoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8vaW5pdCBnYW1lIHN0YWdlc1xubGV0IGdhbWVMb2FkU3RhZ2UgPSBuZXcgR2FtZUxvYWRpbmcoKTtcbmxldCBmaWVsZEFwcGVhclN0YWdlID0gbmV3IEZpZWxkQXBwZWFyKCk7XG5sZXQgZ2FtZVN0YWdlID0gbmV3IEdhbWVTdGFnZSgpO1xuXG4vL2dhbWUgc3RhZ2VzIGRlcGVuZGVuY2VzXG5sZXQgY3VycmVudFN0YWdlID0gZ2FtZUxvYWRTdGFnZTtcbmdhbWVMb2FkU3RhZ2Uuc2V0TmV4dChmaWVsZEFwcGVhclN0YWdlKTtcbmZpZWxkQXBwZWFyU3RhZ2Uuc2V0TmV4dChnYW1lU3RhZ2UpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgbGV0IG5vd1RpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgZGVsdGFUaW1lID0gKG5vd1RpbWUgLSBsYXN0VGltZSkgLyAxMDAwO1xuICBsYXN0VGltZSA9IG5vd1RpbWU7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3VycmVudFN0YWdlLnVwZGF0ZShkZWx0YVRpbWUpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5cbmxldCBub3dSYWRpdXMgPSAwO1xubGV0IGFuaW1hdGlvblByb2dyZXNzID0gMTAwO1xubGV0IGFuaW1hdGlvblNwZWVkID0gNTAwOyAvL3BlcmNlbnQgcGVyIHNlY29uZFxuXG4vL2NhbGN1bGF0ZSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEgZGVwZW5kZW50IG9uIGFuaW1hdGlvbiBQcm9ncmVzcygwOjEwMCk7XG5mdW5jdGlvbiBnZXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICBsZXQgcHJvZyA9IHByb2dyZXNzIC8gMTAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZnVuY3Rpb24gQ3Vyc29yKCkge1xuICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoKTtcbiAgdGhpcy50YXJnZXQgPSBuZXcgVmVjdG9yKCk7XG4gIHRoaXMucmFkaXVzID0gMTA7XG4gIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzO1xuICB0aGlzLnNwZWVkID0gMTA7XG4gIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBsYXllci5sb2NhbC5jb2xvcjtcbiAgICBjdHguYXJjKGN1cnNvci5wb3MueCwgY3Vyc29yLnBvcy55LCBub3dSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbCgpO1xuICB9O1xuICB0aGlzLmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGFuaW1hdGlvblByb2dyZXNzID0gMDtcbiAgICBub3dSYWRpdXMgPSAwO1xuICB9O1xuICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YVRpbWUpIHtcbiAgICBpZiAoYW5pbWF0aW9uUHJvZ3Jlc3MgPCAxMDApIHtcbiAgICAgIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzICogZ2V0UHJvZ3Jlc3MoYW5pbWF0aW9uUHJvZ3Jlc3MpO1xuICAgICAgYW5pbWF0aW9uUHJvZ3Jlc3MgKz0gZGVsdGFUaW1lICogYW5pbWF0aW9uU3BlZWQ7XG4gICAgfSBlbHNlIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzO1xuICB9O1xufVxuXG5leHBvcnQgbGV0IGN1cnNvciA9IG5ldyBDdXJzb3IoKTtcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IHBhdGhGaW5kZXIgfSBmcm9tIFwiLi9wYXRoRmluZGVyLmpzXCI7XG5cbmNvbnN0IFRXT19QSSA9IDIgKiBNYXRoLlBJO1xuXG5mdW5jdGlvbiBEb3QoKSB7XG4gIHRoaXMuY29sb3IgPSBcIlwiO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmluc2lkZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBEb3RBcnIobWVzaFNpemUpIHtcbiAgbGV0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2hTaXplLng7IGkrKykge1xuICAgIGFycltpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzaFNpemUueTsgaisrKSB7XG4gICAgICBhcnJbaV1bal0gPSBuZXcgRG90KCk7XG4gICAgfVxuICB9XG4gIHRoaXMuc2l6ZSA9IG1lc2hTaXplO1xuICB0aGlzLmdldENvbG9yID0gZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiBhcnJbcG9zLnhdW3Bvcy55XS5jb2xvcjtcbiAgfTtcbiAgdGhpcy5zZXRDb2xvciA9IGZ1bmN0aW9uIChwb3MsIGNvbG9yKSB7XG4gICAgYXJyW3Bvcy54XVtwb3MueV0uY29sb3IgPSBjb2xvcjtcbiAgfTtcbiAgdGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKHBvcykge1xuICAgIGFycltwb3MueF1bcG9zLnldLmNvbm5lY3RlZCA9IHRydWU7XG4gIH07XG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIGFycltwb3MueF1bcG9zLnldLmNvbm5lY3RlZDtcbiAgfTtcbiAgdGhpcy5tYXJrSW5zaWRlID0gZnVuY3Rpb24gKHBvcykge1xuICAgIGFycltwb3MueF1bcG9zLnldLmluc2lkZSA9IHRydWU7XG4gIH07XG4gIHRoaXMuaXNJbnNpZGUgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIGFycltwb3MueF1bcG9zLnldLmluc2lkZTtcbiAgfTtcbn1cblxubGV0IGRvdEFyciA9IHt9O1xuXG5jbGFzcyBEb3RzIHtcbiAgI3N0ZXAgPSAwO1xuICAjc2l6ZSA9IHt9O1xuICAjZG90UmFkaXVzID0gODtcbiAgI3BhdGhzID0gW107XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChzaXplLCBzdGVwKSB7XG4gICAgICB0aGlzLiNzdGVwID0gc3RlcDtcbiAgICAgIHRoaXMuI3NpemUgPSBzaXplO1xuICAgICAgZG90QXJyID0gbmV3IERvdEFycihzaXplKTtcbiAgICAgIHBhdGhGaW5kZXIuYXNzaWduQXJyKGRvdEFycik7XG4gICAgfTtcbiAgICB0aGlzLnB1c2ggPSBmdW5jdGlvbiAocG9zLCBjb2xvcikge1xuICAgICAgaWYgKGRvdEFyci5nZXRDb2xvcihwb3MpICE9IFwiXCIgfHwgZG90QXJyLmlzSW5zaWRlKHBvcykpIHJldHVybiBmYWxzZTtcbiAgICAgIGRvdEFyci5zZXRDb2xvcihwb3MsIGNvbG9yKTtcbiAgICAgIHBhdGhGaW5kZXIuZmluZFBhdGgocG9zKS50aGVuKChwYXRoKSA9PiB7XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMCkgdGhpcy4jcGF0aHMucHVzaChwYXRoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICB0aGlzLmRyYXdQYXRocyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLiNwYXRoc1tpXTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBkb3RBcnIuZ2V0Q29sb3IocGF0aFswXSk7XG4gICAgICAgIGlmIChpID09IHRoaXMuI3BhdGhzLmxlbmd0aCAtIDEpIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIGZvciAobGV0IHBvcyBvZiBwYXRoKSB7XG4gICAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgIHBvcy54ICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgcG9zLnkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5maWxsUGF0aHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvL2ZpbGwgcGF0aHNcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLiNwYXRocy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuI3BhdGhzW2ldO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnZXRGaWxsQ29sb3IoZG90QXJyLmdldENvbG9yKHBhdGhbMF0pKTtcbiAgICAgICAgZm9yIChsZXQgcG9zIG9mIHBhdGgpIHtcbiAgICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgcG9zLnggKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICAgICAgICBwb3MueSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5kcmF3RG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jc2l6ZS54OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNzaXplLnk7IGorKykge1xuICAgICAgICAgIGxldCBjb2xvciA9IGRvdEFyci5nZXRDb2xvcih7IHg6IGksIHk6IGogfSk7XG4gICAgICAgICAgaWYgKGNvbG9yID09IFwiXCIpIGNvbnRpbnVlO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICAgICAgICBqICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgdGhpcy4jZG90UmFkaXVzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIFRXT19QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RmlsbENvbG9yKGhleCkge1xuICBsZXQgb3BhY2l0eSA9IDAuNTtcbiAgbGV0IHJnYiA9IGhleFxuICAgIC5tYXRjaCgvW2EtZlxcZF17Mn0vZ2kpXG4gICAgLm1hcCgoZWxlbSkgPT4gcGFyc2VJbnQoZWxlbSwgMTYpICogb3BhY2l0eSlcbiAgICAuam9pbihcIixcIik7XG4gIHJldHVybiBgcmdiKCR7cmdifSlgO1xufVxuXG5leHBvcnQgbGV0IGRvdHMgPSBuZXcgRG90cygpO1xuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZG90cyB9IGZyb20gXCIuL2RvdHMuanNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2ZXIgfSBmcm9tIFwiLi4vd2Vic29ja2V0LmpzXCI7XG5cbmZ1bmN0aW9uIG1hcCh2YWwsIGJlZywgZW5kKSB7XG4gIGxldCByZXQgPSB2YWwgPiBlbmQgPyBlbmQgOiB2YWw7XG4gIHJldCA9IHJldCA8IGJlZyA/IGJlZyA6IHJldDtcbiAgcmV0dXJuIHJldDtcbn1cblxuY2xhc3MgRmllbGQge1xuICAjc3RlcCA9IDA7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8v0KDQsNC30LzQtdGAINC/0L7Qu9GPXG4gICAgdGhpcy5zaXplID0ge1xuICAgICAgeDogMTUsXG4gICAgICB5OiAxNSxcbiAgICB9O1xuXG4gICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7IC8v0J/Rg9GC0Ywg0LTQu9GPINGA0LjRgdC+0LLQsNC90LjRjyDQv9C+0LvRj1xuICAgIHRoaXMuI3N0ZXAgPSBjYW52YXMud2lkdGggLyB0aGlzLnNpemUueDsgLy/RiNCw0LMg0YHQtdGC0LrQuFxuXG4gICAgLy/RgNC40YHRg9C10Lwg0YHQtdGC0LrRg1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplLng7IGkrKykge1xuICAgICAgcGF0aC5tb3ZlVG8oaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMiwgMCk7XG4gICAgICBwYXRoLmxpbmVUbyhpICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemUueTsgaSsrKSB7XG4gICAgICBwYXRoLm1vdmVUbygwLCBpICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyKTtcbiAgICAgIHBhdGgubGluZVRvKGNhbnZhcy53aWR0aCwgaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMik7XG4gICAgfVxuXG4gICAgZG90cy5pbml0KHRoaXMuc2l6ZSwgdGhpcy4jc3RlcCk7XG5cbiAgICAvL9GE0YPQvdC60YbQuNGPINGA0LjRgdC+0LLQsNC90LjRjyDQv9C+0LvRj1xuICAgIHRoaXMuZHJhd0ZpZWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG90cy5maWxsUGF0aHMoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgY3R4LnN0cm9rZShwYXRoKTtcbiAgICAgIGRvdHMuZHJhd1BhdGhzKCk7XG4gICAgICBkb3RzLmRyYXdEb3RzKCk7XG4gICAgfTtcbiAgfVxuICBwbGFjZURvdChwb3MsIGNvbG9yKSB7XG4gICAgbGV0IG5ld1BvcyA9IHRoaXMuZ2V0TWVzaENvb3JkKHBvcyk7XG4gICAgaWYgKGRvdHMucHVzaChuZXdQb3MsIGNvbG9yKSkge1xuICAgICAgZ2FtZVNlcnZlci5wbGFjZShuZXdQb3MpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL3VzZSBmb3IgcGxhY2UgZG90IGZyb20gcmVtb3RlIHNlcnZlciBwb3MtbWVzaCBjb29yZFxuICBwbGFjZURvdERpcmVjdChwb3MsIGNvbG9yKSB7XG4gICAgcmV0dXJuIGRvdHMucHVzaChwb3MsIGNvbG9yKTtcbiAgfVxuICBnZXRNZXNoQ29vcmQocG9zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG1hcChNYXRoLmZsb29yKHBvcy54IC8gdGhpcy4jc3RlcCksIDAsIHRoaXMuc2l6ZS54IC0gMSksXG4gICAgICB5OiBtYXAoTWF0aC5mbG9vcihwb3MueSAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueSAtIDEpLFxuICAgIH07XG4gIH1cbiAgZ2V0VGFyZ2V0Q29vcmQocG9zKSB7XG4gICAgbGV0IG1lc2hQb3MgPSB7fTtcbiAgICBtZXNoUG9zLnggPSBtYXAoTWF0aC5mbG9vcihwb3MueCAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueCAtIDEpO1xuICAgIG1lc2hQb3MueSA9IG1hcChNYXRoLmZsb29yKHBvcy55IC8gdGhpcy4jc3RlcCksIDAsIHRoaXMuc2l6ZS55IC0gMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG1lc2hQb3MueCAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMixcbiAgICAgIHk6IG1lc2hQb3MueSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMixcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiIsImV4cG9ydCBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXNcIik7XG5leHBvcnQgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmN0eC5zYXZlKCk7XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3IuanNcIjtcbmltcG9ydCAqIGFzIHBhdGhXb3JrZXIgZnJvbSBcIi4vcGF0aFdvcmtlci5qc1wiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4uL3dlbGNvbWUtZm9ybS5qc1wiO1xuXG5sZXQgZG90QXJyID0ge307XG5sZXQgc3RhcnRQb3MgPSBuZXcgVmVjdG9yKCk7XG5sZXQgY29sb3IgPSBcIlwiO1xubGV0IGNhbmRpZGF0ZVBhdGhzID0gW107XG5sZXQgY29ubmVjdGVkRG90cyA9IFtdOyAvL2NvdW50IG9mIGNvbm5lY3RlZCBkb3RzIGZvciBlYWNoIGNhbmRpdGF0ZSBwYXRoXG5cbmZ1bmN0aW9uIG5leHRQb3MoZGlyLCBwb3MpIHtcbiAgbGV0IG5ld1BvcztcbiAgc3dpdGNoIChkaXIpIHtcbiAgICBjYXNlIDA6XG4gICAgICBuZXdQb3MgPSBuZXcgVmVjdG9yKHBvcy54ICsgMSwgcG9zLnkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCArIDEsIHBvcy55ICsgMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBuZXdQb3MgPSBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSArIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCAtIDEsIHBvcy55ICsgMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBuZXdQb3MgPSBuZXcgVmVjdG9yKHBvcy54IC0gMSwgcG9zLnkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCAtIDEsIHBvcy55IC0gMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICBuZXdQb3MgPSBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSAtIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3OlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCArIDEsIHBvcy55IC0gMSk7XG4gICAgICBicmVhaztcbiAgfVxuICBpZiAoXG4gICAgbmV3UG9zLnggPCAwIHx8XG4gICAgbmV3UG9zLnggPj0gZG90QXJyLnNpemUueCB8fFxuICAgIG5ld1Bvcy55IDwgMCB8fFxuICAgIG5ld1Bvcy55ID49IGRvdEFyci5zaXplLnlcbiAgKVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiBuZXdQb3M7XG59XG5cbi8vZmluZCBjb25kaWRhdGVzIHdpdGggbWluaW1hbCBjb25uZWN0ZWQgbm9kZXNcbmZ1bmN0aW9uIGZpbHRlckNhbmRpdGF0ZXMoKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgbGV0IG1pbiA9IGNvbm5lY3RlZERvdHNbMF07XG4gIGZvciAobGV0IHZhbCBvZiBjb25uZWN0ZWREb3RzKSB7XG4gICAgaWYgKHZhbCA8IG1pbikgbWluID0gdmFsO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkRG90cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjb25uZWN0ZWREb3RzW2ldID09IG1pbikgcmVzdWx0LnB1c2goY2FuZGlkYXRlUGF0aHNbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmxldCBmaW5kUGF0aCA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzdGFydFBvcyA9IG5ldyBWZWN0b3IocG9zLngsIHBvcy55KTtcbiAgICBjb2xvciA9IGRvdEFyci5nZXRDb2xvcihwb3MpO1xuICAgIGNhbmRpZGF0ZVBhdGhzID0gW107XG4gICAgY29ubmVjdGVkRG90cyA9IFtdO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICByZWN1cmNpdmVQYXRoKHN0YXJ0UG9zLCBbXSwgc3RhcnRQb3MsIDApO1xuICAgIGlmIChjYW5kaWRhdGVQYXRocy5sZW5ndGggPiAwKSB7XG4gICAgICAvL2NhbmRpZGF0ZVBhdGhzID0gZmlsdGVyQ2FuZGl0YXRlcygpO1xuICAgICAgbGV0IHBhdGhJbmRleCA9IHBhdGhXb3JrZXIubWF4QXJlYUluZGV4KGNhbmRpZGF0ZVBhdGhzKTtcbiAgICAgIGlmIChwYXRoSW5kZXggPj0gMCkge1xuICAgICAgICByZXN1bHQgPSBbLi4uY2FuZGlkYXRlUGF0aHNbcGF0aEluZGV4XV07XG4gICAgICAgIG1hcmtEb3RzQXNDb25uZWN0ZWQocmVzdWx0KTtcbiAgICAgICAgcmVzdWx0ID0gcGF0aFdvcmtlci5zaW1wbGlmeVBhdGgocmVzdWx0KTtcbiAgICAgICAgbWFya0RvdHNJbnNpZGVQYXRoKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQucGF0aC5sZW5ndGgpO1xuICAgICAgcmVzb2x2ZShyZXN1bHQucGF0aCk7XG4gICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgfSk7XG59O1xuXG4vKtCSINGN0YLQvtC8INCw0LvQs9C+0YDQuNGC0LzQtSDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIg0L/RgNC+0LLQtdGA0LrQsCDQstGB0LXRhSDRjdC70LvQtdC80LXQvdGC0L7QsiDQstC+INC40LfQsdC10LDQvdC40Lgg0LfQsNC80YvQutCw0L3QuNGPLiDQrdGC0L4g0L3Rg9C20L3QviDRg9Cx0YDQsNGC0YwqL1xuXG5mdW5jdGlvbiByZWN1cmNpdmVQYXRoKHBvcywgcGF0aCwgcHJldlBvcywgY29ubmVjdGVkRG90c0NvdW50KSB7XG4gIGxldCBuZXh0O1xuXG4gIGlmIChwYXRoLmxlbmd0aCAhPSAwICYmIHBvcy54ID09IHN0YXJ0UG9zLnggJiYgcG9zLnkgPT0gc3RhcnRQb3MueSkge1xuICAgIGNhbmRpZGF0ZVBhdGhzLnB1c2goWy4uLnBhdGhdKTtcbiAgICBjb25uZWN0ZWREb3RzLnB1c2goY29ubmVjdGVkRG90c0NvdW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYXRoLnB1c2gocG9zKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBuZXh0ID0gbmV4dFBvcyhpLCBwb3MpO1xuICAgIGlmICghbmV4dCB8fCAobmV4dC54ID09IHByZXZQb3MueCAmJiBuZXh0LnkgPT0gcHJldlBvcy55KSkgY29udGludWU7XG4gICAgaWYgKFxuICAgICAgZG90QXJyLmdldENvbG9yKG5leHQpID09IGNvbG9yICYmXG4gICAgICAhZG90QXJyLmlzSW5zaWRlKG5leHQpICYmXG4gICAgICAhcGF0aFdvcmtlci5maW5kSW50ZXJzZWN0cyhwYXRoLCBuZXh0KVxuICAgICkge1xuICAgICAgcmVjdXJjaXZlUGF0aChcbiAgICAgICAgbmV4dCxcbiAgICAgICAgWy4uLnBhdGhdLFxuICAgICAgICBwb3MsXG4gICAgICAgIGRvdEFyci5pc0Nvbm5lY3RlZChwb3MpID8gY29ubmVjdGVkRG90c0NvdW50ICsgMSA6IGNvbm5lY3RlZERvdHNDb3VudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0RvdHNBc0Nvbm5lY3RlZChwYXRoKSB7XG4gIGZvciAobGV0IHBvcyBvZiBwYXRoKSB7XG4gICAgZG90QXJyLmNvbm5lY3QocG9zKTtcbiAgfVxufVxuXG4vL0lNUE9SVEFOVCBpbiB0aGlzIGZ1bmN0aW9uLCBwYXRoIGlzIG9iamVjdCB3aXRoIGJvdW5kaW5ncyBhbmQgb3B0aW1pemVkIHBhdGggZmllbGRzXG5mdW5jdGlvbiBtYXJrRG90c0luc2lkZVBhdGgocG9seWdvbikge1xuICBsZXQgcG9zID0gbmV3IFZlY3RvcigpO1xuICBsZXQgY29sb3IgPSBkb3RBcnIuZ2V0Q29sb3IocG9seWdvbi5wYXRoWzBdKTtcbiAgbGV0IGxvY2FsUGxheWVyID0gY29sb3IgPT0gcGxheWVyLmxvY2FsLmNvbG9yO1xuICBmb3IgKGxldCBpID0gcG9seWdvbi5ib3VuZGluZy5taW4ueDsgaSA8IHBvbHlnb24uYm91bmRpbmcubWF4Lng7IGkrKykge1xuICAgIGZvciAobGV0IGogPSBwb2x5Z29uLmJvdW5kaW5nLm1pbi55OyBqIDwgcG9seWdvbi5ib3VuZGluZy5tYXgueTsgaisrKSB7XG4gICAgICBwb3MueCA9IGk7XG4gICAgICBwb3MueSA9IGo7XG4gICAgICBsZXQgbm93Q29sb3IgPSBkb3RBcnIuZ2V0Q29sb3IocG9zKTtcbiAgICAgIGlmIChkb3RBcnIuaXNDb25uZWN0ZWQocG9zKSAmJiBub3dDb2xvciA9PSBjb2xvcikgY29udGludWU7XG4gICAgICBpZiAocGF0aFdvcmtlci5pc0luc2lkZVBhdGgocG9seWdvbi5wYXRoLCBwb3MpKSB7XG4gICAgICAgIGRvdEFyci5zZXRDb2xvcihwb3MsIFwiYmxhY2tcIik7XG4gICAgICAgIGlmIChub3dDb2xvciAhPSBjb2xvciAmJiBub3dDb2xvciAhPSBcIlwiICYmICFkb3RBcnIuaXNJbnNpZGUocG9zKSkge1xuICAgICAgICAgIGxvY2FsUGxheWVyID8gKHBsYXllci5sb2NhbC5zY29yZSArPSAxKSA6IChwbGF5ZXIucmVtb3RlLnNjb3JlICs9IDEpO1xuICAgICAgICB9XG4gICAgICAgIGRvdEFyci5tYXJrSW5zaWRlKHBvcyk7XG4gICAgICAgIGRvdEFyci5zZXRDb2xvcihwb3MsIFwid2hpdGVcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBQYXRoRmluZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFzc2lnbkFyciA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICBkb3RBcnIgPSBhcnI7XG4gIH07XG4gIHRoaXMuZmluZFBhdGggPSBmaW5kUGF0aDtcbn07XG5leHBvcnQgbGV0IHBhdGhGaW5kZXIgPSBuZXcgUGF0aEZpbmRlcigpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbnRlcnNlY3RzKHBhdGgsIHBvcykge1xuICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGlmIChwb3MueCA9PSBwYXRoW2ldLnggJiYgcG9zLnkgPT0gcGF0aFtpXS55KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4QXJlYUluZGV4KHBhdGhzKSB7XG4gIGxldCBub3dBcmVhID0gMDtcbiAgbGV0IG1heE5vZGVzID0gMDtcbiAgbGV0IGluc2lkZU5vZGVzID0gMDtcbiAgbGV0IGluZGV4ZXMgPSBbXTtcbiAgbGV0IGFyZWFzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICBub3dBcmVhID0gZmluZEFyZWEocGF0aHNbaV0pO1xuICAgIGlmIChub3dBcmVhIDw9IDApIGNvbnRpbnVlO1xuICAgIGluc2lkZU5vZGVzID0gbm93QXJlYSAtIHBhdGhzW2ldLmxlbmd0aCAvIDIgKyAxOyAvL9GE0L7RgNC80YPQu9CwINC/0LjQutCwXG4gICAgaWYgKGluc2lkZU5vZGVzIDw9IDApIGNvbnRpbnVlO1xuICAgIGlmIChpbnNpZGVOb2RlcyA+IG1heE5vZGVzKSB7XG4gICAgICBtYXhOb2RlcyA9IGluc2lkZU5vZGVzO1xuICAgICAgaW5kZXhlcyA9IFtpXTtcbiAgICAgIGFyZWFzID0gW25vd0FyZWFdO1xuICAgIH0gZWxzZSBpZiAoaW5zaWRlTm9kZXMgPT0gbWF4Tm9kZXMpIHtcbiAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgIGFyZWFzLnB1c2gobm93QXJlYSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1heE5vZGVzID09IDApIHJldHVybiAtMTtcbiAgaWYgKGluZGV4ZXMubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xuICBsZXQgbWluQXJlYSA9IGFyZWFzWzBdO1xuICBsZXQgcmVzSW5kZXggPSBpbmRleGVzWzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJlYXNbaV0gPCBtaW5BcmVhKSB7XG4gICAgICByZXNJbmRleCA9IGluZGV4ZXNbaV07XG4gICAgICBtaW5BcmVhID0gYXJlYXNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNJbmRleDtcbn1cblxuZnVuY3Rpb24gZmluZEFyZWEocGF0aCkge1xuICAvL9GE0L7RgNC80YPQu9CwINCT0LDRg9GB0YHQsFxuICBsZXQgYXJlYSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGFyZWEgKz0gKHBhdGhbaV0ueCAqIHBhdGhbKGkgKyAxKSAlIHBhdGgubGVuZ3RoXS55KSAvIDI7XG4gICAgYXJlYSAtPSAocGF0aFsoaSArIDEpICUgcGF0aC5sZW5ndGhdLnggKiBwYXRoW2ldLnkpIC8gMjtcbiAgfVxuICByZXR1cm4gYXJlYTtcbn1cblxuLy90b2RvOiByZXR1cm4gYm91bmRpbmcgYm94XG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlQYXRoKHBhdGgpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBsZXQgZGlyZWN0aW9uID0gNDsgLy9jYW4gYmUgNSAyIDEgMCAzIDYgNyA4LCA0IG5vIGRpcmVjdGlvblxuICBsZXQgbm93RGlyZWN0aW9uID0gNDtcblxuICBsZXQgYm91bmRpbmcgPSB7XG4gICAgbWluOiB7IHg6IHBhdGhbMF0ueCwgeTogcGF0aFswXS55IH0sXG4gICAgbWF4OiB7IHg6IHBhdGhbMF0ueCwgeTogcGF0aFswXS55IH0sXG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsZXQgbmV4dCA9IHBhdGhbaSArIDFdO1xuICAgIGxldCBwb3MgPSBwYXRoW2ldO1xuXG4gICAgaWYgKHBvcy54IDwgYm91bmRpbmcubWluLngpIGJvdW5kaW5nLm1pbi54ID0gcG9zLng7XG4gICAgaWYgKHBvcy55IDwgYm91bmRpbmcubWluLnkpIGJvdW5kaW5nLm1pbi55ID0gcG9zLnk7XG4gICAgaWYgKHBvcy54ID4gYm91bmRpbmcubWF4LngpIGJvdW5kaW5nLm1heC54ID0gcG9zLng7XG4gICAgaWYgKHBvcy55ID4gYm91bmRpbmcubWF4LnkpIGJvdW5kaW5nLm1heC55ID0gcG9zLnk7XG5cbiAgICBub3dEaXJlY3Rpb24gPSBuZXh0LnggLSBwb3MueCArIChuZXh0LnkgLSBwb3MueSkgKiAzICsgNDtcbiAgICBpZiAobm93RGlyZWN0aW9uICE9IGRpcmVjdGlvbikge1xuICAgICAgZGlyZWN0aW9uID0gbm93RGlyZWN0aW9uO1xuICAgICAgcmVzdWx0LnB1c2gocG9zKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocGF0aFtwYXRoLmxlbmd0aCAtIDFdKTtcbiAgcmV0dXJuIHsgcGF0aDogcmVzdWx0LCBib3VuZGluZywgc291cmNlOiBwYXRoIH07XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJbnNpZGVQYXRoKHBhdGgsIHBvcykge1xuICBsZXQgaG9yTGluZVkgPSBwb3MueSArIDAuNTtcbiAgbGV0IGludGVyc2VjdHMgPSAwO1xuICBsZXQgbm93O1xuICBsZXQgbmV4dDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPT0gcGF0aC5sZW5ndGggLSAxKSB7XG4gICAgICBub3cgPSBwYXRoW2ldO1xuICAgICAgbmV4dCA9IHBhdGhbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdyA9IHBhdGhbaV07XG4gICAgICBuZXh0ID0gcGF0aFtpICsgMV07XG4gICAgfVxuICAgIGxldCBpbnRlclggPVxuICAgICAgKChob3JMaW5lWSAtIG5vdy55KSAqIChuZXh0LnggLSBub3cueCkpIC8gKG5leHQueSAtIG5vdy55KSArIG5vdy54O1xuICAgIGlmIChpbnRlclggPCBwb3MueCkgY29udGludWU7XG5cbiAgICBsZXQgZGVsdGFBID0gaG9yTGluZVkgLSBub3cueTtcbiAgICBsZXQgZGVsdGFCID0gaG9yTGluZVkgLSBuZXh0Lnk7XG4gICAgaWYgKGRlbHRhQSA9PSAwIHx8IGRlbHRhQiA9PSAwKSBpbnRlcnNlY3RzKys7XG4gICAgaWYgKE1hdGguc2lnbihkZWx0YUEpICE9IE1hdGguc2lnbihkZWx0YUIpKSBpbnRlcnNlY3RzKys7XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdHMgJSAyID09IDEgPyB0cnVlIDogZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZmllbGQgfSBmcm9tIFwiLi4vZmllbGQuanNcIjtcblxuZXhwb3J0IGNsYXNzIEZpZWxkQXBwZWFyIGV4dGVuZHMgU3RhZ2Uge1xuICBzdGVwID0gY2FudmFzLndpZHRoIC8gZmllbGQuc2l6ZS54O1xuICBvZmZzZXQgPSAwO1xuICBzcGVlZCA9IGNhbnZhcy5oZWlnaHQgKiA0O1xuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICB0aGlzLm9mZnNldCArPSBkZWx0YVRpbWUgKiB0aGlzLnNwZWVkO1xuICAgIGlmICh0aGlzLm9mZnNldCA+PSBjYW52YXMuaGVpZ2h0KSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkLnNpemUueDsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKGkgKiB0aGlzLnN0ZXAgKyB0aGlzLnN0ZXAgLyAyLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oaSAqIHRoaXMuc3RlcCArIHRoaXMuc3RlcCAvIDIsIHRoaXMub2Zmc2V0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC5zaXplLnk7IGkrKykge1xuICAgICAgY3R4Lm1vdmVUbygwLCBpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMik7XG4gICAgICBjdHgubGluZVRvKHRoaXMub2Zmc2V0LCBpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMik7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZS5qc1wiO1xuXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVNlcnZlciB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQuanNcIjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5nYW1lU2VydmVyLm9uU3RhcnQoKHNvY2tldCkgPT4ge1xuICBzb2NrZXQuc2VuZChgcGxheWVyICR7cGxheWVyLmxvY2FsLmNvbG9yfSAke3BsYXllci5sb2NhbC5uaWNrbmFtZX1gKTtcbiAgbG9hZGVkID0gdHJ1ZTtcbn0pO1xuXG5nYW1lU2VydmVyLm9uUGxheWVyUmVxdWVzdCgoY29sb3IsIG5pY2spID0+IHtcbiAgcGxheWVyLnJlbW90ZS5jb2xvciA9IGNvbG9yO1xuICBwbGF5ZXIucmVtb3RlLm5pY2tuYW1lID0gbmljaztcbn0pO1xuXG5leHBvcnQgY2xhc3MgR2FtZUxvYWRpbmcgZXh0ZW5kcyBTdGFnZSB7XG4gICNzY3JlZW5XaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgI3NjcmVlbkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICNyYWRpdXMgPSA3O1xuICAjdG90YWxTaGFwZVJhZGl1cyA9IDcwO1xuICAjY2lyY2xlQ291bnQgPSA1O1xuICAjc3BlZWQgPSAxO1xuICAjb2Zmc2V0ID0gMDtcbiAgI25vd0FscGhhID0gMTtcblxuICAjZ2V0QW5nbGUocGhhc2UpIHtcbiAgICByZXR1cm4gNCAqIChNYXRoLmF0YW4oKHBoYXNlICUgMikgLSAxKSArIE1hdGguUEkgKiA0KTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gcGxheWVyLmxvY2FsLmNvbG9yO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jY2lyY2xlQ291bnQ7ICsraSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IGFuZ2xlID0gdGhpcy4jZ2V0QW5nbGUodGhpcy4jb2Zmc2V0ICsgaSAqIDAuMSk7XG4gICAgICBjdHguYXJjKFxuICAgICAgICBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLiN0b3RhbFNoYXBlUmFkaXVzICsgdGhpcy4jc2NyZWVuV2lkdGggLyAyLFxuICAgICAgICBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLiN0b3RhbFNoYXBlUmFkaXVzICsgdGhpcy4jc2NyZWVuSGVpZ2h0IC8gMixcbiAgICAgICAgdGhpcy4jcmFkaXVzLFxuICAgICAgICAwLFxuICAgICAgICBNYXRoLlBJICogMlxuICAgICAgKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIHRoaXMuI29mZnNldCArPSB0aGlzLiNzcGVlZCAqIGRlbHRhVGltZTtcbiAgICBpZiAobG9hZGVkKSB7XG4gICAgICBpZiAodGhpcy4jbm93QWxwaGEgPiAwKSB0aGlzLiNub3dBbHBoYSAtPSB0aGlzLiNzcGVlZCAqIGRlbHRhVGltZTtcbiAgICAgIHRoaXMuI25vd0FscGhhIDwgMFxuICAgICAgICA/IChjdHguZ2xvYmFsQWxwaGEgPSAwKVxuICAgICAgICA6IChjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLiNub3dBbHBoYSk7XG4gICAgICBpZiAodGhpcy4jbm93QWxwaGEgPD0gMCkge1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vLi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuLi8uLi93ZWxjb21lLWZvcm0uanNcIjtcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2UuanNcIjtcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSBcIi4uL2ZpZWxkLmpzXCI7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi4vdmVjdG9yLmpzXCI7XG5pbXBvcnQgeyBjdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yLmpzXCI7XG5pbXBvcnQgeyBnYW1lU2VydmVyIH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC5qc1wiO1xuaW1wb3J0ICogYXMgZ2FtZVVpIGZyb20gXCIuLi8uLi9nYW1lLXVpLmpzXCI7XG5cbmxldCBtb3VzZVBvcyA9IG5ldyBWZWN0b3IoKTtcblxubGV0IGxvY2FsVHVybiA9IGZhbHNlOyAvL9GF0L7QtNC40YIg0LvQuCDRgdC10LnRh9Cw0YEg0LvQvtC60LDQu9GM0L3Ri9C5INC40LPRgNC+0LpcblxuY29uc3QgREVWX01PREUgPSBmYWxzZTtcblxuZ2FtZVNlcnZlci5vblBsYWNlKChwb3MpID0+IHtcbiAgZmllbGQucGxhY2VEb3REaXJlY3QocG9zLCBwbGF5ZXIucmVtb3RlLmNvbG9yKTtcbiAgbG9jYWxUdXJuID0gdHJ1ZTtcbiAgZ2FtZVVpLnNldFR1cm4obG9jYWxUdXJuKTtcbn0pO1xuXG5nYW1lU2VydmVyLm9uVHVybigodHVybikgPT4ge1xuICBpZiAodHVybiA9PSBcImxvY2FsXCIpIHtcbiAgICBsb2NhbFR1cm4gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsVHVybiA9IGZhbHNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0TW91c2VIYW5kbGVyKCkge1xuICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGV0IHNjYWxlWCA9IGNhbnZhcy53aWR0aCAvIHJlY3Qud2lkdGg7XG4gIGxldCBzY2FsZVkgPSBjYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBtb3VzZVBvcy54ID0gKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpICogc2NhbGVYO1xuICAgIG1vdXNlUG9zLnkgPSAoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAqIHNjYWxlWTtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVTdGFnZSBleHRlbmRzIFN0YWdlIHtcbiAgaW5pdCgpIHtcbiAgICBnYW1lVWkuaW5pdChsb2NhbFR1cm4pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZ2V0TW91c2VIYW5kbGVyKCkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobG9jYWxUdXJuIHx8IERFVl9NT0RFKSB7XG4gICAgICAgIGN1cnNvci5jbGljaygpO1xuICAgICAgICBpZiAoZmllbGQucGxhY2VEb3QobW91c2VQb3MsIHBsYXllci5sb2NhbC5jb2xvcikpIHtcbiAgICAgICAgICBsb2NhbFR1cm4gPSBERVZfTU9ERSA/ICFsb2NhbFR1cm4gOiBmYWxzZTtcbiAgICAgICAgICBnYW1lVWkuc2V0VHVybihsb2NhbFR1cm4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIGZpZWxkLmRyYXdGaWVsZCgpO1xuXG4gICAgY3Vyc29yLnRhcmdldCA9IGZpZWxkLmdldFRhcmdldENvb3JkKG1vdXNlUG9zKTtcbiAgICBjdXJzb3IucG9zLnggKz0gKGN1cnNvci50YXJnZXQueCAtIGN1cnNvci5wb3MueCkgKiBkZWx0YVRpbWUgKiBjdXJzb3Iuc3BlZWQ7XG4gICAgY3Vyc29yLnBvcy55ICs9IChjdXJzb3IudGFyZ2V0LnkgLSBjdXJzb3IucG9zLnkpICogZGVsdGFUaW1lICogY3Vyc29yLnNwZWVkO1xuICAgIGN1cnNvci51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICBjdXJzb3IuZHJhdygpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RhZ2Uge1xuICAjbmV4dCA9IHRoaXM7XG4gIGdldE5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25leHQ7XG4gIH1cbiAgc2V0TmV4dChzdGFnZSkge1xuICAgIHRoaXMuI25leHQgPSBzdGFnZTtcbiAgfVxuICBvbkNvbXBsZXRlKCkge1xuICAgIGFsZXJ0KFwiY29tcGxldGVcIik7XG4gIH1cbiAgaW5pdCgpIHt9XG4gIHVwZGF0ZShkZWx0YVRpbWUpIHt9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVmVjdG9yKHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ICE9IFwibnVtYmVyXCIpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gXCJudW1iZXJcIikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3dlbGNvbWUtZm9ybS5qc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2dhbWUtdWkuY3NzXCI7XG5cbmxldCBub3dUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5vd1R1cm4uY2xhc3NMaXN0LmFkZChcIm5vdy10dXJuXCIpO1xubGV0IG5vd1R1cm5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5ub3dUdXJuVGV4dC5jbGFzc0xpc3QuYWRkKFwibm93LXR1cm5fX3RleHRcIik7XG5ub3dUdXJuVGV4dC5pbm5lclRleHQgPSBcItCh0LXQudGH0LDRgSDRhdC+0LTQuNGCOlwiO1xubm93VHVybi5hcHBlbmQobm93VHVyblRleHQpO1xuXG5sZXQgdHVybkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50dXJuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0dXJuLWNvbnRhaW5lclwiKTtcblxubGV0IGxvY2FsUGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubG9jYWxQbGF5ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0dXJuLWNvbnRhaW5lcl9fcGxheWVyXCIpO1xuXG5sZXQgcmVtb3RlUGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xucmVtb3RlUGxheWVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHVybi1jb250YWluZXJfX3BsYXllclwiKTtcblxubm93VHVybi5hcHBlbmQodHVybkNvbnRhaW5lcik7XG5cbi8vcGxheWVycyBzY29yZVxubGV0IHBsYXllclNjb3JlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wbGF5ZXJTY29yZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInBsYXllci1zY29yZS13cmFwcGVyXCIpO1xubGV0IGxvY2FsUGxheWVyU2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5sb2NhbFBsYXllclNjb3JlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXNjb3JlXCIpO1xubGV0IHJlbW90ZVBsYXllclNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xucmVtb3RlUGxheWVyU2NvcmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc2NvcmVcIik7XG5wbGF5ZXJTY29yZVdyYXBwZXIuYXBwZW5kKGxvY2FsUGxheWVyU2NvcmVFbGVtZW50LCByZW1vdGVQbGF5ZXJTY29yZUVsZW1lbnQpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHVybihsb2NhbFR1cm4pIHtcbiAgaWYgKGxvY2FsVHVybikge1xuICAgIHJlbW90ZVBsYXllckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInR1cm4tY29udGFpbmVyX19wbGF5ZXJfaGlkZGVuXCIpO1xuICAgIHR1cm5Db250YWluZXIuYXBwZW5kKGxvY2FsUGxheWVyRWxlbWVudCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdGVQbGF5ZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgcmVtb3RlUGxheWVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHVybi1jb250YWluZXJfX3BsYXllcl9oaWRkZW5cIik7XG4gICAgfSwgMjAwKTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFBsYXllckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInR1cm4tY29udGFpbmVyX19wbGF5ZXJfaGlkZGVuXCIpO1xuICAgIHR1cm5Db250YWluZXIuYXBwZW5kKHJlbW90ZVBsYXllckVsZW1lbnQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbG9jYWxQbGF5ZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgbG9jYWxQbGF5ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0dXJuLWNvbnRhaW5lcl9fcGxheWVyX2hpZGRlblwiKTtcbiAgICB9LCAyMDApO1xuICB9XG4gIHVwZGF0ZVNjb3JlKCk7XG59XG5cbmxldCBsYXN0U2NvcmUgPSB7XG4gIGxvY2FsOiAwLFxuICByZW1vdGU6IDAsXG59O1xuZnVuY3Rpb24gdXBkYXRlU2NvcmUoKSB7XG4gIGlmIChwbGF5ZXIubG9jYWwuc2NvcmUgIT0gbGFzdFNjb3JlLmxvY2FsKSB7XG4gICAgbGFzdFNjb3JlLmxvY2FsID0gcGxheWVyLmxvY2FsLnNjb3JlO1xuICAgIGxvY2FsUGxheWVyU2NvcmVFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllci5sb2NhbC5uaWNrbmFtZX06ICR7cGxheWVyLmxvY2FsLnNjb3JlfWA7XG4gIH1cbiAgaWYgKHBsYXllci5yZW1vdGUuc2NvcmUgIT0gbGFzdFNjb3JlLnJlbW90ZSkge1xuICAgIGxhc3RTY29yZS5yZW1vdGUgPSBwbGF5ZXIucmVtb3RlLnNjb3JlO1xuICAgIHJlbW90ZVBsYXllclNjb3JlRWxlbWVudC5pbm5lclRleHQgPSBgJHtwbGF5ZXIucmVtb3RlLm5pY2tuYW1lfTogJHtwbGF5ZXIucmVtb3RlLnNjb3JlfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobG9jYWxUdXJuKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sb2dvXCIpLmFmdGVyKG5vd1R1cm4pO1xuICBsb2NhbFBsYXllckVsZW1lbnQuaW5uZXJUZXh0ID0gcGxheWVyLmxvY2FsLm5pY2tuYW1lO1xuICBsb2NhbFBsYXllckVsZW1lbnQuc3R5bGUuY29sb3IgPSBwbGF5ZXIubG9jYWwuY29sb3I7XG5cbiAgcmVtb3RlUGxheWVyRWxlbWVudC5pbm5lclRleHQgPSBwbGF5ZXIucmVtb3RlLm5pY2tuYW1lO1xuICByZW1vdGVQbGF5ZXJFbGVtZW50LnN0eWxlLmNvbG9yID0gcGxheWVyLnJlbW90ZS5jb2xvcjtcbiAgdHVybkNvbnRhaW5lci5hcHBlbmQobG9jYWxUdXJuID8gbG9jYWxQbGF5ZXJFbGVtZW50IDogcmVtb3RlUGxheWVyRWxlbWVudCk7XG5cbiAgLy9wbGF5ZXJzIHNjb3JlXG4gIGxvY2FsUGxheWVyU2NvcmVFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllci5sb2NhbC5uaWNrbmFtZX06IDBgO1xuICByZW1vdGVQbGF5ZXJTY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLnJlbW90ZS5uaWNrbmFtZX06IDBgO1xuICBsb2NhbFBsYXllclNjb3JlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHBsYXllci5sb2NhbC5jb2xvcjtcbiAgcmVtb3RlUGxheWVyU2NvcmVFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gcGxheWVyLnJlbW90ZS5jb2xvcjtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChwbGF5ZXJTY29yZVdyYXBwZXIpO1xufVxuIiwibGV0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXG4gIFwid3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4pO1xuXG5sZXQgb25zdGFydCA9IGZ1bmN0aW9uIChzb2NrZXQpIHt9O1xubGV0IHBsYXllclJlcXVlc3QgPSBmdW5jdGlvbiAoY29sb3IsIG5pY2spIHt9O1xubGV0IHBsYWNlID0gZnVuY3Rpb24gKHBvcykge307XG5sZXQgY2hhbmdlVHVybiA9IGZ1bmN0aW9uICh0dXJuKSB7fTtcblxuZXhwb3J0IGxldCBnYW1lU2VydmVyID0ge1xuICBvblN0YXJ0KGNhbGxiYWNrKSB7XG4gICAgb25zdGFydCA9IGNhbGxiYWNrO1xuICB9LFxuICBvblBsYXllclJlcXVlc3QoY2FsbGJhY2spIHtcbiAgICBwbGF5ZXJSZXF1ZXN0ID0gY2FsbGJhY2s7XG4gIH0sXG4gIGpvaW4oKSB7XG4gICAgc29ja2V0LnNlbmQoXCJqb2luXCIpO1xuICB9LFxuICBwbGFjZShwb3MpIHtcbiAgICBzb2NrZXQuc2VuZChgcGxhY2UgJHtwb3MueH0gJHtwb3MueX1gKTtcbiAgfSxcbiAgb25QbGFjZShjYWxsYmFjaykge1xuICAgIHBsYWNlID0gY2FsbGJhY2s7XG4gIH0sXG4gIG9uVHVybihjYWxsYmFjaykge1xuICAgIGNoYW5nZVR1cm4gPSBjYWxsYmFjaztcbiAgfSxcbn07XG5cbnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICBzb2NrZXQuc2VuZChcImNvblwiKTtcbn07XG5cbnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgbGV0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICBsZXQgY29tbWFuZCA9IG1lc3NhZ2Uuc3BsaXQoXCIgXCIpO1xuICBpZiAoY29tbWFuZFswXSA9PSBcInN0YXJ0XCIpIHtcbiAgICBvbnN0YXJ0KHNvY2tldCk7XG4gIH1cbiAgaWYgKGNvbW1hbmRbMF0gPT0gXCJwbGF5ZXJcIikge1xuICAgIHBsYXllclJlcXVlc3QoY29tbWFuZFsxXSwgY29tbWFuZFsyXSk7XG4gIH1cbiAgaWYgKGNvbW1hbmRbMF0gPT0gXCJwbGFjZVwiKSB7XG4gICAgcGxhY2UoeyB4OiBOdW1iZXIoY29tbWFuZFsxXSksIHk6IE51bWJlcihjb21tYW5kWzJdKSB9KTtcbiAgfVxuICBpZiAoY29tbWFuZFswXSA9PSBcInR1cm5cIikge1xuICAgIGNoYW5nZVR1cm4oY29tbWFuZFsxXSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgXCIuLi9jc3Mvd2VsY29tZS1wb3B1cC5jc3NcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2NhbnZhcy9jYW52YXMuanNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2ZXIgfSBmcm9tIFwiLi93ZWJzb2NrZXRcIjtcblxuY29uc3QgUkFORF9OSUNLTkFNRVMgPSBbXG4gIFwi0KnQsNGBX9Cx0Ytf0L3QsF/QtNCw0YfRg1wiLFxuICBcIlN1cGVyRG9taW5hdG9yXCIsXG4gIFwiUGxhY2Vob2xkZXJcIixcbiAgXCLQn9C70LXQudGB0YXQvtC70LTQtdGAXCIsXG4gIFwi0KfRgtC+LdGC0L5f0LPRgNGD0YHRgtC90L5cIixcbiAgXCLQl9CwX9GI0L5cIixcbiAgXCLQotCy0L7QtV/QuNC80Y9cIixcbiAgXCJQZXRyXCIsXG4gIFwi0J/QsNGA0LDQstC+0LfQuNC6X9GC0L7QvNCw0YFcIixcbiAgXCJBbHVrYXJkXCIsXG4gIFwi0JzQuNC70YvQuV/QutC40YHQuNC6XCIsXG4gIFwi0JTQvtCx0YDQvtC20LXQu9Cw0YLQtdC70YxcIixcbiAgXCLQkNCx0L7QvdC10L3RglwiLFxuXTtcblxuZnVuY3Rpb24gZ2V0UmFuZE5pY2soKSB7XG4gIHJldHVybiBSQU5EX05JQ0tOQU1FU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBSQU5EX05JQ0tOQU1FUy5sZW5ndGgpXTtcbn1cblxuLy9zY3JvcmUg0YHRh9C40YLQsNC10YLRgdGPINCyIHBhdGhGaW5kZXJcbmV4cG9ydCBsZXQgcGxheWVyID0ge1xuICBsb2NhbDoge1xuICAgIHNjb3JlOiAwLFxuICB9LFxuICByZW1vdGU6IHtcbiAgICBjb2xvcjogXCJwaW5rXCIsXG4gICAgbmlja25hbWU6IGdldFJhbmROaWNrKCksXG4gICAgc2NvcmU6IDAsXG4gIH0sXG59O1xuXG5sZXQgcG9wdXBGb3JtID0gY3JlYXRlRm9ybUVsZW1lbnQoKTtcbmxldCBwb3B1cCA9IGNyZWF0ZVBvcHVwRWxlbWVudChwb3B1cEZvcm0pO1xuXG4vL2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWRIYW5kbGVyKTtcbndpbmRvdy5vbmxvYWQgPSBsb2FkSGFuZGxlcjtcblxuZnVuY3Rpb24gbG9hZEhhbmRsZXIoKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvcHVwKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwid2VsY29tZS1wb3B1cF9zaG93blwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdlbGNvbWVGb3JtU3VibWl0KGV2ZW50KSB7XG4gIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWxjb21lLXBvcHVwX3Nob3duXCIpKSB7XG4gICAgcGxheWVyLmxvY2FsLmNvbG9yID0gcG9wdXBGb3JtLmNvbG9yLnZhbHVlO1xuICAgIHBsYXllci5sb2NhbC5uaWNrbmFtZSA9IHBvcHVwRm9ybS5uaWNrbmFtZS52YWx1ZTtcbiAgICBpZiAocGxheWVyLmxvY2FsLm5pY2tuYW1lID09IFwiXCIpXG4gICAgICBwbGF5ZXIubG9jYWwubmlja25hbWUgPSBwb3B1cEZvcm0ubmlja25hbWUucGxhY2Vob2xkZXI7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIndlbGNvbWUtcG9wdXBfc2hvd25cIik7XG4gICAgZ2FtZVNlcnZlci5qb2luKCk7XG4gICAgc3RhcnRHYW1lKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBwb3B1cC5yZW1vdmUoKSwgMTUwKTtcbiAgfVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRWxlbWVudCgpIHtcbiAgLy9mb3JtXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwX19mb3JtXCI7XG5cbiAgLy9mb3JtOiBuaWNrbmFtZSBzZWN0aW9uXG4gIGxldCBuaWNrTmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuaWNrTmFtZVNlY3Rpb24uY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwX19uaWNrbmFtZS1zZWN0aW9uXCI7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwX19uaWNrbmFtZS1sYWJlbFwiO1xuICBsYWJlbC5pbm5lckhUTUwgPSBg0KLQstC+0LUg0LjQvNGPOlxuICA8aW5wdXRcbiAgICBjbGFzcz1cIndlbGNvbWUtcG9wdXBfX25pY2tuYW1lLWZpZWxkXCJcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgbmFtZT1cIm5pY2tuYW1lXCJcbiAgICBwbGFjZWhvbGRlcj1cIiR7Z2V0UmFuZE5pY2soKX1cIlxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCJcbiAgLz5gO1xuICBuaWNrTmFtZVNlY3Rpb24uYXBwZW5kKGxhYmVsKTtcblxuICAvL2Zvcm06Y29sb3IgcGlja2VyXG4gIGxldCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29sb3JQaWNrZXIuY2xhc3NOYW1lID0gXCJjb2xvci1waWNrZXJcIjtcbiAgbGV0IGNvbG9ycyA9IFtcIiNlZTJiMmJcIiwgXCIjMGJiODcwXCIsIFwiIzBkYjFmMVwiLCBcIiNlOWE2ZGFcIiwgXCIjODMxNTgzXCJdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBpdGVtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBpdGVtLmNsYXNzTmFtZSA9IFwiY29sb3ItcGlja2VyX19pdGVtXCI7XG5cbiAgICBpdGVtSW5wdXQuY2xhc3NOYW1lID0gXCJjb2xvci1waWNrZXJfX2J1dHRvblwiO1xuICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgaXRlbUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb2xvclwiKTtcbiAgICBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgY29sb3JzW2ldKTtcbiAgICBpZiAoaSA9PSAwKSBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcblxuICAgIGl0ZW0uYXBwZW5kKGl0ZW1JbnB1dCk7XG4gICAgaXRlbUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tpXTtcbiAgICBjb2xvclBpY2tlci5hcHBlbmQoaXRlbSk7XG4gIH1cblxuICAvL2Zvcm06c3VibWl0XG4gIGxldCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtU3VibWl0LmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fc3VibWl0XCI7XG4gIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3VibWl0XCIpO1xuICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwi0JjQs9GA0LDRgtGMXCIpO1xuXG4gIC8vZm9ybSBmaWxsXG4gIGZvcm0uYXBwZW5kKG5pY2tOYW1lU2VjdGlvbik7XG4gIGZvcm0uYXBwZW5kKGNvbG9yUGlja2VyKTtcbiAgZm9ybS5hcHBlbmQoZm9ybVN1Ym1pdCk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB3ZWxjb21lRm9ybVN1Ym1pdCk7XG4gIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3B1cEVsZW1lbnQoZm9ybSkge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cFwiO1xuXG4gIC8vcG9wdXBIZWFkZXJcbiAgbGV0IHBvcHVwSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwb3B1cEhlYWRlci5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX3RpdGxlXCI7XG4gIHBvcHVwSGVhZGVyLmlubmVyVGV4dCA9IFwi0JLRhdC+0LQg0LIg0LjQs9GA0YNcIjtcblxuICAvL2ZpbmFsXG4gIGRpdi5hcHBlbmQocG9wdXBIZWFkZXIpO1xuICBkaXYuYXBwZW5kKGZvcm0pO1xuICByZXR1cm4gZGl2O1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2ZvbnRzLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi93ZWxjb21lLWZvcm0uanNcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=