import { requestApi } from '@api';
import { ENV } from '@constants';

import { delay } from '@utils';

export default async function initialize() {
  requestApi.baseApi.setBaseEnv(ENV.baseUrl, `Bearer ${ENV.accessToken}`);

  await delay(500);

  return true;
}
