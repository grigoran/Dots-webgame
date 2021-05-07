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
    _init_canvas_js__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _welcome_form_js__WEBPACK_IMPORTED_MODULE_2__.localPlayerColor;
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
      _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.localPlayerColor;

      for (var i = 0; i < _classPrivateFieldGet(this, _circleCount); ++i) {
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.beginPath();

        var angle = _classPrivateMethodGet(this, _getAngle, _getAngle2).call(this, _classPrivateFieldGet(this, _offset) + i * 0.1);

        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.arc(Math.sin(angle) * _classPrivateFieldGet(this, _totalShapeRadius) + _classPrivateFieldGet(this, _screenWidth) / 2, Math.cos(angle) * _classPrivateFieldGet(this, _totalShapeRadius) + _classPrivateFieldGet(this, _screenHeight) / 2, _classPrivateFieldGet(this, _radius), 0, Math.PI * 2);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_2__.ctx.fill();
      }

      _classPrivateFieldSet(this, _offset, _classPrivateFieldGet(this, _offset) + _classPrivateFieldGet(this, _speed) * deltaTime);

      if (_classPrivateFieldGet(this, _offset) >= Math.PI / 4) {
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
        _field_js__WEBPACK_IMPORTED_MODULE_3__.field.placeDot(mousePos, _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.localPlayerColor);
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

/***/ "./src/lobby/js/welcome-form.js":
/*!**************************************!*\
  !*** ./src/lobby/js/welcome-form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localPlayerColor": () => (/* binding */ localPlayerColor),
/* harmony export */   "localPlayerNickname": () => (/* binding */ localPlayerNickname)
/* harmony export */ });
/* harmony import */ var _css_welcome_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/welcome-popup.css */ "./src/lobby/css/welcome-popup.css");
/* harmony import */ var _canvas_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/canvas.js */ "./src/lobby/js/canvas/canvas.js");


