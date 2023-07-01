const containerOne = document.querySelector(".player-one-container");
const containerTwo = document.querySelector(".player-two-container");

function renderGameBoard(array, player) {
  let container = containerOne;
  if (player === "playerTwo") container = containerTwo;

  array.forEach((item) => {
    createCell(item, container, player);
  });
}

function createCell(item, container, player) {
  const cell = document.createElement("div");
  cell.setAttribute("data-coord", item.data);
  cell.textContent = item.data;

  if (player === "playerTwo") cell.className = "ai-cell";

  if (checkShip(item)) cell.style.backgroundColor = "gray";

  container.append(cell);
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

export { renderGameBoard };
