import Player from "../modules/player";
import Board from "../modules/board";
import S from "../modules/ship";
import Queue from "../data_structures/queue";

const { log } = console;

const player = new Player(new Board(), S, new Queue());
const enemy = new Player(new Board(), S, new Queue());

describe("testing Player.placeShip()", () => {
  it("should place vertical ship", () => {
    player.placeShip(0, 0, "v");
    for (let i = 0; i < 4; i++) {
      expect(player.gameboard.grid[i][0][0]).toEqual(player.playerShips[0]);
      expect(player.ships.size()).toBe(9);
    }
  });
  it("should place horizontal ship", () => {
    player.placeShip(0, 2, "h");
    for (let i = 2; i < 5; i++) {
      expect(player.gameboard.grid[0][i][0]).toEqual(player.playerShips[1]);
      expect(player.ships.size()).toBe(8);
    }
  });
  it('should return "Ship cant be placed here"', () => {
    expect(player.placeShip(0, 1, "v")).toBe("Ship cant be placed here");
    expect(player.placeShip(0, 4, "v")).toBe("Ship cant be placed here");
    expect(player.placeShip(0, 0, "h")).toBe("Ship cant be placed here");
    expect(player.ships.size()).toBe(8);
  });
});

describe("testing Player.attackEnemy()", () => {
  it("attack enemy ship correctly", () => {
    enemy.placeShip(0, 0, "v");
    expect(player.attackEnemy(enemy, 0, 1)).toBe("miss");
    expect(player.attackEnemy(enemy, 1, 0)).toBe("hit");
    expect(enemy.gameboard.grid[0][1][1]).toBe("miss");
    expect(enemy.gameboard.grid[1][0][1]).toBe("hit");
  });

  it("cant attack same cell twice", () => {
    enemy.placeShip(0, 0, "v");
    player.attackEnemy(enemy, 0, 1);
    expect(player.attackEnemy(enemy, 0, 1)).toBe("Cant hit one cell twice");
  });
});
