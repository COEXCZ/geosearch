import axios from 'axios';
import { GeocodingData, GeocodingOptions, GeocodingResult } from './geo.interface';
import { createError, filterData, getBounds } from './utils';
import { API_URL, COUNT } from './variables';

class Geoholic {
  constructor() {}

  public async suggest(query: string, options?: GeocodingOptions): Promise<GeocodingResult[]> {
    const bounds = await getBounds(options).catch(() => {
      throw createError('Input Error');
    });
    const apiUrl = `${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}${bounds}`;

    // For debugging
    if (options?.debug) {
      console.log('Options:', options);
      console.log('Calling url:', apiUrl);
    }

    const response = await axios.get<GeocodingData>(apiUrl).catch((axiosError) => {
      if (!axiosError.response) {
        throw createError('Network Error', axiosError.response, axiosError);
      }
      throw createError('API request failed', axiosError.response, axiosError);
    });
    if (response.statusText === 'OK' || response.status === 200) {
      return filterData(response.data.result, options);
    }
    throw createError('API request failed', response);
  }
}

export const geoholic = new Geoholic();
