export default class GameBoard {
  constructor() {
    this.array = this.createGameArray();
  }

  createGameArray() {
    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const gameArray = [];

    for (let i = 0; i < rows.length; i++) {
      columns.forEach((index) => {
        const cell = {
          data: rows[i] + index,
          hit: false,
          ship: null,
        };
        gameArray.push(cell)
      });
    }
    return gameArray
  }
}