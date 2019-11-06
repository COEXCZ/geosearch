export interface GeocodingUserData {
  bbox: number[];
  country: string;
  district: string;
  evidenceNumber: string;
  highlight: number[];
  highlightSecond: number[];
  houseNumber: string;
  iconType: string;
  id: number;
  img: string;
  importance: number;
  latitude: number;
  longitude: number;
  muniId: string;
  municipality: string;
  nuts: string;
  poiType: string;
  poiTypeId: number;
  popularity: number;
  premiseIds: any[];
  quarter: string;
  region: string;
  source: string;
  street: string;
  streetNumber: string;
  suggestFirstRow: string;
  suggestSecondRow: string;
  suggestThirdRow: string;
  ward: string;
  wikiId: string;
  zipCode: string;
}

export interface GeocodingResult {
  category: string;
  highlight: number[];
  sentence: string;
  userData: GeocodingUserData;
}

export interface GeocodingData {
  deletedFromBack: number;
  hasGeo: number;
  hasService: number;
  id: string;
  result: GeocodingResult[];
}

export interface GeocodingOptions {
  scope?: GeocodingScope;
  country?: GeocodingCountryBounds;
  bounds?: string;
}

export type GeocodingScope = 'muni';

export enum GeocodingCountryBounds {
  cz = '48.5370786,12.0921668|51.0746358,18.8927040'
}
