import axios from 'axios';
import { GeocodingData, GeocodingOptions, GeocodingResult } from './geo.interface';
import { createError, getBounds } from './utils';
import { API_URL, COUNT } from './variables';

class MapyCz {
  constructor() {}

  public async geoocode(query: string, options?: GeocodingOptions): Promise<GeocodingResult[]> {
    const bounds = await getBounds(options).catch(() => {
      throw createError('Input Error');
    });
    const response = await axios
      .get<GeocodingData>(`${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}${bounds}`)
      .catch((axiosError) => {
        if (!axiosError.response) {
          throw createError('Network Error', axiosError.response, axiosError);
        }
        throw createError('API request failed', axiosError.response, axiosError);
      });
    if (response.statusText === 'OK' || response.status === 200) {
      return this.filterData(response.data.result, options);
    }
    throw createError('API request failed', response);
  }

  private filterData(data: GeocodingResult[], options: GeocodingOptions | undefined): GeocodingResult[] {
    if (options && options.scope) {
      return data
        .filter((item) => String(item.category).includes(String(options.scope)))
        .filter((item) => item.userData.source === options.scope);
    } else {
      return data;
    }
  }
}

export const Mapy = new MapyCz();
