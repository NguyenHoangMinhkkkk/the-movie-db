import { createRequestApi } from './api';

export default (() => {
  const ApiInstance = createRequestApi({
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  });

  return {
    get requestApiInstance() {
      return ApiInstance;
    },
    resetBaseUrl() {
      ApiInstance.setBaseURL('');
    },
  };
})();
