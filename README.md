[![npm version](https://badge.fury.io/js/%40coex%2Fgeosearch.svg)](https://www.npmjs.com/package/@coex/geosearch)
![](https://github.com/COEXCZ/geosearch/workflows/Build%20&%20Run%20tests%20&%20Publish/badge.svg)

# GeoSearch

> Simple nodejs library to find places all around the world
>
> _Datasource: Mapy.cz Suggest API_

## Demo

https://stackblitz.com/edit/geosearch

## Install

via yarn

```bash
yarn add @coex/geosearch
```

via npm

```bash
npm install @coex/geosearch
```

## Usage

### City, town, village

Let's find all _Springfields_ in the World

```javascript
import { GeoSearch } from '@coex/geosearch';

const geoSearch = new GeoSearch();

geoSearch
  .suggest('Springfield', {
    scope: 'muni', // Only cities, villages, (municipalities)
  })
  .then((places) => {
    // ... do something cool
    console.log('Results', places);
  })
  .catch((e) => {
    // Catch Error
    console.error('Error', e);
  });
```

### Places start with

Let's find cities or villages start with _Ber_ in _Germany_

```javascript
import { GeoSearch } from '@coex/geosearch';

const geoSearch = new GeoSearch();

geoSearch
  .suggest('Ber', {
    scope: 'muni', // Only cities, villages, (municipalities)
    country: 'de', // Only from Germany
  })
  .then((places) => {
    // ... do something cool
    console.log('Results', places);
  })
  .catch((e) => {
    // Catch Error
    console.error('Error', e);
  });
```

### Public transport

Let's find position of public transport station in the Czech Republic

```javascript
import { GeoSearch } from '@coex/geosearch';

const geoSearch = new GeoSearch();

geoSearch
  .suggest('kokořín', {
    scope: 'pubt', // Only public transport related places
    country: 'cz', // Only from the Czech Republic
  })
  .then((places) => {
    // ... do something cool
    console.log('Results', places);
  })
  .catch((e) => {
    // Catch Error
    console.error('Error', e);
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

| Option      | Type                                                     | Default | Description                                                                                     |
| ----------- | -------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| **scope**   | `'muni'` \| `'area'` \| `'pubt'` \| `'street'`           | null    | Preferred category of results                                                                   |
| **bounds**  | `{ sw: LatLng, ne: LatLng}`                              | null    | Preffered country boundaries                                                                    |
| **country** | `'cz'` \| `'sk'` \| `'us'` \| `'de'` \| `'gb'` \| `'jp'` | null    | Preferred country. Same as bounds but with some presets. Feel free to add more via pull request |
| **debug**   | boolean                                                  | false   | Print additional information to console                                                         |

## Development

### Developing and debugging library

```bash
yarn start
```

### Run demo locally

You can find and modify it in `demo/index.ts` file

```bash
yarn demo
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

&copy; 2021 [COEX](https://www.coex.cz)

[mit license]: LICENSE
