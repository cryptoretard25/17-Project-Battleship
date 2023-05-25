export default class Player {
  constructor(gameboard, ShipClass, queue) {
    this.name = "player";
    this.gameboard = gameboard;
    this.playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map(
      (len) => new ShipClass(len)
    );
    this.ships = (() => {
      this.playerShips.forEach((ship) => {
        queue.enqueue(ship);
      });
      return queue;
    })();
    this.attacks = [];
  }

  placeShip(x, y, direction) {
    if (this.ships.isEmpty()) return "All ships placed";
    const ship = this.ships.peek();
    ship.setDirection(direction);
    const result = this.gameboard.placeShip(ship, x, y);
    if (result !== "Ship cant be placed here") {
      this.ships.dequeue();
    }
    return result;
  }

  attackEnemy(enemy, x, y) {
    if (enemy.isAllSunk()) return;
    if (this.attacks.some(([a, b]) => a === x && b === y)) {
      return "Cant hit one cell twice";
    }
    this.attacks.push([x, y]);
    const result = enemy.gameboard.receiveAttack(x, y);
    if (result === "sink" && enemy.isAllSunk())
      return { value: "sink", gamestate: "game over" };
    return result;
  }

  isAllSunk() {
    return this.playerShips.every((ship) => ship.sink);
  }

  isAllPlaced() {
    return this.ships.size() === 0;
  }
}
