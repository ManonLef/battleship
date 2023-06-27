import Ship from "./ship";

export default class GameBoard {
  constructor() {
    this.columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    this.array = this.createGameArray();
  }

  createGameArray() {
    const gameArray = [];

    for (let i = 0; i < this.rows.length; i++) {
      this.columns.forEach((index) => {
        const cell = {
          data: this.rows[i] + index,
          hit: false,
          ship: null,
        };
        gameArray.push(cell);
      });
    }
    return gameArray;
  }

  placeShip(coord, length, orientation) {
    const shipOne = new Ship(length);

    const coordsArray = this.shipCoordinates(coord, length, orientation);
    if (coordsArray === null) return null;

    let coordToCheck = coordsArray.shift();

    while (coordsArray.length !== 0) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].data === coordToCheck) {
          this.array[i].ship = shipOne;
          coordToCheck = coordsArray.shift();
        }
      }
    }
  }

  shipCoordinates(coord, length, orientation) {
    const coordArray = [];

    if (orientation === "horizontal") {
      if (parseFloat(coord[1]) + length > 10) return null;
      for (let i = 0; i < length; i++) {
        coordArray.push(coord[0] + (parseFloat(coord[1]) + i));
      }
    }

    if (orientation === "vertical") {
      const rowIndex = this.rows.findIndex((letter) => letter === coord[0]);
      if (rowIndex + length > 10) return null;
      for (let i = rowIndex; i <= length; i++) {
        coordArray.push(this.rows[i]+coord[1])
      }
    }
    return coordArray;
  }
}
