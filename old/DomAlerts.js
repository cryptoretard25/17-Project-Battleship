const DomAlerts = (() => {
  const _timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const closeHandler = (e, parent, child) => {
    if (e.target.id === "how-to-close-btn") {
      parent.removeChild(child);
    }
  };

  const _createHowToPlayMenu = (fn, parent) => {
    const background = document.createElement("div");
    background.className = "background";

    const closeBtn = document.createElement("div");
    closeBtn.className = "hit-black";
    closeBtn.id = "how-to-close-btn";
    closeBtn.addEventListener("click", (e) => {
      fn(e, parent, background);
    });

    const howToPlayDiv = document.createElement("div");
    howToPlayDiv.className = "how-to-play";

    howToPlayDiv.appendChild(closeBtn);
    background.appendChild(howToPlayDiv);

    const innerTextCode = `
        <h2>Starships - How to Play</h2>
        <p><strong>Objective:</strong> The objective of Starships is to strategically place your ships on a grid and guess the locations of your opponent's ships in order to sink them all.</p>
        <h4>Game Setup</h4>
        <ol>
          <li>Each player has their own 10x10 grid.</li>
          <li>Ships of different sizes are placed on the grid, with each ship occupying a certain number of adjacent grid cells horizontally or vertically.</li>
        </ol>
        <h4>Taking Turns</h4>
        <ol>
          <li>Players take turns guessing the coordinates of their opponent's ships.&nbsp&nbsp&nbsp</li>
          <li>After each guess, the result is revealed as a hit or a miss.&nbsp&nbsp&nbsp</li>
        </ol>
        <h4>Hit and Miss Feedback</h4>
        <ol>
          <li>If a player's guess hits a ship, they get another turn to make additional guesses.</li>
          <li>The opponent's grid is usually marked to indicate the hits and misses, allowing players to track their progress. </li>
          <li>The goal is to find and sink all of the opponent's ships before they do the same to you.</li>
          <li>When all the cells of a ship are hit, it is considered sunk.</li>
          <li>The game continues until one player has sunk all of their opponent's ships, declaring them the winner.</li>
        </ol>
    `;

    howToPlayDiv.insertAdjacentHTML("beforeend", innerTextCode);
    return background;
  };

  const _createAlertDiv = (message) => {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert-div";
    alertDiv.insertAdjacentHTML("beforeend", `<h3>Alert! ${message}!</h3>`);
    return alertDiv;
  };

  const _createEndgameDiv = (winner, startAgainHandler) => {
    const endgameBack = document.createElement("div");
    endgameBack.className = "background";
    const endgameDiv = document.createElement("div");
    endgameDiv.className = "endgame";
    const startAgainBtn = document.createElement("button");
    startAgainBtn.id = "start-again-btn";
    startAgainBtn.textContent = "Start again";
    startAgainBtn.addEventListener("click", startAgainHandler);
    let text =
      winner === "player"
        ? "<h1>Congratulations! Player wins!</h1>"
        : "<h1>Sorry to say, but computer wins.</h1>";
    endgameDiv.appendChild(startAgainBtn);
    endgameDiv.insertAdjacentHTML(
      "afterbegin",
      ` <h1>Game over!</h1>
      ${text}
    `
    );
    endgameBack.appendChild(endgameDiv);
    return endgameBack;
  };

  const appendHowToPlayMenu = (parent) => {
    const element = _createHowToPlayMenu(closeHandler, parent);
    const existingElement = parent.querySelector(".background");
    if (existingElement) parent.removeChild(existingElement);
    else parent.appendChild(element);
  };

  const appendAlertDiv = async (message) => {
    const element = _createAlertDiv(message);
    const existingElement = document.body.querySelector(".alert-div");
    if (!existingElement) {
      document.body.appendChild(element);
    }
    await _timeout(2000);
    document.body.removeChild(element);
  };

  const appendEndgameDiv = async (winner, startAgainHandler) => {
    const element = _createEndgameDiv(winner, startAgainHandler);
    const existingElement = document.body.querySelector("endgame");
    if (!existingElement) {
      await _timeout(3000);
      document.body.appendChild(element);
    }
  };

  return {
    appendHowToPlayMenu,
    appendAlertDiv,
    appendEndgameDiv,
  };
})();

export default DomAlerts;
