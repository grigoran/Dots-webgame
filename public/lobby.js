/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lobby/js/canvas/canvas.js":
/*!***************************************!*\
  !*** ./src/lobby/js/canvas/canvas.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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
      if (path.length > 0) _classPrivateFieldGet(_this, _paths).push(path);
    });
    return true;
  };

  this.draw = function () {
    var color = ""; //draw paths

    var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _paths)),
        _step2;

    try {
      for (_iterator.s(); !(_step2 = _iterator.n()).done;) {
        var path = _step2.value;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = dotArr.getColor(path[0]);
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = dotArr.getColor(path[0]);
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
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.globalAlpha = 0.5;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.globalAlpha = 1;
        _init_canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();
      } //draw dots

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pathFinder": () => (/* binding */ pathFinder)
/* harmony export */ });
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ "./src/lobby/js/canvas/vector.js");
/* harmony import */ var _pathWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathWorker.js */ "./src/lobby/js/canvas/pathWorker.js");
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
      var pathIndex = _pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.maxAreaIndex(candidatePaths);
      var result = [];

      if (pathIndex >= 0) {
        result = _toConsumableArray(candidatePaths[pathIndex]);
        markDotsAsConnected(result);
        result = _pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.simplifyPath(result);
        markDotsInsidePath(result);
      }

      resolve(result.path);
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

    if (dotArr.getColor(next) == color && !dotArr.isConnected(next) && !dotArr.isInside(next) && !_pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.findIntersects(path, next)) {
      recurcivePath(next, _toConsumableArray(path), pos);
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

  for (var i = polygon.bounding.min.x; i < polygon.bounding.max.x; i++) {
    for (var j = polygon.bounding.min.y; j < polygon.bounding.max.y; j++) {
      pos.x = i;
      pos.y = j;
      if (dotArr.isConnected(pos)) continue;

      if (_pathWorker_js__WEBPACK_IMPORTED_MODULE_1__.isInsidePath(polygon.path, pos)) {
        dotArr.markInside(pos);
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

var DEV_MODE = true;
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
        if (localTurn || DEV_MODE) {
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

"use strict";
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

"use strict";
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
/***/ (() => {

var turnContainer = document.createElement("div");
turnContainer.classList.add("turn-container");
var localPlayer = document.createElement("p");

/***/ }),

/***/ "./src/lobby/js/websocket.js":
/*!***********************************!*\
  !*** ./src/lobby/js/websocket.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lobby/css/index.css":
/*!*********************************!*\
  !*** ./src/lobby/css/index.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lobby/css/normalize.css":
/*!*************************************!*\
  !*** ./src/lobby/css/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lobby/css/welcome-popup.css":
/*!*****************************************!*\
  !*** ./src/lobby/css/welcome-popup.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/lobby/js/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/normalize.css */ "./src/lobby/css/normalize.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/fonts.css */ "./src/lobby/css/fonts.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/lobby/css/index.css");
/* harmony import */ var _welcome_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-form.js */ "./src/lobby/js/welcome-form.js");
/* harmony import */ var _game_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-ui.js */ "./src/lobby/js/game-ui.js");
/* harmony import */ var _game_ui_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_ui_js__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvY3Vyc29yLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL2RvdHMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvaW5pdC1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvcGF0aEZpbmRlci5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9wYXRoV29ya2VyLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvY2FudmFzL3N0YWdlcy9maWVsZC1hcHBlYXIuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvc3RhZ2VzL2dhbWUtbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9zdGFnZXMvZ2FtZS1zdGFnZS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL2NhbnZhcy9zdGFnZXMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9jYW52YXMvdmVjdG9yLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvanMvZ2FtZS11aS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2pzL3dlbGNvbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2xvYmJ5L2Nzcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvbG9iYnkvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9jc3Mvd2VsY29tZS1wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RvdHN3ZWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RvdHN3ZWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9sb2JieS9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGFydEdhbWUiLCJsYXN0VGltZSIsIkRhdGUiLCJub3ciLCJjdHgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lTG9vcCIsIlN0YWdlIiwiY3VycmVudFN0YWdlIiwiZ2V0TmV4dCIsImluaXQiLCJnYW1lTG9hZFN0YWdlIiwiR2FtZUxvYWRpbmciLCJmaWVsZEFwcGVhclN0YWdlIiwiRmllbGRBcHBlYXIiLCJnYW1lU3RhZ2UiLCJHYW1lU3RhZ2UiLCJzZXROZXh0Iiwibm93VGltZSIsImRlbHRhVGltZSIsImNhbnZhcyIsInVwZGF0ZSIsIm5vd1JhZGl1cyIsImFuaW1hdGlvblByb2dyZXNzIiwiYW5pbWF0aW9uU3BlZWQiLCJnZXRQcm9ncmVzcyIsInByb2dyZXNzIiwicHJvZyIsIkN1cnNvciIsInBvcyIsIlZlY3RvciIsInRhcmdldCIsInJhZGl1cyIsInNwZWVkIiwiZHJhdyIsInBsYXllciIsImN1cnNvciIsIngiLCJ5IiwiTWF0aCIsIlBJIiwiY2xpY2siLCJUV09fUEkiLCJEb3QiLCJjb2xvciIsImNvbm5lY3RlZCIsImluc2lkZSIsIkRvdEFyciIsIm1lc2hTaXplIiwiYXJyIiwiaSIsImoiLCJzaXplIiwiZ2V0Q29sb3IiLCJzZXRDb2xvciIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsIm1hcmtJbnNpZGUiLCJpc0luc2lkZSIsImRvdEFyciIsIkRvdHMiLCJzdGVwIiwicGF0aEZpbmRlciIsInB1c2giLCJ0aGVuIiwicGF0aCIsImxlbmd0aCIsImRvdHMiLCJtYXAiLCJ2YWwiLCJiZWciLCJlbmQiLCJyZXQiLCJGaWVsZCIsIlBhdGgyRCIsIm1vdmVUbyIsImxpbmVUbyIsImRyYXdGaWVsZCIsIm5ld1BvcyIsImdldE1lc2hDb29yZCIsImdhbWVTZXJ2ZXIiLCJmbG9vciIsIm1lc2hQb3MiLCJmaWVsZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJzYXZlIiwic3RhcnRQb3MiLCJjYW5kaWRhdGVQYXRocyIsIm5leHRQb3MiLCJkaXIiLCJ1bmRlZmluZWQiLCJmaW5kUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjdXJjaXZlUGF0aCIsInBhdGhJbmRleCIsInBhdGhXb3JrZXIiLCJyZXN1bHQiLCJtYXJrRG90c0FzQ29ubmVjdGVkIiwibWFya0RvdHNJbnNpZGVQYXRoIiwicHJldlBvcyIsIm5leHQiLCJwb2x5Z29uIiwiYm91bmRpbmciLCJtaW4iLCJtYXgiLCJQYXRoRmluZGVyIiwiYXNzaWduQXJyIiwiZmluZEludGVyc2VjdHMiLCJtYXhBcmVhSW5kZXgiLCJwYXRocyIsIm5vd0FyZWEiLCJtYXhOb2RlcyIsImluc2lkZU5vZGVzIiwiaW5kZXhlcyIsImFyZWFzIiwiZmluZEFyZWEiLCJtaW5BcmVhIiwicmVzSW5kZXgiLCJhcmVhIiwic2ltcGxpZnlQYXRoIiwiZGlyZWN0aW9uIiwibm93RGlyZWN0aW9uIiwic291cmNlIiwiaXNJbnNpZGVQYXRoIiwiaG9yTGluZVkiLCJpbnRlcnNlY3RzIiwiaW50ZXJYIiwiZGVsdGFBIiwiZGVsdGFCIiwic2lnbiIsIm9mZnNldCIsIm9uQ29tcGxldGUiLCJsb2FkZWQiLCJzb2NrZXQiLCJzZW5kIiwibmljayIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsImFuZ2xlIiwic2luIiwiY29zIiwicGhhc2UiLCJhdGFuIiwibW91c2VQb3MiLCJsb2NhbFR1cm4iLCJERVZfTU9ERSIsImdldE1vdXNlSGFuZGxlciIsInJlY3QiLCJzY2FsZVgiLCJzY2FsZVkiLCJldmVudCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFnZSIsImFsZXJ0IiwidHVybkNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2NhbFBsYXllciIsIldlYlNvY2tldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsInBhdGhuYW1lIiwib25zdGFydCIsInBsYXllclJlcXVlc3QiLCJwbGFjZSIsImNoYW5nZVR1cm4iLCJvblN0YXJ0IiwiY2FsbGJhY2siLCJvblBsYXllclJlcXVlc3QiLCJqb2luIiwib25QbGFjZSIsIm9uVHVybiIsIm9ub3BlbiIsImUiLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwiZGF0YSIsImNvbW1hbmQiLCJzcGxpdCIsIk51bWJlciIsImxvY2FsIiwicmVtb3RlIiwicG9wdXBGb3JtIiwiY3JlYXRlRm9ybUVsZW1lbnQiLCJwb3B1cCIsImNyZWF0ZVBvcHVwRWxlbWVudCIsIm9ubG9hZCIsImxvYWRIYW5kbGVyIiwiYm9keSIsImFwcGVuZCIsInRvZ2dsZSIsIndlbGNvbWVGb3JtU3VibWl0IiwiY29udGFpbnMiLCJ2YWx1ZSIsIm5pY2tuYW1lIiwicGxhY2Vob2xkZXIiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY2xhc3NOYW1lIiwibmlja05hbWVTZWN0aW9uIiwibGFiZWwiLCJpbm5lckhUTUwiLCJjb2xvclBpY2tlciIsImNvbG9ycyIsIml0ZW0iLCJpdGVtSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZvcm1TdWJtaXQiLCJkaXYiLCJwb3B1cEhlYWRlciIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQzFCQyxVQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFYO0FBQ0FDLHVEQUFBO0FBQ0FDLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0Q7QUFDRCxJQUFJTCxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFmOztBQUVBSSx3RUFBQSxHQUE2QixZQUFNO0FBQ2pDQyxjQUFZLEdBQUdBLFlBQVksQ0FBQ0MsT0FBYixFQUFmO0FBQ0FELGNBQVksQ0FBQ0UsSUFBYjtBQUNBTiwwREFBQTtBQUNELENBSkQsQyxDQU1BOzs7QUFDQSxJQUFJTyxhQUFhLEdBQUcsSUFBSUMsZ0VBQUosRUFBcEI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxJQUFJQyxnRUFBSixFQUF2QjtBQUNBLElBQUlDLFNBQVMsR0FBRyxJQUFJQyw0REFBSixFQUFoQixDLENBRUE7O0FBQ0EsSUFBSVIsWUFBWSxHQUFHRyxhQUFuQjtBQUNBQSxhQUFhLENBQUNNLE9BQWQsQ0FBc0JKLGdCQUF0QjtBQUNBQSxnQkFBZ0IsQ0FBQ0ksT0FBakIsQ0FBeUJGLFNBQXpCOztBQUVBLFNBQVNULFFBQVQsR0FBb0I7QUFDbEIsTUFBSVksT0FBTyxHQUFHaEIsSUFBSSxDQUFDQyxHQUFMLEVBQWQ7QUFDQSxNQUFJZ0IsU0FBUyxHQUFHLENBQUNELE9BQU8sR0FBR2pCLFFBQVgsSUFBdUIsSUFBdkM7QUFDQUEsVUFBUSxHQUFHaUIsT0FBWDtBQUNBZCw0REFBQSxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JnQix5REFBcEIsRUFBa0NBLDBEQUFsQztBQUNB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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsb2JieS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcblxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvc3RhZ2UuanNcIjtcbmltcG9ydCB7IEdhbWVMb2FkaW5nIH0gZnJvbSBcIi4vc3RhZ2VzL2dhbWUtbG9hZGluZy5qc1wiO1xuaW1wb3J0IHsgRmllbGRBcHBlYXIgfSBmcm9tIFwiLi9zdGFnZXMvZmllbGQtYXBwZWFyLmpzXCI7XG5pbXBvcnQgeyBHYW1lU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZXMvZ2FtZS1zdGFnZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBsYXN0VGltZSA9IERhdGUubm93KCk7XG4gIGN0eC5zYXZlKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5sZXQgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG5TdGFnZS5wcm90b3R5cGUub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgY3VycmVudFN0YWdlID0gY3VycmVudFN0YWdlLmdldE5leHQoKTtcbiAgY3VycmVudFN0YWdlLmluaXQoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8vaW5pdCBnYW1lIHN0YWdlc1xubGV0IGdhbWVMb2FkU3RhZ2UgPSBuZXcgR2FtZUxvYWRpbmcoKTtcbmxldCBmaWVsZEFwcGVhclN0YWdlID0gbmV3IEZpZWxkQXBwZWFyKCk7XG5sZXQgZ2FtZVN0YWdlID0gbmV3IEdhbWVTdGFnZSgpO1xuXG4vL2dhbWUgc3RhZ2VzIGRlcGVuZGVuY2VzXG5sZXQgY3VycmVudFN0YWdlID0gZ2FtZUxvYWRTdGFnZTtcbmdhbWVMb2FkU3RhZ2Uuc2V0TmV4dChmaWVsZEFwcGVhclN0YWdlKTtcbmZpZWxkQXBwZWFyU3RhZ2Uuc2V0TmV4dChnYW1lU3RhZ2UpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgbGV0IG5vd1RpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgZGVsdGFUaW1lID0gKG5vd1RpbWUgLSBsYXN0VGltZSkgLyAxMDAwO1xuICBsYXN0VGltZSA9IG5vd1RpbWU7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3VycmVudFN0YWdlLnVwZGF0ZShkZWx0YVRpbWUpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5cbmxldCBub3dSYWRpdXMgPSAwO1xubGV0IGFuaW1hdGlvblByb2dyZXNzID0gMTAwO1xubGV0IGFuaW1hdGlvblNwZWVkID0gNTAwOyAvL3BlcmNlbnQgcGVyIHNlY29uZFxuXG4vL2NhbGN1bGF0ZSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEgZGVwZW5kZW50IG9uIGFuaW1hdGlvbiBQcm9ncmVzcygwOjEwMCk7XG5mdW5jdGlvbiBnZXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICBsZXQgcHJvZyA9IHByb2dyZXNzIC8gMTAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZnVuY3Rpb24gQ3Vyc29yKCkge1xuICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoKTtcbiAgdGhpcy50YXJnZXQgPSBuZXcgVmVjdG9yKCk7XG4gIHRoaXMucmFkaXVzID0gMTA7XG4gIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzO1xuICB0aGlzLnNwZWVkID0gMTA7XG4gIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBsYXllci5sb2NhbC5jb2xvcjtcbiAgICBjdHguYXJjKGN1cnNvci5wb3MueCwgY3Vyc29yLnBvcy55LCBub3dSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbCgpO1xuICB9O1xuICB0aGlzLmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGFuaW1hdGlvblByb2dyZXNzID0gMDtcbiAgICBub3dSYWRpdXMgPSAwO1xuICB9O1xuICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YVRpbWUpIHtcbiAgICBpZiAoYW5pbWF0aW9uUHJvZ3Jlc3MgPCAxMDApIHtcbiAgICAgIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzICogZ2V0UHJvZ3Jlc3MoYW5pbWF0aW9uUHJvZ3Jlc3MpO1xuICAgICAgYW5pbWF0aW9uUHJvZ3Jlc3MgKz0gZGVsdGFUaW1lICogYW5pbWF0aW9uU3BlZWQ7XG4gICAgfSBlbHNlIG5vd1JhZGl1cyA9IHRoaXMucmFkaXVzO1xuICB9O1xufVxuXG5leHBvcnQgbGV0IGN1cnNvciA9IG5ldyBDdXJzb3IoKTtcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IHBhdGhGaW5kZXIgfSBmcm9tIFwiLi9wYXRoRmluZGVyLmpzXCI7XG5cbmNvbnN0IFRXT19QSSA9IDIgKiBNYXRoLlBJO1xuXG5mdW5jdGlvbiBEb3QoKSB7XG4gIHRoaXMuY29sb3IgPSBcIlwiO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmluc2lkZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBEb3RBcnIobWVzaFNpemUpIHtcbiAgbGV0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2hTaXplLng7IGkrKykge1xuICAgIGFycltpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzaFNpemUueTsgaisrKSB7XG4gICAgICBhcnJbaV1bal0gPSBuZXcgRG90KCk7XG4gICAgfVxuICB9XG4gIHRoaXMuc2l6ZSA9IG1lc2hTaXplO1xuICB0aGlzLmdldENvbG9yID0gZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiBhcnJbcG9zLnhdW3Bvcy55XS5jb2xvcjtcbiAgfTtcbiAgdGhpcy5zZXRDb2xvciA9IGZ1bmN0aW9uIChwb3MsIGNvbG9yKSB7XG4gICAgYXJyW3Bvcy54XVtwb3MueV0uY29sb3IgPSBjb2xvcjtcbiAgfTtcbiAgdGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKHBvcykge1xuICAgIGFycltwb3MueF1bcG9zLnldLmNvbm5lY3RlZCA9IHRydWU7XG4gIH07XG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIGFycltwb3MueF1bcG9zLnldLmNvbm5lY3RlZDtcbiAgfTtcbiAgdGhpcy5tYXJrSW5zaWRlID0gZnVuY3Rpb24gKHBvcykge1xuICAgIGFycltwb3MueF1bcG9zLnldLmluc2lkZSA9IHRydWU7XG4gIH07XG4gIHRoaXMuaXNJbnNpZGUgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIGFycltwb3MueF1bcG9zLnldLmluc2lkZTtcbiAgfTtcbn1cblxubGV0IGRvdEFyciA9IHt9O1xuXG5jbGFzcyBEb3RzIHtcbiAgI3N0ZXAgPSAwO1xuICAjc2l6ZSA9IHt9O1xuICAjZG90UmFkaXVzID0gODtcbiAgI3BhdGhzID0gW107XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChzaXplLCBzdGVwKSB7XG4gICAgICB0aGlzLiNzdGVwID0gc3RlcDtcbiAgICAgIHRoaXMuI3NpemUgPSBzaXplO1xuICAgICAgZG90QXJyID0gbmV3IERvdEFycihzaXplKTtcbiAgICAgIHBhdGhGaW5kZXIuYXNzaWduQXJyKGRvdEFycik7XG4gICAgfTtcbiAgICB0aGlzLnB1c2ggPSBmdW5jdGlvbiAocG9zLCBjb2xvcikge1xuICAgICAgaWYgKGRvdEFyci5nZXRDb2xvcihwb3MpICE9IFwiXCIgfHwgZG90QXJyLmlzSW5zaWRlKHBvcykpIHJldHVybiBmYWxzZTtcbiAgICAgIGRvdEFyci5zZXRDb2xvcihwb3MsIGNvbG9yKTtcbiAgICAgIHBhdGhGaW5kZXIuZmluZFBhdGgocG9zKS50aGVuKChwYXRoKSA9PiB7XG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHRoaXMuI3BhdGhzLnB1c2gocGF0aCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNvbG9yID0gXCJcIjtcbiAgICAgIC8vZHJhdyBwYXRoc1xuICAgICAgZm9yIChsZXQgcGF0aCBvZiB0aGlzLiNwYXRocykge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGRvdEFyci5nZXRDb2xvcihwYXRoWzBdKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGRvdEFyci5nZXRDb2xvcihwYXRoWzBdKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIGZvciAobGV0IHBvcyBvZiBwYXRoKSB7XG4gICAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgIHBvcy54ICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgcG9zLnkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vZHJhdyBkb3RzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3NpemUueDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jc2l6ZS55OyBqKyspIHtcbiAgICAgICAgICBjb2xvciA9IGRvdEFyci5nZXRDb2xvcih7IHg6IGksIHk6IGogfSk7XG4gICAgICAgICAgaWYgKGNvbG9yID09IFwiXCIpIGNvbnRpbnVlO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICAgICAgICBqICogdGhpcy4jc3RlcCArIHRoaXMuI3N0ZXAgLyAyLFxuICAgICAgICAgICAgdGhpcy4jZG90UmFkaXVzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIFRXT19QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGxldCBkb3RzID0gbmV3IERvdHMoKTtcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vaW5pdC1jYW52YXMuanNcIjtcbmltcG9ydCB7IGRvdHMgfSBmcm9tIFwiLi9kb3RzLmpzXCI7XG5pbXBvcnQgeyBnYW1lU2VydmVyIH0gZnJvbSBcIi4uL3dlYnNvY2tldC5qc1wiO1xuXG5mdW5jdGlvbiBtYXAodmFsLCBiZWcsIGVuZCkge1xuICBsZXQgcmV0ID0gdmFsID4gZW5kID8gZW5kIDogdmFsO1xuICByZXQgPSByZXQgPCBiZWcgPyBiZWcgOiByZXQ7XG4gIHJldHVybiByZXQ7XG59XG5cbmNsYXNzIEZpZWxkIHtcbiAgI3N0ZXAgPSAwO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL9Cg0LDQt9C80LXRgCDQv9C+0LvRj1xuICAgIHRoaXMuc2l6ZSA9IHtcbiAgICAgIHg6IDE1LFxuICAgICAgeTogMTUsXG4gICAgfTtcblxuICAgIGxldCBwYXRoID0gbmV3IFBhdGgyRCgpOyAvL9Cf0YPRgtGMINC00LvRjyDRgNC40YHQvtCy0LDQvdC40Y8g0L/QvtC70Y9cbiAgICB0aGlzLiNzdGVwID0gY2FudmFzLndpZHRoIC8gdGhpcy5zaXplLng7IC8v0YjQsNCzINGB0LXRgtC60LhcblxuICAgIC8v0YDQuNGB0YPQtdC8INGB0LXRgtC60YNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZS54OyBpKyspIHtcbiAgICAgIHBhdGgubW92ZVRvKGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsIDApO1xuICAgICAgcGF0aC5saW5lVG8oaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMiwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplLnk7IGkrKykge1xuICAgICAgcGF0aC5tb3ZlVG8oMCwgaSAqIHRoaXMuI3N0ZXAgKyB0aGlzLiNzdGVwIC8gMik7XG4gICAgICBwYXRoLmxpbmVUbyhjYW52YXMud2lkdGgsIGkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIpO1xuICAgIH1cblxuICAgIGRvdHMuaW5pdCh0aGlzLnNpemUsIHRoaXMuI3N0ZXApO1xuXG4gICAgLy/RhNGD0L3QutGG0LjRjyDRgNC40YHQvtCy0LDQvdC40Y8g0L/QvtC70Y9cbiAgICB0aGlzLmRyYXdGaWVsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgY3R4LnN0cm9rZShwYXRoKTtcbiAgICAgIGRvdHMuZHJhdygpO1xuICAgIH07XG4gIH1cbiAgcGxhY2VEb3QocG9zLCBjb2xvcikge1xuICAgIGxldCBuZXdQb3MgPSB0aGlzLmdldE1lc2hDb29yZChwb3MpO1xuICAgIGlmIChkb3RzLnB1c2gobmV3UG9zLCBjb2xvcikpIHtcbiAgICAgIGdhbWVTZXJ2ZXIucGxhY2UobmV3UG9zKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy91c2UgZm9yIHBsYWNlIGRvdCBmcm9tIHJlbW90ZSBzZXJ2ZXIgcG9zLW1lc2ggY29vcmRcbiAgcGxhY2VEb3REaXJlY3QocG9zLCBjb2xvcikge1xuICAgIHJldHVybiBkb3RzLnB1c2gocG9zLCBjb2xvcik7XG4gIH1cbiAgZ2V0TWVzaENvb3JkKHBvcykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBtYXAoTWF0aC5mbG9vcihwb3MueCAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueCAtIDEpLFxuICAgICAgeTogbWFwKE1hdGguZmxvb3IocG9zLnkgLyB0aGlzLiNzdGVwKSwgMCwgdGhpcy5zaXplLnkgLSAxKSxcbiAgICB9O1xuICB9XG4gIGdldFRhcmdldENvb3JkKHBvcykge1xuICAgIGxldCBtZXNoUG9zID0ge307XG4gICAgbWVzaFBvcy54ID0gbWFwKE1hdGguZmxvb3IocG9zLnggLyB0aGlzLiNzdGVwKSwgMCwgdGhpcy5zaXplLnggLSAxKTtcbiAgICBtZXNoUG9zLnkgPSBtYXAoTWF0aC5mbG9vcihwb3MueSAvIHRoaXMuI3N0ZXApLCAwLCB0aGlzLnNpemUueSAtIDEpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBtZXNoUG9zLnggKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgICB5OiBtZXNoUG9zLnkgKiB0aGlzLiNzdGVwICsgdGhpcy4jc3RlcCAvIDIsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGZpZWxkID0gbmV3IEZpZWxkKCk7XG4iLCJleHBvcnQgbGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FudmFzXCIpO1xuZXhwb3J0IGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jdHguc2F2ZSgpO1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yLmpzXCI7XG5pbXBvcnQgKiBhcyBwYXRoV29ya2VyIGZyb20gXCIuL3BhdGhXb3JrZXIuanNcIjtcblxubGV0IGRvdEFyciA9IHt9O1xubGV0IHN0YXJ0UG9zID0gbmV3IFZlY3RvcigpO1xubGV0IGNvbG9yID0gXCJcIjtcbmxldCBjYW5kaWRhdGVQYXRocyA9IFtdO1xuXG5mdW5jdGlvbiBuZXh0UG9zKGRpciwgcG9zKSB7XG4gIGxldCBuZXdQb3M7XG4gIHN3aXRjaCAoZGlyKSB7XG4gICAgY2FzZSAwOlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCArIDEsIHBvcy55KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggKyAxLCBwb3MueSArIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCwgcG9zLnkgKyAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggLSAxLCBwb3MueSArIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCAtIDEsIHBvcy55KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggLSAxLCBwb3MueSAtIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2OlxuICAgICAgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3MueCwgcG9zLnkgLSAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzpcbiAgICAgIG5ld1BvcyA9IG5ldyBWZWN0b3IocG9zLnggKyAxLCBwb3MueSAtIDEpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKFxuICAgIG5ld1Bvcy54IDwgMCB8fFxuICAgIG5ld1Bvcy54ID49IGRvdEFyci5zaXplLnggfHxcbiAgICBuZXdQb3MueSA8IDAgfHxcbiAgICBuZXdQb3MueSA+PSBkb3RBcnIuc2l6ZS55XG4gIClcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICByZXR1cm4gbmV3UG9zO1xufVxuXG5sZXQgZmluZFBhdGggPSBmdW5jdGlvbiAocG9zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc3RhcnRQb3MgPSBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSk7XG4gICAgY29sb3IgPSBkb3RBcnIuZ2V0Q29sb3IocG9zKTtcbiAgICBjYW5kaWRhdGVQYXRocyA9IFtdO1xuICAgIHJlY3VyY2l2ZVBhdGgoc3RhcnRQb3MsIFtdLCBzdGFydFBvcyk7XG4gICAgaWYgKGNhbmRpZGF0ZVBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBwYXRoSW5kZXggPSBwYXRoV29ya2VyLm1heEFyZWFJbmRleChjYW5kaWRhdGVQYXRocyk7XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICBpZiAocGF0aEluZGV4ID49IDApIHtcbiAgICAgICAgcmVzdWx0ID0gWy4uLmNhbmRpZGF0ZVBhdGhzW3BhdGhJbmRleF1dO1xuICAgICAgICBtYXJrRG90c0FzQ29ubmVjdGVkKHJlc3VsdCk7XG4gICAgICAgIHJlc3VsdCA9IHBhdGhXb3JrZXIuc2ltcGxpZnlQYXRoKHJlc3VsdCk7XG4gICAgICAgIG1hcmtEb3RzSW5zaWRlUGF0aChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShyZXN1bHQucGF0aCk7XG4gICAgfSBlbHNlIHJlc29sdmUoW10pO1xuICB9KTtcbn07XG5cbi8q0JIg0Y3RgtC+0Lwg0LDQu9Cz0L7RgNC40YLQvNC1INC/0YDQuNGB0YPRgtGB0YLQstGD0LXRgiDQv9GA0L7QstC10YDQutCwIDPRhSDQv9C+0YHQu9C10LTQvdC40YUg0Y3Qu9C70LXQvNC10L3RgtCy0L4g0LLQviDQuNC30LHQtdCw0L3QuNC4INC30LDQvNGL0LrQsNC90LjRjyovXG5mdW5jdGlvbiByZWN1cmNpdmVQYXRoKHBvcywgcGF0aCwgcHJldlBvcykge1xuICBsZXQgbmV4dDtcbiAgaWYgKHBhdGgubGVuZ3RoICE9IDAgJiYgcG9zLnggPT0gc3RhcnRQb3MueCAmJiBwb3MueSA9PSBzdGFydFBvcy55KSB7XG4gICAgY2FuZGlkYXRlUGF0aHMucHVzaChbLi4ucGF0aF0pO1xuICAgIHJldHVybjtcbiAgfVxuICBwYXRoLnB1c2gocG9zKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBuZXh0ID0gbmV4dFBvcyhpLCBwb3MpO1xuICAgIGlmICghbmV4dCB8fCAobmV4dC54ID09IHByZXZQb3MueCAmJiBuZXh0LnkgPT0gcHJldlBvcy55KSkgY29udGludWU7XG4gICAgaWYgKFxuICAgICAgZG90QXJyLmdldENvbG9yKG5leHQpID09IGNvbG9yICYmXG4gICAgICAhZG90QXJyLmlzQ29ubmVjdGVkKG5leHQpICYmXG4gICAgICAhZG90QXJyLmlzSW5zaWRlKG5leHQpICYmXG4gICAgICAhcGF0aFdvcmtlci5maW5kSW50ZXJzZWN0cyhwYXRoLCBuZXh0KVxuICAgICkge1xuICAgICAgcmVjdXJjaXZlUGF0aChuZXh0LCBbLi4ucGF0aF0sIHBvcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtEb3RzQXNDb25uZWN0ZWQocGF0aCkge1xuICBmb3IgKGxldCBwb3Mgb2YgcGF0aCkge1xuICAgIGRvdEFyci5jb25uZWN0KHBvcyk7XG4gIH1cbn1cblxuLy9JTVBPUlRBTlQgaW4gdGhpcyBmdW5jdGlvbiwgcGF0aCBpcyBvYmplY3Qgd2l0aCBib3VuZGluZ3MgYW5kIG9wdGltaXplZCBwYXRoIGZpZWxkc1xuZnVuY3Rpb24gbWFya0RvdHNJbnNpZGVQYXRoKHBvbHlnb24pIHtcbiAgbGV0IHBvcyA9IG5ldyBWZWN0b3IoKTtcbiAgbGV0IGNvbG9yID0gZG90QXJyLmdldENvbG9yKHBvbHlnb24ucGF0aFswXSk7XG4gIGZvciAobGV0IGkgPSBwb2x5Z29uLmJvdW5kaW5nLm1pbi54OyBpIDwgcG9seWdvbi5ib3VuZGluZy5tYXgueDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IHBvbHlnb24uYm91bmRpbmcubWluLnk7IGogPCBwb2x5Z29uLmJvdW5kaW5nLm1heC55OyBqKyspIHtcbiAgICAgIHBvcy54ID0gaTtcbiAgICAgIHBvcy55ID0gajtcbiAgICAgIGlmIChkb3RBcnIuaXNDb25uZWN0ZWQocG9zKSkgY29udGludWU7XG4gICAgICBpZiAocGF0aFdvcmtlci5pc0luc2lkZVBhdGgocG9seWdvbi5wYXRoLCBwb3MpKSB7XG4gICAgICAgIGRvdEFyci5tYXJrSW5zaWRlKHBvcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBQYXRoRmluZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFzc2lnbkFyciA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICBkb3RBcnIgPSBhcnI7XG4gIH07XG4gIHRoaXMuZmluZFBhdGggPSBmaW5kUGF0aDtcbn07XG5leHBvcnQgbGV0IHBhdGhGaW5kZXIgPSBuZXcgUGF0aEZpbmRlcigpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbnRlcnNlY3RzKHBhdGgsIHBvcykge1xuICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGlmIChwb3MueCA9PSBwYXRoW2ldLnggJiYgcG9zLnkgPT0gcGF0aFtpXS55KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4QXJlYUluZGV4KHBhdGhzKSB7XG4gIGxldCBub3dBcmVhID0gMDtcbiAgbGV0IG1heE5vZGVzID0gMDtcbiAgbGV0IGluc2lkZU5vZGVzID0gMDtcbiAgbGV0IGluZGV4ZXMgPSBbXTtcbiAgbGV0IGFyZWFzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICBub3dBcmVhID0gZmluZEFyZWEocGF0aHNbaV0pO1xuICAgIGlmIChub3dBcmVhIDw9IDApIGNvbnRpbnVlO1xuICAgIGluc2lkZU5vZGVzID0gbm93QXJlYSAtIHBhdGhzW2ldLmxlbmd0aCAvIDIgKyAxOyAvL9GE0L7RgNC80YPQu9CwINC/0LjQutCwXG4gICAgaWYgKGluc2lkZU5vZGVzIDw9IDApIGNvbnRpbnVlO1xuICAgIGlmIChpbnNpZGVOb2RlcyA+IG1heE5vZGVzKSB7XG4gICAgICBtYXhOb2RlcyA9IGluc2lkZU5vZGVzO1xuICAgICAgaW5kZXhlcyA9IFtpXTtcbiAgICAgIGFyZWFzID0gW25vd0FyZWFdO1xuICAgIH0gZWxzZSBpZiAoaW5zaWRlTm9kZXMgPT0gbWF4Tm9kZXMpIHtcbiAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgIGFyZWFzLnB1c2gobm93QXJlYSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1heE5vZGVzID09IDApIHJldHVybiAtMTtcbiAgaWYgKGluZGV4ZXMubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xuICBsZXQgbWluQXJlYSA9IGFyZWFzWzBdO1xuICBsZXQgcmVzSW5kZXggPSBpbmRleGVzWzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJlYXNbaV0gPCBtaW5BcmVhKSB7XG4gICAgICByZXNJbmRleCA9IGluZGV4ZXNbaV07XG4gICAgICBtaW5BcmVhID0gYXJlYXNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNJbmRleDtcbn1cblxuZnVuY3Rpb24gZmluZEFyZWEocGF0aCkge1xuICAvL9GE0L7RgNC80YPQu9CwINCT0LDRg9GB0YHQsFxuICBsZXQgYXJlYSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGFyZWEgKz0gKHBhdGhbaV0ueCAqIHBhdGhbKGkgKyAxKSAlIHBhdGgubGVuZ3RoXS55KSAvIDI7XG4gICAgYXJlYSAtPSAocGF0aFsoaSArIDEpICUgcGF0aC5sZW5ndGhdLnggKiBwYXRoW2ldLnkpIC8gMjtcbiAgfVxuICByZXR1cm4gYXJlYTtcbn1cblxuLy90b2RvOiByZXR1cm4gYm91bmRpbmcgYm94XG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlQYXRoKHBhdGgpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBsZXQgZGlyZWN0aW9uID0gNDsgLy9jYW4gYmUgNSAyIDEgMCAzIDYgNyA4LCA0IG5vIGRpcmVjdGlvblxuICBsZXQgbm93RGlyZWN0aW9uID0gNDtcblxuICBsZXQgYm91bmRpbmcgPSB7XG4gICAgbWluOiB7IHg6IHBhdGhbMF0ueCwgeTogcGF0aFswXS55IH0sXG4gICAgbWF4OiB7IHg6IHBhdGhbMF0ueCwgeTogcGF0aFswXS55IH0sXG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsZXQgbmV4dCA9IHBhdGhbaSArIDFdO1xuICAgIGxldCBwb3MgPSBwYXRoW2ldO1xuXG4gICAgaWYgKHBvcy54IDwgYm91bmRpbmcubWluLngpIGJvdW5kaW5nLm1pbi54ID0gcG9zLng7XG4gICAgaWYgKHBvcy55IDwgYm91bmRpbmcubWluLnkpIGJvdW5kaW5nLm1pbi55ID0gcG9zLnk7XG4gICAgaWYgKHBvcy54ID4gYm91bmRpbmcubWF4LngpIGJvdW5kaW5nLm1heC54ID0gcG9zLng7XG4gICAgaWYgKHBvcy55ID4gYm91bmRpbmcubWF4LnkpIGJvdW5kaW5nLm1heC55ID0gcG9zLnk7XG5cbiAgICBub3dEaXJlY3Rpb24gPSBuZXh0LnggLSBwb3MueCArIChuZXh0LnkgLSBwb3MueSkgKiAzICsgNDtcbiAgICBpZiAobm93RGlyZWN0aW9uICE9IGRpcmVjdGlvbikge1xuICAgICAgZGlyZWN0aW9uID0gbm93RGlyZWN0aW9uO1xuICAgICAgcmVzdWx0LnB1c2gocG9zKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocGF0aFtwYXRoLmxlbmd0aCAtIDFdKTtcbiAgcmV0dXJuIHsgcGF0aDogcmVzdWx0LCBib3VuZGluZywgc291cmNlOiBwYXRoIH07XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJbnNpZGVQYXRoKHBhdGgsIHBvcykge1xuICBsZXQgaG9yTGluZVkgPSBwb3MueSArIDAuNTtcbiAgbGV0IGludGVyc2VjdHMgPSAwO1xuICBsZXQgbm93O1xuICBsZXQgbmV4dDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPT0gcGF0aC5sZW5ndGggLSAxKSB7XG4gICAgICBub3cgPSBwYXRoW2ldO1xuICAgICAgbmV4dCA9IHBhdGhbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdyA9IHBhdGhbaV07XG4gICAgICBuZXh0ID0gcGF0aFtpICsgMV07XG4gICAgfVxuICAgIGxldCBpbnRlclggPVxuICAgICAgKChob3JMaW5lWSAtIG5vdy55KSAqIChuZXh0LnggLSBub3cueCkpIC8gKG5leHQueSAtIG5vdy55KSArIG5vdy54O1xuICAgIGlmIChpbnRlclggPCBwb3MueCkgY29udGludWU7XG5cbiAgICBsZXQgZGVsdGFBID0gaG9yTGluZVkgLSBub3cueTtcbiAgICBsZXQgZGVsdGFCID0gaG9yTGluZVkgLSBuZXh0Lnk7XG4gICAgaWYgKGRlbHRhQSA9PSAwIHx8IGRlbHRhQiA9PSAwKSBpbnRlcnNlY3RzKys7XG4gICAgaWYgKE1hdGguc2lnbihkZWx0YUEpICE9IE1hdGguc2lnbihkZWx0YUIpKSBpbnRlcnNlY3RzKys7XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdHMgJSAyID09IDEgPyB0cnVlIDogZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZmllbGQgfSBmcm9tIFwiLi4vZmllbGQuanNcIjtcblxuZXhwb3J0IGNsYXNzIEZpZWxkQXBwZWFyIGV4dGVuZHMgU3RhZ2Uge1xuICBzdGVwID0gY2FudmFzLndpZHRoIC8gZmllbGQuc2l6ZS54O1xuICBvZmZzZXQgPSAwO1xuICBzcGVlZCA9IGNhbnZhcy5oZWlnaHQgKiA0O1xuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICB0aGlzLm9mZnNldCArPSBkZWx0YVRpbWUgKiB0aGlzLnNwZWVkO1xuICAgIGlmICh0aGlzLm9mZnNldCA+PSBjYW52YXMuaGVpZ2h0KSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkLnNpemUueDsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKGkgKiB0aGlzLnN0ZXAgKyB0aGlzLnN0ZXAgLyAyLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oaSAqIHRoaXMuc3RlcCArIHRoaXMuc3RlcCAvIDIsIHRoaXMub2Zmc2V0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC5zaXplLnk7IGkrKykge1xuICAgICAgY3R4Lm1vdmVUbygwLCBpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMik7XG4gICAgICBjdHgubGluZVRvKHRoaXMub2Zmc2V0LCBpICogdGhpcy5zdGVwICsgdGhpcy5zdGVwIC8gMik7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZS5qc1wiO1xuXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9pbml0LWNhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVNlcnZlciB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQuanNcIjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5nYW1lU2VydmVyLm9uU3RhcnQoKHNvY2tldCkgPT4ge1xuICBzb2NrZXQuc2VuZChgcGxheWVyICR7cGxheWVyLmxvY2FsLmNvbG9yfSAke3BsYXllci5sb2NhbC5uaWNrbmFtZX1gKTtcbiAgbG9hZGVkID0gdHJ1ZTtcbn0pO1xuXG5nYW1lU2VydmVyLm9uUGxheWVyUmVxdWVzdCgoY29sb3IsIG5pY2spID0+IHtcbiAgcGxheWVyLnJlbW90ZS5jb2xvciA9IGNvbG9yO1xuICBwbGF5ZXIucmVtb3RlLm5pY2tuYW1lID0gbmljaztcbiAgY29uc29sZS5sb2cocGxheWVyLnJlbW90ZSk7XG59KTtcblxuZXhwb3J0IGNsYXNzIEdhbWVMb2FkaW5nIGV4dGVuZHMgU3RhZ2Uge1xuICAjc2NyZWVuV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICNzY3JlZW5IZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAjcmFkaXVzID0gNztcbiAgI3RvdGFsU2hhcGVSYWRpdXMgPSA3MDtcbiAgI2NpcmNsZUNvdW50ID0gNTtcbiAgI3NwZWVkID0gMTtcbiAgI29mZnNldCA9IDA7XG4gICNub3dBbHBoYSA9IDE7XG5cbiAgI2dldEFuZ2xlKHBoYXNlKSB7XG4gICAgcmV0dXJuIDQgKiAoTWF0aC5hdGFuKChwaGFzZSAlIDIpIC0gMSkgKyBNYXRoLlBJICogNCk7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBsYXllci5sb2NhbC5jb2xvcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2NpcmNsZUNvdW50OyArK2kpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBhbmdsZSA9IHRoaXMuI2dldEFuZ2xlKHRoaXMuI29mZnNldCArIGkgKiAwLjEpO1xuICAgICAgY3R4LmFyYyhcbiAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogdGhpcy4jdG90YWxTaGFwZVJhZGl1cyArIHRoaXMuI3NjcmVlbldpZHRoIC8gMixcbiAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogdGhpcy4jdG90YWxTaGFwZVJhZGl1cyArIHRoaXMuI3NjcmVlbkhlaWdodCAvIDIsXG4gICAgICAgIHRoaXMuI3JhZGl1cyxcbiAgICAgICAgMCxcbiAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICB0aGlzLiNvZmZzZXQgKz0gdGhpcy4jc3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgaWYgKGxvYWRlZCkge1xuICAgICAgaWYgKHRoaXMuI25vd0FscGhhID4gMCkgdGhpcy4jbm93QWxwaGEgLT0gdGhpcy4jc3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgICB0aGlzLiNub3dBbHBoYSA8IDBcbiAgICAgICAgPyAoY3R4Lmdsb2JhbEFscGhhID0gMClcbiAgICAgICAgOiAoY3R4Lmdsb2JhbEFscGhhID0gdGhpcy4jbm93QWxwaGEpO1xuICAgICAgaWYgKHRoaXMuI25vd0FscGhhIDw9IDApIHtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLy4uL2luaXQtY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vLi4vd2VsY29tZS1mb3JtLmpzXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlLmpzXCI7XG5pbXBvcnQgeyBmaWVsZCB9IGZyb20gXCIuLi9maWVsZC5qc1wiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4uL3ZlY3Rvci5qc1wiO1xuaW1wb3J0IHsgY3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvci5qc1wiO1xuaW1wb3J0IHsgZ2FtZVNlcnZlciB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQuanNcIjtcblxubGV0IG1vdXNlUG9zID0gbmV3IFZlY3RvcigpO1xuXG5sZXQgbG9jYWxUdXJuID0gZmFsc2U7IC8v0YXQvtC00LjRgiDQu9C4INGB0LXQudGH0LDRgSDQu9C+0LrQsNC70YzQvdGL0Lkg0LjQs9GA0L7QulxuXG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5cbmdhbWVTZXJ2ZXIub25QbGFjZSgocG9zKSA9PiB7XG4gIGZpZWxkLnBsYWNlRG90RGlyZWN0KHBvcywgcGxheWVyLnJlbW90ZS5jb2xvcik7XG4gIGxvY2FsVHVybiA9IHRydWU7XG59KTtcblxuZ2FtZVNlcnZlci5vblR1cm4oKCkgPT4ge1xuICBsb2NhbFR1cm4gPSB0cnVlO1xufSk7XG5cbmZ1bmN0aW9uIGdldE1vdXNlSGFuZGxlcigpIHtcbiAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBzY2FsZVggPSBjYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICBsZXQgc2NhbGVZID0gY2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbW91c2VQb3MueCA9IChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICBtb3VzZVBvcy55ID0gKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lU3RhZ2UgZXh0ZW5kcyBTdGFnZSB7XG4gIGluaXQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBnZXRNb3VzZUhhbmRsZXIoKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChsb2NhbFR1cm4gfHwgREVWX01PREUpIHtcbiAgICAgICAgY3Vyc29yLmNsaWNrKCk7XG4gICAgICAgIGlmIChmaWVsZC5wbGFjZURvdChtb3VzZVBvcywgcGxheWVyLmxvY2FsLmNvbG9yKSkgbG9jYWxUdXJuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIGZpZWxkLmRyYXdGaWVsZCgpO1xuXG4gICAgY3Vyc29yLnRhcmdldCA9IGZpZWxkLmdldFRhcmdldENvb3JkKG1vdXNlUG9zKTtcbiAgICBjdXJzb3IucG9zLnggKz0gKGN1cnNvci50YXJnZXQueCAtIGN1cnNvci5wb3MueCkgKiBkZWx0YVRpbWUgKiBjdXJzb3Iuc3BlZWQ7XG4gICAgY3Vyc29yLnBvcy55ICs9IChjdXJzb3IudGFyZ2V0LnkgLSBjdXJzb3IucG9zLnkpICogZGVsdGFUaW1lICogY3Vyc29yLnNwZWVkO1xuICAgIGN1cnNvci51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICBjdXJzb3IuZHJhdygpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RhZ2Uge1xuICAjbmV4dCA9IHRoaXM7XG4gIGdldE5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25leHQ7XG4gIH1cbiAgc2V0TmV4dChzdGFnZSkge1xuICAgIHRoaXMuI25leHQgPSBzdGFnZTtcbiAgfVxuICBvbkNvbXBsZXRlKCkge1xuICAgIGFsZXJ0KFwiY29tcGxldGVcIik7XG4gIH1cbiAgaW5pdCgpIHt9XG4gIHVwZGF0ZShkZWx0YVRpbWUpIHt9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVmVjdG9yKHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ICE9IFwibnVtYmVyXCIpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gXCJudW1iZXJcIikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbn1cbiIsImxldCB0dXJuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnR1cm5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInR1cm4tY29udGFpbmVyXCIpO1xuXG5sZXQgbG9jYWxQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiIsImxldCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFxuICBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuKTtcblxubGV0IG9uc3RhcnQgPSBmdW5jdGlvbiAoc29ja2V0KSB7fTtcbmxldCBwbGF5ZXJSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbG9yLCBuaWNrKSB7fTtcbmxldCBwbGFjZSA9IGZ1bmN0aW9uIChwb3MpIHt9O1xubGV0IGNoYW5nZVR1cm4gPSBmdW5jdGlvbiAoKSB7fTtcblxuZXhwb3J0IGxldCBnYW1lU2VydmVyID0ge1xuICBvblN0YXJ0KGNhbGxiYWNrKSB7XG4gICAgb25zdGFydCA9IGNhbGxiYWNrO1xuICB9LFxuICBvblBsYXllclJlcXVlc3QoY2FsbGJhY2spIHtcbiAgICBwbGF5ZXJSZXF1ZXN0ID0gY2FsbGJhY2s7XG4gIH0sXG4gIGpvaW4oKSB7XG4gICAgc29ja2V0LnNlbmQoXCJqb2luXCIpO1xuICB9LFxuICBwbGFjZShwb3MpIHtcbiAgICBzb2NrZXQuc2VuZChgcGxhY2UgJHtwb3MueH0gJHtwb3MueX1gKTtcbiAgfSxcbiAgb25QbGFjZShjYWxsYmFjaykge1xuICAgIHBsYWNlID0gY2FsbGJhY2s7XG4gIH0sXG4gIG9uVHVybihjYWxsYmFjaykge1xuICAgIGNoYW5nZVR1cm4gPSBjYWxsYmFjaztcbiAgfSxcbn07XG5cbnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICBzb2NrZXQuc2VuZChcImNvblwiKTtcbn07XG5cbnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgbGV0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICBsZXQgY29tbWFuZCA9IG1lc3NhZ2Uuc3BsaXQoXCIgXCIpO1xuICBpZiAoY29tbWFuZFswXSA9PSBcInN0YXJ0XCIpIHtcbiAgICBvbnN0YXJ0KHNvY2tldCk7XG4gIH1cbiAgaWYgKGNvbW1hbmRbMF0gPT0gXCJwbGF5ZXJcIikge1xuICAgIHBsYXllclJlcXVlc3QoY29tbWFuZFsxXSwgY29tbWFuZFsyXSk7XG4gIH1cbiAgaWYgKGNvbW1hbmRbMF0gPT0gXCJwbGFjZVwiKSB7XG4gICAgcGxhY2UoeyB4OiBOdW1iZXIoY29tbWFuZFsxXSksIHk6IE51bWJlcihjb21tYW5kWzJdKSB9KTtcbiAgfVxuICBpZiAoY29tbWFuZFswXSA9PSBcInR1cm5cIikge1xuICAgIGNoYW5nZVR1cm4oKTtcbiAgfVxufTtcbiIsImltcG9ydCBcIi4uL2Nzcy93ZWxjb21lLXBvcHVwLmNzc1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4vY2FudmFzL2NhbnZhcy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVNlcnZlciB9IGZyb20gXCIuL3dlYnNvY2tldFwiO1xuXG5leHBvcnQgbGV0IHBsYXllciA9IHtcbiAgbG9jYWw6IHt9LFxuICByZW1vdGU6IHt9LFxufTtcblxubGV0IHBvcHVwRm9ybSA9IGNyZWF0ZUZvcm1FbGVtZW50KCk7XG5sZXQgcG9wdXAgPSBjcmVhdGVQb3B1cEVsZW1lbnQocG9wdXBGb3JtKTtcblxuLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsb2FkSGFuZGxlcik7XG53aW5kb3cub25sb2FkID0gbG9hZEhhbmRsZXI7XG5cbmZ1bmN0aW9uIGxvYWRIYW5kbGVyKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3B1cCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcIndlbGNvbWUtcG9wdXBfc2hvd25cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3ZWxjb21lRm9ybVN1Ym1pdChldmVudCkge1xuICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2VsY29tZS1wb3B1cF9zaG93blwiKSkge1xuICAgIHBsYXllci5sb2NhbC5jb2xvciA9IHBvcHVwRm9ybS5jb2xvci52YWx1ZTtcbiAgICBwbGF5ZXIubG9jYWwubmlja25hbWUgPSBwb3B1cEZvcm0ubmlja25hbWUudmFsdWU7XG4gICAgaWYgKHBsYXllci5sb2NhbC5uaWNrbmFtZSA9PSBcIlwiKVxuICAgICAgcGxheWVyLmxvY2FsLm5pY2tuYW1lID0gcG9wdXBGb3JtLm5pY2tuYW1lLnBsYWNlaG9sZGVyO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ3ZWxjb21lLXBvcHVwX3Nob3duXCIpO1xuICAgIGdhbWVTZXJ2ZXIuam9pbigpO1xuICAgIHN0YXJ0R2FtZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcG9wdXAucmVtb3ZlKCksIDE1MCk7XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybUVsZW1lbnQoKSB7XG4gIC8vZm9ybVxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fZm9ybVwiO1xuXG4gIC8vZm9ybTogbmlja25hbWUgc2VjdGlvblxuICBsZXQgbmlja05hbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmlja05hbWVTZWN0aW9uLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fbmlja25hbWUtc2VjdGlvblwiO1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTmFtZSA9IFwid2VsY29tZS1wb3B1cF9fbmlja25hbWUtbGFiZWxcIjtcbiAgbGFiZWwuaW5uZXJIVE1MID0gYNCi0LLQvtC1INC40LzRjzpcbiAgPGlucHV0XG4gICAgY2xhc3M9XCJ3ZWxjb21lLXBvcHVwX19uaWNrbmFtZS1maWVsZFwiXG4gICAgdHlwZT1cInRleHRcIlxuICAgIG5hbWU9XCJuaWNrbmFtZVwiXG4gICAgcGxhY2Vob2xkZXI9XCLQv9C70LXQudGB0YXQvtC70LTQtdGAXCJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgIGF1dG9mb2N1cz1cImF1dG9mb2N1c1wiXG4gIC8+YDtcbiAgbmlja05hbWVTZWN0aW9uLmFwcGVuZChsYWJlbCk7XG5cbiAgLy9mb3JtOmNvbG9yIHBpY2tlclxuICBsZXQgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9IFwiY29sb3ItcGlja2VyXCI7XG4gIGxldCBjb2xvcnMgPSBbXCIjZWUyYjJiXCIsIFwiIzBiYjg3MFwiLCBcIiMwZGIxZjFcIiwgXCIjZTlhNmRhXCIsIFwiIzgzMTU4M1wiXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgaXRlbUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgaXRlbS5jbGFzc05hbWUgPSBcImNvbG9yLXBpY2tlcl9faXRlbVwiO1xuXG4gICAgaXRlbUlucHV0LmNsYXNzTmFtZSA9IFwiY29sb3ItcGlja2VyX19idXR0b25cIjtcbiAgICBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29sb3JcIik7XG4gICAgaXRlbUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGNvbG9yc1tpXSk7XG4gICAgaWYgKGkgPT0gMCkgaXRlbUlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cbiAgICBpdGVtLmFwcGVuZChpdGVtSW5wdXQpO1xuICAgIGl0ZW1JbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbaV07XG4gICAgY29sb3JQaWNrZXIuYXBwZW5kKGl0ZW0pO1xuICB9XG5cbiAgLy9mb3JtOnN1Ym1pdFxuICBsZXQgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm9ybVN1Ym1pdC5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBfX3N1Ym1pdFwiO1xuICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN1Ym1pdFwiKTtcbiAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcItCY0LPRgNCw0YLRjFwiKTtcblxuICAvL2Zvcm0gZmlsbFxuICBmb3JtLmFwcGVuZChuaWNrTmFtZVNlY3Rpb24pO1xuICBmb3JtLmFwcGVuZChjb2xvclBpY2tlcik7XG4gIGZvcm0uYXBwZW5kKGZvcm1TdWJtaXQpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgd2VsY29tZUZvcm1TdWJtaXQpO1xuICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUG9wdXBFbGVtZW50KGZvcm0pIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc05hbWUgPSBcIndlbGNvbWUtcG9wdXBcIjtcblxuICAvL3BvcHVwSGVhZGVyXG4gIGxldCBwb3B1cEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcG9wdXBIZWFkZXIuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLXBvcHVwX190aXRsZVwiO1xuICBwb3B1cEhlYWRlci5pbm5lclRleHQgPSBcItCS0YXQvtC0INCyINC40LPRgNGDXCI7XG5cbiAgLy9maW5hbFxuICBkaXYuYXBwZW5kKHBvcHVwSGVhZGVyKTtcbiAgZGl2LmFwcGVuZChmb3JtKTtcbiAgcmV0dXJuIGRpdjtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2ZvbnRzLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi93ZWxjb21lLWZvcm0uanNcIjtcbmltcG9ydCBcIi4vZ2FtZS11aS5qc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==