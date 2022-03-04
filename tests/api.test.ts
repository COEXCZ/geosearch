import { GeoSearch } from '../src';

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
  expect(places[0].category).toBe('municipality_cz');
});

test('Non existing place', async () => {
  const places = await geoSearch.suggest('xyzqwertziuyp123čřž', {
    scope: 'muni',
    country: 'cz',
  });
  expect(places.length).toBe(0);
});

test('Show result in Czech', async () => {
  const places = await geoSearch.suggest('Kyoto tower', {
    country: 'jp',
    lang: 'cs',
  });
  expect(places[0].userData.suggestSecondRow).toBe('Věžová stavba, Kjóto - Shimogyō-ku, Japonsko');
});
