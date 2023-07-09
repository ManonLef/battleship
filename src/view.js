const containerOne = document.querySelector(".player-one-container");
const containerTwo = document.querySelector(".player-two-container");

function renderGameBoard(array, player) {
  let container = containerOne;
  if (player === "playerTwo") container = containerTwo;
  if (container === containerOne) removeSquares(container);

  array.forEach((item) => {
    createCell(item, container, player);
  });
}

function removeSquares(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createCell(item, container, player) {
  const cell = document.createElement("div");
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
  ship.style.backgroundColor = "red";
  ship.textContent = "ship";
  // set ship to be draggable
  ship.setAttribute("draggable", "true");

  document.querySelector("body").append(ship);

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

createDroppableShip(3, "horizontal");
createDroppableShip(5, "vertical");

export { renderGameBoard };
