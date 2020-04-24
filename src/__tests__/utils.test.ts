import { GeoSearchData } from '../interface/geosearch.interface.js';
import { filterData, getBounds } from '../utils/utils';
import * as mockPrahaResult from './mocks/search-praha.json';

test('Get right bounds from country', async () => {
  const bounds = await getBounds({
    country: 'us',
  });
  expect(bounds).toBe(`&bounds=18.91619%2C-171.791110603%7C71.3577635769%2C-66.96466`);
});

test('Get right bounds', async () => {
  const bounds = await getBounds({
    bounds: {
      sw: { lat: 48.5370786, lng: 12.0921668 },
      ne: { lat: 51.0746358, lng: 18.892704 },
    },
  });
  expect(bounds).toBe(`&bounds=48.5370786%2C12.0921668%7C51.0746358%2C18.892704`);
});

test('Bounds has a priority', async () => {
  const bounds = await getBounds({
    bounds: {
      sw: { lat: 48.5370786, lng: 12.0921668 },
      ne: { lat: 51.0746358, lng: 18.892704 },
    },
    country: 'us',
  });
  expect(bounds).toBe(`&bounds=48.5370786%2C12.0921668%7C51.0746358%2C18.892704`);
});

test('Filter czech municipality', () => {
  const mockData: GeoSearchData = mockPrahaResult;

  const filteredData = filterData(mockData.result, {
    scope: 'muni',
    country: 'cz',
  });

  const countMuni = filteredData.filter((e) => e.category === 'municipality_cz').length;
  const countAllFiltered = filteredData.length;

  expect(countMuni).toEqual(countAllFiltered);
});
