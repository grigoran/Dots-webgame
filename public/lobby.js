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
}

function DotArr(size) {
  var arr = [];

  for (var i = 0; i < size.x; i++) {
    arr[i] = [];

    for (var j = 0; j < size.y; j++) {
      arr[i][j] = new Dot();
    }
  }

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
    dotArr.setColor(pos, color);
    var path = _pathFinder_js__WEBPACK_IMPORTED_MODULE_1__.pathFinder.findPath(pos);
    if (path.length > 0) _classPrivateFieldGet(this, _paths).push(path);
  };

  this.draw = function () {
    var color = "";

    for (var i = 0; i < _classPrivateFieldGet(this, _size).x; i++) {
      for (var j = 0; j < _classPrivateFieldGet(this, _size).y; j++) {
        color = dotArr.getColor({
          x: i,
          y: j
        });
        if (color == "") continue;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = color;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(i * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, j * _classPrivateFieldGet(this, _step) + _classPrivateFieldGet(this, _step) / 2, _classPrivateFieldGet(this, _dotRadius), 0, TWO_PI);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();
      }
    } //draw paths


    var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _paths)),
        _step2;

    try {
      for (_iterator.s(); !(_step2 = _iterator.n()).done;) {
        var path = _step2.value;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = dotArr.getColor(path[0]);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 3;

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
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
};

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
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = "black";
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 2;
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke(path);
      _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.draw();
    };
  }

  _createClass(Field, [{
    key: "placeDot",
    value: function placeDot(pos, color) {
      var newPos = this.getMeshCoord(pos);
      _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.push(newPos, color);
      _websocket_js__WEBPACK_IMPORTED_MODULE_2__.gameServer.place(newPos);
    } //use for place dot from remote server pos-mesh coord

  }, {
    key: "placeDotDirect",
    value: function placeDotDirect(pos, color) {
      _dots_js__WEBPACK_IMPORTED_MODULE_1__.dots.push(pos, color);
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

function nextPos(dir, pos) {
  var newPos = {};

  switch (dir) {
    case 0:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x + 1, pos.y);

    case 1:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x + 1, pos.y + 1);

    case 2:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y + 1);

    case 3:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x - 1, pos.y + 1);

    case 4:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x - 1, pos.y);

    case 5:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x - 1, pos.y - 1);

    case 6:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y - 1);

    case 7:
      return new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x + 1, pos.y - 1);
  }
}

var findPath = function findPath(pos) {
  startPos = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y);
  color = dotArr.getColor(pos);
  candidatePaths = [];
  recurcivePath(startPos, [], startPos);

  if (candidatePaths.length > 0) {
    var pathIndex = maxAreaIndex(candidatePaths);
    var result = [];

    if (pathIndex >= 0) {
      result = _toConsumableArray(candidatePaths[pathIndex]);
      markDotsAsConnected(result);
    }

    return result;
  } else return [];
};
/*В этом алгоритме присутствует проверка 3х последних эллементво во избеании замыкания*/


function recurcivePath(pos, path, prevPos) {
  var next;

  if (path.length != 0 && pos.x == startPos.x && pos.y == startPos.y) {
    candidatePaths.push(_toConsumableArray(path));
    return;
  }

  path.push(pos);

  for (var i = 0; i < 8; i++) {
    next = nextPos(i, pos);
    if (next.x == prevPos.x && next.y == prevPos.y) continue;

    if (dotArr.getColor(next) == color && !dotArr.isConnected(next) && !findInLastFour(path, next)) {
      recurcivePath(next, _toConsumableArray(path), pos);
    }
  }
}

function findInLastFour(path, pos) {
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
}

var PathFinder = function PathFinder() {
  this.assignArr = function (arr) {
    dotArr = arr;
  };

  this.findPath = findPath;
};

