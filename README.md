![](https://github.com/COEXCZ/geosearch/workflows/Build%20&%20Run%20tests%20&%20Publish/badge.svg)
![](https://github.com/COEXCZ/geosearch/workflows/Build%20&%20Run%20tests/badge.svg)

# Geosearch

> Simple nodejs library to find places all around the world
>
> _Datasource: Mapy.cz Suggest API_

## Install

```bash
yarn add geosearch
```

## Usage

### City, town, village

Let's find all _Springfields_ in the World

```javascript
import { geosearch } from 'geosearch';

geosearch
  .suggest('Springfield', {
    scope: 'muni', // Only cities, villages, ( municipalities)
  })
  .then((places) => {
    // ... do something cool
    console.log('Results', places);
  })
  .catch((e) => {
    // catch Error
    console.log('Error', e);
  });
```

### Places start with

Let's find cities or villages start with _Ber_ in _Germany_

```javascript
import { geosearch } from 'geosearch';

geosearch
  .suggest('Ber', {
    scope: 'muni', // Only cities, villages, ( municipalities)
    country: 'de', // Only from the Czech Republic
  })
  .then((places) => {
    // ... do something cool
    console.log('Results', places);
  })
  .catch((e) => {
    // catch Error
    console.log('Error', e);
  });
```

### Public transport

Let's find position of public transport station in the Czech Republic

```javascript
import { geosearch } from 'geosearch';

geosearch
  .suggest('kokořín', {
    scope: 'pubt', // Only public transport related places
    country: 'cz', // Only from the Czech Republic
  })
  .then((places) => {
    // ... do something cool
    console.log('Results', places);
  })
  .catch((e) => {
    // catch Error
    console.log('Error', e);
  });
```

### More!

Let's try to find **rivers, lakes, mountains, streets, national parks, areas, tourist attractions**, ..., everything what awesome [Mapy.cz Suggest API](https://api.mapy.cz/view?page=suggestadv) can do.

## Results (example)

```javascript
[
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
      zipCode: '',
    },
  },
];
```

## Options

| Option      | Type                                           | Default | Description                                              |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------------- |
| **scope**   | `'muni'` \| `'area'` \| `'pubt'` \| `'street'` | null    | Preferred category of results                            |
| **bounds**  | `{ sw: LatLng, ne: LatLng}`                    | null    | Preffered country boundaries                             |
| **country** | `'cz'` \| `'sk'` \| `'us'` \| `'de'`           | null    | Preferred country (same as bounds but with some presets) |
| **debug**   | boolean                                        | false   | Print additional information to console                  |

## Development

### Developing and debugging library

```bash
yarn start
```

### Run example

You can find and modify it in `example.ts` file

```bash
yarn example
```

### Run tests

```bash
yarn test
```

## License

### Data source

Awesome [Mapy.cz Suggest API](https://api.mapy.cz/view?page=suggestadv) from Seznam.cz

Please read this [license](https://api.mapy.cz/#pact) before use.

### This library

Code of this library is licensed under the [MIT license].

---

&copy; 2020 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

[mit license]: LICENSE
