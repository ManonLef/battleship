import GameBoard from "./gameBoard";

// Creating a new gameBoard each time seems superfluous but having one constant will alter the gameboard state for some tests and interfere with the next ones.

// gameBoard array basic
it("1.0. expect gameboard array to be generated as tested", () => {
  const board = new GameBoard();
  expect(board.array).toStrictEqual(testThree);
});

// ship coordinates horizontally
it("2.0. expect ship coordinates horizontally calculated", () => {
  const board = new GameBoard();
  expect(board.shipCoordinates("a1", 5, "horizontal")).toStrictEqual([
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
  ]);
});

// ship placement horizontally
it("3.1. expect gameboard to place ship length five at a1 to fill ship data for a1 through a5", () => {
  const board = new GameBoard();
  board.placeShip("a1", 5, "horizontal");
  expect(board.array).toMatchObject(testTwo);
});

it("3.2. expect gameboard to place ship length five at a1 to fill ship data for b3 through b8", () => {
  const board = new GameBoard();
  board.placeShip("b3", 5, "horizontal");
  expect(board.array).toMatchObject(testFour);
});

it("3.3. if a ship is too long for valid placement horizontally, return null during array calculation", () => {
  const board = new GameBoard();
  expect(board.shipCoordinates("b7", 5, "horizontal")).toBe(null);
});

it("3.4. if a ship is too long for valid placement horizontally, return null during ship placement", () => {
  const board = new GameBoard();
  expect(board.placeShip("b7", 5, "horizontal")).toBe(null);
});

// ship coordinates vertically
it("4.0. expect ship coordinates vertically calculated", () => {
  const board = new GameBoard();
  expect(board.shipCoordinates("b2", 5, "vertical")).toStrictEqual([
    "b2",
    "c2",
    "d2",
    "e2",
    "f2",
  ]);
});

// ship placement vertically
it("5.1. expect gameboard to place ship length five at b2 to fill ship data for b2 through f2", () => {
  const board = new GameBoard();
  board.placeShip("b2", 5, "vertical");
  expect(board.array).toMatchObject(testFive);
});

it("5.2. if a ship is too long for valid placement vertically, return null during ship placement", () => {
  const board = new GameBoard();
  expect(board.placeShip("g5", 5, "vertical")).toBe(null);
});

test("5.3. board keeps track of ships placed in array", () => {
  const board = new GameBoard();
  expect(board.ships.length).toBe(0), 
  board.placeShip("b2", 5, "vertical");
  expect(board.ships.length).toBe(1);
});

// ship overlap
it("6.1. ship array should return null if it already has a ship there", () => {
  const board = new GameBoard();
  board.placeShip("b2", 5, "vertical");
  expect(board.checkOverlap(board.shipCoordinates("b2", 5, "horizontal"))).toBe(
    null
  );
});

it("6.2. ship array should return array if it doesn't have a ship there", () => {
  const board = new GameBoard();
  board.placeShip("b2", 5, "vertical");
  expect(
    board.checkOverlap(board.shipCoordinates("a1", 5, "horizontal"))
  ).toStrictEqual(["a1", "a2", "a3", "a4", "a5"]);
});

it("6.3. placeShip function should return null when placing a ship in occupied position", () => {
  const board = new GameBoard();
  board.placeShip("b2", 5, "vertical");
  expect(board.placeShip("b2", 5, "horizontal")).toBe(null);
});

// attacks on board
test("7.1. receiveAttack on b2 updates hit", () => {
  const board = new GameBoard();
  board.receiveAttack("b2");
  expect(board.array[11].hit).toBe(true);
});

test("7.2. receiveAttack on b2, if it has a ship, receiveAttack updates ships timesHit", () => {
  const board = new GameBoard();
  board.placeShip("b2", 5, "vertical");
  board.receiveAttack("b2");
  expect(board.array[11].ship.timesHit).toBe(1);
});

