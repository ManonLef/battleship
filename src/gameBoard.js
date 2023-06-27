import Ship from "./ship";

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
        gameArray.push(cell);
      });
    }
    return gameArray;
  }

  // placeShip(coord) {
  //   const shipOne = new Ship(5);
  //   // assume horizontal
  //   // add queue of cells column number

  //   this.array.forEach((cell) => {
  //     if (cell.data === coord) {
  //       cell.ship = shipOne;
  //       console.log(cell);
  //     }
  //   });
  // }

  shipCoordinates(coord, length) {
    const coordArray = [coord]
    for (let i = 1; i < length; i++) {
      coordArray.push(coord[0]+(parseFloat(coord[1])+i))
    }
    return coordArray
  }
}

