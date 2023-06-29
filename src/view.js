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

  if (player === "playerTwo") cell.className = "ai-cell"

  if (checkShip(item)) cell.style.backgroundColor = "gray"
  
  container.append(cell);
}

function checkShip(item) {
  if(item.ship !== null) return true
  else return false
}

export { renderGameBoard };
