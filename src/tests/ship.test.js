import shipFactory from '../ship';

test('Ship Factory is returning undefined for the private proerty isSunk', () => {
  const destroyer = shipFactory(4);
  expect(destroyer.isSunk).toBeUndefined();
});

test('Ship Factory is returning isSunk as true once the hits equal the length of the ship', () => {
  const destroyer = shipFactory(4);
  destroyer.onHit();
  destroyer.onHit();
  destroyer.onHit();
  destroyer.onHit();
  expect(destroyer.onHit()).toBeTruthy();
});

test('Ship Factory is returning isSunk as true once the hits equal the length of the ship', () => {
  const destroyer = shipFactory(4);
  expect(destroyer.onHit()).toBe(1);
  expect(destroyer.onHit()).toBe(2);
  expect(destroyer.onHit()).not.toBe(4);
  expect(destroyer.onHit()).not.toBeFalsy();
});