// check if all ships have been sunk
it("8.1. board will return false if no ships present", () => {
  const board = new GameBoard();
  expect(board.checkAllSunk()).toBe(false)
})

it("8.2. board will return false if some ships are not sunk yet", () => {
  const board = new GameBoard();
  board.placeShip("a1", 4, "vertical")
  board.placeShip("a8", 3, "horizontal")

  board.receiveAttack("a1")
  board.receiveAttack("b1")
  board.receiveAttack("c1")
  board.receiveAttack("d1")


  expect(board.checkAllSunk()).toBe(false)
})

it("8.3. board will return true if all of its ships are sunk", () => {
  const board = new GameBoard();
  board.placeShip("a1", 4, "vertical")
  board.placeShip("a8", 3, "horizontal")

  board.receiveAttack("a1")
  board.receiveAttack("b1")
  board.receiveAttack("c1")
  board.receiveAttack("d1")
  
  board.receiveAttack("a8")
  board.receiveAttack("a9")
  board.receiveAttack("a10")
  expect(board.checkAllSunk()).toBe(true)
})

// constants to test
const testTwo = [
  { data: "a1", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "a2", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "a3", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "a4", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "a5", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "a6", hit: false, ship: null },
  { data: "a7", hit: false, ship: null },
  { data: "a8", hit: false, ship: null },
  { data: "a9", hit: false, ship: null },
  { data: "a10", hit: false, ship: null },
  { data: "b1", hit: false, ship: null },
  { data: "b2", hit: false, ship: null },
  { data: "b3", hit: false, ship: null },
  { data: "b4", hit: false, ship: null },
  { data: "b5", hit: false, ship: null },
  { data: "b6", hit: false, ship: null },
  { data: "b7", hit: false, ship: null },
  { data: "b8", hit: false, ship: null },
  { data: "b9", hit: false, ship: null },
  { data: "b10", hit: false, ship: null },
  { data: "c1", hit: false, ship: null },
  { data: "c2", hit: false, ship: null },
  { data: "c3", hit: false, ship: null },
  { data: "c4", hit: false, ship: null },
  { data: "c5", hit: false, ship: null },
  { data: "c6", hit: false, ship: null },
  { data: "c7", hit: false, ship: null },
  { data: "c8", hit: false, ship: null },
  { data: "c9", hit: false, ship: null },
  { data: "c10", hit: false, ship: null },
  { data: "d1", hit: false, ship: null },
  { data: "d2", hit: false, ship: null },
  { data: "d3", hit: false, ship: null },
  { data: "d4", hit: false, ship: null },
  { data: "d5", hit: false, ship: null },
  { data: "d6", hit: false, ship: null },
  { data: "d7", hit: false, ship: null },
  { data: "d8", hit: false, ship: null },
  { data: "d9", hit: false, ship: null },
  { data: "d10", hit: false, ship: null },
  { data: "e1", hit: false, ship: null },
  { data: "e2", hit: false, ship: null },
  { data: "e3", hit: false, ship: null },
  { data: "e4", hit: false, ship: null },
  { data: "e5", hit: false, ship: null },
  { data: "e6", hit: false, ship: null },
  { data: "e7", hit: false, ship: null },
  { data: "e8", hit: false, ship: null },
  { data: "e9", hit: false, ship: null },
  { data: "e10", hit: false, ship: null },
  { data: "f1", hit: false, ship: null },
  { data: "f2", hit: false, ship: null },
  { data: "f3", hit: false, ship: null },
  { data: "f4", hit: false, ship: null },
  { data: "f5", hit: false, ship: null },
  { data: "f6", hit: false, ship: null },
  { data: "f7", hit: false, ship: null },
  { data: "f8", hit: false, ship: null },
  { data: "f9", hit: false, ship: null },
  { data: "f10", hit: false, ship: null },
  { data: "g1", hit: false, ship: null },
  { data: "g2", hit: false, ship: null },
  { data: "g3", hit: false, ship: null },
  { data: "g4", hit: false, ship: null },
  { data: "g5", hit: false, ship: null },
  { data: "g6", hit: false, ship: null },
  { data: "g7", hit: false, ship: null },
  { data: "g8", hit: false, ship: null },
  { data: "g9", hit: false, ship: null },
  { data: "g10", hit: false, ship: null },
  { data: "h1", hit: false, ship: null },
  { data: "h2", hit: false, ship: null },
  { data: "h3", hit: false, ship: null },
  { data: "h4", hit: false, ship: null },
  { data: "h5", hit: false, ship: null },
  { data: "h6", hit: false, ship: null },
  { data: "h7", hit: false, ship: null },
  { data: "h8", hit: false, ship: null },
  { data: "h9", hit: false, ship: null },
  { data: "h10", hit: false, ship: null },
  { data: "i1", hit: false, ship: null },
  { data: "i2", hit: false, ship: null },
  { data: "i3", hit: false, ship: null },
  { data: "i4", hit: false, ship: null },
  { data: "i5", hit: false, ship: null },
  { data: "i6", hit: false, ship: null },
  { data: "i7", hit: false, ship: null },
  { data: "i8", hit: false, ship: null },
  { data: "i9", hit: false, ship: null },
  { data: "i10", hit: false, ship: null },
  { data: "j1", hit: false, ship: null },
  { data: "j2", hit: false, ship: null },
  { data: "j3", hit: false, ship: null },
  { data: "j4", hit: false, ship: null },
  { data: "j5", hit: false, ship: null },
  { data: "j6", hit: false, ship: null },
  { data: "j7", hit: false, ship: null },
  { data: "j8", hit: false, ship: null },
  { data: "j9", hit: false, ship: null },
  { data: "j10", hit: false, ship: null },
];

