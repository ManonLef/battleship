import GameBoard from "./gameBoard";

it("1. expect ship coordinates horizantally calculated", () => {
  const board = new GameBoard();
  expect(board.shipCoordinatesHorizontal("a1", 5)).toStrictEqual([
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
  ]);
});

it("2. expect gameboard to place ship length five at a1 to fill ship data for a1 through a5", () => {
  const board = new GameBoard();
  board.placeShip("a1", 5);
  expect(board.array).toMatchObject(testTwo);
});

it("3. expect gameboard array to be as tested", () => {
  const board = new GameBoard();
  expect(board.array).toStrictEqual(testThree);
});

it("4. expect gameboard to place ship length five at a1 to fill ship data for b3 through b8", () => {
  const board = new GameBoard();
  board.placeShip("b3", 5);
  expect(board.array).toMatchObject(testFour);
});

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
  { data: "b3", hit: false, ship: { length: 5, sunk: false, timesHit: 0 }  },
  { data: "b4", hit: false, ship: { length: 5, sunk: false, timesHit: 0 }  },
  { data: "b5", hit: false, ship: { length: 5, sunk: false, timesHit: 0 }  },
  { data: "b6", hit: false, ship: { length: 5, sunk: false, timesHit: 0 }  },
  { data: "b7", hit: false, ship: { length: 5, sunk: false, timesHit: 0 }  },
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