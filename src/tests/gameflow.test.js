import { Game } from "../modules/gameflow";
import Player from "../modules/player";
import Computer from "../modules/ai";
import Board from "../modules/board";
import S from "../modules/ship";
import Queue from "../data_structures/queue";

const player = new Player(new Board(), S, new Queue());
const computer = new Computer(new Board(), S, new Queue());
const game = new Game(player, computer, new Queue());

function successCbMock(attacked, coords, result) {}
function alertCbMock(result) {}
function endgameCbMock(winner) {}

describe("testing Game class", () => {
  it("Player and computer should attack", async () => {
    await game.attack("[0,0]", successCbMock, alertCbMock, endgameCbMock);
    expect(player.attacks).toEqual([[0, 0]]);
    expect(computer.attacks.length).not.toBe(0);
    expect(game._getAttacker()).toEqual(player);
  });
});
