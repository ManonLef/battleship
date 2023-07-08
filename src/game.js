import Player from "./player";
import { renderGameBoard } from "./view";

const human = new Player();
const ai = new Player();

// human.board.placeRandomShips()
window.addEventListener("shipDrop", (event) => {
  console.log(event.detail.dropData)
  const shipData = event.detail.dropData
  human.board.placeShip(...shipData)
  console.log(human.board)
  renderGameBoard(human.board.array, "playerOne");
})
ai.board.placeRandomShips()

// render the human board left
renderGameBoard(human.board.array, "playerOne");

// render the ai blank board to the right. This should not display any ships
// since it belongs to the opponent and we have to guess
renderGameBoard(human.OpponentBoard, "playerTwo");

// the game can begin now that the ships are placed.
function game() {
  // breaks out when one of the players has all ships sunk
  if (ai.board.checkAllSunk() || human.board.checkAllSunk()) return endGame();

  // only when the currentplayer is human, we should register clicks
  addAttackListeners();

  window.addEventListener("playerMoveMade", switchToAi);
}

function switchToAi(event) {
  console.log(event);
  removeEventlisteners();
  setTimeout(() => {
    ai.aiAttack(human);
    game();
  }, 500);
}

function endGame() {
  console.log("someone's ships are all sunk");
}

function humanPlay() {
  const coord = this.getAttribute("data-coord");
  // --> if OpponentBoard coord is already hit, do nothing
  try {
    dispatchEvent(
      new CustomEvent("playerMoveMade", {
        detail: {
          sunk: human.attackEnemy(ai, coord),
          coord: coord,
        },
      })
    );
  } catch (e) {
    console.error(e);
    return null;
  }
  console.log(ai.board);
}

function addAttackListeners() {
  document
    .querySelectorAll(".ai-cell")
    .forEach((cell) => cell.addEventListener("mousedown", humanPlay));
}

function removeEventlisteners() {
  document
    .querySelectorAll(".ai-cell")
    .forEach((cell) => cell.removeEventListener("mousedown", humanPlay));
}

game();
