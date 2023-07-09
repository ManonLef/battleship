export default class Ship {
  constructor(length) {
    this.length = parseFloat(length);
    this.timesHit = 0
    this.sunk = false
  }

  hit(attack = 1) {
    this.timesHit += attack
  }

  isSunk() {
    if (this.length === this.timesHit) this.sunk = true
    else this.sunk = false
  }

  setCoords(arr) {
    this.coords = arr
    return this.coords
  }
}