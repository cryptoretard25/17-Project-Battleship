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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
      return _toConsumableArray(this.attacks).some(function (_ref) {
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
      if (!_toConsumableArray(this.attacks).some(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          a = _ref4[0],
          b = _ref4[1];
        return a === x && b === y;
      })) {
        this.attacks.add([x, y]);
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
          this.attacks.add([x, y]);
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
          this.attacks.add([x, y]);
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
          this.attacks.add([x, y]);
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
          this.attacks.add([x, y]);
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
      this.attacks.add([x, y]);
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    this.attacks = new Set();
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
      if (_toConsumableArray(this.attacks).some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];
        return a === x && b === y;
      })) {
        return "Cant hit one cell twice";
      }
      this.attacks.add([x, y]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDTm9DO0FBQ0w7QUFDSztBQUNFO0FBQ0Y7QUFDUTtBQUNZO0FBRXhELElBQU12SSxJQUFJLEdBQUdmLFFBQVEsQ0FBQ2UsSUFBSTtBQUMxQixJQUFNNEksSUFBSSxHQUFHM0osUUFBUSxDQUFDYyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDLElBQU04SSxZQUFZLEdBQUc1SixRQUFRLENBQUNjLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDM0Q4SSxZQUFZLENBQUNsRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUvRiw0RUFBdUIsQ0FBQztBQUUvRG9ELElBQUksQ0FBQ2lELE9BQU8sQ0FDVnJHLDRFQUF1QixDQUNyQjtFQUFBLE9BQU1tTCwrREFBWSxDQUFDUSxxREFBQyxFQUFFL1gsc0RBQUssRUFBRXhFLHVEQUFNLEVBQUVDLG1EQUFRLEVBQUVwQiw4REFBSyxFQUFFK2IsbURBQUksQ0FBQztBQUFBLEdBQzNEZ0MsSUFBSSxFQUNKaE0sdUVBQWtCLEVBQ2xCQSx5RUFBb0IsQ0FDckIsQ0FDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2RhdGFfc3RydWN0dXJlcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9haS5qcyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ib2FyZC5qcyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vRG9tLmpzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVmbG93LmpzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgfVxuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgfVxuICBlbnF1ZXVlKGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMucHVzaChlbCk7XG4gIH1cbiAgZGVxdWV1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5zaGlmdCgpO1xuICB9XG4gIGNsZWFyKCl7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMgPSBbXVxuICB9XG4gIHBlZWsoKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1swXTtcbiAgfVxuICBsYXN0KCkge1xuICAgIGlmICh0aGlzLnNpemUgPCAxKSByZXR1cm47XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5zaXplKCkgLSAxXTtcbiAgfVxuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuICBwcmludCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQsIFNoaXBDbGFzcywgcXVldWUpIHtcbiAgICBzdXBlcihnYW1lYm9hcmQsIFNoaXBDbGFzcywgcXVldWUpO1xuICAgIHRoaXMubmFtZSA9IFwiY29tcHV0ZXJcIjtcbiAgICB0aGlzLmhpdE1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0SGl0ID0gbnVsbDtcbiAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgIHRoaXMuYXR0YWNrRGlyID0gXCJsZWZ0XCI7XG4gIH1cblxuICBfZ2VuZXJhdGVSYW5kb21Db29yZHMoKSB7XG4gICAgcmV0dXJuIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gIH1cblxuICBpc0F0dGFja2VkKHBvcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IHBvcztcbiAgICByZXR1cm4gWy4uLnRoaXMuYXR0YWNrc10uc29tZSgoW2EsIGJdKSA9PiBhID09PSB4ICYmIGIgPT09IHkpO1xuICB9XG5cbiAgcmVzZXRIaXRNb2RlKCkge1xuICAgIHRoaXMuZmlyc3RIaXQgPSBudWxsO1xuICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgdGhpcy5hdHRhY2tEaXIgPSBcImxlZnRcIjtcbiAgICB0aGlzLmhpdE1vZGUgPSBmYWxzZTtcbiAgfVxuXG4gIGdlbmVyYXRlQ29vcmRzKCkge1xuICAgIGxldCBbeCwgeV0gPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgIGlmICghWy4uLnRoaXMuYXR0YWNrc10uc29tZSgoW2EsIGJdKSA9PiBhID09PSB4ICYmIGIgPT09IHkpKSB7XG4gICAgICB0aGlzLmF0dGFja3MuYWRkKFt4LCB5XSk7XG4gICAgICByZXR1cm4gW3gsIHldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUNvb3JkcygpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tRGlyKCkge1xuICAgIGNvbnN0IGRpciA9IFtcInZcIiwgXCJoXCJdO1xuICAgIHJldHVybiBkaXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICB9XG5cbiAgcGxhY2VTaGlwKCkge1xuICAgIGlmICh0aGlzLmlzQWxsUGxhY2VkKCkpIHJldHVybiBcIkFsbCBzaGlwcyBhcmUgcGxhY2VkXCI7XG4gICAgY29uc3QgZGlyID0gdGhpcy5nZW5lcmF0ZVJhbmRvbURpcigpO1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzLmRlcXVldWUoKTtcbiAgICBsZXQgW3gsIHldID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcbiAgICBzaGlwLnNldERpcmVjdGlvbihkaXIpO1xuXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICB3aGlsZSAocmVzdWx0ID09PSBcIlNoaXAgY2FudCBiZSBwbGFjZWQgaGVyZVwiKSB7XG4gICAgICBbeCwgeV0gPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgcmVzdWx0ID0gdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGxhY2VBbGxTaGlwcygpIHtcbiAgICB3aGlsZSAodGhpcy5zaGlwcy5zaXplKCkpIHtcbiAgICAgIHRoaXMucGxhY2VTaGlwKCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZ2FtZWJvYXJkLmdyaWQpO1xuICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5ncmlkO1xuICB9XG5cbiAgYXR0YWNrRW5lbXkoZW5lbXkpIHtcbiAgICBpZiAoZW5lbXkuaXNBbGxTdW5rKCkpIHJldHVybjtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCB4LCB5O1xuXG4gICAgaWYgKCF0aGlzLmhpdE1vZGUpIHtcbiAgICAgIFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcbiAgICAgIHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgICB0aGlzLmhpdE1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZpcnN0SGl0ID0gW3gsIHldO1xuICAgICAgICB0aGlzLmxhc3RIaXQgPSBbeCwgeV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmhpdE1vZGUpIHtcbiAgICAgIGlmICh0aGlzLmF0dGFja0RpciA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgLy8gTEVGVFxuICAgICAgICBbeCwgeV0gPSBbdGhpcy5sYXN0SGl0WzBdLCB0aGlzLmxhc3RIaXRbMV0gLSAxXTtcblxuICAgICAgICBpZiAoeSA8IDAgfHwgdGhpcy5pc0F0dGFja2VkKFt4LCB5XSkpIHtcbiAgICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmZpcnN0SGl0O1xuICAgICAgICAgIHRoaXMuYXR0YWNrRGlyID0gXCJyaWdodFwiO1xuICAgICAgICAgIHJldHVybiB0aGlzLmF0dGFja0VuZW15KGVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB0aGlzLmF0dGFja3MuYWRkKFt4LCB5XSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgICAgIHRoaXMubGFzdEhpdCA9IFt4LCB5XTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwic2lua1wiKSB7XG4gICAgICAgICAgdGhpcy5yZXNldEhpdE1vZGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgICB0aGlzLmF0dGFja0RpciA9IFwicmlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmF0dGFja0RpciA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIC8vIFJJR0hUXG4gICAgICAgIFt4LCB5XSA9IFt0aGlzLmxhc3RIaXRbMF0sIHRoaXMubGFzdEhpdFsxXSArIDFdO1xuXG4gICAgICAgIGlmICh5ID4gOSB8fCB0aGlzLmlzQXR0YWNrZWQoW3gsIHldKSkge1xuICAgICAgICAgIHRoaXMubGFzdEhpdCA9IHRoaXMuZmlyc3RIaXQ7XG4gICAgICAgICAgdGhpcy5hdHRhY2tEaXIgPSBcInVwXCI7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNrRW5lbXkoZW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHRoaXMuYXR0YWNrcy5hZGQoW3gsIHldKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmZpcnN0SGl0O1xuICAgICAgICAgIHRoaXMuYXR0YWNrRGlyID0gXCJ1cFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0SGl0TW9kZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrRGlyID09PSBcInVwXCIpIHtcbiAgICAgICAgLy8gVVBcbiAgICAgICAgW3gsIHldID0gW3RoaXMubGFzdEhpdFswXSAtIDEsIHRoaXMubGFzdEhpdFsxXV07XG5cbiAgICAgICAgaWYgKHggPCAwIHx8IHRoaXMuaXNBdHRhY2tlZChbeCwgeV0pKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgICB0aGlzLmF0dGFja0RpciA9IFwiZG93blwiO1xuICAgICAgICAgIHJldHVybiB0aGlzLmF0dGFja0VuZW15KGVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB0aGlzLmF0dGFja3MuYWRkKFt4LCB5XSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgICAgIHRoaXMubGFzdEhpdCA9IFt4LCB5XTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgICB0aGlzLmF0dGFja0RpciA9IFwiZG93blwiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0SGl0TW9kZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrRGlyID09PSBcImRvd25cIikge1xuICAgICAgICBbeCwgeV0gPSBbdGhpcy5sYXN0SGl0WzBdICsgMSwgdGhpcy5sYXN0SGl0WzFdXTtcblxuICAgICAgICByZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgdGhpcy5hdHRhY2tzLmFkZChbeCwgeV0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuICAgICAgICB9ZWxzZSBpZihyZXN1bHQgPT09ICdzaW5rJyl7XG4gICAgICAgICAgdGhpcy5yZXNldEhpdE1vZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IFwic2lua1wiICYmIGVuZW15LmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBKU09OLnN0cmluZ2lmeShbeCwgeV0pLFxuICAgICAgICB7IHZhbHVlOiBcInNpbmtcIiwgZ2FtZXN0YXRlOiBcImdhbWUgb3ZlclwiIH0sXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW0pTT04uc3RyaW5naWZ5KFt4LCB5XSksIHJlc3VsdF07XG4gIH1cblxuICBfYXR0YWNrRW5lbXkoZW5lbXkpIHtcbiAgICBpZiAoZW5lbXkuaXNBbGxTdW5rKCkpIHJldHVybjtcbiAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmdlbmVyYXRlQ29vcmRzKCk7XG4gICAgdGhpcy5hdHRhY2tzLmFkZChbeCwgeV0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChyZXN1bHQgPT09IFwic2lua1wiICYmIGVuZW15LmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBKU09OLnN0cmluZ2lmeShbeCwgeV0pLFxuICAgICAgICB7IHZhbHVlOiBcInNpbmtcIiwgZ2FtZXN0YXRlOiBcImdhbWUgb3ZlclwiIH0sXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW0pTT04uc3RyaW5naWZ5KFt4LCB5XSksIHJlc3VsdF07XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IGZhbHNlKVxuICAgICk7XG4gICAgdGhpcy5zaGlwcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnJlc2VydmVkID0gW107XG4gIH1cblxuICBfYmxvY2tDZWxscyh4LCB5KSB7XG4gICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5IHx8IHRoaXMuZ3JpZFt4XVt5XSlcbiAgICAgIHJldHVybiBcIk91dCBvZiByYW5nZVwiO1xuICAgIHRoaXMuZ3JpZFt4XVt5XSA9IFwicmVzXCI7XG4gICAgdGhpcy5yZXNlcnZlZC5wdXNoKFt4LCB5XSk7XG4gIH1cblxuICBfaXNCbG9ja2VkKHNoaXAsIHgsIHkpIHtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5yZXNlcnZlZC5zb21lKChpdGVtKSA9PiBpdGVtWzBdID09IGkgJiYgaXRlbVsxXSA9PSB5KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc2VydmVkLnNvbWUoKGl0ZW0pID0+IGl0ZW1bMF0gPT0geCAmJiBpdGVtWzFdID09IGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2NhblBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ3JpZFt4XSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZ3JpZFt5XSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJ2XCIgJiZcbiAgICAgICAgIXRoaXMuZ3JpZFt4XVt5XSAmJlxuICAgICAgICB4ICsgc2hpcC5zaXplIC0gMSA8PSA5ICYmXG4gICAgICAgICF0aGlzLl9pc0Jsb2NrZWQoc2hpcCwgeCwgeSkpIHx8XG4gICAgICAoc2hpcC5kaXJlY3Rpb24gPT09IFwiaFwiICYmXG4gICAgICAgICF0aGlzLmdyaWRbeF1beV0gJiZcbiAgICAgICAgeSArIHNoaXAuc2l6ZSAtIDEgPD0gOSAmJlxuICAgICAgICAhdGhpcy5faXNCbG9ja2VkKHNoaXAsIHgsIHkpKSB8fFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuX2NhblBsYWNlU2hpcChzaGlwLCB4LCB5KSkgcmV0dXJuIFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCI7XG4gICAgaWYgKHRoaXMuc2hpcHMuaGFzKHNoaXApKSByZXR1cm4gXCJDYW50IHBsYWNlIG9uZSBzaGlwIHR3aWNlXCI7XG4gICAgdGhpcy5zaGlwcy5zZXQoc2hpcCwgW10pO1xuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgdGhpcy5zaGlwcy5nZXQoc2hpcCkucHVzaChbeCArIGksIHldKTtcblxuICAgICAgICBzaGlwLmRlY2tzLnB1c2goSlNPTi5zdHJpbmdpZnkoW3ggKyBpLCB5XSkpO1xuICAgICAgICB0aGlzLmdyaWRbeCArIGldW3ldID0gW3NoaXAsIGldO1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5fYmxvY2tDZWxscyh4ICsgc2hpcC5zaXplLCB5ICsgaik7XG4gICAgICAgICAgdGhpcy5fYmxvY2tDZWxscyh4IC0gMSwgeSArIGopO1xuICAgICAgICAgIGlmIChqID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBpLCB5ICsgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNoaXBzLmdldChzaGlwKTtcbiAgICB9IGVsc2UgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICB0aGlzLnNoaXBzLmdldChzaGlwKS5wdXNoKFt4LCB5ICsgaV0pO1xuXG4gICAgICAgIHNoaXAuZGVja3MucHVzaChKU09OLnN0cmluZ2lmeShbeCwgeSArIGldKSk7XG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5ICsgaV0gPSBbc2hpcCwgaV07XG4gICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqKyspIHtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBqLCB5ICsgc2hpcC5zaXplKTtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBqLCB5IC0gMSk7XG4gICAgICAgICAgaWYgKGogPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMuX2Jsb2NrQ2VsbHMoeCArIGosIHkgKyBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZ2V0KHNoaXApO1xuICAgIH0gZWxzZSByZXR1cm4gXCJTaGlwIGNhbnQgYmUgcGxhY2VkIGhlcmVcIjtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ3JpZFt4XVt5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICBpZiAoW1wiaGl0XCIsIFwibWlzc1wiXS5pbmNsdWRlcyh0YXJnZXRbMV0pKVxuICAgICAgICByZXR1cm4gXCJUaGlzIGNlbGwgYWxyZWFkeSBhdHRhY2tlZFwiO1xuICAgICAgY29uc3QgW3NoaXAsIHBvc10gPSB0YXJnZXQ7XG4gICAgICBzaGlwLmhpdChwb3MpO1xuICAgICAgdGhpcy5ncmlkW3hdW3ldWzFdID0gc2hpcC5oaXRzW3Bvc107XG4gICAgICBpZiAoc2hpcC5zaW5rKSB7XG4gICAgICAgIHJldHVybiBcInNpbmtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRhcmdldCB8fCB0YXJnZXQgPT09IFwicmVzXCIpIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IFt0YXJnZXQsIFwibWlzc1wiXTtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgY29uc3QgX3RpbWVvdXQgPSAobXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfTtcblxuICAvLyBQbGFjZSBzaGlwc1xuICBmdW5jdGlvbiBfZ2V0RGlyKHNoaXBXcmFwcGVyKSB7XG4gICAgcmV0dXJuIHNoaXBXcmFwcGVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyBcInZcIiA6IFwiaFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldERpcihzaGlwV3JhcHBlciwgZGlyLCBkZWNrcykge1xuICAgIGlmIChkaXIgPT09IFwidlwiKSB7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIHNoaXBXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGAkezQuNSAqIGRlY2tzfWVtYDtcbiAgICAgIHNoaXBXcmFwcGVyLnN0eWxlLndpZHRoID0gXCI0LjVlbVwiO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSBcImhcIikge1xuICAgICAgc2hpcFdyYXBwZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIjQuNWVtXCI7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS53aWR0aCA9IGAkezQuNSAqIGRlY2tzfWVtYDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU2hpcEVsZW1lbnQocGFyZW50LCBkZWNrcykge1xuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBfZ2V0RGlyKHBhcmVudCk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNrczsgaSsrKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICAgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgIGBcbiAgICAgICk7XG4gICAgfVxuICAgIHBhcmVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgX3NldERpcihwYXJlbnQsIHNoaXBEaXJlY3Rpb24sIGRlY2tzKTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdhbWUgZnVuY3Rpb25zXG4gIGNvbnN0IGdhbWVmbG93ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBfZmluZENlbGwoY29vcmRzLCBjZWxsc0FycmF5KSB7XG4gICAgICByZXR1cm4gY2VsbHNBcnJheS5maW5kKChjZWxsKSA9PiBjZWxsLmRhdGFzZXQuY29vcmRzID09PSBjb29yZHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTaW5rZWRTaGlwKGF0dGFrZWRTaGlwcywgY2VsbHNBcnJheSwgY29vcmQpIHtcbiAgICAgIGNvbnN0IHNpbmtlZFNoaXAgPSBhdHRha2VkU2hpcHMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbS5kZWNrcy5zb21lKChkZWNrKSA9PiBkZWNrID09PSBjb29yZClcbiAgICAgICk7XG4gICAgICBsb2coc2lua2VkU2hpcCk7XG4gICAgICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBzaW5rZWRTaGlwLmRlY2tzKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBfZmluZENlbGwoY29vcmRzLCBjZWxsc0FycmF5KTtcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVuZW15LXNoaXBcIj48L2Rpdj4nO1xuICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBoaXQtYmxhY2tcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGFuZGxlQXR0YWNrKGF0dGFrZWRDbGFzcywgY29vcmRzLCByZXN1bHQsIGFsZXJ0Rm4pIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHthdHRha2VkQ2xhc3MubmFtZX0gLmNlbGxgKSwgXTtcbiAgICAgIGNvbnN0IGNlbGwgPSBfZmluZENlbGwoY29vcmRzLCBjZWxscyk7XG4gICAgICBpZiAoYXR0YWtlZENsYXNzLm5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgICAgIGFsZXJ0Rm4oYFBsYXllciBhdHRhY2tzOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBtaXNzXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgYWxlcnRGbihgUGxheWVyIGF0dGFja3M6ICR7cmVzdWx0fWApO1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIGhpdC1ibGFja1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgICBhbGVydEZuKGBQbGF5ZXIgYXR0YWNrczogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgX2NyZWF0ZVNpbmtlZFNoaXAoYXR0YWtlZENsYXNzLnBsYXllclNoaXBzLCBjZWxscywgY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGF0dGFrZWRDbGFzcy5uYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgYWxlcnRGbihgQ29tcHV0ZXIgYXR0YWNrczogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGwgbWlzc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIgfHwgcmVzdWx0ID09PSBcInNpbmtcIikge1xuICAgICAgICAgIGFsZXJ0Rm4oYENvbXB1dGVyIGF0dGFja3M6ICR7cmVzdWx0fWApO1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIGhpdFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FtZVN0YXJ0KEdhbWVDbGFzcywgbWFpbkRpdiwgYm9hcmQsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgICAgY29uc3QgcGxheWVyID0gR2FtZUNsYXNzLnBsYXllcjtcbiAgICAgIGNvbnN0IGNvbXB1dGVyID0gR2FtZUNsYXNzLmNvbXB1dGVyO1xuXG4gICAgICBpZiAoIXBsYXllci5zaGlwcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgYWxlcnRGbihcIllvdSBzaG91bGQgcGxhY2UgYWxsIHNoaXBzIGJlZm9yZSBnYW1lIHN0YXJ0c1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtYWluRGl2LmFwcGVuZChjcmVhdGVQbGF5ZXJCb2FyZChib2FyZCkpO1xuICAgICAgbWFpbkRpdi5hcHBlbmQoY3JlYXRlQ29tcHV0ZXJCb2FyZChHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikpO1xuXG4gICAgICBjb21wdXRlci5wbGFjZUFsbFNoaXBzKCk7XG4gICAgICBhbGVydEZuKFwiR2FtZSBTdGFydGVkXCIpO1xuICAgICAgXG4gICAgICBjb25zdCBwbGFjZVNoaXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lbnVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBsYWNlU2hpcE1lbnUpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGF0dGFjayhlLCBHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKEdhbWVDbGFzcy5fZ2V0QXR0YWNrZXIoKS5uYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgYWxlcnRGbihcIkl0cyBub3QgeW91ciB0dXJuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZHMgPSBlLnRhcmdldC5kYXRhc2V0LmNvb3JkcztcbiAgICAgIGF3YWl0IEdhbWVDbGFzcy5hdHRhY2soY29vcmRzLCBfaGFuZGxlQXR0YWNrLCBhbGVydEZuLCBlbmRnYW1lRm4pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF0dGFjaywgZ2FtZVN0YXJ0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgX3BsYWNlU2hpcEV2ZW50cyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRHJvcChlLCBwYXJlbnQsIHNoaXBXcmFwcGVyLCBjZWxsc0FycmF5LCBwbGF5ZXJDbGFzcykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2hpcFdyYXBwZXJJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgICAgY29uc3Qgc2hpcFdyYXBwZXJFbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKGAjJHtzaGlwV3JhcHBlcklkfWApO1xuICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuY2VsbFwiKTtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY2VsbC5kYXRhc2V0LmNvb3Jkcyk7XG4gICAgICBjb25zdCBkaXIgPSBfZ2V0RGlyKHNoaXBXcmFwcGVyRWwpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyQ2xhc3MucGxhY2VTaGlwKHgsIHksIGRpcik7XG4gICAgICBjb25zdCBkZWNrcyA9IFsuLi5zaGlwV3JhcHBlckVsLmNoaWxkcmVuXTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCIpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbGRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXN1bHRbaV0pO1xuICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNBcnJheS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmRhdGFzZXQuY29vcmRzID09PSBjZWxsZGF0YVxuICAgICAgICApO1xuICAgICAgICBjZWxsLmlubmVySFRNTCA9IGRlY2tzW2ldLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICAgIGlmICghcGxheWVyQ2xhc3Muc2hpcHMuaXNFbXB0eSgpKSB7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gcGxheWVyQ2xhc3Muc2hpcHMucGVlaygpLmdldFNpemUoKTtcbiAgICAgICAgX2NyZWF0ZVNoaXBFbGVtZW50KHNoaXBXcmFwcGVyLCBzaGlwU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW5kKGUpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEaXIoc2hpcFdyYXBwZXIpIHtcbiAgICAgIGNvbnN0IGRpciA9IF9nZXREaXIoc2hpcFdyYXBwZXIpO1xuICAgICAgY29uc3QgZGVja3MgPSBzaGlwV3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBkaXIgPT09IFwidlwiXG4gICAgICAgID8gX3NldERpcihzaGlwV3JhcHBlciwgXCJoXCIsIGRlY2tzKVxuICAgICAgICA6IF9zZXREaXIoc2hpcFdyYXBwZXIsIFwidlwiLCBkZWNrcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRyYWdTdGFydCxcbiAgICAgIGRyYWdFbmQsXG4gICAgICBkcmFnRHJvcCxcbiAgICAgIGRyYWdPdmVyLFxuICAgICAgZHJhZ0VudGVyLFxuICAgICAgY2hhbmdlRGlyLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGxhY2VTaGlwTWVudShuZXdHYW1lQ2xhc3NGbiwgbWFpbkRpdiwgYWxlcnRGbiwgZW5kZ2FtZUZuKSB7XG4gICAgY29uc3QgR2FtZUNsYXNzID0gbmV3R2FtZUNsYXNzRm4oKTtcbiAgICBjb25zdCBwbGF5ZXIgPSBHYW1lQ2xhc3MucGxheWVyO1xuICAgIFxuICAgIGNvbnN0IGV4aXN0aW5nRWxlbWVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lbnVcIik7XG4gICAgaWYgKGV4aXN0aW5nRWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChleGlzdGluZ0VsZW1lbnQpO1xuICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHBsYWNlU2hpcE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlU2hpcE1lbnUuY2xhc3NOYW1lID0gXCJwbGFjZS1zaGlwLW1lbnVcIjtcbiAgICBwbGFjZVNoaXBNZW51Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGgyPlBsYWNlIHNoaXBzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLXdyYXBwZXJcIiBpZD1cInNoaXAtd3JhcHBlclwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjY2VwdC1idG5cIj5TdGFydCBnYW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWNsaW5lLWJ0blwiPlJlbG9hZCBzaGlwczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IGJvYXJkID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiLmZpZWxkXCIpO1xuICAgIGNvbnN0IHNoaXBXcmFwcGVyID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiI3NoaXAtd3JhcHBlclwiKTtcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBwbGFjZVNoaXBNZW51LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjZXB0LWJ0blwiKTtcbiAgICBjb25zdCByZWxvYWRHYW1lQnRuID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiLmRlY2xpbmUtYnRuXCIpO1xuICAgIGNvbnN0IGNlbGxzID0gWy4uLnBsYWNlU2hpcE1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZCAuY2VsbFwiKV07XG5cbiAgICBzaGlwV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIF9wbGFjZVNoaXBFdmVudHMuZHJhZ1N0YXJ0KTtcbiAgICBzaGlwV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBfcGxhY2VTaGlwRXZlbnRzLmRyYWdFbmQpO1xuICAgIHNoaXBXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfcGxhY2VTaGlwRXZlbnRzLmNoYW5nZURpcihzaGlwV3JhcHBlcikgKTtcblxuICAgIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICBfcGxhY2VTaGlwRXZlbnRzLmRyYWdEcm9wKGUsIHBsYWNlU2hpcE1lbnUsIHNoaXBXcmFwcGVyLCBjZWxscywgcGxheWVyKTtcbiAgICAgIH0pO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgX3BsYWNlU2hpcEV2ZW50cy5kcmFnT3Zlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgX3BsYWNlU2hpcEV2ZW50cy5kcmFnRW50ZXIpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGdhbWVmbG93LmdhbWVTdGFydChHYW1lQ2xhc3MsIG1haW5EaXYsIGJvYXJkLCBhbGVydEZuLCBlbmRnYW1lRm4pO1xuICAgIH0pO1xuXG4gICAgcmVsb2FkR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5ld1BsYWNlU2hpcE1lbnUgPSBjcmVhdGVQbGFjZVNoaXBNZW51KCBuZXdHYW1lQ2xhc3NGbiwgbWFpbkRpdiwgY3JlYXRlQWxlcnREaXYsIGNyZWF0ZUVuZGdhbWVEaXYpO1xuICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG5ld1BsYWNlU2hpcE1lbnUpO1xuICAgICAgYWxlcnRGbihcIkFsbCBzaGlwcyB3YXMgcmVsb2FkZWRcIik7XG4gICAgfSk7XG5cbiAgICBfY3JlYXRlU2hpcEVsZW1lbnQoc2hpcFdyYXBwZXIsIHBsYXllci5zaGlwcy5wZWVrKCkuZ2V0U2l6ZSgpKTtcblxuICAgIHJldHVybiBwbGFjZVNoaXBNZW51O1xuICB9XG5cbiAgLy8gR2FtZVxuIFxuICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZChjcmVhdGVQbGF5ZXJGaWVsZCkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZFwiO1xuICAgIHBsYXllckJvYXJkLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGgyPlBsYXllciBib2FyZDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxheWVyXCI+PC9kaXY+XG4gICAgYFxuICAgICk7XG4gICAgY29uc3QgcGxheWVyRmllbGQgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgICBwbGF5ZXJGaWVsZC5pbm5lckhUTUwgPSBjcmVhdGVQbGF5ZXJGaWVsZC5pbm5lckhUTUw7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJCb2FyZChHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NOYW1lID0gXCJjb21wdXRlci1ib2FyZFwiO1xuICAgIGNvbXB1dGVyQm9hcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICBgXG4gICAgICAgICAgPGgyPkVuZW15IGJvYXJkPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy03XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICBgXG4gICAgKTtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gWy4uLmNvbXB1dGVyQm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpXTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY29tcHV0ZXJDZWxscykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgYXdhaXQgZ2FtZWZsb3cuYXR0YWNrKGUsIEdhbWVDbGFzcywgYWxlcnRGbiwgZW5kZ2FtZUZuKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wdXRlckJvYXJkO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWxlcnREaXYobWVzc2FnZSkge1xuICAgIGNvbnN0IGFsZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGVydERpdi5jbGFzc05hbWUgPSBcImFsZXJ0LWRpdlwiO1xuICAgIGFsZXJ0RGl2Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGgzPiR7bWVzc2FnZX0hPC9oMz5gKTtcbiAgICBjb25zdCBleGlzdGluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0LWRpdlwiKTtcbiAgICBcbiAgICBpZiAoIWV4aXN0aW5nRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydERpdik7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXdhaXQgX3RpbWVvdXQoMTUwMCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbGVydERpdik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVFbmRnYW1lRGl2KHdpbm5lcikge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kXCI7XG4gICAgbGV0IHRleHQgPVxuICAgICAgd2lubmVyID09PSBcInBsYXllclwiXG4gICAgICAgID8gXCI8aDE+Q29uZ3JhdHVsYXRpb25zISBQbGF5ZXIgd2lucyE8L2gxPlwiXG4gICAgICAgIDogXCI8aDE+U29ycnkgdG8gc2F5LCBidXQgY29tcHV0ZXIgd2lucy48L2gxPlwiO1xuXG4gICAgYmFja2dyb3VuZC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImVuZGdhbWVcIj5cbiAgICAgICAgPGgxPkdhbWUgb3ZlciE8L2gxPlxuICAgICAgICAke3RleHR9XG4gICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1hZ2Fpbi1idG5cIj5TdGFydCBhZ2FpbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXJ0QWdhaW5CdG4gPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtYWdhaW4tYnRuXCIpO1xuICAgIHN0YXJ0QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBleGlzdGluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZGdhbWVcIik7XG4gICAgaWYgKCFleGlzdGluZ0VsZW1lbnQpIHtcbiAgICAgIGF3YWl0IF90aW1lb3V0KDMwMDApO1xuICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhvd1RvUGxheU1lbnUoKXtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTmFtZSA9ICdiYWNrZ3JvdW5kJztcbiAgICBiYWNrZ3JvdW5kLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImhvdy10by1wbGF5XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJob3ctdG8tY2xvc2UtYnRuXCIgY2xhc3M9XCJoaXQtYmxhY2tcIj48L2Rpdj5cbiAgICAgICAgPGgyPlN0YXJzaGlwcyAtIEhvdyB0byBQbGF5PC9oMj5cbiAgICAgICAgPHA+PHN0cm9uZz5PYmplY3RpdmU6PC9zdHJvbmc+IFRoZSBvYmplY3RpdmUgb2YgQmF0dGxlc2hpcCBpcyB0byBzdHJhdGVnaWNhbGx5IHBsYWNlIHlvdXIgc2hpcHMgb24gYSBncmlkIGFuZCBndWVzc1xuICAgICAgICAgIHRoZSBsb2NhdGlvbnMgb2YgeW91ciBvcHBvbmVudCdzIHNoaXBzIGluIG9yZGVyIHRvIHNpbmsgdGhlbSBhbGwuPC9wPlxuICAgICAgICA8aDQ+R2FtZSBTZXR1cDwvaDQ+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+RWFjaCBwbGF5ZXIgaGFzIHRoZWlyIG93biBncmlkLCB0eXBpY2FsbHkgYSAxMHgxMCBncmlkLjwvbGk+XG4gICAgICAgICAgPGxpPlNoaXBzIG9mIGRpZmZlcmVudCBzaXplcyBhcmUgcGxhY2VkIG9uIHRoZSBncmlkLCB3aXRoIGVhY2ggc2hpcCBvY2N1cHlpbmcgYSBjZXJ0YWluIG51bWJlciBvZiBhZGphY2VudCBncmlkXG4gICAgICAgICAgICBjZWxscyBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseS48L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8aDQ+VGFraW5nIFR1cm5zPC9oND5cbiAgICAgICAgPG9sPlxuICAgICAgICAgIDxsaT5QbGF5ZXJzIHRha2UgdHVybnMgZ3Vlc3NpbmcgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZWlyIG9wcG9uZW50J3Mgc2hpcHMuPC9saT5cbiAgICAgICAgICA8bGk+QWZ0ZXIgZWFjaCBndWVzcywgdGhlIHJlc3VsdCBpcyByZXZlYWxlZCBhcyBhIGhpdCBvciBhIG1pc3MuPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgICAgPGg0PkhpdCBhbmQgTWlzcyBGZWVkYmFjazwvaDQ+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+SWYgYSBwbGF5ZXIncyBndWVzcyBoaXRzIGEgc2hpcCwgdGhleSBnZXQgYW5vdGhlciB0dXJuIHRvIG1ha2UgYWRkaXRpb25hbCBndWVzc2VzLjwvbGk+XG4gICAgICAgICAgPGxpPlRoZSBvcHBvbmVudCdzIGdyaWQgaXMgdXN1YWxseSBtYXJrZWQgdG8gaW5kaWNhdGUgdGhlIGhpdHMgYW5kIG1pc3NlcywgYWxsb3dpbmcgcGxheWVycyB0byB0cmFjayB0aGVpclxuICAgICAgICAgICAgcHJvZ3Jlc3MuIDwvbGk+XG4gICAgICAgICAgPGxpPlRoZSBnb2FsIGlzIHRvIGZpbmQgYW5kIHNpbmsgYWxsIG9mIHRoZSBvcHBvbmVudCdzIHNoaXBzIGJlZm9yZSB0aGV5IGRvIHRoZSBzYW1lIHRvIHlvdS48L2xpPlxuICAgICAgICAgIDxsaT5XaGVuIGFsbCB0aGUgY2VsbHMgb2YgYSBzaGlwIGFyZSBoaXQsIGl0IGlzIGNvbnNpZGVyZWQgc3Vuay48L2xpPlxuICAgICAgICAgIDxsaT5UaGUgZ2FtZSBjb250aW51ZXMgdW50aWwgb25lIHBsYXllciBoYXMgc3VuayBhbGwgb2YgdGhlaXIgb3Bwb25lbnQncyBzaGlwcywgZGVjbGFyaW5nIHRoZW0gdGhlIHdpbm5lci48L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICAgICk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNob3ctdG8tY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnaG93LXRvLWNsb3NlLWJ0bicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICB9KVxuXG4gICAgY29uc3QgZXhpc3RpbmdFbGVtZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZCcpO1xuICAgIGlmKGV4aXN0aW5nRWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChleGlzdGluZ0VsZW1lbnQpO1xuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKVxuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQbGFjZVNoaXBNZW51LFxuICAgIGNyZWF0ZVBsYXllckJvYXJkLFxuICAgIGNyZWF0ZUNvbXB1dGVyQm9hcmQsXG4gICAgY3JlYXRlQWxlcnREaXYsXG4gICAgY3JlYXRlRW5kZ2FtZURpdixcbiAgICBjcmVhdGVIb3dUb1BsYXlNZW51XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocGxheWVyLCBjb21wdXRlciwgcXVldWUpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLmNvbXB1dGVyID0gY29tcHV0ZXI7XG4gICAgdGhpcy5nYW1lUXVldWUgPSAoKCkgPT4ge1xuICAgICAgcXVldWUuZW5xdWV1ZSh0aGlzLnBsYXllcik7XG4gICAgICBxdWV1ZS5lbnF1ZXVlKHRoaXMuY29tcHV0ZXIpO1xuICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH0pKCk7XG4gICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy53aW5uZXI7XG4gIH1cbiAgX2NvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5jb21wdXRlci5nZW5lcmF0ZUNvb3JkcygpO1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVyLmF0dGFja0VuZW15KGVuZW15LCB4LCB5KTtcbiAgfVxuXG4gIF9wbGF5ZXJBdHRhY2soZW5lbXksIGNvb3Jkcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYXR0YWNrRW5lbXkoZW5lbXksIHgsIHkpO1xuICB9XG5cbiAgX21vdmVRdWV1ZShyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikgdGhpcy5nYW1lUXVldWUuZW5xdWV1ZSh0aGlzLmdhbWVRdWV1ZS5kZXF1ZXVlKCkpO1xuICB9XG5cbiAgX2lzR2FtZU92ZXIocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJHYW1lIG92ZXJcIikge1xuICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLl9nZXRBdHRhY2tlcigpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2dldEF0dGFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVRdWV1ZS5wZWVrKCk7XG4gIH1cblxuICBfZ2V0QXR0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVF1ZXVlLmxhc3QoKTtcbiAgfVxuXG4gIC8vIGF0dGFjayBmb3Igb2xkIGNvbXB1dGVyIGNsYXNzXG4gIC8vIGFzeW5jIF9hdHRhY2soY29vcmRzLCBzdWNjZXNzQ2IsIGFsZXJ0Q2IsIGVuZGdhbWVDYikge1xuICAvLyAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkgcmV0dXJuO1xuICAvLyAgIGNvbnN0IGF0dGFrZXIgPSB0aGlzLl9nZXRBdHRhY2tlcigpO1xuICAvLyAgIGNvbnN0IGF0dGFja2VkID0gdGhpcy5fZ2V0QXR0YWNrZWQoKTtcblxuICAvLyAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhdHRha2VyLmF0dGFja0VuZW15KGF0dGFja2VkLCB4LCB5KTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAvLyAgIGlmIChyZXN1bHQgPT09IFwiQ2FudCBoaXQgb25lIGNlbGwgdHdpY2VcIikge1xuICAvLyAgICAgYWxlcnRDYihyZXN1bHQpO1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cblxuICAvLyAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiKSB7XG4gIC8vICAgICBzdWNjZXNzQ2IoYXR0YWNrZWQsIGNvb3JkcywgcmVzdWx0LnZhbHVlKTtcbiAgLy8gICAgIGlmIChyZXN1bHQuZ2FtZXN0YXRlID09PSBcImdhbWUgb3ZlclwiKSB7XG4gIC8vICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgLy8gICAgICAgY29uc3Qgd2lubmVyID0gYXR0YWtlci5uYW1lO1xuICAvLyAgICAgICBlbmRnYW1lQ2Iod2lubmVyKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xuICAvLyAgIH1cblxuICAvLyAgIHN1Y2Nlc3NDYihhdHRhY2tlZCwgY29vcmRzLCByZXN1bHQpO1xuXG4gIC8vICAgdGhpcy5fbW92ZVF1ZXVlKHJlc3VsdCk7XG5cbiAgLy8gICBpZiAodGhpcy5fZ2V0QXR0YWNrZXIoKSA9PT0gdGhpcy5jb21wdXRlcikge1xuICAvLyAgICAgYXdhaXQgdGhpcy5fdGltZW91dCgyMDAwKTtcbiAgLy8gICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29tcHV0ZXIuZ2VuZXJhdGVDb29yZHMoKSk7XG4gIC8vICAgICBhd2FpdCB0aGlzLmF0dGFjayhhdHRhY2tDb29yZHMsIHN1Y2Nlc3NDYiwgYWxlcnRDYiwgZW5kZ2FtZUNiKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuXG4gIC8vIGF0dGFjayBmb3IgbmV3IGFpXG5cbiAgYXN5bmMgYXR0YWNrKGNvb3Jkcywgc3VjY2Vzc0NiLCBhbGVydENiLCBlbmRnYW1lQ2IpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHJldHVybjtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMuX2dldEF0dGFja2VyKCk7XG4gICAgY29uc3QgYXR0YWNrZWQgPSB0aGlzLl9nZXRBdHRhY2tlZCgpO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoYXR0YWNrZXIgPT09IHRoaXMuY29tcHV0ZXIpIHtcbiAgICAgIFtjb29yZHMsIHJlc3VsdF0gPSBhdHRhY2tlci5hdHRhY2tFbmVteShhdHRhY2tlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgICAgIHJlc3VsdCA9IGF0dGFja2VyLmF0dGFja0VuZW15KGF0dGFja2VkLCB4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSBcIkNhbnQgaGl0IG9uZSBjZWxsIHR3aWNlXCIpIHtcbiAgICAgIGFsZXJ0Q2IocmVzdWx0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgc3VjY2Vzc0NiKGF0dGFja2VkLCBjb29yZHMsIHJlc3VsdC52YWx1ZSwgYWxlcnRDYik7XG4gICAgICBpZiAocmVzdWx0LmdhbWVzdGF0ZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGF0dGFja2VyLm5hbWU7XG4gICAgICAgIGVuZGdhbWVDYih3aW5uZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1Y2Nlc3NDYihhdHRhY2tlZCwgY29vcmRzLCByZXN1bHQsIGFsZXJ0Q2IpO1xuICAgIHRoaXMuX21vdmVRdWV1ZShyZXN1bHQpO1xuXG4gICAgaWYgKHRoaXMuX2dldEF0dGFja2VyKCkgPT09IHRoaXMuY29tcHV0ZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuX3RpbWVvdXQoMjAwMCk7XG4gICAgICBhd2FpdCB0aGlzLmF0dGFjayhudWxsLCBzdWNjZXNzQ2IsIGFsZXJ0Q2IsIGVuZGdhbWVDYik7XG4gICAgfVxuICB9XG5cbiAgX3RpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YW5jZUdhbWUoXG4gIFNoaXBDbGFzcyxcbiAgQm9hcmRDbGFzcyxcbiAgUGxheWVyQ2xhc3MsXG4gIENvbXB1dGVyQ2xhc3MsXG4gIFF1ZXVlQ2xhc3MsXG4gIEdhbWVDbGFzc1xuKSB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJDbGFzcyhuZXcgQm9hcmRDbGFzcygpLCBTaGlwQ2xhc3MsIG5ldyBRdWV1ZUNsYXNzKCkpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBDb21wdXRlckNsYXNzKFxuICAgIG5ldyBCb2FyZENsYXNzKCksXG4gICAgU2hpcENsYXNzLFxuICAgIG5ldyBRdWV1ZUNsYXNzKClcbiAgKTtcbiAgcmV0dXJuIG5ldyBHYW1lQ2xhc3MocGxheWVyLCBjb21wdXRlciwgbmV3IFF1ZXVlQ2xhc3MoKSk7XG59XG5cbmV4cG9ydCB7IEdhbWUsIGluc3RhbmNlR2FtZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkLCBTaGlwQ2xhc3MsIHF1ZXVlKSB7XG4gICAgdGhpcy5uYW1lID0gXCJwbGF5ZXJcIjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLnBsYXllclNoaXBzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdLm1hcChcbiAgICAgIChsZW4pID0+IG5ldyBTaGlwQ2xhc3MobGVuKVxuICAgICk7XG4gICAgdGhpcy5zaGlwcyA9ICgoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgcXVldWUuZW5xdWV1ZShzaGlwKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH0pKCk7XG4gICAgdGhpcy5hdHRhY2tzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLnNoaXBzLmlzRW1wdHkoKSkgcmV0dXJuIFwiQWxsIHNoaXBzIHBsYWNlZFwiO1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzLnBlZWsoKTtcbiAgICBzaGlwLnNldERpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICBpZiAocmVzdWx0ICE9PSBcIlNoaXAgY2FudCBiZSBwbGFjZWQgaGVyZVwiKSB7XG4gICAgICB0aGlzLnNoaXBzLmRlcXVldWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGF0dGFja0VuZW15KGVuZW15LCB4LCB5KSB7XG4gICAgaWYgKGVuZW15LmlzQWxsU3VuaygpKSByZXR1cm47XG4gICAgaWYgKFsuLi50aGlzLmF0dGFja3NdLnNvbWUoKFthLCBiXSkgPT4gYSA9PT0geCAmJiBiID09PSB5KSkge1xuICAgICAgcmV0dXJuIFwiQ2FudCBoaXQgb25lIGNlbGwgdHdpY2VcIjtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2tzLmFkZChbeCwgeV0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChyZXN1bHQgPT09IFwic2lua1wiICYmIGVuZW15LmlzQWxsU3VuaygpKVxuICAgICAgcmV0dXJuIHsgdmFsdWU6IFwic2lua1wiLCBnYW1lc3RhdGU6IFwiZ2FtZSBvdmVyXCIgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaXNBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllclNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnNpbmspO1xuICB9XG5cbiAgaXNBbGxQbGFjZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuc2l6ZSgpID09PSAwO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTIHtcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5oaXRzID0gWy4uLkFycmF5KHNpemUpLmtleXMoKV07XG4gICAgdGhpcy5kZWNrcyA9IFtdXG4gICAgdGhpcy5zaW5rID0gZmFsc2U7XG4gICAgLy9bMCwxLDIsM11cbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwidlwiO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9PT0gXCJ2XCIgPyAodGhpcy5kaXJlY3Rpb24gPSBcImhcIikgOiAodGhpcy5kaXJlY3Rpb24gPSBcInZcIik7XG4gIH1cblxuICBzZXREaXJlY3Rpb24oZGlyKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXI7XG4gIH1cblxuICBoaXQocG9zKSB7XG4gICAgaWYgKHRoaXMuaGl0c1twb3NdID09PSBcImhpdFwiIHx8IHRoaXMuaGl0c1twb3NdID09PSBcInNpbmtcIikgcmV0dXJuO1xuICAgIHRoaXMuaGl0c1twb3NdID0gXCJoaXRcIjtcbiAgICBpZiAodGhpcy5pc1NpbmsoKSkge1xuICAgICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzLm1hcCgoaGl0KSA9PiAoaGl0ID0gXCJzaW5rXCIpKTtcbiAgICAgIHRoaXMuc2luayA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaXNTaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoKGhpdCkgPT4gaGl0ID09PSBcImhpdFwiKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRE9NIGZyb20gXCIuL21vZHVsZXMvZG9tL0RvbVwiO1xuaW1wb3J0IFMgZnJvbSBcIi4vbW9kdWxlcy9zaGlwXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9ib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9tb2R1bGVzL3BsYXllclwiO1xuaW1wb3J0IENvbXB1dGVyIGZyb20gXCIuL21vZHVsZXMvYWlcIjtcbmltcG9ydCBRdWV1ZSBmcm9tIFwiLi9kYXRhX3N0cnVjdHVyZXMvcXVldWVcIjtcbmltcG9ydCB7IEdhbWUsIGluc3RhbmNlR2FtZSB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZWZsb3dcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuY29uc3QgaG93VG9QbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob3ctdG8tcGxheVwiKTtcbmhvd1RvUGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLmNyZWF0ZUhvd1RvUGxheU1lbnUpO1xuXG5ib2R5LnByZXBlbmQoXG4gIERPTS5jcmVhdGVQbGFjZVNoaXBNZW51KFxuICAgICgpID0+IGluc3RhbmNlR2FtZShTLCBCb2FyZCwgUGxheWVyLCBDb21wdXRlciwgUXVldWUsIEdhbWUpLFxuICAgIG1haW4sXG4gICAgRE9NLmNyZWF0ZUFsZXJ0RGl2LFxuICAgIERPTS5jcmVhdGVFbmRnYW1lRGl2XG4gIClcbik7XG4iXSwibmFtZXMiOlsiUXVldWUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpdGVtcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaXNFbXB0eSIsImxlbmd0aCIsImVucXVldWUiLCJlbCIsInB1c2giLCJkZXF1ZXVlIiwic2hpZnQiLCJjbGVhciIsInBlZWsiLCJsYXN0Iiwic2l6ZSIsInByaW50IiwiZGVmYXVsdCIsIlBsYXllciIsIkNvbXB1dGVyIiwiX1BsYXllciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImdhbWVib2FyZCIsIlNoaXBDbGFzcyIsInF1ZXVlIiwiX3RoaXMiLCJjYWxsIiwibmFtZSIsImhpdE1vZGUiLCJmaXJzdEhpdCIsImxhc3RIaXQiLCJhdHRhY2tEaXIiLCJfZ2VuZXJhdGVSYW5kb21Db29yZHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpc0F0dGFja2VkIiwicG9zIiwiX3BvcyIsIl9zbGljZWRUb0FycmF5IiwieCIsInkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhdHRhY2tzIiwic29tZSIsIl9yZWYiLCJfcmVmMiIsImEiLCJiIiwicmVzZXRIaXRNb2RlIiwiZ2VuZXJhdGVDb29yZHMiLCJfdGhpcyRfZ2VuZXJhdGVSYW5kb20iLCJfdGhpcyRfZ2VuZXJhdGVSYW5kb20yIiwiX3JlZjMiLCJfcmVmNCIsImFkZCIsImdlbmVyYXRlUmFuZG9tRGlyIiwiZGlyIiwicGxhY2VTaGlwIiwiaXNBbGxQbGFjZWQiLCJzaGlwIiwic2hpcHMiLCJfdGhpcyRfZ2VuZXJhdGVSYW5kb20zIiwiX3RoaXMkX2dlbmVyYXRlUmFuZG9tNCIsInNldERpcmVjdGlvbiIsInJlc3VsdCIsIl90aGlzJF9nZW5lcmF0ZVJhbmRvbTUiLCJfdGhpcyRfZ2VuZXJhdGVSYW5kb202IiwicGxhY2VBbGxTaGlwcyIsImNvbnNvbGUiLCJsb2ciLCJncmlkIiwiYXR0YWNrRW5lbXkiLCJlbmVteSIsImlzQWxsU3VuayIsIl90aGlzJGdlbmVyYXRlQ29vcmRzIiwiX3RoaXMkZ2VuZXJhdGVDb29yZHMyIiwicmVjZWl2ZUF0dGFjayIsIl9yZWY1IiwiX3JlZjYiLCJfcmVmNyIsIl9yZWY4IiwiSlNPTiIsInN0cmluZ2lmeSIsImdhbWVzdGF0ZSIsIl9hdHRhY2tFbmVteSIsIl90aGlzJGdlbmVyYXRlQ29vcmRzMyIsIl90aGlzJGdlbmVyYXRlQ29vcmRzNCIsIkJvYXJkIiwiQXJyYXkiLCJmcm9tIiwiTWFwIiwicmVzZXJ2ZWQiLCJfYmxvY2tDZWxscyIsIl9pc0Jsb2NrZWQiLCJkaXJlY3Rpb24iLCJfbG9vcCIsImkiLCJpdGVtIiwidiIsIl9yZXQiLCJfdHlwZW9mIiwiX2xvb3AyIiwiX2kiLCJfcmV0MiIsIl9jYW5QbGFjZVNoaXAiLCJ1bmRlZmluZWQiLCJoYXMiLCJzZXQiLCJnZXQiLCJkZWNrcyIsImoiLCJ0YXJnZXQiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJfdGFyZ2V0IiwiaGl0IiwiaGl0cyIsInNpbmsiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlc2MiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwibyIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJGIiwicyIsIm4iLCJlIiwiX2UyIiwiZiIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJzdGVwIiwiX2UzIiwibWluTGVuIiwidG9TdHJpbmciLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9jb25zb2xlIiwiRE9NIiwiX3RpbWVvdXQiLCJtcyIsInNldFRpbWVvdXQiLCJfZ2V0RGlyIiwic2hpcFdyYXBwZXIiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJfc2V0RGlyIiwiaGVpZ2h0IiwiY29uY2F0Iiwid2lkdGgiLCJfY3JlYXRlU2hpcEVsZW1lbnQiLCJwYXJlbnQiLCJzaGlwRGlyZWN0aW9uIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZGlzcGxheSIsImdhbWVmbG93IiwiX2ZpbmRDZWxsIiwiY29vcmRzIiwiY2VsbHNBcnJheSIsImZpbmQiLCJjZWxsIiwiZGF0YXNldCIsIl9jcmVhdGVTaW5rZWRTaGlwIiwiYXR0YWtlZFNoaXBzIiwiY29vcmQiLCJzaW5rZWRTaGlwIiwiZGVjayIsIl9pdGVyYXRvciIsIl9zdGVwIiwiY2xhc3NOYW1lIiwiX2hhbmRsZUF0dGFjayIsImF0dGFrZWRDbGFzcyIsImFsZXJ0Rm4iLCJjZWxscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBsYXllclNoaXBzIiwiZ2FtZVN0YXJ0IiwiR2FtZUNsYXNzIiwibWFpbkRpdiIsImJvYXJkIiwiZW5kZ2FtZUZuIiwicGxheWVyIiwiY29tcHV0ZXIiLCJhcHBlbmQiLCJjcmVhdGVQbGF5ZXJCb2FyZCIsImNyZWF0ZUNvbXB1dGVyQm9hcmQiLCJwbGFjZVNoaXBNZW51IiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImF0dGFjayIsIl94IiwiX3gyIiwiX3gzIiwiX3g0IiwiX2F0dGFjayIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJfZ2V0QXR0YWNrZXIiLCJfcGxhY2VTaGlwRXZlbnRzIiwiZHJhZ1N0YXJ0IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImlkIiwiZHJhZ0Ryb3AiLCJwbGF5ZXJDbGFzcyIsInNoaXBXcmFwcGVySWQiLCJnZXREYXRhIiwic2hpcFdyYXBwZXJFbCIsImNsb3Nlc3QiLCJfSlNPTiRwYXJzZSIsInBhcnNlIiwiX0pTT04kcGFyc2UyIiwiY2hpbGRyZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJjZWxsZGF0YSIsInNoaXBTaXplIiwiZ2V0U2l6ZSIsInJlbW92ZSIsImRyYWdFbmQiLCJkcmFnT3ZlciIsImRyYWdFbnRlciIsImNoYW5nZURpciIsImNyZWF0ZVBsYWNlU2hpcE1lbnUiLCJuZXdHYW1lQ2xhc3NGbiIsImV4aXN0aW5nRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdGFydEdhbWVCdG4iLCJyZWxvYWRHYW1lQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJuZXdQbGFjZVNoaXBNZW51IiwiY3JlYXRlQWxlcnREaXYiLCJjcmVhdGVFbmRnYW1lRGl2IiwicHJlcGVuZCIsImNyZWF0ZVBsYXllckZpZWxkIiwicGxheWVyQm9hcmQiLCJwbGF5ZXJGaWVsZCIsImNvbXB1dGVyQm9hcmQiLCJjb21wdXRlckNlbGxzIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX3g1IiwiX3g2IiwiX2NyZWF0ZUFsZXJ0RGl2IiwiX2NhbGxlZTMiLCJtZXNzYWdlIiwiYWxlcnREaXYiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJhcHBlbmRDaGlsZCIsIl94NyIsIl9jcmVhdGVFbmRnYW1lRGl2IiwiX2NhbGxlZTQiLCJ3aW5uZXIiLCJiYWNrZ3JvdW5kIiwidGV4dCIsInN0YXJ0QWdhaW5CdG4iLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNyZWF0ZUhvd1RvUGxheU1lbnUiLCJjbG9zZUJ0biIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJfcyIsIl9lIiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiR2FtZSIsImdhbWVRdWV1ZSIsImdhbWVTdGFydGVkIiwiX2NvbXB1dGVyQXR0YWNrIiwiX3RoaXMkY29tcHV0ZXIkZ2VuZXJhIiwiX3RoaXMkY29tcHV0ZXIkZ2VuZXJhMiIsIl9wbGF5ZXJBdHRhY2siLCJfbW92ZVF1ZXVlIiwiX2lzR2FtZU92ZXIiLCJfZ2V0QXR0YWNrZWQiLCJzdWNjZXNzQ2IiLCJhbGVydENiIiwiZW5kZ2FtZUNiIiwiYXR0YWNrZXIiLCJhdHRhY2tlZCIsIl9hdHRhY2tlciRhdHRhY2tFbmVteSIsIl9hdHRhY2tlciRhdHRhY2tFbmVteTIiLCJfSlNPTiRwYXJzZTMiLCJfSlNPTiRwYXJzZTQiLCJpbnN0YW5jZUdhbWUiLCJCb2FyZENsYXNzIiwiUGxheWVyQ2xhc3MiLCJDb21wdXRlckNsYXNzIiwiUXVldWVDbGFzcyIsIm1hcCIsIlNldCIsImV2ZXJ5IiwiUyIsImdldEhpdHMiLCJnZXREaXJlY3Rpb24iLCJjaGFuZ2VEaXJlY3Rpb24iLCJpc1NpbmsiLCJtYWluIiwiaG93VG9QbGF5QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==