const testThree = [
  { data: "a1", hit: false, ship: null },
  { data: "a2", hit: false, ship: null },
  { data: "a3", hit: false, ship: null },
  { data: "a4", hit: false, ship: null },
  { data: "a5", hit: false, ship: null },
  { data: "a6", hit: false, ship: null },
  { data: "a7", hit: false, ship: null },
  { data: "a8", hit: false, ship: null },
  { data: "a9", hit: false, ship: null },
  { data: "a10", hit: false, ship: null },
  { data: "b1", hit: false, ship: null },
  { data: "b2", hit: false, ship: null },
  { data: "b3", hit: false, ship: null },
  { data: "b4", hit: false, ship: null },
  { data: "b5", hit: false, ship: null },
  { data: "b6", hit: false, ship: null },
  { data: "b7", hit: false, ship: null },
  { data: "b8", hit: false, ship: null },
  { data: "b9", hit: false, ship: null },
  { data: "b10", hit: false, ship: null },
  { data: "c1", hit: false, ship: null },
  { data: "c2", hit: false, ship: null },
  { data: "c3", hit: false, ship: null },
  { data: "c4", hit: false, ship: null },
  { data: "c5", hit: false, ship: null },
  { data: "c6", hit: false, ship: null },
  { data: "c7", hit: false, ship: null },
  { data: "c8", hit: false, ship: null },
  { data: "c9", hit: false, ship: null },
  { data: "c10", hit: false, ship: null },
  { data: "d1", hit: false, ship: null },
  { data: "d2", hit: false, ship: null },
  { data: "d3", hit: false, ship: null },
  { data: "d4", hit: false, ship: null },
  { data: "d5", hit: false, ship: null },
  { data: "d6", hit: false, ship: null },
  { data: "d7", hit: false, ship: null },
  { data: "d8", hit: false, ship: null },
  { data: "d9", hit: false, ship: null },
  { data: "d10", hit: false, ship: null },
  { data: "e1", hit: false, ship: null },
  { data: "e2", hit: false, ship: null },
  { data: "e3", hit: false, ship: null },
  { data: "e4", hit: false, ship: null },
  { data: "e5", hit: false, ship: null },
  { data: "e6", hit: false, ship: null },
  { data: "e7", hit: false, ship: null },
  { data: "e8", hit: false, ship: null },
  { data: "e9", hit: false, ship: null },
  { data: "e10", hit: false, ship: null },
  { data: "f1", hit: false, ship: null },
  { data: "f2", hit: false, ship: null },
  { data: "f3", hit: false, ship: null },
  { data: "f4", hit: false, ship: null },
  { data: "f5", hit: false, ship: null },
  { data: "f6", hit: false, ship: null },
  { data: "f7", hit: false, ship: null },
  { data: "f8", hit: false, ship: null },
  { data: "f9", hit: false, ship: null },
  { data: "f10", hit: false, ship: null },
  { data: "g1", hit: false, ship: null },
  { data: "g2", hit: false, ship: null },
  { data: "g3", hit: false, ship: null },
  { data: "g4", hit: false, ship: null },
  { data: "g5", hit: false, ship: null },
  { data: "g6", hit: false, ship: null },
  { data: "g7", hit: false, ship: null },
  { data: "g8", hit: false, ship: null },
  { data: "g9", hit: false, ship: null },
  { data: "g10", hit: false, ship: null },
  { data: "h1", hit: false, ship: null },
  { data: "h2", hit: false, ship: null },
  { data: "h3", hit: false, ship: null },
  { data: "h4", hit: false, ship: null },
  { data: "h5", hit: false, ship: null },
  { data: "h6", hit: false, ship: null },
  { data: "h7", hit: false, ship: null },
  { data: "h8", hit: false, ship: null },
  { data: "h9", hit: false, ship: null },
  { data: "h10", hit: false, ship: null },
  { data: "i1", hit: false, ship: null },
  { data: "i2", hit: false, ship: null },
  { data: "i3", hit: false, ship: null },
  { data: "i4", hit: false, ship: null },
  { data: "i5", hit: false, ship: null },
  { data: "i6", hit: false, ship: null },
  { data: "i7", hit: false, ship: null },
  { data: "i8", hit: false, ship: null },
  { data: "i9", hit: false, ship: null },
  { data: "i10", hit: false, ship: null },
  { data: "j1", hit: false, ship: null },
  { data: "j2", hit: false, ship: null },
  { data: "j3", hit: false, ship: null },
  { data: "j4", hit: false, ship: null },
  { data: "j5", hit: false, ship: null },
  { data: "j6", hit: false, ship: null },
  { data: "j7", hit: false, ship: null },
  { data: "j8", hit: false, ship: null },
  { data: "j9", hit: false, ship: null },
  { data: "j10", hit: false, ship: null },
];

