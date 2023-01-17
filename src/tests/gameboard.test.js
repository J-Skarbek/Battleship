/**
 * @jest-environment jsdom
 */

import gameBoardFactory from '../gameBoard';
import createBoardContainer from '../gameBoardElements';
import shipFactory from '../ship';

test('gameboard factory is creating coordinates for 100 positions.', () => {
  const boardOne = gameBoardFactory();
  expect(boardOne.coordinateArray).toHaveLength(100);
});

test('gameboard factory calls the gameboard reference and gets a true response', () => {
  const boardTwo = gameBoardFactory();
  expect(boardTwo.gameBoard).toBeTruthy();
});

test('gameboard factory calls the placeship function and can get values from it', () => {
  const boardThree = gameBoardFactory();
  expect(boardThree.placeShipDestroyer().shipType).toBe('destroyer');
});

test('Ship object can be placed into a gameboard, and it increases the shipsPlaced counter', () => {
  const liveGameBoard = gameBoardFactory();
  liveGameBoard.placeShipDestroyer();
  liveGameBoard.placeShipCruiser();
  expect(liveGameBoard.shipsPlaced).toBe(2);
});

test('Ship object can be placed into a gameboard, and it increases the shipsPlaced counter correctly', () => {
  const liveGameBoard = gameBoardFactory();
  expect(liveGameBoard.placeShipDestroyer().shipType).toBe('destroyer');
  expect(liveGameBoard.placeShipCruiser().shipType).toBe('cruiser');
  expect(liveGameBoard.placeShipBattleship().shipType).toBe('battleship');
  expect(liveGameBoard.shipsPlaced).not.toBe(4);
});
