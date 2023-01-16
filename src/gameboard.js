import createBoardContainer from './gameBoardElements';

const gameBoardFactory = () => {
  const gameBoard = createBoardContainer();
  // const gameCoordinates = createCoords();
  const coordinateArray = [];

  for (let coordinate = 0; coordinate < 100; coordinate += 1) {
    coordinateArray.push(coordinate);
  }

  return {
    gameBoard,
    // gameCoordinates,
    coordinateArray,
  };
};

export default gameBoardFactory;
