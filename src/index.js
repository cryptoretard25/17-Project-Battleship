import DOM from "./modules/dom/Dom";
import S from "./modules/ship";
import Board from "./modules/board";
import Player from "./modules/player";
import Computer from "./modules/ai";
import Queue from "./data_structures/queue";
import { Game, instanceGame } from "./modules/gameflow";

const body = document.body;
const main = document.querySelector(".main");
const howToPlayBtn = document.querySelector("#how-to-play");
howToPlayBtn.addEventListener("click", DOM.createHowToPlayMenu);

body.prepend(
  DOM.createPlaceShipMenu(
    () => instanceGame(S, Board, Player, Computer, Queue, Game),
    main,
    DOM.createAlertDiv,
    DOM.createEndgameDiv
  )
);
