import Ship from "./ship";

it("ship timesHit increases by one as ship is hit", () => {
  const ship = new Ship(3);
  ship.hit(1);
  expect(ship.timesHit).toBe(1);
});

it("ship of length 5 is sunk is true when hit 5 times", () => {
  const ship = new Ship(5);
  while (ship.timesHit < 5) {
    ship.hit();
  }
  ship.isSunk();
  expect(ship.sunk).toBe(true);
});

it("ship of length 5 is not sunk when not hit 5 times", () => {
  const ship = new Ship(5);
  while (ship.timesHit < 4) {
    ship.hit();
  }
  ship.isSunk();
  expect(ship.sunk).toBe(false);
});
