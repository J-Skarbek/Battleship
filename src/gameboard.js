import { find } from 'lodash';
import { createBoardContainer, createCoordinateDivs } from './gameBoardElements';
import shipFactory from './ship';

const gameBoardFactory = () => {
  const gameBoard = createBoardContainer();
  const missedAttacks = [];
  const coordinateArray = [];
  let shipsPlaced = 0;
  let shipsSunk = 0;
  for (let i = 0; i < 100; i += 1) {
    const coordinate = {
      value: i,
      occupancy: 'empty',
    };
    coordinateArray.push(coordinate);
  }
  createCoordinateDivs(coordinateArray);

  function placeShipDestroyer() {
    const destroyer = shipFactory(3, 'destroyer');
    this.shipsPlaced += 1;
    return destroyer;
  }

  function placeShipCruiser() {
    const cruiser = shipFactory(5, 'cruiser');
    this.shipsPlaced += 1;
    return cruiser;
  }

  function placeShipBattleship() {
    const battleship = shipFactory(4, 'battleship');
    this.shipsPlaced += 1;
    return battleship;
  }

  function placeShipBattleshipTest(coordinate) {
    const findArrayItem = coordinateArray.find(({ value }) => value === coordinate);
    const additionalCoords = coordinate + 4;
    const shipCoords = coordinateArray.slice(coordinate, additionalCoords);
    shipCoords.forEach((bsCoordinate) => {
      bsCoordinate.occupancy = 'occupied';
    });
    console.log(shipCoords);
    // console.log(searchValue);
    console.log(coordinate);
    console.log(typeof coordinate);
    // findArrayItem.occupancy = 'occupied';
    // console.log(findArrayItem);
  }

  // const receiveAttack = x => {
  //   if ( x === 'emtpy' ) {
  //     const missedMsg = 'The attack missed.';
  //     return missedMsg;
  //   } elseif (x === 'occupied') {
  //     const hitMsg = 'The attack was successful.';
  //     return hitMsg;
  //   }
  // }

  return {
    gameBoard,
    coordinateArray,
    placeShipDestroyer,
    placeShipCruiser,
    placeShipBattleship,
    placeShipBattleshipTest,
    // receiveAttack,
    missedAttacks,
    shipsSunk,
    shipsPlaced,
  };
};

export default gameBoardFactory;
