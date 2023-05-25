const { log } = console;

const DomPlaceShip = (() => {
  function getDir(shipWrapper) {
    const dir = shipWrapper.style.flexDirection === "column" ? "v" : "h";
    return dir;
  }

  function setDir(shipWrapper, dir, decks) {
    if (dir === "h") {
      shipWrapper.style.flexDirection = "row";
      shipWrapper.style.height = "4.5em";
      shipWrapper.style.width = `${4.5 * decks}em`;
    } else if (dir === "v") {
      shipWrapper.style.flexDirection = "column";
      shipWrapper.style.height = `${4.5 * decks}em`;
      shipWrapper.style.width = "4.5em";
    }
  }

  function getDecks(shipWrapper) {
    return shipWrapper.children.length;
  }

  function changeDir(shipWrapper) {
    const dir = getDir(shipWrapper);
    const decks = getDecks(shipWrapper);
    //log(dir);
    if (dir === "v") {
      setDir(shipWrapper, "h", decks);
    } else if (dir === "h") {
      setDir(shipWrapper, "v", decks);
    }
  }

  function createPlaceShipMenu(DomAncestor) {
    DomAncestor.innerHTML = `
    <h2>Place ships</h2>
    <div class="wrapper">
      <div class="ships ships-right">
        <div class="ship-wrapper" id="ship-wrapper" draggable="true"></div>
      </div>
      <div class="field">
        <div class="row row-0">
          <div class="cell" data-coords="[0,0]"></div>
          <div class="cell" data-coords="[0,1]"></div>
          <div class="cell" data-coords="[0,2]"></div>
          <div class="cell" data-coords="[0,3]"></div>
          <div class="cell" data-coords="[0,4]"></div>
          <div class="cell" data-coords="[0,5]"></div>
          <div class="cell" data-coords="[0,6]"></div>
          <div class="cell" data-coords="[0,7]"></div>
          <div class="cell" data-coords="[0,8]"></div>
          <div class="cell" data-coords="[0,9]"></div>
        </div>
        <div class="row row-1">
          <div class="cell" data-coords="[1,0]"></div>
          <div class="cell" data-coords="[1,1]"></div>
          <div class="cell" data-coords="[1,2]"></div>
          <div class="cell" data-coords="[1,3]"></div>
          <div class="cell" data-coords="[1,4]"></div>
          <div class="cell" data-coords="[1,5]"></div>
          <div class="cell" data-coords="[1,6]"></div>
          <div class="cell" data-coords="[1,7]"></div>
          <div class="cell" data-coords="[1,8]"></div>
          <div class="cell" data-coords="[1,9]"></div>
        </div>
        <div class="row row-2">
          <div class="cell" data-coords="[2,0]"></div>
          <div class="cell" data-coords="[2,1]"></div>
          <div class="cell" data-coords="[2,2]"></div>
          <div class="cell" data-coords="[2,3]"></div>
          <div class="cell" data-coords="[2,4]"></div>
          <div class="cell" data-coords="[2,5]"></div>
          <div class="cell" data-coords="[2,6]"></div>
          <div class="cell" data-coords="[2,7]"></div>
          <div class="cell" data-coords="[2,8]"></div>
          <div class="cell" data-coords="[2,9]"></div>
        </div>
        <div class="row row-3">
          <div class="cell" data-coords="[3,0]"></div>
          <div class="cell" data-coords="[3,1]"></div>
          <div class="cell" data-coords="[3,2]"></div>
          <div class="cell" data-coords="[3,3]"></div>
          <div class="cell" data-coords="[3,4]"></div>
          <div class="cell" data-coords="[3,5]"></div>
          <div class="cell" data-coords="[3,6]"></div>
          <div class="cell" data-coords="[3,7]"></div>
          <div class="cell" data-coords="[3,8]"></div>
          <div class="cell" data-coords="[3,9]"></div>
        </div>
        <div class="row row-4">
          <div class="cell" data-coords="[4,0]"></div>
          <div class="cell" data-coords="[4,1]"></div>
          <div class="cell" data-coords="[4,2]"></div>
          <div class="cell" data-coords="[4,3]"></div>
          <div class="cell" data-coords="[4,4]"></div>
          <div class="cell" data-coords="[4,5]"></div>
          <div class="cell" data-coords="[4,6]"></div>
          <div class="cell" data-coords="[4,7]"></div>
          <div class="cell" data-coords="[4,8]"></div>
          <div class="cell" data-coords="[4,9]"></div>
        </div>
        <div class="row row-5">
          <div class="cell" data-coords="[5,0]"></div>
          <div class="cell" data-coords="[5,1]"></div>
          <div class="cell" data-coords="[5,2]"></div>
          <div class="cell" data-coords="[5,3]"></div>
          <div class="cell" data-coords="[5,4]"></div>
          <div class="cell" data-coords="[5,5]"></div>
          <div class="cell" data-coords="[5,6]"></div>
          <div class="cell" data-coords="[5,7]"></div>
          <div class="cell" data-coords="[5,8]"></div>
          <div class="cell" data-coords="[5,9]"></div>
        </div>
        <div class="row row-6">
          <div class="cell" data-coords="[6,0]"></div>
          <div class="cell" data-coords="[6,1]"></div>
          <div class="cell" data-coords="[6,2]"></div>
          <div class="cell" data-coords="[6,3]"></div>
          <div class="cell" data-coords="[6,4]"></div>
          <div class="cell" data-coords="[6,5]"></div>
          <div class="cell" data-coords="[6,6]"></div>
          <div class="cell" data-coords="[6,7]"></div>
          <div class="cell" data-coords="[6,8]"></div>
          <div class="cell" data-coords="[6,9]"></div>
        </div>
        <div class="row row-7">
          <div class="cell" data-coords="[7,0]"></div>
          <div class="cell" data-coords="[7,1]"></div>
          <div class="cell" data-coords="[7,2]"></div>
          <div class="cell" data-coords="[7,3]"></div>
          <div class="cell" data-coords="[7,4]"></div>
          <div class="cell" data-coords="[7,5]"></div>
          <div class="cell" data-coords="[7,6]"></div>
          <div class="cell" data-coords="[7,7]"></div>
          <div class="cell" data-coords="[7,8]"></div>
          <div class="cell" data-coords="[7,9]"></div>
        </div>
        <div class="row row-8">
          <div class="cell" data-coords="[8,0]"></div>
          <div class="cell" data-coords="[8,1]"></div>
          <div class="cell" data-coords="[8,2]"></div>
          <div class="cell" data-coords="[8,3]"></div>
          <div class="cell" data-coords="[8,4]"></div>
          <div class="cell" data-coords="[8,5]"></div>
          <div class="cell" data-coords="[8,6]"></div>
          <div class="cell" data-coords="[8,7]"></div>
          <div class="cell" data-coords="[8,8]"></div>
          <div class="cell" data-coords="[8,9]"></div>
        </div>
        <div class="row row-9">
          <div class="cell" data-coords="[9,0]"></div>
          <div class="cell" data-coords="[9,1]"></div>
          <div class="cell" data-coords="[9,2]"></div>
          <div class="cell" data-coords="[9,3]"></div>
          <div class="cell" data-coords="[9,4]"></div>
          <div class="cell" data-coords="[9,5]"></div>
          <div class="cell" data-coords="[9,6]"></div>
          <div class="cell" data-coords="[9,7]"></div>
          <div class="cell" data-coords="[9,8]"></div>
          <div class="cell" data-coords="[9,9]"></div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button class="accept-btn">Start game</button>
      <button class="decline-btn">Reload ships</button>
    </div>
  `;
  }

  function createShipEl(shipWrapper, decks) {
    const dir = getDir(shipWrapper);
    shipWrapper.innerHTML = "";
    for (let i = 1; i <= decks; i++) {
      shipWrapper.innerHTML += `
        <div class="cell">
          <div class="ship"></div>
        </div>        
      `;
    }
    shipWrapper.style.display = "flex";
    setDir(shipWrapper, dir, decks);
    return shipWrapper;
  }

  // Events
  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  }

  function dragEnd(e) {
    e.target.style.display = "flex";
  }

  function dragDrop(e, shipWrapper, cellsArray, playerClass) {
    e.preventDefault();
    const sWrapperId = e.dataTransfer.getData("text/plain");
    const sWrapper = document.getElementById(sWrapperId);
    const cell = e.target.closest(".cell");
    const [cellX, cellY] = JSON.parse(cell.dataset.coords);
    const dir = getDir(sWrapper);
    const result = playerClass.placeShip(cellX, cellY, dir);
    const decks = [...sWrapper.children];
    if (result === "Ship cant be placed here") {
      e.stopPropagation();
      return;
    }
    for (let i = 0; i < result.length; i++) {
      const celldata = JSON.stringify(result[i]);
      const cell = cellsArray.find((cell) => cell.dataset.coords === celldata);
      cell.innerHTML = decks[i].innerHTML;
    }
    if (!playerClass.ships.isEmpty()) {
      createShipEl(shipWrapper, playerClass.ships.peek().getSize());
    } else {
      shipWrapper.remove();
    }
  }

  function dragDropSimple(e, cellsArray, queue, shipWrapper) {
    e.preventDefault();
    const sWrapperId = e.dataTransfer.getData("text/plain");
    const sWrapper = document.getElementById(sWrapperId);
    const cell = e.target.closest(".cell");
    const [cellX, cellY] = JSON.parse(cell.dataset.coords);
    const decks = [...sWrapper.children];
    if (getDir(sWrapper) === "h") {
      for (let i = 0; i < decks.length; i++) {
        const celldata = JSON.stringify([cellX, cellY + i]);
        const cell = cellsArray.find((el) => el.dataset.coords === celldata);
        cell.innerHTML = decks[i].innerHTML;
      }
    } else {
      for (let i = 0; i < decks.length; i++) {
        const celldata = JSON.stringify([cellX + i, cellY]);
        const cell = cellsArray.find((el) => el.dataset.coords === celldata);
        cell.innerHTML = decks[i].innerHTML;
      }
    }
    if (queue.length) {
      createShipEl(shipWrapper, queue.shift());
    } else {
      shipWrapper.remove();
    }
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function onshow(playerBoardDOM, computerBoardDOM, placeShipMenuDOM) {
    playerBoardDOM.style.display = "none";
    computerBoardDOM.style.display = "none";
    placeShipMenuDOM.style.display = "flex";
  }

  function onGameStart( gameClass, playerBoardDOM, computerBoardDOM, placeShipMenuDOM, placeShipBoard, alertCb ) {
    if (!gameClass.player.ships.isEmpty()) {
      alertCb("You should place all ships before game starts");
      return;
    }
    playerBoardDOM.style.display = "flex";
    computerBoardDOM.style.display = "flex";
    placeShipMenuDOM.style.display = "none";
    playerBoardDOM.innerHTML = placeShipBoard.innerHTML;
    gameClass.computer.placeAllShips();
    alertCb('Game started')
  }

  return {
    createPlaceShipMenu,
    createShipEl,
    changeDir,
    dragStart,
    dragEnd,
    dragDropSimple,
    dragDrop,
    dragOver,
    dragEnter,
    onshow,
    onGameStart,
  };
})();

export default DomPlaceShip;
