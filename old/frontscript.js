const { log } = console;
import DomPlaceShip from "./DomPlaceShip";
import DomGame from "./modules/dom/DomGame";
import DomAlerts from "./modules/dom/DomAlerts";

import S from "../src/modules/ship";
import Board from "../src/modules/board";
import Player from "../src/modules/player";
import Computer from "../src/modules/computer";
import Queue from "../src/data_structures/queue";
import { Game, instanceGame } from "../src/modules/gameflow";

let game = instanceGame(S, Board, Player, Computer, Queue, Game);

function onPageLoad() {
  const placeShipMenu = document.querySelector(".place-ship-menu");
  const playerBoard = document.querySelector(".main .player");
  const computerBoard = document.querySelector(".main .computer");

  //! Place ship logic
  DomPlaceShip.createPlaceShipMenu(placeShipMenu);

  const placeShipBoard = document.querySelector(".field");
  const startGameBtn = document.querySelector(".accept-btn");
  const reloadGameBtn = document.querySelector(".decline-btn");

  const shipWrapper = document.querySelector("#ship-wrapper");
  const cells = [...document.querySelectorAll(".field .cell")];

  const eventHandlers = {
    shipWrapper: {
      dragstart: DomPlaceShip.dragStart,
      dragend: DomPlaceShip.dragEnd,
      click: (e) => DomPlaceShip.changeDir(shipWrapper),
    },
    fieldCell: {
      drop: (e) => DomPlaceShip.dragDrop(e, shipWrapper, cells, game.player),
      dragover: DomPlaceShip.dragOver,
      dragenter: DomPlaceShip.dragEnter,
    },
  };

  // Adding drag-drop listeners on shipWrapper
  Object.entries(eventHandlers.shipWrapper).forEach(([eventName, handler]) => {
    shipWrapper.addEventListener(eventName, handler);
  });

  // Adding drag-drop listeners on every field cell
  cells.forEach((cell) => {
    Object.entries(eventHandlers.fieldCell).forEach(([eventName, handler]) => {
      cell.addEventListener(eventName, handler);
    });
  });

  // Showing add ship menu
  DomPlaceShip.onshow(playerBoard, computerBoard, placeShipBoard);

  // Adding ship element to drag
  DomPlaceShip.createShipEl(shipWrapper, game.player.ships.peek().getSize());

  // Activating buttons
  startGameBtn.addEventListener("click", () =>
    DomPlaceShip.onGameStart(
      game,
      playerBoard,
      computerBoard,
      placeShipMenu,
      placeShipBoard,
      DomAlerts.appendAlertDiv
    )
  );

  reloadGameBtn.addEventListener("click", () => {
    log("reloaded");
    game = instanceGame(S, Board, Player, Computer, Queue, Game);
    onPageLoad();
    DomAlerts.appendAlertDiv("All ships reloaded");
  });
}

//! Game logic
onPageLoad();
const howToPlayBtn = document.querySelector("#how-to-play");
const computerCells = [...document.querySelectorAll(".computer .cell")];

const startAgainHandler = (e) => {
  game = instanceGame(S, Board, Player, Computer, Queue, Game);
  onPageLoad();
  DomAlerts.appendAlertDiv("All ships reloaded");
};

computerCells.forEach((cell) => {
  cell.addEventListener("click", async (e) => {
    await DomGame.attackDom(e, game, DomAlerts.appendAlertDiv, DomAlerts.appendEndgameDiv, startAgainHandler);
  });
  cell.addEventListener("mouseover", (e) => {
    DomGame.addNotAllowedStyle(e.target);
  });
});

howToPlayBtn.addEventListener("click", (e) => {
  log("click");
  DomAlerts.appendHowToPlayMenu(document.body);
});
