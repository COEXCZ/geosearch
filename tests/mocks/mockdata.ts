import { AxiosError, AxiosResponse } from 'axios';
import { GeoSearchError } from '../../src/interface';

export const axiosResponseMock: AxiosResponse = {
  data: 'data',
  status: 401,
  statusText: 'statusText',
  headers: 'headers',
  config: {},
};

export const axiosErrorMock: AxiosError = {
  name: 'test',
  message: 'message',
  config: {},
  isAxiosError: true,
  toJSON: () => {
    return function test() {};
  },
};

export const GeoSearchErrorMock: GeoSearchError = {
  name: 'Test',
  constructor: (message) => {
    return function test() {
      return message;
    };
  },
  isGeoSearchError: true,
  message: 'Error',
};
