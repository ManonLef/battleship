import GameBoard from "./gameBoard";

export default class Player {
  constructor() {
    this.board = new GameBoard();
    this.OpponentBoard = new GameBoard().array;
  }

  attackEnemy(enemy, coord) {
    return enemy.board.receiveAttack(coord);
  }

  aiAttack(enemy) {
    const randomCoord = Math.floor(Math.random() * this.OpponentBoard.length);
    const cell = this.OpponentBoard[randomCoord];

    dispatchEvent(
      new CustomEvent("aiMoveMade", {
        detail: {
          sunk: this.attackEnemy(enemy, cell.data),
          coord: cell.data,
        },
      })
    );

    this.OpponentBoard.splice(randomCoord, 1);
  }
}
