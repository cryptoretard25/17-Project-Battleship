export default class Gameboard {
  constructor() {
    this.grid = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => 0)
    );
    this.ships = new Map();
    this.blockedCells = [];
  }

  _blockAround(grid, x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9 || grid[x][y] === 1) return;
    grid[x][y] = 1;
    //this.blockedCells.push([x, y]);
  }

  _isReserved(grid, ship, x, y) {
    if (ship.direction === "v") {
      for (let i = x; i < x + ship.size; i++) {
        if (grid[i][y] !== 0) return true;
      }
    }
    if (ship.direction === "h") {
      for (let i = y; i < y + ship.size; i++) {
        if (grid[x][i] !== 0) return true;
      }
    }
    return false;
  }

  placeShip(ship, x, y) {
    if (
      ship.direction === "v" &&
      this.grid[x][y] === 0 &&
      x + ship.size - 1 <= 9 &&
      !this._isReserved(this.grid, ship, x, y)
    ) {
      if (this.ships.has(ship)) return "Cant place one ship twice";
      this.ships.set(ship, []);
      for (let i = 0; i < ship.size; i++) {
        this.grid[x + i][y] = [ship, ship.hits[i]];
        this.ships.get(ship).push([x + i, y]);
        for (let j = -1; j <= 1; j++) {
          this._blockAround(this.grid, x + ship.size, y + j);
          this._blockAround(this.grid, x - 1, y + j);
          if (j === 0) continue;
          this._blockAround(this.grid, x + i, y + j);
        }
      }
      return this.ships.get(ship);
    } else if (
      ship.direction === "h" &&
      this.grid[x][y] === 0 &&
      y + ship.size - 1 <= 9 &&
      !this._isReserved(this.grid, ship, x, y)
    ) {
      if (this.ships.has(ship)) return "Cant place one ship twice";
      this.ships.set(ship, []);
      for (let i = 0; i < ship.size; i++) {
        this.grid[x][y + i] = [ship, ship.hits[i]];
        this.ships.get(ship).push([x, y + i]);
        for (let j = -1; j <= 1; j++) {
          this._blockAround(this.grid, x + j, y + ship.size);
          this._blockAround(this.grid, x + j, y - 1);
          if (j === 0) continue;
          this._blockAround(this.grid, x + j, y + i);
        }
      }
      return this.ships.get(ship);
    } else {
      return "Ship cant be placed here";
    }
  }

  // placeShip(ship, x, y) {
  //   if (this.grid[x][y] === 0 && !this._isReserved(this.grid, ship, x, y)) {
  //     if (this.ships.has(ship)) return "Cant place one ship twice";
  //     this.ships.set(ship, []);
  //     if (ship.direction === "v" && x + ship.size - 1 <= 9) {
  //       for (let i = 0; i < ship.size; i++) {
  //         this.grid[x + i][y] = [ship, ship.hits[i]];
  //         // fill coords arrays
  //         this.ships.get(ship).push([x + i, y]);
  //         //this.blockedCells.push([x + i, y]);
  //         for (let j = -1; j <= 1; j++) {
  //           this._blockAround(this.grid, x + ship.size, y + j);
  //           this._blockAround(this.grid, x - 1, y + j);
  //           if (j === 0) continue;
  //           this._blockAround(this.grid, x + i, y + j);
  //         }
  //       }
  //     } else if (ship.direction === "h" && y + ship.size - 1 <= 9) {
  //       for (let i = 0; i < ship.size; i++) {
  //         this.grid[x][y + i] = [ship, ship.hits[i]];
  //         // fill coords arrays
  //         this.ships.get(ship).push([x, y + i]);
  //         //this.blockedCells.push([x, y + i]);
  //         for (let j = -1; j <= 1; j++) {
  //           this._blockAround(this.grid, x + j, y + ship.size);
  //           this._blockAround(this.grid, x + j, y - 1);
  //           if (j === 0) continue;
  //           this._blockAround(this.grid, x + j, y + i);
  //         }
  //       }
  //     } else {
  //       return "Ship cant be placed here";
  //     }
  //     return this.ships.get(ship);
  //   }
  //   return "Ship cant be placed here";
  // }

  receiveAttack(x, y) {
    const target = this.grid[x][y];
    if (Array.isArray(target)) {
      // if (target[1] === "hit" || target[1] === "miss" || target[1] === "sink")
      //   throw new Error("This cell already attacked");
      if (["hit", "miss", "sink"].includes(target[1])) {
        return "This cell already attacked";
      }
      const [ship, pos] = target;
      ship.hit(pos);
      this.grid[x][y][1] = ship.hits[pos];
      if (ship.sink) {
        this.ships.get(ship).forEach((coords) => {
          const [x, y] = coords;
          this.grid[x][y][1] = "sink";
          return [x, y];
        });
      }
      return [x, y];
    } else if (target === 0 || target === 1) {
      this.grid[x][y] = [target, "miss"];
      return [x, y];
    }
  }

  isAllSunk() {
    // if (!this.ships.size) throw new Error("No ships on the board");
    // for (let [key, _] of this.ships) {
    //   if (!key.sink) return false;
    // }
    // return true;
    for (const ship of this.ships.keys()) {
      if (!ship.sink) {
        return false;
      }
    }
    return true;
  }

  isAllShipsPlaced() {
    return this.ships.size === 10;
  }

  resetBoard() {
    this.grid = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, (item, _) => (item = 0))
    );
    this.ships = new Map();
  }
}
