const shipFactory = (length) => {
  const isSunk = false;
  const numberOfHits = 0;
  const statusReport = (length) => {
    if (numberOfHits === length) {
      isSunk = true;
    }
  };
  return {
    length,
    isSunk,
  };
};

const destroyer = shipFactory(4);

export default shipFactory;
