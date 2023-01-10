import createGridSquare from './gameBoardElements';

const gameBoardFactory = () => {
  const createBoardGrid = () => {
    for (let i = 0; i < 100; i += 1) {
      createGridSquare();
    }
  };
  const initNewGrid = () => {
    createBoardGrid();
  };
};

export default gameBoardFactory;
