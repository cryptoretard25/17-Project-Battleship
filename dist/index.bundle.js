/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data_structures/queue.js":
/*!**************************************!*\
  !*** ./src/data_structures/queue.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Queue)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);
    this.items = [];
  }
  _createClass(Queue, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length === 0;
    }
  }, {
    key: "enqueue",
    value: function enqueue(el) {
      return this.items.push(el);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.items.shift();
    }
  }, {
    key: "clear",
    value: function clear() {
      return this.items = [];
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) return null;
      return this.items[0];
    }
  }, {
    key: "last",
    value: function last() {
      if (this.size < 1) return;
      return this.items[this.size() - 1];
    }
  }, {
    key: "size",
    value: function size() {
      return this.items.length;
    }
  }, {
    key: "print",
    value: function print() {
      return this.items;
    }
  }]);
  return Queue;
}();


/***/ }),

/***/ "./src/modules/ai.js":
/*!***************************!*\
  !*** ./src/modules/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Computer = /*#__PURE__*/function (_Player) {
  _inherits(Computer, _Player);
  var _super = _createSuper(Computer);
  function Computer(gameboard, ShipClass, queue) {
    var _this;
    _classCallCheck(this, Computer);
    _this = _super.call(this, gameboard, ShipClass, queue);
    _this.name = "computer";
    _this.hitMode = false;
    _this.firstHit = null;
    _this.lastHit = null;
    _this.attackDir = "left";
    return _this;
  }
  _createClass(Computer, [{
    key: "_generateRandomCoords",
    value: function _generateRandomCoords() {
      return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }
  }, {
    key: "isAttacked",
    value: function isAttacked(pos) {
      var _pos = _slicedToArray(pos, 2),
        x = _pos[0],
        y = _pos[1];
      return this.attacks.some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];
        return a === x && b === y;
      });
    }
  }, {
    key: "resetHitMode",
    value: function resetHitMode() {
      this.firstHit = null;
      this.lastHit = null;
      this.attackDir = "left";
      this.hitMode = false;
    }
  }, {
    key: "generateCoords",
    value: function generateCoords() {
      var _this$_generateRandom = this._generateRandomCoords(),
        _this$_generateRandom2 = _slicedToArray(_this$_generateRandom, 2),
        x = _this$_generateRandom2[0],
        y = _this$_generateRandom2[1];
      if (!this.attacks.some(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          a = _ref4[0],
          b = _ref4[1];
        return a === x && b === y;
      })) {
        this.attacks.push([x, y]);
        return [x, y];
      } else {
        return this.generateCoords();
      }
    }
  }, {
    key: "generateRandomDir",
    value: function generateRandomDir() {
      var dir = ["v", "h"];
      return dir[Math.floor(Math.random() * 2)];
    }
  }, {
    key: "placeShip",
    value: function placeShip() {
      if (this.isAllPlaced()) return "All ships are placed";
      var dir = this.generateRandomDir();
      var ship = this.ships.dequeue();
      var _this$_generateRandom3 = this._generateRandomCoords(),
        _this$_generateRandom4 = _slicedToArray(_this$_generateRandom3, 2),
        x = _this$_generateRandom4[0],
        y = _this$_generateRandom4[1];
      ship.setDirection(dir);
      var result = this.gameboard.placeShip(ship, x, y);
      while (result === "Ship cant be placed here") {
        var _this$_generateRandom5 = this._generateRandomCoords();
        var _this$_generateRandom6 = _slicedToArray(_this$_generateRandom5, 2);
        x = _this$_generateRandom6[0];
        y = _this$_generateRandom6[1];
        result = this.gameboard.placeShip(ship, x, y);
      }
      return result;
    }
  }, {
    key: "placeAllShips",
    value: function placeAllShips() {
      while (this.ships.size()) {
        this.placeShip();
      }
      console.log(this.gameboard.grid);
      return this.gameboard.grid;
    }
  }, {
    key: "attackEnemy",
    value: function attackEnemy(enemy) {
      if (enemy.isAllSunk()) return;
      var result;
      var x, y;
      if (!this.hitMode) {
        var _this$generateCoords = this.generateCoords();
        var _this$generateCoords2 = _slicedToArray(_this$generateCoords, 2);
        x = _this$generateCoords2[0];
        y = _this$generateCoords2[1];
        result = enemy.gameboard.receiveAttack(x, y);
        if (result === "hit") {
          this.hitMode = true;
          this.firstHit = [x, y];
          this.lastHit = [x, y];
        }
      } else if (this.hitMode) {
        if (this.attackDir === "left") {
          // LEFT
          var _ref5 = [this.lastHit[0], this.lastHit[1] - 1];
          x = _ref5[0];
          y = _ref5[1];
          if (y < 0 || this.isAttacked([x, y])) {
            this.lastHit = this.firstHit;
            this.attackDir = "right";
            return this.attackEnemy(enemy);
          }
          result = enemy.gameboard.receiveAttack(x, y);
          this.attacks.push([x, y]);
          if (result === "hit") {
            this.lastHit = [x, y];
          } else if (result === "sink") {
            this.resetHitMode();
          } else if (result === "miss") {
            this.lastHit = this.firstHit;
            this.attackDir = "right";
          }
        } else if (this.attackDir === "right") {
          // RIGHT
          var _ref6 = [this.lastHit[0], this.lastHit[1] + 1];
          x = _ref6[0];
          y = _ref6[1];
          if (y > 9 || this.isAttacked([x, y])) {
            this.lastHit = this.firstHit;
            this.attackDir = "up";
            return this.attackEnemy(enemy);
          }
          result = enemy.gameboard.receiveAttack(x, y);
          this.attacks.push([x, y]);
          if (result === "hit") {
            this.lastHit = [x, y];
          } else if (result === "miss") {
            this.lastHit = this.firstHit;
            this.attackDir = "up";
          } else if (result === "sink") {
            this.resetHitMode();
          }
        } else if (this.attackDir === "up") {
          // UP
          var _ref7 = [this.lastHit[0] - 1, this.lastHit[1]];
          x = _ref7[0];
          y = _ref7[1];
          if (x < 0 || this.isAttacked([x, y])) {
            this.lastHit = this.firstHit;
            this.attackDir = "down";
            return this.attackEnemy(enemy);
          }
          result = enemy.gameboard.receiveAttack(x, y);
          this.attacks.push([x, y]);
          if (result === "hit") {
            this.lastHit = [x, y];
          } else if (result === "miss") {
            this.lastHit = this.firstHit;
            this.attackDir = "down";
          } else if (result === "sink") {
            this.resetHitMode();
          }
        } else if (this.attackDir === "down") {
          var _ref8 = [this.lastHit[0] + 1, this.lastHit[1]];
          x = _ref8[0];
          y = _ref8[1];
          result = enemy.gameboard.receiveAttack(x, y);
          this.attacks.push([x, y]);
          if (result === 'hit') {
            this.lastHit = [x, y];
          } else if (result === 'sink') {
            this.resetHitMode();
          }
        }
      }
      if (result === "sink" && enemy.isAllSunk()) {
        return [JSON.stringify([x, y]), {
          value: "sink",
          gamestate: "game over"
        }];
      }
      return [JSON.stringify([x, y]), result];
    }
  }, {
    key: "_attackEnemy",
    value: function _attackEnemy(enemy) {
      if (enemy.isAllSunk()) return;
      var _this$generateCoords3 = this.generateCoords(),
        _this$generateCoords4 = _slicedToArray(_this$generateCoords3, 2),
        x = _this$generateCoords4[0],
        y = _this$generateCoords4[1];
      this.attacks.push([x, y]);
      var result = enemy.gameboard.receiveAttack(x, y);
      if (result === "sink" && enemy.isAllSunk()) {
        return [JSON.stringify([x, y]), {
          value: "sink",
          gamestate: "game over"
        }];
      }
      return [JSON.stringify([x, y]), result];
    }
  }]);
  return Computer;
}(_player__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);
    this.grid = Array.from({
      length: 10
    }, function () {
      return Array.from({
        length: 10
      }, function () {
        return false;
      });
    });
    this.ships = new Map();
    this.reserved = [];
  }
  _createClass(Board, [{
    key: "_blockCells",
    value: function _blockCells(x, y) {
      if (x < 0 || x > 9 || y < 0 || y > 9 || this.grid[x][y]) return "Out of range";
      this.grid[x][y] = "res";
      this.reserved.push([x, y]);
    }
  }, {
    key: "_isBlocked",
    value: function _isBlocked(ship, x, y) {
      var _this = this;
      if (ship.direction === "v") {
        var _loop = function _loop(i) {
          if (_this.reserved.some(function (item) {
            return item[0] == i && item[1] == y;
          })) {
            return {
              v: true
            };
          }
        };
        for (var i = x; i < x + ship.size; i++) {
          var _ret = _loop(i);
          if (_typeof(_ret) === "object") return _ret.v;
        }
      }
      if (ship.direction === "h") {
        var _loop2 = function _loop2(_i) {
          if (_this.reserved.some(function (item) {
            return item[0] == x && item[1] == _i;
          })) {
            return {
              v: true
            };
          }
        };
        for (var _i = y; _i < y + ship.size; _i++) {
          var _ret2 = _loop2(_i);
          if (_typeof(_ret2) === "object") return _ret2.v;
        }
      }
      return false;
    }
  }, {
    key: "_canPlaceShip",
    value: function _canPlaceShip(ship, x, y) {
      if (this.grid[x] === undefined || this.grid[y] === undefined) return false;
      return ship.direction === "v" && !this.grid[x][y] && x + ship.size - 1 <= 9 && !this._isBlocked(ship, x, y) || ship.direction === "h" && !this.grid[x][y] && y + ship.size - 1 <= 9 && !this._isBlocked(ship, x, y) || false;
    }
  }, {
    key: "placeShip",
    value: function placeShip(ship, x, y) {
      if (!this._canPlaceShip(ship, x, y)) return "Ship cant be placed here";
      if (this.ships.has(ship)) return "Cant place one ship twice";
      this.ships.set(ship, []);
      if (ship.direction === "v") {
        for (var i = 0; i < ship.size; i++) {
          this.ships.get(ship).push([x + i, y]);
          ship.decks.push(JSON.stringify([x + i, y]));
          this.grid[x + i][y] = [ship, i];
          for (var j = -1; j <= 1; j++) {
            this._blockCells(x + ship.size, y + j);
            this._blockCells(x - 1, y + j);
            if (j === 0) continue;
            this._blockCells(x + i, y + j);
          }
        }
        return this.ships.get(ship);
      } else if (ship.direction === "h") {
        for (var _i2 = 0; _i2 < ship.size; _i2++) {
          this.ships.get(ship).push([x, y + _i2]);
          ship.decks.push(JSON.stringify([x, y + _i2]));
          this.grid[x][y + _i2] = [ship, _i2];
          for (var _j = -1; _j <= 1; _j++) {
            this._blockCells(x + _j, y + ship.size);
            this._blockCells(x + _j, y - 1);
            if (_j === 0) continue;
            this._blockCells(x + _j, y + _i2);
          }
        }
        return this.ships.get(ship);
      } else return "Ship cant be placed here";
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      var target = this.grid[x][y];
      if (Array.isArray(target)) {
        if (["hit", "miss"].includes(target[1])) return "This cell already attacked";
        var _target = _slicedToArray(target, 2),
          ship = _target[0],
          pos = _target[1];
        ship.hit(pos);
        this.grid[x][y][1] = ship.hits[pos];
        if (ship.sink) {
          return "sink";
        } else {
          return "hit";
        }
      } else if (!target || target === "res") {
        this.grid[x][y] = [target, "miss"];
        return "miss";
      }
    }
  }]);
  return Board;
}();


/***/ }),

