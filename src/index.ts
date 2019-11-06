import axios from 'axios';
import { API_URL, COUNT } from './variables';
import { GeocodingData, GeocodingOptions, GeocodingScope, GeocodingResult } from './geo.interface';
import { getBounds } from './utils';

export class MapyCz {
  constructor() {}

  public async geoocode(
    query: string,
    options?: GeocodingOptions | undefined
  ): Promise<GeocodingResult[]> {

    let bounds = getBounds(options);

    return axios.get<GeocodingData>(
      `${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}${bounds}`
      )
      .then(results => results.data)
      // Filter scope
      .then(results => this.filterData(results.result, options))
  }

  private filterData(data: GeocodingResult[], options: GeocodingOptions | undefined): GeocodingResult[] {
    if (options?.scope) {
      return data
        .filter((item) => String(item.category).includes(String(options.scope)))
        .filter((item) => item.userData.source === options.scope);
    } else {
      return data;
    }
  }

}
