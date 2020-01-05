![](https://github.com/bartholomej/mapycz/workflows/Build%20&%20Run%20tests%20&%20Publish/badge.svg)
![](https://github.com/bartholomej/mapycz/workflows/Build%20&%20Run%20tests/badge.svg)

# Mapy.cz suggest

Mapy cz suggest wrapper

## Example

```javascript
import { placesSuggest } from 'mapycz';

placesSuggest
  .geocode('Prah', {
    scope: 'muni',
    country: 'cz',
    debug: true,
  })
  .then((data) => console.log('Results', places))
  .catch((e) => {
    console.log('users catch', e);
  });
```

## Options

<!-- scope?: GeocodingScope;
  bounds?: LatLngBounds;
  country?: GeocodingCountries;
  debug?: boolean; -->

| Option      | Type                                           | Default | Description                                              |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------------- |
| **scope**   | `'muni'` \| `'area'` \| `'pubt'` \| `'street'` | null    | Preferred category of results                            |
| **bounds**  | `{ sw: LatLng, ne: LatLng}`                    | null    | Preffered country boundaries                             |
| **country** | `'cz'` \| `'sk'` \| `'us'` \| `'de'`           | null    | Preferred country (same as bounds but with some presets) |
| **debug**   | boolean                                        | false   | Print additional information to console                  |

## Development

```bash
yarn start
```

### Run example call

```bash
yarn example
```
