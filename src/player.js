import GameBoard from "./gameBoard";

export default class Player {
  constructor() {
    this.board = new GameBoard();
    this.OpponentBoard = new GameBoard().array;
  }

  attackEnemy(enemy, coord) {
    enemy.board.receiveAttack(coord);
  }

  aiAttack(enemy) {
    const randomCoord = Math.floor(Math.random() * this.OpponentBoard.length);
    const cell = this.OpponentBoard[randomCoord];
    
    this.attackEnemy(enemy, cell.data);
    this.OpponentBoard.splice(randomCoord, 1);
  }
}
