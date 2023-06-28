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
