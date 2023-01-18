import _ from 'lodash';
import './style.css';
import TestImg from './sun copy.jpg';
import printMe from './print';
// import shipFactory from './ship';
// import { ShipPrototype } from './ship';
import gameBoardFactory from './gameBoard';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = TestImg;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

const gameBoardOne = gameBoardFactory();

// gameBoardOne.placeShipBattleshipTest(7, 4, 'battleship');

console.log(gameBoardOne.placeShipBattleshipTest(7, 4, 'battleship'));
console.log(gameBoardOne.placeShipBattleshipTest(7, 4, 'battleship').shipType);

console.log(gameBoardOne.coordinateArray);
