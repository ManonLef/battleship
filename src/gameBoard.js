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

  placeShip(coord, length) {
    const shipOne = new Ship(length);
  
    const coordsArray = this.shipCoordinatesHorizontal(coord, length);
    let coordToCheck = coordsArray.pop();

    while (coordsArray.length !== 0) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].data === coordToCheck) {
          coordToCheck = coordsArray.shift();
          this.array[i].ship = shipOne;
        }
      }
    }
  }

  shipCoordinatesHorizontal(coord, length) {
    const coordArray = [];
    for (let i = 0; i < length; i++) {
      coordArray.push(coord[0] + (parseFloat(coord[1]) + i));
    }
    return coordArray;
  }
}
