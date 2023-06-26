export default class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0
    this.sunk = this.isSunk()
  }

  hit(attack = 1) {
    this.timesHit += attack
  }

  // isSunk() {
  //   if (this.length === this.timesHit) return true
  //   else return false
  // }
}