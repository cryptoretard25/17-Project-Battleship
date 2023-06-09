class Game {
  constructor(player, computer, queue) {
    this.player = player;
    this.computer = computer;
    this.gameQueue = (() => {
      queue.enqueue(this.player);
      queue.enqueue(this.computer);
      return queue;
    })();
    this.gameStarted = true;
    this.winner;
  }
  _computerAttack(enemy) {
    const [x, y] = this.computer.generateCoords();
    return this.computer.attackEnemy(enemy, x, y);
  }

  _playerAttack(enemy, coords) {
    const [x, y] = JSON.parse(coords);
    return this.player.attackEnemy(enemy, x, y);
  }

  _moveQueue(result) {
    if (result === "miss") this.gameQueue.enqueue(this.gameQueue.dequeue());
  }

  _isGameOver(result) {
    if (result === "Game over") {
      this.winner = this._getAttacker();
      return true;
    }
  }

  _getAttacker() {
    return this.gameQueue.peek();
  }

  _getAttacked() {
    return this.gameQueue.last();
  }

  // attack for old computer class
  // async _attack(coords, successCb, alertCb, endgameCb) {
  //   if (!this.gameStarted) return;
  //   const attaker = this._getAttacker();
  //   const attacked = this._getAttacked();

  //   const [x, y] = JSON.parse(coords);
  //   const result = attaker.attackEnemy(attacked, x, y);
  //   console.log(result);
  //   if (result === "Cant hit one cell twice") {
  //     alertCb(result);
  //     return;
  //   }

  //   if (typeof result === "object") {
  //     successCb(attacked, coords, result.value);
  //     if (result.gamestate === "game over") {
  //       this.gameStarted = false;
  //       const winner = attaker.name;
  //       endgameCb(winner);
  //     }
  //     console.log("game over");
  //   }

  //   successCb(attacked, coords, result);

  //   this._moveQueue(result);

  //   if (this._getAttacker() === this.computer) {
  //     await this._timeout(2000);
  //     const attackCoords = JSON.stringify(this.computer.generateCoords());
  //     await this.attack(attackCoords, successCb, alertCb, endgameCb);
  //   }
  // }


  // attack for new ai

  async attack(coords, successCb, alertCb, endgameCb) {
    if (!this.gameStarted) return;
    const attacker = this._getAttacker();
    const attacked = this._getAttacked();
    let result;

    if (attacker === this.computer) {
      [coords, result] = attacker.attackEnemy(attacked);
    } else {
      const [x, y] = JSON.parse(coords);
      result = attacker.attackEnemy(attacked, x, y);
    }

    if (result === "Cant hit one cell twice") {
      alertCb(result);
      return;
    }

    if (typeof result === "object") {
      successCb(attacked, coords, result.value, alertCb);
      if (result.gamestate === "game over") {
        this.gameStarted = false;
        const winner = attacker.name;
        endgameCb(winner);
      }
    }

    successCb(attacked, coords, result, alertCb);
    this._moveQueue(result);

    if (this._getAttacker() === this.computer) {
      await this._timeout(2000);
      await this.attack(null, successCb, alertCb, endgameCb);
    }
  }

  _timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

function instanceGame(
  ShipClass,
  BoardClass,
  PlayerClass,
  ComputerClass,
  QueueClass,
  GameClass
) {
  const player = new PlayerClass(new BoardClass(), ShipClass, new QueueClass());
  const computer = new ComputerClass(
    new BoardClass(),
    ShipClass,
    new QueueClass()
  );
  return new GameClass(player, computer, new QueueClass());
}

export { Game, instanceGame };
