import emitEvent from "./dispatcher";

const containerOne = document.querySelector(".player-one-container");
const containerTwo = document.querySelector(".player-two-container");
const info = document.querySelector(".info");

export default function renderBoards(playerArray, aiArray) {
  removeChildren(containerOne);
  removeChildren(containerTwo)

  playerArray.forEach((item) => {
    createCell(item, containerOne, "human");
  });
  aiArray.forEach((item) => {
    createCell(item, containerTwo, "ai");
  });
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createCell(item, container, player) {
  const cell = document.createElement("div");
  cell.setAttribute("data-coord", item.data);

  if (player === "ai") cell.className = "ai-cell";
  else {
    cell.className = "cell";
    addCellDragDropListeners(cell);
  }

  if (hasShip(item)) cell.classList.add("my-ships");
  container.append(cell);
}

function addCellDragDropListeners(cell) {
  cell.addEventListener("dragover", onDragOver);
  cell.addEventListener("drop", onDrop);
}

function hasShip(item) {
  if (item.ship !== null) return true;
  return false;
}

function renderAttack(event) {
  let cell;
  const coords = event.detail.coord;

  if (event.type === "playerMoveMade") {
    cell = document.querySelector(`.ai-cell[data-coord="${coords}"]`);
    updateInfo("it's the computer's turn");
  } else {
    cell = document.querySelector(`[data-coord="${coords}"]`);
    updateInfo("it's your turn to attack");
  }

  if (event.detail.sunk === null) {
    hitWater(cell);
  } else {
    hitShipNotSunk(cell);
    if (event.detail.sunk[0] !== false) {
      event.detail.sunk[1].forEach((coord) => {
        if (event.type === "playerMoveMade") {
          cell = document.querySelector(`.ai-cell[data-coord="${coord}"]`);
        } else {
          cell = document.querySelector(`[data-coord="${coord}"]`);
        }
        hitShipAndSunk(cell);
      });
    }
  }
}

function hitWater(cell) {
  const cellToEdit = cell;
  cellToEdit.classList.add("hit-water");
  cellToEdit.textContent = "〰";
}

function hitShipNotSunk(cell) {
  const cellToEdit = cell;
  cellToEdit.classList.add("hit-ship");
  cellToEdit.textContent = "✧";
}

function hitShipAndSunk(cell) {
  const cellToEdit = cell;
  cellToEdit.classList.add("sunk");
  cellToEdit.textContent = "☠";
}

function createDroppableShip(length, orientation) {
  const ship = document.createElement("div");
  ship.setAttribute("draggable", "true");
  ship.className = "ship";

  if (orientation === "vertical") {
    ship.style["flex-direction"] = "column";
  }

  for (let i = 0; i < length; i += 1) {
    const cell = document.createElement("div");
    cell.className = "ship-cell";
    ship.append(cell);
  }

  document.querySelector(".ship-container").append(ship);

  const data = `${length},${orientation}`;
  ship.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", data);
  });
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  const cellCoord = this.getAttribute("data-coord");
  const data = event.dataTransfer.getData("text/plain");
  const dataToFeed = `${cellCoord}, ${data}`;
  const dataArray = dataToFeed.split(",");

  return emitEvent("shipDrop", { dropData: dataArray });
}

// create container for ship droppings
// then create function which renders a ship based on the amount of ships already present
function dropShipsInfo() {
  const dropInfo = document.createElement("div");
  dropInfo.className = "info-header";
  info.append(dropInfo);

  updateInfo("Drag one of these ships to your waters");

  const shipContainer = document.createElement("div");
  shipContainer.className = "ship-container";
  info.append(shipContainer);

  createDroppableShip(2, "horizontal");
  createDroppableShip(2, "vertical");
}

function addRandomShipsButton() {
  const random = document.createElement("button");
  random.textContent = "or click for random ships";
  random.addEventListener("click", playerChoseRandom);
  info.append(random);
}

function playerChoseRandom() {
  emitEvent("randomShipsPlayer", { detail: null });
  info.removeChild(info.lastChild);
  updateInfo("Make your first move");
}

function placeNextShip(event) {
  removeChildren(document.querySelector(".ship-container"));
  const ships = [3, 3, 4, 5];
  const index = event.detail.dropped;
  // if all ships have been placed
  if (event.detail.dropped === 4) {
    endShipPlacement();
  }
  createDroppableShip(ships[index], "horizontal");
  createDroppableShip(ships[index], "vertical");
}

function updateInfo(msg) {
  const header = document.querySelector(".info-header");
  header.textContent = msg;
}

// starting game
function gameStart() {
  dropShipsInfo();
  addRandomShipsButton();
  window.addEventListener("shipPlaced", placeNextShip);
}

// ending ship placement
function endShipPlacement() {
  updateInfo("attack your enemy");
  window.removeEventListener("shipPlaced", placeNextShip);
  info.removeChild(info.lastChild);
  // add listeners for ai and player move renders plus endGame
  window.addEventListener("aiMoveMade", renderAttack);
  window.addEventListener("playerMoveMade", renderAttack);
  window.addEventListener("end", endGame);
}

// ending game
function endGame(event) {
  removeTurnListeners();
  updateInfo(event.detail.msg);
}

function removeTurnListeners() {
  window.removeEventListener("aiMoveMade", renderAttack);
  window.removeEventListener("playerMoveMade", renderAttack);
}

gameStart();
