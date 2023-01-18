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
    createCoordDiv.dataset.coordinate = coordinate.value;
    createCoordDiv.dataset.occupancy = coordinate.occupancy;
    selectGameBoard.appendChild(createCoordDiv);
  });
}

function updateCoordinateOccupancy(item) {
  const getDiv = document.querySelector(`[data-coordinate="${item.value}"]`);
  getDiv.dataset.occupancy = 'occupied';
}

export { createBoardContainer, createCoordinateDivs, updateCoordinateOccupancy };
