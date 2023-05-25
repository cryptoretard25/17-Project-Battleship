import Game from "../modules/gameflow";
import Player from "../modules/player";
import Computer from "../modules/computer";
import Board from "../modules/board";
import S from "../modules/ship";
import Queue from "../data_structures/queue";

const player = new Player(new Board(), S, new Queue());
const computer = new Computer(new Board(), S, new Queue());
const game = new Game(player, computer, new Queue());

describe("testing Game class", () => {
  it("Player and computer should attack", () => {
    game.attack('[0,0]')
    expect(player.attacks).toEqual([[0,0]])
    expect(computer.attacks.length).not.toBe(0);
    expect(game._getAttacker()).toEqual(player)
  });
});
