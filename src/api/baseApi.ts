import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Platform } from 'react-native';
import { getReadableVersion } from 'react-native-device-info';

type BasicResponse = {
  status: number;
  error?: boolean;
  message?: string;
  reason?: string;
};
export class BaseApi {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: '',
      withCredentials: true,
      timeout: 15000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'user-agent': `Mobile/${Platform.OS}/${
          Platform.Version
        }/build:${getReadableVersion()}`,
      },
    });

    this.interceptor(this.api);
  }

  private interceptor(api: AxiosInstance) {
    if (__DEV__) {
      api.interceptors.request.use(config => {
        (config as any).metadata = { startTime: new Date() };
        return config;
      });
    }
    api.interceptors.response.use(
      (response: AxiosResponse<BasicResponse>) => {
        const responseData = Promise.resolve({
          ...response,
          ok: true,
          data: response.data,
        });

        return responseData;
      },
      async (error: AxiosError) => {
        const responseErrored = Promise.resolve({
          ...(error.response?.data as Error),
          response: error.response,
          ok: false,
        });

        return responseErrored;
      },
    );
  }

  setBaseEnv(baseURL: string | undefined, token: string | undefined) {
    if (baseURL) {
      this.api.defaults.baseURL = baseURL;
    }
    if (token) {
      this.api.defaults.headers.Authorization = token;
    }
  }
}

export const baseApi = new BaseApi();
