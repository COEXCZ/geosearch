import { GeoSearch } from '../dist/index';
import { GeoSearchResult, GeoSearchUserData } from '../dist/interface';

const geoSearch = new GeoSearch();

geoSearch
  .suggest('Praha', {
    scope: 'muni',
    country: 'cz',
    debug: true,
    langs: ['en', 'cs'],
    // bounds: {
    //   sw: { lat: 48.5370786, lng: 12.0921668 },
    //   ne: { lat: 51.0746358, lng: 18.892704 },
    // },
  })
  .then((places: GeoSearchResult[]) => places.map((place) => place.userData))
  .then((filtered: GeoSearchUserData[]) => console.log('Results async', filtered))
  .catch((e) => {
    // Catch Error
    console.error('Error', e);
  });
