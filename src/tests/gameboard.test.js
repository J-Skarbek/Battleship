/**
 * @jest-environment jsdom
 */


import gameBoardFactory from '../gameBoard';
import createBoardContainer from '../gameBoardElements';

test('Gamefacotry is creating coordinates for 100 positions.', () => {
  const boardOne = gameBoardFactory();
  expect(boardOne.coordinateArray).toHaveLength(100);
});

test('gameboard factory calls createBoardContainer only once', () => {
  const boardTwo = gameBoardFactory();
  expect(boardTwo.createBoardContainer.mock.calls).toHaveLength(1);
});

// test('Ship Factory is returning undefined for the private proerty isSunk', () => {
//   const destroyer = shipFactory(4);
//   expect(destroyer.isSunk).toBeUndefined();
// });

