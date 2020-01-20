import { geoholic } from '../index';

test('Find something', async () => {
  const places = await geoholic.suggest('Praha', {
    scope: 'muni',
    country: 'cz',
  });
  expect(places.length).toBeGreaterThan(0);
});

test('Filter municipality', async () => {
  const places = await geoholic.suggest('Praha', {
    scope: 'muni',
    country: 'cz',
  });
  expect(places[0].category).toBe('municipality_cz');
});

test('Non existing place', async () => {
  const places = await geoholic.suggest('xyzqwertziuyp123čřž', {
    scope: 'muni',
    country: 'cz',
  });
  expect(places.length).toBe(0);
});
