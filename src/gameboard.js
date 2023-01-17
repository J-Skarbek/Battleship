import { createBoardContainer, createCoordinateDivs } from './gameBoardElements';
import shipFactory from './ship';

const gameBoardFactory = () => {
  const gameBoard = createBoardContainer();
  const missedAttacks = [];
  const coordinateArray = [];
  const shipsSunk = 0;
  for (let coordinate = 0; coordinate < 100; coordinate += 1) {
    coordinateArray.push(coordinate);
  }
  createCoordinateDivs(coordinateArray);

  const placeShip = () => {
    const destroyer = shipFactory(3, 'destroyer');
    return destroyer;
  };

  const receiveAttack = (x, y) => console.log(x, y);

  return {
    gameBoard,
    coordinateArray,
    placeShip,
    receiveAttack,
    missedAttacks,
    shipsSunk,
  };
};

export default gameBoardFactory;
