//import { game } from "../../sharedscript";

const { log } = console;

const DomGame = (() => {
  function _findCell(coords, cellsArray) {
    return cellsArray.find((cell) => cell.dataset.coords === coords);
  }

  function _createSinkedShip(attakedShips, cellsArray, coord) {
    const sinkedShip = attakedShips.find((item) =>
      item.decks.some((deck) => deck === coord)
    );
    log(sinkedShip);
    for (const coords of sinkedShip.decks) {
      const cell = _findCell(coords, cellsArray);
      cell.innerHTML = '<div class="enemy-ship"></div>';
      cell.className = "cell hit-black";
    }
  }

  async function attackDom(e, gameClass, alertCb, endgameCb, startAgainHandler) {
    e.preventDefault();
    if (gameClass._getAttacker().name === "computer") {
      alertCb("Its not your turn");
      return;
    }
    const coords = e.target.dataset.coords;
    await gameClass.attack(coords, _handleAttack, alertCb, endgameCb, startAgainHandler);
  }

  function addNotAllowedStyle(target){
    if(target.classList.contains('hit')||target.classList.contains('miss')||
    target.classList.contains('hit-black')) target.style.cursor = 'not-allowed'
  }

  function _handleAttack(attakedClass, coords, result) {
    const cells = [...document.querySelectorAll(`.${attakedClass.name} .cell`)];
    const cell = _findCell(coords, cells);
    if (attakedClass.name === "computer") {
      if (result === "miss") {
        cell.className = "cell miss";
      } else if (result === "hit") {
        cell.className = "cell hit-black";
      } else if (result === "sink") {
        _createSinkedShip(attakedClass.playerShips, cells, coords);
      }
    }
    if (attakedClass.name === "player") {
      if (result === "miss") {
        cell.className = "cell miss";
      }
      if (result === "hit" || result === "sink") {
        cell.className = "cell hit";
      }
    }
  }

  return {
    addNotAllowedStyle,
    attackDom,
  };
})();

export default DomGame;
