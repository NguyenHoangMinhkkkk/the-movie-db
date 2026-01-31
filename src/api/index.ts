import { ApiDataResponse } from '@types';
import { baseApi, BaseApi } from './baseApi';
import routes from './routes';

const createTempApiInstance = (baseUrl: string) => {
  const temp = new BaseApi();
  temp.setBaseEnv(baseUrl, undefined);
  return temp;
};

const requestApi = {
  api: baseApi.api,
  baseApi: baseApi,
  routesUploadProfileAvatar: routes.uploadAvatar,

  someRequest: (body: any): Promise<ApiDataResponse<{}, {}>> => {
    return baseApi.api.patch(routes.languages, body);
  },
};

export { createTempApiInstance, requestApi };
