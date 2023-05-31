import Player from "./player";

export default class Computer extends Player {
  constructor(gameboard, ShipClass, queue) {
    super(gameboard, ShipClass, queue);
    this.name = "computer";
    this.hitMode = false;
    this.firstHit = null;
    this.lastHit = null;
    this.attackDir = "left";
    this.attackedShip = [];
  }

  _generateRandomCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  generateCoords() {
    let [x, y] = this._generateRandomCoords();
    if (![...this.attacks].some(([a, b]) => a === x && b === y)) {
      this.attacks.add([x, y]);
      return [x, y];
    } else {
      return this.generateCoords();
    }
  }

  generateRandomDir() {
    const dir = ["v", "h"];
    return dir[Math.floor(Math.random() * 2)];
  }

  placeShip() {
    if (this.isAllPlaced()) return "All ships are placed";
    const dir = this.generateRandomDir();
    const ship = this.ships.dequeue();
    let [x, y] = this._generateRandomCoords();
    ship.setDirection(dir);

    let result = this.gameboard.placeShip(ship, x, y);
    while (result === "Ship cant be placed here") {
      [x, y] = this._generateRandomCoords();
      result = this.gameboard.placeShip(ship, x, y);
    }
    return result;
  }

  placeAllShips() {
    while (this.ships.size()) {
      this.placeShip();
    }
    console.log(this.gameboard.grid);
    return this.gameboard.grid;
  }

  // Bot internal functions

  _resetHitMode() {
    this.firstHit = null;
    this.lastHit = null;
    this.attackDir = "left";
    this.hitMode = false;
  }

  _isAttacked(pos) {
    const [x, y] = pos;
    return [...this.attacks].some(([a, b]) => a === x && b === y);
  }

  _isValidAttackPosition(pos) {
    const [x, y] = pos;
    return x >= 0 && x <= 9 && y >= 0 && y <= 9 && !this._isAttacked(pos);
  }

  _getNextDirection() {
    const directions = ["right", "up", "down"];
    const currentIndex = directions.indexOf(this.attackDir);
    const nextIndex = (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  }

  _getAttackPosition() {
    const [x, y] = this.lastHit;
    const positions = {
      left: [x, y - 1],
      right: [x, y + 1],
      up: [x - 1, y],
      down: [x + 1, y],
    };
    return positions[this.attackDir];
  }

  _sortAttackedShip() {
    this.attackedShip.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1]; // Сортировка по значению y, если x равны
      } else {
        return a[0] - b[0]; // Сортировка по значению x, если x не равны
      }
    });
  }

  _getAttackedShipDir() {
    return this.attackedShip.every(
      (item) => item[0] === this.attackedShip[0][0]
    )
      ? "horisontal"
      : "vertical";
  }

  _blockExactCells(x, y) {
    if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
      this.attacks.add([x, y]);
    }
  }
  
  // Using first coords pair only
  _addBlockedCells() {
    const [x, y] = this.attackedShip[0];
    if (this._getAttackedShipDir() === "horisontal") {
      for (let i = 0; i < this.attackedShip.length; i++) {
        
        for (let j = -1; j <= 1; j++) {
          this._blockExactCells(x + j, y - 1);
          this._blockExactCells(x + j, y + this.attackedShip.length);
          if (j === 0) continue;
          this._blockExactCells(x + j, y + i);
        }
      }
    } else if(this._getAttackedShipDir() === 'vertical') {
      for (let i = 0; i < this.attackedShip.length; i++) {
        for (let j = -1; j <= 1; j++) {
          this._blockExactCells(x - 1, y + j);
          this._blockExactCells(x + this.attackedShip.length, y + j);
          if (j === 0) continue;
          this._blockExactCells(x + i, y + j);
        }
      }
    }
  }

  // Using full coords array
  __addBlockedCells() {
    if (this._getAttackedShipDir() === "horisontal") {
      for (let i = 0; i < this.attackedShip.length; i++) {
        const [x, y] = this.attackedShip[i];
        if (i === 0) {
          const addToAttacked = [
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1],
            [x - 1, y],
            [x + 1, y],
          ];
          for (const coords of addToAttacked) {
            const [x, y] = coords;
            if (x >= 0 && x <= 9 && y >= 0 && y <= 9) this.attacks.add(coords);
          }
        }
        if (i > 0 && i < this.attackedShip.length - 1) {
          const addToAttacked = [
            [x - 1, y],
            [x + 1, y],
          ];
          for (const coords of addToAttacked) {
            const [x, y] = coords;
            if (x >= 0 && x <= 9 && y >= 0 && y <= 9) this.attacks.add(coords);
          }
        }
        if (i === this.attackedShip.length - 1) {
          const addToAttacked = [
            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1],
            [x - 1, y],
            [x + 1, y],
          ];
          for (const coords of addToAttacked) {
            const [x, y] = coords;
            if (x >= 0 && x <= 9 && y >= 0 && y <= 9) this.attacks.add(coords);
          }
        }
      }
    } else {
      for (let i = 0; i < this.attackedShip.length; i++) {
        const [x, y] = this.attackedShip[i];
        if (i === 0) {
          const addToAttacked = [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
          ];
          for (const coords of addToAttacked) {
            const [x, y] = coords;
            if (x >= 0 && x <= 9 && y >= 0 && y <= 9) this.attacks.add(coords);
          }
        }
        if (i > 0 && i < this.attackedShip.length - 1) {
          const addToAttacked = [
            [x, y - 1],
            [x, y + 1],
          ];
          for (const coords of addToAttacked) {
            const [x, y] = coords;
            if (x >= 0 && x <= 9 && y >= 0 && y <= 9) this.attacks.add(coords);
          }
        }
        if (i === this.attackedShip.length - 1) {
          const addToAttacked = [
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1],
            [x, y - 1],
            [x, y + 1],
          ];
          for (const coords of addToAttacked) {
            const [x, y] = coords;
            if (x >= 0 && x <= 9 && y >= 0 && y <= 9) this.attacks.add(coords);
          }
        }
      }
    }
  }

  attackEnemy(enemy) {
    if (enemy.isAllSunk()) return;
    let result;
    let x, y;

    if (!this.hitMode) {
      [x, y] = this.generateCoords();
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
      [x, y] = this._getAttackPosition();

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
      return [
        JSON.stringify([x, y]),
        { value: "sink", gamestate: "game over" },
      ];
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
}
