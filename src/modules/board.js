export default class Board {
  constructor() {
    this.grid = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => false)
    );
    this.ships = new Map();
    this.reserved = [];
  }

  _blockCells(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9 || this.grid[x][y])
      return "Out of range";
    this.grid[x][y] = "res";
    this.reserved.push([x, y]);
  }

  _isBlocked(ship, x, y) {
    if (ship.direction === "v") {
      for (let i = x; i < x + ship.size; i++) {
        if (this.reserved.some((item) => item[0] == i && item[1] == y)) {
          return true;
        }
      }
    }
    if (ship.direction === "h") {
      for (let i = y; i < y + ship.size; i++) {
        if (this.reserved.some((item) => item[0] == x && item[1] == i)) {
          return true;
        }
      }
    }
    return false;
  }

  _canPlaceShip(ship, x, y) {
    if (this.grid[x] === undefined || this.grid[y] === undefined) return false;
    return (
      (ship.direction === "v" &&
        !this.grid[x][y] &&
        x + ship.size - 1 <= 9 &&
        !this._isBlocked(ship, x, y)) ||
      (ship.direction === "h" &&
        !this.grid[x][y] &&
        y + ship.size - 1 <= 9 &&
        !this._isBlocked(ship, x, y)) ||
      false
    );
  }

  placeShip(ship, x, y) {
    if (!this._canPlaceShip(ship, x, y)) return "Ship cant be placed here";
    if (this.ships.has(ship)) return "Cant place one ship twice";
    this.ships.set(ship, []);
    if (ship.direction === "v") {
      for (let i = 0; i < ship.size; i++) {
        this.ships.get(ship).push([x + i, y]);

        ship.decks.push(JSON.stringify([x + i, y]));
        this.grid[x + i][y] = [ship, i];
        for (let j = -1; j <= 1; j++) {
          this._blockCells(x + ship.size, y + j);
          this._blockCells(x - 1, y + j);
          if (j === 0) continue;
          this._blockCells(x + i, y + j);
        }
      }
      return this.ships.get(ship);
    } else if (ship.direction === "h") {
      for (let i = 0; i < ship.size; i++) {
        this.ships.get(ship).push([x, y + i]);

        ship.decks.push(JSON.stringify([x, y + i]));
        this.grid[x][y + i] = [ship, i];
        for (let j = -1; j <= 1; j++) {
          this._blockCells(x + j, y + ship.size);
          this._blockCells(x + j, y - 1);
          if (j === 0) continue;
          this._blockCells(x + j, y + i);
        }
      }
      return this.ships.get(ship);
    } else return "Ship cant be placed here";
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];
    if (Array.isArray(target)) {
      if (["hit", "miss"].includes(target[1]))
        return "This cell already attacked";
      const [ship, pos] = target;
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
}
