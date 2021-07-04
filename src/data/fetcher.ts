import axios, { AxiosResponse } from 'axios';
import { FetchError } from './fetchError';

const baseUrl = '';

export async function fetchWithBaseUrl(url: string) {
  const fullUrl = baseUrl + url;

  const response: AxiosResponse = await axios.get(fullUrl);

  if (response.status < 200 || response.status >= 300) {
    const fetchError = new FetchError('Error performing request');
    fetchError.status = response.status;
    throw FetchError;
  }

  return response.data;
}
