import { GeocodingOptions } from "./geo.interface";

export const getBounds = (options: GeocodingOptions | undefined): string | undefined => {
  let bounds;
  if (options && (options.country || options.bounds)) {
    bounds = `&bounds=${options.country ? encodeURIComponent(options.country) : options.bounds}`;
  }
  return bounds;
}
