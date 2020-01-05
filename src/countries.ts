import { GeocodingCountries, LatLngBounds } from './geo.interface';

// Country bounding boxes by https://gist.github.com/graydon/11198540
export function getCountryBounds(country: GeocodingCountries | undefined): LatLngBounds | null {
  switch (country) {
    case 'cz':
      return { sw: { lat: 48.5370786, lng: 12.0921668 }, ne: { lat: 51.0746358, lng: 18.892704 } };
    case 'sk':
      return { sw: { lat: 47.7584288601, lng: 16.8799829444 }, ne: { lat: 49.5715740017, lng: 22.5581376482 } };
    case 'de':
      return { sw: { lat: 47.3024876979, lng: 5.98865807458 }, ne: { lat: 54.983104153, lng: 15.0169958839 } };
    case 'us':
      return { sw: { lat: 18.91619, lng: -171.791110603 }, ne: { lat: 71.3577635769, lng: -66.96466 } };
    case 'gb':
      return { sw: { lat: 49.959999905, lng: -7.57216793459 }, ne: { lat: 58.6350001085, lng: 1.68153079591 } };
    default:
      return null;
  }
}
