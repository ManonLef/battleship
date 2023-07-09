const containerOne = document.querySelector(".player-one-container");
const containerTwo = document.querySelector(".player-two-container");
const info = document.querySelector(".info");

function renderGameBoard(array, player) {
  let container = containerOne;
  if (player === "playerTwo") container = containerTwo;
  if (container === containerOne) removeChildren(container);

  array.forEach((item) => {
    createCell(item, container, player);
  });
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createCell(item, container, player) {
  const cell = document.createElement("div");
  cell.className = "cell"
  cell.setAttribute("data-coord", item.data);
  cell.textContent = item.data;

  if (player === "playerTwo") cell.className = "ai-cell";

  if (checkShip(item)) cell.style.backgroundColor = "gray";

  container.append(cell);

  // for dragging:
  if (cell.className !== "ai-cell") {
    cell.addEventListener("dragover", onDragOver);
    cell.addEventListener("drop", onDrop);
  }
}

function checkShip(item) {
  if (item.ship !== null) return true;
  return false;
}

function renderEvent(event) {
  console.log("view", event);

  let cell = "";
  if (event.type === "playerMoveMade") {
    cell = document.querySelector(
      `.ai-cell[data-coord="${event.detail.coord}"]`
    );
  } else {
    cell = document.querySelector(`[data-coord="${event.detail.coord}"]`);
  }

  console.log(event.detail.sunk);
  if (event.detail.sunk == null) {
    cell.classList.add("hit-water");
  } else if (event.detail.sunk[0] === false) cell.classList.add("hit-ship");
  else {
    cell.classList.add("hit-ship");
    event.detail.sunk[1].forEach((coord) => {
      if (event.type === "playerMoveMade") {
        document
          .querySelector(`.ai-cell[data-coord="${coord}"]`)
          .classList.add("sunk");
      } else {
        document.querySelector(`[data-coord="${coord}"]`).classList.add("sunk");
      }
    });
  }
}

window.addEventListener("aiMoveMade", renderEvent);
window.addEventListener("playerMoveMade", renderEvent);

// - drag and drop
// - render a ship
function createDroppableShip(length, orientation) {
  const ship = document.createElement("div");
  // set ship to be draggable
  ship.setAttribute("draggable", "true");

  ship.className = "ship";

  // styling:
  if (orientation === "horizontal") {
    ship.style.height = "2rem";
    ship.style.width = length * 2 + "rem";  
  } else {
    ship.style.height = length * 2 + "rem";
    ship.style.width = "2rem";  
  }

  document.querySelector(".ship-container").append(ship);

  // on drag start event
  const data = `${length},${orientation}`;
  ship.addEventListener("dragstart", (event) => {
    console.log("drag started with data", data);
    event.dataTransfer.setData("text/plain", data);
    event.dataTransfer.effectAllowed = "all";
  });
}

// functions for the game cells drag and drop
function onDragOver(event) {
  // could be used to add a style to the box dragged over, like adding a border to the dropzone
  event.preventDefault();
  const cellCoord = this.getAttribute("data-coord");
  console.log("something's dragging over me", cellCoord);
}

function onDrop(event) {
  event.preventDefault();
  console.log(event);
  const cellCoord = this.getAttribute("data-coord");
  const data = event.dataTransfer.getData("text/plain");
  const dataToFeed = `${cellCoord}, ${data}`;
  const dataArray = dataToFeed.split(",");
  console.log(dataToFeed);
  dispatchEvent(
    new CustomEvent("shipDrop", {
      detail: {
        dropData: dataArray,
      },
    })
  );
}

// create container for ship droppings
// then create function which renders a ship based on the amount of ships already present
function dropShipsInfo() {
  const dropInfo = document.createElement("div")
  dropInfo.className = "drop-header"
  dropInfo.textContent = "Drag one of these ships to your waters"
  info.append(dropInfo)

  const shipContainer = document.createElement("div")
  shipContainer.className = "ship-container"
  info.append(shipContainer)

  createDroppableShip(2, "horizontal")
  createDroppableShip(2, "vertical")
}

// ship rendering:

dropShipsInfo()

function placeNextShip(event) {
  console.log("ship number", event.detail.dropped)
  // remove ships and render new ones
  removeChildren(document.querySelector(".ship-container"))
  const ships = [3, 3, 4, 5]
  const index = event.detail.dropped
  // if all ships have been placed
  if (event.detail.dropped === 4) {
    gameStarted()
    // remove ships
    return window.removeEventListener("nextShip", placeNextShip)
    // render something else
  }
  createDroppableShip(ships[index], "horizontal")
  createDroppableShip(ships[index], "vertical")
}

function gameStarted() {
  document.querySelector(".drop-header").textContent = "game in progress"
}

window.addEventListener("nextShip", placeNextShip)

export { renderGameBoard };
