import { MapyCz } from './index';
import { GeocodingCountryBounds } from './src/geo.interface';

const mapycz = new MapyCz();

mapycz
  .geoocode('Praha', { scope: 'muni', country: GeocodingCountryBounds.cz })
  .then(data => console.log('Results async', data));