var pathFinder = new PathFinder();

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
  console.log(_welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.remote);
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
_websocket_js__WEBPACK_IMPORTED_MODULE_6__.gameServer.onPlace(function (pos) {
  console.log(pos);
  _field_js__WEBPACK_IMPORTED_MODULE_3__.field.placeDotDirect(pos, _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.remote.color);
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
      document.addEventListener("mousemove", getMouseHandler());
      document.addEventListener("click", function () {
        _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.click();
        _field_js__WEBPACK_IMPORTED_MODULE_3__.field.placeDot(mousePos, _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.local.color);
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
  }
};

socket.onopen = function (e) {
  socket.onmessage = function (event) {
    var message = event.data;
    var command = message.split(" ");
    console.log(message);

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
  };
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



var player = {
  local: {},
  remote: {}
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
  label.innerHTML = "\u0422\u0432\u043E\u0435 \u0438\u043C\u044F:\n  <input\n    class=\"welcome-popup__nickname-field\"\n    type=\"text\"\n    name=\"nickname\"\n    placeholder=\"\u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440\"\n    autocomplete=\"off\"\n    autofocus=\"autofocus\"\n  />";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvY3Vyc29yLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL2RvdHMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvaW5pdC1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvcGF0aEZpbmRlci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9zdGFnZXMvZmllbGQtYXBwZWFyLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3N0YWdlcy9nYW1lLWxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL2dhbWUtc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL3N0YWdlLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlbGNvbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3Mvd2VsY29tZS1wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG90c3dlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvaW5kZXguanMiXSwibmFtZXMiOlsic3RhcnRHYW1lIiwibGFzdFRpbWUiLCJEYXRlIiwibm93IiwiY3R4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJTdGFnZSIsImN1cnJlbnRTdGFnZSIsImdldE5leHQiLCJpbml0IiwiZ2FtZUxvYWRTdGFnZSIsIkdhbWVMb2FkaW5nIiwiZmllbGRBcHBlYXJTdGFnZSIsIkZpZWxkQXBwZWFyIiwiZ2FtZVN0YWdlIiwiR2FtZVN0YWdlIiwic2V0TmV4dCIsIm5vd1RpbWUiLCJkZWx0YVRpbWUiLCJjYW52YXMiLCJ1cGRhdGUiLCJub3dSYWRpdXMiLCJhbmltYXRpb25Qcm9ncmVzcyIsImFuaW1hdGlvblNwZWVkIiwiZ2V0UHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInByb2ciLCJDdXJzb3IiLCJwb3MiLCJWZWN0b3IiLCJ0YXJnZXQiLCJyYWRpdXMiLCJzcGVlZCIsImRyYXciLCJwbGF5ZXIiLCJjdXJzb3IiLCJ4IiwieSIsIk1hdGgiLCJQSSIsImNsaWNrIiwiVFdPX1BJIiwiRG90IiwiY29sb3IiLCJjb25uZWN0ZWQiLCJEb3RBcnIiLCJzaXplIiwiYXJyIiwiaSIsImoiLCJnZXRDb2xvciIsInNldENvbG9yIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZG90QXJyIiwiRG90cyIsInN0ZXAiLCJwYXRoRmluZGVyIiwicHVzaCIsInBhdGgiLCJsZW5ndGgiLCJkb3RzIiwibWFwIiwidmFsIiwiYmVnIiwiZW5kIiwicmV0IiwiRmllbGQiLCJQYXRoMkQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3RmllbGQiLCJuZXdQb3MiLCJnZXRNZXNoQ29vcmQiLCJnYW1lU2VydmVyIiwiZmxvb3IiLCJtZXNoUG9zIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0Iiwic2F2ZSIsInN0YXJ0UG9zIiwiY2FuZGlkYXRlUGF0aHMiLCJuZXh0UG9zIiwiZGlyIiwiZmluZFBhdGgiLCJyZWN1cmNpdmVQYXRoIiwicGF0aEluZGV4IiwibWF4QXJlYUluZGV4IiwicmVzdWx0IiwibWFya0RvdHNBc0Nvbm5lY3RlZCIsInByZXZQb3MiLCJuZXh0IiwiZmluZEluTGFzdEZvdXIiLCJwYXRocyIsIm5vd0FyZWEiLCJtYXhOb2RlcyIsImluc2lkZU5vZGVzIiwiaW5kZXhlcyIsImFyZWFzIiwiZmluZEFyZWEiLCJtaW5BcmVhIiwicmVzSW5kZXgiLCJhcmVhIiwiUGF0aEZpbmRlciIsImFzc2lnbkFyciIsIm9mZnNldCIsIm9uQ29tcGxldGUiLCJsb2FkZWQiLCJzb2NrZXQiLCJzZW5kIiwibmljayIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsImFuZ2xlIiwic2luIiwiY29zIiwicGhhc2UiLCJhdGFuIiwibW91c2VQb3MiLCJnZXRNb3VzZUhhbmRsZXIiLCJyZWN0Iiwic2NhbGVYIiwic2NhbGVZIiwiZXZlbnQiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhZ2UiLCJhbGVydCIsIldlYlNvY2tldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsInBhdGhuYW1lIiwib25zdGFydCIsInBsYXllclJlcXVlc3QiLCJwbGFjZSIsIm9uU3RhcnQiLCJjYWxsYmFjayIsIm9uUGxheWVyUmVxdWVzdCIsImpvaW4iLCJvblBsYWNlIiwib25vcGVuIiwiZSIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXRhIiwiY29tbWFuZCIsInNwbGl0IiwiTnVtYmVyIiwibG9jYWwiLCJyZW1vdGUiLCJwb3B1cEZvcm0iLCJjcmVhdGVGb3JtRWxlbWVudCIsInBvcHVwIiwiY3JlYXRlUG9wdXBFbGVtZW50Iiwib25sb2FkIiwibG9hZEhhbmRsZXIiLCJib2R5IiwiYXBwZW5kIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwid2VsY29tZUZvcm1TdWJtaXQiLCJjb250YWlucyIsInZhbHVlIiwibmlja25hbWUiLCJwbGFjZWhvbGRlciIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibmlja05hbWVTZWN0aW9uIiwibGFiZWwiLCJpbm5lckhUTUwiLCJjb2xvclBpY2tlciIsImNvbG9ycyIsIml0ZW0iLCJpdGVtSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZvcm1TdWJtaXQiLCJkaXYiLCJwb3B1cEhlYWRlciIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQzFCQyxVQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFYO0FBQ0FDLHVEQUFBO0FBQ0FDLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0Q7QUFDRCxJQUFJTCxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFmOztBQUVBSSx3RUFBQSxHQUE2QixZQUFNO0FBQ2pDQyxjQUFZLEdBQUdBLFlBQVksQ0FBQ0MsT0FBYixFQUFmO0FBQ0FELGNBQVksQ0FBQ0UsSUFBYjtBQUNBTiwwREFBQTtBQUNELENBSkQsQyxDQU1BOzs7QUFDQSxJQUFJTyxhQUFhLEdBQUcsSUFBSUMsZ0VBQUosRUFBcEI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxJQUFJQyxnRUFB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QUwsQ0FBc0IsUUFBdEIsRUFBZ0NvQyxpQkFBaEM7QUFDQSxTQUFPUSxJQUFQO0FBQ0Q7O0FBRUQsU0FBU2Ysa0JBQVQsQ0FBNEJlLElBQTVCLEVBQWtDO0FBQ2hDLE1BQUljLEdBQUcsR0FBR2hILFFBQVEsQ0FBQ21HLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBYSxLQUFHLENBQUNaLFNBQUosR0FBZ0IsZUFBaEIsQ0FGZ0MsQ0FJaEM7O0FBQ0EsTUFBSWEsV0FBVyxHQUFHakgsUUFBUSxDQUFDbUcsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBYyxhQUFXLENBQUNiLFNBQVosR0FBd0Isc0JBQXhCO0FBQ0FhLGFBQVcsQ0FBQ0MsU0FBWixHQUF3QixhQUF4QixDQVBnQyxDQVNoQzs7QUFDQUYsS0FBRyxDQUFDekIsTUFBSixDQUFXMEIsV0FBWDtBQUNBRCxLQUFHLENBQUN6QixNQUFKLENBQVdXLElBQVg7QUFDQSxTQUFPYyxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUMxR0Q7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsImZpbGUiOiJsb2JieS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcblxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvc3RhZ2UuanNcIjtcbmltcG9ydCB7IEdhbWVMb2FkaW5nIH0gZnJvbSBcIi4vc3RhZ2VzL2dhbWUtbG9hZGluZy5qc1wiO1xuaW1wb3J0IHsgRmllbGRBcHBlYXIgfSBmcm9tIFwiLi9zdGFnZXMvZmllbGQtYXBwZWFyLmpzXCI7XG5pbXBvcnQgeyBHYW1lU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvZ2FtZS1zdGFnZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBsYXN0VGltZSA9IERhdGUubm93KCk7XG4gIGN0eC5zYXZlKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5sZXQgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG5TdGFnZS5wcm90b3R5cGUub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgY3VycmVudFN0YWdlID0gY3VycmVudFN0YWdlLmdldE5leHQoKTtcbiAgY3VycmVudFN0YWdlLmluaXQoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8vaW5pdCBnYW1lIHN0YWdlc1xubGV0IGdhbWVMb2FkU3RhZ2UgPSBuZXcgR2FtZUxvYWRpbmcoKTtcbmxldCBmaWVsZEFwcGVhclN0YWdlID0gbmV3IEZpZWxkQXBwZWFyKCk7XG5sZXQgZ2FtZVN0YWdlID0gbmV3IEdhbWVTdGFnZSgpO1xuXG4vL2dhbWUgc3RhZ2VzIGRlcGVuZGVuY2VzXG5sZXQgY3VycmVudFN0YWdlID0gZ2FtZUxvYWRTdGFnZTtcbmdhbWVMb2FkU3RhZ2Uuc2V0TmV4dChmaWVsZEFwcGVhclN0YWdlKTtcbmZpZWxkQXBwZWFyU3RhZ2Uuc2V0TmV4dChnYW1lU3RhZ2UpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgbGV0IG5vd1RpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgZGVsdGFUaW1lID0gKG5vd1RpbWUgLSBsYXN0VGltZSkgLyAxMDAwO1xuICBsYXN0VGltZSA9IG5vd1RpbWU7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3VycmVudFN0YWdlLnVwZGF0ZShkZWx0YVRpbWUpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5cbmxldCBub3dSYWRpdXMgPSAwO1xubGV0IGFuaW1hdGlvblByb2dyZXNzID0gMTAwO1xubGV0IGFuaW1hdGlvblNwZWVkID0gNTAwOyAvL3BlcmNlbnQgcGVyIHNlY29uZFxuXG4vL2NhbGN1bGF0ZSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEgZGVwZW5kZW50IG9uIGFuaW1hdGlvbiBQcm9ncmVzcygwOjEwMCk7XG5mdW5jdGlvbiBnZXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICBsZXQgcHJvZyA9IHByb2dyZXNzIC8gMTAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZnVuY3Rpb24gQ3Vyc29yKCkge1xuICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoKTtcbiAgdGhpcy50YXJnZXQgPSBuZXcgVmVjdG9yKCk7XG4gIHRoaXMucmFkaXVzID0gMTA7XG4gIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzO1xuICB0aGlzLnNwZWVkID0gMTA7XG4gIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBsYXllci5sb2NhbC5jb2xvcjtcbiAgICBjdHguYXJjKGN1cnNvci5wb3MueCwgY3Vyc29yLnBvcy55LCBub3dSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbCgpO1xuICB9O1xuICB0aGlzLmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGFuaW1hdGlvblByb2dyZXNzID0gMDtcbiAgICBub3dSYWRpdXMgPSAwO1xuICB9O1xuICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YVRpbWUpIHtcbiAgICBpZiAoYW5pbWF0aW9uUHJvZ3Jlc3MgPCAxMDApIHtcbiAgICAgIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzICogZ2V0UHJvZ3Jlc3MoYW5pbWF0aW9uUHJvZ3Jlc3MpO1xuICAgICAgYW5pbWF0aW9uUHJvZ3Jlc3MgKz0gZGVsdGFUaW1lICogYW5pbWF0aW9uU3BlZWQ7XG4gICAgfSBlbHNlIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzO1xuICB9O1xufVxuXG5leHBvcnQgbGV0IGN1cnNvciA9IG5ldyBDdXJzb3IoKTtcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IHBhdGhGaW5kZXIgfSBmcm9tIFwiLi9wYXRoRmluZGVyLmpzXCI7XG5cbmNvbnN0IFRXT19QSSA9IDIgKiBNYXRoLlBJO1xuXG5mdW5jdGlvbiBEb3QoKSB7XG4gIHRoaXMuY29sb3IgPSBcIlwiO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBEb3RBcnIoc2l6ZSkge1xuICBsZXQgYXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS54OyBpKyspIHtcbiAgICBhcnJbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemUueTsgaisrKSB7XG4gICAgICBhcnJbaV1bal0gPSBuZXcgRG90KCk7XG4gICAgfVxuICB9XG4gIHRoaXMuZ2V0Q29sb3IgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIGFycltwb3MueF1bcG9zLnldLmNvbG9yO1xuICB9O1xuICB0aGlzLnNldENvbG9yID0gZnVuY3Rpb24gKHBvcywgY29sb3IpIHtcbiAgICBhcnJbcG9zLnhdW3Bvcy55XS5jb2xvciA9IGNvbG9yO1xuICB9O1xuICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgYXJyW3Bvcy54XVtwb3MueV0uY29ubmVjdGVkID0gdHJ1ZTtcbiAgfTtcbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gYXJyW3Bvcy54XVtwb3MueV0uY29ubmVjdGVkO1xuICB9O1xufVxuXG5sZXQgZG90QXJyID0ge307XG5cbmNsYXNzIERvdHMge1xuICAjc3RlcCA9IDA7XG4gICNzaXplID0ge307XG4gICNkb3RSYWRpdXMgPSA4O1xuICAjcGF0aHMgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKHNpemUsIHN0ZXApIHtcbiAgICAgIHRoaXMuI3N0ZXAgPSBzdGVwO1xuICAgICAgdGhpcy4jc2l6ZSA9IHNpemU7XG4gICAgICBkb3RBcnIgPSBuZXcgRG90QXJyKHNpemUpO1xuICAgICAgcGF0aEZpbmRlci5hc3NpZ25BcnIoZG90QXJyKTtcbiAgICB9O1xuICAgIHRoaXMucHVzaCA9IGZ1bmN0aW9uIChwb3MsIGNvbG9yKSB7XG4gICAgICBkb3RBcnIuc2V0Q29sb3IocG9zLCBjb2xvcik7XG4gICAgICBsZXQgcGF0aCA9IHBhdGhGaW5kZXIuZmluZFBhdGgocG9zKTtcbiAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHRoaXMuI3BhdGhzLnB1c2gocGF0aCk7XG4gICAgfTtcbiAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY29sb3IgPSBcIlwiO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNzaXplLng7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI3NpemUueTsgaisrKSB7XG4gICAgICAgICAgY29sb3IgPSBkb3RBcnIuZ2V0Q29sb3IoeyB4OiBpLCB5OiBqIH0pO1xuICAgICAgICAgIGlmIChjb2xvciA9PSBcIlwiKSBjb250aW51ZTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICBpICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgaiAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMixcbiAgICAgICAgICAgIHRoaXMuI2RvdFJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBUV09fUElcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vZHJhdyBwYXRoc1xuICAgICAgZm9yIChsZXQgcGF0aCBvZiB0aGlzLiNwYXRocykge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGRvdEFyci5nZXRDb2xvcihwYXRoWzBdKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIGZvciAobGV0IHBvcyBvZiBwYXRoKSB7XG4gICAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgIHBvcy54ICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgcG9zLnkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGxldCBkb3RzID0gbmV3IERvdHMoKTtcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IGRvdHMgfSBmcm9tIFwiLi9kb3RzLmpzXCI7XG5pbXBvcnQgeyBnYW1lU2VydmVyIH0gZnJvbSBcIi4uL3dlYnNvY2tldC5qc1wiO1xuXG5mdW5jdGlvbiBtYXAodmFsLCBiZWcsIGVuZCkge1xuICBsZXQgcmV0ID0gdmFsID4gZW5kID8gZW5kIDogdmFsO1xuICByZXQgPSByZXQgPCBiZWcgPyBiZWcgOiByZXQ7XG4gIHJldHVybiByZXQ7XG59XG5cbmNsYXNzIEZpZWxkIHtcbiAgI3N0ZXAgPSAwO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL9Cg0LDQt9C80LXRgCDQv9C+0LvRj1xuICAgIHRoaXMuc2l6ZSA9IHtcbiAgICAgIHg6IDE1LFxuICAgICAgeTogMTUsXG4gICAgfTtcblxuICAgIGxldCBwYXRoID0gbmV3IFBhdGgyRCgpOyAvL9Cf0YPRgtGMINC00LvRjyDRgNC40YHQvtCy0LDQvdC40Y8g0L/QvtC70Y9cbiAgICB0aGlzLiNzdGVwID0gY2FudmFzLndpZHRoIC8gdGhpcy5zaXplLng7IC8v0YjQsNCzINGB0LXRgtC60LhcblxuICAgIC8v0YDQuNGB0YPQtdC8INGB0LXRgtC60YNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZS54OyBpKyspIHtcbiAgICAgIHBhdGgubW92ZVRvKGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsIDApO1xuICAgICAgcGF0aC5saW5lVG8oaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMiwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplLnk7IGkrKykge1xuICAgICAgcGF0aC5tb3ZlVG8oMCwgaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMik7XG4gICAgICBwYXRoLmxpbmVUbyhjYW52YXMud2lkdGgsIGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIpO1xuICAgIH1cblxuICAgIGRvdHMuaW5pdCh0aGlzLnNpemUsIHRoaXMuI3N0ZXApO1xuXG4gICAgLy/RhNGD0L3QutGG0LjRjyDRgNC40YHQvtCy0LDQvdC40Y8g0L/QvtC70Y9cbiAgICB0aGlzLmRyYXdGaWVsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgY3R4LnN0cm9rZShwYXRoKTtcbiAgICAgIGRvdHMuZHJhdygpO1xuICAgIH07XG4gIH1cbiAgcGxhY2VEb3QocG9zLCBjb2xvcikge1xuICAgIGxldCBuZXdQb3MgPSB0aGlzLmdldE1lc2hDb29yZChwb3MpO1xuICAgIGRvdHMucHVzaChuZXdQb3MsIGNvbG9yKTtcbiAgICBnYW1lU2VydmVyLnBsYWNlKG5ld1Bvcyk7XG4gIH1cbiAgLy91c2UgZm9yIHBsYWNlIGRvdCBmcm9tIHJlbW90ZSBzZXJ2ZXIgcG9zLW1lc2ggY29vcmRcbiAgcGxhY2VEb3REaXJlY3QocG9zLCBjb2xvcikge1xuICAgIGRvdHMucHVzaChwb3MsIGNvbG9yKTtcbiAgfVxuICBnZXRNZXNoQ29vcmQocG9zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG1hcChNYXRoLmZsb29yKHBvcy54IC8gdGhpcy4jc3RlcCksIDAsIHRoaXMuc2l6ZS54IC0gMSksXG4gICAgICB5OiBtYXAoTWF0aC5mbG9vcihwb3MueSAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueSAtIDEpLFxuICAgIH07XG4gIH1cbiAgZ2V0VGFyZ2V0Q29vcmQocG9zKSB7XG4gICAgbGV0IG1lc2hQb3MgPSB7fTtcbiAgICBtZXNoUG9zLnggPSBtYXAoTWF0aC5mbG9vcihwb3MueCAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueCAtIDEpO1xuICAgIG1lc2hQb3MueSA9IG1hcChNYXRoLmZsb29yKHBvcy55IC8gdGhpcy4jc3RlcCksIDAsIHRoaXMuc2l6ZS55IC0gMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG1lc2hQb3MueCAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMixcbiAgICAgIHk6IG1lc2hQb3MueSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMixcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiIsImV4cG9ydCBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXNcIik7XG5leHBvcnQgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmN0eC5zYXZlKCk7XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3IuanNcIjtcblxubGV0IGRvdEFyciA9IHt9O1xubGV0IHN0YXJ0UG9zID0gbmV3IFZlY3RvcigpO1xubGV0IGNvbG9yID0gXCJcIjtcbmxldCBjYW5kaWRhdGVQYXRocyA9IFtdO1xuXG5mdW5jdGlvbiBuZXh0UG9zKGRpciwgcG9zKSB7XG4gIGxldCBuZXdQb3MgPSB7fTtcbiAgc3dpdGNoIChkaXIpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcihwb3MueCArIDEsIHBvcy55KTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcihwb3MueCArIDEsIHBvcy55ICsgMSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IocG9zLngsIHBvcy55ICsgMSk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IocG9zLnggLSAxLCBwb3MueSArIDEpO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yKHBvcy54IC0gMSwgcG9zLnkpO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yKHBvcy54IC0gMSwgcG9zLnkgLSAxKTtcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcihwb3MueCwgcG9zLnkgLSAxKTtcbiAgICBjYXNlIDc6XG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcihwb3MueCArIDEsIHBvcy55IC0gMSk7XG4gIH1cbn1cblxubGV0IGZpbmRQYXRoID0gZnVuY3Rpb24gKHBvcykge1xuICBzdGFydFBvcyA9IG5ldyBWZWN0b3IocG9zLngsIHBvcy55KTtcbiAgY29sb3IgPSBkb3RBcnIuZ2V0Q29sb3IocG9zKTtcbiAgY2FuZGlkYXRlUGF0aHMgPSBbXTtcbiAgcmVjdXJjaXZlUGF0aChzdGFydFBvcywgW10sIHN0YXJ0UG9zKTtcbiAgaWYgKGNhbmRpZGF0ZVBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgcGF0aEluZGV4ID0gbWF4QXJlYUluZGV4KGNhbmRpZGF0ZVBhdGhzKTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgaWYgKHBhdGhJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQgPSBbLi4uY2FuZGlkYXRlUGF0aHNbcGF0aEluZGV4XV07XG4gICAgICBtYXJrRG90c0FzQ29ubmVjdGVkKHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSByZXR1cm4gW107XG59O1xuXG4vKtCSINGN0YLQvtC8INCw0LvQs9C+0YDQuNGC0LzQtSDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIg0L/RgNC+0LLQtdGA0LrQsCAz0YUg0L/QvtGB0LvQtdC00L3QuNGFINGN0LvQu9C10LzQtdC90YLQstC+INCy0L4g0LjQt9Cx0LXQsNC90LjQuCDQt9Cw0LzRi9C60LDQvdC40Y8qL1xuZnVuY3Rpb24gcmVjdXJjaXZlUGF0aChwb3MsIHBhdGgsIHByZXZQb3MpIHtcbiAgbGV0IG5leHQ7XG4gIGlmIChwYXRoLmxlbmd0aCAhPSAwICYmIHBvcy54ID09IHN0YXJ0UG9zLnggJiYgcG9zLnkgPT0gc3RhcnRQb3MueSkge1xuICAgIGNhbmRpZGF0ZVBhdGhzLnB1c2goWy4uLnBhdGhdKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcGF0aC5wdXNoKHBvcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgbmV4dCA9IG5leHRQb3MoaSwgcG9zKTtcbiAgICBpZiAobmV4dC54ID09IHByZXZQb3MueCAmJiBuZXh0LnkgPT0gcHJldlBvcy55KSBjb250aW51ZTtcbiAgICBpZiAoXG4gICAgICBkb3RBcnIuZ2V0Q29sb3IobmV4dCkgPT0gY29sb3IgJiZcbiAgICAgICFkb3RBcnIuaXNDb25uZWN0ZWQobmV4dCkgJiZcbiAgICAgICFmaW5kSW5MYXN0Rm91cihwYXRoLCBuZXh0KVxuICAgICkge1xuICAgICAgcmVjdXJjaXZlUGF0aChuZXh0LCBbLi4ucGF0aF0sIHBvcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbkxhc3RGb3VyKHBhdGgsIHBvcykge1xuICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGlmIChwb3MueCA9PSBwYXRoW2ldLnggJiYgcG9zLnkgPT0gcGF0aFtpXS55KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtYXhBcmVhSW5kZXgocGF0aHMpIHtcbiAgbGV0IG5vd0FyZWEgPSAwO1xuICBsZXQgbWF4Tm9kZXMgPSAwO1xuICBsZXQgaW5zaWRlTm9kZXMgPSAwO1xuICBsZXQgaW5kZXhlcyA9IFtdO1xuICBsZXQgYXJlYXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgIG5vd0FyZWEgPSBmaW5kQXJlYShwYXRoc1tpXSk7XG4gICAgaWYgKG5vd0FyZWEgPD0gMCkgY29udGludWU7XG4gICAgaW5zaWRlTm9kZXMgPSBub3dBcmVhIC0gcGF0aHNbaV0ubGVuZ3RoIC8gMiArIDE7IC8v0YTQvtGA0LzRg9C70LAg0L/QuNC60LBcbiAgICBpZiAoaW5zaWRlTm9kZXMgPD0gMCkgY29udGludWU7XG4gICAgaWYgKGluc2lkZU5vZGVzID4gbWF4Tm9kZXMpIHtcbiAgICAgIG1heE5vZGVzID0gaW5zaWRlTm9kZXM7XG4gICAgICBpbmRleGVzID0gW2ldO1xuICAgICAgYXJlYXMgPSBbbm93QXJlYV07XG4gICAgfSBlbHNlIGlmIChpbnNpZGVOb2RlcyA9PSBtYXhOb2Rlcykge1xuICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgYXJlYXMucHVzaChub3dBcmVhKTtcbiAgICB9XG4gIH1cblxuICBpZiAobWF4Tm9kZXMgPT0gMCkgcmV0dXJuIC0xO1xuICBpZiAoaW5kZXhlcy5sZW5ndGggPCAxKSByZXR1cm4gLTE7XG4gIGxldCBtaW5BcmVhID0gYXJlYXNbMF07XG4gIGxldCByZXNJbmRleCA9IGluZGV4ZXNbMF07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgaW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcmVhc1tpXSA8IG1pbkFyZWEpIHtcbiAgICAgIHJlc0luZGV4ID0gaW5kZXhlc1tpXTtcbiAgICAgIG1pbkFyZWEgPSBhcmVhc1tpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc0luZGV4O1xufVxuXG5mdW5jdGlvbiBmaW5kQXJlYShwYXRoKSB7XG4gIC8v0YTQvtGA0LzRg9C70LAg0JPQsNGD0YHRgdCwXG4gIGxldCBhcmVhID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJlYSArPSAocGF0aFtpXS54ICogcGF0aFsoaSArIDEpICUgcGF0aC5sZW5ndGhdLnkpIC8gMjtcbiAgICBhcmVhIC09IChwYXRoWyhpICsgMSkgJSBwYXRoLmxlbmd0aF0ueCAqIHBhdGhbaV0ueSkgLyAyO1xuICB9XG4gIHJldHVybiBhcmVhO1xufVxuXG5mdW5jdGlvbiBtYXJrRG90c0FzQ29ubmVjdGVkKHBhdGgpIHtcbiAgZm9yIChsZXQgcG9zIG9mIHBhdGgpIHtcbiAgICBkb3RBcnIuY29ubmVjdChwb3MpO1xuICB9XG59XG5cbmxldCBQYXRoRmluZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFzc2lnbkFyciA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICBkb3RBcnIgPSBhcnI7XG4gIH07XG4gIHRoaXMuZmluZFBhdGggPSBmaW5kUGF0aDtcbn07XG5leHBvcnQgbGV0IHBhdGhGaW5kZXIgPSBuZXcgUGF0aEZpbmRlcigpO1xuIiwiaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZS5qc1wiO1xuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSBcIi4uL2ZpZWxkLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZEFwcGVhciBleHRlbmRzIFN0YWdlIHtcbiAgc3RlcCA9IGNhbnZhcy53aWR0aCAvIGZpZWxkLnNpemUueDtcbiAgb2Zmc2V0ID0gMDtcbiAgc3BlZWQgPSBjYW52YXMuaGVpZ2h0ICogNDtcbiAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgdGhpcy5vZmZzZXQgKz0gZGVsdGFUaW1lICogdGhpcy5zcGVlZDtcbiAgICBpZiAodGhpcy5vZmZzZXQgPj0gY2FudmFzLmhlaWdodCkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC5zaXplLng7IGkrKykge1xuICAgICAgY3R4Lm1vdmVUbyhpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMiwgMCk7XG4gICAgICBjdHgubGluZVRvKGkgKiB0aGlzLnN0ZXAgKyB0aGlzLnN0ZXAgLyAyLCB0aGlzLm9mZnNldCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQuc2l6ZS55OyBpKyspIHtcbiAgICAgIGN0eC5tb3ZlVG8oMCwgaSAqIHRoaXMuc3RlcCArIHRoaXMuc3RlcCAvIDIpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLm9mZnNldCwgaSAqIHRoaXMuc3RlcCArIHRoaXMuc3RlcCAvIDIpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2UuanNcIjtcblxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4uLy4uL3dlbGNvbWUtZm9ybS5qc1wiO1xuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0LmpzXCI7XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZ2FtZVNlcnZlci5vblN0YXJ0KChzb2NrZXQpID0+IHtcbiAgc29ja2V0LnNlbmQoYHBsYXllciAke3BsYXllci5sb2NhbC5jb2xvcn0gJHtwbGF5ZXIubG9jYWwubmlja25hbWV9YCk7XG4gIGxvYWRlZCA9IHRydWU7XG59KTtcblxuZ2FtZVNlcnZlci5vblBsYXllclJlcXVlc3QoKGNvbG9yLCBuaWNrKSA9PiB7XG4gIHBsYXllci5yZW1vdGUuY29sb3IgPSBjb2xvcjtcbiAgcGxheWVyLnJlbW90ZS5uaWNrbmFtZSA9IG5pY2s7XG4gIGNvbnNvbGUubG9nKHBsYXllci5yZW1vdGUpO1xufSk7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTG9hZGluZyBleHRlbmRzIFN0YWdlIHtcbiAgI3NjcmVlbldpZHRoID0gY2FudmFzLndpZHRoO1xuICAjc2NyZWVuSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgI3JhZGl1cyA9IDc7XG4gICN0b3RhbFNoYXBlUmFkaXVzID0gNzA7XG4gICNjaXJjbGVDb3VudCA9IDU7XG4gICNzcGVlZCA9IDE7XG4gICNvZmZzZXQgPSAwO1xuICAjbm93QWxwaGEgPSAxO1xuXG4gICNnZXRBbmdsZShwaGFzZSkge1xuICAgIHJldHVybiA0ICogKE1hdGguYXRhbigocGhhc2UgJSAyKSAtIDEpICsgTWF0aC5QSSAqIDQpO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBwbGF5ZXIubG9jYWwuY29sb3I7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNjaXJjbGVDb3VudDsgKytpKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgYW5nbGUgPSB0aGlzLiNnZXRBbmdsZSh0aGlzLiNvZmZzZXQgKyBpICogMC4xKTtcbiAgICAgIGN0eC5hcmMoXG4gICAgICAgIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuI3RvdGFsU2hhcGVSYWRpdXMgKyB0aGlzLiNzY3JlZW5XaWR0aCAvIDIsXG4gICAgICAgIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuI3RvdGFsU2hhcGVSYWRpdXMgKyB0aGlzLiNzY3JlZW5IZWlnaHQgLyAyLFxuICAgICAgICB0aGlzLiNyYWRpdXMsXG4gICAgICAgIDAsXG4gICAgICAgIE1hdGguUEkgKiAyXG4gICAgICApO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgdGhpcy4jb2Zmc2V0ICs9IHRoaXMuI3NwZWVkICogZGVsdGFUaW1lO1xuICAgIGlmIChsb2FkZWQpIHtcbiAgICAgIGlmICh0aGlzLiNub3dBbHBoYSA+IDApIHRoaXMuI25vd0FscGhhIC09IHRoaXMuI3NwZWVkICogZGVsdGFUaW1lO1xuICAgICAgdGhpcy4jbm93QWxwaGEgPCAwXG4gICAgICAgID8gKGN0eC5nbG9iYWxBbHBoYSA9IDApXG4gICAgICAgIDogKGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuI25vd0FscGhhKTtcbiAgICAgIGlmICh0aGlzLiNub3dBbHBoYSA8PSAwKSB7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi8uLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4uLy4uL3dlbGNvbWUtZm9ybS5qc1wiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZS5qc1wiO1xuaW1wb3J0IHsgZmllbGQgfSBmcm9tIFwiLi4vZmllbGQuanNcIjtcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuLi92ZWN0b3IuanNcIjtcbmltcG9ydCB7IGN1cnNvciB9IGZyb20gXCIuLi9jdXJzb3IuanNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0LmpzXCI7XG5cbmxldCBtb3VzZVBvcyA9IG5ldyBWZWN0b3IoKTtcblxuZ2FtZVNlcnZlci5vblBsYWNlKChwb3MpID0+IHtcbiAgY29uc29sZS5sb2cocG9zKTtcbiAgZmllbGQucGxhY2VEb3REaXJlY3QocG9zLCBwbGF5ZXIucmVtb3RlLmNvbG9yKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRNb3VzZUhhbmRsZXIoKSB7XG4gIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBsZXQgc2NhbGVYID0gY2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgbGV0IHNjYWxlWSA9IGNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIG1vdXNlUG9zLnggPSAoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgbW91c2VQb3MueSA9IChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgR2FtZVN0YWdlIGV4dGVuZHMgU3RhZ2Uge1xuICBpbml0KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZ2V0TW91c2VIYW5kbGVyKCkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjdXJzb3IuY2xpY2soKTtcbiAgICAgIGZpZWxkLnBsYWNlRG90KG1vdXNlUG9zLCBwbGF5ZXIubG9jYWwuY29sb3IpO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICBmaWVsZC5kcmF3RmllbGQoKTtcblxuICAgIGN1cnNvci50YXJnZXQgPSBmaWVsZC5nZXRUYXJnZXRDb29yZChtb3VzZVBvcyk7XG4gICAgY3Vyc29yLnBvcy54ICs9IChjdXJzb3IudGFyZ2V0LnggLSBjdXJzb3IucG9zLngpICogZGVsdGFUaW1lICogY3Vyc29yLnNwZWVkO1xuICAgIGN1cnNvci5wb3MueSArPSAoY3Vyc29yLnRhcmdldC55IC0gY3Vyc29yLnBvcy55KSAqIGRlbHRhVGltZSAqIGN1cnNvci5zcGVlZDtcbiAgICBjdXJzb3IudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgY3Vyc29yLmRyYXcoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0YWdlIHtcbiAgI25leHQgPSB0aGlzO1xuICBnZXROZXh0KCkge1xuICAgIHJldHVybiB0aGlzLiNuZXh0O1xuICB9XG4gIHNldE5leHQoc3RhZ2UpIHtcbiAgICB0aGlzLiNuZXh0ID0gc3RhZ2U7XG4gIH1cbiAgb25Db21wbGV0ZSgpIHtcbiAgICBhbGVydChcImNvbXBsZXRlXCIpO1xuICB9XG4gIGluaXQoKSB7fVxuICB1cGRhdGUoZGVsdGFUaW1lKSB7fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gIGlmICh0eXBlb2YgeCAhPSBcIm51bWJlclwiKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9IFwibnVtYmVyXCIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHg7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG4iLCJsZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcbiAgXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbik7XG5cbmxldCBvbnN0YXJ0ID0gZnVuY3Rpb24gKHNvY2tldCkge307XG5sZXQgcGxheWVyUmVxdWVzdCA9IGZ1bmN0aW9uIChjb2xvciwgbmljaykge307XG5sZXQgcGxhY2UgPSBmdW5jdGlvbiAocG9zKSB7fTtcblxuZXhwb3J0IGxldCBnYW1lU2VydmVyID0ge1xuICBvblN0YXJ0KGNhbGxiYWNrKSB7XG4gICAgb25zdGFydCA9IGNhbGxiYWNrO1xuICB9LFxuICBvblBsYXllclJlcXVlc3QoY2FsbGJhY2spIHtcbiAgICBwbGF5ZXJSZXF1ZXN0ID0gY2FsbGJhY2s7XG4gIH0sXG4gIGpvaW4oKSB7XG4gICAgc29ja2V0LnNlbmQoXCJqb2luXCIpO1xuICB9LFxuICBwbGFjZShwb3MpIHtcbiAgICBzb2NrZXQuc2VuZChgcGxhY2UgJHtwb3MueH0gJHtwb3MueX1gKTtcbiAgfSxcbiAgb25QbGFjZShjYWxsYmFjaykge1xuICAgIHBsYWNlID0gY2FsbGJhY2s7XG4gIH0sXG59O1xuXG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIGxldCBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICBsZXQgY29tbWFuZCA9IG1lc3NhZ2Uuc3BsaXQoXCIgXCIpO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIGlmIChjb21tYW5kWzBdID09IFwic3RhcnRcIikge1xuICAgICAgb25zdGFydChzb2NrZXQpO1xuICAgIH1cbiAgICBpZiAoY29tbWFuZFswXSA9PSBcInBsYXllclwiKSB7XG4gICAgICBwbGF5ZXJSZXF1ZXN0KGNvbW1hbmRbMV0sIGNvbW1hbmRbMl0pO1xuICAgIH1cbiAgICBpZiAoY29tbWFuZFswXSA9PSBcInBsYWNlXCIpIHtcbiAgICAgIHBsYWNlKHsgeDogTnVtYmVyKGNvbW1hbmRbMV0pLCB5OiBOdW1iZXIoY29tbWFuZFsyXSkgfSk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCBcIi4uL2Nzcy93ZWxjb21lLXBvcHVwLmNzc1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4vY2FudmFzL2NhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVNlcnZlciB9IGZyb20gXCIuL3dlYnNvY2tldFwiO1xuXG5leHBvcnQgbGV0IHBsYXllciA9IHtcbiAgbG9jYWw6IHt9LFxuICByZW1vdGU6IHt9LFxufTtcblxubGV0IHBvcHVwRm9ybSA9IGNyZWF0ZUZvcm1FbGVtZW50KCk7XG5sZXQgcG9wdXAgPSBjcmVhdGVQb3B1cEVsZW1lbnQocG9wdXBGb3JtKTtcblxuLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsb2FkSGFuZGxlcik7XG53aW5kb3cub25sb2FkID0gbG9hZEhhbmRsZXI7XG5cbmZ1bmN0aW9uIGxvYWRIYW5kbGVyKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3B1cCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcIndlbGNvbWUtcG9wdXBfc2hvd25cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3ZWxjb21lRm9ybVN1Ym1pdChldmVudCkge1xuICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2VsY29tZS1wb3B1cF9zaG93blwiKSkge1xuICAgIHBsYXllci5sb2NhbC5jb2xvciA9IHBvcHVwRm9ybS5jb2xvci52YWx1ZTtcbiAgICBwbGF5ZXIubG9jYWwubmlja25hbWUgPSBwb3B1cEZvcm0ubmlja25hbWUudmFsdWU7XG4gICAgaWYgKHBsYXllci5sb2NhbC5uaWNrbmFtZSA9PSBcIlwiKVxuICAgICAgcGxheWVyLmxvY2FsLm5pY2tuYW1lID0gcG9wdXBGb3JtLm5pY2tuYW1lLnBsYWNlaG9sZGVyO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ3ZWxjb21lLXBvcHVwX3Nob3duXCIpO1xuICAgIGdhbWVTZXJ2ZXIuam9pbigpO1xuICAgIHN0YXJ0R2FtZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcG9wdXAucmVtb3ZlKCksIDE1MCk7XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybUVsZW1lbnQoKSB7XG4gIC8vZm9ybVxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fZm9ybVwiO1xuXG4gIC8vZm9ybTogbmlja25hbWUgc2VjdGlvblxuICBsZXQgbmlja05hbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmlja05hbWVTZWN0aW9uLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fbmlja25hbWUtc2VjdGlvblwiO1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fbmlja25hbWUtbGFiZWxcIjtcbiAgbGFiZWwuaW5uZXJIVE1MID0gYNCi0LLQvtC1INC40LzRjzpcbiAgPGlucHV0XG4gICAgY2xhc3M9XCJ3ZWxjb21lLXBvcHVwX19uaWNrbmFtZS1maWVsZFwiXG4gICAgdHlwZT1cInRleHRcIlxuICAgIG5hbWU9XCJuaWNrbmFtZVwiXG4gICAgcGxhY2Vob2xkZXI9XCLQv9C70LXQudGB0YXQvtC70LTQtdGAXCJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgIGF1dG9mb2N1cz1cImF1dG9mb2N1c1wiXG4gIC8+YDtcbiAgbmlja05hbWVTZWN0aW9uLmFwcGVuZChsYWJlbCk7XG5cbiAgLy9mb3JtOmNvbG9yIHBpY2tlclxuICBsZXQgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9IFwiY29sb3ItcGlja2VyXCI7XG4gIGxldCBjb2xvcnMgPSBbXCIjZWUyYjJiXCIsIFwiIzBiYjg3MFwiLCBcIiMwZGIxZjFcIiwgXCIjZTlhNmRhXCIsIFwiIzgzMTU4M1wiXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgaXRlbUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgaXRlbS5jbGFzc05hbWUgPSBcImNvbG9yLXBpY2tlcl9faXRlbVwiO1xuXG4gICAgaXRlbUlucHV0LmNsYXNzTmFtZSA9IFwiY29sb3ItcGlja2VyX19idXR0b25cIjtcbiAgICBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29sb3JcIik7XG4gICAgaXRlbUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGNvbG9yc1tpXSk7XG4gICAgaWYgKGkgPT0gMCkgaXRlbUlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cbiAgICBpdGVtLmFwcGVuZChpdGVtSW5wdXQpO1xuICAgIGl0ZW1JbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbaV07XG4gICAgY29sb3JQaWNrZXIuYXBwZW5kKGl0ZW0pO1xuICB9XG5cbiAgLy9mb3JtOnN1Ym1pdFxuICBsZXQgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm9ybVN1Ym1pdC5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX3N1Ym1pdFwiO1xuICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN1Ym1pdFwiKTtcbiAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcItCY0LPRgNCw0YLRjFwiKTtcblxuICAvL2Zvcm0gZmlsbFxuICBmb3JtLmFwcGVuZChuaWNrTmFtZVNlY3Rpb24pO1xuICBmb3JtLmFwcGVuZChjb2xvclBpY2tlcik7XG4gIGZvcm0uYXBwZW5kKGZvcm1TdWJtaXQpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgd2VsY29tZUZvcm1TdWJtaXQpO1xuICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUG9wdXBFbGVtZW50KGZvcm0pIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBcIjtcblxuICAvL3BvcHVwSGVhZGVyXG4gIGxldCBwb3B1cEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcG9wdXBIZWFkZXIuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwX190aXRsZVwiO1xuICBwb3B1cEhlYWRlci5pbm5lclRleHQgPSBcItCS0YXQvtC0INCyINC40LPRgNGDXCI7XG5cbiAgLy9maW5hbFxuICBkaXYuYXBwZW5kKHBvcHVwSGVhZGVyKTtcbiAgZGl2LmFwcGVuZChmb3JtKTtcbiAgcmV0dXJuIGRpdjtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9mb250cy5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vd2VsY29tZS1mb3JtLmpzXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9