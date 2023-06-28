import GameBoard from "./gameBoard";

export default class Player {
  constructor() {
    this.board = new GameBoard
  }

  attackEnemy(enemy, coord) {
    enemy.board.receiveAttack(coord)
  }
}