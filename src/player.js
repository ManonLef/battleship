import GameBoard from "./gameBoard";
import emitEvent from "./dispatcher";

export default class Player {
  constructor() {
    this.board = new GameBoard();
    this.OpponentBoard = new GameBoard().array;
  }

  attackEnemy(enemy, coord) {
    // returns null when not hit and otherwise an array with sunk and coords
    return enemy.board.receiveAttack(coord);
  }

  aiAttack(enemy) {
    const randomCoord = Math.floor(Math.random() * this.OpponentBoard.length);
    const cell = this.OpponentBoard[randomCoord];

    const hitOrMiss = this.attackEnemy(enemy, cell.data);
    emitEvent("aiMoveMade", { sunk: hitOrMiss, coord: cell.data });

    this.OpponentBoard.splice(randomCoord, 1);
  }
}
