import Player from "./player";

const human = new Player
const ai = new Player

test("1.1. expect human to attack computer a1 coordinate and update the hit", () => {
  human.attackEnemy(ai, "a1")
  expect(ai.board.array[0].hit).toBe(true)
})