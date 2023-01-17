import { createBoardContainer, createCoordinateDivs } from './gameBoardElements';
import shipFactory from './ship';

const gameBoardFactory = () => {
  const gameBoard = createBoardContainer();
  const coordinateArray = [];
  for (let coordinate = 0; coordinate < 100; coordinate += 1) {
    coordinateArray.push(coordinate);
  }
  createCoordinateDivs(coordinateArray);

  const placeShip = () => {
    const destroyer = shipFactory(3, 'destroyer');
    return destroyer;
  };

  return {
    gameBoard,
    coordinateArray,
    placeShip,
  };
};

export default gameBoardFactory;
