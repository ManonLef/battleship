import Player from "./player";

const human = new Player();
const ai = new Player();

test("1.1. expect human to attack computer a1 coordinate and update the hit", () => {
  const human = new Player();
  const ai = new Player();
  human.attackEnemy(ai, "a1");
  expect(ai.board.array[0].hit).toBe(true);
});

test("1.2. when AI attack, it will update it's own opponentboard", () => {
  const human = new Player();
  const ai = new Player();
  for (let i = 0; i <= 99; i++) {
    ai.aiAttack(human);
  }
  expect(ai.aiOpponentBoard.length).toBe(0);
});

test("1.3. when AI attack 99 times, all opponent cells will be hit", () => {
  const human = new Player();
  const ai = new Player();
  for (let i = 0; i <= 99; i++) {
    ai.aiAttack(human);
  }
  expect(human.board.array).toMatchObject(testThree);
});

const testThree = [
  { data: "a1", hit: true, ship: null },
  { data: "a2", hit: true, ship: null },
  { data: "a3", hit: true, ship: null },
  { data: "a4", hit: true, ship: null },
  { data: "a5", hit: true, ship: null },
  { data: "a6", hit: true, ship: null },
  { data: "a7", hit: true, ship: null },
  { data: "a8", hit: true, ship: null },
  { data: "a9", hit: true, ship: null },
  { data: "a10", hit: true, ship: null },
  { data: "b1", hit: true, ship: null },
  { data: "b2", hit: true, ship: null },
  { data: "b3", hit: true, ship: null },
  { data: "b4", hit: true, ship: null },
  { data: "b5", hit: true, ship: null },
  { data: "b6", hit: true, ship: null },
  { data: "b7", hit: true, ship: null },
  { data: "b8", hit: true, ship: null },
  { data: "b9", hit: true, ship: null },
  { data: "b10", hit: true, ship: null },
  { data: "c1", hit: true, ship: null },
  { data: "c2", hit: true, ship: null },
  { data: "c3", hit: true, ship: null },
  { data: "c4", hit: true, ship: null },
  { data: "c5", hit: true, ship: null },
  { data: "c6", hit: true, ship: null },
  { data: "c7", hit: true, ship: null },
  { data: "c8", hit: true, ship: null },
  { data: "c9", hit: true, ship: null },
  { data: "c10", hit: true, ship: null },
  { data: "d1", hit: true, ship: null },
  { data: "d2", hit: true, ship: null },
  { data: "d3", hit: true, ship: null },
  { data: "d4", hit: true, ship: null },
  { data: "d5", hit: true, ship: null },
  { data: "d6", hit: true, ship: null },
  { data: "d7", hit: true, ship: null },
  { data: "d8", hit: true, ship: null },
  { data: "d9", hit: true, ship: null },
  { data: "d10", hit: true, ship: null },
  { data: "e1", hit: true, ship: null },
  { data: "e2", hit: true, ship: null },
  { data: "e3", hit: true, ship: null },
  { data: "e4", hit: true, ship: null },
  { data: "e5", hit: true, ship: null },
  { data: "e6", hit: true, ship: null },
  { data: "e7", hit: true, ship: null },
  { data: "e8", hit: true, ship: null },
  { data: "e9", hit: true, ship: null },
  { data: "e10", hit: true, ship: null },
  { data: "f1", hit: true, ship: null },
  { data: "f2", hit: true, ship: null },
  { data: "f3", hit: true, ship: null },
  { data: "f4", hit: true, ship: null },
  { data: "f5", hit: true, ship: null },
  { data: "f6", hit: true, ship: null },
  { data: "f7", hit: true, ship: null },
  { data: "f8", hit: true, ship: null },
  { data: "f9", hit: true, ship: null },
  { data: "f10", hit: true, ship: null },
  { data: "g1", hit: true, ship: null },
  { data: "g2", hit: true, ship: null },
  { data: "g3", hit: true, ship: null },
  { data: "g4", hit: true, ship: null },
  { data: "g5", hit: true, ship: null },
  { data: "g6", hit: true, ship: null },
  { data: "g7", hit: true, ship: null },
  { data: "g8", hit: true, ship: null },
  { data: "g9", hit: true, ship: null },
  { data: "g10", hit: true, ship: null },
  { data: "h1", hit: true, ship: null },
  { data: "h2", hit: true, ship: null },
  { data: "h3", hit: true, ship: null },
  { data: "h4", hit: true, ship: null },
  { data: "h5", hit: true, ship: null },
  { data: "h6", hit: true, ship: null },
  { data: "h7", hit: true, ship: null },
  { data: "h8", hit: true, ship: null },
  { data: "h9", hit: true, ship: null },
  { data: "h10", hit: true, ship: null },
  { data: "i1", hit: true, ship: null },
  { data: "i2", hit: true, ship: null },
  { data: "i3", hit: true, ship: null },
  { data: "i4", hit: true, ship: null },
  { data: "i5", hit: true, ship: null },
  { data: "i6", hit: true, ship: null },
  { data: "i7", hit: true, ship: null },
  { data: "i8", hit: true, ship: null },
  { data: "i9", hit: true, ship: null },
  { data: "i10", hit: true, ship: null },
  { data: "j1", hit: true, ship: null },
  { data: "j2", hit: true, ship: null },
  { data: "j3", hit: true, ship: null },
  { data: "j4", hit: true, ship: null },
  { data: "j5", hit: true, ship: null },
  { data: "j6", hit: true, ship: null },
  { data: "j7", hit: true, ship: null },
  { data: "j8", hit: true, ship: null },
  { data: "j9", hit: true, ship: null },
  { data: "j10", hit: true, ship: null },
];
