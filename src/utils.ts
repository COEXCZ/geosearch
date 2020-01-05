import { AxiosError, AxiosResponse } from 'axios';
import { getCountryBounds } from './countries';
import { GeocoderError, GeocoderErrorMessage, GeocodingOptions } from './geo.interface';

export const getBounds = (options: GeocodingOptions | undefined): Promise<string> => {
  return new Promise((resolve) => {
    let boundsString = '';
    let bounds;
    if (options?.bounds || options?.country) {
      bounds = options?.bounds || getCountryBounds(options?.country);
      if (bounds) {
        boundsString = `&bounds=${encodeURIComponent(
          `${bounds.sw.lat},${bounds.sw.lng}|${bounds.ne.lat},${bounds.ne.lng}`
        )}`;
      }
    }
    resolve(boundsString);
  });
};

export const createError = (
  message: GeocoderErrorMessage,
  axiosResponse?: AxiosResponse<any>,
  axiosError?: AxiosError
): GeocoderError => {
  const error = new Error(message) as GeocoderError;
  error.name = 'GeocoderError';
  error.isGeocoderError = true;
  error.axiosError = axiosError;
  error.axiosResponse = axiosResponse;
  return error;
};

export const isGeocoderError = (e: Error | GeocoderError): e is GeocoderError => {
  return (<GeocoderError>e).isGeocoderError !== undefined;
};
