import shipFactory from '../ship';

test('Ship Factory is returning isSunk as false', () => {
  const destroyer = shipFactory(4);
  expect(destroyer.isSunk).not.toBeTruthy();
});
