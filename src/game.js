import Player from "./player";
import renderBoards from "./view";
import emitEvent from "./dispatcher";
import GameBoard from "./gameBoard";

const human = new Player();
const ai = new Player();

function startNewGame() {
  renderBoards(human.board.array, human.OpponentBoard);
}

function addShipPlaceListeners() {
  window.addEventListener("shipDrop", humanPlacing);
  window.addEventListener("randomShipsPlayer", placeRandom)  
}

function removeShipPlaceListeners() {
  window.removeEventListener("shipDrop", humanPlacing);
  window.removeEventListener("randomShipsPlayer", placeRandom)  
}

startNewGame()
// human has to place all ships before game really starts

function placeRandom() {
  window.removeEventListener("randomShipsPlayer", placeRandom)
  human.board = new GameBoard
  human.board.placeRandomShips()
  renderBoards(human.board.array, human.OpponentBoard);
  startGame()
}

function humanPlacing(event) {
  const shipData = event.detail.dropData;
  human.board.placeShip(...shipData);
  renderBoards(human.board.array, human.OpponentBoard);
  if (human.board.ships.length === 5) {
    startGame();
  }
}

// clean up eventListeners and have Ai place its ships
function startGame() {
  window.removeEventListener("shipDrop", humanPlacing);
  ai.board.placeRandomShips();
  game();
}

// the game can begin now that the ships are placed.
function game() {
  // breaks out when one of the players has all ships sunk
  if (ai.board.checkAllSunk() || human.board.checkAllSunk()) return endGame();
  // only when the current Player is human, we should register clicks
  addAttackListeners();
  window.addEventListener("playerMoveMade", switchToAi);
}

function switchToAi() {
  removeEventlisteners();
  if (ai.board.checkAllSunk() || human.board.checkAllSunk()) return endGame();
  setTimeout(() => {
    ai.aiAttack(human);
    game();
  }, 500);
}

function endGame() {
  let winningMsg = "";

  if (ai.board.checkAllSunk())
    winningMsg = "You've sunk all your opponent's pinnaces!";
  else winningMsg = "The computer sunk all your pinnaces";
  emitEvent("end", { msg: winningMsg });
}

function humanPlay() {
  const coord = this.getAttribute("data-coord");
  try {
    emitEvent("playerMoveMade", {
      sunk: human.attackEnemy(ai, coord),
      coord: coord,
    });
  } catch (e) {
    return null;
  }
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
