![](https://github.com/bartholomej/mapycz/workflows/Build%20&%20Run%20tests%20&%20Publish/badge.svg)
![](https://github.com/bartholomej/mapycz/workflows/Build%20&%20Run%20tests/badge.svg)

# Geoholic

> Simple nodejs library for finding places all around the world

Source: [Mapy.cz Suggest API](https://api.mapy.cz/view?page=suggestadv)

## Install

```bash
yarn add geoholic
```

## Example

### Call

```javascript
import { geoholic } from 'geoholic';

geoholic
  .suggest('Prah', {
    scope: 'muni',
    country: 'cz',
    debug: true,
  })
  .then((data) => console.log('Results', places))
  .catch((e) => {
    console.log('users catch', e);
  });
```

### Answer

```javascript
{
    category: 'municipality_cz',
    highlight: [],
    sentence: '',
    userData: {
      bbox: [Array],
      country: 'Česko',
      district: 'Hlavní město Praha',
      elasticWeight: 0,
      evidenceNumber: '',
      hasAddress: true,
      highlight: [Array],
      highlightSecond: [Array],
      houseNumber: '',
      iconType: 'geo',
      id: 3468,
      img: '',
      importance: 0.763394835100681,
      latitude: 50.0835493857,
      longitude: 14.4341412988,
      mmid: '',
      mmsource: '',
      mmtype: '',
      muniId: '3468',
      municipality: 'Praha',
      nuts: 'CZ0100',
      poiType: '',
      poiTypeId: 0,
      popularity: 1,
      premiseIds: [],
      quarter: '',
      region: 'Hlavní město Praha',
      source: 'muni',
      street: '',
      streetNumber: '',
      suggestFirstRow: 'Praha',
      suggestSecondRow: 'okres Hlavní město Praha, kraj Hlavní město Praha, Česko',
      suggestThirdRow: 'Hlavní město',
      ward: '',
      wikiId: 'Q1085',
      zipCode: ''
    }
  }
```

## Options

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

### Run tests

```bash
yarn test
```
