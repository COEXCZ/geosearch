import axios, { AxiosResponse } from 'axios';
import { API_URL, COUNT } from './variables';
import { GeocodingData, GeocodingOptions } from './geo.interface';

export class MapyCz {
  private options?: GeocodingOptions;

  constructor() {}

  async geoocode(
    query: string,
    options?: GeocodingOptions | undefined
  ): Promise<AxiosResponse<GeocodingData>> {
    this.options = options;
    return axios.get(`${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}`);
  }
}
