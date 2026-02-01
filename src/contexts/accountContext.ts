import { createContext } from '@core/core';
import { TAccount } from '@types';

export type AccountContextValueType = {
  account: TAccount;
};

type ContextActionType = {
  reset: () => void;
  setAccountData: (accountData: TAccount) => void;
};

const DefaultContextValue: AccountContextValueType = {
  account: {} as TAccount,
};

export default createContext<AccountContextValueType, ContextActionType>(
  DefaultContextValue,
  () => ({
    reset: () => {
      return DefaultContextValue;
    },
    setAccountData(state, accountData) {
      return {
        ...state,
        account: accountData,
      };
    },
  }),
);
