import GameBoard from "./gameBoard";

export default class Player {
  constructor() {
    this.board = new GameBoard();
    this.aiOpponentBoard = new GameBoard().array;
  }

  attackEnemy(enemy, coord) {
    enemy.board.receiveAttack(coord);
  }

  aiAttack(enemy) {
    const randomCoord = Math.floor(Math.random() * this.aiOpponentBoard.length);
    const cell = this.aiOpponentBoard[randomCoord];
    
    this.attackEnemy(enemy, cell.data);
    this.aiOpponentBoard.splice(randomCoord, 1);
  }
}
