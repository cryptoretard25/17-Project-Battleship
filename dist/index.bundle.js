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
    _this.attackedShip = [];
    return _this;
  }
  _createClass(Computer, [{
    key: "_generateRandomCoords",
    value: function _generateRandomCoords() {
      return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }
  }, {
    key: "generateCoords",
    value: function generateCoords() {
      var _this$_generateRandom = this._generateRandomCoords(),
        _this$_generateRandom2 = _slicedToArray(_this$_generateRandom, 2),
        x = _this$_generateRandom2[0],
        y = _this$_generateRandom2[1];
      if (!_toConsumableArray(this.attacks).some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];
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

    // Bot internal functions
  }, {
    key: "_resetHitMode",
    value: function _resetHitMode() {
      this.firstHit = null;
      this.lastHit = null;
      this.attackDir = "left";
      this.hitMode = false;
    }
  }, {
    key: "_isAttacked",
    value: function _isAttacked(pos) {
      var _pos = _slicedToArray(pos, 2),
        x = _pos[0],
        y = _pos[1];
      return _toConsumableArray(this.attacks).some(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          a = _ref4[0],
          b = _ref4[1];
        return a === x && b === y;
      });
    }
  }, {
    key: "_isValidAttackPosition",
    value: function _isValidAttackPosition(pos) {
      var _pos2 = _slicedToArray(pos, 2),
        x = _pos2[0],
        y = _pos2[1];
      return x >= 0 && x <= 9 && y >= 0 && y <= 9 && !this._isAttacked(pos);
    }
  }, {
    key: "_getNextDirection",
    value: function _getNextDirection() {
      var directions = ["right", "up", "down"];
      var currentIndex = directions.indexOf(this.attackDir);
      var nextIndex = (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    }
  }, {
    key: "_getAttackPosition",
    value: function _getAttackPosition() {
      var _this$lastHit = _slicedToArray(this.lastHit, 2),
        x = _this$lastHit[0],
        y = _this$lastHit[1];
      var positions = {
        left: [x, y - 1],
        right: [x, y + 1],
        up: [x - 1, y],
        down: [x + 1, y]
      };
      return positions[this.attackDir];
    }
  }, {
    key: "_sortAttackedShip",
    value: function _sortAttackedShip() {
      this.attackedShip.sort(function (a, b) {
        if (a[0] === b[0]) {
          return a[1] - b[1]; // Сортировка по значению y, если x равны
        } else {
          return a[0] - b[0]; // Сортировка по значению x, если x не равны
        }
      });
    }
  }, {
    key: "_getAttackedShipDir",
    value: function _getAttackedShipDir() {
      var _this2 = this;
      return this.attackedShip.every(function (item) {
        return item[0] === _this2.attackedShip[0][0];
      }) ? "horisontal" : "vertical";
    }
  }, {
    key: "_blockExactCells",
    value: function _blockExactCells(x, y) {
      if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
        this.attacks.add([x, y]);
      }
    }

    // Using first coords pair only
  }, {
    key: "_addBlockedCells",
    value: function _addBlockedCells() {
      var _this$attackedShip$ = _slicedToArray(this.attackedShip[0], 2),
        x = _this$attackedShip$[0],
        y = _this$attackedShip$[1];
      if (this._getAttackedShipDir() === "horisontal") {
        for (var i = 0; i < this.attackedShip.length; i++) {
          for (var j = -1; j <= 1; j++) {
            this._blockExactCells(x + j, y - 1);
            this._blockExactCells(x + j, y + this.attackedShip.length);
            if (j === 0) continue;
            this._blockExactCells(x + j, y + i);
          }
        }
      } else if (this._getAttackedShipDir() === 'vertical') {
        for (var _i2 = 0; _i2 < this.attackedShip.length; _i2++) {
          for (var _j = -1; _j <= 1; _j++) {
            this._blockExactCells(x - 1, y + _j);
            this._blockExactCells(x + this.attackedShip.length, y + _j);
            if (_j === 0) continue;
            this._blockExactCells(x + _i2, y + _j);
          }
        }
      }
    }

    // Using full coords array
  }, {
    key: "__addBlockedCells",
    value: function __addBlockedCells() {
      if (this._getAttackedShipDir() === "horisontal") {
        for (var i = 0; i < this.attackedShip.length; i++) {
          var _this$attackedShip$i = _slicedToArray(this.attackedShip[i], 2),
            x = _this$attackedShip$i[0],
            y = _this$attackedShip$i[1];
          if (i === 0) {
            var addToAttacked = [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y]];
            for (var _i3 = 0, _addToAttacked = addToAttacked; _i3 < _addToAttacked.length; _i3++) {
              var coords = _addToAttacked[_i3];
              var _coords = _slicedToArray(coords, 2),
                _x2 = _coords[0],
                _y = _coords[1];
              if (_x2 >= 0 && _x2 <= 9 && _y >= 0 && _y <= 9) this.attacks.add(coords);
            }
          }
          if (i > 0 && i < this.attackedShip.length - 1) {
            var _addToAttacked2 = [[x - 1, y], [x + 1, y]];
            for (var _i4 = 0, _addToAttacked3 = _addToAttacked2; _i4 < _addToAttacked3.length; _i4++) {
              var _coords2 = _addToAttacked3[_i4];
              var _coords3 = _slicedToArray(_coords2, 2),
                _x3 = _coords3[0],
                _y2 = _coords3[1];
              if (_x3 >= 0 && _x3 <= 9 && _y2 >= 0 && _y2 <= 9) this.attacks.add(_coords2);
            }
          }
          if (i === this.attackedShip.length - 1) {
            var _addToAttacked4 = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1], [x - 1, y], [x + 1, y]];
            for (var _i5 = 0, _addToAttacked5 = _addToAttacked4; _i5 < _addToAttacked5.length; _i5++) {
              var _coords4 = _addToAttacked5[_i5];
              var _coords5 = _slicedToArray(_coords4, 2),
                _x4 = _coords5[0],
                _y3 = _coords5[1];
              if (_x4 >= 0 && _x4 <= 9 && _y3 >= 0 && _y3 <= 9) this.attacks.add(_coords4);
            }
          }
        }
      } else {
        for (var _i6 = 0; _i6 < this.attackedShip.length; _i6++) {
          var _this$attackedShip$_i = _slicedToArray(this.attackedShip[_i6], 2),
            _x5 = _this$attackedShip$_i[0],
            _y4 = _this$attackedShip$_i[1];
          if (_i6 === 0) {
            var _addToAttacked6 = [[_x5 - 1, _y4 - 1], [_x5 - 1, _y4], [_x5 - 1, _y4 + 1], [_x5, _y4 - 1], [_x5, _y4 + 1]];
            for (var _i7 = 0, _addToAttacked7 = _addToAttacked6; _i7 < _addToAttacked7.length; _i7++) {
              var _coords6 = _addToAttacked7[_i7];
              var _coords7 = _slicedToArray(_coords6, 2),
                _x6 = _coords7[0],
                _y5 = _coords7[1];
              if (_x6 >= 0 && _x6 <= 9 && _y5 >= 0 && _y5 <= 9) this.attacks.add(_coords6);
            }
          }
          if (_i6 > 0 && _i6 < this.attackedShip.length - 1) {
            var _addToAttacked8 = [[_x5, _y4 - 1], [_x5, _y4 + 1]];
            for (var _i8 = 0, _addToAttacked9 = _addToAttacked8; _i8 < _addToAttacked9.length; _i8++) {
              var _coords8 = _addToAttacked9[_i8];
              var _coords9 = _slicedToArray(_coords8, 2),
                _x7 = _coords9[0],
                _y6 = _coords9[1];
              if (_x7 >= 0 && _x7 <= 9 && _y6 >= 0 && _y6 <= 9) this.attacks.add(_coords8);
            }
          }
          if (_i6 === this.attackedShip.length - 1) {
            var _addToAttacked10 = [[_x5 + 1, _y4 - 1], [_x5 + 1, _y4], [_x5 + 1, _y4 + 1], [_x5, _y4 - 1], [_x5, _y4 + 1]];
            for (var _i9 = 0, _addToAttacked11 = _addToAttacked10; _i9 < _addToAttacked11.length; _i9++) {
              var _coords10 = _addToAttacked11[_i9];
              var _coords11 = _slicedToArray(_coords10, 2),
                _x8 = _coords11[0],
                _y7 = _coords11[1];
              if (_x8 >= 0 && _x8 <= 9 && _y7 >= 0 && _y7 <= 9) this.attacks.add(_coords10);
            }
          }
        }
      }
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
          this.attackedShip.push([x, y]);
        } else if (result === "sink") {
          this.attackedShip.push([x, y]);
          this._addBlockedCells();
          this.attackedShip = [];
        }
      } else if (this.hitMode) {
        var _this$_getAttackPosit = this._getAttackPosition();
        var _this$_getAttackPosit2 = _slicedToArray(_this$_getAttackPosit, 2);
        x = _this$_getAttackPosit2[0];
        y = _this$_getAttackPosit2[1];
        if (!this._isValidAttackPosition([x, y])) {
          this.lastHit = this.firstHit;
          this.attackDir = this._getNextDirection();
          return this.attackEnemy(enemy);
        }
        result = enemy.gameboard.receiveAttack(x, y);
        this.attacks.add([x, y]);
        if (result === "hit") {
          this.lastHit = [x, y];
          this.attackedShip.push([x, y]);
        } else if (result === "sink") {
          this.attackedShip.push([x, y]);
          this._sortAttackedShip();
          this._addBlockedCells();
          this.attackedShip = [];
          this._resetHitMode();
        } else if (result === "miss") {
          this.lastHit = this.firstHit;
          this.attackDir = this._getNextDirection();
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

    // _attackEnemy(enemy) {
    //   if (enemy.isAllSunk()) return;
    //   let result;
    //   let x, y;

    //   if (!this.hitMode) {
    //     [x, y] = this.generateCoords();
    //     result = enemy.gameboard.receiveAttack(x, y);
    //     if (result === "hit") {
    //       this.hitMode = true;
    //       this.firstHit = [x, y];
    //       this.lastHit = [x, y];
    //     }
    //   } else if (this.hitMode) {
    //     if (this.attackDir === "left") {
    //       // LEFT
    //       [x, y] = [this.lastHit[0], this.lastHit[1] - 1];

    //       if (y < 0 || this.isAttacked([x, y])) {
    //         this.lastHit = this.firstHit;
    //         this.attackDir = "right";
    //         return this.attackEnemy(enemy);
    //       }

    //       result = enemy.gameboard.receiveAttack(x, y);
    //       this.attacks.add([x, y]);

    //       if (result === "hit") {
    //         this.lastHit = [x, y];
    //       } else if (result === "sink") {
    //         this.resetHitMode();
    //       } else if (result === "miss") {
    //         this.lastHit = this.firstHit;
    //         this.attackDir = "right";
    //       }
    //     } else if (this.attackDir === "right") {
    //       // RIGHT
    //       [x, y] = [this.lastHit[0], this.lastHit[1] + 1];

    //       if (y > 9 || this.isAttacked([x, y])) {
    //         this.lastHit = this.firstHit;
    //         this.attackDir = "up";
    //         return this.attackEnemy(enemy);
    //       }

    //       result = enemy.gameboard.receiveAttack(x, y);
    //       this.attacks.add([x, y]);

    //       if (result === "hit") {
    //         this.lastHit = [x, y];
    //       } else if (result === "miss") {
    //         this.lastHit = this.firstHit;
    //         this.attackDir = "up";
    //       } else if (result === "sink") {
    //         this.resetHitMode();
    //       }
    //     } else if (this.attackDir === "up") {
    //       // UP
    //       [x, y] = [this.lastHit[0] - 1, this.lastHit[1]];

    //       if (x < 0 || this.isAttacked([x, y])) {
    //         this.lastHit = this.firstHit;
    //         this.attackDir = "down";
    //         return this.attackEnemy(enemy);
    //       }

    //       result = enemy.gameboard.receiveAttack(x, y);
    //       this.attacks.add([x, y]);

    //       if (result === "hit") {
    //         this.lastHit = [x, y];
    //       } else if (result === "miss") {
    //         this.lastHit = this.firstHit;
    //         this.attackDir = "down";
    //       } else if (result === "sink") {
    //         this.resetHitMode();
    //       }
    //     } else if (this.attackDir === "down") {
    //       [x, y] = [this.lastHit[0] + 1, this.lastHit[1]];

    //       result = enemy.gameboard.receiveAttack(x, y);
    //       this.attacks.add([x, y]);

    //       if (result === "hit") {
    //         this.lastHit = [x, y];
    //       } else if (result === "sink") {
    //         this.resetHitMode();
    //       }
    //     }
    //   }

    //   if (result === "sink" && enemy.isAllSunk()) {
    //     return [
    //       JSON.stringify([x, y]),
    //       { value: "sink", gamestate: "game over" },
    //     ];
    //   }
    //   return [JSON.stringify([x, y]), result];
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDTDtBQUNLO0FBQ0U7QUFDRjtBQUNRO0FBQ1k7QUFFeEQsSUFBTXRJLElBQUksR0FBR2YsUUFBUSxDQUFDZSxJQUFJO0FBQzFCLElBQU0ySSxJQUFJLEdBQUcxSixRQUFRLENBQUNjLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBTTZJLFlBQVksR0FBRzNKLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUMzRDZJLFlBQVksQ0FBQ2pHLGdCQUFnQixDQUFDLE9BQU8sRUFBRTlGLDRFQUF1QixDQUFDO0FBRS9EbUQsSUFBSSxDQUFDaUQsT0FBTyxDQUNWcEcsNEVBQXVCLENBQ3JCO0VBQUEsT0FBTWtMLCtEQUFZLENBQUNPLHFEQUFDLEVBQUUxWCxzREFBSyxFQUFFcEgsdURBQU0sRUFBRUMsbURBQVEsRUFBRXBCLDhEQUFLLEVBQUV1ZSxtREFBSSxDQUFDO0FBQUEsR0FDM0QrQixJQUFJLEVBQ0o5TCx1RUFBa0IsRUFDbEJBLHlFQUFvQixDQUNyQixDQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNy1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZGF0YV9zdHJ1Y3R1cmVzL3F1ZXVlLmpzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FpLmpzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2JvYXJkLmpzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9Eb20uanMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWZsb3cuanMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzE3LXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMTctcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoID09PSAwO1xuICB9XG4gIGVucXVldWUoZWwpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5wdXNoKGVsKTtcbiAgfVxuICBkZXF1ZXVlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnNoaWZ0KCk7XG4gIH1cbiAgY2xlYXIoKXtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyA9IFtdXG4gIH1cbiAgcGVlaygpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLml0ZW1zWzBdO1xuICB9XG4gIGxhc3QoKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA8IDEpIHJldHVybjtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLnNpemUoKSAtIDFdO1xuICB9XG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG4gIHByaW50KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgU2hpcENsYXNzLCBxdWV1ZSkge1xuICAgIHN1cGVyKGdhbWVib2FyZCwgU2hpcENsYXNzLCBxdWV1ZSk7XG4gICAgdGhpcy5uYW1lID0gXCJjb21wdXRlclwiO1xuICAgIHRoaXMuaGl0TW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuZmlyc3RIaXQgPSBudWxsO1xuICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgdGhpcy5hdHRhY2tEaXIgPSBcImxlZnRcIjtcbiAgICB0aGlzLmF0dGFja2VkU2hpcCA9IFtdO1xuICB9XG5cbiAgX2dlbmVyYXRlUmFuZG9tQ29vcmRzKCkge1xuICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICB9XG5cbiAgZ2VuZXJhdGVDb29yZHMoKSB7XG4gICAgbGV0IFt4LCB5XSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgaWYgKCFbLi4udGhpcy5hdHRhY2tzXS5zb21lKChbYSwgYl0pID0+IGEgPT09IHggJiYgYiA9PT0geSkpIHtcbiAgICAgIHRoaXMuYXR0YWNrcy5hZGQoW3gsIHldKTtcbiAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlQ29vcmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21EaXIoKSB7XG4gICAgY29uc3QgZGlyID0gW1widlwiLCBcImhcIl07XG4gICAgcmV0dXJuIGRpcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gIH1cblxuICBwbGFjZVNoaXAoKSB7XG4gICAgaWYgKHRoaXMuaXNBbGxQbGFjZWQoKSkgcmV0dXJuIFwiQWxsIHNoaXBzIGFyZSBwbGFjZWRcIjtcbiAgICBjb25zdCBkaXIgPSB0aGlzLmdlbmVyYXRlUmFuZG9tRGlyKCk7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHMuZGVxdWV1ZSgpO1xuICAgIGxldCBbeCwgeV0gPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgIHNoaXAuc2V0RGlyZWN0aW9uKGRpcik7XG5cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xuICAgIHdoaWxlIChyZXN1bHQgPT09IFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCIpIHtcbiAgICAgIFt4LCB5XSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgICByZXN1bHQgPSB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwbGFjZUFsbFNoaXBzKCkge1xuICAgIHdoaWxlICh0aGlzLnNoaXBzLnNpemUoKSkge1xuICAgICAgdGhpcy5wbGFjZVNoaXAoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5nYW1lYm9hcmQuZ3JpZCk7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmdyaWQ7XG4gIH1cblxuICAvLyBCb3QgaW50ZXJuYWwgZnVuY3Rpb25zXG5cbiAgX3Jlc2V0SGl0TW9kZSgpIHtcbiAgICB0aGlzLmZpcnN0SGl0ID0gbnVsbDtcbiAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgIHRoaXMuYXR0YWNrRGlyID0gXCJsZWZ0XCI7XG4gICAgdGhpcy5oaXRNb2RlID0gZmFsc2U7XG4gIH1cblxuICBfaXNBdHRhY2tlZChwb3MpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBwb3M7XG4gICAgcmV0dXJuIFsuLi50aGlzLmF0dGFja3NdLnNvbWUoKFthLCBiXSkgPT4gYSA9PT0geCAmJiBiID09PSB5KTtcbiAgfVxuXG4gIF9pc1ZhbGlkQXR0YWNrUG9zaXRpb24ocG9zKSB7XG4gICAgY29uc3QgW3gsIHldID0gcG9zO1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8PSA5ICYmIHkgPj0gMCAmJiB5IDw9IDkgJiYgIXRoaXMuX2lzQXR0YWNrZWQocG9zKTtcbiAgfVxuXG4gIF9nZXROZXh0RGlyZWN0aW9uKCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJyaWdodFwiLCBcInVwXCIsIFwiZG93blwiXTtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBkaXJlY3Rpb25zLmluZGV4T2YodGhpcy5hdHRhY2tEaXIpO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIGRpcmVjdGlvbnMubGVuZ3RoO1xuICAgIHJldHVybiBkaXJlY3Rpb25zW25leHRJbmRleF07XG4gIH1cblxuICBfZ2V0QXR0YWNrUG9zaXRpb24oKSB7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5sYXN0SGl0O1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHtcbiAgICAgIGxlZnQ6IFt4LCB5IC0gMV0sXG4gICAgICByaWdodDogW3gsIHkgKyAxXSxcbiAgICAgIHVwOiBbeCAtIDEsIHldLFxuICAgICAgZG93bjogW3ggKyAxLCB5XSxcbiAgICB9O1xuICAgIHJldHVybiBwb3NpdGlvbnNbdGhpcy5hdHRhY2tEaXJdO1xuICB9XG5cbiAgX3NvcnRBdHRhY2tlZFNoaXAoKSB7XG4gICAgdGhpcy5hdHRhY2tlZFNoaXAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGFbMF0gPT09IGJbMF0pIHtcbiAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdOyAvLyDQodC+0YDRgtC40YDQvtCy0LrQsCDQv9C+INC30L3QsNGH0LXQvdC40Y4geSwg0LXRgdC70LggeCDRgNCw0LLQvdGLXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07IC8vINCh0L7RgNGC0LjRgNC+0LLQutCwINC/0L4g0LfQvdCw0YfQtdC90LjRjiB4LCDQtdGB0LvQuCB4INC90LUg0YDQsNCy0L3Ri1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2dldEF0dGFja2VkU2hpcERpcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tlZFNoaXAuZXZlcnkoXG4gICAgICAoaXRlbSkgPT4gaXRlbVswXSA9PT0gdGhpcy5hdHRhY2tlZFNoaXBbMF1bMF1cbiAgICApXG4gICAgICA/IFwiaG9yaXNvbnRhbFwiXG4gICAgICA6IFwidmVydGljYWxcIjtcbiAgfVxuXG4gIF9ibG9ja0V4YWN0Q2VsbHMoeCwgeSkge1xuICAgIGlmICh4ID49IDAgJiYgeCA8PSA5ICYmIHkgPj0gMCAmJiB5IDw9IDkpIHtcbiAgICAgIHRoaXMuYXR0YWNrcy5hZGQoW3gsIHldKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIFVzaW5nIGZpcnN0IGNvb3JkcyBwYWlyIG9ubHlcbiAgX2FkZEJsb2NrZWRDZWxscygpIHtcbiAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmF0dGFja2VkU2hpcFswXTtcbiAgICBpZiAodGhpcy5fZ2V0QXR0YWNrZWRTaGlwRGlyKCkgPT09IFwiaG9yaXNvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0YWNrZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5fYmxvY2tFeGFjdENlbGxzKHggKyBqLCB5IC0gMSk7XG4gICAgICAgICAgdGhpcy5fYmxvY2tFeGFjdENlbGxzKHggKyBqLCB5ICsgdGhpcy5hdHRhY2tlZFNoaXAubGVuZ3RoKTtcbiAgICAgICAgICBpZiAoaiA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgdGhpcy5fYmxvY2tFeGFjdENlbGxzKHggKyBqLCB5ICsgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGhpcy5fZ2V0QXR0YWNrZWRTaGlwRGlyKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdHRhY2tlZFNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDw9IDE7IGorKykge1xuICAgICAgICAgIHRoaXMuX2Jsb2NrRXhhY3RDZWxscyh4IC0gMSwgeSArIGopO1xuICAgICAgICAgIHRoaXMuX2Jsb2NrRXhhY3RDZWxscyh4ICsgdGhpcy5hdHRhY2tlZFNoaXAubGVuZ3RoLCB5ICsgaik7XG4gICAgICAgICAgaWYgKGogPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMuX2Jsb2NrRXhhY3RDZWxscyh4ICsgaSwgeSArIGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXNpbmcgZnVsbCBjb29yZHMgYXJyYXlcbiAgX19hZGRCbG9ja2VkQ2VsbHMoKSB7XG4gICAgaWYgKHRoaXMuX2dldEF0dGFja2VkU2hpcERpcigpID09PSBcImhvcmlzb250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF0dGFja2VkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmF0dGFja2VkU2hpcFtpXTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICBjb25zdCBhZGRUb0F0dGFja2VkID0gW1xuICAgICAgICAgICAgW3ggLSAxLCB5IC0gMV0sXG4gICAgICAgICAgICBbeCwgeSAtIDFdLFxuICAgICAgICAgICAgW3ggKyAxLCB5IC0gMV0sXG4gICAgICAgICAgICBbeCAtIDEsIHldLFxuICAgICAgICAgICAgW3ggKyAxLCB5XSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIGZvciAoY29uc3QgY29vcmRzIG9mIGFkZFRvQXR0YWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkcztcbiAgICAgICAgICAgIGlmICh4ID49IDAgJiYgeCA8PSA5ICYmIHkgPj0gMCAmJiB5IDw9IDkpIHRoaXMuYXR0YWNrcy5hZGQoY29vcmRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPiAwICYmIGkgPCB0aGlzLmF0dGFja2VkU2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgYWRkVG9BdHRhY2tlZCA9IFtcbiAgICAgICAgICAgIFt4IC0gMSwgeV0sXG4gICAgICAgICAgICBbeCArIDEsIHldLFxuICAgICAgICAgIF07XG4gICAgICAgICAgZm9yIChjb25zdCBjb29yZHMgb2YgYWRkVG9BdHRhY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xuICAgICAgICAgICAgaWYgKHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOSkgdGhpcy5hdHRhY2tzLmFkZChjb29yZHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gdGhpcy5hdHRhY2tlZFNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IGFkZFRvQXR0YWNrZWQgPSBbXG4gICAgICAgICAgICBbeCAtIDEsIHkgKyAxXSxcbiAgICAgICAgICAgIFt4LCB5ICsgMV0sXG4gICAgICAgICAgICBbeCArIDEsIHkgKyAxXSxcbiAgICAgICAgICAgIFt4IC0gMSwgeV0sXG4gICAgICAgICAgICBbeCArIDEsIHldLFxuICAgICAgICAgIF07XG4gICAgICAgICAgZm9yIChjb25zdCBjb29yZHMgb2YgYWRkVG9BdHRhY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xuICAgICAgICAgICAgaWYgKHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOSkgdGhpcy5hdHRhY2tzLmFkZChjb29yZHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0YWNrZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuYXR0YWNrZWRTaGlwW2ldO1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IGFkZFRvQXR0YWNrZWQgPSBbXG4gICAgICAgICAgICBbeCAtIDEsIHkgLSAxXSxcbiAgICAgICAgICAgIFt4IC0gMSwgeV0sXG4gICAgICAgICAgICBbeCAtIDEsIHkgKyAxXSxcbiAgICAgICAgICAgIFt4LCB5IC0gMV0sXG4gICAgICAgICAgICBbeCwgeSArIDFdLFxuICAgICAgICAgIF07XG4gICAgICAgICAgZm9yIChjb25zdCBjb29yZHMgb2YgYWRkVG9BdHRhY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xuICAgICAgICAgICAgaWYgKHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOSkgdGhpcy5hdHRhY2tzLmFkZChjb29yZHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+IDAgJiYgaSA8IHRoaXMuYXR0YWNrZWRTaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zdCBhZGRUb0F0dGFja2VkID0gW1xuICAgICAgICAgICAgW3gsIHkgLSAxXSxcbiAgICAgICAgICAgIFt4LCB5ICsgMV0sXG4gICAgICAgICAgXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBhZGRUb0F0dGFja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBjb29yZHM7XG4gICAgICAgICAgICBpZiAoeCA+PSAwICYmIHggPD0gOSAmJiB5ID49IDAgJiYgeSA8PSA5KSB0aGlzLmF0dGFja3MuYWRkKGNvb3Jkcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSB0aGlzLmF0dGFja2VkU2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgYWRkVG9BdHRhY2tlZCA9IFtcbiAgICAgICAgICAgIFt4ICsgMSwgeSAtIDFdLFxuICAgICAgICAgICAgW3ggKyAxLCB5XSxcbiAgICAgICAgICAgIFt4ICsgMSwgeSArIDFdLFxuICAgICAgICAgICAgW3gsIHkgLSAxXSxcbiAgICAgICAgICAgIFt4LCB5ICsgMV0sXG4gICAgICAgICAgXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBhZGRUb0F0dGFja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBjb29yZHM7XG4gICAgICAgICAgICBpZiAoeCA+PSAwICYmIHggPD0gOSAmJiB5ID49IDAgJiYgeSA8PSA5KSB0aGlzLmF0dGFja3MuYWRkKGNvb3Jkcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXR0YWNrRW5lbXkoZW5lbXkpIHtcbiAgICBpZiAoZW5lbXkuaXNBbGxTdW5rKCkpIHJldHVybjtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCB4LCB5O1xuXG4gICAgaWYgKCF0aGlzLmhpdE1vZGUpIHtcbiAgICAgIFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcbiAgICAgIHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgICB0aGlzLmhpdE1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZpcnN0SGl0ID0gW3gsIHldO1xuICAgICAgICB0aGlzLmxhc3RIaXQgPSBbeCwgeV07XG5cbiAgICAgICAgdGhpcy5hdHRhY2tlZFNoaXAucHVzaChbeCwgeV0pO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwic2lua1wiKSB7XG4gICAgICAgIHRoaXMuYXR0YWNrZWRTaGlwLnB1c2goW3gsIHldKTtcbiAgICAgICAgdGhpcy5fYWRkQmxvY2tlZENlbGxzKCk7XG4gICAgICAgIHRoaXMuYXR0YWNrZWRTaGlwID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmhpdE1vZGUpIHtcbiAgICAgIFt4LCB5XSA9IHRoaXMuX2dldEF0dGFja1Bvc2l0aW9uKCk7XG5cbiAgICAgIGlmICghdGhpcy5faXNWYWxpZEF0dGFja1Bvc2l0aW9uKFt4LCB5XSkpIHtcbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgdGhpcy5hdHRhY2tEaXIgPSB0aGlzLl9nZXROZXh0RGlyZWN0aW9uKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFja0VuZW15KGVuZW15KTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICB0aGlzLmF0dGFja3MuYWRkKFt4LCB5XSk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuXG4gICAgICAgIHRoaXMuYXR0YWNrZWRTaGlwLnB1c2goW3gsIHldKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcInNpbmtcIikge1xuICAgICAgICB0aGlzLmF0dGFja2VkU2hpcC5wdXNoKFt4LCB5XSk7XG4gICAgICAgIHRoaXMuX3NvcnRBdHRhY2tlZFNoaXAoKTtcbiAgICAgICAgdGhpcy5fYWRkQmxvY2tlZENlbGxzKCk7XG4gICAgICAgIHRoaXMuYXR0YWNrZWRTaGlwID0gW107XG5cbiAgICAgICAgdGhpcy5fcmVzZXRIaXRNb2RlKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgICAgICAgdGhpcy5hdHRhY2tEaXIgPSB0aGlzLl9nZXROZXh0RGlyZWN0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIgJiYgZW5lbXkuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFt4LCB5XSksXG4gICAgICAgIHsgdmFsdWU6IFwic2lua1wiLCBnYW1lc3RhdGU6IFwiZ2FtZSBvdmVyXCIgfSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbSlNPTi5zdHJpbmdpZnkoW3gsIHldKSwgcmVzdWx0XTtcbiAgfVxuXG4gIC8vIF9hdHRhY2tFbmVteShlbmVteSkge1xuICAvLyAgIGlmIChlbmVteS5pc0FsbFN1bmsoKSkgcmV0dXJuO1xuICAvLyAgIGxldCByZXN1bHQ7XG4gIC8vICAgbGV0IHgsIHk7XG5cbiAgLy8gICBpZiAoIXRoaXMuaGl0TW9kZSkge1xuICAvLyAgICAgW3gsIHldID0gdGhpcy5nZW5lcmF0ZUNvb3JkcygpO1xuICAvLyAgICAgcmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIC8vICAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gIC8vICAgICAgIHRoaXMuaGl0TW9kZSA9IHRydWU7XG4gIC8vICAgICAgIHRoaXMuZmlyc3RIaXQgPSBbeCwgeV07XG4gIC8vICAgICAgIHRoaXMubGFzdEhpdCA9IFt4LCB5XTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGVsc2UgaWYgKHRoaXMuaGl0TW9kZSkge1xuICAvLyAgICAgaWYgKHRoaXMuYXR0YWNrRGlyID09PSBcImxlZnRcIikge1xuICAvLyAgICAgICAvLyBMRUZUXG4gIC8vICAgICAgIFt4LCB5XSA9IFt0aGlzLmxhc3RIaXRbMF0sIHRoaXMubGFzdEhpdFsxXSAtIDFdO1xuXG4gIC8vICAgICAgIGlmICh5IDwgMCB8fCB0aGlzLmlzQXR0YWNrZWQoW3gsIHldKSkge1xuICAvLyAgICAgICAgIHRoaXMubGFzdEhpdCA9IHRoaXMuZmlyc3RIaXQ7XG4gIC8vICAgICAgICAgdGhpcy5hdHRhY2tEaXIgPSBcInJpZ2h0XCI7XG4gIC8vICAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNrRW5lbXkoZW5lbXkpO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgcmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIC8vICAgICAgIHRoaXMuYXR0YWNrcy5hZGQoW3gsIHldKTtcblxuICAvLyAgICAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gIC8vICAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuICAvLyAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgLy8gICAgICAgICB0aGlzLnJlc2V0SGl0TW9kZSgpO1xuICAvLyAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgLy8gICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmZpcnN0SGl0O1xuICAvLyAgICAgICAgIHRoaXMuYXR0YWNrRGlyID0gXCJyaWdodFwiO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrRGlyID09PSBcInJpZ2h0XCIpIHtcbiAgLy8gICAgICAgLy8gUklHSFRcbiAgLy8gICAgICAgW3gsIHldID0gW3RoaXMubGFzdEhpdFswXSwgdGhpcy5sYXN0SGl0WzFdICsgMV07XG5cbiAgLy8gICAgICAgaWYgKHkgPiA5IHx8IHRoaXMuaXNBdHRhY2tlZChbeCwgeV0pKSB7XG4gIC8vICAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5maXJzdEhpdDtcbiAgLy8gICAgICAgICB0aGlzLmF0dGFja0RpciA9IFwidXBcIjtcbiAgLy8gICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tFbmVteShlbmVteSk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICByZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgLy8gICAgICAgdGhpcy5hdHRhY2tzLmFkZChbeCwgeV0pO1xuXG4gIC8vICAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgLy8gICAgICAgICB0aGlzLmxhc3RIaXQgPSBbeCwgeV07XG4gIC8vICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAvLyAgICAgICAgIHRoaXMubGFzdEhpdCA9IHRoaXMuZmlyc3RIaXQ7XG4gIC8vICAgICAgICAgdGhpcy5hdHRhY2tEaXIgPSBcInVwXCI7XG4gIC8vICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcInNpbmtcIikge1xuICAvLyAgICAgICAgIHRoaXMucmVzZXRIaXRNb2RlKCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5hdHRhY2tEaXIgPT09IFwidXBcIikge1xuICAvLyAgICAgICAvLyBVUFxuICAvLyAgICAgICBbeCwgeV0gPSBbdGhpcy5sYXN0SGl0WzBdIC0gMSwgdGhpcy5sYXN0SGl0WzFdXTtcblxuICAvLyAgICAgICBpZiAoeCA8IDAgfHwgdGhpcy5pc0F0dGFja2VkKFt4LCB5XSkpIHtcbiAgLy8gICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmZpcnN0SGl0O1xuICAvLyAgICAgICAgIHRoaXMuYXR0YWNrRGlyID0gXCJkb3duXCI7XG4gIC8vICAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNrRW5lbXkoZW5lbXkpO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgcmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIC8vICAgICAgIHRoaXMuYXR0YWNrcy5hZGQoW3gsIHldKTtcblxuICAvLyAgICAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gIC8vICAgICAgICAgdGhpcy5sYXN0SGl0ID0gW3gsIHldO1xuICAvLyAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgLy8gICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmZpcnN0SGl0O1xuICAvLyAgICAgICAgIHRoaXMuYXR0YWNrRGlyID0gXCJkb3duXCI7XG4gIC8vICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcInNpbmtcIikge1xuICAvLyAgICAgICAgIHRoaXMucmVzZXRIaXRNb2RlKCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5hdHRhY2tEaXIgPT09IFwiZG93blwiKSB7XG4gIC8vICAgICAgIFt4LCB5XSA9IFt0aGlzLmxhc3RIaXRbMF0gKyAxLCB0aGlzLmxhc3RIaXRbMV1dO1xuXG4gIC8vICAgICAgIHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAvLyAgICAgICB0aGlzLmF0dGFja3MuYWRkKFt4LCB5XSk7XG5cbiAgLy8gICAgICAgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAvLyAgICAgICAgIHRoaXMubGFzdEhpdCA9IFt4LCB5XTtcbiAgLy8gICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwic2lua1wiKSB7XG4gIC8vICAgICAgICAgdGhpcy5yZXNldEhpdE1vZGUoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIGlmIChyZXN1bHQgPT09IFwic2lua1wiICYmIGVuZW15LmlzQWxsU3VuaygpKSB7XG4gIC8vICAgICByZXR1cm4gW1xuICAvLyAgICAgICBKU09OLnN0cmluZ2lmeShbeCwgeV0pLFxuICAvLyAgICAgICB7IHZhbHVlOiBcInNpbmtcIiwgZ2FtZXN0YXRlOiBcImdhbWUgb3ZlclwiIH0sXG4gIC8vICAgICBdO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gW0pTT04uc3RyaW5naWZ5KFt4LCB5XSksIHJlc3VsdF07XG4gIC8vIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IGZhbHNlKVxuICAgICk7XG4gICAgdGhpcy5zaGlwcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnJlc2VydmVkID0gW107XG4gIH1cblxuICBfYmxvY2tDZWxscyh4LCB5KSB7XG4gICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5IHx8IHRoaXMuZ3JpZFt4XVt5XSlcbiAgICAgIHJldHVybiBcIk91dCBvZiByYW5nZVwiO1xuICAgIHRoaXMuZ3JpZFt4XVt5XSA9IFwicmVzXCI7XG4gICAgdGhpcy5yZXNlcnZlZC5wdXNoKFt4LCB5XSk7XG4gIH1cblxuICBfaXNCbG9ja2VkKHNoaXAsIHgsIHkpIHtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5yZXNlcnZlZC5zb21lKChpdGVtKSA9PiBpdGVtWzBdID09IGkgJiYgaXRlbVsxXSA9PSB5KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc2VydmVkLnNvbWUoKGl0ZW0pID0+IGl0ZW1bMF0gPT0geCAmJiBpdGVtWzFdID09IGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2NhblBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ3JpZFt4XSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZ3JpZFt5XSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJ2XCIgJiZcbiAgICAgICAgIXRoaXMuZ3JpZFt4XVt5XSAmJlxuICAgICAgICB4ICsgc2hpcC5zaXplIC0gMSA8PSA5ICYmXG4gICAgICAgICF0aGlzLl9pc0Jsb2NrZWQoc2hpcCwgeCwgeSkpIHx8XG4gICAgICAoc2hpcC5kaXJlY3Rpb24gPT09IFwiaFwiICYmXG4gICAgICAgICF0aGlzLmdyaWRbeF1beV0gJiZcbiAgICAgICAgeSArIHNoaXAuc2l6ZSAtIDEgPD0gOSAmJlxuICAgICAgICAhdGhpcy5faXNCbG9ja2VkKHNoaXAsIHgsIHkpKSB8fFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuX2NhblBsYWNlU2hpcChzaGlwLCB4LCB5KSkgcmV0dXJuIFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCI7XG4gICAgaWYgKHRoaXMuc2hpcHMuaGFzKHNoaXApKSByZXR1cm4gXCJDYW50IHBsYWNlIG9uZSBzaGlwIHR3aWNlXCI7XG4gICAgdGhpcy5zaGlwcy5zZXQoc2hpcCwgW10pO1xuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgdGhpcy5zaGlwcy5nZXQoc2hpcCkucHVzaChbeCArIGksIHldKTtcblxuICAgICAgICBzaGlwLmRlY2tzLnB1c2goSlNPTi5zdHJpbmdpZnkoW3ggKyBpLCB5XSkpO1xuICAgICAgICB0aGlzLmdyaWRbeCArIGldW3ldID0gW3NoaXAsIGldO1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5fYmxvY2tDZWxscyh4ICsgc2hpcC5zaXplLCB5ICsgaik7XG4gICAgICAgICAgdGhpcy5fYmxvY2tDZWxscyh4IC0gMSwgeSArIGopO1xuICAgICAgICAgIGlmIChqID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBpLCB5ICsgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNoaXBzLmdldChzaGlwKTtcbiAgICB9IGVsc2UgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICB0aGlzLnNoaXBzLmdldChzaGlwKS5wdXNoKFt4LCB5ICsgaV0pO1xuXG4gICAgICAgIHNoaXAuZGVja3MucHVzaChKU09OLnN0cmluZ2lmeShbeCwgeSArIGldKSk7XG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5ICsgaV0gPSBbc2hpcCwgaV07XG4gICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqKyspIHtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBqLCB5ICsgc2hpcC5zaXplKTtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NlbGxzKHggKyBqLCB5IC0gMSk7XG4gICAgICAgICAgaWYgKGogPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMuX2Jsb2NrQ2VsbHMoeCArIGosIHkgKyBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZ2V0KHNoaXApO1xuICAgIH0gZWxzZSByZXR1cm4gXCJTaGlwIGNhbnQgYmUgcGxhY2VkIGhlcmVcIjtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ3JpZFt4XVt5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICBpZiAoW1wiaGl0XCIsIFwibWlzc1wiXS5pbmNsdWRlcyh0YXJnZXRbMV0pKVxuICAgICAgICByZXR1cm4gXCJUaGlzIGNlbGwgYWxyZWFkeSBhdHRhY2tlZFwiO1xuICAgICAgY29uc3QgW3NoaXAsIHBvc10gPSB0YXJnZXQ7XG4gICAgICBzaGlwLmhpdChwb3MpO1xuICAgICAgdGhpcy5ncmlkW3hdW3ldWzFdID0gc2hpcC5oaXRzW3Bvc107XG4gICAgICBpZiAoc2hpcC5zaW5rKSB7XG4gICAgICAgIHJldHVybiBcInNpbmtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRhcmdldCB8fCB0YXJnZXQgPT09IFwicmVzXCIpIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IFt0YXJnZXQsIFwibWlzc1wiXTtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgY29uc3QgX3RpbWVvdXQgPSAobXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfTtcblxuICAvLyBQbGFjZSBzaGlwc1xuICBmdW5jdGlvbiBfZ2V0RGlyKHNoaXBXcmFwcGVyKSB7XG4gICAgcmV0dXJuIHNoaXBXcmFwcGVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyBcInZcIiA6IFwiaFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldERpcihzaGlwV3JhcHBlciwgZGlyLCBkZWNrcykge1xuICAgIGlmIChkaXIgPT09IFwidlwiKSB7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIHNoaXBXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGAkezQuNSAqIGRlY2tzfWVtYDtcbiAgICAgIHNoaXBXcmFwcGVyLnN0eWxlLndpZHRoID0gXCI0LjVlbVwiO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSBcImhcIikge1xuICAgICAgc2hpcFdyYXBwZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIjQuNWVtXCI7XG4gICAgICBzaGlwV3JhcHBlci5zdHlsZS53aWR0aCA9IGAkezQuNSAqIGRlY2tzfWVtYDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU2hpcEVsZW1lbnQocGFyZW50LCBkZWNrcykge1xuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBfZ2V0RGlyKHBhcmVudCk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNrczsgaSsrKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICAgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgIGBcbiAgICAgICk7XG4gICAgfVxuICAgIHBhcmVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgX3NldERpcihwYXJlbnQsIHNoaXBEaXJlY3Rpb24sIGRlY2tzKTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdhbWUgZnVuY3Rpb25zXG4gIGNvbnN0IGdhbWVmbG93ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBfZmluZENlbGwoY29vcmRzLCBjZWxsc0FycmF5KSB7XG4gICAgICByZXR1cm4gY2VsbHNBcnJheS5maW5kKChjZWxsKSA9PiBjZWxsLmRhdGFzZXQuY29vcmRzID09PSBjb29yZHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTaW5rZWRTaGlwKGF0dGFrZWRTaGlwcywgY2VsbHNBcnJheSwgY29vcmQpIHtcbiAgICAgIGNvbnN0IHNpbmtlZFNoaXAgPSBhdHRha2VkU2hpcHMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbS5kZWNrcy5zb21lKChkZWNrKSA9PiBkZWNrID09PSBjb29yZClcbiAgICAgICk7XG4gICAgICBsb2coc2lua2VkU2hpcCk7XG4gICAgICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBzaW5rZWRTaGlwLmRlY2tzKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBfZmluZENlbGwoY29vcmRzLCBjZWxsc0FycmF5KTtcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVuZW15LXNoaXBcIj48L2Rpdj4nO1xuICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBoaXQtYmxhY2tcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGFuZGxlQXR0YWNrKGF0dGFrZWRDbGFzcywgY29vcmRzLCByZXN1bHQsIGFsZXJ0Rm4pIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHthdHRha2VkQ2xhc3MubmFtZX0gLmNlbGxgKSwgXTtcbiAgICAgIGNvbnN0IGNlbGwgPSBfZmluZENlbGwoY29vcmRzLCBjZWxscyk7XG4gICAgICBpZiAoYXR0YWtlZENsYXNzLm5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgICAgIGFsZXJ0Rm4oYFBsYXllciBhdHRhY2tzOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBtaXNzXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgYWxlcnRGbihgUGxheWVyIGF0dGFja3M6ICR7cmVzdWx0fWApO1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIGhpdC1ibGFja1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgICBhbGVydEZuKGBQbGF5ZXIgYXR0YWNrczogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgX2NyZWF0ZVNpbmtlZFNoaXAoYXR0YWtlZENsYXNzLnBsYXllclNoaXBzLCBjZWxscywgY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGF0dGFrZWRDbGFzcy5uYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgYWxlcnRGbihgQ29tcHV0ZXIgYXR0YWNrczogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGwgbWlzc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIgfHwgcmVzdWx0ID09PSBcInNpbmtcIikge1xuICAgICAgICAgIGFsZXJ0Rm4oYENvbXB1dGVyIGF0dGFja3M6ICR7cmVzdWx0fWApO1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIGhpdFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FtZVN0YXJ0KEdhbWVDbGFzcywgbWFpbkRpdiwgYm9hcmQsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgICAgY29uc3QgcGxheWVyID0gR2FtZUNsYXNzLnBsYXllcjtcbiAgICAgIGNvbnN0IGNvbXB1dGVyID0gR2FtZUNsYXNzLmNvbXB1dGVyO1xuXG4gICAgICBpZiAoIXBsYXllci5zaGlwcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgYWxlcnRGbihcIllvdSBzaG91bGQgcGxhY2UgYWxsIHNoaXBzIGJlZm9yZSBnYW1lIHN0YXJ0c1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtYWluRGl2LmFwcGVuZChjcmVhdGVQbGF5ZXJCb2FyZChib2FyZCkpO1xuICAgICAgbWFpbkRpdi5hcHBlbmQoY3JlYXRlQ29tcHV0ZXJCb2FyZChHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikpO1xuXG4gICAgICBjb21wdXRlci5wbGFjZUFsbFNoaXBzKCk7XG4gICAgICBhbGVydEZuKFwiR2FtZSBTdGFydGVkXCIpO1xuICAgICAgXG4gICAgICBjb25zdCBwbGFjZVNoaXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lbnVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBsYWNlU2hpcE1lbnUpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGF0dGFjayhlLCBHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKEdhbWVDbGFzcy5fZ2V0QXR0YWNrZXIoKS5uYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgYWxlcnRGbihcIkl0cyBub3QgeW91ciB0dXJuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZHMgPSBlLnRhcmdldC5kYXRhc2V0LmNvb3JkcztcbiAgICAgIGF3YWl0IEdhbWVDbGFzcy5hdHRhY2soY29vcmRzLCBfaGFuZGxlQXR0YWNrLCBhbGVydEZuLCBlbmRnYW1lRm4pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF0dGFjaywgZ2FtZVN0YXJ0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgX3BsYWNlU2hpcEV2ZW50cyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRHJvcChlLCBwYXJlbnQsIHNoaXBXcmFwcGVyLCBjZWxsc0FycmF5LCBwbGF5ZXJDbGFzcykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2hpcFdyYXBwZXJJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgICAgY29uc3Qgc2hpcFdyYXBwZXJFbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKGAjJHtzaGlwV3JhcHBlcklkfWApO1xuICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuY2VsbFwiKTtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY2VsbC5kYXRhc2V0LmNvb3Jkcyk7XG4gICAgICBjb25zdCBkaXIgPSBfZ2V0RGlyKHNoaXBXcmFwcGVyRWwpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyQ2xhc3MucGxhY2VTaGlwKHgsIHksIGRpcik7XG4gICAgICBjb25zdCBkZWNrcyA9IFsuLi5zaGlwV3JhcHBlckVsLmNoaWxkcmVuXTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiU2hpcCBjYW50IGJlIHBsYWNlZCBoZXJlXCIpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbGRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXN1bHRbaV0pO1xuICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNBcnJheS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmRhdGFzZXQuY29vcmRzID09PSBjZWxsZGF0YVxuICAgICAgICApO1xuICAgICAgICBjZWxsLmlubmVySFRNTCA9IGRlY2tzW2ldLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICAgIGlmICghcGxheWVyQ2xhc3Muc2hpcHMuaXNFbXB0eSgpKSB7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gcGxheWVyQ2xhc3Muc2hpcHMucGVlaygpLmdldFNpemUoKTtcbiAgICAgICAgX2NyZWF0ZVNoaXBFbGVtZW50KHNoaXBXcmFwcGVyLCBzaGlwU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW5kKGUpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEaXIoc2hpcFdyYXBwZXIpIHtcbiAgICAgIGNvbnN0IGRpciA9IF9nZXREaXIoc2hpcFdyYXBwZXIpO1xuICAgICAgY29uc3QgZGVja3MgPSBzaGlwV3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBkaXIgPT09IFwidlwiXG4gICAgICAgID8gX3NldERpcihzaGlwV3JhcHBlciwgXCJoXCIsIGRlY2tzKVxuICAgICAgICA6IF9zZXREaXIoc2hpcFdyYXBwZXIsIFwidlwiLCBkZWNrcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRyYWdTdGFydCxcbiAgICAgIGRyYWdFbmQsXG4gICAgICBkcmFnRHJvcCxcbiAgICAgIGRyYWdPdmVyLFxuICAgICAgZHJhZ0VudGVyLFxuICAgICAgY2hhbmdlRGlyLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGxhY2VTaGlwTWVudShuZXdHYW1lQ2xhc3NGbiwgbWFpbkRpdiwgYWxlcnRGbiwgZW5kZ2FtZUZuKSB7XG4gICAgY29uc3QgR2FtZUNsYXNzID0gbmV3R2FtZUNsYXNzRm4oKTtcbiAgICBjb25zdCBwbGF5ZXIgPSBHYW1lQ2xhc3MucGxheWVyO1xuICAgIFxuICAgIGNvbnN0IGV4aXN0aW5nRWxlbWVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lbnVcIik7XG4gICAgaWYgKGV4aXN0aW5nRWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChleGlzdGluZ0VsZW1lbnQpO1xuICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHBsYWNlU2hpcE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlU2hpcE1lbnUuY2xhc3NOYW1lID0gXCJwbGFjZS1zaGlwLW1lbnVcIjtcbiAgICBwbGFjZVNoaXBNZW51Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGgyPlBsYWNlIHNoaXBzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLXdyYXBwZXJcIiBpZD1cInNoaXAtd3JhcHBlclwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LTlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwwXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDFdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksMl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDRdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksNV1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw2XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDddXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksOF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw5XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjY2VwdC1idG5cIj5TdGFydCBnYW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWNsaW5lLWJ0blwiPlJlbG9hZCBzaGlwczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IGJvYXJkID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiLmZpZWxkXCIpO1xuICAgIGNvbnN0IHNoaXBXcmFwcGVyID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiI3NoaXAtd3JhcHBlclwiKTtcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBwbGFjZVNoaXBNZW51LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjZXB0LWJ0blwiKTtcbiAgICBjb25zdCByZWxvYWRHYW1lQnRuID0gcGxhY2VTaGlwTWVudS5xdWVyeVNlbGVjdG9yKFwiLmRlY2xpbmUtYnRuXCIpO1xuICAgIGNvbnN0IGNlbGxzID0gWy4uLnBsYWNlU2hpcE1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZCAuY2VsbFwiKV07XG5cbiAgICBzaGlwV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIF9wbGFjZVNoaXBFdmVudHMuZHJhZ1N0YXJ0KTtcbiAgICBzaGlwV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBfcGxhY2VTaGlwRXZlbnRzLmRyYWdFbmQpO1xuICAgIHNoaXBXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfcGxhY2VTaGlwRXZlbnRzLmNoYW5nZURpcihzaGlwV3JhcHBlcikgKTtcblxuICAgIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICBfcGxhY2VTaGlwRXZlbnRzLmRyYWdEcm9wKGUsIHBsYWNlU2hpcE1lbnUsIHNoaXBXcmFwcGVyLCBjZWxscywgcGxheWVyKTtcbiAgICAgIH0pO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgX3BsYWNlU2hpcEV2ZW50cy5kcmFnT3Zlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgX3BsYWNlU2hpcEV2ZW50cy5kcmFnRW50ZXIpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGdhbWVmbG93LmdhbWVTdGFydChHYW1lQ2xhc3MsIG1haW5EaXYsIGJvYXJkLCBhbGVydEZuLCBlbmRnYW1lRm4pO1xuICAgIH0pO1xuXG4gICAgcmVsb2FkR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5ld1BsYWNlU2hpcE1lbnUgPSBjcmVhdGVQbGFjZVNoaXBNZW51KCBuZXdHYW1lQ2xhc3NGbiwgbWFpbkRpdiwgY3JlYXRlQWxlcnREaXYsIGNyZWF0ZUVuZGdhbWVEaXYpO1xuICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG5ld1BsYWNlU2hpcE1lbnUpO1xuICAgICAgYWxlcnRGbihcIkFsbCBzaGlwcyB3YXMgcmVsb2FkZWRcIik7XG4gICAgfSk7XG5cbiAgICBfY3JlYXRlU2hpcEVsZW1lbnQoc2hpcFdyYXBwZXIsIHBsYXllci5zaGlwcy5wZWVrKCkuZ2V0U2l6ZSgpKTtcblxuICAgIHJldHVybiBwbGFjZVNoaXBNZW51O1xuICB9XG5cbiAgLy8gR2FtZVxuIFxuICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZChjcmVhdGVQbGF5ZXJGaWVsZCkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZFwiO1xuICAgIHBsYXllckJvYXJkLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGgyPlBsYXllciBib2FyZDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxheWVyXCI+PC9kaXY+XG4gICAgYFxuICAgICk7XG4gICAgY29uc3QgcGxheWVyRmllbGQgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgICBwbGF5ZXJGaWVsZC5pbm5lckhUTUwgPSBjcmVhdGVQbGF5ZXJGaWVsZC5pbm5lckhUTUw7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJCb2FyZChHYW1lQ2xhc3MsIGFsZXJ0Rm4sIGVuZGdhbWVGbikge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NOYW1lID0gXCJjb21wdXRlci1ib2FyZFwiO1xuICAgIGNvbXB1dGVyQm9hcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICBgXG4gICAgICAgICAgPGgyPkVuZW15IGJvYXJkPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlswLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzAsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsxLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzEsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMiw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlsyLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzIsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMywxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbMyw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIlszLDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzMsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls0LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzQsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls1LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzUsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNiw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls2LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzYsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy03XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNywxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbNyw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls3LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzcsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOCw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls4LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzgsOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksMF1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSwxXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDJdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksM11cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw0XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksNl1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgZGF0YS1jb29yZHM9XCJbOSw3XVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIiBkYXRhLWNvb3Jkcz1cIls5LDhdXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIGRhdGEtY29vcmRzPVwiWzksOV1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICBgXG4gICAgKTtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gWy4uLmNvbXB1dGVyQm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpXTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY29tcHV0ZXJDZWxscykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgYXdhaXQgZ2FtZWZsb3cuYXR0YWNrKGUsIEdhbWVDbGFzcywgYWxlcnRGbiwgZW5kZ2FtZUZuKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wdXRlckJvYXJkO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWxlcnREaXYobWVzc2FnZSkge1xuICAgIGNvbnN0IGFsZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGVydERpdi5jbGFzc05hbWUgPSBcImFsZXJ0LWRpdlwiO1xuICAgIGFsZXJ0RGl2Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGgzPiR7bWVzc2FnZX0hPC9oMz5gKTtcbiAgICBjb25zdCBleGlzdGluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0LWRpdlwiKTtcbiAgICBcbiAgICBpZiAoIWV4aXN0aW5nRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydERpdik7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXdhaXQgX3RpbWVvdXQoMTUwMCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbGVydERpdik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVFbmRnYW1lRGl2KHdpbm5lcikge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kXCI7XG4gICAgbGV0IHRleHQgPVxuICAgICAgd2lubmVyID09PSBcInBsYXllclwiXG4gICAgICAgID8gXCI8aDE+Q29uZ3JhdHVsYXRpb25zISBQbGF5ZXIgd2lucyE8L2gxPlwiXG4gICAgICAgIDogXCI8aDE+U29ycnkgdG8gc2F5LCBidXQgY29tcHV0ZXIgd2lucy48L2gxPlwiO1xuXG4gICAgYmFja2dyb3VuZC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImVuZGdhbWVcIj5cbiAgICAgICAgPGgxPkdhbWUgb3ZlciE8L2gxPlxuICAgICAgICAke3RleHR9XG4gICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1hZ2Fpbi1idG5cIj5TdGFydCBhZ2FpbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXJ0QWdhaW5CdG4gPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtYWdhaW4tYnRuXCIpO1xuICAgIHN0YXJ0QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBleGlzdGluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZGdhbWVcIik7XG4gICAgaWYgKCFleGlzdGluZ0VsZW1lbnQpIHtcbiAgICAgIGF3YWl0IF90aW1lb3V0KDMwMDApO1xuICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhvd1RvUGxheU1lbnUoKXtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTmFtZSA9ICdiYWNrZ3JvdW5kJztcbiAgICBiYWNrZ3JvdW5kLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImhvdy10by1wbGF5XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJob3ctdG8tY2xvc2UtYnRuXCIgY2xhc3M9XCJoaXQtYmxhY2tcIj48L2Rpdj5cbiAgICAgICAgPGgyPlN0YXJzaGlwcyAtIEhvdyB0byBQbGF5PC9oMj5cbiAgICAgICAgPHA+PHN0cm9uZz5PYmplY3RpdmU6PC9zdHJvbmc+IFRoZSBvYmplY3RpdmUgb2YgQmF0dGxlc2hpcCBpcyB0byBzdHJhdGVnaWNhbGx5IHBsYWNlIHlvdXIgc2hpcHMgb24gYSBncmlkIGFuZCBndWVzc1xuICAgICAgICAgIHRoZSBsb2NhdGlvbnMgb2YgeW91ciBvcHBvbmVudCdzIHNoaXBzIGluIG9yZGVyIHRvIHNpbmsgdGhlbSBhbGwuPC9wPlxuICAgICAgICA8aDQ+R2FtZSBTZXR1cDwvaDQ+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+RWFjaCBwbGF5ZXIgaGFzIHRoZWlyIG93biBncmlkLCB0eXBpY2FsbHkgYSAxMHgxMCBncmlkLjwvbGk+XG4gICAgICAgICAgPGxpPlNoaXBzIG9mIGRpZmZlcmVudCBzaXplcyBhcmUgcGxhY2VkIG9uIHRoZSBncmlkLCB3aXRoIGVhY2ggc2hpcCBvY2N1cHlpbmcgYSBjZXJ0YWluIG51bWJlciBvZiBhZGphY2VudCBncmlkXG4gICAgICAgICAgICBjZWxscyBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseS48L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8aDQ+VGFraW5nIFR1cm5zPC9oND5cbiAgICAgICAgPG9sPlxuICAgICAgICAgIDxsaT5QbGF5ZXJzIHRha2UgdHVybnMgZ3Vlc3NpbmcgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZWlyIG9wcG9uZW50J3Mgc2hpcHMuPC9saT5cbiAgICAgICAgICA8bGk+QWZ0ZXIgZWFjaCBndWVzcywgdGhlIHJlc3VsdCBpcyByZXZlYWxlZCBhcyBhIGhpdCBvciBhIG1pc3MuPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgICAgPGg0PkhpdCBhbmQgTWlzcyBGZWVkYmFjazwvaDQ+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+SWYgYSBwbGF5ZXIncyBndWVzcyBoaXRzIGEgc2hpcCwgdGhleSBnZXQgYW5vdGhlciB0dXJuIHRvIG1ha2UgYWRkaXRpb25hbCBndWVzc2VzLjwvbGk+XG4gICAgICAgICAgPGxpPlRoZSBvcHBvbmVudCdzIGdyaWQgaXMgdXN1YWxseSBtYXJrZWQgdG8gaW5kaWNhdGUgdGhlIGhpdHMgYW5kIG1pc3NlcywgYWxsb3dpbmcgcGxheWVycyB0byB0cmFjayB0aGVpclxuICAgICAgICAgICAgcHJvZ3Jlc3MuIDwvbGk+XG4gICAgICAgICAgPGxpPlRoZSBnb2FsIGlzIHRvIGZpbmQgYW5kIHNpbmsgYWxsIG9mIHRoZSBvcHBvbmVudCdzIHNoaXBzIGJlZm9yZSB0aGV5IGRvIHRoZSBzYW1lIHRvIHlvdS48L2xpPlxuICAgICAgICAgIDxsaT5XaGVuIGFsbCB0aGUgY2VsbHMgb2YgYSBzaGlwIGFyZSBoaXQsIGl0IGlzIGNvbnNpZGVyZWQgc3Vuay48L2xpPlxuICAgICAgICAgIDxsaT5UaGUgZ2FtZSBjb250aW51ZXMgdW50aWwgb25lIHBsYXllciBoYXMgc3VuayBhbGwgb2YgdGhlaXIgb3Bwb25lbnQncyBzaGlwcywgZGVjbGFyaW5nIHRoZW0gdGhlIHdpbm5lci48L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICAgICk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNob3ctdG8tY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnaG93LXRvLWNsb3NlLWJ0bicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICB9KVxuXG4gICAgY29uc3QgZXhpc3RpbmdFbGVtZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZCcpO1xuICAgIGlmKGV4aXN0aW5nRWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChleGlzdGluZ0VsZW1lbnQpO1xuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKVxuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQbGFjZVNoaXBNZW51LFxuICAgIGNyZWF0ZVBsYXllckJvYXJkLFxuICAgIGNyZWF0ZUNvbXB1dGVyQm9hcmQsXG4gICAgY3JlYXRlQWxlcnREaXYsXG4gICAgY3JlYXRlRW5kZ2FtZURpdixcbiAgICBjcmVhdGVIb3dUb1BsYXlNZW51XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocGxheWVyLCBjb21wdXRlciwgcXVldWUpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLmNvbXB1dGVyID0gY29tcHV0ZXI7XG4gICAgdGhpcy5nYW1lUXVldWUgPSAoKCkgPT4ge1xuICAgICAgcXVldWUuZW5xdWV1ZSh0aGlzLnBsYXllcik7XG4gICAgICBxdWV1ZS5lbnF1ZXVlKHRoaXMuY29tcHV0ZXIpO1xuICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH0pKCk7XG4gICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy53aW5uZXI7XG4gIH1cbiAgX2NvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5jb21wdXRlci5nZW5lcmF0ZUNvb3JkcygpO1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVyLmF0dGFja0VuZW15KGVuZW15LCB4LCB5KTtcbiAgfVxuXG4gIF9wbGF5ZXJBdHRhY2soZW5lbXksIGNvb3Jkcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYXR0YWNrRW5lbXkoZW5lbXksIHgsIHkpO1xuICB9XG5cbiAgX21vdmVRdWV1ZShyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikgdGhpcy5nYW1lUXVldWUuZW5xdWV1ZSh0aGlzLmdhbWVRdWV1ZS5kZXF1ZXVlKCkpO1xuICB9XG5cbiAgX2lzR2FtZU92ZXIocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJHYW1lIG92ZXJcIikge1xuICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLl9nZXRBdHRhY2tlcigpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2dldEF0dGFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVRdWV1ZS5wZWVrKCk7XG4gIH1cblxuICBfZ2V0QXR0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVF1ZXVlLmxhc3QoKTtcbiAgfVxuXG4gIC8vIGF0dGFjayBmb3Igb2xkIGNvbXB1dGVyIGNsYXNzXG4gIC8vIGFzeW5jIF9hdHRhY2soY29vcmRzLCBzdWNjZXNzQ2IsIGFsZXJ0Q2IsIGVuZGdhbWVDYikge1xuICAvLyAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkgcmV0dXJuO1xuICAvLyAgIGNvbnN0IGF0dGFrZXIgPSB0aGlzLl9nZXRBdHRhY2tlcigpO1xuICAvLyAgIGNvbnN0IGF0dGFja2VkID0gdGhpcy5fZ2V0QXR0YWNrZWQoKTtcblxuICAvLyAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhdHRha2VyLmF0dGFja0VuZW15KGF0dGFja2VkLCB4LCB5KTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAvLyAgIGlmIChyZXN1bHQgPT09IFwiQ2FudCBoaXQgb25lIGNlbGwgdHdpY2VcIikge1xuICAvLyAgICAgYWxlcnRDYihyZXN1bHQpO1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cblxuICAvLyAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiKSB7XG4gIC8vICAgICBzdWNjZXNzQ2IoYXR0YWNrZWQsIGNvb3JkcywgcmVzdWx0LnZhbHVlKTtcbiAgLy8gICAgIGlmIChyZXN1bHQuZ2FtZXN0YXRlID09PSBcImdhbWUgb3ZlclwiKSB7XG4gIC8vICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgLy8gICAgICAgY29uc3Qgd2lubmVyID0gYXR0YWtlci5uYW1lO1xuICAvLyAgICAgICBlbmRnYW1lQ2Iod2lubmVyKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xuICAvLyAgIH1cblxuICAvLyAgIHN1Y2Nlc3NDYihhdHRhY2tlZCwgY29vcmRzLCByZXN1bHQpO1xuXG4gIC8vICAgdGhpcy5fbW92ZVF1ZXVlKHJlc3VsdCk7XG5cbiAgLy8gICBpZiAodGhpcy5fZ2V0QXR0YWNrZXIoKSA9PT0gdGhpcy5jb21wdXRlcikge1xuICAvLyAgICAgYXdhaXQgdGhpcy5fdGltZW91dCgyMDAwKTtcbiAgLy8gICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29tcHV0ZXIuZ2VuZXJhdGVDb29yZHMoKSk7XG4gIC8vICAgICBhd2FpdCB0aGlzLmF0dGFjayhhdHRhY2tDb29yZHMsIHN1Y2Nlc3NDYiwgYWxlcnRDYiwgZW5kZ2FtZUNiKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuXG4gIC8vIGF0dGFjayBmb3IgbmV3IGFpXG5cbiAgYXN5bmMgYXR0YWNrKGNvb3Jkcywgc3VjY2Vzc0NiLCBhbGVydENiLCBlbmRnYW1lQ2IpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHJldHVybjtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMuX2dldEF0dGFja2VyKCk7XG4gICAgY29uc3QgYXR0YWNrZWQgPSB0aGlzLl9nZXRBdHRhY2tlZCgpO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoYXR0YWNrZXIgPT09IHRoaXMuY29tcHV0ZXIpIHtcbiAgICAgIFtjb29yZHMsIHJlc3VsdF0gPSBhdHRhY2tlci5hdHRhY2tFbmVteShhdHRhY2tlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRzKTtcbiAgICAgIHJlc3VsdCA9IGF0dGFja2VyLmF0dGFja0VuZW15KGF0dGFja2VkLCB4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSBcIkNhbnQgaGl0IG9uZSBjZWxsIHR3aWNlXCIpIHtcbiAgICAgIGFsZXJ0Q2IocmVzdWx0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgc3VjY2Vzc0NiKGF0dGFja2VkLCBjb29yZHMsIHJlc3VsdC52YWx1ZSwgYWxlcnRDYik7XG4gICAgICBpZiAocmVzdWx0LmdhbWVzdGF0ZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGF0dGFja2VyLm5hbWU7XG4gICAgICAgIGVuZGdhbWVDYih3aW5uZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1Y2Nlc3NDYihhdHRhY2tlZCwgY29vcmRzLCByZXN1bHQsIGFsZXJ0Q2IpO1xuICAgIHRoaXMuX21vdmVRdWV1ZShyZXN1bHQpO1xuXG4gICAgaWYgKHRoaXMuX2dldEF0dGFja2VyKCkgPT09IHRoaXMuY29tcHV0ZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuX3RpbWVvdXQoMjAwMCk7XG4gICAgICBhd2FpdCB0aGlzLmF0dGFjayhudWxsLCBzdWNjZXNzQ2IsIGFsZXJ0Q2IsIGVuZGdhbWVDYik7XG4gICAgfVxuICB9XG5cbiAgX3RpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YW5jZUdhbWUoXG4gIFNoaXBDbGFzcyxcbiAgQm9hcmRDbGFzcyxcbiAgUGxheWVyQ2xhc3MsXG4gIENvbXB1dGVyQ2xhc3MsXG4gIFF1ZXVlQ2xhc3MsXG4gIEdhbWVDbGFzc1xuKSB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJDbGFzcyhuZXcgQm9hcmRDbGFzcygpLCBTaGlwQ2xhc3MsIG5ldyBRdWV1ZUNsYXNzKCkpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBDb21wdXRlckNsYXNzKFxuICAgIG5ldyBCb2FyZENsYXNzKCksXG4gICAgU2hpcENsYXNzLFxuICAgIG5ldyBRdWV1ZUNsYXNzKClcbiAgKTtcbiAgcmV0dXJuIG5ldyBHYW1lQ2xhc3MocGxheWVyLCBjb21wdXRlciwgbmV3IFF1ZXVlQ2xhc3MoKSk7XG59XG5cbmV4cG9ydCB7IEdhbWUsIGluc3RhbmNlR2FtZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkLCBTaGlwQ2xhc3MsIHF1ZXVlKSB7XG4gICAgdGhpcy5uYW1lID0gXCJwbGF5ZXJcIjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLnBsYXllclNoaXBzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdLm1hcChcbiAgICAgIChsZW4pID0+IG5ldyBTaGlwQ2xhc3MobGVuKVxuICAgICk7XG4gICAgdGhpcy5zaGlwcyA9ICgoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgcXVldWUuZW5xdWV1ZShzaGlwKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH0pKCk7XG4gICAgdGhpcy5hdHRhY2tzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLnNoaXBzLmlzRW1wdHkoKSkgcmV0dXJuIFwiQWxsIHNoaXBzIHBsYWNlZFwiO1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzLnBlZWsoKTtcbiAgICBzaGlwLnNldERpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICBpZiAocmVzdWx0ICE9PSBcIlNoaXAgY2FudCBiZSBwbGFjZWQgaGVyZVwiKSB7XG4gICAgICB0aGlzLnNoaXBzLmRlcXVldWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGF0dGFja0VuZW15KGVuZW15LCB4LCB5KSB7XG4gICAgaWYgKGVuZW15LmlzQWxsU3VuaygpKSByZXR1cm47XG4gICAgaWYgKFsuLi50aGlzLmF0dGFja3NdLnNvbWUoKFthLCBiXSkgPT4gYSA9PT0geCAmJiBiID09PSB5KSkge1xuICAgICAgcmV0dXJuIFwiQ2FudCBoaXQgb25lIGNlbGwgdHdpY2VcIjtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2tzLmFkZChbeCwgeV0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChyZXN1bHQgPT09IFwic2lua1wiICYmIGVuZW15LmlzQWxsU3VuaygpKVxuICAgICAgcmV0dXJuIHsgdmFsdWU6IFwic2lua1wiLCBnYW1lc3RhdGU6IFwiZ2FtZSBvdmVyXCIgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaXNBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllclNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnNpbmspO1xuICB9XG5cbiAgaXNBbGxQbGFjZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuc2l6ZSgpID09PSAwO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTIHtcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5oaXRzID0gWy4uLkFycmF5KHNpemUpLmtleXMoKV07XG4gICAgdGhpcy5kZWNrcyA9IFtdXG4gICAgdGhpcy5zaW5rID0gZmFsc2U7XG4gICAgLy9bMCwxLDIsM11cbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwidlwiO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9PT0gXCJ2XCIgPyAodGhpcy5kaXJlY3Rpb24gPSBcImhcIikgOiAodGhpcy5kaXJlY3Rpb24gPSBcInZcIik7XG4gIH1cblxuICBzZXREaXJlY3Rpb24oZGlyKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXI7XG4gIH1cblxuICBoaXQocG9zKSB7XG4gICAgaWYgKHRoaXMuaGl0c1twb3NdID09PSBcImhpdFwiIHx8IHRoaXMuaGl0c1twb3NdID09PSBcInNpbmtcIikgcmV0dXJuO1xuICAgIHRoaXMuaGl0c1twb3NdID0gXCJoaXRcIjtcbiAgICBpZiAodGhpcy5pc1NpbmsoKSkge1xuICAgICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzLm1hcCgoaGl0KSA9PiAoaGl0ID0gXCJzaW5rXCIpKTtcbiAgICAgIHRoaXMuc2luayA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaXNTaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoKGhpdCkgPT4gaGl0ID09PSBcImhpdFwiKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRE9NIGZyb20gXCIuL21vZHVsZXMvZG9tL0RvbVwiO1xuaW1wb3J0IFMgZnJvbSBcIi4vbW9kdWxlcy9zaGlwXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9ib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9tb2R1bGVzL3BsYXllclwiO1xuaW1wb3J0IENvbXB1dGVyIGZyb20gXCIuL21vZHVsZXMvYWlcIjtcbmltcG9ydCBRdWV1ZSBmcm9tIFwiLi9kYXRhX3N0cnVjdHVyZXMvcXVldWVcIjtcbmltcG9ydCB7IEdhbWUsIGluc3RhbmNlR2FtZSB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZWZsb3dcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuY29uc3QgaG93VG9QbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob3ctdG8tcGxheVwiKTtcbmhvd1RvUGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLmNyZWF0ZUhvd1RvUGxheU1lbnUpO1xuXG5ib2R5LnByZXBlbmQoXG4gIERPTS5jcmVhdGVQbGFjZVNoaXBNZW51KFxuICAgICgpID0+IGluc3RhbmNlR2FtZShTLCBCb2FyZCwgUGxheWVyLCBDb21wdXRlciwgUXVldWUsIEdhbWUpLFxuICAgIG1haW4sXG4gICAgRE9NLmNyZWF0ZUFsZXJ0RGl2LFxuICAgIERPTS5jcmVhdGVFbmRnYW1lRGl2XG4gIClcbik7XG4iXSwibmFtZXMiOlsiUXVldWUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpdGVtcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaXNFbXB0eSIsImxlbmd0aCIsImVucXVldWUiLCJlbCIsInB1c2giLCJkZXF1ZXVlIiwic2hpZnQiLCJjbGVhciIsInBlZWsiLCJsYXN0Iiwic2l6ZSIsInByaW50IiwiZGVmYXVsdCIsIlBsYXllciIsIkNvbXB1dGVyIiwiX1BsYXllciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImdhbWVib2FyZCIsIlNoaXBDbGFzcyIsInF1ZXVlIiwiX3RoaXMiLCJjYWxsIiwibmFtZSIsImhpdE1vZGUiLCJmaXJzdEhpdCIsImxhc3RIaXQiLCJhdHRhY2tEaXIiLCJhdHRhY2tlZFNoaXAiLCJfZ2VuZXJhdGVSYW5kb21Db29yZHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZW5lcmF0ZUNvb3JkcyIsIl90aGlzJF9nZW5lcmF0ZVJhbmRvbSIsIl90aGlzJF9nZW5lcmF0ZVJhbmRvbTIiLCJfc2xpY2VkVG9BcnJheSIsIngiLCJ5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXR0YWNrcyIsInNvbWUiLCJfcmVmIiwiX3JlZjIiLCJhIiwiYiIsImFkZCIsImdlbmVyYXRlUmFuZG9tRGlyIiwiZGlyIiwicGxhY2VTaGlwIiwiaXNBbGxQbGFjZWQiLCJzaGlwIiwic2hpcHMiLCJfdGhpcyRfZ2VuZXJhdGVSYW5kb20zIiwiX3RoaXMkX2dlbmVyYXRlUmFuZG9tNCIsInNldERpcmVjdGlvbiIsInJlc3VsdCIsIl90aGlzJF9nZW5lcmF0ZVJhbmRvbTUiLCJfdGhpcyRfZ2VuZXJhdGVSYW5kb202IiwicGxhY2VBbGxTaGlwcyIsImNvbnNvbGUiLCJsb2ciLCJncmlkIiwiX3Jlc2V0SGl0TW9kZSIsIl9pc0F0dGFja2VkIiwicG9zIiwiX3BvcyIsIl9yZWYzIiwiX3JlZjQiLCJfaXNWYWxpZEF0dGFja1Bvc2l0aW9uIiwiX3BvczIiLCJfZ2V0TmV4dERpcmVjdGlvbiIsImRpcmVjdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwiX2dldEF0dGFja1Bvc2l0aW9uIiwiX3RoaXMkbGFzdEhpdCIsInBvc2l0aW9ucyIsImxlZnQiLCJyaWdodCIsInVwIiwiZG93biIsIl9zb3J0QXR0YWNrZWRTaGlwIiwic29ydCIsIl9nZXRBdHRhY2tlZFNoaXBEaXIiLCJfdGhpczIiLCJldmVyeSIsIml0ZW0iLCJfYmxvY2tFeGFjdENlbGxzIiwiX2FkZEJsb2NrZWRDZWxscyIsIl90aGlzJGF0dGFja2VkU2hpcCQiLCJpIiwiaiIsIl9fYWRkQmxvY2tlZENlbGxzIiwiX3RoaXMkYXR0YWNrZWRTaGlwJGkiLCJhZGRUb0F0dGFja2VkIiwiX2kzIiwiX2FkZFRvQXR0YWNrZWQiLCJjb29yZHMiLCJfY29vcmRzIiwiX2k0IiwiX2FkZFRvQXR0YWNrZWQzIiwiX2Nvb3JkczMiLCJfaTUiLCJfYWRkVG9BdHRhY2tlZDUiLCJfY29vcmRzNSIsIl90aGlzJGF0dGFja2VkU2hpcCRfaSIsIl9pNyIsIl9hZGRUb0F0dGFja2VkNyIsIl9jb29yZHM3IiwiX2k4IiwiX2FkZFRvQXR0YWNrZWQ5IiwiX2Nvb3JkczkiLCJfaTkiLCJfYWRkVG9BdHRhY2tlZDExIiwiX2Nvb3JkczExIiwiYXR0YWNrRW5lbXkiLCJlbmVteSIsImlzQWxsU3VuayIsIl90aGlzJGdlbmVyYXRlQ29vcmRzIiwiX3RoaXMkZ2VuZXJhdGVDb29yZHMyIiwicmVjZWl2ZUF0dGFjayIsIl90aGlzJF9nZXRBdHRhY2tQb3NpdCIsIl90aGlzJF9nZXRBdHRhY2tQb3NpdDIiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2FtZXN0YXRlIiwiQm9hcmQiLCJBcnJheSIsImZyb20iLCJNYXAiLCJyZXNlcnZlZCIsIl9ibG9ja0NlbGxzIiwiX2lzQmxvY2tlZCIsImRpcmVjdGlvbiIsIl9sb29wIiwidiIsIl9yZXQiLCJfdHlwZW9mIiwiX2xvb3AyIiwiX2kiLCJfcmV0MiIsIl9jYW5QbGFjZVNoaXAiLCJ1bmRlZmluZWQiLCJoYXMiLCJzZXQiLCJnZXQiLCJkZWNrcyIsInRhcmdldCIsImlzQXJyYXkiLCJpbmNsdWRlcyIsIl90YXJnZXQiLCJoaXQiLCJoaXRzIiwic2luayIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJvIiwiYWxsb3dBcnJheUxpa2UiLCJpdCIsIkYiLCJzIiwibiIsImUiLCJfZTIiLCJmIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsInN0ZXAiLCJfZTMiLCJtaW5MZW4iLCJ0b1N0cmluZyIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2NvbnNvbGUiLCJET00iLCJfdGltZW91dCIsIm1zIiwic2V0VGltZW91dCIsIl9nZXREaXIiLCJzaGlwV3JhcHBlciIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsIl9zZXREaXIiLCJoZWlnaHQiLCJjb25jYXQiLCJ3aWR0aCIsIl9jcmVhdGVTaGlwRWxlbWVudCIsInBhcmVudCIsInNoaXBEaXJlY3Rpb24iLCJpbm5lckhUTUwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJkaXNwbGF5IiwiZ2FtZWZsb3ciLCJfZmluZENlbGwiLCJjZWxsc0FycmF5IiwiZmluZCIsImNlbGwiLCJkYXRhc2V0IiwiX2NyZWF0ZVNpbmtlZFNoaXAiLCJhdHRha2VkU2hpcHMiLCJjb29yZCIsInNpbmtlZFNoaXAiLCJkZWNrIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJjbGFzc05hbWUiLCJfaGFuZGxlQXR0YWNrIiwiYXR0YWtlZENsYXNzIiwiYWxlcnRGbiIsImNlbGxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheWVyU2hpcHMiLCJnYW1lU3RhcnQiLCJHYW1lQ2xhc3MiLCJtYWluRGl2IiwiYm9hcmQiLCJlbmRnYW1lRm4iLCJwbGF5ZXIiLCJjb21wdXRlciIsImFwcGVuZCIsImNyZWF0ZVBsYXllckJvYXJkIiwiY3JlYXRlQ29tcHV0ZXJCb2FyZCIsInBsYWNlU2hpcE1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYXR0YWNrIiwiX3giLCJfeDIiLCJfeDMiLCJfeDQiLCJfYXR0YWNrIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXRBdHRhY2tlciIsIl9wbGFjZVNoaXBFdmVudHMiLCJkcmFnU3RhcnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiaWQiLCJkcmFnRHJvcCIsInBsYXllckNsYXNzIiwic2hpcFdyYXBwZXJJZCIsImdldERhdGEiLCJzaGlwV3JhcHBlckVsIiwiY2xvc2VzdCIsIl9KU09OJHBhcnNlIiwicGFyc2UiLCJfSlNPTiRwYXJzZTIiLCJjaGlsZHJlbiIsInN0b3BQcm9wYWdhdGlvbiIsImNlbGxkYXRhIiwic2hpcFNpemUiLCJnZXRTaXplIiwicmVtb3ZlIiwiZHJhZ0VuZCIsImRyYWdPdmVyIiwiZHJhZ0VudGVyIiwiY2hhbmdlRGlyIiwiY3JlYXRlUGxhY2VTaGlwTWVudSIsIm5ld0dhbWVDbGFzc0ZuIiwiZXhpc3RpbmdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0YXJ0R2FtZUJ0biIsInJlbG9hZEdhbWVCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm5ld1BsYWNlU2hpcE1lbnUiLCJjcmVhdGVBbGVydERpdiIsImNyZWF0ZUVuZGdhbWVEaXYiLCJwcmVwZW5kIiwiY3JlYXRlUGxheWVyRmllbGQiLCJwbGF5ZXJCb2FyZCIsInBsYXllckZpZWxkIiwiY29tcHV0ZXJCb2FyZCIsImNvbXB1dGVyQ2VsbHMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJfeDUiLCJfeDYiLCJfY3JlYXRlQWxlcnREaXYiLCJfY2FsbGVlMyIsIm1lc3NhZ2UiLCJhbGVydERpdiIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImFwcGVuZENoaWxkIiwiX3g3IiwiX2NyZWF0ZUVuZGdhbWVEaXYiLCJfY2FsbGVlNCIsIndpbm5lciIsImJhY2tncm91bmQiLCJ0ZXh0Iiwic3RhcnRBZ2FpbkJ0biIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY3JlYXRlSG93VG9QbGF5TWVudSIsImNsb3NlQnRuIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9zIiwiX2UiLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJHYW1lIiwiZ2FtZVF1ZXVlIiwiZ2FtZVN0YXJ0ZWQiLCJfY29tcHV0ZXJBdHRhY2siLCJfdGhpcyRjb21wdXRlciRnZW5lcmEiLCJfdGhpcyRjb21wdXRlciRnZW5lcmEyIiwiX3BsYXllckF0dGFjayIsIl9tb3ZlUXVldWUiLCJfaXNHYW1lT3ZlciIsIl9nZXRBdHRhY2tlZCIsInN1Y2Nlc3NDYiIsImFsZXJ0Q2IiLCJlbmRnYW1lQ2IiLCJhdHRhY2tlciIsImF0dGFja2VkIiwiX2F0dGFja2VyJGF0dGFja0VuZW15IiwiX2F0dGFja2VyJGF0dGFja0VuZW15MiIsIl9KU09OJHBhcnNlMyIsIl9KU09OJHBhcnNlNCIsImluc3RhbmNlR2FtZSIsIkJvYXJkQ2xhc3MiLCJQbGF5ZXJDbGFzcyIsIkNvbXB1dGVyQ2xhc3MiLCJRdWV1ZUNsYXNzIiwibWFwIiwiU2V0IiwiUyIsImdldEhpdHMiLCJnZXREaXJlY3Rpb24iLCJjaGFuZ2VEaXJlY3Rpb24iLCJpc1NpbmsiLCJtYWluIiwiaG93VG9QbGF5QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==