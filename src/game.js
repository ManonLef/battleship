import Player from "./player";
import renderBoards from "./view";
import emitEvent from "./dispatcher";
import GameBoard from "./gameBoard";

let human = new Player();
let ai = new Player();

// game flow
function placeShips() {
  human = new Player();
  ai = new Player();
  renderBoards(human.board.array, human.OpponentBoard);
  addShipPlaceListeners();
}

function startGame() {
  removeShipPlaceListeners();
  ai.board.placeRandomShips();
  game("human");
}

function game(player = "ai") {
  if (checkWinner()) return endGame();
  if (player === "human") {
    addAttackListeners();
    addPlayerMoveListener();
  } else {
    removeAttackListeners();
    removePlayerMoveListener();
    setTimeout(() => {
      ai.aiAttack(human);
      game("human");
    }, 500);
  }
}

function checkWinner() {
  if (ai.board.checkAllSunk() || human.board.checkAllSunk()) return true;
  return false;
}

function endGame() {
  // remove listeners and consider showing option for new game
  let winningMsg = "";

  if (ai.board.checkAllSunk())
    winningMsg = "You've sunk all your opponent's pinnaces!";
  else winningMsg = "The computer sunk all your pinnaces";
  emitEvent("end", { msg: winningMsg });
}

// listeners
function addShipPlaceListeners() {
  window.addEventListener("shipDrop", humanPlacing);
  window.addEventListener("randomShipsPlayer", placeRandom);
}

function removeShipPlaceListeners() {
  window.removeEventListener("shipDrop", humanPlacing);
  window.removeEventListener("randomShipsPlayer", placeRandom);
}

function addAttackListeners() {
  document
    .querySelectorAll(".ai-cell")
    .forEach((cell) => cell.addEventListener("mousedown", humanPlay));
}

function removeAttackListeners() {
  document
    .querySelectorAll(".ai-cell")
    .forEach((cell) => cell.removeEventListener("mousedown", humanPlay));
}

function addPlayerMoveListener() {
  window.addEventListener("playerMoveMade", game);
}

function removePlayerMoveListener() {
  window.removeEventListener("playerMoveMade", game);
}

// helpers for ship placement
function placeRandom() {
  window.removeEventListener("randomShipsPlayer", placeRandom);
  human.board = new GameBoard();
  human.board.placeRandomShips();
  renderBoards(human.board.array, human.OpponentBoard);
  startGame();
}

function humanPlacing(event) {
  const shipData = event.detail.dropData;
  human.board.placeShip(...shipData);
  renderBoards(human.board.array, human.OpponentBoard);
  if (human.board.ships.length === 5) {
    startGame();
  }
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

// startup function
placeShips();
