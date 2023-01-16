import { createCoords, createBoardContainer } from './gameBoardElements';

const gameBoardFactory = () => {
  const gameBoard = createBoardContainer();
  const gameCoordinates = createCoords();

  return {
    gameBoard,
    gameCoordinates,
  };
};
//   createBoardContainer();
//   for (let coordinates = 0; coordinates < 100; coordinates += 1) {
//   createCoordinate();
//   }
// }

// const gameBoardFactory = () => {
//   const createBoardGrid = () => {
//     for (let i = 0; i < 100; i += 1) {
//       createGridSquare();
//     }
//   };
//   const initNewGrid = () => {
//     createBoardGrid();
//   };
// };

export default gameBoardFactory;
