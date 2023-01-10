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

const shipFactory = (length) => {
  let isSunk = false;
  let numberOfHits = 0;
  // const { onHit } = ShipPrototype();
  const onHit = () => {
    numberOfHits += 1;
    if (numberOfHits === length) {
      isSunk = true;
      return isSunk;
    }
    return numberOfHits;
  };
  return {
    length,
    isSunk,
    onHit,
  };
};

// export { ShipPrototype };
export default shipFactory;
