function createBoardContainer() {
  const getBody = document.querySelector('body');
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('game-container');
  getBody.appendChild(boardContainer);
  return boardContainer;
}

function createCoordinateDivs(coordinateArray) {
  const selectGameBoard = document.querySelector('.game-container');
  coordinateArray.forEach((coordinate) => {
    const createCoordDiv = document.createElement('div');
    createCoordDiv.classList.add('coordinate');
    createCoordDiv.dataset.coordinate = coordinate;
    selectGameBoard.appendChild(createCoordDiv);
  });
}

export { createBoardContainer, createCoordinateDivs };
