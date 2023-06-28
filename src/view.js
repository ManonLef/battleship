const containerOne = document.querySelector(".player-one-container")
const containerTwo = document.querySelector(".player-two-container")


function renderGameBoard(array, player) {
  array.forEach(item => () => {
    const cell = document.createElement("div")
    cell.setAttribute("data-coord", item.data)
    cell.textContent = item.data
    containerOne.append(cell)
  })
}

export {renderGameBoard}