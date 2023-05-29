const { log } = console;

const board = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];

const attacks = [];
let lives = 4;
let hitMode = false;
let firstHit = null;
let lastHit = null;
let direction = "left";

function generateCoords() {
  if (attacks.length === 10) return;
  let x = Math.floor(Math.random() * 10);
  if (!alreadyAttacked(x)) {
    attacks.push(x);
    return x;
  } else {
    return generateCoords();
  }
}

function alreadyAttacked(x) {
  return attacks.some((pos) => pos === x);
}

do {
  if (!hitMode) {
    let x = generateCoords();
    if (board[x] === 1) {
      board[x] = "hit";
      hitMode = true;
      firstHit = x;
      lastHit = x;
      lives--;
      log("Hit", x);
    } else {
      board[x] = "miss";
      log("Miss", x);
    }
  } else if (hitMode) {
    if (direction === "left") {
      let x = lastHit - 1;
      if (alreadyAttacked(x) || x < 0) {
        direction = "right";
        lastHit = firstHit;
      } else if (board[x] === 1 && lives > 1) {
        board[x] = "hit";
        lastHit = x;
        lives--;
        attacks.push(x);
        log("Hit", x);
      } else if (board[x] === 1 && lives == 1) {
        board[x] = "hit";
        lives--;
        firstHit = null;
        lastHit = null;
        direction = "left";
        hitMode = false;
        attacks.push(x);
        log("Sink", x);
      } else if (board[x] === 0) {
        board[x] = "miss";
        lastHit = firstHit;
        direction = "right";
        attacks.push(x);
        log("Miss", x);
      }
    }
    if (direction === "right") {
      let x = lastHit + 1;
      if (board[x] === 1 && lives > 1) {
        board[x] = "hit";
        lastHit = x;
        lives--;
        attacks.push(x);
        log("Hit", x);
      } else if (board[x] === 1 && lives == 1) {
        board[x] = "hit";
        lives--;
        firstHit = null;
        lastHit = null;
        direction = "left";
        hitMode = false;
        attacks.push(x);
        log("Sink", x);
      }
    }
  }
} while (lives !== 0);

log(board);
log("attacks", attacks);
