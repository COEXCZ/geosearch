import { GeocodingOptions } from "./geo.interface";

export const getBounds = (options: GeocodingOptions | undefined): string | undefined => {
  let bounds;
  if (options?.country || options?.bounds) {
    bounds = `&bounds=${options.country ? encodeURIComponent(options.country) : options.bounds}`;
  }
  return bounds;
}

// private preparCategoryForFilter(scope: GeocodingScope): string | undefined {
//   let category;
//   if (scope === 'muni') {
//     category = 'municipality_cz';
//   }
//   return category;
// }
