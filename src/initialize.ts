import { requestApi } from '@api';
import { DEFAULT } from '@constants';
import { TAccount } from '@types';

import { delay } from '@utils';

export default async function initialize() {
  requestApi.baseApi.setBaseEnv(
    DEFAULT.baseUrl,
    `Bearer ${DEFAULT.accessToken}`,
  );

  const languageConfig = await requestApi.requestGetConfigurationLanguages();
  const accountInfo = await requestApi.requestAccountInfo(DEFAULT.accountId);

  // TODO handle exception {return error}

  await delay(100);

  return {
    languageConfig: languageConfig.ok ? languageConfig.data : [],
    accountInfo: accountInfo.ok ? accountInfo.data : ({} as TAccount),
  };
}