/***/ "./src/modules/dom/Dom.js":
/*!********************************!*\
  !*** ./src/modules/dom/Dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _console = console,
  log = _console.log;
var DOM = function () {
  var _timeout = function _timeout(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  // Place ships
  function _getDir(shipWrapper) {
    return shipWrapper.style.flexDirection === "column" ? "v" : "h";
  }
  function _setDir(shipWrapper, dir, decks) {
    if (dir === "v") {
      shipWrapper.style.flexDirection = "column";
      shipWrapper.style.height = "".concat(4.5 * decks, "em");
      shipWrapper.style.width = "4.5em";
    } else if (dir === "h") {
      shipWrapper.style.flexDirection = "row";
      shipWrapper.style.height = "4.5em";
      shipWrapper.style.width = "".concat(4.5 * decks, "em");
    }
  }
  function _createShipElement(parent, decks) {
    var shipDirection = _getDir(parent);
    parent.innerHTML = "";
    for (var i = 0; i < decks; i++) {
      parent.insertAdjacentHTML("afterbegin", "\n          <div class=\"cell\">\n            <div class=\"ship\"></div>\n          </div>  \n        ");
    }
    parent.style.display = "flex";
    _setDir(parent, shipDirection, decks);
  }

  //------------------------------------------------------------------------------------------
  // Game functions
  var gameflow = function () {
    function _findCell(coords, cellsArray) {
      return cellsArray.find(function (cell) {
        return cell.dataset.coords === coords;
      });
    }
    function _createSinkedShip(attakedShips, cellsArray, coord) {
      var sinkedShip = attakedShips.find(function (item) {
        return item.decks.some(function (deck) {
          return deck === coord;
        });
      });
      log(sinkedShip);
      var _iterator = _createForOfIteratorHelper(sinkedShip.decks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var coords = _step.value;
          var cell = _findCell(coords, cellsArray);
          cell.innerHTML = '<div class="enemy-ship"></div>';
          cell.className = "cell hit-black";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    function _handleAttack(attakedClass, coords, result, alertFn) {
      var cells = _toConsumableArray(document.querySelectorAll(".".concat(attakedClass.name, " .cell")));
      var cell = _findCell(coords, cells);
      if (attakedClass.name === "computer") {
        if (result === "miss") {
          alertFn("Player attacks: ".concat(result));
          cell.className = "cell miss";
        } else if (result === "hit") {
          alertFn("Player attacks: ".concat(result));
          cell.className = "cell hit-black";
        } else if (result === "sink") {
          alertFn("Player attacks: ".concat(result));
          _createSinkedShip(attakedClass.playerShips, cells, coords);
        }
      }
      if (attakedClass.name === "player") {
        if (result === "miss") {
          alertFn("Computer attacks: ".concat(result));
          cell.className = "cell miss";
        }
        if (result === "hit" || result === "sink") {
          alertFn("Computer attacks: ".concat(result));
          cell.className = "cell hit";
        }
      }
    }
    function gameStart(GameClass, mainDiv, board, alertFn, endgameFn) {
      var player = GameClass.player;
      var computer = GameClass.computer;
      if (!player.ships.isEmpty()) {
        alertFn("You should place all ships before game starts");
        return;
      }
      mainDiv.append(createPlayerBoard(board));
      mainDiv.append(createComputerBoard(GameClass, alertFn, endgameFn));
      computer.placeAllShips();
      alertFn("Game Started");
      var placeShipMenu = document.querySelector(".place-ship-menu");
      document.body.removeChild(placeShipMenu);
    }
    function attack(_x, _x2, _x3, _x4) {
      return _attack.apply(this, arguments);
    }
    function _attack() {
      _attack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, GameClass, alertFn, endgameFn) {
        var coords;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              if (!(GameClass._getAttacker().name === "computer")) {
                _context.next = 4;
                break;
              }
              alertFn("Its not your turn");
              return _context.abrupt("return");
            case 4:
              coords = e.target.dataset.coords;
              _context.next = 7;
              return GameClass.attack(coords, _handleAttack, alertFn, endgameFn);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _attack.apply(this, arguments);
    }
    return {
      attack: attack,
      gameStart: gameStart
    };
  }();
  var _placeShipEvents = function () {
    function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(function () {
        e.target.style.display = "none";
      }, 0);
    }
    function dragDrop(e, parent, shipWrapper, cellsArray, playerClass) {
      e.preventDefault();
      var shipWrapperId = e.dataTransfer.getData("text/plain");
      var shipWrapperEl = parent.querySelector("#".concat(shipWrapperId));
      var cell = e.target.closest(".cell");
      var _JSON$parse = JSON.parse(cell.dataset.coords),
        _JSON$parse2 = _slicedToArray(_JSON$parse, 2),
        x = _JSON$parse2[0],
        y = _JSON$parse2[1];
      var dir = _getDir(shipWrapperEl);
      var result = playerClass.placeShip(x, y, dir);
      var decks = _toConsumableArray(shipWrapperEl.children);
      if (result === "Ship cant be placed here") {
        e.stopPropagation();
        return;
      }
      var _loop = function _loop() {
        var celldata = JSON.stringify(result[i]);
        var cell = cellsArray.find(function (item) {
          return item.dataset.coords === celldata;
        });
        cell.innerHTML = decks[i].innerHTML;
      };
      for (var i = 0; i < result.length; i++) {
        _loop();
      }
      if (!playerClass.ships.isEmpty()) {
        var shipSize = playerClass.ships.peek().getSize();
        _createShipElement(shipWrapper, shipSize);
      } else {
        shipWrapper.remove();
      }
    }
    function dragEnd(e) {
      e.target.style.display = "flex";
    }
    function dragOver(e) {
      e.preventDefault();
    }
    function dragEnter(e) {
      e.preventDefault();
    }
    function changeDir(shipWrapper) {
      var dir = _getDir(shipWrapper);
      var decks = shipWrapper.children.length;
      dir === "v" ? _setDir(shipWrapper, "h", decks) : _setDir(shipWrapper, "v", decks);
    }
    return {
      dragStart: dragStart,
      dragEnd: dragEnd,
      dragDrop: dragDrop,
      dragOver: dragOver,
      dragEnter: dragEnter,
      changeDir: changeDir
    };
  }();
  function createPlaceShipMenu(newGameClassFn, mainDiv, alertFn, endgameFn) {
    var GameClass = newGameClassFn();
    var player = GameClass.player;
    var existingElement = document.body.querySelector(".place-ship-menu");
    if (existingElement) document.body.removeChild(existingElement);
    mainDiv.innerHTML = "";
    var placeShipMenu = document.createElement("div");
    placeShipMenu.className = "place-ship-menu";
    placeShipMenu.insertAdjacentHTML("afterbegin", "\n      <h2>Place ships</h2>\n      <div class=\"wrapper\">\n        <div class=\"ships\">\n          <div class=\"ship-wrapper\" id=\"ship-wrapper\" draggable=\"true\"></div>\n        </div>\n        <div class=\"field\">\n          <div class=\"row row-0\">\n            <div class=\"cell\" data-coords=\"[0,0]\"></div>\n            <div class=\"cell\" data-coords=\"[0,1]\"></div>\n            <div class=\"cell\" data-coords=\"[0,2]\"></div>\n            <div class=\"cell\" data-coords=\"[0,3]\"></div>\n            <div class=\"cell\" data-coords=\"[0,4]\"></div>\n            <div class=\"cell\" data-coords=\"[0,5]\"></div>\n            <div class=\"cell\" data-coords=\"[0,6]\"></div>\n            <div class=\"cell\" data-coords=\"[0,7]\"></div>\n            <div class=\"cell\" data-coords=\"[0,8]\"></div>\n            <div class=\"cell\" data-coords=\"[0,9]\"></div>\n          </div>\n          <div class=\"row row-1\">\n            <div class=\"cell\" data-coords=\"[1,0]\"></div>\n            <div class=\"cell\" data-coords=\"[1,1]\"></div>\n            <div class=\"cell\" data-coords=\"[1,2]\"></div>\n            <div class=\"cell\" data-coords=\"[1,3]\"></div>\n            <div class=\"cell\" data-coords=\"[1,4]\"></div>\n            <div class=\"cell\" data-coords=\"[1,5]\"></div>\n            <div class=\"cell\" data-coords=\"[1,6]\"></div>\n            <div class=\"cell\" data-coords=\"[1,7]\"></div>\n            <div class=\"cell\" data-coords=\"[1,8]\"></div>\n            <div class=\"cell\" data-coords=\"[1,9]\"></div>\n          </div>\n          <div class=\"row row-2\">\n            <div class=\"cell\" data-coords=\"[2,0]\"></div>\n            <div class=\"cell\" data-coords=\"[2,1]\"></div>\n            <div class=\"cell\" data-coords=\"[2,2]\"></div>\n            <div class=\"cell\" data-coords=\"[2,3]\"></div>\n            <div class=\"cell\" data-coords=\"[2,4]\"></div>\n            <div class=\"cell\" data-coords=\"[2,5]\"></div>\n            <div class=\"cell\" data-coords=\"[2,6]\"></div>\n            <div class=\"cell\" data-coords=\"[2,7]\"></div>\n            <div class=\"cell\" data-coords=\"[2,8]\"></div>\n            <div class=\"cell\" data-coords=\"[2,9]\"></div>\n          </div>\n          <div class=\"row row-3\">\n            <div class=\"cell\" data-coords=\"[3,0]\"></div>\n            <div class=\"cell\" data-coords=\"[3,1]\"></div>\n            <div class=\"cell\" data-coords=\"[3,2]\"></div>\n            <div class=\"cell\" data-coords=\"[3,3]\"></div>\n            <div class=\"cell\" data-coords=\"[3,4]\"></div>\n            <div class=\"cell\" data-coords=\"[3,5]\"></div>\n            <div class=\"cell\" data-coords=\"[3,6]\"></div>\n            <div class=\"cell\" data-coords=\"[3,7]\"></div>\n            <div class=\"cell\" data-coords=\"[3,8]\"></div>\n            <div class=\"cell\" data-coords=\"[3,9]\"></div>\n          </div>\n          <div class=\"row row-4\">\n            <div class=\"cell\" data-coords=\"[4,0]\"></div>\n            <div class=\"cell\" data-coords=\"[4,1]\"></div>\n            <div class=\"cell\" data-coords=\"[4,2]\"></div>\n            <div class=\"cell\" data-coords=\"[4,3]\"></div>\n            <div class=\"cell\" data-coords=\"[4,4]\"></div>\n            <div class=\"cell\" data-coords=\"[4,5]\"></div>\n            <div class=\"cell\" data-coords=\"[4,6]\"></div>\n            <div class=\"cell\" data-coords=\"[4,7]\"></div>\n            <div class=\"cell\" data-coords=\"[4,8]\"></div>\n            <div class=\"cell\" data-coords=\"[4,9]\"></div>\n          </div>\n          <div class=\"row row-5\">\n            <div class=\"cell\" data-coords=\"[5,0]\"></div>\n            <div class=\"cell\" data-coords=\"[5,1]\"></div>\n            <div class=\"cell\" data-coords=\"[5,2]\"></div>\n            <div class=\"cell\" data-coords=\"[5,3]\"></div>\n            <div class=\"cell\" data-coords=\"[5,4]\"></div>\n            <div class=\"cell\" data-coords=\"[5,5]\"></div>\n            <div class=\"cell\" data-coords=\"[5,6]\"></div>\n            <div class=\"cell\" data-coords=\"[5,7]\"></div>\n            <div class=\"cell\" data-coords=\"[5,8]\"></div>\n            <div class=\"cell\" data-coords=\"[5,9]\"></div>\n          </div>\n          <div class=\"row row-6\">\n            <div class=\"cell\" data-coords=\"[6,0]\"></div>\n            <div class=\"cell\" data-coords=\"[6,1]\"></div>\n            <div class=\"cell\" data-coords=\"[6,2]\"></div>\n            <div class=\"cell\" data-coords=\"[6,3]\"></div>\n            <div class=\"cell\" data-coords=\"[6,4]\"></div>\n            <div class=\"cell\" data-coords=\"[6,5]\"></div>\n            <div class=\"cell\" data-coords=\"[6,6]\"></div>\n            <div class=\"cell\" data-coords=\"[6,7]\"></div>\n            <div class=\"cell\" data-coords=\"[6,8]\"></div>\n            <div class=\"cell\" data-coords=\"[6,9]\"></div>\n          </div>\n          <div class=\"row row-7\">\n            <div class=\"cell\" data-coords=\"[7,0]\"></div>\n            <div class=\"cell\" data-coords=\"[7,1]\"></div>\n            <div class=\"cell\" data-coords=\"[7,2]\"></div>\n            <div class=\"cell\" data-coords=\"[7,3]\"></div>\n            <div class=\"cell\" data-coords=\"[7,4]\"></div>\n            <div class=\"cell\" data-coords=\"[7,5]\"></div>\n            <div class=\"cell\" data-coords=\"[7,6]\"></div>\n            <div class=\"cell\" data-coords=\"[7,7]\"></div>\n            <div class=\"cell\" data-coords=\"[7,8]\"></div>\n            <div class=\"cell\" data-coords=\"[7,9]\"></div>\n          </div>\n          <div class=\"row row-8\">\n            <div class=\"cell\" data-coords=\"[8,0]\"></div>\n            <div class=\"cell\" data-coords=\"[8,1]\"></div>\n            <div class=\"cell\" data-coords=\"[8,2]\"></div>\n            <div class=\"cell\" data-coords=\"[8,3]\"></div>\n            <div class=\"cell\" data-coords=\"[8,4]\"></div>\n            <div class=\"cell\" data-coords=\"[8,5]\"></div>\n            <div class=\"cell\" data-coords=\"[8,6]\"></div>\n            <div class=\"cell\" data-coords=\"[8,7]\"></div>\n            <div class=\"cell\" data-coords=\"[8,8]\"></div>\n            <div class=\"cell\" data-coords=\"[8,9]\"></div>\n          </div>\n          <div class=\"row row-9\">\n            <div class=\"cell\" data-coords=\"[9,0]\"></div>\n            <div class=\"cell\" data-coords=\"[9,1]\"></div>\n            <div class=\"cell\" data-coords=\"[9,2]\"></div>\n            <div class=\"cell\" data-coords=\"[9,3]\"></div>\n            <div class=\"cell\" data-coords=\"[9,4]\"></div>\n            <div class=\"cell\" data-coords=\"[9,5]\"></div>\n            <div class=\"cell\" data-coords=\"[9,6]\"></div>\n            <div class=\"cell\" data-coords=\"[9,7]\"></div>\n            <div class=\"cell\" data-coords=\"[9,8]\"></div>\n            <div class=\"cell\" data-coords=\"[9,9]\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"buttons\">\n        <button class=\"accept-btn\">Start game</button>\n        <button class=\"decline-btn\">Reload ships</button>\n      </div>\n      ");
    var board = placeShipMenu.querySelector(".field");
    var shipWrapper = placeShipMenu.querySelector("#ship-wrapper");
    var startGameBtn = placeShipMenu.querySelector(".accept-btn");
    var reloadGameBtn = placeShipMenu.querySelector(".decline-btn");
    var cells = _toConsumableArray(placeShipMenu.querySelectorAll(".field .cell"));
    shipWrapper.addEventListener("dragstart", _placeShipEvents.dragStart);
    shipWrapper.addEventListener("dragend", _placeShipEvents.dragEnd);
    shipWrapper.addEventListener("click", function () {
      return _placeShipEvents.changeDir(shipWrapper);
    });
    var _iterator2 = _createForOfIteratorHelper(cells),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var cell = _step2.value;
        cell.addEventListener("drop", function (e) {
          _placeShipEvents.dragDrop(e, placeShipMenu, shipWrapper, cells, player);
        });
        cell.addEventListener("dragover", _placeShipEvents.dragOver);
        cell.addEventListener("dragenter", _placeShipEvents.dragEnter);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    startGameBtn.addEventListener("click", function (e) {
      gameflow.gameStart(GameClass, mainDiv, board, alertFn, endgameFn);
    });
    reloadGameBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var newPlaceShipMenu = createPlaceShipMenu(newGameClassFn, mainDiv, createAlertDiv, createEndgameDiv);
      document.body.prepend(newPlaceShipMenu);
      alertFn("All ships was reloaded");
    });
    _createShipElement(shipWrapper, player.ships.peek().getSize());
    return placeShipMenu;
  }

  // Game

  function createPlayerBoard(createPlayerField) {
    var playerBoard = document.createElement("div");
    playerBoard.className = "player-board";
    playerBoard.insertAdjacentHTML("afterbegin", "\n      <h2>Player board</h2>\n      <div class=\"player\"></div>\n    ");
    var playerField = playerBoard.querySelector(".player");
    playerField.innerHTML = createPlayerField.innerHTML;
    return playerBoard;
  }
  function createComputerBoard(GameClass, alertFn, endgameFn) {
    var computerBoard = document.createElement("div");
    computerBoard.className = "computer-board";
    computerBoard.insertAdjacentHTML("afterbegin", "\n          <h2>Enemy board</h2>\n          <div class=\"computer\">\n          <div class=\"row row-0\">\n            <div class=\"cell\" data-coords=\"[0,0]\"></div>\n            <div class=\"cell\" data-coords=\"[0,1]\"></div>\n            <div class=\"cell\" data-coords=\"[0,2]\"></div>\n            <div class=\"cell\" data-coords=\"[0,3]\"></div>\n            <div class=\"cell\" data-coords=\"[0,4]\"></div>\n            <div class=\"cell\" data-coords=\"[0,5]\"></div>\n            <div class=\"cell\" data-coords=\"[0,6]\"></div>\n            <div class=\"cell\" data-coords=\"[0,7]\"></div>\n            <div class=\"cell\" data-coords=\"[0,8]\"></div>\n            <div class=\"cell\" data-coords=\"[0,9]\"></div>\n          </div>\n          <div class=\"row row-1\">\n            <div class=\"cell\" data-coords=\"[1,0]\"></div>\n            <div class=\"cell\" data-coords=\"[1,1]\"></div>\n            <div class=\"cell\" data-coords=\"[1,2]\"></div>\n            <div class=\"cell\" data-coords=\"[1,3]\"></div>\n            <div class=\"cell\" data-coords=\"[1,4]\"></div>\n            <div class=\"cell\" data-coords=\"[1,5]\"></div>\n            <div class=\"cell\" data-coords=\"[1,6]\"></div>\n            <div class=\"cell\" data-coords=\"[1,7]\"></div>\n            <div class=\"cell\" data-coords=\"[1,8]\"></div>\n            <div class=\"cell\" data-coords=\"[1,9]\"></div>\n          </div>\n          <div class=\"row row-2\">\n            <div class=\"cell\" data-coords=\"[2,0]\"></div>\n            <div class=\"cell\" data-coords=\"[2,1]\"></div>\n            <div class=\"cell\" data-coords=\"[2,2]\"></div>\n            <div class=\"cell\" data-coords=\"[2,3]\"></div>\n            <div class=\"cell\" data-coords=\"[2,4]\"></div>\n            <div class=\"cell\" data-coords=\"[2,5]\"></div>\n            <div class=\"cell\" data-coords=\"[2,6]\"></div>\n            <div class=\"cell\" data-coords=\"[2,7]\"></div>\n            <div class=\"cell\" data-coords=\"[2,8]\"></div>\n            <div class=\"cell\" data-coords=\"[2,9]\"></div>\n          </div>\n          <div class=\"row row-3\">\n            <div class=\"cell\" data-coords=\"[3,0]\"></div>\n            <div class=\"cell\" data-coords=\"[3,1]\"></div>\n            <div class=\"cell\" data-coords=\"[3,2]\"></div>\n            <div class=\"cell\" data-coords=\"[3,3]\"></div>\n            <div class=\"cell\" data-coords=\"[3,4]\"></div>\n            <div class=\"cell\" data-coords=\"[3,5]\"></div>\n            <div class=\"cell\" data-coords=\"[3,6]\"></div>\n            <div class=\"cell\" data-coords=\"[3,7]\"></div>\n            <div class=\"cell\" data-coords=\"[3,8]\"></div>\n            <div class=\"cell\" data-coords=\"[3,9]\"></div>\n          </div>\n          <div class=\"row row-4\">\n            <div class=\"cell\" data-coords=\"[4,0]\"></div>\n            <div class=\"cell\" data-coords=\"[4,1]\"></div>\n            <div class=\"cell\" data-coords=\"[4,2]\"></div>\n            <div class=\"cell\" data-coords=\"[4,3]\"></div>\n            <div class=\"cell\" data-coords=\"[4,4]\"></div>\n            <div class=\"cell\" data-coords=\"[4,5]\"></div>\n            <div class=\"cell\" data-coords=\"[4,6]\"></div>\n            <div class=\"cell\" data-coords=\"[4,7]\"></div>\n            <div class=\"cell\" data-coords=\"[4,8]\"></div>\n            <div class=\"cell\" data-coords=\"[4,9]\"></div>\n          </div>\n          <div class=\"row row-5\">\n            <div class=\"cell\" data-coords=\"[5,0]\"></div>\n            <div class=\"cell\" data-coords=\"[5,1]\"></div>\n            <div class=\"cell\" data-coords=\"[5,2]\"></div>\n            <div class=\"cell\" data-coords=\"[5,3]\"></div>\n            <div class=\"cell\" data-coords=\"[5,4]\"></div>\n            <div class=\"cell\" data-coords=\"[5,5]\"></div>\n            <div class=\"cell\" data-coords=\"[5,6]\"></div>\n            <div class=\"cell\" data-coords=\"[5,7]\"></div>\n            <div class=\"cell\" data-coords=\"[5,8]\"></div>\n            <div class=\"cell\" data-coords=\"[5,9]\"></div>\n          </div>\n          <div class=\"row row-6\">\n            <div class=\"cell\" data-coords=\"[6,0]\"></div>\n            <div class=\"cell\" data-coords=\"[6,1]\"></div>\n            <div class=\"cell\" data-coords=\"[6,2]\"></div>\n            <div class=\"cell\" data-coords=\"[6,3]\"></div>\n            <div class=\"cell\" data-coords=\"[6,4]\"></div>\n            <div class=\"cell\" data-coords=\"[6,5]\"></div>\n            <div class=\"cell\" data-coords=\"[6,6]\"></div>\n            <div class=\"cell\" data-coords=\"[6,7]\"></div>\n            <div class=\"cell\" data-coords=\"[6,8]\"></div>\n            <div class=\"cell\" data-coords=\"[6,9]\"></div>\n          </div>\n          <div class=\"row row-7\">\n            <div class=\"cell\" data-coords=\"[7,0]\"></div>\n            <div class=\"cell\" data-coords=\"[7,1]\"></div>\n            <div class=\"cell\" data-coords=\"[7,2]\"></div>\n            <div class=\"cell\" data-coords=\"[7,3]\"></div>\n            <div class=\"cell\" data-coords=\"[7,4]\"></div>\n            <div class=\"cell\" data-coords=\"[7,5]\"></div>\n            <div class=\"cell\" data-coords=\"[7,6]\"></div>\n            <div class=\"cell\" data-coords=\"[7,7]\"></div>\n            <div class=\"cell\" data-coords=\"[7,8]\"></div>\n            <div class=\"cell\" data-coords=\"[7,9]\"></div>\n          </div>\n          <div class=\"row row-8\">\n            <div class=\"cell\" data-coords=\"[8,0]\"></div>\n            <div class=\"cell\" data-coords=\"[8,1]\"></div>\n            <div class=\"cell\" data-coords=\"[8,2]\"></div>\n            <div class=\"cell\" data-coords=\"[8,3]\"></div>\n            <div class=\"cell\" data-coords=\"[8,4]\"></div>\n            <div class=\"cell\" data-coords=\"[8,5]\"></div>\n            <div class=\"cell\" data-coords=\"[8,6]\"></div>\n            <div class=\"cell\" data-coords=\"[8,7]\"></div>\n            <div class=\"cell\" data-coords=\"[8,8]\"></div>\n            <div class=\"cell\" data-coords=\"[8,9]\"></div>\n          </div>\n          <div class=\"row row-9\">\n            <div class=\"cell\" data-coords=\"[9,0]\"></div>\n            <div class=\"cell\" data-coords=\"[9,1]\"></div>\n            <div class=\"cell\" data-coords=\"[9,2]\"></div>\n            <div class=\"cell\" data-coords=\"[9,3]\"></div>\n            <div class=\"cell\" data-coords=\"[9,4]\"></div>\n            <div class=\"cell\" data-coords=\"[9,5]\"></div>\n            <div class=\"cell\" data-coords=\"[9,6]\"></div>\n            <div class=\"cell\" data-coords=\"[9,7]\"></div>\n            <div class=\"cell\" data-coords=\"[9,8]\"></div>\n            <div class=\"cell\" data-coords=\"[9,9]\"></div>\n          </div>\n        </div>  \n    ");
    var computerCells = _toConsumableArray(computerBoard.querySelectorAll(".cell"));
    var _iterator3 = _createForOfIteratorHelper(computerCells),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var cell = _step3.value;
        cell.addEventListener("click", /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameflow.attack(e, GameClass, alertFn, endgameFn);
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function (_x5) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return computerBoard;
  }
  function createAlertDiv(_x6) {
    return _createAlertDiv.apply(this, arguments);
  }
  function _createAlertDiv() {
    _createAlertDiv = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(message) {
      var alertDiv, existingElement;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            alertDiv = document.createElement("div");
            alertDiv.className = "alert-div";
            alertDiv.insertAdjacentHTML("beforeend", "<h3>".concat(message, "!</h3>"));
            existingElement = document.querySelector(".alert-div");
            if (existingElement) {
              _context3.next = 8;
              break;
            }
            document.body.appendChild(alertDiv);
            _context3.next = 9;
            break;
          case 8:
            return _context3.abrupt("return");
          case 9:
            _context3.next = 11;
            return _timeout(1500);
          case 11:
            document.body.removeChild(alertDiv);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _createAlertDiv.apply(this, arguments);
  }
  function createEndgameDiv(_x7) {
    return _createEndgameDiv.apply(this, arguments);
  }
  function _createEndgameDiv() {
    _createEndgameDiv = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(winner) {
      var background, text, startAgainBtn, existingElement;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            background = document.createElement("div");
            background.className = "background";
            text = winner === "player" ? "<h1>Congratulations! Player wins!</h1>" : "<h1>Sorry to say, but computer wins.</h1>";
            background.insertAdjacentHTML("beforeend", "\n      <div class=\"endgame\">\n        <h1>Game over!</h1>\n        ".concat(text, "\n        <button id=\"start-again-btn\">Start again</button>\n      </div>\n      "));
            startAgainBtn = background.querySelector("#start-again-btn");
            startAgainBtn.addEventListener("click", function (e) {
              window.location.reload();
            });
            existingElement = document.querySelector(".endgame");
            if (existingElement) {
              _context4.next = 11;
              break;
            }
            _context4.next = 10;
            return _timeout(3000);
          case 10:
            document.body.prepend(background);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _createEndgameDiv.apply(this, arguments);
  }
  function createHowToPlayMenu() {
    var background = document.createElement('div');
    background.className = 'background';
    background.insertAdjacentHTML("afterbegin", "\n      <div class=\"how-to-play\">\n        <div id=\"how-to-close-btn\" class=\"hit-black\"></div>\n        <h2>Starships - How to Play</h2>\n        <p><strong>Objective:</strong> The objective of Battleship is to strategically place your ships on a grid and guess\n          the locations of your opponent's ships in order to sink them all.</p>\n        <h4>Game Setup</h4>\n        <ol>\n          <li>Each player has their own grid, typically a 10x10 grid.</li>\n          <li>Ships of different sizes are placed on the grid, with each ship occupying a certain number of adjacent grid\n            cells horizontally or vertically.</li>\n        </ol>\n        <h4>Taking Turns</h4>\n        <ol>\n          <li>Players take turns guessing the coordinates of their opponent's ships.</li>\n          <li>After each guess, the result is revealed as a hit or a miss.</li>\n        </ol>\n        <h4>Hit and Miss Feedback</h4>\n        <ol>\n          <li>If a player's guess hits a ship, they get another turn to make additional guesses.</li>\n          <li>The opponent's grid is usually marked to indicate the hits and misses, allowing players to track their\n            progress. </li>\n          <li>The goal is to find and sink all of the opponent's ships before they do the same to you.</li>\n          <li>When all the cells of a ship are hit, it is considered sunk.</li>\n          <li>The game continues until one player has sunk all of their opponent's ships, declaring them the winner.</li>\n        </ol>\n      </div>\n    ");
    var closeBtn = background.querySelector('#how-to-close-btn');
    closeBtn.addEventListener('click', function (e) {
      if (e.target.id === 'how-to-close-btn') ;
      document.body.removeChild(background);
    });
    var existingElement = document.body.querySelector('.background');
    if (existingElement) document.body.removeChild(existingElement);else document.body.appendChild(background);
  }

  //------------------------------------------------------------------------------------------
  return {
    createPlaceShipMenu: createPlaceShipMenu,
    createPlayerBoard: createPlayerBoard,
    createComputerBoard: createComputerBoard,
    createAlertDiv: createAlertDiv,
    createEndgameDiv: createEndgameDiv,
    createHowToPlayMenu: createHowToPlayMenu
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/modules/gameflow.js":
/*!*********************************!*\
  !*** ./src/modules/gameflow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game),
/* harmony export */   "instanceGame": () => (/* binding */ instanceGame)
/* harmony export */ });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Game = /*#__PURE__*/function () {
  function Game(player, computer, queue) {
    var _this = this;
    _classCallCheck(this, Game);
    this.player = player;
    this.computer = computer;
    this.gameQueue = function () {
      queue.enqueue(_this.player);
      queue.enqueue(_this.computer);
      return queue;
    }();
    this.gameStarted = true;
    this.winner;
  }
  _createClass(Game, [{
    key: "_computerAttack",
    value: function _computerAttack(enemy) {
      var _this$computer$genera = this.computer.generateCoords(),
        _this$computer$genera2 = _slicedToArray(_this$computer$genera, 2),
        x = _this$computer$genera2[0],
        y = _this$computer$genera2[1];
      return this.computer.attackEnemy(enemy, x, y);
    }
  }, {
    key: "_playerAttack",
    value: function _playerAttack(enemy, coords) {
      var _JSON$parse = JSON.parse(coords),
        _JSON$parse2 = _slicedToArray(_JSON$parse, 2),
        x = _JSON$parse2[0],
        y = _JSON$parse2[1];
      return this.player.attackEnemy(enemy, x, y);
    }
  }, {
    key: "_moveQueue",
    value: function _moveQueue(result) {
      if (result === "miss") this.gameQueue.enqueue(this.gameQueue.dequeue());
    }
  }, {
    key: "_isGameOver",
    value: function _isGameOver(result) {
      if (result === "Game over") {
        this.winner = this._getAttacker();
        return true;
      }
    }
  }, {
    key: "_getAttacker",
    value: function _getAttacker() {
      return this.gameQueue.peek();
    }
  }, {
    key: "_getAttacked",
    value: function _getAttacked() {
      return this.gameQueue.last();
    }

    // attack for old computer class
    // async _attack(coords, successCb, alertCb, endgameCb) {
    //   if (!this.gameStarted) return;
    //   const attaker = this._getAttacker();
    //   const attacked = this._getAttacked();

    //   const [x, y] = JSON.parse(coords);
    //   const result = attaker.attackEnemy(attacked, x, y);
    //   console.log(result);
    //   if (result === "Cant hit one cell twice") {
    //     alertCb(result);
    //     return;
    //   }

    //   if (typeof result === "object") {
    //     successCb(attacked, coords, result.value);
    //     if (result.gamestate === "game over") {
    //       this.gameStarted = false;
    //       const winner = attaker.name;
    //       endgameCb(winner);
    //     }
    //     console.log("game over");
    //   }

    //   successCb(attacked, coords, result);

    //   this._moveQueue(result);

    //   if (this._getAttacker() === this.computer) {
    //     await this._timeout(2000);
    //     const attackCoords = JSON.stringify(this.computer.generateCoords());
    //     await this.attack(attackCoords, successCb, alertCb, endgameCb);
    //   }
    // }

    // attack for new ai
  }, {
    key: "attack",
    value: function () {
      var _attack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coords, successCb, alertCb, endgameCb) {
        var attacker, attacked, result, _attacker$attackEnemy, _attacker$attackEnemy2, _JSON$parse3, _JSON$parse4, x, y, winner;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.gameStarted) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              attacker = this._getAttacker();
              attacked = this._getAttacked();
              if (attacker === this.computer) {
                _attacker$attackEnemy = attacker.attackEnemy(attacked);
                _attacker$attackEnemy2 = _slicedToArray(_attacker$attackEnemy, 2);
                coords = _attacker$attackEnemy2[0];
                result = _attacker$attackEnemy2[1];
              } else {
                _JSON$parse3 = JSON.parse(coords), _JSON$parse4 = _slicedToArray(_JSON$parse3, 2), x = _JSON$parse4[0], y = _JSON$parse4[1];
                result = attacker.attackEnemy(attacked, x, y);
              }
              if (!(result === "Cant hit one cell twice")) {
                _context.next = 8;
                break;
              }
              alertCb(result);
              return _context.abrupt("return");
            case 8:
              if (_typeof(result) === "object") {
                successCb(attacked, coords, result.value, alertCb);
                if (result.gamestate === "game over") {
                  this.gameStarted = false;
                  winner = attacker.name;
                  endgameCb(winner);
                }
              }
              successCb(attacked, coords, result, alertCb);
              this._moveQueue(result);
              if (!(this._getAttacker() === this.computer)) {
                _context.next = 16;
                break;
              }
              _context.next = 14;
              return this._timeout(2000);
            case 14:
              _context.next = 16;
              return this.attack(null, successCb, alertCb, endgameCb);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function attack(_x2, _x3, _x4, _x5) {
        return _attack.apply(this, arguments);
      }
      return attack;
    }()
  }, {
    key: "_timeout",
    value: function _timeout(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }]);
  return Game;
}();
function instanceGame(ShipClass, BoardClass, PlayerClass, ComputerClass, QueueClass, GameClass) {
  var player = new PlayerClass(new BoardClass(), ShipClass, new QueueClass());
  var computer = new ComputerClass(new BoardClass(), ShipClass, new QueueClass());
  return new GameClass(player, computer, new QueueClass());
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Player = /*#__PURE__*/function () {
  function Player(gameboard, ShipClass, queue) {
    var _this = this;
    _classCallCheck(this, Player);
    this.name = "player";
    this.gameboard = gameboard;
    this.playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map(function (len) {
      return new ShipClass(len);
    });
    this.ships = function () {
      _this.playerShips.forEach(function (ship) {
        queue.enqueue(ship);
      });
      return queue;
    }();
    this.attacks = [];
  }
  _createClass(Player, [{
    key: "placeShip",
    value: function placeShip(x, y, direction) {
      if (this.ships.isEmpty()) return "All ships placed";
      var ship = this.ships.peek();
      ship.setDirection(direction);
      var result = this.gameboard.placeShip(ship, x, y);
      if (result !== "Ship cant be placed here") {
        this.ships.dequeue();
      }
      return result;
    }
  }, {
    key: "attackEnemy",
    value: function attackEnemy(enemy, x, y) {
      if (enemy.isAllSunk()) return;
      if (this.attacks.some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];
        return a === x && b === y;
      })) {
        return "Cant hit one cell twice";
      }
      this.attacks.push([x, y]);
      var result = enemy.gameboard.receiveAttack(x, y);
      if (result === "sink" && enemy.isAllSunk()) return {
        value: "sink",
        gamestate: "game over"
      };
      return result;
    }
  }, {
    key: "isAllSunk",
    value: function isAllSunk() {
      return this.playerShips.every(function (ship) {
        return ship.sink;
      });
    }
  }, {
    key: "isAllPlaced",
    value: function isAllPlaced() {
      return this.ships.size() === 0;
    }
  }]);
  return Player;
}();


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ S)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var S = /*#__PURE__*/function () {
  function S(size) {
    _classCallCheck(this, S);
    this.size = size;
    this.hits = _toConsumableArray(Array(size).keys());
    this.decks = [];
    this.sink = false;
    //[0,1,2,3]
    this.direction = "v";
  }
  _createClass(S, [{
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }, {
    key: "getHits",
    value: function getHits() {
      return this.hits;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      return this.direction;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection() {
      this.direction === "v" ? this.direction = "h" : this.direction = "v";
    }
  }, {
    key: "setDirection",
    value: function setDirection(dir) {
      this.direction = dir;
    }
  }, {
    key: "hit",
    value: function hit(pos) {
      if (this.hits[pos] === "hit" || this.hits[pos] === "sink") return;
      this.hits[pos] = "hit";
      if (this.isSink()) {
        this.hits = this.hits.map(function (hit) {
          return hit = "sink";
        });
        this.sink = true;
      }
    }
  }, {
    key: "isSink",
    value: function isSink() {
      return this.hits.every(function (hit) {
        return hit === "hit";
      });
    }
  }]);
  return S;
}();


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom_Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/Dom */ "./src/modules/dom/Dom.js");
/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ship */ "./src/modules/ship.js");
/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/board */ "./src/modules/board.js");
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/player */ "./src/modules/player.js");
/* harmony import */ var _modules_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ai */ "./src/modules/ai.js");
/* harmony import */ var _data_structures_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data_structures/queue */ "./src/data_structures/queue.js");
/* harmony import */ var _modules_gameflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/gameflow */ "./src/modules/gameflow.js");







