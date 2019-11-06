import axios from 'axios';
import { API_URL } from './variables';

export class MapyCz {
  private options?: any;

  constructor() {}

  async geoocode(
    query: string,
    options?: any | undefined
  ): Promise<any> {
    this.options = options;
    return axios.get(`${API_URL}?count=5&phrase=${encodeURIComponent(query)}`);
  }
}