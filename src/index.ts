import axios from 'axios';
import { API_URL, COUNT } from './variables';
import { GeocodingData, GeocodingOptions, GeocodingScope, GeocodingResult } from './geo.interface';

export class MapyCz {
  private options?: GeocodingOptions | undefined;

  constructor() {}

  public async geoocode(
    query: string,
    options?: GeocodingOptions | undefined
  ): Promise<GeocodingResult[]> {
    this.options = options;
    return axios.get<GeocodingData>(`${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(query)}`)
      .then(results => results.data)
      // Filter scope
      .then(results => this.filterData(results.result, options))
  }

  private filterData(data: GeocodingResult[], options: GeocodingOptions | undefined): GeocodingResult[] {
    if (options?.scope) {
      // let category = this.preparCategoryForFilter(options.scope);
      return data
        .filter((item) => String(item.category).includes(String(options.scope)))
        .filter((item) => item.userData.source === options.scope);
    } else {
      return data;
    }
  }

  // private preparCategoryForFilter(scope: GeocodingScope): string | undefined {
  //   let category;
  //   if (scope === 'muni') {
  //     category = 'municipality_cz';
  //   }
  //   return category;
  // }
}
