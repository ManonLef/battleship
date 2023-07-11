import Ship from "./ship";
import emitEvent from "./dispatcher";

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

  placeRandomShips() {
    const lengths = [2, 3, 3, 4, 5];
    const orientations = ["horizontal", "vertical"];
    while (lengths.length > 0) {
      const randomColumn = Math.floor(Math.random() * this.columns.length);
      const randomRow = Math.floor(Math.random() * this.rows.length);
      const randomCoord = this.rows[randomRow] + this.columns[randomColumn];
      const randomOrientation =
        orientations[Math.floor(Math.random() * orientations.length)];

      if (
        this.placeShip(
          randomCoord,
          lengths[lengths.length - 1],
          randomOrientation
        ) !== null
      ) {
        lengths.pop();
      }
    }
  }

  placeShip(coord, length, orientation) {
    const ship = new Ship(length);

    const coordsArray = this.checkOverlap(
      this.shipCoordinates(coord, length, orientation)
    );
    if (coordsArray === null) return null;

    ship.setCoords(coordsArray);

    const arrCopy = [...coordsArray];
    let coordToCheck = arrCopy.shift();

    while (arrCopy.length !== 0) {
      for (let i = 0; i < this.array.length; i += 1) {
        if (this.array[i].data === coordToCheck) {
          this.array[i].ship = ship;
          coordToCheck = arrCopy.shift();
        }
      }
    }
    // emit event to decide which ship to place next
    emitEvent("shipPlaced", { dropped: this.ships.length });
    return this.ships.push(ship);
  }

  shipCoordinates(coord, length, orientation) {
    const coordArray = [];
    const column = coord.substr(1, coord.length - 1);

    if (orientation === "horizontal") {
      if (parseFloat(column) + parseFloat(length) - 1 > 10) return null;
      for (let i = 0; i < length; i += 1) {
        coordArray.push(coord[0] + (parseFloat(column) + i));
      }
    }

    if (orientation === "vertical") {
      const rowIndex = this.rows.findIndex((letter) => letter === coord[0]);
      if (parseFloat(rowIndex) + parseFloat(length) > 10) return null;
      for (
        let i = rowIndex;
        i < parseFloat(rowIndex) + parseFloat(length);
        i += 1
      ) {
        coordArray.push(this.rows[i] + column);
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

    if (cellHit.hit === true) throw new Error("already hit");
    cellHit.hit = true;
    if (cellHit.ship !== null) {
      cellHit.ship.hit();
      cellHit.ship.isSunk();
      return [cellHit.ship.sunk, cellHit.ship.coords];
    }
    return null;
  }

  checkAllSunk() {
    if (this.ships.length === 0) return false;
    for (let i = 0; i < this.ships.length; i += 1) {
      if (this.ships[i].sunk === false) return false;
    }
    return true;
  }
}