const testFour = [
  { data: "a1", hit: false, ship: null },
  { data: "a2", hit: false, ship: null },
  { data: "a3", hit: false, ship: null },
  { data: "a4", hit: false, ship: null },
  { data: "a5", hit: false, ship: null },
  { data: "a6", hit: false, ship: null },
  { data: "a7", hit: false, ship: null },
  { data: "a8", hit: false, ship: null },
  { data: "a9", hit: false, ship: null },
  { data: "a10", hit: false, ship: null },
  { data: "b1", hit: false, ship: null },
  { data: "b2", hit: false, ship: null },
  { data: "b3", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "b4", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "b5", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "b6", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "b7", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "b8", hit: false, ship: null },
  { data: "b9", hit: false, ship: null },
  { data: "b10", hit: false, ship: null },
  { data: "c1", hit: false, ship: null },
  { data: "c2", hit: false, ship: null },
  { data: "c3", hit: false, ship: null },
  { data: "c4", hit: false, ship: null },
  { data: "c5", hit: false, ship: null },
  { data: "c6", hit: false, ship: null },
  { data: "c7", hit: false, ship: null },
  { data: "c8", hit: false, ship: null },
  { data: "c9", hit: false, ship: null },
  { data: "c10", hit: false, ship: null },
  { data: "d1", hit: false, ship: null },
  { data: "d2", hit: false, ship: null },
  { data: "d3", hit: false, ship: null },
  { data: "d4", hit: false, ship: null },
  { data: "d5", hit: false, ship: null },
  { data: "d6", hit: false, ship: null },
  { data: "d7", hit: false, ship: null },
  { data: "d8", hit: false, ship: null },
  { data: "d9", hit: false, ship: null },
  { data: "d10", hit: false, ship: null },
  { data: "e1", hit: false, ship: null },
  { data: "e2", hit: false, ship: null },
  { data: "e3", hit: false, ship: null },
  { data: "e4", hit: false, ship: null },
  { data: "e5", hit: false, ship: null },
  { data: "e6", hit: false, ship: null },
  { data: "e7", hit: false, ship: null },
  { data: "e8", hit: false, ship: null },
  { data: "e9", hit: false, ship: null },
  { data: "e10", hit: false, ship: null },
  { data: "f1", hit: false, ship: null },
  { data: "f2", hit: false, ship: null },
  { data: "f3", hit: false, ship: null },
  { data: "f4", hit: false, ship: null },
  { data: "f5", hit: false, ship: null },
  { data: "f6", hit: false, ship: null },
  { data: "f7", hit: false, ship: null },
  { data: "f8", hit: false, ship: null },
  { data: "f9", hit: false, ship: null },
  { data: "f10", hit: false, ship: null },
  { data: "g1", hit: false, ship: null },
  { data: "g2", hit: false, ship: null },
  { data: "g3", hit: false, ship: null },
  { data: "g4", hit: false, ship: null },
  { data: "g5", hit: false, ship: null },
  { data: "g6", hit: false, ship: null },
  { data: "g7", hit: false, ship: null },
  { data: "g8", hit: false, ship: null },
  { data: "g9", hit: false, ship: null },
  { data: "g10", hit: false, ship: null },
  { data: "h1", hit: false, ship: null },
  { data: "h2", hit: false, ship: null },
  { data: "h3", hit: false, ship: null },
  { data: "h4", hit: false, ship: null },
  { data: "h5", hit: false, ship: null },
  { data: "h6", hit: false, ship: null },
  { data: "h7", hit: false, ship: null },
  { data: "h8", hit: false, ship: null },
  { data: "h9", hit: false, ship: null },
  { data: "h10", hit: false, ship: null },
  { data: "i1", hit: false, ship: null },
  { data: "i2", hit: false, ship: null },
  { data: "i3", hit: false, ship: null },
  { data: "i4", hit: false, ship: null },
  { data: "i5", hit: false, ship: null },
  { data: "i6", hit: false, ship: null },
  { data: "i7", hit: false, ship: null },
  { data: "i8", hit: false, ship: null },
  { data: "i9", hit: false, ship: null },
  { data: "i10", hit: false, ship: null },
  { data: "j1", hit: false, ship: null },
  { data: "j2", hit: false, ship: null },
  { data: "j3", hit: false, ship: null },
  { data: "j4", hit: false, ship: null },
  { data: "j5", hit: false, ship: null },
  { data: "j6", hit: false, ship: null },
  { data: "j7", hit: false, ship: null },
  { data: "j8", hit: false, ship: null },
  { data: "j9", hit: false, ship: null },
  { data: "j10", hit: false, ship: null },
];

