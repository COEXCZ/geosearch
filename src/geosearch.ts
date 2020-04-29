import axios from 'axios';
import { GeoSearchData, GeoSearchOptions, GeoSearchResult } from './interface/geosearch.interface';
import { createError, filterData, getBounds, getLangs } from './utils/utils';
import { API_URL, COUNT } from './variables';

export class GeoSearch {
  public async suggest(query: string, options?: GeoSearchOptions): Promise<GeoSearchResult[]> {
    const bounds = await getBounds(options).catch(() => {
      throw createError('Input Error');
    });

    const langs = getLangs(options?.langs);
    const apiUrl = `${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}${bounds}${langs}`;

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
