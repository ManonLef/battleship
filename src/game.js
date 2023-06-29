import Player from "./player";
import { renderGameBoard } from "./view";

const human = new Player();
const ai = new Player();

// populate the boards with ships
human.board.placeShip("c2", 5, "horizontal");
human.board.placeShip("a8", 3, "vertical");
human.board.placeShip("g9", 2, "vertical");
human.board.placeShip("e1", 3, "horizontal");
human.board.placeShip("f6", 4, "vertical");
console.log(human.board);

ai.board.placeShip("c2", 5, "horizontal");
ai.board.placeShip("a8", 3, "vertical");
ai.board.placeShip("g9", 2, "vertical");
ai.board.placeShip("e1", 3, "horizontal");
ai.board.placeShip("f6", 4, "vertical");
console.log(ai.board);

// render the human board left
renderGameBoard(human.board.array, "playerOne");

// render the ai blank board to the right. This should not display any ships
// since it belongs to the opponent and we have to guess
renderGameBoard(human.OpponentBoard, "playerTwo");

// the game can begin now that the ships are placed.
let currentPlayer = human;
let currentEnemy = ai;

function switchPlayer() {
  if (currentPlayer === human) {
    currentPlayer = ai;
    currentEnemy = human;
  } else {
    currentPlayer = human;
    currentEnemy = ai;
  }
}

// when the human player click a cell in the opponent board, it should register
// an attack there on the ai.
// --> currentPlayer attackEnemy coord
// --> if OpponentBoard coord is already hit, do nothing
// --> else set currentPlayer OpponentBoard coord hit true
// --> check OpponentBoard coord ship or not?
// --> if ship was hit:
    //  --> check if it was sunk
    //  --> if sunk, change all coordinates of said ship to fill the whole square
// --> if ship not hit: 
    // add marker red to indicate there is a ship there
// looks like following classes may be needed: no-ship, ship-hit, ship-sunk
