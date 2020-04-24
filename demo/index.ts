import { GeoSearch } from '../dist/index';
import { GeoSearchResult } from '../dist/interface';

const geoSearch = new GeoSearch();

geoSearch
  .suggest('Praha', {
    scope: 'muni',
    country: 'cz',
    debug: true,
    // bounds: {
    //   sw: { lat: 48.5370786, lng: 12.0921668 },
    //   ne: { lat: 51.0746358, lng: 18.892704 },
    // },
  })
  .then((data: GeoSearchResult[]) => console.log('Results async', data))
  .catch((e) => {
    console.log('users catch', e);
  });
