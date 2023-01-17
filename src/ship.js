// const ShipPrototype = () => {
//   const onHit = (numberOfHits) => {
//     numberOfHits += 1;
//     if (numberOfHits === length) {
//       isSunk = true;
//       return isSunk;
//     }
//     return numberOfHits;
//   };
//   return { onHit };
// };

const shipFactory = (length, type) => {
  const shipType = type;
  let isSunk = false;
  let numberOfHits = 0;
  // const { onHit } = ShipPrototype();
  const onHit = () => {
    numberOfHits += 1;
    if (numberOfHits >= length) {
      isSunk = true;
      return isSunk;
    }
    return numberOfHits;
  };

  // function onHit() {
  //   this.numberOfHits += 1;
  //   if (this.numberOfHits >= length) {
  //     this.isSunk = true;
  //     return this.isSunk;
  //   }
  //   return this.numberOfHits;
  // }

  return {
    shipType,
    length,
    onHit,
  };
};

// export { ShipPrototype };
export default shipFactory;
