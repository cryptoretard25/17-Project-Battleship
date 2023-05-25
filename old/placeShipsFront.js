const { log } = console;

const placeShipsFront = () => {
  const ship = document.querySelector("#ship-wrapper");
  const cells = [...document.querySelectorAll(".field .cell")];
  const btnRotate = document.querySelector("#rotate-btn");
  const fakeQueue = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  function changeDir(ship, decks, dir) {
    if (dir === "v") {
      ship.style.flexDirection = "column";
      ship.style.width = "4.5em";
      ship.style.height = `${4.5 * decks}em`;
    } else if (dir === "h") {
      ship.style.flexDirection = "row";
      ship.style.height = "4.5em";
      ship.style.width = `${4.5 * decks}em`;
    }
  }

  function getDir(ship) {
    return ship.style.flexDirection === "column" ? "v" : "h";
  }

  function setDir(ship) {
    let dir;
    ship.style.flexDirection =
      ship.style.flexDirection === "column"
        ? ("row", (dir = "h"))
        : ("column", (dir = "v"));
    changeDir(ship, ship.children.length, dir);
    return dir;
  }

  function createShipEl(decks, shipWrapper, dir) {
    if (!dir) throw new Error("dir is not defined");
    shipWrapper.innerHTML = "";
    //if (decks) ship.className = `ship-wrapper ship${decks}`;
    for (let i = 1; i <= decks; i++) {
      shipWrapper.innerHTML += `
          <div class="cell">
            <div class="ship"></div>
          </div>
    `;
    }
    ship.style.display = "flex";
    if (dir === "v") {
      changeDir(shipWrapper, decks, "v");
    } else if (dir === "h") {
      changeDir(shipWrapper, decks, "h");
    }
    return ship;
  }

  // events
  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    setTimeout(() => {
      event.target.style.display = "none";
    }, 0);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function dragEnter(event) {
    event.preventDefault();
  }

  function dragDrop(e, placeShip) {
    e.preventDefault();
    const shipWrapperId = e.dataTransfer.getData("text/plain");
    const shipWrapper = document.getElementById(shipWrapperId);
    const cell = e.target.closest(".cell");
    const [cellX, cellY] = JSON.parse(cell.dataset.coords);
    const dir = getDir(shipWrapper);
    const result = placeShip(cellX, cellY, dir);
    if (result === "Ship cant be placed here") return;
  }

  function dragEnd(event) {
    event.target.style.display = "flex";
  }
  return { dragStart, dragOver, dragEnter, dragDrop, dragEnd };
};

function drop(e) {
  e.preventDefault();
  const shipWrapperId = e.dataTransfer.getData("text/plain");
  const shipWrapper = document.getElementById(shipWrapperId);
  const cell = e.target.closest(".cell");
  if (cell && cell.children.length === 0) {
    const [x, y] = JSON.parse(cell.dataset.coords);
    const decks = [...shipWrapper.children];
    if (shipWrapper.style.flexDirection === "row") {
      for (let i = 0; i < decks.length; i++) {
        const celldata = JSON.stringify([x, y + i]);
        const cell = cells.find((el) => el.dataset.coords === celldata);
        cell.innerHTML = decks[i].innerHTML;
      }
    } else {
      for (let i = 0; i < decks.length; i++) {
        const celldata = JSON.stringify([x + i, y]);
        const cell = cells.find((el) => el.dataset.coords === celldata);
        cell.innerHTML = decks[i].innerHTML;
      }
    }
  } else {
    return;
  }
  if (fakeQueue.length) {
    createShipEl(fakeQueue.shift(), ship, "h");
  } else {
    ship.remove();
  }
}

(() => {
  ship.addEventListener("dragstart", dragStart);
  ship.addEventListener("dragend", dragEnd);
  ship.addEventListener("click", () => setDir(ship));

  cells.forEach((cell) => {
    cell.addEventListener("drop", () => dragDrop(event, _));
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
  });

  createShipEl(fakeQueue.shift(), ship, "h");
})();
