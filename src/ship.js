const shipFactory = (length) => {
  let isSunk = false;
  let numberOfHits = 0;
  const onHit = () => {
    // let numberOfHits = 0;
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

export default shipFactory;
