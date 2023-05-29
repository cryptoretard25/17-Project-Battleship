import Ship from "../ship";
import Gameboard from "../old-board";
import { Player, Computer } from "../player";
import Queue from "../src/data_structures/queue";
const { log } = console;

describe("testing rest of Gameboard", () => {
  let board;
  let ship;
  const fakeShip = (size) => {
    return {
      size,
      hits: [...Array(size).keys()],
      direction: "v",
      sink: false,
      getSize() {
        return this.size;
      },
      getHits() {
        return this.hits;
      },
      getDirection() {
        return this.direction;
      },
      changeDirection() {
        this.direction === "v"
          ? (this.direction = "h")
          : (this.direction = "v");
      },
      hit(pos) {
        this.hits[pos] = "hit";
        if (this.isSink()) {
          this.hits = this.hits.map((hit) => (hit = "sink"));
          this.sink = true;
        }
      },
      isSink() {
        return this.hits.every((hit) => hit === "hit");
      },
    };
  };
  beforeEach(() => {
    ship = fakeShip(4);
    const ship1 = fakeShip(1);
    const ship2 = fakeShip(2);
    const ship3 = fakeShip(2);
    board = new Gameboard();
    board.placeShip(ship, 0, 0);
    board.placeShip(ship1, 0, 2);
    board.placeShip(ship2, 5, 0);
    board.placeShip(ship3, 3, 2);
  });
  it("Should hit ship properly", () => {
    board.receiveAttack(0, 0);
    expect(board.grid[0][0][1]).toMatch("hit");
    expect(board.receiveAttack(0, 0)).toBe("This cell already attacked");
  });
  it("Should record misses properly", () => {
    board.receiveAttack(0, 1);
    board.receiveAttack(0, 9);
    expect(board.grid[0][1][1]).toMatch("miss");
    expect(board.grid[0][9][1]).toMatch("miss");
  });
  it("Ship should be sinked", () => {
    for (let i = 0; i <= 3; i++) {
      board.receiveAttack(i, 0);
    }
    for (let i = 0; i <= 3; i++) {
      expect(ship.hits[i]).toEqual("sink");
      expect(board.grid[i][0][1]).toMatch("sink");
    }
  });
  it("Should return false when all ships are not sunk", () => {
    for (let i = 0; i <= 5; i++) {
      board.receiveAttack(i, 0);
    }
    expect(board.isAllSunk()).toBe(false);
  });
  it("Should return true when all ships are sunk", () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.receiveAttack(i, j);
      }
    }
    expect(board.isAllSunk()).toBe(true);
  });
  it("Should throw error when trying to attack cell twice", () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.receiveAttack(i, j);
      }
    }
    expect(board.receiveAttack(0, 0)).toBe("This cell already attacked");
  });
  it("Should return false when not all ships placed", () => {
    expect(board.isAllShipsPlaced()).toBe(false);
  });
});

describe("testing Player class", () => {
  const playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map((s) => new Ship(s));
  const enemyShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map((s) => new Ship(s));

  const player = new Player(new Gameboard(), playerShips, new Queue());
  const enemy = new Player(new Gameboard(), enemyShips, new Queue());

  it("expect s is Ship instace", () => {
    expect(player.ships.size()).toBe(10);
    player.ships.print().forEach((s) => {
      expect(Object.getPrototypeOf(s.constructor.prototype)).toEqual(
        Ship.prototype
      );
      expect;
    });
  });

  it("expect ship to place correctly", () => {
    const pShip = player.ships.peek();
    player.placeShip(0, 0, "v");
    expect(player.gameboard.ships.has(pShip)).toBe(true);
    expect(player.gameboard.ships.size).toBe(1);

    const eShip = enemy.ships.peek();
    enemy.placeShip(0, 0, "v");
    expect(enemy.gameboard.ships.has(eShip)).toBe(true);
    expect(enemy.gameboard.ships.size).toBe(1);
  });

  it("expects error when trying to place ship when another is placed", () => {
    player.placeShip(0, 0, "v");
    expect(player.placeShip(1, 0, "v")).toBe("Ship cant be placed here");
    //   expect(player.gameboard.ships.size).toBe(1);
    log(player.gameboard.ships);
  });

  it("attack enemy ship correctly", () => {
    enemy.placeShip(0, 0, "v");
    player.attackEnemy(enemy.gameboard, 0, 1);
    player.attackEnemy(enemy.gameboard, 1, 0);
    expect(enemy.gameboard.grid[0][1][1]).toBe("miss");
    expect(enemy.gameboard.grid[1][0][1]).toBe("hit");
  });

  it("cant attack same cell twice", () => {
    enemy.placeShip(0, 0, "v");
    player.attackEnemy(enemy.gameboard, 0, 1);
    expect(player.attackEnemy(enemy.gameboard, 0, 1)).toBe(
      "This cell already attacked"
    );
  });
});

describe("testing Computer class", () => {
  const playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map((s) => new Ship(s));
  const compShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map((s) => new Ship(s));
  const player = new Player(new Gameboard(), playerShips, new Queue());
  const computer = new Computer(new Gameboard(), compShips, new Queue());
  player.placeShip(0, 0, "v");

  it("Computer must random hit properly", () => {
    for (let i = 0; i < 50; i++) {
      computer.attackEnemy(player.gameboard);
    }
    log(player.gameboard.grid[3][0] === "hit");
    expect(
      player.gameboard.grid.some((row) =>
        row.some((cell) => cell[1] === "miss" || cell[1] === "hit")
      )
    ).toBe(true);
  });
});