var localPlayerColor;
var localPlayerNickname;
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
    localPlayerColor = popupForm.color.value;
    localPlayerNickname = popupForm.nickname.value;
    if (localPlayerNickname == "") localPlayerNickname = popupForm.nickname.placeholder;
    popup.classList.remove("welcome-popup_shown");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvY3Vyc29yLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL2RvdHMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvaW5pdC1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvcGF0aEZpbmRlci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9zdGFnZXMvZmllbGQtYXBwZWFyLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3N0YWdlcy9nYW1lLWxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL2dhbWUtc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL3N0YWdlLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlbGNvbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9mb250cy5jc3M/ZmI5ZiIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9pbmRleC5jc3M/ZGVhYSIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9ub3JtYWxpemUuY3NzPzg4MDYiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3Mvd2VsY29tZS1wb3B1cC5jc3M/MTJmYyIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RvdHN3ZWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RvdHN3ZWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGFydEdhbWUiLCJsYXN0VGltZSIsIkRhdGUiLCJub3ciLCJjdHgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lTG9vcCIsIlN0YWdlIiwiY3VycmVudFN0YWdlIiwiZ2V0TmV4dCIsImluaXQiLCJnYW1lTG9hZFN0YWdlIiwiR2FtZUxvYWRpbmciLCJmaWVsZEFwcGVhclN0YWdlIiwiRmllbGRBcHBlYXIiLCJnYW1lU3RhZ2UiLCJHYW1lU3RhZ2UiLCJzZXROZXh0Iiwibm93VGltZSIsImRlbHRhVGltZSIsImNhbnZhcyIsInVwZGF0ZSIsIm5vd1JhZGl1cyIsImFuaW1hdGlvblByb2dyZXNzIiwiYW5pbWF0aW9uU3BlZWQiLCJnZXRQcm9ncmVzcyIsInByb2dyZXNzIiwicHJvZyIsIkN1cnNvciIsInBvcyIsIlZlY3RvciIsInRhcmdldCIsInJhZGl1cyIsInNwZWVkIiwiZHJhdyIsImxvY2FsUGxheWVyQ29sb3IiLCJjdXJzb3IiLCJ4IiwieSIsIk1hdGgiLCJQSSIsImNsaWNrIiwiVFdPX1BJIiwiRG90IiwiY29sb3IiLCJjb25uZWN0ZWQiLCJEb3RBcnIiLCJzaXplIiwiYXJyIiwiaSIsImoiLCJnZXRDb2xvciIsInNldENvbG9yIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZG90QXJyIiwiRG90cyIsInN0ZXAiLCJwYXRoRmluZGVyIiwicHVzaCIsInBhdGgiLCJsZW5ndGgiLCJkb3RzIiwibWFwIiwidmFsIiwiYmVnIiwiZW5kIiwicmV0IiwiRmllbGQiLCJQYXRoMkQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3RmllbGQiLCJuZXdQb3MiLCJnZXRNZXNoQ29vcmQiLCJmbG9vciIsIm1lc2hQb3MiLCJmaWVsZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJzYXZlIiwic3RhcnRQb3MiLCJjYW5kaWRhdGVQYXRocyIsIm5leHRQb3MiLCJkaXIiLCJmaW5kUGF0aCIsInJlY3VyY2l2ZVBhdGgiLCJwYXRoSW5kZXgiLCJtYXhBcmVhSW5kZXgiLCJyZXN1bHQiLCJtYXJrRG90c0FzQ29ubmVjdGVkIiwicHJldlBvcyIsIm5leHQiLCJmaW5kSW5MYXN0Rm91ciIsInBhdGhzIiwibm93QXJlYSIsIm1heE5vZGVzIiwiaW5zaWRlTm9kZXMiLCJpbmRleGVzIiwiYXJlYXMiLCJmaW5kQXJlYSIsIm1pbkFyZWEiLCJyZXNJbmRleCIsImFyZWEiLCJQYXRoRmluZGVyIiwiYXNzaWduQXJyIiwib2Zmc2V0Iiwib25Db21wbGV0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYW5nbGUiLCJzaW4iLCJjb3MiLCJwaGFzZSIsImF0YW4iLCJtb3VzZVBvcyIsImdldE1vdXNlSGFuZGxlciIsInJlY3QiLCJzY2FsZVgiLCJzY2FsZVkiLCJldmVudCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFnZSIsImFsZXJ0IiwibG9jYWxQbGF5ZXJOaWNrbmFtZSIsInBvcHVwRm9ybSIsImNyZWF0ZUZvcm1FbGVtZW50IiwicG9wdXAiLCJjcmVhdGVQb3B1cEVsZW1lbnQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJsb2FkSGFuZGxlciIsImJvZHkiLCJhcHBlbmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3ZWxjb21lRm9ybVN1Ym1pdCIsImNvbnRhaW5zIiwidmFsdWUiLCJuaWNrbmFtZSIsInBsYWNlaG9sZGVyIiwicmVtb3ZlIiwic2V0VGltZW91dCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJuaWNrTmFtZVNlY3Rpb24iLCJsYWJlbCIsImlubmVySFRNTCIsImNvbG9yUGlja2VyIiwiY29sb3JzIiwiaXRlbSIsIml0ZW1JbnB1dCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9ybVN1Ym1pdCIsImRpdiIsInBvcHVwSGVhZGVyIiwiaW5uZXJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsR0FBcUI7QUFDMUJDLFVBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVg7QUFDQUMsdURBQUE7QUFDQUMsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDRDtBQUNELElBQUlMLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWY7O0FBRUFJLHdFQUFBLEdBQTZCLFlBQU07QUFDakNDLGNBQVksR0FBR0EsWUFBWSxDQUFDQyxPQUFiLEVBQWY7QUFDQUQsY0FBWSxDQUFDRSxJQUFiO0FBQ0FOLDBEQUFBO0FBQ0QsQ0FKRCxDLENBTUE7OztBQUNBLElBQUlPLGFBQWEsR0FBRyxJQUFJQyxnRUFBSixFQUFwQjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLElBQUlDLGdFQUFKLEVBQXZCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLElBQUlDLDREQUFKLEVBQWhCLEMsQ0FFQTs7QUFDQSxJQUFJUixZQUFZLEdBQUdHLGFBQW5CO0FBQ0FBLGFBQWEsQ0FBQ00sT0FBZCxDQUFzQkosZ0JBQXRCO0FBQ0FBLGdCQUFnQixDQUFDSSxPQUFqQixDQUF5QkYsU0FBekI7O0FBRUEsU0FBU1QsUUFBVCxHQUFvQjtBQUNsQixNQUFJWSxPQUFPLEdBQUdoQixJQUFJLENBQUNDLEdBQUwsRUFBZDtBQUNBLE1BQUlnQixTQUFTLEdBQUcsQ0FBQ0QsT0FBTyxHQUFHakIsUUFBWCxJQUF1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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsImZpbGUiOiJsb2JieS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcblxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvc3RhZ2UuanNcIjtcbmltcG9ydCB7IEdhbWVMb2FkaW5nIH0gZnJvbSBcIi4vc3RhZ2VzL2dhbWUtbG9hZGluZy5qc1wiO1xuaW1wb3J0IHsgRmllbGRBcHBlYXIgfSBmcm9tIFwiLi9zdGFnZXMvZmllbGQtYXBwZWFyLmpzXCI7XG5pbXBvcnQgeyBHYW1lU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvZ2FtZS1zdGFnZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBsYXN0VGltZSA9IERhdGUubm93KCk7XG4gIGN0eC5zYXZlKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5sZXQgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG5TdGFnZS5wcm90b3R5cGUub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgY3VycmVudFN0YWdlID0gY3VycmVudFN0YWdlLmdldE5leHQoKTtcbiAgY3VycmVudFN0YWdlLmluaXQoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8vaW5pdCBnYW1lIHN0YWdlc1xubGV0IGdhbWVMb2FkU3RhZ2UgPSBuZXcgR2FtZUxvYWRpbmcoKTtcbmxldCBmaWVsZEFwcGVhclN0YWdlID0gbmV3IEZpZWxkQXBwZWFyKCk7XG5sZXQgZ2FtZVN0YWdlID0gbmV3IEdhbWVTdGFnZSgpO1xuXG4vL2dhbWUgc3RhZ2VzIGRlcGVuZGVuY2VzXG5sZXQgY3VycmVudFN0YWdlID0gZ2FtZUxvYWRTdGFnZTtcbmdhbWVMb2FkU3RhZ2Uuc2V0TmV4dChmaWVsZEFwcGVhclN0YWdlKTtcbmZpZWxkQXBwZWFyU3RhZ2Uuc2V0TmV4dChnYW1lU3RhZ2UpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgbGV0IG5vd1RpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgZGVsdGFUaW1lID0gKG5vd1RpbWUgLSBsYXN0VGltZSkgLyAxMDAwO1xuICBsYXN0VGltZSA9IG5vd1RpbWU7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3VycmVudFN0YWdlLnVwZGF0ZShkZWx0YVRpbWUpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBsb2NhbFBsYXllck5pY2tuYW1lLCBsb2NhbFBsYXllckNvbG9yIH0gZnJvbSBcIi4uL3dlbGNvbWUtZm9ybS5qc1wiO1xuXG5sZXQgbm93UmFkaXVzID0gMDtcbmxldCBhbmltYXRpb25Qcm9ncmVzcyA9IDEwMDtcbmxldCBhbmltYXRpb25TcGVlZCA9IDUwMDsgLy9wZXJjZW50IHBlciBzZWNvbmRcblxuLy9jYWxjdWxhdGUgdmFsdWUgYmV0d2VlbiAwIGFuZCAxIGRlcGVuZGVudCBvbiBhbmltYXRpb24gUHJvZ3Jlc3MoMDoxMDApO1xuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgbGV0IHByb2cgPSBwcm9ncmVzcyAvIDEwMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmZ1bmN0aW9uIEN1cnNvcigpIHtcbiAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKCk7XG4gIHRoaXMudGFyZ2V0ID0gbmV3IFZlY3RvcigpO1xuICB0aGlzLnJhZGl1cyA9IDEwO1xuICBub3dSYWRpdXMgPSB0aGlzLnJhZGl1cztcbiAgdGhpcy5zcGVlZCA9IDEwO1xuICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBsb2NhbFBsYXllckNvbG9yO1xuICAgIGN0eC5hcmMoY3Vyc29yLnBvcy54LCBjdXJzb3IucG9zLnksIG5vd1JhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gIH07XG4gIHRoaXMuY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgYW5pbWF0aW9uUHJvZ3Jlc3MgPSAwO1xuICAgIG5vd1JhZGl1cyA9IDA7XG4gIH07XG4gIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhVGltZSkge1xuICAgIGlmIChhbmltYXRpb25Qcm9ncmVzcyA8IDEwMCkge1xuICAgICAgbm93UmFkaXVzID0gdGhpcy5yYWRpdXMgKiBnZXRQcm9ncmVzcyhhbmltYXRpb25Qcm9ncmVzcyk7XG4gICAgICBhbmltYXRpb25Qcm9ncmVzcyArPSBkZWx0YVRpbWUgKiBhbmltYXRpb25TcGVlZDtcbiAgICB9IGVsc2Ugbm93UmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gIH07XG59XG5cbmV4cG9ydCBsZXQgY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgcGF0aEZpbmRlciB9IGZyb20gXCIuL3BhdGhGaW5kZXIuanNcIjtcblxuY29uc3QgVFdPX1BJID0gMiAqIE1hdGguUEk7XG5cbmZ1bmN0aW9uIERvdCgpIHtcbiAgdGhpcy5jb2xvciA9IFwiXCI7XG4gIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIERvdEFycihzaXplKSB7XG4gIGxldCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLng7IGkrKykge1xuICAgIGFycltpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZS55OyBqKyspIHtcbiAgICAgIGFycltpXVtqXSA9IG5ldyBEb3QoKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5nZXRDb2xvciA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gYXJyW3Bvcy54XVtwb3MueV0uY29sb3I7XG4gIH07XG4gIHRoaXMuc2V0Q29sb3IgPSBmdW5jdGlvbiAocG9zLCBjb2xvcikge1xuICAgIGFycltwb3MueF1bcG9zLnldLmNvbG9yID0gY29sb3I7XG4gIH07XG4gIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICBhcnJbcG9zLnhdW3Bvcy55XS5jb25uZWN0ZWQgPSB0cnVlO1xuICB9O1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiBhcnJbcG9zLnhdW3Bvcy55XS5jb25uZWN0ZWQ7XG4gIH07XG59XG5cbmxldCBkb3RBcnIgPSB7fTtcblxuY2xhc3MgRG90cyB7XG4gICNzdGVwID0gMDtcbiAgI3NpemUgPSB7fTtcbiAgI2RvdFJhZGl1cyA9IDg7XG4gICNwYXRocyA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoc2l6ZSwgc3RlcCkge1xuICAgICAgdGhpcy4jc3RlcCA9IHN0ZXA7XG4gICAgICB0aGlzLiNzaXplID0gc2l6ZTtcbiAgICAgIGRvdEFyciA9IG5ldyBEb3RBcnIoc2l6ZSk7XG4gICAgICBwYXRoRmluZGVyLmFzc2lnbkFycihkb3RBcnIpO1xuICAgIH07XG4gICAgdGhpcy5wdXNoID0gZnVuY3Rpb24gKHBvcywgY29sb3IpIHtcbiAgICAgIGRvdEFyci5zZXRDb2xvcihwb3MsIGNvbG9yKTtcbiAgICAgIGxldCBwYXRoID0gcGF0aEZpbmRlci5maW5kUGF0aChwb3MpO1xuICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCkgdGhpcy4jcGF0aHMucHVzaChwYXRoKTtcbiAgICB9O1xuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb2xvciA9IFwiXCI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3NpemUueDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jc2l6ZS55OyBqKyspIHtcbiAgICAgICAgICBjb2xvciA9IGRvdEFyci5nZXRDb2xvcih7IHg6IGksIHk6IGogfSk7XG4gICAgICAgICAgaWYgKGNvbG9yID09IFwiXCIpIGNvbnRpbnVlO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICAgICAgICBqICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgdGhpcy4jZG90UmFkaXVzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIFRXT19QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9kcmF3IHBhdGhzXG4gICAgICBmb3IgKGxldCBwYXRoIG9mIHRoaXMuI3BhdGhzKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZG90QXJyLmdldENvbG9yKHBhdGhbMF0pO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICAgICAgZm9yIChsZXQgcG9zIG9mIHBhdGgpIHtcbiAgICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgcG9zLnggKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICAgICAgICBwb3MueSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGRvdHMgPSBuZXcgRG90cygpO1xuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZG90cyB9IGZyb20gXCIuL2RvdHMuanNcIjtcblxuZnVuY3Rpb24gbWFwKHZhbCwgYmVnLCBlbmQpIHtcbiAgbGV0IHJldCA9IHZhbCA+IGVuZCA/IGVuZCA6IHZhbDtcbiAgcmV0ID0gcmV0IDwgYmVnID8gYmVnIDogcmV0O1xuICByZXR1cm4gcmV0O1xufVxuXG5jbGFzcyBGaWVsZCB7XG4gICNzdGVwID0gMDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy/QoNCw0LfQvNC10YAg0L/QvtC70Y9cbiAgICB0aGlzLnNpemUgPSB7XG4gICAgICB4OiAxNSxcbiAgICAgIHk6IDE1LFxuICAgIH07XG5cbiAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTsgLy/Qn9GD0YLRjCDQtNC70Y8g0YDQuNGB0L7QstCw0L3QuNGPINC/0L7Qu9GPXG4gICAgdGhpcy4jc3RlcCA9IGNhbnZhcy53aWR0aCAvIHRoaXMuc2l6ZS54OyAvL9GI0LDQsyDRgdC10YLQutC4XG5cbiAgICAvL9GA0LjRgdGD0LXQvCDRgdC10YLQutGDXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemUueDsgaSsrKSB7XG4gICAgICBwYXRoLm1vdmVUbyhpICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLCAwKTtcbiAgICAgIHBhdGgubGluZVRvKGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZS55OyBpKyspIHtcbiAgICAgIHBhdGgubW92ZVRvKDAsIGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIpO1xuICAgICAgcGF0aC5saW5lVG8oY2FudmFzLndpZHRoLCBpICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyKTtcbiAgICB9XG5cbiAgICBkb3RzLmluaXQodGhpcy5zaXplLCB0aGlzLiNzdGVwKTtcblxuICAgIC8v0YTRg9C90LrRhtC40Y8g0YDQuNGB0L7QstCw0L3QuNGPINC/0L7Qu9GPXG4gICAgdGhpcy5kcmF3RmllbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgIGN0eC5zdHJva2UocGF0aCk7XG4gICAgICBkb3RzLmRyYXcoKTtcbiAgICB9O1xuICB9XG4gIHBsYWNlRG90KHBvcywgY29sb3IpIHtcbiAgICBsZXQgbmV3UG9zID0gdGhpcy5nZXRNZXNoQ29vcmQocG9zKTtcbiAgICBkb3RzLnB1c2gobmV3UG9zLCBjb2xvcik7XG4gIH1cbiAgZ2V0TWVzaENvb3JkKHBvcykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBtYXAoTWF0aC5mbG9vcihwb3MueCAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueCAtIDEpLFxuICAgICAgeTogbWFwKE1hdGguZmxvb3IocG9zLnkgLyB0aGlzLiNzdGVwKSwgMCwgdGhpcy5zaXplLnkgLSAxKSxcbiAgICB9O1xuICB9XG4gIGdldFRhcmdldENvb3JkKHBvcykge1xuICAgIGxldCBtZXNoUG9zID0ge307XG4gICAgbWVzaFBvcy54ID0gbWFwKE1hdGguZmxvb3IocG9zLnggLyB0aGlzLiNzdGVwKSwgMCwgdGhpcy5zaXplLnggLSAxKTtcbiAgICBtZXNoUG9zLnkgPSBtYXAoTWF0aC5mbG9vcihwb3MueSAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueSAtIDEpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBtZXNoUG9zLnggKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICB5OiBtZXNoUG9zLnkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGZpZWxkID0gbmV3IEZpZWxkKCk7XG4iLCJleHBvcnQgbGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FudmFzXCIpO1xuZXhwb3J0IGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jdHguc2F2ZSgpO1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yLmpzXCI7XG5cbmxldCBkb3RBcnIgPSB7fTtcbmxldCBzdGFydFBvcyA9IG5ldyBWZWN0b3IoKTtcbmxldCBjb2xvciA9IFwiXCI7XG5sZXQgY2FuZGlkYXRlUGF0aHMgPSBbXTtcblxuZnVuY3Rpb24gbmV4dFBvcyhkaXIsIHBvcykge1xuICBsZXQgbmV3UG9zID0ge307XG4gIHN3aXRjaCAoZGlyKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IocG9zLnggKyAxLCBwb3MueSk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IocG9zLnggKyAxLCBwb3MueSArIDEpO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSArIDEpO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yKHBvcy54IC0gMSwgcG9zLnkgKyAxKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcihwb3MueCAtIDEsIHBvcy55KTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcihwb3MueCAtIDEsIHBvcy55IC0gMSk7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IocG9zLngsIHBvcy55IC0gMSk7XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IocG9zLnggKyAxLCBwb3MueSAtIDEpO1xuICB9XG59XG5cbmxldCBmaW5kUGF0aCA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgc3RhcnRQb3MgPSBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSk7XG4gIGNvbG9yID0gZG90QXJyLmdldENvbG9yKHBvcyk7XG4gIGNhbmRpZGF0ZVBhdGhzID0gW107XG4gIHJlY3VyY2l2ZVBhdGgoc3RhcnRQb3MsIFtdLCBzdGFydFBvcyk7XG4gIGlmIChjYW5kaWRhdGVQYXRocy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHBhdGhJbmRleCA9IG1heEFyZWFJbmRleChjYW5kaWRhdGVQYXRocyk7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGlmIChwYXRoSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0ID0gWy4uLmNhbmRpZGF0ZVBhdGhzW3BhdGhJbmRleF1dO1xuICAgICAgbWFya0RvdHNBc0Nvbm5lY3RlZChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgcmV0dXJuIFtdO1xufTtcblxuLyrQkiDRjdGC0L7QvCDQsNC70LPQvtGA0LjRgtC80LUg0L/RgNC40YHRg9GC0YHRgtCy0YPQtdGCINC/0YDQvtCy0LXRgNC60LAgM9GFINC/0L7RgdC70LXQtNC90LjRhSDRjdC70LvQtdC80LXQvdGC0LLQviDQstC+INC40LfQsdC10LDQvdC40Lgg0LfQsNC80YvQutCw0L3QuNGPKi9cbmZ1bmN0aW9uIHJlY3VyY2l2ZVBhdGgocG9zLCBwYXRoLCBwcmV2UG9zKSB7XG4gIGxldCBuZXh0O1xuICBpZiAocGF0aC5sZW5ndGggIT0gMCAmJiBwb3MueCA9PSBzdGFydFBvcy54ICYmIHBvcy55ID09IHN0YXJ0UG9zLnkpIHtcbiAgICBjYW5kaWRhdGVQYXRocy5wdXNoKFsuLi5wYXRoXSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHBhdGgucHVzaChwb3MpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIG5leHQgPSBuZXh0UG9zKGksIHBvcyk7XG4gICAgaWYgKG5leHQueCA9PSBwcmV2UG9zLnggJiYgbmV4dC55ID09IHByZXZQb3MueSkgY29udGludWU7XG4gICAgaWYgKFxuICAgICAgZG90QXJyLmdldENvbG9yKG5leHQpID09IGNvbG9yICYmXG4gICAgICAhZG90QXJyLmlzQ29ubmVjdGVkKG5leHQpICYmXG4gICAgICAhZmluZEluTGFzdEZvdXIocGF0aCwgbmV4dClcbiAgICApIHtcbiAgICAgIHJlY3VyY2l2ZVBhdGgobmV4dCwgWy4uLnBhdGhdLCBwb3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5MYXN0Rm91cihwYXRoLCBwb3MpIHtcbiAgZm9yIChsZXQgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBpZiAocG9zLnggPT0gcGF0aFtpXS54ICYmIHBvcy55ID09IHBhdGhbaV0ueSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWF4QXJlYUluZGV4KHBhdGhzKSB7XG4gIGxldCBub3dBcmVhID0gMDtcbiAgbGV0IG1heE5vZGVzID0gMDtcbiAgbGV0IGluc2lkZU5vZGVzID0gMDtcbiAgbGV0IGluZGV4ZXMgPSBbXTtcbiAgbGV0IGFyZWFzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICBub3dBcmVhID0gZmluZEFyZWEocGF0aHNbaV0pO1xuICAgIGlmIChub3dBcmVhIDw9IDApIGNvbnRpbnVlO1xuICAgIGluc2lkZU5vZGVzID0gbm93QXJlYSAtIHBhdGhzW2ldLmxlbmd0aCAvIDIgKyAxOyAvL9GE0L7RgNC80YPQu9CwINC/0LjQutCwXG4gICAgaWYgKGluc2lkZU5vZGVzIDw9IDApIGNvbnRpbnVlO1xuICAgIGlmIChpbnNpZGVOb2RlcyA+IG1heE5vZGVzKSB7XG4gICAgICBtYXhOb2RlcyA9IGluc2lkZU5vZGVzO1xuICAgICAgaW5kZXhlcyA9IFtpXTtcbiAgICAgIGFyZWFzID0gW25vd0FyZWFdO1xuICAgIH0gZWxzZSBpZiAoaW5zaWRlTm9kZXMgPT0gbWF4Tm9kZXMpIHtcbiAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgIGFyZWFzLnB1c2gobm93QXJlYSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1heE5vZGVzID09IDApIHJldHVybiAtMTtcbiAgaWYgKGluZGV4ZXMubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xuICBsZXQgbWluQXJlYSA9IGFyZWFzWzBdO1xuICBsZXQgcmVzSW5kZXggPSBpbmRleGVzWzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJlYXNbaV0gPCBtaW5BcmVhKSB7XG4gICAgICByZXNJbmRleCA9IGluZGV4ZXNbaV07XG4gICAgICBtaW5BcmVhID0gYXJlYXNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNJbmRleDtcbn1cblxuZnVuY3Rpb24gZmluZEFyZWEocGF0aCkge1xuICAvL9GE0L7RgNC80YPQu9CwINCT0LDRg9GB0YHQsFxuICBsZXQgYXJlYSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGFyZWEgKz0gKHBhdGhbaV0ueCAqIHBhdGhbKGkgKyAxKSAlIHBhdGgubGVuZ3RoXS55KSAvIDI7XG4gICAgYXJlYSAtPSAocGF0aFsoaSArIDEpICUgcGF0aC5sZW5ndGhdLnggKiBwYXRoW2ldLnkpIC8gMjtcbiAgfVxuICByZXR1cm4gYXJlYTtcbn1cblxuZnVuY3Rpb24gbWFya0RvdHNBc0Nvbm5lY3RlZChwYXRoKSB7XG4gIGZvciAobGV0IHBvcyBvZiBwYXRoKSB7XG4gICAgZG90QXJyLmNvbm5lY3QocG9zKTtcbiAgfVxufVxuXG5sZXQgUGF0aEZpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hc3NpZ25BcnIgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgZG90QXJyID0gYXJyO1xuICB9O1xuICB0aGlzLmZpbmRQYXRoID0gZmluZFBhdGg7XG59O1xuZXhwb3J0IGxldCBwYXRoRmluZGVyID0gbmV3IFBhdGhGaW5kZXIoKTtcbiIsImltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2UuanNcIjtcbmltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4uL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBmaWVsZCB9IGZyb20gXCIuLi9maWVsZC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRmllbGRBcHBlYXIgZXh0ZW5kcyBTdGFnZSB7XG4gIHN0ZXAgPSBjYW52YXMud2lkdGggLyBmaWVsZC5zaXplLng7XG4gIG9mZnNldCA9IDA7XG4gIHNwZWVkID0gY2FudmFzLmhlaWdodCAqIDQ7XG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIHRoaXMub2Zmc2V0ICs9IGRlbHRhVGltZSAqIHRoaXMuc3BlZWQ7XG4gICAgaWYgKHRoaXMub2Zmc2V0ID49IGNhbnZhcy5oZWlnaHQpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQuc2l6ZS54OyBpKyspIHtcbiAgICAgIGN0eC5tb3ZlVG8oaSAqIHRoaXMuc3RlcCArIHRoaXMuc3RlcCAvIDIsIDApO1xuICAgICAgY3R4LmxpbmVUbyhpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMiwgdGhpcy5vZmZzZXQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkLnNpemUueTsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKDAsIGkgKiB0aGlzLnN0ZXAgKyB0aGlzLnN0ZXAgLyAyKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5vZmZzZXQsIGkgKiB0aGlzLnN0ZXAgKyB0aGlzLnN0ZXAgLyAyKTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlLmpzXCI7XG5cbmltcG9ydCB7IGxvY2FsUGxheWVyQ29sb3IgfSBmcm9tIFwiLi4vLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9pbml0LWNhbnZhcy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUxvYWRpbmcgZXh0ZW5kcyBTdGFnZSB7XG4gICNzY3JlZW5XaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgI3NjcmVlbkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICNyYWRpdXMgPSA3O1xuICAjdG90YWxTaGFwZVJhZGl1cyA9IDcwO1xuICAjY2lyY2xlQ291bnQgPSA1O1xuICAjc3BlZWQgPSAxO1xuICAjb2Zmc2V0ID0gMDtcbiAgI25vd0FscGhhID0gMTtcblxuICAjZ2V0QW5nbGUocGhhc2UpIHtcbiAgICByZXR1cm4gNCAqIChNYXRoLmF0YW4oKHBoYXNlICUgMikgLSAxKSArIE1hdGguUEkgKiA0KTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gbG9jYWxQbGF5ZXJDb2xvcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2NpcmNsZUNvdW50OyArK2kpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBhbmdsZSA9IHRoaXMuI2dldEFuZ2xlKHRoaXMuI29mZnNldCArIGkgKiAwLjEpO1xuICAgICAgY3R4LmFyYyhcbiAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogdGhpcy4jdG90YWxTaGFwZVJhZGl1cyArIHRoaXMuI3NjcmVlbldpZHRoIC8gMixcbiAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogdGhpcy4jdG90YWxTaGFwZVJhZGl1cyArIHRoaXMuI3NjcmVlbkhlaWdodCAvIDIsXG4gICAgICAgIHRoaXMuI3JhZGl1cyxcbiAgICAgICAgMCxcbiAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICB0aGlzLiNvZmZzZXQgKz0gdGhpcy4jc3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgaWYgKHRoaXMuI29mZnNldCA+PSBNYXRoLlBJIC8gNCkge1xuICAgICAgaWYgKHRoaXMuI25vd0FscGhhID4gMCkgdGhpcy4jbm93QWxwaGEgLT0gdGhpcy4jc3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgICB0aGlzLiNub3dBbHBoYSA8IDBcbiAgICAgICAgPyAoY3R4Lmdsb2JhbEFscGhhID0gMClcbiAgICAgICAgOiAoY3R4Lmdsb2JhbEFscGhhID0gdGhpcy4jbm93QWxwaGEpO1xuICAgICAgaWYgKHRoaXMuI25vd0FscGhhIDw9IDApIHtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLy4uL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBsb2NhbFBsYXllck5pY2tuYW1lLCBsb2NhbFBsYXllckNvbG9yIH0gZnJvbSBcIi4uLy4uL3dlbGNvbWUtZm9ybS5qc1wiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZS5qc1wiO1xuaW1wb3J0IHsgZmllbGQgfSBmcm9tIFwiLi4vZmllbGQuanNcIjtcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuLi92ZWN0b3IuanNcIjtcbmltcG9ydCB7IGN1cnNvciB9IGZyb20gXCIuLi9jdXJzb3IuanNcIjtcblxubGV0IG1vdXNlUG9zID0gbmV3IFZlY3RvcigpO1xuXG5mdW5jdGlvbiBnZXRNb3VzZUhhbmRsZXIoKSB7XG4gIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBsZXQgc2NhbGVYID0gY2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgbGV0IHNjYWxlWSA9IGNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIG1vdXNlUG9zLnggPSAoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgbW91c2VQb3MueSA9IChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgR2FtZVN0YWdlIGV4dGVuZHMgU3RhZ2Uge1xuICBpbml0KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZ2V0TW91c2VIYW5kbGVyKCkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjdXJzb3IuY2xpY2soKTtcbiAgICAgIGZpZWxkLnBsYWNlRG90KG1vdXNlUG9zLCBsb2NhbFBsYXllckNvbG9yKTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgZmllbGQuZHJhd0ZpZWxkKCk7XG5cbiAgICBjdXJzb3IudGFyZ2V0ID0gZmllbGQuZ2V0VGFyZ2V0Q29vcmQobW91c2VQb3MpO1xuICAgIGN1cnNvci5wb3MueCArPSAoY3Vyc29yLnRhcmdldC54IC0gY3Vyc29yLnBvcy54KSAqIGRlbHRhVGltZSAqIGN1cnNvci5zcGVlZDtcbiAgICBjdXJzb3IucG9zLnkgKz0gKGN1cnNvci50YXJnZXQueSAtIGN1cnNvci5wb3MueSkgKiBkZWx0YVRpbWUgKiBjdXJzb3Iuc3BlZWQ7XG4gICAgY3Vyc29yLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgIGN1cnNvci5kcmF3KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTdGFnZSB7XG4gICNuZXh0ID0gdGhpcztcbiAgZ2V0TmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmV4dDtcbiAgfVxuICBzZXROZXh0KHN0YWdlKSB7XG4gICAgdGhpcy4jbmV4dCA9IHN0YWdlO1xuICB9XG4gIG9uQ29tcGxldGUoKSB7XG4gICAgYWxlcnQoXCJjb21wbGV0ZVwiKTtcbiAgfVxuICBpbml0KCkge31cbiAgdXBkYXRlKGRlbHRhVGltZSkge31cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICBpZiAodHlwZW9mIHggIT0gXCJudW1iZXJcIikge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSBcIm51bWJlclwiKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB4O1xuICB9IGVsc2Uge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi4vY3NzL3dlbGNvbWUtcG9wdXAuY3NzXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9jYW52YXMvY2FudmFzLmpzXCI7XG5cbmV4cG9ydCBsZXQgbG9jYWxQbGF5ZXJDb2xvcjtcbmV4cG9ydCBsZXQgbG9jYWxQbGF5ZXJOaWNrbmFtZTtcblxubGV0IHBvcHVwRm9ybSA9IGNyZWF0ZUZvcm1FbGVtZW50KCk7XG5sZXQgcG9wdXAgPSBjcmVhdGVQb3B1cEVsZW1lbnQocG9wdXBGb3JtKTtcblxuLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsb2FkSGFuZGxlcik7XG53aW5kb3cub25sb2FkID0gbG9hZEhhbmRsZXI7XG5cbmZ1bmN0aW9uIGxvYWRIYW5kbGVyKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3B1cCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcIndlbGNvbWUtcG9wdXBfc2hvd25cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3ZWxjb21lRm9ybVN1Ym1pdChldmVudCkge1xuICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2VsY29tZS1wb3B1cF9zaG93blwiKSkge1xuICAgIGxvY2FsUGxheWVyQ29sb3IgPSBwb3B1cEZvcm0uY29sb3IudmFsdWU7XG4gICAgbG9jYWxQbGF5ZXJOaWNrbmFtZSA9IHBvcHVwRm9ybS5uaWNrbmFtZS52YWx1ZTtcbiAgICBpZiAobG9jYWxQbGF5ZXJOaWNrbmFtZSA9PSBcIlwiKVxuICAgICAgbG9jYWxQbGF5ZXJOaWNrbmFtZSA9IHBvcHVwRm9ybS5uaWNrbmFtZS5wbGFjZWhvbGRlcjtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwid2VsY29tZS1wb3B1cF9zaG93blwiKTtcbiAgICBzdGFydEdhbWUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBvcHVwLnJlbW92ZSgpLCAxNTApO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1FbGVtZW50KCkge1xuICAvL2Zvcm1cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX2Zvcm1cIjtcblxuICAvL2Zvcm06IG5pY2tuYW1lIHNlY3Rpb25cbiAgbGV0IG5pY2tOYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5pY2tOYW1lU2VjdGlvbi5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX25pY2tuYW1lLXNlY3Rpb25cIjtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX25pY2tuYW1lLWxhYmVsXCI7XG4gIGxhYmVsLmlubmVySFRNTCA9IGDQotCy0L7QtSDQuNC80Y86XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwid2VsY29tZS1wb3B1cF9fbmlja25hbWUtZmllbGRcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBuYW1lPVwibmlja25hbWVcIlxuICAgIHBsYWNlaG9sZGVyPVwi0L/Qu9C10LnRgdGF0L7Qu9C00LXRgFwiXG4gICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICBhdXRvZm9jdXM9XCJhdXRvZm9jdXNcIlxuICAvPmA7XG4gIG5pY2tOYW1lU2VjdGlvbi5hcHBlbmQobGFiZWwpO1xuXG4gIC8vZm9ybTpjb2xvciBwaWNrZXJcbiAgbGV0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb2xvclBpY2tlci5jbGFzc05hbWUgPSBcImNvbG9yLXBpY2tlclwiO1xuICBsZXQgY29sb3JzID0gW1wiI2VlMmIyYlwiLCBcIiMwYmI4NzBcIiwgXCIjMGRiMWYxXCIsIFwiI2U5YTZkYVwiLCBcIiM4MzE1ODNcIl07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IGl0ZW1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJjb2xvci1waWNrZXJfX2l0ZW1cIjtcblxuICAgIGl0ZW1JbnB1dC5jbGFzc05hbWUgPSBcImNvbG9yLXBpY2tlcl9fYnV0dG9uXCI7XG4gICAgaXRlbUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbG9yXCIpO1xuICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjb2xvcnNbaV0pO1xuICAgIGlmIChpID09IDApIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuXG4gICAgaXRlbS5hcHBlbmQoaXRlbUlucHV0KTtcbiAgICBpdGVtSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2ldO1xuICAgIGNvbG9yUGlja2VyLmFwcGVuZChpdGVtKTtcbiAgfVxuXG4gIC8vZm9ybTpzdWJtaXRcbiAgbGV0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGZvcm1TdWJtaXQuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwX19zdWJtaXRcIjtcbiAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdWJtaXRcIik7XG4gIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCLQmNCz0YDQsNGC0YxcIik7XG5cbiAgLy9mb3JtIGZpbGxcbiAgZm9ybS5hcHBlbmQobmlja05hbWVTZWN0aW9uKTtcbiAgZm9ybS5hcHBlbmQoY29sb3JQaWNrZXIpO1xuICBmb3JtLmFwcGVuZChmb3JtU3VibWl0KTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHdlbGNvbWVGb3JtU3VibWl0KTtcbiAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwRWxlbWVudChmb3JtKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwXCI7XG5cbiAgLy9wb3B1cEhlYWRlclxuICBsZXQgcG9wdXBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHBvcHVwSGVhZGVyLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fdGl0bGVcIjtcbiAgcG9wdXBIZWFkZXIuaW5uZXJUZXh0ID0gXCLQktGF0L7QtCDQsiDQuNCz0YDRg1wiO1xuXG4gIC8vZmluYWxcbiAgZGl2LmFwcGVuZChwb3B1cEhlYWRlcik7XG4gIGRpdi5hcHBlbmQoZm9ybSk7XG4gIHJldHVybiBkaXY7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvZm9udHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL3dlbGNvbWUtZm9ybS5qc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==