import { ApiDataResponse, CategoryEnum, TDiscoverMovie, TMovie } from '@types';
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

  requestDiscoverMovieList: (
    type: CategoryEnum,
    params: Record<string, any>,
  ): Promise<ApiDataResponse<TDiscoverMovie>> => {
    console.log('==========params-params=======', type, params);
    return baseApi.api.get(routes.discoverMovieList(type), { params });
  },
  requestSearchMovieList: (
    params: Record<string, any>,
  ): Promise<ApiDataResponse<TDiscoverMovie>> => {
    return baseApi.api.get(routes.searchMovieList(), { params });
  },
  requestGetMovieDetail: (
    movieId: string,
  ): Promise<ApiDataResponse<TMovie>> => {
    return baseApi.api.get(routes.getMovieDetail(movieId));
  },
};

export { createTempApiInstance, requestApi };