var body = document.body;
var main = document.querySelector(".main");
var howToPlayBtn = document.querySelector("#how-to-play");
howToPlayBtn.addEventListener("click", _modules_dom_Dom__WEBPACK_IMPORTED_MODULE_0__["default"].createHowToPlayMenu);
body.prepend(_modules_dom_Dom__WEBPACK_IMPORTED_MODULE_0__["default"].createPlaceShipMenu(function () {
  return (0,_modules_gameflow__WEBPACK_IMPORTED_MODULE_6__.instanceGame)(_modules_ship__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_board__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_player__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_ai__WEBPACK_IMPORTED_MODULE_4__["default"], _data_structures_queue__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_gameflow__WEBPACK_IMPORTED_MODULE_6__.Game);
}, main, _modules_dom_Dom__WEBPACK_IMPORTED_MODULE_0__["default"].createAlertDiv, _modules_dom_Dom__WEBPACK_IMPORTED_MODULE_0__["default"].createEndgameDiv));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxHQUFHZixRQUFRLENBQUNlLElBQUk7QUFDMUIsSUFBTTJJLElBQUksR0FBRzFKLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM1QyxJQUFNNkksWUFBWSxHQUFHM0osUUFBUSxDQUFDYyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQzNENkksWUFBWSxDQUFDakcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFL0YsNEVBQXVCLENBQUM7QUFFL0RvRCxJQUFJLENBQUNpRCxPQUFPLENBQ1ZyRyw0RUFBdUIsQ0FDckI7RUFBQSxPQUFNbUwsK0RBQVksQ0FBQ08scURBQUMsRUFBRS9YLHNEQUFLLEVBQUV0RSx1REFBTSxFQUFFQyxtREFBUSxFQUFFcEIsOERBQUssRUFBRThiLG1EQUFJLENBQUM7QUFBQSxHQUMzRCtCLElBQUksRUFDSi9MLHVFQUFrQixFQUNsQkEseUVBQW9CLENBQ3JCLENBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9kYXRhX3N0cnVjdHVyZXMvcXVldWUuanMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYWkuanMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL0RvbS5qcyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lZmxvdy5qcyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gIH1cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPT09IDA7XG4gIH1cbiAgZW5xdWV1ZShlbCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnB1c2goZWwpO1xuICB9XG4gIGRlcXVldWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuc2hpZnQoKTtcbiAgfVxuICBjbGVhcigpe1xuICAgIHJldHVybiB0aGlzLml0ZW1zID0gW11cbiAgfVxuICBwZWVrKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbMF07XG4gIH1cbiAgbGFzdCgpIHtcbiAgICBpZiAodGhpcy5zaXplIDwgMSkgcmV0dXJuO1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuc2l6ZSgpIC0gMV07XG4gIH1cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cbiAgcHJpbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkLCBTaGlwQ2xhc3MsIHF1ZXVlKSB7XG4gICAgc3VwZXIoZ2FtZWJvYXJkLCBTaGlwQ2xhc3MsIHF1ZXVlKTtcbiAgICB0aGlzLm5hbWUgPSBcImNvbXB1dGVyXCI7XG4gICAgdGhpcy5oaXRNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdEhpdCA9IG51bGw7XG4gICAgdGhpcy5sYXN0SGl0ID0gbnVsbDtcbiAgICB0aGlzLmF0dGFja0RpciA9IFwibGVmdFwiO1xuICB9XG5cbiAgX2dlbmVyYXRlUmFuZG9tQ29vcmRzKCkge1xuICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICB9XG5cbiAgaXNBdHRhY2tlZChwb3MpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBwb3M7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrcy5zb21lKChbYSwgYl0pID0+IGEgPT09IHggJiYgYiA9PT0geSk7XG4gIH1cblxuICByZXNldEhpdE1vZGUoKSB7XG4gICAgdGhpcy5maXJzdEhpdCA9IG51bGw7XG4gICAgdGhpcy5sYXN0SGl0ID0gbnVsbDtcbiAgICB0aGlzLmF0dGFja0RpciA9IFwibGVmdFwiO1xuICAgIHRoaXMuaGl0TW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgZ2VuZXJhdGVDb29yZHMoKSB7XG4gICAgbGV0IFt4LCB5XSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgaWYgKCF0aGlzLmF0dGFja3Muc29tZSgoW2EsIGJdKSA9PiBhID09PSB4ICYmIGIgPT09IHkpKSB7XG4gICAgICB0aGlzLmF0dGFja3MucHVzaChbeCwgeV0pO1xuICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVJhbmRvbURpcigpIHtcbiAgICBjb25zdCBkaXIgPSBbXCJ2XCIsIFwiaFwiXTtcbiAgICByZXR1cm4gZGlyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgfVxuXG4gIHBsYWNlU2hpcCgpIHtcbiAgICBpZiAodGhpcy5pc0FsbFBsYWNlZCgpKSByZXR1cm4gXCJBbGwgc2hpcHMgYXJlIHBsYWNlZFwiO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuZ2VuZXJhdGVSYW5kb21EaXIoKTtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwcy5kZXF1ZXVlKCk7XG4gICAgbGV0IFt4LCB5XSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgc2hpcC5zZXREaXJlY3Rpb24oZGlyKTtcblxuICAgIGxldCByZXN1bHQgPSB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgd2hpbGUgKHJlc3VsdCA9PT0gXCJTaGlwIGNhbnQgYmUgcGxhY2VkIGhlcmVcIikge1xuICAgICAgW3gsIHldID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBsYWNlQWxsU2hpcHMoKSB7XG4gICAgd2hpbGUgKHRoaXMuc2hpcHMuc2l6ZSgpKSB7XG4gICAgICB0aGlzLnBsYWNlU2hpcCgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVib2FyZC5ncmlkKTtcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuZ3JpZDtcbiAgfVxuXG4gIGF0dGFja0VuZW15KGVuZW15KSB7XG4gICAgaWYgKGVuZW15LmlzQWxsU3VuaygpKSByZXR1cm47XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgeCwgeTtcblxuICAgIGlmICghdGhpcy5oaXRNb2RlKSB7XG4gICAgICBbeCwgeV0gPSB0aGlzLmdlbmVyYXRlQ29vcmRzKCk7XG4gICAgICByZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgdGhpcy5oaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maXJzdEhpdCA9IFt4LCB5XTtcbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5oaXRNb2RlKSB7XG4gICAgICBpZiAodGhpcy5hdHRhY2tEaXIgPT09IFwibGVmdFwiKSB7XG4gICAgICAgIC8vIExFRlRcbiAgICAgICAgW3gsIHldID0gW3RoaXMubGFzdEhpdFswXSwgdGhpcy5sYXN0SGl0WzFdIC0gMV07XG5cbiAgICAgICAgaWYgKHkgPCAwIHx8IHRoaXMuaXNBdHRhY2tlZChbeCwgeV0pKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgICB0aGlzLmF0dGFja0RpciA9IFwicmlnaHRcIjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tFbmVteShlbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgdGhpcy5hdHRhY2tzLnB1c2goW3gsIHldKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0SGl0TW9kZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmZpcnN0SGl0O1xuICAgICAgICAgIHRoaXMuYXR0YWNrRGlyID0gXCJyaWdodFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrRGlyID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgLy8gUklHSFRcbiAgICAgICAgW3gsIHldID0gW3RoaXMubGFzdEhpdFswXSwgdGhpcy5sYXN0SGl0WzFdICsgMV07XG5cbiAgICAgICAgaWYgKHkgPiA5IHx8IHRoaXMuaXNBdHRhY2tlZChbeCwgeV0pKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgICB0aGlzLmF0dGFja0RpciA9IFwidXBcIjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tFbmVteShlbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgdGhpcy5hdHRhY2tzLnB1c2goW3gsIHldKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmZpcnN0SGl0O1xuICAgICAgICAgIHRoaXMuYXR0YWNrRGlyID0gXCJ1cFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0SGl0TW9kZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrRGlyID09PSBcInVwXCIpIHtcbiAgICAgICAgLy8gVVBcbiAgICAgICAgW3gsIHldID0gW3RoaXMubGFzdEhpdFswXSAtIDEsIHRoaXMubGFzdEhpdFsxXV07XG5cbiAgICAgICAgaWYgKHggPCAwIHx8IHRoaXMuaXNBdHRhY2tlZChbeCwgeV0pKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgICB0aGlzLmF0dGFja0RpciA9IFwiZG93blwiO1xuICAgICAgICAgIHJldHVybiB0aGlzLmF0dGFja0VuZW15KGVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB0aGlzLmF0dGFja3MucHVzaChbeCwgeV0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICB0aGlzLmxhc3RIaXQgPSBbeCwgeV07XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgICAgIHRoaXMubGFzdEhpdCA9IHRoaXMuZmlyc3RIaXQ7XG4gICAgICAgICAgdGhpcy5hdHRhY2tEaXIgPSBcImRvd25cIjtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwic2lua1wiKSB7XG4gICAgICAgICAgdGhpcy5yZXNldEhpdE1vZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmF0dGFja0RpciA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgW3gsIHldID0gW3RoaXMubGFzdEhpdFswXSArIDEsIHRoaXMubGFzdEhpdFsxXV07XG5cbiAgICAgICAgcmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHRoaXMuYXR0YWNrcy5wdXNoKFt4LCB5XSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICB0aGlzLmxhc3RIaXQgPSBbeCwgeV07XG4gICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PT0gJ3NpbmsnKXtcbiAgICAgICAgICB0aGlzLnJlc2V0SGl0TW9kZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIgJiYgZW5lbXkuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFt4LCB5XSksXG4gICAgICAgIHsgdmFsdWU6IFwic2lua1wiLCBnYW1lc3RhdGU6IFwiZ2FtZSBvdmVyXCIgfSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbSlNPTi5zdHJpbmdpZnkoW3gsIHldKSwgcmVzdWx0XTtcbiAgfVxuXG4gIF9hdHRhY2tFbmVteShlbmVteSkge1xuICAgIGlmIChlbmVteS5pc0FsbFN1bmsoKSkgcmV0dXJuO1xuICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcbiAgICB0aGlzLmF0dGFja3MucHVzaChbeCwgeV0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChyZXN1bHQgPT09IFwic2lua1wiICYmIGVuZW15LmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBKU09OLnN0cmluZ2lmeShbeCwgeV0pLFxuICAgICAgICB7IHZhbHVlOiBcInNpbmtcIiwgZ2FtZXN0YXRlOiBcImdhbWUgb3ZlclwiIH0sXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW0pTT04uc3RyaW5naWZ5KFt4LCB5XSksIHJlc3VsdF07XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IGZhbHNlKVxuICAgICk7XG4gICAgdGhpcy5zaGlwcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnJlc2VydmVkID0gW107XG4gIH1cblxuICBfYmxvY2tDZWxscyh4LCB5KSB7XG4gICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5IHx8IHRoaXMuZ3JpZFt4XVt5XSlcbiAgICAgIHJldHVybiBcIk91dCBvZiByYW5nZVwiO1xuICAgIHRoaXMuZ3JpZFt4XVt5XSA9IFwicmVzXCI7XG4gICAgdGhpcy5yZXNlcnZlZC5wdXNoKFt4LCB5XSk7XG4gIH1cblxuICBfaXNCbG9ja2VkKHNoaXAsIHgsIHkpIHtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5yZXNlcnZlZC5zb21lKChpdGVtKSA9PiBpdGVtWzBdID09IGkgJiYgaXRlbVsxXSA9PSB5KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc2VydmVkLnNvbWUoKGl0ZW0pID0+IGl0ZW1bMF0gPT0geCAmJiBpdGVtWzFdID09IGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2NhblBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ3JpZFt4XSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZ3JpZFt5XSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJ2XCIgJiZcbiAgICAgICAgIXRoaXMuZ3JpZFt4XVt5XSAmJlxuICAgICAgICB4ICsgc2hpcC5zaXplIC0gMSA8PSA5ICYmXG4gICAgICAgICF0aGlzLl9pc0Jsb2NrZWQoc2hpcCwgeCwgeSkpIHx8XG4gICAgICAoc2hpcC5kaXJlY3Rpb24gPT09IFwiaFwiICYmXG4gICAgICAgICF0aGlzLmdyaWRbeF1beV0gJiZcbiAgICAgICAgeSArIHNoaXAuc2l6ZSAtIDEgPD0gOSAmJlxuICAgICAgICAhdGhpcy5faXNCbG9ja2VkKHNoaXAsIHgsIHkpKSB8fFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuX2NhblBsYWNlU2hpcChzaGlwLCB4LCB5KSkgcmV0dXJuIFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCI7XG4gICAgaWYgKHRoaXMuc2hpcHMuaGFzKHNoaXApKSByZXR1cm4gXCJDYW50IHBsYWNlIG9uZSBzaGlwIHR3aWNlXCI7XG4gICAgdGhpcy5zaGlwcy5zZXQoc2hpcCwgW10pO1xuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgdGhpcy5zaGlwcy5nZXQoc2hpcCkucHVzaChbeCArIGksIHldKTtcblxuICAgICAgICBzaGlwLmRlY2tzLnB1c2goSlNPTi5zdHJpbmdpZnkoW3ggKyBpLCB5XSkpO1xuICAgICAgICB0aGlzLmdyaWRbeCArIGldW3ldID0gW3NoaXAsIGldO1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5fYmxvY2tDZWxscyh4ICsgc2hpcC5zaXplLCB5ICsgaik7XG4gICAgICAgICAgdGhpcy5fYmxvY2tDZWxscyh4IC0gMSwgeSArIGopO1xuICAgICAgICAgIGlmIChqID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBpLCB5ICsgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNoaXBzLmdldChzaGlwKTtcbiAgICB9IGVsc2UgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICB0aGlzLnNoaXBzLmdldChzaGlwKS5wdXNoKFt4LCB5ICsgaV0pO1xuXG4gICAgICAgIHNoaXAuZGVja3MucHVzaChKU09OLnN0cmluZ2lmeShbeCwgeSArIGldKSk7XG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5ICsgaV0gPSBbc2hpcCwgaV07XG4gICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqKyspIHtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBqLCB5ICsgc2hpcC5zaXplKTtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBqLCB5IC0gMSk7XG4gICAgICAgICAgaWYgKGogPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMuX2Jsb2NrQ2VsbHMoeCArIGosIHkgKyBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZ2V0KHNoaXApO1xuICAgIH0gZWxzZSByZXR1cm4gXCJTaGlwIGNhbnQgYmUgcGxhY2VkIGhlcmVcIjtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ3JpZFt4XVt5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICBpZiAoW1wiaGl0XCIsIFwibWlzc1wiXS5pbmNsdWRlcyh0YXJnZXRbMV0pKVxuICAgICAgICByZXR1cm4gXCJUaGlzIGNlbGwgYWxyZWFkeSBhdHRhY2tlZFwiO1xuICAgICAgY29uc3QgW3NoaXAsIHBvc10gPSB0YXJnZXQ7XG4gICAgICBzaGlwLmhpdChwb3MpO1xuICAgICAgdGhpcy5ncmlkW3hdW3ldWzFdID0gc2hpcC5oaXRzW3Bvc107XG4gICAgICBpZiAoc2hpcC5zaW5rKSB7XG4gICAgICAgIHJldHVybiBcInNpbmtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRhcmdldCB8fCB0YXJnZXQgPT09IFwicmVzXCIpIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IFt0YXJnZXQsIFwibWlzc1wiXTtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgY29uc3QgX3RpbWVvdXQgPSAobXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfTtcblxuICAvLyBQbGFjZSBzaGlwc1xuICBmdW5jdGlvbiBfZ2V0RGlyKHNoaXBXcmFwcGVyKSB7XG4gICAgcmV0dXJuIHNoaXBXcmFwcGVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyBcInZcIiA6IFwiaFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldERpcihzaGlwV3JhcHBlciwgZGlyLCBkZWNrcykge1xuICAgIGlmIChkaXIgPT09IFwidlwiKSB7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIHNoaXBXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGAkezQuNSAqIGRlY2tzfWVtYDtcbiAgICAgIHNoaXBXcmFwcGVyLnN0eWxlLndpZHRoID0gXCI0LjVlbVwiO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSBcImhcIikge1xuICAgICAgc2hpcFdyYXBwZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIjQuNWVtXCI7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS53aWR0aCA9IGAkezQuNSAqIGRlY2tzfWVtYDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU2hpcEVsZW1lbnQocGFyZW50LCBkZWNrcykge1xuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBfZ2V0RGlyKHBhcmVudCk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNrczsgaSsrKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICAgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgIGBcbiAgICAgICk7XG4gICAgfVxuICAgIHBhcmVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgX3NldERpcihwYXJlbnQsIHNoaXBEaXJlY3Rpb24sIGRlY2tzKTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdhbWUgZnVuY3Rpb25zXG4gIGNvbnN0IGdhbWVmbG93ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBfZmluZENlbGwoY29vcmRzLCBjZWxsc0FycmF5KSB7XG4gICAgICByZXR1cm4gY2VsbHNBcnJheS5maW5kKChjZWxsKSA9PiBjZWxsLmRhdGFzZXQuY29vcmRzID09PSBjb29yZHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTaW5rZWRTaGlwKGF0dGFrZWRTaGlwcywgY2VsbHNBcnJheSwgY29vcmQpIHtcbiAgICAgIGNvbnN0IHNpbmtlZFNoaXAgPSBhdHRha2VkU2hpcHMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbS5kZWNrcy5zb21lKChkZWNrKSA9PiBkZWNrID09PSBjb29yZClcbiAgICAgICk7XG4gICAgICBsb2coc2lua2VkU2hpcCk7XG4gICAgICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBzaW5rZWRTaGlwLmRlY2tzKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBfZmluZENlbGwoY29vcmRzLCBjZWxsc0FycmF5KTtcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVuZW15LXNoaXBcIj48L2Rpdj4nO1xuICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBoaXQtYmxhY2tcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGFuZGxlQXR0YWNrKGF0dGFrZWRDbGFzcywgY29vcmRzLCByZXN1bHQsIGFsZXJ0Rm4pIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHthdHRha2VkQ2xhc3MubmFtZX0gLmNlbGxgKSwgXTtcbiAgICAgIGNvbnN0IGNlbGwgPSBfZmluZENlbGwoY29vcmRzLCBjZWxscyk7XG4gICAgICBpZiAoYXR0YWtlZENsYXNzLm5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgICAgIGFsZXJ0Rm4oYFBsYXllciBhdHRhY2tzOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBtaXNzXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgYWxlcnRGbihgUGxheWVyIGF0dGFja3M6ICR7cmVzdWx0fWApO1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIGhpdC1ibGFja1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgICBhbGVydEZuKGBQbGF5ZXIgYXR0YWNrczogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgX2NyZWF0ZVNpbmtlZFNoaXAoYXR0YWtlZENsYXNzLnBsYXllclNoaXBzLCBjZWxscywgY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGF0dGFrZWRDbGFzcy5uYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgYWxlcnRGbihgQ29tcHV0ZXIgYXR0YWNrczogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGwgbWlzc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIgfHwgcmVzdWx0ID09PSBcInNpbmtcIikge1xuICAgICAgICAgIGFsZXJ0Rm4oYENvbXB1dGVyIGF0dGFja3M6ICR7cmVzdWx0fWApO1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIGhpdFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FtZVN0YXJ0KEdhbWVDbGFzcywgbWFpbkRpdiwgYm9hcmQsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgICAgY29uc3QgcGxheWVyID0gR2FtZUNsYXNzLnBsYXllcjtcbiAgICAgIGNvbnN0IGNvbXB1dGVyID0gR2FtZUNsYXNzLmNvbXB1dGVyO1xuXG4gICAgICBpZiAoIXBsYXllci5zaGlwcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgYWxlcnRGbihcIllvdSBzaG91bGQgcGxhY2UgYWxsIHNoaXBzIGJlZm9yZSBnYW1lIHN0YXJ0c1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtYWluRGl2LmFwcGVuZChjcmVhdGVQbGF5ZXJCb2FyZChib2FyZCkpO1xuICAgICAgbWFpbkRpdi5hcHBlbmQoY3JlYXRlQ29tcHV0ZXJCb2FyZChHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikpO1xuXG4gICAgICBjb21wdXRlci5wbGFjZUFsbFNoaXBzKCk7XG4gICAgICBhbGVydEZuKFwiR2FtZSBTdGFydGVkXCIpO1xuICAgICAgXG4gICAgICBjb25zdCBwbGFjZVNoaXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lbnVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBsYWNlU2hpcE1lbnUpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGF0dGFjayhlLCBHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKEdhbWVDbGFzcy5fZ2V0QXR0YWNrZXIoKS5uYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgYWxlcnRGbihcIkl0cyBub3QgeW91ciB0dXJuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZHMgPSBlLnRhcmdldC5kYXRhc2V0LmNvb3JkcztcbiAgICAgIGF3YWl0IEdhbWVDbGFzcy5hdHRhY2soY29vcmRzLCBfaGFuZGxlQXR0YWNrLCBhbGVydEZuLCBlbmRnYW1lRm4pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF0dGFjaywgZ2FtZVN0YXJ0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgX3BsYWNlU2hpcEV2ZW50cyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRHJvcChlLCBwYXJlbnQsIHNoaXBXcmFwcGVyLCBjZWxsc0FycmF5LCBwbGF5ZXJDbGFzcykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2hpcFdyYXBwZXJJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgICAgY29uc3Qgc2hpcFdyYXBwZXJFbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKGAjJHtzaGlwV3JhcHBlcklkfWApO1xuICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuY2VsbFwiKTtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY2VsbC5kYXRhc2V0LmNvb3Jkcyk7XG4gICAgICBjb25zdCBkaXIgPSBfZ2V0RGlyKHNoaXBXcmFwcGVyRWwpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyQ2xhc3MucGxhY2VTaGlwKHgsIHksIGRpcik7XG4gICAgICBjb25zdCBkZWNrcyA9IFsuLi5zaGlwV3JhcHBlckVsLmNoaWxkcmVuXTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCIpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbGRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXN1bHRbaV0pO1xuICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNBcnJheS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmRhdGFzZXQuY29vcmRzID09PSBjZWxsZGF0YVxuICAgICAgICApO1xuICAgICAgICBjZWxsLmlubmVySFRNTCA9IGRlY2tzW2ldLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICAgIGlmICghcGxheWVyQ2xhc3Muc2hpcHMuaXNFbXB0eSgpKSB7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gcGxheWVyQ2xhc3Muc2hpcHMucGVlaygpLmdldFNpemUoKTtcbiAgICAgICAgX2NyZWF0ZVNoaXBFbGVtZW50KHNoaXBXcmFwcGVyLCBzaGlwU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW5kKGUpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEaXIoc2hpcFdyYXBwZXIpIHtcbiAgICAgIGNvbnN0IGRpciA9IF9nZXREaXIoc2hpcFdyYXBwZXIpO1xuICAgICAgY29uc3QgZGVja3MgPSBzaGlwV3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBkaXIgPT09IFwidlwiXG4gICAgICAgID8gX3NldERpcihzaGlwV3JhcHBlciwgXCJoXCIsIGRlY2tzKVxuICAgICAgICA6IF9zZXREaXIoc2hpcFdyYXBwZXIsIFwidlwiLCBkZWNrcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRyYWdTdGFydCxcbiAgICAgIGRyYWdFbmQsXG4gICAgICBkcmFnRHJvcCxcbiAgICAgIGRyYWdPdmVyLFxuICAgICAgZHJhZ0VudGVyLFxuICAgICAgY2hhbmdlRGlyLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGxhY2VTaGlwTWVudShuZXdHYW1lQ2xhc3NGbiwgbWFpbkRpdiwgYWxlcnRGbiwgZW5kZ2FtZUZuKSB7XG4gICAgY29uc3QgR2FtZUNsYXNzID0gbmV3R2FtZUNsYXNzRm4oKTtcbiAgICBjb25zdCBwbGF5ZXIgPSBHYW1lQ2xhc3MucGxheWVyO1xuICAgIFxuICAgIGNvbnN0IGV4aXN0aW5nRWxlbWVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lbnVcIik7XG4gICAgaWYgKGV4aXN0aW5nRWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChleGlzdGluZ0VsZW1lbnQpO1xuICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHBsYWNlU2hpcE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlU2hpcE1lbnUuY2xhc3NOYW1lID0gXCJwbGFjZS1zaGlwLW1lbnVcIjtcbiAgICBwbGFjZVNoaXBNZW51Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGgyPlBsYWNlIHNoaXBzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLXdyYXBwZXJcIiBpZD1cInNoaXAtd3JhcHBlclwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjY2VwdC1idG5cIj5TdGFydCBnYW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWNsaW5lLWJ0blwiPlJlbG9hZCBzaGlwczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IGJvYXJkID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiLmZpZWxkXCIpO1xuICAgIGNvbnN0IHNoaXBXcmFwcGVyID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiI3NoaXAtd3JhcHBlclwiKTtcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBwbGFjZVNoaXBNZW51LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjZXB0LWJ0blwiKTtcbiAgICBjb25zdCByZWxvYWRHYW1lQnRuID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiLmRlY2xpbmUtYnRuXCIpO1xuICAgIGNvbnN0IGNlbGxzID0gWy4uLnBsYWNlU2hpcE1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZCAuY2VsbFwiKV07XG5cbiAgICBzaGlwV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIF9wbGFjZVNoaXBFdmVudHMuZHJhZ1N0YXJ0KTtcbiAgICBzaGlwV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBfcGxhY2VTaGlwRXZlbnRzLmRyYWdFbmQpO1xuICAgIHNoaXBXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfcGxhY2VTaGlwRXZlbnRzLmNoYW5nZURpcihzaGlwV3JhcHBlcikgKTtcblxuICAgIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICBfcGxhY2VTaGlwRXZlbnRzLmRyYWdEcm9wKGUsIHBsYWNlU2hpcE1lbnUsIHNoaXBXcmFwcGVyLCBjZWxscywgcGxheWVyKTtcbiAgICAgIH0pO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgX3BsYWNlU2hpcEV2ZW50cy5kcmFnT3Zlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgX3BsYWNlU2hpcEV2ZW50cy5kcmFnRW50ZXIpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGdhbWVmbG93LmdhbWVTdGFydChHYW1lQ2xhc3MsIG1haW5EaXYsIGJvYXJkLCBhbGVydEZuLCBlbmRnYW1lRm4pO1xuICAgIH0pO1xuXG4gICAgcmVsb2FkR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5ld1BsYWNlU2hpcE1lbnUgPSBjcmVhdGVQbGFjZVNoaXBNZW51KCBuZXdHYW1lQ2xhc3NGbiwgbWFpbkRpdiwgY3JlYXRlQWxlcnREaXYsIGNyZWF0ZUVuZGdhbWVEaXYpO1xuICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG5ld1BsYWNlU2hpcE1lbnUpO1xuICAgICAgYWxlcnRGbihcIkFsbCBzaGlwcyB3YXMgcmVsb2FkZWRcIik7XG4gICAgfSk7XG5cbiAgICBfY3JlYXRlU2hpcEVsZW1lbnQoc2hpcFdyYXBwZXIsIHBsYXllci5zaGlwcy5wZWVrKCkuZ2V0U2l6ZSgpKTtcblxuICAgIHJldHVybiBwbGFjZVNoaXBNZW51O1xuICB9XG5cbiAgLy8gR2FtZVxuIFxuICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZChjcmVhdGVQbGF5ZXJGaWVsZCkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZFwiO1xuICAgIHBsYXllckJvYXJkLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGgyPlBsYXllciBib2FyZDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxheWVyXCI+PC9kaXY+XG4gICAgYFxuICAgICk7XG4gICAgY29uc3QgcGxheWVyRmllbGQgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgICBwbGF5ZXJGaWVsZC5pbm5lckhUTUwgPSBjcmVhdGVQbGF5ZXJGaWVsZC5pbm5lckhUTUw7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJCb2FyZChHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NOYW1lID0gXCJjb21wdXRlci1ib2FyZFwiO1xuICAgIGNvbXB1dGVyQm9hcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICBgXG4gICAgICAgICAgPGgyPkVuZW15IGJvYXJkPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy03XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICBgXG4gICAgKTtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gWy4uLmNvbXB1dGVyQm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpXTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY29tcHV0ZXJDZWxscykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgYXdhaXQgZ2FtZWZsb3cuYXR0YWNrKGUsIEdhbWVDbGFzcywgYWxlcnRGbiwgZW5kZ2FtZUZuKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wdXRlckJvYXJkO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWxlcnREaXYobWVzc2FnZSkge1xuICAgIGNvbnN0IGFsZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGVydERpdi5jbGFzc05hbWUgPSBcImFsZXJ0LWRpdlwiO1xuICAgIGFsZXJ0RGl2Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGgzPiR7bWVzc2FnZX0hPC9oMz5gKTtcbiAgICBjb25zdCBleGlzdGluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0LWRpdlwiKTtcbiAgICBcbiAgICBpZiAoIWV4aXN0aW5nRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydERpdik7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXdhaXQgX3RpbWVvdXQoMTUwMCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbGVydERpdik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVFbmRnYW1lRGl2KHdpbm5lcikge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kXCI7XG4gICAgbGV0IHRleHQgPVxuICAgICAgd2lubmVyID09PSBcInBsYXllclwiXG4gICAgICAgID8gXCI8aDE+Q29uZ3JhdHVsYXRpb25zISBQbGF5ZXIgd2lucyE8L2gxPlwiXG4gICAgICAgIDogXCI8aDE+U29ycnkgdG8gc2F5LCBidXQgY29tcHV0ZXIgd2lucy48L2gxPlwiO1xuXG4gICAgYmFja2dyb3VuZC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImVuZGdhbWVcIj5cbiAgICAgICAgPGgxPkdhbWUgb3ZlciE8L2gxPlxuICAgICAgICAke3RleHR9XG4gICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1hZ2Fpbi1idG5cIj5TdGFydCBhZ2FpbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXJ0QWdhaW5CdG4gPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtYWdhaW4tYnRuXCIpO1xuICAgIHN0YXJ0QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBleGlzdGluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZGdhbWVcIik7XG4gICAgaWYgKCFleGlzdGluZ0VsZW1lbnQpIHtcbiAgICAgIGF3YWl0IF90aW1lb3V0KDMwMDApO1xuICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhvd1RvUGxheU1lbnUoKXtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTmFtZSA9ICdiYWNrZ3JvdW5kJztcbiAgICBiYWNrZ3JvdW5kLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImhvdy10by1wbGF5XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJob3ctdG8tY2xvc2UtYnRuXCIgY2xhc3M9XCJoaXQtYmxhY2tcIj48L2Rpdj5cbiAgICAgICAgPGgyPlN0YXJzaGlwcyAtIEhvdyB0byBQbGF5PC9oMj5cbiAgICAgICAgPHA+PHN0cm9uZz5PYmplY3RpdmU6PC9zdHJvbmc+IFRoZSBvYmplY3RpdmUgb2YgQmF0dGxlc2hpcCBpcyB0byBzdHJhdGVnaWNhbGx5IHBsYWNlIHlvdXIgc2hpcHMgb24gYSBncmlkIGFuZCBndWVzc1xuICAgICAgICAgIHRoZSBsb2NhdGlvbnMgb2YgeW91ciBvcHBvbmVudCdzIHNoaXBzIGluIG9yZGVyIHRvIHNpbmsgdGhlbSBhbGwuPC9wPlxuICAgICAgICA8aDQ+R2FtZSBTZXR1cDwvaDQ+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+RWFjaCBwbGF5ZXIgaGFzIHRoZWlyIG93biBncmlkLCB0eXBpY2FsbHkgYSAxMHgxMCBncmlkLjwvbGk+XG4gICAgICAgICAgPGxpPlNoaXBzIG9mIGRpZmZlcmVudCBzaXplcyBhcmUgcGxhY2VkIG9uIHRoZSBncmlkLCB3aXRoIGVhY2ggc2hpcCBvY2N1cHlpbmcgYSBjZXJ0YWluIG51bWJlciBvZiBhZGphY2VudCBncmlkXG4gICAgICAgICAgICBjZWxscyBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseS48L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8aDQ+VGFraW5nIFR1cm5zPC9oND5cbiAgICAgICAgPG9sPlxuICAgICAgICAgIDxsaT5QbGF5ZXJzIHRha2UgdHVybnMgZ3Vlc3NpbmcgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZWlyIG9wcG9uZW50J3Mgc2hpcHMuPC9saT5cbiAgICAgICAgICA8bGk+QWZ0ZXIgZWFjaCBndWVzcywgdGhlIHJlc3VsdCBpcyByZXZlYWxlZCBhcyBhIGhpdCBvciBhIG1pc3MuPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgICAgPGg0PkhpdCBhbmQgTWlzcyBGZWVkYmFjazwvaDQ+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+SWYgYSBwbGF5ZXIncyBndWVzcyBoaXRzIGEgc2hpcCwgdGhleSBnZXQgYW5vdGhlciB0dXJuIHRvIG1ha2UgYWRkaXRpb25hbCBndWVzc2VzLjwvbGk+XG4gICAgICAgICAgPGxpPlRoZSBvcHBvbmVudCdzIGdyaWQgaXMgdXN1YWxseSBtYXJrZWQgdG8gaW5kaWNhdGUgdGhlIGhpdHMgYW5kIG1pc3NlcywgYWxsb3dpbmcgcGxheWVycyB0byB0cmFjayB0aGVpclxuICAgICAgICAgICAgcHJvZ3Jlc3MuIDwvbGk+XG4gICAgICAgICAgPGxpPlRoZSBnb2FsIGlzIHRvIGZpbmQgYW5kIHNpbmsgYWxsIG9mIHRoZSBvcHBvbmVudCdzIHNoaXBzIGJlZm9yZSB0aGV5IGRvIHRoZSBzYW1lIHRvIHlvdS48L2xpPlxuICAgICAgICAgIDxsaT5XaGVuIGFsbCB0aGUgY2VsbHMgb2YgYSBzaGlwIGFyZSBoaXQsIGl0IGlzIGNvbnNpZGVyZWQgc3Vuay48L2xpPlxuICAgICAgICAgIDxsaT5UaGUgZ2FtZSBjb250aW51ZXMgdW50aWwgb25lIHBsYXllciBoYXMgc3VuayBhbGwgb2YgdGhlaXIgb3Bwb25lbnQncyBzaGlwcywgZGVjbGFyaW5nIHRoZW0gdGhlIHdpbm5lci48L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICAgICk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNob3ctdG8tY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnaG93LXRvLWNsb3NlLWJ0bicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICB9KVxuXG4gICAgY29uc3QgZXhpc3RpbmdFbGVtZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZCcpO1xuICAgIGlmKGV4aXN0aW5nRWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChleGlzdGluZ0VsZW1lbnQpO1xuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKVxuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQbGFjZVNoaXBNZW51LFxuICAgIGNyZWF0ZVBsYXllckJvYXJkLFxuICAgIGNyZWF0ZUNvbXB1dGVyQm9hcmQsXG4gICAgY3JlYXRlQWxlcnREaXYsXG4gICAgY3JlYXRlRW5kZ2FtZURpdixcbiAgICBjcmVhdGVIb3dUb1BsYXlNZW51XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocGxheWVyLCBjb21wdXRlciwgcXVldWUpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLmNvbXB1dGVyID0gY29tcHV0ZXI7XG4gICAgdGhpcy5nYW1lUXVldWUgPSAoKCkgPT4ge1xuICAgICAgcXVldWUuZW5xdWV1ZSh0aGlzLnBsYXllcik7XG4gICAgICBxdWV1ZS5lbnF1ZXVlKHRoaXMuY29tcHV0ZXIpO1xuICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH0pKCk7XG4gICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy53aW5uZXI7XG4gIH1cbiAgX2NvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5jb21wdXRlci5nZW5lcmF0ZUNvb3JkcygpO1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVyLmF0dGFja0VuZW15KGVuZW15LCB4LCB5KTtcbiAgfVxuXG4gIF9wbGF5ZXJBdHRhY2soZW5lbXksIGNvb3Jkcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYXR0YWNrRW5lbXkoZW5lbXksIHgsIHkpO1xuICB9XG5cbiAgX21vdmVRdWV1ZShyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikgdGhpcy5nYW1lUXVldWUuZW5xdWV1ZSh0aGlzLmdhbWVRdWV1ZS5kZXF1ZXVlKCkpO1xuICB9XG5cbiAgX2lzR2FtZU92ZXIocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJHYW1lIG92ZXJcIikge1xuICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLl9nZXRBdHRhY2tlcigpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2dldEF0dGFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVRdWV1ZS5wZWVrKCk7XG4gIH1cblxuICBfZ2V0QXR0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVF1ZXVlLmxhc3QoKTtcbiAgfVxuXG4gIC8vIGF0dGFjayBmb3Igb2xkIGNvbXB1dGVyIGNsYXNzXG4gIC8vIGFzeW5jIF9hdHRhY2soY29vcmRzLCBzdWNjZXNzQ2IsIGFsZXJ0Q2IsIGVuZGdhbWVDYikge1xuICAvLyAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkgcmV0dXJuO1xuICAvLyAgIGNvbnN0IGF0dGFrZXIgPSB0aGlzLl9nZXRBdHRhY2tlcigpO1xuICAvLyAgIGNvbnN0IGF0dGFja2VkID0gdGhpcy5fZ2V0QXR0YWNrZWQoKTtcblxuICAvLyAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhdHRha2VyLmF0dGFja0VuZW15KGF0dGFja2VkLCB4LCB5KTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAvLyAgIGlmIChyZXN1bHQgPT09IFwiQ2FudCBoaXQgb25lIGNlbGwgdHdpY2VcIikge1xuICAvLyAgICAgYWxlcnRDYihyZXN1bHQpO1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cblxuICAvLyAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiKSB7XG4gIC8vICAgICBzdWNjZXNzQ2IoYXR0YWNrZWQsIGNvb3JkcywgcmVzdWx0LnZhbHVlKTtcbiAgLy8gICAgIGlmIChyZXN1bHQuZ2FtZXN0YXRlID09PSBcImdhbWUgb3ZlclwiKSB7XG4gIC8vICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgLy8gICAgICAgY29uc3Qgd2lubmVyID0gYXR0YWtlci5uYW1lO1xuICAvLyAgICAgICBlbmRnYW1lQ2Iod2lubmVyKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xuICAvLyAgIH1cblxuICAvLyAgIHN1Y2Nlc3NDYihhdHRhY2tlZCwgY29vcmRzLCByZXN1bHQpO1xuXG4gIC8vICAgdGhpcy5fbW92ZVF1ZXVlKHJlc3VsdCk7XG5cbiAgLy8gICBpZiAodGhpcy5fZ2V0QXR0YWNrZXIoKSA9PT0gdGhpcy5jb21wdXRlcikge1xuICAvLyAgICAgYXdhaXQgdGhpcy5fdGltZW91dCgyMDAwKTtcbiAgLy8gICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29tcHV0ZXIuZ2VuZXJhdGVDb29yZHMoKSk7XG4gIC8vICAgICBhd2FpdCB0aGlzLmF0dGFjayhhdHRhY2tDb29yZHMsIHN1Y2Nlc3NDYiwgYWxlcnRDYiwgZW5kZ2FtZUNiKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuXG4gIC8vIGF0dGFjayBmb3IgbmV3IGFpXG5cbiAgYXN5bmMgYXR0YWNrKGNvb3Jkcywgc3VjY2Vzc0NiLCBhbGVydENiLCBlbmRnYW1lQ2IpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHJldHVybjtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMuX2dldEF0dGFja2VyKCk7XG4gICAgY29uc3QgYXR0YWNrZWQgPSB0aGlzLl9nZXRBdHRhY2tlZCgpO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoYXR0YWNrZXIgPT09IHRoaXMuY29tcHV0ZXIpIHtcbiAgICAgIFtjb29yZHMsIHJlc3VsdF0gPSBhdHRhY2tlci5hdHRhY2tFbmVteShhdHRhY2tlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgICAgIHJlc3VsdCA9IGF0dGFja2VyLmF0dGFja0VuZW15KGF0dGFja2VkLCB4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSBcIkNhbnQgaGl0IG9uZSBjZWxsIHR3aWNlXCIpIHtcbiAgICAgIGFsZXJ0Q2IocmVzdWx0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgc3VjY2Vzc0NiKGF0dGFja2VkLCBjb29yZHMsIHJlc3VsdC52YWx1ZSwgYWxlcnRDYik7XG4gICAgICBpZiAocmVzdWx0LmdhbWVzdGF0ZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGF0dGFja2VyLm5hbWU7XG4gICAgICAgIGVuZGdhbWVDYih3aW5uZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1Y2Nlc3NDYihhdHRhY2tlZCwgY29vcmRzLCByZXN1bHQsIGFsZXJ0Q2IpO1xuICAgIHRoaXMuX21vdmVRdWV1ZShyZXN1bHQpO1xuXG4gICAgaWYgKHRoaXMuX2dldEF0dGFja2VyKCkgPT09IHRoaXMuY29tcHV0ZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuX3RpbWVvdXQoMjAwMCk7XG4gICAgICBhd2FpdCB0aGlzLmF0dGFjayhudWxsLCBzdWNjZXNzQ2IsIGFsZXJ0Q2IsIGVuZGdhbWVDYik7XG4gICAgfVxuICB9XG5cbiAgX3RpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YW5jZUdhbWUoXG4gIFNoaXBDbGFzcyxcbiAgQm9hcmRDbGFzcyxcbiAgUGxheWVyQ2xhc3MsXG4gIENvbXB1dGVyQ2xhc3MsXG4gIFF1ZXVlQ2xhc3MsXG4gIEdhbWVDbGFzc1xuKSB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJDbGFzcyhuZXcgQm9hcmRDbGFzcygpLCBTaGlwQ2xhc3MsIG5ldyBRdWV1ZUNsYXNzKCkpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBDb21wdXRlckNsYXNzKFxuICAgIG5ldyBCb2FyZENsYXNzKCksXG4gICAgU2hpcENsYXNzLFxuICAgIG5ldyBRdWV1ZUNsYXNzKClcbiAgKTtcbiAgcmV0dXJuIG5ldyBHYW1lQ2xhc3MocGxheWVyLCBjb21wdXRlciwgbmV3IFF1ZXVlQ2xhc3MoKSk7XG59XG5cbmV4cG9ydCB7IEdhbWUsIGluc3RhbmNlR2FtZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkLCBTaGlwQ2xhc3MsIHF1ZXVlKSB7XG4gICAgdGhpcy5uYW1lID0gXCJwbGF5ZXJcIjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLnBsYXllclNoaXBzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdLm1hcChcbiAgICAgIChsZW4pID0+IG5ldyBTaGlwQ2xhc3MobGVuKVxuICAgICk7XG4gICAgdGhpcy5zaGlwcyA9ICgoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgcXVldWUuZW5xdWV1ZShzaGlwKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH0pKCk7XG4gICAgdGhpcy5hdHRhY2tzID0gW107XG4gIH1cblxuICBwbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuc2hpcHMuaXNFbXB0eSgpKSByZXR1cm4gXCJBbGwgc2hpcHMgcGxhY2VkXCI7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHMucGVlaygpO1xuICAgIHNoaXAuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xuICAgIGlmIChyZXN1bHQgIT09IFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCIpIHtcbiAgICAgIHRoaXMuc2hpcHMuZGVxdWV1ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXR0YWNrRW5lbXkoZW5lbXksIHgsIHkpIHtcbiAgICBpZiAoZW5lbXkuaXNBbGxTdW5rKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5hdHRhY2tzLnNvbWUoKFthLCBiXSkgPT4gYSA9PT0geCAmJiBiID09PSB5KSkge1xuICAgICAgcmV0dXJuIFwiQ2FudCBoaXQgb25lIGNlbGwgdHdpY2VcIjtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICBjb25zdCByZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICBpZiAocmVzdWx0ID09PSBcInNpbmtcIiAmJiBlbmVteS5pc0FsbFN1bmsoKSlcbiAgICAgIHJldHVybiB7IHZhbHVlOiBcInNpbmtcIiwgZ2FtZXN0YXRlOiBcImdhbWUgb3ZlclwiIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlzQWxsU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJTaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zaW5rKTtcbiAgfVxuXG4gIGlzQWxsUGxhY2VkKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLnNpemUoKSA9PT0gMDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUyB7XG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuaGl0cyA9IFsuLi5BcnJheShzaXplKS5rZXlzKCldO1xuICAgIHRoaXMuZGVja3MgPSBbXVxuICAgIHRoaXMuc2luayA9IGZhbHNlO1xuICAgIC8vWzAsMSwyLDNdXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcInZcIjtcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldEhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb24oKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPT09IFwidlwiID8gKHRoaXMuZGlyZWN0aW9uID0gXCJoXCIpIDogKHRoaXMuZGlyZWN0aW9uID0gXCJ2XCIpO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKGRpcikge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyO1xuICB9XG5cbiAgaGl0KHBvcykge1xuICAgIGlmICh0aGlzLmhpdHNbcG9zXSA9PT0gXCJoaXRcIiB8fCB0aGlzLmhpdHNbcG9zXSA9PT0gXCJzaW5rXCIpIHJldHVybjtcbiAgICB0aGlzLmhpdHNbcG9zXSA9IFwiaGl0XCI7XG4gICAgaWYgKHRoaXMuaXNTaW5rKCkpIHtcbiAgICAgIHRoaXMuaGl0cyA9IHRoaXMuaGl0cy5tYXAoKGhpdCkgPT4gKGhpdCA9IFwic2lua1wiKSk7XG4gICAgICB0aGlzLnNpbmsgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzU2luaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChoaXQpID0+IGhpdCA9PT0gXCJoaXRcIik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERPTSBmcm9tIFwiLi9tb2R1bGVzL2RvbS9Eb21cIjtcbmltcG9ydCBTIGZyb20gXCIuL21vZHVsZXMvc2hpcFwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL21vZHVsZXMvYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXJcIjtcbmltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9tb2R1bGVzL2FpXCI7XG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vZGF0YV9zdHJ1Y3R1cmVzL3F1ZXVlXCI7XG5pbXBvcnQgeyBHYW1lLCBpbnN0YW5jZUdhbWUgfSBmcm9tIFwiLi9tb2R1bGVzL2dhbWVmbG93XCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbmNvbnN0IGhvd1RvUGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG93LXRvLXBsYXlcIik7XG5ob3dUb1BsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5jcmVhdGVIb3dUb1BsYXlNZW51KTtcblxuYm9keS5wcmVwZW5kKFxuICBET00uY3JlYXRlUGxhY2VTaGlwTWVudShcbiAgICAoKSA9PiBpbnN0YW5jZUdhbWUoUywgQm9hcmQsIFBsYXllciwgQ29tcHV0ZXIsIFF1ZXVlLCBHYW1lKSxcbiAgICBtYWluLFxuICAgIERPTS5jcmVhdGVBbGVydERpdixcbiAgICBET00uY3JlYXRlRW5kZ2FtZURpdlxuICApXG4pO1xuIl0sIm5hbWVzIjpbIlF1ZXVlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaXRlbXMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJlbnF1ZXVlIiwiZWwiLCJwdXNoIiwiZGVxdWV1ZSIsInNoaWZ0IiwiY2xlYXIiLCJwZWVrIiwibGFzdCIsInNpemUiLCJwcmludCIsImRlZmF1bHQiLCJQbGF5ZXIiLCJDb21wdXRlciIsIl9QbGF5ZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJnYW1lYm9hcmQiLCJTaGlwQ2xhc3MiLCJxdWV1ZSIsIl90aGlzIiwiY2FsbCIsIm5hbWUiLCJoaXRNb2RlIiwiZmlyc3RIaXQiLCJsYXN0SGl0IiwiYXR0YWNrRGlyIiwiX2dlbmVyYXRlUmFuZG9tQ29vcmRzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXNBdHRhY2tlZCIsInBvcyIsIl9wb3MiLCJfc2xpY2VkVG9BcnJheSIsIngiLCJ5IiwiYXR0YWNrcyIsInNvbWUiLCJfcmVmIiwiX3JlZjIiLCJhIiwiYiIsInJlc2V0SGl0TW9kZSIsImdlbmVyYXRlQ29vcmRzIiwiX3RoaXMkX2dlbmVyYXRlUmFuZG9tIiwiX3RoaXMkX2dlbmVyYXRlUmFuZG9tMiIsIl9yZWYzIiwiX3JlZjQiLCJnZW5lcmF0ZVJhbmRvbURpciIsImRpciIsInBsYWNlU2hpcCIsImlzQWxsUGxhY2VkIiwic2hpcCIsInNoaXBzIiwiX3RoaXMkX2dlbmVyYXRlUmFuZG9tMyIsIl90aGlzJF9nZW5lcmF0ZVJhbmRvbTQiLCJzZXREaXJlY3Rpb24iLCJyZXN1bHQiLCJfdGhpcyRfZ2VuZXJhdGVSYW5kb201IiwiX3RoaXMkX2dlbmVyYXRlUmFuZG9tNiIsInBsYWNlQWxsU2hpcHMiLCJjb25zb2xlIiwibG9nIiwiZ3JpZCIsImF0dGFja0VuZW15IiwiZW5lbXkiLCJpc0FsbFN1bmsiLCJfdGhpcyRnZW5lcmF0ZUNvb3JkcyIsIl90aGlzJGdlbmVyYXRlQ29vcmRzMiIsInJlY2VpdmVBdHRhY2siLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfcmVmOCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnYW1lc3RhdGUiLCJfYXR0YWNrRW5lbXkiLCJfdGhpcyRnZW5lcmF0ZUNvb3JkczMiLCJfdGhpcyRnZW5lcmF0ZUNvb3JkczQiLCJCb2FyZCIsIkFycmF5IiwiZnJvbSIsIk1hcCIsInJlc2VydmVkIiwiX2Jsb2NrQ2VsbHMiLCJfaXNCbG9ja2VkIiwiZGlyZWN0aW9uIiwiX2xvb3AiLCJpIiwiaXRlbSIsInYiLCJfcmV0IiwiX3R5cGVvZiIsIl9sb29wMiIsIl9pIiwiX3JldDIiLCJfY2FuUGxhY2VTaGlwIiwidW5kZWZpbmVkIiwiaGFzIiwic2V0IiwiZ2V0IiwiZGVja3MiLCJqIiwidGFyZ2V0IiwiaXNBcnJheSIsImluY2x1ZGVzIiwiX3RhcmdldCIsImhpdCIsImhpdHMiLCJzaW5rIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIm8iLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiRiIsInMiLCJuIiwiZSIsIl9lMiIsImYiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwic3RlcCIsIl9lMyIsIm1pbkxlbiIsInRvU3RyaW5nIiwidGVzdCIsImxlbiIsImFycjIiLCJfY29uc29sZSIsIkRPTSIsIl90aW1lb3V0IiwibXMiLCJzZXRUaW1lb3V0IiwiX2dldERpciIsInNoaXBXcmFwcGVyIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiX3NldERpciIsImhlaWdodCIsImNvbmNhdCIsIndpZHRoIiwiX2NyZWF0ZVNoaXBFbGVtZW50IiwicGFyZW50Iiwic2hpcERpcmVjdGlvbiIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsImRpc3BsYXkiLCJnYW1lZmxvdyIsIl9maW5kQ2VsbCIsImNvb3JkcyIsImNlbGxzQXJyYXkiLCJmaW5kIiwiY2VsbCIsImRhdGFzZXQiLCJfY3JlYXRlU2lua2VkU2hpcCIsImF0dGFrZWRTaGlwcyIsImNvb3JkIiwic2lua2VkU2hpcCIsImRlY2siLCJfaXRlcmF0b3IiLCJfc3RlcCIsImNsYXNzTmFtZSIsIl9oYW5kbGVBdHRhY2siLCJhdHRha2VkQ2xhc3MiLCJhbGVydEZuIiwiY2VsbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJTaGlwcyIsImdhbWVTdGFydCIsIkdhbWVDbGFzcyIsIm1haW5EaXYiLCJib2FyZCIsImVuZGdhbWVGbiIsInBsYXllciIsImNvbXB1dGVyIiwiYXBwZW5kIiwiY3JlYXRlUGxheWVyQm9hcmQiLCJjcmVhdGVDb21wdXRlckJvYXJkIiwicGxhY2VTaGlwTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJhdHRhY2siLCJfeCIsIl94MiIsIl94MyIsIl94NCIsIl9hdHRhY2siLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwiX2dldEF0dGFja2VyIiwiX3BsYWNlU2hpcEV2ZW50cyIsImRyYWdTdGFydCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJpZCIsImRyYWdEcm9wIiwicGxheWVyQ2xhc3MiLCJzaGlwV3JhcHBlcklkIiwiZ2V0RGF0YSIsInNoaXBXcmFwcGVyRWwiLCJjbG9zZXN0IiwiX0pTT04kcGFyc2UiLCJwYXJzZSIsIl9KU09OJHBhcnNlMiIsImNoaWxkcmVuIiwic3RvcFByb3BhZ2F0aW9uIiwiY2VsbGRhdGEiLCJzaGlwU2l6ZSIsImdldFNpemUiLCJyZW1vdmUiLCJkcmFnRW5kIiwiZHJhZ092ZXIiLCJkcmFnRW50ZXIiLCJjaGFuZ2VEaXIiLCJjcmVhdGVQbGFjZVNoaXBNZW51IiwibmV3R2FtZUNsYXNzRm4iLCJleGlzdGluZ0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3RhcnRHYW1lQnRuIiwicmVsb2FkR2FtZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibmV3UGxhY2VTaGlwTWVudSIsImNyZWF0ZUFsZXJ0RGl2IiwiY3JlYXRlRW5kZ2FtZURpdiIsInByZXBlbmQiLCJjcmVhdGVQbGF5ZXJGaWVsZCIsInBsYXllckJvYXJkIiwicGxheWVyRmllbGQiLCJjb21wdXRlckJvYXJkIiwiY29tcHV0ZXJDZWxscyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94NSIsIl94NiIsIl9jcmVhdGVBbGVydERpdiIsIl9jYWxsZWUzIiwibWVzc2FnZSIsImFsZXJ0RGl2IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiYXBwZW5kQ2hpbGQiLCJfeDciLCJfY3JlYXRlRW5kZ2FtZURpdiIsIl9jYWxsZWU0Iiwid2lubmVyIiwiYmFja2dyb3VuZCIsInRleHQiLCJzdGFydEFnYWluQnRuIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjcmVhdGVIb3dUb1BsYXlNZW51IiwiY2xvc2VCdG4iLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwiX3MiLCJfZSIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsIkdhbWUiLCJnYW1lUXVldWUiLCJnYW1lU3RhcnRlZCIsIl9jb21wdXRlckF0dGFjayIsIl90aGlzJGNvbXB1dGVyJGdlbmVyYSIsIl90aGlzJGNvbXB1dGVyJGdlbmVyYTIiLCJfcGxheWVyQXR0YWNrIiwiX21vdmVRdWV1ZSIsIl9pc0dhbWVPdmVyIiwiX2dldEF0dGFja2VkIiwic3VjY2Vzc0NiIiwiYWxlcnRDYiIsImVuZGdhbWVDYiIsImF0dGFja2VyIiwiYXR0YWNrZWQiLCJfYXR0YWNrZXIkYXR0YWNrRW5lbXkiLCJfYXR0YWNrZXIkYXR0YWNrRW5lbXkyIiwiX0pTT04kcGFyc2UzIiwiX0pTT04kcGFyc2U0IiwiaW5zdGFuY2VHYW1lIiwiQm9hcmRDbGFzcyIsIlBsYXllckNsYXNzIiwiQ29tcHV0ZXJDbGFzcyIsIlF1ZXVlQ2xhc3MiLCJtYXAiLCJldmVyeSIsIlMiLCJnZXRIaXRzIiwiZ2V0RGlyZWN0aW9uIiwiY2hhbmdlRGlyZWN0aW9uIiwiaXNTaW5rIiwibWFpbiIsImhvd1RvUGxheUJ0biJdLCJzb3VyY2VSb290IjoiIn0=