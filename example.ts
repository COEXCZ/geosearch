import { Mapy } from './index';
import { GeocodingCountryBounds } from './src/geo.interface';

Mapy
  .geoocode('Praha', { scope: 'muni', country: GeocodingCountryBounds.cz })
  .then(data => console.log('Results async', data));
