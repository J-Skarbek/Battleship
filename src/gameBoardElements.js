function createBoardContainer() {
  const getBody = document.querySelector('body');
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('game-container');
  getBody.appendChild(boardContainer);
  return boardContainer;
}

export default createBoardContainer;

// export function createCoords() {
//   const selectGameBoard = document.querySelector('.game-container');
//   const createCoordinate = () => {
//     const createCoord = document.createElement('div');
//     createCoord.classList.add('coordinate');
//     selectGameBoard.appendChild(createCoord);
//   };
//   for (let coordinates = 0; coordinates < 100; coordinates += 1) {
//     createCoordinate();
//   }
// }

// export function createCoordinateDivs() {
//   const selectGameBoard = document.querySelector('.game-container');
//   const allCoords = Array.from(document.querySelectorAll('.coordinate'));
//   allCoords.forEach((coordinate) => {
//     selectGameBoard.appendChild(coordinate);
//   });
// }
