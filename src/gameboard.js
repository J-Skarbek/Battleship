import { createBoardContainer, createCoordinateDivs } from './gameBoardElements';

const gameBoardFactory = () => {
  const gameBoard = createBoardContainer();
  const coordinateArray = [];
  for (let coordinate = 0; coordinate < 100; coordinate += 1) {
    coordinateArray.push(coordinate);
  }
  createCoordinateDivs(coordinateArray);

  return {
    gameBoard,
    coordinateArray,
  };
};

export default gameBoardFactory;
