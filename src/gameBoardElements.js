export function createCoords() {
  // const createCoordinate = document.createElement('div');
  // createCoordinate.classList.add('coordinate');
  const selectGameBoard = document.querySelector('.game-container');
  const createCoordinate = () => {
    const createCoord = document.createElement('div');
    createCoord.classList.add('coordinate');
    selectGameBoard.appendChild(createCoord);
  };
  // const createCoordinate = () => {
  //   document.createElement('div')
  //     .classList.add('coordinate');
  // };
  for (let coordinates = 0; coordinates < 100; coordinates += 1) {
    createCoordinate();
    // selectGameBoard.appendChild(createCoordinate);
  }
}

export function createBoardContainer() {
  const getBody = document.querySelector('body');
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('game-container');
  getBody.appendChild(boardContainer);
  return boardContainer;
}
