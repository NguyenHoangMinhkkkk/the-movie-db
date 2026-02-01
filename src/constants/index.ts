export { default as StorageKey } from './StorageKey';
const BASE_URL = 'https://api.themoviedb.org/3/';
const MEDIA_URL = 'https://image.tmdb.org/t/p/';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAxNTk1OTA0MTFkMTcxNzNjNGVlZjBlODViYzJmZiIsIm5iZiI6MTc2OTg1ODk5NC4xODU5OTk5LCJzdWIiOiI2OTdkZTdiMjE0ZGQ3YjMyMGFjZmUzMjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TbZkioTzlbnYbIQL4GFrI0hvxd6Gm1pQB8kSnE_ZgK4';

export const DEFAULT = {
  baseUrl: BASE_URL,
  mediaUrl: MEDIA_URL,
  accessToken: ACCESS_TOKEN,
  accountId: 22722588,
  region: 'US',
  language: 'en-US',
};
