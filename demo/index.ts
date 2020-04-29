import { GeoSearch } from '../dist/index';
import { GeoSearchUserData } from '../dist/interface';

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
  .then((filtered: GeoSearchUserData[]) => console.log('Results async', filtered))
  .catch((e) => {
    // Catch Error
    console.error('Error', e);
  });
