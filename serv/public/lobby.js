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

    if (dotArr.getColor(pos) != "") return false;
    dotArr.setColor(pos, color);
    _pathFinder_js__WEBPACK_IMPORTED_MODULE_1__.pathFinder.findPath(pos).then(function (path) {
      if (path.length > 0) _classPrivateFieldGet(_this, _paths).push(path);
    });
    return true;
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
}

var findPath = function findPath(pos) {
  return new Promise(function (resolve, reject) {
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

      resolve(result);
    } else resolve([]);
  });
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
    if (!next || next.x == prevPos.x && next.y == prevPos.y) continue;

    if (dotArr.getColor(next) == color && !dotArr.isConnected(next) && !findIntersects(path, next)) {
      recurcivePath(next, _toConsumableArray(path), pos);
    }
  }
}

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
var localTurn = false; //ходит ли сейчас локальный игрок

_websocket_js__WEBPACK_IMPORTED_MODULE_6__.gameServer.onPlace(function (pos) {
  _field_js__WEBPACK_IMPORTED_MODULE_3__.field.placeDotDirect(pos, _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.remote.color);
  localTurn = true;
});
_websocket_js__WEBPACK_IMPORTED_MODULE_6__.gameServer.onTurn(function () {
  localTurn = true;
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
        if (localTurn) {
          _cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor.click();
          if (_field_js__WEBPACK_IMPORTED_MODULE_3__.field.placeDot(mousePos, _welcome_form_js__WEBPACK_IMPORTED_MODULE_1__.player.local.color)) localTurn = false;
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

var changeTurn = function changeTurn() {};

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
    changeTurn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvY3Vyc29yLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL2RvdHMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvaW5pdC1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvcGF0aEZpbmRlci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9zdGFnZXMvZmllbGQtYXBwZWFyLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3N0YWdlcy9nYW1lLWxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL2dhbWUtc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL3N0YWdlLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlbGNvbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9mb250cy5jc3M/ZmI5ZiIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9pbmRleC5jc3M/ZGVhYSIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9ub3JtYWxpemUuY3NzPzg4MDYiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3Mvd2VsY29tZS1wb3B1cC5jc3M/MTJmYyIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RvdHN3ZWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RvdHN3ZWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGFydEdhbWUiLCJsYXN0VGltZSIsIkRhdGUiLCJub3ciLCJjdHgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lTG9vcCIsIlN0YWdlIiwiY3VycmVudFN0YWdlIiwiZ2V0TmV4dCIsImluaXQiLCJnYW1lTG9hZFN0YWdlIiwiR2FtZUxvYWRpbmciLCJmaWVsZEFwcGVhclN0YWdlIiwiRmllbGRBcHBlYXIiLCJnYW1lU3RhZ2UiLCJHYW1lU3RhZ2UiLCJzZXROZXh0Iiwibm93VGltZSIsImRlbHRhVGltZSIsImNhbnZhcyIsInVwZGF0ZSIsIm5vd1JhZGl1cyIsImFuaW1hdGlvblByb2dyZXNzIiwiYW5pbWF0aW9uU3BlZWQiLCJnZXRQcm9ncmVzcyIsInByb2dyZXNzIiwicHJvZyIsIkN1cnNvciIsInBvcyIsIlZlY3RvciIsInRhcmdldCIsInJhZGl1cyIsInNwZWVkIiwiZHJhdyIsInBsYXllciIsImN1cnNvciIsIngiLCJ5IiwiTWF0aCIsIlBJIiwiY2xpY2siLCJUV09fUEkiLCJEb3QiLCJjb2xvciIsImNvbm5lY3RlZCIsIkRvdEFyciIsIm1lc2hTaXplIiwiYXJyIiwiaSIsImoiLCJzaXplIiwiZ2V0Q29sb3IiLCJzZXRDb2xvciIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRvdEFyciIsIkRvdHMiLCJzdGVwIiwicGF0aEZpbmRlciIsInB1c2giLCJ0aGVuIiwicGF0aCIsImxlbmd0aCIsImRvdHMiLCJtYXAiLCJ2YWwiLCJiZWciLCJlbmQiLCJyZXQiLCJGaWVsZCIsIlBhdGgyRCIsIm1vdmVUbyIsImxpbmVUbyIsImRyYXdGaWVsZCIsIm5ld1BvcyIsImdldE1lc2hDb29yZCIsImdhbWVTZXJ2ZXIiLCJmbG9vciIsIm1lc2hQb3MiLCJmaWVsZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJzYXZlIiwic3RhcnRQb3MiLCJjYW5kaWRhdGVQYXRocyIsIm5leHRQb3MiLCJkaXIiLCJ1bmRlZmluZWQiLCJmaW5kUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjdXJjaXZlUGF0aCIsInBhdGhJbmRleCIsIm1heEFyZWFJbmRleCIsInJlc3VsdCIsIm1hcmtEb3RzQXNDb25uZWN0ZWQiLCJwcmV2UG9zIiwibmV4dCIsImZpbmRJbnRlcnNlY3RzIiwicGF0aHMiLCJub3dBcmVhIiwibWF4Tm9kZXMiLCJpbnNpZGVOb2RlcyIsImluZGV4ZXMiLCJhcmVhcyIsImZpbmRBcmVhIiwibWluQXJlYSIsInJlc0luZGV4IiwiYXJlYSIsIlBhdGhGaW5kZXIiLCJhc3NpZ25BcnIiLCJvZmZzZXQiLCJvbkNvbXBsZXRlIiwibG9hZGVkIiwic29ja2V0Iiwic2VuZCIsIm5pY2siLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJhbmdsZSIsInNpbiIsImNvcyIsInBoYXNlIiwiYXRhbiIsIm1vdXNlUG9zIiwibG9jYWxUdXJuIiwiZ2V0TW91c2VIYW5kbGVyIiwicmVjdCIsInNjYWxlWCIsInNjYWxlWSIsImV2ZW50IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YWdlIiwiYWxlcnQiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJwYXRobmFtZSIsIm9uc3RhcnQiLCJwbGF5ZXJSZXF1ZXN0IiwicGxhY2UiLCJjaGFuZ2VUdXJuIiwib25TdGFydCIsImNhbGxiYWNrIiwib25QbGF5ZXJSZXF1ZXN0Iiwiam9pbiIsIm9uUGxhY2UiLCJvblR1cm4iLCJvbm9wZW4iLCJlIiwib25tZXNzYWdlIiwibWVzc2FnZSIsImRhdGEiLCJjb21tYW5kIiwic3BsaXQiLCJOdW1iZXIiLCJsb2NhbCIsInJlbW90ZSIsInBvcHVwRm9ybSIsImNyZWF0ZUZvcm1FbGVtZW50IiwicG9wdXAiLCJjcmVhdGVQb3B1cEVsZW1lbnQiLCJvbmxvYWQiLCJsb2FkSGFuZGxlciIsImJvZHkiLCJhcHBlbmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3ZWxjb21lRm9ybVN1Ym1pdCIsImNvbnRhaW5zIiwidmFsdWUiLCJuaWNrbmFtZSIsInBsYWNlaG9sZGVyIiwicmVtb3ZlIiwic2V0VGltZW91dCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJuaWNrTmFtZVNlY3Rpb24iLCJsYWJlbCIsImlubmVySFRNTCIsImNvbG9yUGlja2VyIiwiY29sb3JzIiwiaXRlbSIsIml0ZW1JbnB1dCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9ybVN1Ym1pdCIsImRpdiIsInBvcHVwSGVhZGVyIiwiaW5uZXJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsR0FBcUI7QUFDMUJDLFVBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVg7QUFDQUMsdURBQUE7QUFDQUMsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDRDtBQUNELElBQUlMLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWY7O0FBRUFJLHdFQUFBLEdBQTZCLFlBQU07QUFDakNDLGNBQVksR0FBR0EsWUFBWSxDQUFDQyxPQUFiLEVBQWY7QUFDQUQsY0FBWSxD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K0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0EiLCJmaWxlIjoibG9iYnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2luaXQtY2FudmFzLmpzXCI7XG5cbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2VzL3N0YWdlLmpzXCI7XG5pbXBvcnQgeyBHYW1lTG9hZGluZyB9IGZyb20gXCIuL3N0YWdlcy9nYW1lLWxvYWRpbmcuanNcIjtcbmltcG9ydCB7IEZpZWxkQXBwZWFyIH0gZnJvbSBcIi4vc3RhZ2VzL2ZpZWxkLWFwcGVhci5qc1wiO1xuaW1wb3J0IHsgR2FtZVN0YWdlIH0gZnJvbSBcIi4vc3RhZ2VzL2dhbWUtc3RhZ2UuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuICBjdHguc2F2ZSgpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxubGV0IGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblxuU3RhZ2UucHJvdG90eXBlLm9uQ29tcGxldGUgPSAoKSA9PiB7XG4gIGN1cnJlbnRTdGFnZSA9IGN1cnJlbnRTdGFnZS5nZXROZXh0KCk7XG4gIGN1cnJlbnRTdGFnZS5pbml0KCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vL2luaXQgZ2FtZSBzdGFnZXNcbmxldCBnYW1lTG9hZFN0YWdlID0gbmV3IEdhbWVMb2FkaW5nKCk7XG5sZXQgZmllbGRBcHBlYXJTdGFnZSA9IG5ldyBGaWVsZEFwcGVhcigpO1xubGV0IGdhbWVTdGFnZSA9IG5ldyBHYW1lU3RhZ2UoKTtcblxuLy9nYW1lIHN0YWdlcyBkZXBlbmRlbmNlc1xubGV0IGN1cnJlbnRTdGFnZSA9IGdhbWVMb2FkU3RhZ2U7XG5nYW1lTG9hZFN0YWdlLnNldE5leHQoZmllbGRBcHBlYXJTdGFnZSk7XG5maWVsZEFwcGVhclN0YWdlLnNldE5leHQoZ2FtZVN0YWdlKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGxldCBub3dUaW1lID0gRGF0ZS5ub3coKTtcbiAgbGV0IGRlbHRhVGltZSA9IChub3dUaW1lIC0gbGFzdFRpbWUpIC8gMTAwMDtcbiAgbGFzdFRpbWUgPSBub3dUaW1lO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN1cnJlbnRTdGFnZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL3ZlY3Rvci5qc1wiO1xuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4uL3dlbGNvbWUtZm9ybS5qc1wiO1xuXG5sZXQgbm93UmFkaXVzID0gMDtcbmxldCBhbmltYXRpb25Qcm9ncmVzcyA9IDEwMDtcbmxldCBhbmltYXRpb25TcGVlZCA9IDUwMDsgLy9wZXJjZW50IHBlciBzZWNvbmRcblxuLy9jYWxjdWxhdGUgdmFsdWUgYmV0d2VlbiAwIGFuZCAxIGRlcGVuZGVudCBvbiBhbmltYXRpb24gUHJvZ3Jlc3MoMDoxMDApO1xuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgbGV0IHByb2cgPSBwcm9ncmVzcyAvIDEwMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmZ1bmN0aW9uIEN1cnNvcigpIHtcbiAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKCk7XG4gIHRoaXMudGFyZ2V0ID0gbmV3IFZlY3RvcigpO1xuICB0aGlzLnJhZGl1cyA9IDEwO1xuICBub3dSYWRpdXMgPSB0aGlzLnJhZGl1cztcbiAgdGhpcy5zcGVlZCA9IDEwO1xuICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwbGF5ZXIubG9jYWwuY29sb3I7XG4gICAgY3R4LmFyYyhjdXJzb3IucG9zLngsIGN1cnNvci5wb3MueSwgbm93UmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfTtcbiAgdGhpcy5jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBhbmltYXRpb25Qcm9ncmVzcyA9IDA7XG4gICAgbm93UmFkaXVzID0gMDtcbiAgfTtcbiAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGFUaW1lKSB7XG4gICAgaWYgKGFuaW1hdGlvblByb2dyZXNzIDwgMTAwKSB7XG4gICAgICBub3dSYWRpdXMgPSB0aGlzLnJhZGl1cyAqIGdldFByb2dyZXNzKGFuaW1hdGlvblByb2dyZXNzKTtcbiAgICAgIGFuaW1hdGlvblByb2dyZXNzICs9IGRlbHRhVGltZSAqIGFuaW1hdGlvblNwZWVkO1xuICAgIH0gZWxzZSBub3dSYWRpdXMgPSB0aGlzLnJhZGl1cztcbiAgfTtcbn1cblxuZXhwb3J0IGxldCBjdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBwYXRoRmluZGVyIH0gZnJvbSBcIi4vcGF0aEZpbmRlci5qc1wiO1xuXG5jb25zdCBUV09fUEkgPSAyICogTWF0aC5QSTtcblxuZnVuY3Rpb24gRG90KCkge1xuICB0aGlzLmNvbG9yID0gXCJcIjtcbiAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gRG90QXJyKG1lc2hTaXplKSB7XG4gIGxldCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNoU2l6ZS54OyBpKyspIHtcbiAgICBhcnJbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1lc2hTaXplLnk7IGorKykge1xuICAgICAgYXJyW2ldW2pdID0gbmV3IERvdCgpO1xuICAgIH1cbiAgfVxuICB0aGlzLnNpemUgPSBtZXNoU2l6ZTtcbiAgdGhpcy5nZXRDb2xvciA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gYXJyW3Bvcy54XVtwb3MueV0uY29sb3I7XG4gIH07XG4gIHRoaXMuc2V0Q29sb3IgPSBmdW5jdGlvbiAocG9zLCBjb2xvcikge1xuICAgIGFycltwb3MueF1bcG9zLnldLmNvbG9yID0gY29sb3I7XG4gIH07XG4gIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICBhcnJbcG9zLnhdW3Bvcy55XS5jb25uZWN0ZWQgPSB0cnVlO1xuICB9O1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiBhcnJbcG9zLnhdW3Bvcy55XS5jb25uZWN0ZWQ7XG4gIH07XG59XG5cbmxldCBkb3RBcnIgPSB7fTtcblxuY2xhc3MgRG90cyB7XG4gICNzdGVwID0gMDtcbiAgI3NpemUgPSB7fTtcbiAgI2RvdFJhZGl1cyA9IDg7XG4gICNwYXRocyA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoc2l6ZSwgc3RlcCkge1xuICAgICAgdGhpcy4jc3RlcCA9IHN0ZXA7XG4gICAgICB0aGlzLiNzaXplID0gc2l6ZTtcbiAgICAgIGRvdEFyciA9IG5ldyBEb3RBcnIoc2l6ZSk7XG4gICAgICBwYXRoRmluZGVyLmFzc2lnbkFycihkb3RBcnIpO1xuICAgIH07XG4gICAgdGhpcy5wdXNoID0gZnVuY3Rpb24gKHBvcywgY29sb3IpIHtcbiAgICAgIGlmIChkb3RBcnIuZ2V0Q29sb3IocG9zKSAhPSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICBkb3RBcnIuc2V0Q29sb3IocG9zLCBjb2xvcik7XG4gICAgICBwYXRoRmluZGVyLmZpbmRQYXRoKHBvcykudGhlbigocGF0aCkgPT4ge1xuICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwKSB0aGlzLiNwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb2xvciA9IFwiXCI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3NpemUueDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jc2l6ZS55OyBqKyspIHtcbiAgICAgICAgICBjb2xvciA9IGRvdEFyci5nZXRDb2xvcih7IHg6IGksIHk6IGogfSk7XG4gICAgICAgICAgaWYgKGNvbG9yID09IFwiXCIpIGNvbnRpbnVlO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICAgICAgICBqICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgdGhpcy4jZG90UmFkaXVzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIFRXT19QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9kcmF3IHBhdGhzXG4gICAgICBmb3IgKGxldCBwYXRoIG9mIHRoaXMuI3BhdGhzKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZG90QXJyLmdldENvbG9yKHBhdGhbMF0pO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICAgICAgZm9yIChsZXQgcG9zIG9mIHBhdGgpIHtcbiAgICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgcG9zLnggKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICAgICAgICBwb3MueSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGRvdHMgPSBuZXcgRG90cygpO1xuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZG90cyB9IGZyb20gXCIuL2RvdHMuanNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2ZXIgfSBmcm9tIFwiLi4vd2Vic29ja2V0LmpzXCI7XG5cbmZ1bmN0aW9uIG1hcCh2YWwsIGJlZywgZW5kKSB7XG4gIGxldCByZXQgPSB2YWwgPiBlbmQgPyBlbmQgOiB2YWw7XG4gIHJldCA9IHJldCA8IGJlZyA/IGJlZyA6IHJldDtcbiAgcmV0dXJuIHJldDtcbn1cblxuY2xhc3MgRmllbGQge1xuICAjc3RlcCA9IDA7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8v0KDQsNC30LzQtdGAINC/0L7Qu9GPXG4gICAgdGhpcy5zaXplID0ge1xuICAgICAgeDogMTUsXG4gICAgICB5OiAxNSxcbiAgICB9O1xuXG4gICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7IC8v0J/Rg9GC0Ywg0LTQu9GPINGA0LjRgdC+0LLQsNC90LjRjyDQv9C+0LvRj1xuICAgIHRoaXMuI3N0ZXAgPSBjYW52YXMud2lkdGggLyB0aGlzLnNpemUueDsgLy/RiNCw0LMg0YHQtdGC0LrQuFxuXG4gICAgLy/RgNC40YHRg9C10Lwg0YHQtdGC0LrRg1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplLng7IGkrKykge1xuICAgICAgcGF0aC5tb3ZlVG8oaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMiwgMCk7XG4gICAgICBwYXRoLmxpbmVUbyhpICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemUueTsgaSsrKSB7XG4gICAgICBwYXRoLm1vdmVUbygwLCBpICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyKTtcbiAgICAgIHBhdGgubGluZVRvKGNhbnZhcy53aWR0aCwgaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMik7XG4gICAgfVxuXG4gICAgZG90cy5pbml0KHRoaXMuc2l6ZSwgdGhpcy4jc3RlcCk7XG5cbiAgICAvL9GE0YPQvdC60YbQuNGPINGA0LjRgdC+0LLQsNC90LjRjyDQv9C+0LvRj1xuICAgIHRoaXMuZHJhd0ZpZWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICBjdHguc3Ryb2tlKHBhdGgpO1xuICAgICAgZG90cy5kcmF3KCk7XG4gICAgfTtcbiAgfVxuICBwbGFjZURvdChwb3MsIGNvbG9yKSB7XG4gICAgbGV0IG5ld1BvcyA9IHRoaXMuZ2V0TWVzaENvb3JkKHBvcyk7XG4gICAgaWYgKGRvdHMucHVzaChuZXdQb3MsIGNvbG9yKSkge1xuICAgICAgZ2FtZVNlcnZlci5wbGFjZShuZXdQb3MpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL3VzZSBmb3IgcGxhY2UgZG90IGZyb20gcmVtb3RlIHNlcnZlciBwb3MtbWVzaCBjb29yZFxuICBwbGFjZURvdERpcmVjdChwb3MsIGNvbG9yKSB7XG4gICAgcmV0dXJuIGRvdHMucHVzaChwb3MsIGNvbG9yKTtcbiAgfVxuICBnZXRNZXNoQ29vcmQocG9zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG1hcChNYXRoLmZsb29yKHBvcy54IC8gdGhpcy4jc3RlcCksIDAsIHRoaXMuc2l6ZS54IC0gMSksXG4gICAgICB5OiBtYXAoTWF0aC5mbG9vcihwb3MueSAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueSAtIDEpLFxuICAgIH07XG4gIH1cbiAgZ2V0VGFyZ2V0Q29vcmQocG9zKSB7XG4gICAgbGV0IG1lc2hQb3MgPSB7fTtcbiAgICBtZXNoUG9zLnggPSBtYXAoTWF0aC5mbG9vcihwb3MueCAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueCAtIDEpO1xuICAgIG1lc2hQb3MueSA9IG1hcChNYXRoLmZsb29yKHBvcy55IC8gdGhpcy4jc3RlcCksIDAsIHRoaXMuc2l6ZS55IC0gMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG1lc2hQb3MueCAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMixcbiAgICAgIHk6IG1lc2hQb3MueSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMixcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiIsImV4cG9ydCBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXNcIik7XG5leHBvcnQgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmN0eC5zYXZlKCk7XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3IuanNcIjtcblxubGV0IGRvdEFyciA9IHt9O1xubGV0IHN0YXJ0UG9zID0gbmV3IFZlY3RvcigpO1xubGV0IGNvbG9yID0gXCJcIjtcbmxldCBjYW5kaWRhdGVQYXRocyA9IFtdO1xuXG5mdW5jdGlvbiBuZXh0UG9zKGRpciwgcG9zKSB7XG4gIGxldCBuZXdQb3M7XG4gIHN3aXRjaCAoZGlyKSB7XG4gICAgY2FzZSAwOlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCArIDEsIHBvcy55KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggKyAxLCBwb3MueSArIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCwgcG9zLnkgKyAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggLSAxLCBwb3MueSArIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCAtIDEsIHBvcy55KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggLSAxLCBwb3MueSAtIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2OlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCwgcG9zLnkgLSAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggKyAxLCBwb3MueSAtIDEpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKFxuICAgIG5ld1Bvcy54IDwgMCB8fFxuICAgIG5ld1Bvcy54ID49IGRvdEFyci5zaXplLnggfHxcbiAgICBuZXdQb3MueSA8IDAgfHxcbiAgICBuZXdQb3MueSA+PSBkb3RBcnIuc2l6ZS55XG4gIClcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICByZXR1cm4gbmV3UG9zO1xufVxuXG5sZXQgZmluZFBhdGggPSBmdW5jdGlvbiAocG9zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc3RhcnRQb3MgPSBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSk7XG4gICAgY29sb3IgPSBkb3RBcnIuZ2V0Q29sb3IocG9zKTtcbiAgICBjYW5kaWRhdGVQYXRocyA9IFtdO1xuICAgIHJlY3VyY2l2ZVBhdGgoc3RhcnRQb3MsIFtdLCBzdGFydFBvcyk7XG4gICAgaWYgKGNhbmRpZGF0ZVBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBwYXRoSW5kZXggPSBtYXhBcmVhSW5kZXgoY2FuZGlkYXRlUGF0aHMpO1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgaWYgKHBhdGhJbmRleCA+PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IFsuLi5jYW5kaWRhdGVQYXRoc1twYXRoSW5kZXhdXTtcbiAgICAgICAgbWFya0RvdHNBc0Nvbm5lY3RlZChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gZWxzZSByZXNvbHZlKFtdKTtcbiAgfSk7XG59O1xuXG4vKtCSINGN0YLQvtC8INCw0LvQs9C+0YDQuNGC0LzQtSDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIg0L/RgNC+0LLQtdGA0LrQsCAz0YUg0L/QvtGB0LvQtdC00L3QuNGFINGN0LvQu9C10LzQtdC90YLQstC+INCy0L4g0LjQt9Cx0LXQsNC90LjQuCDQt9Cw0LzRi9C60LDQvdC40Y8qL1xuZnVuY3Rpb24gcmVjdXJjaXZlUGF0aChwb3MsIHBhdGgsIHByZXZQb3MpIHtcbiAgbGV0IG5leHQ7XG4gIGlmIChwYXRoLmxlbmd0aCAhPSAwICYmIHBvcy54ID09IHN0YXJ0UG9zLnggJiYgcG9zLnkgPT0gc3RhcnRQb3MueSkge1xuICAgIGNhbmRpZGF0ZVBhdGhzLnB1c2goWy4uLnBhdGhdKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcGF0aC5wdXNoKHBvcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgbmV4dCA9IG5leHRQb3MoaSwgcG9zKTtcbiAgICBpZiAoIW5leHQgfHwgKG5leHQueCA9PSBwcmV2UG9zLnggJiYgbmV4dC55ID09IHByZXZQb3MueSkpIGNvbnRpbnVlO1xuICAgIGlmIChcbiAgICAgIGRvdEFyci5nZXRDb2xvcihuZXh0KSA9PSBjb2xvciAmJlxuICAgICAgIWRvdEFyci5pc0Nvbm5lY3RlZChuZXh0KSAmJlxuICAgICAgIWZpbmRJbnRlcnNlY3RzKHBhdGgsIG5leHQpXG4gICAgKSB7XG4gICAgICByZWN1cmNpdmVQYXRoKG5leHQsIFsuLi5wYXRoXSwgcG9zKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEludGVyc2VjdHMocGF0aCwgcG9zKSB7XG4gIGZvciAobGV0IGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgaWYgKHBvcy54ID09IHBhdGhbaV0ueCAmJiBwb3MueSA9PSBwYXRoW2ldLnkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1heEFyZWFJbmRleChwYXRocykge1xuICBsZXQgbm93QXJlYSA9IDA7XG4gIGxldCBtYXhOb2RlcyA9IDA7XG4gIGxldCBpbnNpZGVOb2RlcyA9IDA7XG4gIGxldCBpbmRleGVzID0gW107XG4gIGxldCBhcmVhcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm93QXJlYSA9IGZpbmRBcmVhKHBhdGhzW2ldKTtcbiAgICBpZiAobm93QXJlYSA8PSAwKSBjb250aW51ZTtcbiAgICBpbnNpZGVOb2RlcyA9IG5vd0FyZWEgLSBwYXRoc1tpXS5sZW5ndGggLyAyICsgMTsgLy/RhNC+0YDQvNGD0LvQsCDQv9C40LrQsFxuICAgIGlmIChpbnNpZGVOb2RlcyA8PSAwKSBjb250aW51ZTtcbiAgICBpZiAoaW5zaWRlTm9kZXMgPiBtYXhOb2Rlcykge1xuICAgICAgbWF4Tm9kZXMgPSBpbnNpZGVOb2RlcztcbiAgICAgIGluZGV4ZXMgPSBbaV07XG4gICAgICBhcmVhcyA9IFtub3dBcmVhXTtcbiAgICB9IGVsc2UgaWYgKGluc2lkZU5vZGVzID09IG1heE5vZGVzKSB7XG4gICAgICBpbmRleGVzLnB1c2goaSk7XG4gICAgICBhcmVhcy5wdXNoKG5vd0FyZWEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXhOb2RlcyA9PSAwKSByZXR1cm4gLTE7XG4gIGlmIChpbmRleGVzLmxlbmd0aCA8IDEpIHJldHVybiAtMTtcbiAgbGV0IG1pbkFyZWEgPSBhcmVhc1swXTtcbiAgbGV0IHJlc0luZGV4ID0gaW5kZXhlc1swXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFyZWFzW2ldIDwgbWluQXJlYSkge1xuICAgICAgcmVzSW5kZXggPSBpbmRleGVzW2ldO1xuICAgICAgbWluQXJlYSA9IGFyZWFzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmRBcmVhKHBhdGgpIHtcbiAgLy/RhNC+0YDQvNGD0LvQsCDQk9Cw0YPRgdGB0LBcbiAgbGV0IGFyZWEgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBhcmVhICs9IChwYXRoW2ldLnggKiBwYXRoWyhpICsgMSkgJSBwYXRoLmxlbmd0aF0ueSkgLyAyO1xuICAgIGFyZWEgLT0gKHBhdGhbKGkgKyAxKSAlIHBhdGgubGVuZ3RoXS54ICogcGF0aFtpXS55KSAvIDI7XG4gIH1cbiAgcmV0dXJuIGFyZWE7XG59XG5cbmZ1bmN0aW9uIG1hcmtEb3RzQXNDb25uZWN0ZWQocGF0aCkge1xuICBmb3IgKGxldCBwb3Mgb2YgcGF0aCkge1xuICAgIGRvdEFyci5jb25uZWN0KHBvcyk7XG4gIH1cbn1cblxubGV0IFBhdGhGaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYXNzaWduQXJyID0gZnVuY3Rpb24gKGFycikge1xuICAgIGRvdEFyciA9IGFycjtcbiAgfTtcbiAgdGhpcy5maW5kUGF0aCA9IGZpbmRQYXRoO1xufTtcbmV4cG9ydCBsZXQgcGF0aEZpbmRlciA9IG5ldyBQYXRoRmluZGVyKCk7XG4iLCJpbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZmllbGQgfSBmcm9tIFwiLi4vZmllbGQuanNcIjtcblxuZXhwb3J0IGNsYXNzIEZpZWxkQXBwZWFyIGV4dGVuZHMgU3RhZ2Uge1xuICBzdGVwID0gY2FudmFzLndpZHRoIC8gZmllbGQuc2l6ZS54O1xuICBvZmZzZXQgPSAwO1xuICBzcGVlZCA9IGNhbnZhcy5oZWlnaHQgKiA0O1xuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICB0aGlzLm9mZnNldCArPSBkZWx0YVRpbWUgKiB0aGlzLnNwZWVkO1xuICAgIGlmICh0aGlzLm9mZnNldCA+PSBjYW52YXMuaGVpZ2h0KSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkLnNpemUueDsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKGkgKiB0aGlzLnN0ZXAgKyB0aGlzLnN0ZXAgLyAyLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oaSAqIHRoaXMuc3RlcCArIHRoaXMuc3RlcCAvIDIsIHRoaXMub2Zmc2V0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC5zaXplLnk7IGkrKykge1xuICAgICAgY3R4Lm1vdmVUbygwLCBpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMik7XG4gICAgICBjdHgubGluZVRvKHRoaXMub2Zmc2V0LCBpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMik7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZS5qc1wiO1xuXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVNlcnZlciB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQuanNcIjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5nYW1lU2VydmVyLm9uU3RhcnQoKHNvY2tldCkgPT4ge1xuICBzb2NrZXQuc2VuZChgcGxheWVyICR7cGxheWVyLmxvY2FsLmNvbG9yfSAke3BsYXllci5sb2NhbC5uaWNrbmFtZX1gKTtcbiAgbG9hZGVkID0gdHJ1ZTtcbn0pO1xuXG5nYW1lU2VydmVyLm9uUGxheWVyUmVxdWVzdCgoY29sb3IsIG5pY2spID0+IHtcbiAgcGxheWVyLnJlbW90ZS5jb2xvciA9IGNvbG9yO1xuICBwbGF5ZXIucmVtb3RlLm5pY2tuYW1lID0gbmljaztcbiAgY29uc29sZS5sb2cocGxheWVyLnJlbW90ZSk7XG59KTtcblxuZXhwb3J0IGNsYXNzIEdhbWVMb2FkaW5nIGV4dGVuZHMgU3RhZ2Uge1xuICAjc2NyZWVuV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICNzY3JlZW5IZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAjcmFkaXVzID0gNztcbiAgI3RvdGFsU2hhcGVSYWRpdXMgPSA3MDtcbiAgI2NpcmNsZUNvdW50ID0gNTtcbiAgI3NwZWVkID0gMTtcbiAgI29mZnNldCA9IDA7XG4gICNub3dBbHBoYSA9IDE7XG5cbiAgI2dldEFuZ2xlKHBoYXNlKSB7XG4gICAgcmV0dXJuIDQgKiAoTWF0aC5hdGFuKChwaGFzZSAlIDIpIC0gMSkgKyBNYXRoLlBJICogNCk7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBsYXllci5sb2NhbC5jb2xvcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2NpcmNsZUNvdW50OyArK2kpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBhbmdsZSA9IHRoaXMuI2dldEFuZ2xlKHRoaXMuI29mZnNldCArIGkgKiAwLjEpO1xuICAgICAgY3R4LmFyYyhcbiAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogdGhpcy4jdG90YWxTaGFwZVJhZGl1cyArIHRoaXMuI3NjcmVlbldpZHRoIC8gMixcbiAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogdGhpcy4jdG90YWxTaGFwZVJhZGl1cyArIHRoaXMuI3NjcmVlbkhlaWdodCAvIDIsXG4gICAgICAgIHRoaXMuI3JhZGl1cyxcbiAgICAgICAgMCxcbiAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICB0aGlzLiNvZmZzZXQgKz0gdGhpcy4jc3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgaWYgKGxvYWRlZCkge1xuICAgICAgaWYgKHRoaXMuI25vd0FscGhhID4gMCkgdGhpcy4jbm93QWxwaGEgLT0gdGhpcy4jc3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgICB0aGlzLiNub3dBbHBoYSA8IDBcbiAgICAgICAgPyAoY3R4Lmdsb2JhbEFscGhhID0gMClcbiAgICAgICAgOiAoY3R4Lmdsb2JhbEFscGhhID0gdGhpcy4jbm93QWxwaGEpO1xuICAgICAgaWYgKHRoaXMuI25vd0FscGhhIDw9IDApIHtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLy4uL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlLmpzXCI7XG5pbXBvcnQgeyBmaWVsZCB9IGZyb20gXCIuLi9maWVsZC5qc1wiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4uL3ZlY3Rvci5qc1wiO1xuaW1wb3J0IHsgY3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvci5qc1wiO1xuaW1wb3J0IHsgZ2FtZVNlcnZlciB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQuanNcIjtcblxubGV0IG1vdXNlUG9zID0gbmV3IFZlY3RvcigpO1xuXG5sZXQgbG9jYWxUdXJuID0gZmFsc2U7IC8v0YXQvtC00LjRgiDQu9C4INGB0LXQudGH0LDRgSDQu9C+0LrQsNC70YzQvdGL0Lkg0LjQs9GA0L7QulxuXG5nYW1lU2VydmVyLm9uUGxhY2UoKHBvcykgPT4ge1xuICBmaWVsZC5wbGFjZURvdERpcmVjdChwb3MsIHBsYXllci5yZW1vdGUuY29sb3IpO1xuICBsb2NhbFR1cm4gPSB0cnVlO1xufSk7XG5cbmdhbWVTZXJ2ZXIub25UdXJuKCgpID0+IHtcbiAgbG9jYWxUdXJuID0gdHJ1ZTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRNb3VzZUhhbmRsZXIoKSB7XG4gIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBsZXQgc2NhbGVYID0gY2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgbGV0IHNjYWxlWSA9IGNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIG1vdXNlUG9zLnggPSAoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgbW91c2VQb3MueSA9IChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgR2FtZVN0YWdlIGV4dGVuZHMgU3RhZ2Uge1xuICBpbml0KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZ2V0TW91c2VIYW5kbGVyKCkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobG9jYWxUdXJuKSB7XG4gICAgICAgIGN1cnNvci5jbGljaygpO1xuICAgICAgICBpZiAoZmllbGQucGxhY2VEb3QobW91c2VQb3MsIHBsYXllci5sb2NhbC5jb2xvcikpIGxvY2FsVHVybiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICBmaWVsZC5kcmF3RmllbGQoKTtcblxuICAgIGN1cnNvci50YXJnZXQgPSBmaWVsZC5nZXRUYXJnZXRDb29yZChtb3VzZVBvcyk7XG4gICAgY3Vyc29yLnBvcy54ICs9IChjdXJzb3IudGFyZ2V0LnggLSBjdXJzb3IucG9zLngpICogZGVsdGFUaW1lICogY3Vyc29yLnNwZWVkO1xuICAgIGN1cnNvci5wb3MueSArPSAoY3Vyc29yLnRhcmdldC55IC0gY3Vyc29yLnBvcy55KSAqIGRlbHRhVGltZSAqIGN1cnNvci5zcGVlZDtcbiAgICBjdXJzb3IudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgY3Vyc29yLmRyYXcoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0YWdlIHtcbiAgI25leHQgPSB0aGlzO1xuICBnZXROZXh0KCkge1xuICAgIHJldHVybiB0aGlzLiNuZXh0O1xuICB9XG4gIHNldE5leHQoc3RhZ2UpIHtcbiAgICB0aGlzLiNuZXh0ID0gc3RhZ2U7XG4gIH1cbiAgb25Db21wbGV0ZSgpIHtcbiAgICBhbGVydChcImNvbXBsZXRlXCIpO1xuICB9XG4gIGluaXQoKSB7fVxuICB1cGRhdGUoZGVsdGFUaW1lKSB7fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gIGlmICh0eXBlb2YgeCAhPSBcIm51bWJlclwiKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9IFwibnVtYmVyXCIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHg7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG4iLCJsZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcbiAgXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbik7XG5cbmxldCBvbnN0YXJ0ID0gZnVuY3Rpb24gKHNvY2tldCkge307XG5sZXQgcGxheWVyUmVxdWVzdCA9IGZ1bmN0aW9uIChjb2xvciwgbmljaykge307XG5sZXQgcGxhY2UgPSBmdW5jdGlvbiAocG9zKSB7fTtcbmxldCBjaGFuZ2VUdXJuID0gZnVuY3Rpb24gKCkge307XG5cbmV4cG9ydCBsZXQgZ2FtZVNlcnZlciA9IHtcbiAgb25TdGFydChjYWxsYmFjaykge1xuICAgIG9uc3RhcnQgPSBjYWxsYmFjaztcbiAgfSxcbiAgb25QbGF5ZXJSZXF1ZXN0KGNhbGxiYWNrKSB7XG4gICAgcGxheWVyUmVxdWVzdCA9IGNhbGxiYWNrO1xuICB9LFxuICBqb2luKCkge1xuICAgIHNvY2tldC5zZW5kKFwiam9pblwiKTtcbiAgfSxcbiAgcGxhY2UocG9zKSB7XG4gICAgc29ja2V0LnNlbmQoYHBsYWNlICR7cG9zLnh9ICR7cG9zLnl9YCk7XG4gIH0sXG4gIG9uUGxhY2UoY2FsbGJhY2spIHtcbiAgICBwbGFjZSA9IGNhbGxiYWNrO1xuICB9LFxuICBvblR1cm4oY2FsbGJhY2spIHtcbiAgICBjaGFuZ2VUdXJuID0gY2FsbGJhY2s7XG4gIH0sXG59O1xuXG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgc29ja2V0LnNlbmQoXCJjb25cIik7XG59O1xuXG5zb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIGxldCBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgbGV0IGNvbW1hbmQgPSBtZXNzYWdlLnNwbGl0KFwiIFwiKTtcbiAgaWYgKGNvbW1hbmRbMF0gPT0gXCJzdGFydFwiKSB7XG4gICAgb25zdGFydChzb2NrZXQpO1xuICB9XG4gIGlmIChjb21tYW5kWzBdID09IFwicGxheWVyXCIpIHtcbiAgICBwbGF5ZXJSZXF1ZXN0KGNvbW1hbmRbMV0sIGNvbW1hbmRbMl0pO1xuICB9XG4gIGlmIChjb21tYW5kWzBdID09IFwicGxhY2VcIikge1xuICAgIHBsYWNlKHsgeDogTnVtYmVyKGNvbW1hbmRbMV0pLCB5OiBOdW1iZXIoY29tbWFuZFsyXSkgfSk7XG4gIH1cbiAgaWYgKGNvbW1hbmRbMF0gPT0gXCJ0dXJuXCIpIHtcbiAgICBjaGFuZ2VUdXJuKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgXCIuLi9jc3Mvd2VsY29tZS1wb3B1cC5jc3NcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2NhbnZhcy9jYW52YXMuanNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2ZXIgfSBmcm9tIFwiLi93ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGxldCBwbGF5ZXIgPSB7XG4gIGxvY2FsOiB7fSxcbiAgcmVtb3RlOiB7fSxcbn07XG5cbmxldCBwb3B1cEZvcm0gPSBjcmVhdGVGb3JtRWxlbWVudCgpO1xubGV0IHBvcHVwID0gY3JlYXRlUG9wdXBFbGVtZW50KHBvcHVwRm9ybSk7XG5cbi8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZEhhbmRsZXIpO1xud2luZG93Lm9ubG9hZCA9IGxvYWRIYW5kbGVyO1xuXG5mdW5jdGlvbiBsb2FkSGFuZGxlcigpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocG9wdXApO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJ3ZWxjb21lLXBvcHVwX3Nob3duXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gd2VsY29tZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIndlbGNvbWUtcG9wdXBfc2hvd25cIikpIHtcbiAgICBwbGF5ZXIubG9jYWwuY29sb3IgPSBwb3B1cEZvcm0uY29sb3IudmFsdWU7XG4gICAgcGxheWVyLmxvY2FsLm5pY2tuYW1lID0gcG9wdXBGb3JtLm5pY2tuYW1lLnZhbHVlO1xuICAgIGlmIChwbGF5ZXIubG9jYWwubmlja25hbWUgPT0gXCJcIilcbiAgICAgIHBsYXllci5sb2NhbC5uaWNrbmFtZSA9IHBvcHVwRm9ybS5uaWNrbmFtZS5wbGFjZWhvbGRlcjtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwid2VsY29tZS1wb3B1cF9zaG93blwiKTtcbiAgICBnYW1lU2VydmVyLmpvaW4oKTtcbiAgICBzdGFydEdhbWUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBvcHVwLnJlbW92ZSgpLCAxNTApO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1FbGVtZW50KCkge1xuICAvL2Zvcm1cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX2Zvcm1cIjtcblxuICAvL2Zvcm06IG5pY2tuYW1lIHNlY3Rpb25cbiAgbGV0IG5pY2tOYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5pY2tOYW1lU2VjdGlvbi5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX25pY2tuYW1lLXNlY3Rpb25cIjtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX25pY2tuYW1lLWxhYmVsXCI7XG4gIGxhYmVsLmlubmVySFRNTCA9IGDQotCy0L7QtSDQuNC80Y86XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwid2VsY29tZS1wb3B1cF9fbmlja25hbWUtZmllbGRcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBuYW1lPVwibmlja25hbWVcIlxuICAgIHBsYWNlaG9sZGVyPVwi0L/Qu9C10LnRgdGF0L7Qu9C00LXRgFwiXG4gICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICBhdXRvZm9jdXM9XCJhdXRvZm9jdXNcIlxuICAvPmA7XG4gIG5pY2tOYW1lU2VjdGlvbi5hcHBlbmQobGFiZWwpO1xuXG4gIC8vZm9ybTpjb2xvciBwaWNrZXJcbiAgbGV0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb2xvclBpY2tlci5jbGFzc05hbWUgPSBcImNvbG9yLXBpY2tlclwiO1xuICBsZXQgY29sb3JzID0gW1wiI2VlMmIyYlwiLCBcIiMwYmI4NzBcIiwgXCIjMGRiMWYxXCIsIFwiI2U5YTZkYVwiLCBcIiM4MzE1ODNcIl07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IGl0ZW1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJjb2xvci1waWNrZXJfX2l0ZW1cIjtcblxuICAgIGl0ZW1JbnB1dC5jbGFzc05hbWUgPSBcImNvbG9yLXBpY2tlcl9fYnV0dG9uXCI7XG4gICAgaXRlbUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbG9yXCIpO1xuICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjb2xvcnNbaV0pO1xuICAgIGlmIChpID09IDApIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuXG4gICAgaXRlbS5hcHBlbmQoaXRlbUlucHV0KTtcbiAgICBpdGVtSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2ldO1xuICAgIGNvbG9yUGlja2VyLmFwcGVuZChpdGVtKTtcbiAgfVxuXG4gIC8vZm9ybTpzdWJtaXRcbiAgbGV0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGZvcm1TdWJtaXQuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwX19zdWJtaXRcIjtcbiAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdWJtaXRcIik7XG4gIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCLQmNCz0YDQsNGC0YxcIik7XG5cbiAgLy9mb3JtIGZpbGxcbiAgZm9ybS5hcHBlbmQobmlja05hbWVTZWN0aW9uKTtcbiAgZm9ybS5hcHBlbmQoY29sb3JQaWNrZXIpO1xuICBmb3JtLmFwcGVuZChmb3JtU3VibWl0KTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHdlbGNvbWVGb3JtU3VibWl0KTtcbiAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwRWxlbWVudChmb3JtKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwXCI7XG5cbiAgLy9wb3B1cEhlYWRlclxuICBsZXQgcG9wdXBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHBvcHVwSGVhZGVyLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fdGl0bGVcIjtcbiAgcG9wdXBIZWFkZXIuaW5uZXJUZXh0ID0gXCLQktGF0L7QtCDQsiDQuNCz0YDRg1wiO1xuXG4gIC8vZmluYWxcbiAgZGl2LmFwcGVuZChwb3B1cEhlYWRlcik7XG4gIGRpdi5hcHBlbmQoZm9ybSk7XG4gIHJldHVybiBkaXY7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvZm9udHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL3dlbGNvbWUtZm9ybS5qc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==