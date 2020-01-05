import { AxiosError, AxiosResponse } from 'axios';
import { GeocoderError, GeocoderErrorMessage, GeocodingOptions } from './geo.interface';

export const getBounds = (options: GeocodingOptions | undefined): Promise<string> => {
  return new Promise((resolve) => {
    let boundsString = '';
    if (options && options.bounds) {
      boundsString = `&bounds=${options.bounds.sw.lat},${options.bounds.sw.lng}|${options.bounds.ne.lat},${options.bounds.ne.lng}`;
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
