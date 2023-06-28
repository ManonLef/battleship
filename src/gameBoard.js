import Ship from "./ship";

export default class GameBoard {
  constructor() {
    this.columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    this.array = this.createGameArray();
    this.ships = [];
  }

  createGameArray() {
    const gameArray = [];

    for (let i = 0; i < this.rows.length; i += 1) {
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
    const ship = new Ship(length);

    const coordsArray = this.checkOverlap(
      this.shipCoordinates(coord, length, orientation)
    );
    if (coordsArray === null) return null;

    let coordToCheck = coordsArray.shift();

    while (coordsArray.length !== 0) {
      for (let i = 0; i < this.array.length; i += 1) {
        if (this.array[i].data === coordToCheck) {
          this.array[i].ship = ship;
          coordToCheck = coordsArray.shift();
        }
      }
    }
    return this.ships.push(ship);
  }

  shipCoordinates(coord, length, orientation) {
    const coordArray = [];

    if (orientation === "horizontal") {
      if (parseFloat(coord[1]) + length - 1 > 10) return null;
      for (let i = 0; i < length; i += 1) {
        coordArray.push(coord[0] + (parseFloat(coord[1]) + i));
      }
    }

    if (orientation === "vertical") {
      const rowIndex = this.rows.findIndex((letter) => letter === coord[0]);
      if (rowIndex + length > 10) return null;
      for (let i = rowIndex; i <= length; i += 1) {
        coordArray.push(this.rows[i] + coord[1]);
      }
    }
    return coordArray;
  }

  checkOverlap(array) {
    if (array === null) return null;
    for (let i = 0; i < array.length; i += 1) {
      const cell = this.array.find((coord) => coord.data === array[i]);
      if (cell.ship !== null) return null;
    }
    return array;
  }

  receiveAttack(coords) {
    const cellIndex = this.array.findIndex((cell) => cell.data === coords);
    const cellHit = this.array[cellIndex];

    cellHit.hit = true;
    if (cellHit.ship !== null) {
      cellHit.ship.hit();
    }
  }

  checkAllSunk() {
    if (this.ships.length === 0) return false;
    for (let i = 0; i < this.ships.length; i += 1) {
      this.ships[i].isSunk();
      if (this.ships[i].sunk === false) return false;
    }
    return true;
  }
}
