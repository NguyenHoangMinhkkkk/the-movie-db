import api from '../api';

export default {
  setBaseURL: (url: string) => {
    api.requestApiInstance.setBaseURL(url);
  },
  getBaseURL: () => {
    return api.requestApiInstance.getBaseURL();
  },
  setHeader: (key: string, value: string) => {
    api.requestApiInstance.setHeader(key, value);
  },
  getHeader: () => {
    return api.requestApiInstance.headers;
  },
};
