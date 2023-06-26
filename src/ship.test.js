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