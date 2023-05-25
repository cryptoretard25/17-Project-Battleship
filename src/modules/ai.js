import Player from "./player";

export default class Computer extends Player {
  constructor(gameboard, ShipClass, queue) {
    super(gameboard, ShipClass, queue);
    this.name = "computer";
    this.wasHit = false;
    this.lastHitPosition = null;
    this.firstHitPosition = null;
    this.attackDirection = null;
    this.possibleTargets = [];
  }
  _generateRandomCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
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

  attackEnemy(enemy, x, y) {
    if (enemy.isAllSunk()) return;
    this.attacks.push([x, y]);
    const result = enemy.gameboard.receiveAttack(x, y);
    if (result === "sink" && enemy.isAllSunk())
      return { value: "sink", gamestate: "game over" };
    return result;
  }
}
