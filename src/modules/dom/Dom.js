const { log } = console;
const DOM = (() => {
  const _timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // Place ships
  function _getDir(shipWrapper) {
    return shipWrapper.style.flexDirection === "column" ? "v" : "h";
  }

  function _setDir(shipWrapper, dir, decks) {
    if (dir === "v") {
      shipWrapper.style.flexDirection = "column";
      shipWrapper.style.height = `${4.5 * decks}em`;
      shipWrapper.style.width = "4.5em";
    } else if (dir === "h") {
      shipWrapper.style.flexDirection = "row";
      shipWrapper.style.height = "4.5em";
      shipWrapper.style.width = `${4.5 * decks}em`;
    }
  }

  function _createShipElement(parent, decks) {
    const shipDirection = _getDir(parent);
    parent.innerHTML = "";
    for (let i = 0; i < decks; i++) {
      parent.insertAdjacentHTML(
        "afterbegin",
        `
          <div class="cell">
            <div class="ship"></div>
          </div>  
        `
      );
    }
    parent.style.display = "flex";
    _setDir(parent, shipDirection, decks);
  }

  //------------------------------------------------------------------------------------------
  // Game functions
  const gameflow = (() => {
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

    function _handleAttack(attakedClass, coords, result) {
      const cells = [
        ...document.querySelectorAll(`.${attakedClass.name} .cell`),
      ];
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

    function gameStart(GameClass, mainDiv, board, alertFn, endgameFn) {
      const player = GameClass.player;
      const computer = GameClass.computer;

      if (!player.ships.isEmpty()) {
        alertFn("You should place all ships before game starts");
        return;
      }

      mainDiv.append(createPlayerBoard(board));
      mainDiv.append(createComputerBoard(GameClass, alertFn, endgameFn));

      computer.placeAllShips();
      alertFn("Game Started");
      
      const placeShipMenu = document.querySelector(".place-ship-menu");
      document.body.removeChild(placeShipMenu);
    }

    async function attack(e, GameClass, alertFn, endgameFn) {
      e.preventDefault();
      if (GameClass._getAttacker().name === "computer") {
        alertFn("Its not your turn");
        return;
      }
      const coords = e.target.dataset.coords;
      await GameClass.attack(coords, _handleAttack, alertFn, endgameFn);
    }

    return { attack, gameStart };
  })();

  const _placeShipEvents = (() => {
    function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(() => {
        e.target.style.display = "none";
      }, 0);
    }

    function dragDrop(e, parent, shipWrapper, cellsArray, playerClass) {
      e.preventDefault();
      const shipWrapperId = e.dataTransfer.getData("text/plain");
      const shipWrapperEl = parent.querySelector(`#${shipWrapperId}`);
      const cell = e.target.closest(".cell");
      const [x, y] = JSON.parse(cell.dataset.coords);
      const dir = _getDir(shipWrapperEl);
      const result = playerClass.placeShip(x, y, dir);
      const decks = [...shipWrapperEl.children];
      if (result === "Ship cant be placed here") {
        e.stopPropagation();
        return;
      }
      for (let i = 0; i < result.length; i++) {
        const celldata = JSON.stringify(result[i]);
        const cell = cellsArray.find(
          (item) => item.dataset.coords === celldata
        );
        cell.innerHTML = decks[i].innerHTML;
      }
      if (!playerClass.ships.isEmpty()) {
        const shipSize = playerClass.ships.peek().getSize();
        _createShipElement(shipWrapper, shipSize);
      } else {
        shipWrapper.remove();
      }
    }

    function dragEnd(e) {
      e.target.style.display = "flex";
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function dragEnter(e) {
      e.preventDefault();
    }

    function changeDir(shipWrapper) {
      const dir = _getDir(shipWrapper);
      const decks = shipWrapper.children.length;
      dir === "v"
        ? _setDir(shipWrapper, "h", decks)
        : _setDir(shipWrapper, "v", decks);
    }

    return {
      dragStart,
      dragEnd,
      dragDrop,
      dragOver,
      dragEnter,
      changeDir,
    };
  })();

  function createPlaceShipMenu(newGameClassFn, mainDiv, alertFn, endgameFn) {
    const GameClass = newGameClassFn();
    const player = GameClass.player;
    
    const existingElement = document.body.querySelector(".place-ship-menu");
    if (existingElement) document.body.removeChild(existingElement);
    mainDiv.innerHTML = "";

    const placeShipMenu = document.createElement("div");
    placeShipMenu.className = "place-ship-menu";
    placeShipMenu.insertAdjacentHTML(
      "afterbegin",
      `
      <h2>Place ships</h2>
      <div class="wrapper">
        <div class="ships">
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
      `
    );

    const board = placeShipMenu.querySelector(".field");
    const shipWrapper = placeShipMenu.querySelector("#ship-wrapper");
    const startGameBtn = placeShipMenu.querySelector(".accept-btn");
    const reloadGameBtn = placeShipMenu.querySelector(".decline-btn");
    const cells = [...placeShipMenu.querySelectorAll(".field .cell")];

    shipWrapper.addEventListener("dragstart", _placeShipEvents.dragStart);
    shipWrapper.addEventListener("dragend", _placeShipEvents.dragEnd);
    shipWrapper.addEventListener("click", () => _placeShipEvents.changeDir(shipWrapper) );

    for (const cell of cells) {
      cell.addEventListener("drop", (e) => {
        _placeShipEvents.dragDrop(e, placeShipMenu, shipWrapper, cells, player);
      });
      cell.addEventListener("dragover", _placeShipEvents.dragOver);
      cell.addEventListener("dragenter", _placeShipEvents.dragEnter);
    }

    startGameBtn.addEventListener("click", (e) => {
      gameflow.gameStart(GameClass, mainDiv, board, alertFn, endgameFn);
    });

    reloadGameBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const newPlaceShipMenu = createPlaceShipMenu( newGameClassFn, mainDiv, createAlertDiv, createEndgameDiv);
      document.body.prepend(newPlaceShipMenu);
      alertFn("All ships was reloaded");
    });

    _createShipElement(shipWrapper, player.ships.peek().getSize());

    return placeShipMenu;
  }

  // Game
 
  function createPlayerBoard(createPlayerField) {
    const playerBoard = document.createElement("div");
    playerBoard.className = "player-board";
    playerBoard.insertAdjacentHTML(
      "afterbegin",
      `
      <h2>Player board</h2>
      <div class="player"></div>
    `
    );
    const playerField = playerBoard.querySelector(".player");
    playerField.innerHTML = createPlayerField.innerHTML;
    return playerBoard;
  }

  function createComputerBoard(GameClass, alertFn, endgameFn) {
    const computerBoard = document.createElement("div");
    computerBoard.className = "computer-board";
    computerBoard.insertAdjacentHTML(
      "afterbegin",
      `
          <h2>Enemy board</h2>
          <div class="computer">
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
    `
    );
    const computerCells = [...computerBoard.querySelectorAll(".cell")];
    for (const cell of computerCells) {
      cell.addEventListener("click", async (e) => {
        await gameflow.attack(e, GameClass, alertFn, endgameFn);
      });
    }

    return computerBoard;
  }

  async function createAlertDiv(message) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert-div";
    alertDiv.insertAdjacentHTML("beforeend", `<h3>Alert! ${message}!</h3>`);
    const existingElement = document.querySelector(".alert-div");
    
    if (!existingElement) {
      document.body.appendChild(alertDiv);
    }else{
      return
    }
    await _timeout(2000);
    document.body.removeChild(alertDiv);
  }

  async function createEndgameDiv(winner) {
    const background = document.createElement("div");
    background.className = "background";
    let text =
      winner === "player"
        ? "<h1>Congratulations! Player wins!</h1>"
        : "<h1>Sorry to say, but computer wins.</h1>";

    background.insertAdjacentHTML(
      "beforeend",
      `
      <div class="endgame">
        <h1>Game over!</h1>
        ${text}
        <button id="start-again-btn">Start again</button>
      </div>
      `
    );

    const startAgainBtn = background.querySelector("#start-again-btn");
    startAgainBtn.addEventListener("click", (e) => {
      window.location.reload();
    });

    const existingElement = document.querySelector(".endgame");
    if (!existingElement) {
      await _timeout(3000);
      document.body.prepend(background);
    }
  }

  function createHowToPlayMenu(){
    const background = document.createElement('div')
    background.className = 'background';
    background.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="how-to-play">
        <div id="how-to-close-btn" class="hit-black"></div>
        <h2>Starships - How to Play</h2>
        <p><strong>Objective:</strong> The objective of Battleship is to strategically place your ships on a grid and guess
          the locations of your opponent's ships in order to sink them all.</p>
        <h4>Game Setup</h4>
        <ol>
          <li>Each player has their own grid, typically a 10x10 grid.</li>
          <li>Ships of different sizes are placed on the grid, with each ship occupying a certain number of adjacent grid
            cells horizontally or vertically.</li>
        </ol>
        <h4>Taking Turns</h4>
        <ol>
          <li>Players take turns guessing the coordinates of their opponent's ships.</li>
          <li>After each guess, the result is revealed as a hit or a miss.</li>
        </ol>
        <h4>Hit and Miss Feedback</h4>
        <ol>
          <li>If a player's guess hits a ship, they get another turn to make additional guesses.</li>
          <li>The opponent's grid is usually marked to indicate the hits and misses, allowing players to track their
            progress. </li>
          <li>The goal is to find and sink all of the opponent's ships before they do the same to you.</li>
          <li>When all the cells of a ship are hit, it is considered sunk.</li>
          <li>The game continues until one player has sunk all of their opponent's ships, declaring them the winner.</li>
        </ol>
      </div>
    `
    );
    const closeBtn = background.querySelector('#how-to-close-btn');
    closeBtn.addEventListener('click', (e)=>{
      if(e.target.id === 'how-to-close-btn');
      document.body.removeChild(background);
    })

    const existingElement = document.body.querySelector('.background');
    if(existingElement) document.body.removeChild(existingElement);
    else document.body.appendChild(background)
  }

  //------------------------------------------------------------------------------------------
  return {
    createPlaceShipMenu,
    createPlayerBoard,
    createComputerBoard,
    createAlertDiv,
    createEndgameDiv,
    createHowToPlayMenu
  };
})();

export default DOM;
