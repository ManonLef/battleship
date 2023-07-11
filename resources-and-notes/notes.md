# BattleShip Notes

## 2023-06-26
- I started today with setting up Jest for Webpack. Ran into some issues with the description provided in the previous lesson. The link there seemed to be mainly focused on asset testing. I ended up just installing babel and jest as usual and it seems to work fine.
- issue to research is Jest file ESLint not working nicely together. `"jest/globals": true` in the eslintrc file did work but didn't lint any files anymore so that was undesirable

## 2023-06-27
- added some ship placements today.
- It seems like I went a bit overboard (pun intended) with the gameboard arrays inside the test file. I may want to look into a different option to create a gameboard (for it's repeating itself now) and alternative ways to check if the game array updates according to expected test specs.

## 2023-06-28
- added functionality to check if ships don't overlap. Found out there was an error in my validity check as well so fixed that (a5 horizontal still fits, but showed it wouldn't)
- added functionality to attack a cell, then update it, then update the ship as well if it's there
- added function to check if all ships on gameboard are sunk
- Created the player and ai methods and started the UI boards

## 2023-06-29 and 2023-06-30
- added visuals and custom events to emit player and Ai Turn
- [x] add all coordinates inside placed ship so when it's sunk, it can be marked in full

## 2023-07-01
- 2 checks fail because `dispatchEvent` is not defined
- [x] research difference in Jest between `test` and `it`
  - does the same thing, functionally the same. More readable if using 'it'

## 2023-07-02
- research drag and drop
- pseudo drag and drop and random ai place gameflow
  - ai should randomly place ships
  - game shouldn't start unless player ships are placed
  - select ship and drag onto board. (or maybe present each ship in horizontal and vertical mode to place)
  - Do this for all five ships
  - Once player ships on board is 5, start game

## 2023-07-04
- I started with the drag last time.
- Now I want to work on the drop.
- Idea for drop behaviour:
  - "ship" being dragged will contain the info needed
  - once dropped, element it's dropped on must be registered
  - fire customEvent and send data: `ship info` and `coordinates` which are needed for the `placeShip` function on the board.

- Will still have to think how I want to check if all five ships have been placed. Maybe I can present them one by one and make it part of the game loop. 

<!-- article I found that might be useful tomorrow: https://ralzohairi.medium.com/how-to-drag-drop-html-elements-and-files-using-javascript-d31d15279369 -->

## 2023-07-06
- added random ship placement function
- [x] BUG: ai will make another move after all its ships are sunk. We want to make sure it doesnt.
- perhaps return to activePlayer and pass that into game function

## 2023-07-09
- created the drag and drop functionality but not entirely sure how to go through it on game start, will have to figure that out still
  - idea:
  - present each ship to be dropped in both vertical and horizontal mode
  - once placed, present next ship
  - once all 5 are placed, game actually starts
- idea: when a ship is placed, emit event with amount of ships placed as data
- use ships placed to decide on next ship
- consider renderGameBoard to be replaced by a different render that alos updates the info once the game started
- [x] BUG: ship sunk not working for ai and not finishing game either for ai win 

## Future features
- [x] add random ship placement for player
- [ ] change cursors based on board, hit before etc.
- [ ] reset board
- [ ] smarter Ai
- [ ] attack sounds
- [ ] ships sunk counter or display
- [ ] replay after win or loss
- [ ] add a controller to remove a bunch of things tied to the game loop
- [ ] mock event emitter or add a JSDOM env
- [ ] enhance styling