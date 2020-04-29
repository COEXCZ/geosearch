import axios from 'axios';
import { GeoSearchData, GeoSearchOptions, GeoSearchUserData } from './interface/geosearch.interface';
import { createError, filterData, getBounds, getUserData } from './utils/utils';
import { API_URL, COUNT } from './variables';

export class GeoSearch {
  public async suggest(query: string, options?: GeoSearchOptions): Promise<GeoSearchUserData[]> {
    const bounds = await getBounds(options).catch(() => {
      throw createError('Input Error');
    });
    const apiUrl = `${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}${bounds}`;

    // For debugging
    if (options?.debug) {
      console.log('\x1b[32mOptions:\x1b[0m', options);
      console.log('\x1b[32mCalling url:\x1b[0m', apiUrl);
    }

    const response = await axios.get<GeoSearchData>(apiUrl).catch((axiosError) => {
      if (!axiosError.response) {
        throw createError('Network Error', axiosError.response, axiosError);
      }
      throw createError('API request failed', axiosError.response, axiosError);
    });
    if (response.statusText === 'OK' || response.status === 200) {
      const filteredPlaces = filterData(response.data.result, options);
      return getUserData(filteredPlaces);
    }
    throw createError('API request failed', response);
  }
}
