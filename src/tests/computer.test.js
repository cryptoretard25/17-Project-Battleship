import Computer from "../modules/computer";
import Player from "../modules/player";
import Board from "../modules/board";
import Queue from "../data_structures/queue";
import S from "../modules/ship";

const { log } = console;

const computer = new Computer(new Board(), S, new Queue());
const player = new Player(new Board(), S, new Queue());

describe("testing Computer class", () => {
  it("should random coord place ship", () => {
    computer.placeShip();
    expect(
      computer.gameboard.grid.some((row) =>
        row.some((item) => item[0] == computer.playerShips[0])
      )
    ).toBeTruthy();
    expect(
      !!computer.gameboard.ships.get(computer.playerShips[0])
    ).toBeTruthy();
    expect(computer.ships.size() === 9).toBeTruthy();
  });

  it("should random coord hit", () => {
    const [x, y] = computer.generateCoords();
    expect(computer.attackEnemy(player, x, y)).toBe("miss" || "hit");
    player.gameboard.grid.some((row) =>
      row.some((cell) => {
        if (Array.isArray(cell)) cell[1] === "miss" || cell[1] === "hit";
      })
    );
  });
});
