import { create, ApisauceInstance } from 'apisauce';

export function createRequestApi(
  headers?: Record<string, string>,
): ApisauceInstance {
  const api = create({
    baseURL: '',
    headers: headers,
    withCredentials: true,
  });

  return api;
}
