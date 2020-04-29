import { GeoSearch } from '../dist';

const geoSearch = new GeoSearch();

test('Find something', async () => {
  const places = await geoSearch.suggest('Praha', {
    scope: 'muni',
    country: 'cz',
  });
  expect(places.length).toBeGreaterThan(0);
});

test('Filter municipality', async () => {
  const places = await geoSearch.suggest('Praha', {
    scope: 'muni',
    country: 'cz',
  });
  expect(places[0].source).toBe('muni');
});

test('Non existing place', async () => {
  const places = await geoSearch.suggest('xyzqwertziuyp123čřž', {
    scope: 'muni',
    country: 'cz',
  });
  expect(places.length).toBe(0);
});
