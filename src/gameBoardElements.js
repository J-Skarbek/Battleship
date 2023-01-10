export default function createGridSquare() {
  const newSquare = document.createElement('div').classList.add('gameSquare');
  const getgameBoardClass = document.querySelector('.game-board');
  getgameBoardClass.appendChild(newSquare);
}
