import axios from 'axios';
import { GeoSearchData, GeoSearchOptions, GeoSearchResult } from './geo.interface';
import { createError, filterData, getBounds } from './utils';
import { API_URL, COUNT } from './variables';

class GeoSearch {
  constructor() {}

  public async suggest(query: string, options?: GeoSearchOptions): Promise<GeoSearchResult[]> {
    const bounds = await getBounds(options).catch(() => {
      throw createError('Input Error');
    });
    const apiUrl = `${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}${bounds}`;

    // For debugging
    if (options?.debug) {
      console.log('Options:', options);
      console.log('Calling url:', apiUrl);
    }

    const response = await axios.get<GeoSearchData>(apiUrl).catch((axiosError) => {
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

export const geosearch = new GeoSearch();
