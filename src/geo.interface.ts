import { AxiosError, AxiosResponse } from 'axios';

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
  category: GeocodingScope | string | undefined;
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

export interface LatLng {
  lat: number;
  lng: number;
}

export interface LatLngBounds {
  sw: LatLng;
  ne: LatLng;
}

export interface GeocodingOptions {
  scope?: GeocodingScope;
  bounds?: LatLngBounds;
  country?: GeocodingCountries;
  debug?: boolean;
}

export type GeocoderErrorMessage = 'Error' | 'Network Error' | 'Input Error' | 'API request failed';

export interface GeocoderError extends Error {
  constructor: (message: GeocoderErrorMessage) => void;
  isGeocoderError: boolean;
  message: GeocoderErrorMessage;
  axiosError?: AxiosError;
  axiosResponse?: AxiosResponse;
}

export type GeocodingCountries = 'cz' | 'sk' | 'de' | 'us' | 'gb';

export type GeocodingScope = 'muni' | 'area' | 'pubt' | 'street';
