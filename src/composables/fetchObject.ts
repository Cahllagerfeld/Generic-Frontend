import useSWRV from 'swrv';
import { fetchWithBaseUrl } from '../data/fetcher';

export function useObjectWithKey(objectType: string, objectKey: string) {
  const { data, error, mutate, isValidating } = useSWRV(
    `/${objectType}/${objectKey}`,
    fetchWithBaseUrl,
  );

  return { data, error, mutate, isValidating };
}

export function useObject(objectType: string) {
  const { data, error, mutate, isValidating } = useSWRV(
    `/${objectType}`,
    fetchWithBaseUrl,
  );
  return { data, error, mutate, isValidating };
}