const testFive = [
  { data: "a1", hit: false, ship: null },
  { data: "a2", hit: false, ship: null },
  { data: "a3", hit: false, ship: null },
  { data: "a4", hit: false, ship: null },
  { data: "a5", hit: false, ship: null },
  { data: "a6", hit: false, ship: null },
  { data: "a7", hit: false, ship: null },
  { data: "a8", hit: false, ship: null },
  { data: "a9", hit: false, ship: null },
  { data: "a10", hit: false, ship: null },
  { data: "b1", hit: false, ship: null },
  { data: "b2", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "b3", hit: false, ship: null },
  { data: "b4", hit: false, ship: null },
  { data: "b5", hit: false, ship: null },
  { data: "b6", hit: false, ship: null },
  { data: "b7", hit: false, ship: null },
  { data: "b8", hit: false, ship: null },
  { data: "b9", hit: false, ship: null },
  { data: "b10", hit: false, ship: null },
  { data: "c1", hit: false, ship: null },
  { data: "c2", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "c3", hit: false, ship: null },
  { data: "c4", hit: false, ship: null },
  { data: "c5", hit: false, ship: null },
  { data: "c6", hit: false, ship: null },
  { data: "c7", hit: false, ship: null },
  { data: "c8", hit: false, ship: null },
  { data: "c9", hit: false, ship: null },
  { data: "c10", hit: false, ship: null },
  { data: "d1", hit: false, ship: null },
  { data: "d2", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "d3", hit: false, ship: null },
  { data: "d4", hit: false, ship: null },
  { data: "d5", hit: false, ship: null },
  { data: "d6", hit: false, ship: null },
  { data: "d7", hit: false, ship: null },
  { data: "d8", hit: false, ship: null },
  { data: "d9", hit: false, ship: null },
  { data: "d10", hit: false, ship: null },
  { data: "e1", hit: false, ship: null },
  { data: "e2", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "e3", hit: false, ship: null },
  { data: "e4", hit: false, ship: null },
  { data: "e5", hit: false, ship: null },
  { data: "e6", hit: false, ship: null },
  { data: "e7", hit: false, ship: null },
  { data: "e8", hit: false, ship: null },
  { data: "e9", hit: false, ship: null },
  { data: "e10", hit: false, ship: null },
  { data: "f1", hit: false, ship: null },
  { data: "f2", hit: false, ship: { length: 5, sunk: false, timesHit: 0 } },
  { data: "f3", hit: false, ship: null },
  { data: "f4", hit: false, ship: null },
  { data: "f5", hit: false, ship: null },
  { data: "f6", hit: false, ship: null },
  { data: "f7", hit: false, ship: null },
  { data: "f8", hit: false, ship: null },
  { data: "f9", hit: false, ship: null },
  { data: "f10", hit: false, ship: null },
  { data: "g1", hit: false, ship: null },
  { data: "g2", hit: false, ship: null },
  { data: "g3", hit: false, ship: null },
  { data: "g4", hit: false, ship: null },
  { data: "g5", hit: false, ship: null },
  { data: "g6", hit: false, ship: null },
  { data: "g7", hit: false, ship: null },
  { data: "g8", hit: false, ship: null },
  { data: "g9", hit: false, ship: null },
  { data: "g10", hit: false, ship: null },
  { data: "h1", hit: false, ship: null },
  { data: "h2", hit: false, ship: null },
  { data: "h3", hit: false, ship: null },
  { data: "h4", hit: false, ship: null },
  { data: "h5", hit: false, ship: null },
  { data: "h6", hit: false, ship: null },
  { data: "h7", hit: false, ship: null },
  { data: "h8", hit: false, ship: null },
  { data: "h9", hit: false, ship: null },
  { data: "h10", hit: false, ship: null },
  { data: "i1", hit: false, ship: null },
  { data: "i2", hit: false, ship: null },
  { data: "i3", hit: false, ship: null },
  { data: "i4", hit: false, ship: null },
  { data: "i5", hit: false, ship: null },
  { data: "i6", hit: false, ship: null },
  { data: "i7", hit: false, ship: null },
  { data: "i8", hit: false, ship: null },
  { data: "i9", hit: false, ship: null },
  { data: "i10", hit: false, ship: null },
  { data: "j1", hit: false, ship: null },
  { data: "j2", hit: false, ship: null },
  { data: "j3", hit: false, ship: null },
  { data: "j4", hit: false, ship: null },
  { data: "j5", hit: false, ship: null },
  { data: "j6", hit: false, ship: null },
  { data: "j7", hit: false, ship: null },
  { data: "j8", hit: false, ship: null },
  { data: "j9", hit: false, ship: null },
  { data: "j10", hit: false, ship: null },
];
