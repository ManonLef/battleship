import Ship from "./ship";

it("ship hit is zero upon initiation", () => {
  const ship = new Ship(3);
  expect(ship.timesHit).toBe(0)
})

it("ship timesHit increases as ship is hit", () => {
  const ship = new Ship(3);
  ship.hit(3)
  expect(ship.timesHit).toBe(3)
})

it("ship sunk is true when hit enough times", () => {
  const ship = new Ship(5);
  while (ship.timesHit < 5) {
    ship.hit()
  }
  ship.isSunk()
  expect(ship.sunk).toBe(true)
})

it("ship sunk is false when not hit enough times", () => {
  const ship = new Ship(5);
  while (ship.timesHit < 4) {
    ship.hit()
  }
  ship.isSunk()
  expect(ship.sunk).toBe(false)
})