import Player from "./player";

export default class Computer extends Player {
  constructor(gameboard, ShipClass, queue) {
    super(gameboard, ShipClass, queue);
    this.name = "computer";
    this.hitMode = false;
    this.firstHit = null;
    this.lastHit = null;
    this.attackDir = "left";
  }

  _generateRandomCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  isAttacked(pos) {
    const [x, y] = pos;
    return this.attacks.some(([a, b]) => a === x && b === y);
  }

  resetHitMode() {
    this.firstHit = null;
    this.lastHit = null;
    this.attackDir = "left";
    this.hitMode = false;
  }

  generateCoords() {
    let [x, y] = this._generateRandomCoords();
    if (!this.attacks.some(([a, b]) => a === x && b === y)) {
      this.attacks.push([x, y]);
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
      }
    } else if (this.hitMode) {
      if (this.attackDir === "left") {
        // LEFT
        [x, y] = [this.lastHit[0], this.lastHit[1] - 1];

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
        [x, y] = [this.lastHit[0], this.lastHit[1] + 1];

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
        [x, y] = [this.lastHit[0] - 1, this.lastHit[1]];

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
        [x, y] = [this.lastHit[0] + 1, this.lastHit[1]];

        result = enemy.gameboard.receiveAttack(x, y);
        this.attacks.push([x, y]);

        if (result === 'hit') {
          this.lastHit = [x, y];
        }else if(result === 'sink'){
          this.resetHitMode();
        }
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

  _attackEnemy(enemy) {
    if (enemy.isAllSunk()) return;
    const [x, y] = this.generateCoords();
    this.attacks.push([x, y]);
    const result = enemy.gameboard.receiveAttack(x, y);
    if (result === "sink" && enemy.isAllSunk()) {
      return [
        JSON.stringify([x, y]),
        { value: "sink", gamestate: "game over" },
      ];
    }
    return [JSON.stringify([x, y]), result];
  }
}
