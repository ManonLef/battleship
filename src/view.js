const containerOne = document.querySelector(".player-one-container");
const containerTwo = document.querySelector(".player-two-container");

function renderGameBoard(array, player) {
  let container = containerOne;
  if (player === "playerTwo") container = containerTwo;

  array.forEach((item) => {
    createCell(item, container);
  
  });
}

function createCell(item, container) {
  const cell = document.createElement("div");
  cell.setAttribute("data-coord", item.data);
  cell.textContent = item.data;
  container.append(cell);
}

export { renderGameBoard };
