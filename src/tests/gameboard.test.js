const { log } = console;

import S from "../modules/ship";
import Board from "../modules/board";

const ship = new S(3);

describe("testing Gameboard construcor", () => {
  const board = new Board();

  it("Should be 10x10 2-dimention array", () => {
    expect(board.grid.length && board.grid[0].length).toBe(10);
  });

  it("Board grid items should be filled by 0", () => {
    for (let i = 0; i < 10; i++) {
      expect(board.grid[i].every((item) => !item)).toBe(true);
    }
  });
});

describe("testing _blockCells()", () => {
  const board = new Board();

  it("should block cells", () => {
    board._blockCells(0, 0);
    board._blockCells(0, 1);
    board._blockCells(0, 2);
    board._blockCells(0, 3);
    expect(board.reserved).toContainEqual([0, 0], [0, 1], [0, 2], [0, 3]);
  });

  it('should return "Out of range" when passing wrong args', () => {
    expect(board._blockCells(-1, 0)).toMatch("Out of range");
    expect(board._blockCells(0, 10)).toMatch("Out of range");
  });
});

describe("testing _isBlocked()", () => {
  const board = new Board();
  board._blockCells(0, 0);
  board._blockCells(0, 1);

  it("should return true when cells are reserved", () => {
    expect(board._isBlocked(ship, 0, 0)).toBeTruthy();
    expect(board._isBlocked(ship, 0, 1)).toBeTruthy();
  });

  it("should return false when cells are not reserved", () => {
    expect(board._isBlocked(ship, 0, 2)).toBeFalsy();
    expect(board._isBlocked(ship, 1, 1)).toBeFalsy();
  });
});

describe("testing _canPlaceShip()", () => {
  const board = new Board();
  board._blockCells(1, 0);

  it("should return false when cell is reserved", () => {
    expect(board._canPlaceShip(ship, 0, 0)).toBeFalsy();
  });

  it("should return false when ship is out of board", () => {
    expect(board._canPlaceShip(ship, 8, 0)).toBeFalsy();
  });

  it("should return true if all good", () => {
    expect(board._canPlaceShip(ship, 0, 1)).toBeTruthy();
  });
});

describe("testing placeShip()", () => {
  let board;
  let ship;
  beforeEach(() => {
    board = new Board();
    ship = new S(3);
  });

  it("be able to place vertical ship", () => {
    board.placeShip(ship, 0, 0);
    expect(board.grid[0][0][0]).toBe(ship);
    expect(board.grid[1][0][0]).toBe(ship);
    expect(board.grid[2][0][0]).toBe(ship);
  });

  it("be able to place horizontal ship", () => {
    ship.changeDirection();
    board.placeShip(ship, 0, 0);
    expect(board.grid[0][0][0]).toBe(ship);
    expect(board.grid[0][1][0]).toBe(ship);
    expect(board.grid[0][2][0]).toBe(ship);
  });

  it("Should set cells around vertical placed ship to 'res'", () => {
    board.placeShip(ship, 1, 1);
    for (let i = 0; i <= ship.size; i++) {
      expect(board.grid[i][0]).toBe("res");
      expect(board.grid[i][2]).toBe("res");
    }
    expect(board.grid[0][1]).toBe("res");
    expect(board.grid[4][1]).toBe("res");
  });

  it("Should set cells around horizontal placed ship to 'res'", () => {
    ship.changeDirection();
    board.placeShip(ship, 1, 1);
    for (let i = 0; i <= ship.size; i++) {
      expect(board.grid[0][i]).toBe("res");
      expect(board.grid[2][i]).toBe("res");
    }
    expect(board.grid[1][0]).toBe("res");
    expect(board.grid[1][4]).toBe("res");
  });

  it("Vertical ships cant overlap each other", () => {
    const ship2 = new S(2);
    const ship3 = new S(3);
    board.placeShip(ship2, 4, 6);
    expect(board.placeShip(ship3, 6, 6)).toBe("Ship cant be placed here");
  });

  it("Should revert with false coords", () => {
    const ship3 = new S(3);
    expect(board.placeShip(ship3, 20, 10)).toBe("Ship cant be placed here");
  });
});

describe("testing receiveAttack()", () => {
  const ship3 = new S(3);
  const board = new Board();
  board.placeShip(ship3, 0, 1);

  it('should return "hit" when ship hit', () => {
    expect(board.receiveAttack(1, 1)).toMatch("hit");
    expect(board)
  });

  it('should return "miss" when misses "res" cell', () => {
    expect(board.receiveAttack(0, 0)).toMatch("miss");
    expect(board.grid[0][0]).toEqual(['res', 'miss'])
  });

  it('should return "miss" when misses to empty cell', () => {
    expect(board.receiveAttack(8, 8)).toMatch("miss");
    expect(board.grid[8][8]).toEqual([false, "miss"]);
  });

  it('should return "sink" if ship sunked', ()=>{
    expect(board.receiveAttack(0, 1)).toMatch("hit");
    expect(board.receiveAttack(2, 1)).toMatch("sink");
  })
});
