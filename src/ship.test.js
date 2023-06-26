import Ship from "./ship";

it("ship hit is zero upon initiation", () => {
  const ship = new Ship(3);
  expect(ship.hit).toBe(0)
})

