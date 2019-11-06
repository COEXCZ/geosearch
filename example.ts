import { MapyCz } from './index';

const mapycz = new MapyCz();

mapycz
  .geoocode('Praha', { scope: 'muni' })
  .then(data => console.log('Results async', data));
