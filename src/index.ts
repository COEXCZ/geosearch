import axios, { AxiosError } from "axios";
import { GeocodingData, GeocodingOptions, GeocodingResult } from "./geo.interface";
import { createError, getBounds } from "./utils";
import { API_URL, COUNT } from "./variables";

class MapyCz {
  constructor() {}

  public geoocode(
    query: string,
    options?: GeocodingOptions
  ): Promise<GeocodingResult[]> {
    return getBounds(options)
      .then(
        bounds => {
          return axios
            .get<GeocodingData>(
              `${API_URL}?count=${COUNT}&phrase=${encodeURIComponent(
                query
              )}${bounds}`
            )
            .then(
              response => {
                if (response.statusText === "OK" || response.status === 200) {
                  return this.filterData(response.data.result, options);
                }
                throw createError("API request failed", response);
              },
              (axiosError: AxiosError) => {
                if(!axiosError.response) {
                  throw createError("Network Error", axiosError.response, axiosError);
                }
                throw createError("API request failed", axiosError.response, axiosError);
              }
            );
        },
        () => {
          // getBounds error
          throw createError("Input Error");
        }
      )
  }

  private filterData(
    data: GeocodingResult[],
    options: GeocodingOptions | undefined
  ): GeocodingResult[] {
    if (options?.scope) {
      return data
        .filter((item) => String(item.category).includes(String(options.scope)))
        .filter((item) => item.userData.source === options.scope);
    } else {
      return data;
    }
  }
}

export const Mapy = new MapyCz();
