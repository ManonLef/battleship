import Player from "./player";
import { renderGameBoard } from "./view";

const human = new Player();
const ai = new Player();

renderGameBoard(human.board.array, "playerOne");
renderGameBoard(ai.board.array, "playerTwo");
