import {
  ApiDataResponse,
  CategoryEnum,
  TReleaseDatesResponse,
  TDiscoverMovieResponse,
  TMovie,
  TLanguage,
  TCreditResponse,
  TAccount,
} from '@types';
import { baseApi, BaseApi } from './baseApi';
import routes from './routes';

const createTempApiInstance = (baseUrl: string) => {
  const temp = new BaseApi();
  temp.setBaseEnv(baseUrl, undefined);
  return temp;
};

const requestApi = {
  apiInstance: baseApi.api,
  baseApi: baseApi,
  baseUrl: String(baseApi.api.defaults.baseURL || ''),

  requestAccountInfo: (
    accountId: number,
  ): Promise<ApiDataResponse<TAccount>> => {
    return baseApi.api.get(routes.getAccountInfo(accountId));
  },
  requestGetConfigurationLanguages: (): Promise<
    ApiDataResponse<TLanguage[]>
  > => {
    return baseApi.api.get(routes.getConfigurationLanguages());
  },
  requestDiscoverMovieList: (
    type: CategoryEnum,
    params: Record<string, any> = {},
  ): Promise<ApiDataResponse<TDiscoverMovieResponse>> => {
    return baseApi.api.get(routes.discoverMovieList(type), { params });
  },
  requestSearchMovieList: (
    params: Record<string, any> = {},
  ): Promise<ApiDataResponse<TDiscoverMovieResponse>> => {
    return baseApi.api.get(routes.searchMovieList(), { params });
  },
  requestGetMovieDetail: (
    movieId: number,
    params: Record<string, any> = {},
  ): Promise<ApiDataResponse<TMovie>> => {
    return baseApi.api.get(routes.getMovieDetail(movieId), { params });
  },
  requestGetMovieReleaseDates: (
    movieId: number,
    params: Record<string, any> = {},
  ): Promise<ApiDataResponse<TReleaseDatesResponse>> => {
    return baseApi.api.get(routes.getMovieReleaseDate(movieId), { params });
  },
  requestGetMovieCredit: (
    movieId: number,
    params: Record<string, any> = {},
  ): Promise<ApiDataResponse<TCreditResponse>> => {
    return baseApi.api.get(routes.getMovieCredit(movieId), { params });
  },
};

export { createTempApiInstance, requestApi };
