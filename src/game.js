import Player from "./player";
import { renderGameBoard } from "./view";

const human = new Player();
const ai = new Player();

// render the boards
renderGameBoard(human.board.array, "playerOne");
renderGameBoard(human.OpponentBoard, "playerTwo");

// human has to place all ships before game really starts
window.addEventListener("shipDrop", humanPlacing)

function humanPlacing(event) {
  const shipData = event.detail.dropData
  human.board.placeShip(...shipData)
  renderGameBoard(human.board.array, "playerOne");
  if (human.board.ships.length === 5) {
    startGame()
  }
}

// clean up eventListeners and have Ai place its ships
function startGame() {
  window.removeEventListener("shipDrop", humanPlacing)
  ai.board.placeRandomShips()
  game()
}

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
  if (ai.board.checkAllSunk() || human.board.checkAllSunk()) return endGame();
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

