/**
 * @jest-environment jsdom
 */

import gameBoardFactory from '../gameBoard';
import createBoardContainer from '../gameBoardElements';

test('gameboard factory is creating coordinates for 100 positions.', () => {
  const boardOne = gameBoardFactory();
  expect(boardOne.coordinateArray).toHaveLength(100);
});

test('gameboard factory calls the gameboard reference and gets a true response', () => {
  const boardTwo = gameBoardFactory();
  expect(boardTwo.gameBoard).toBeTruthy();
});
