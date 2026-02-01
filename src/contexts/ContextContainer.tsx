import { MovieContext, AccountContext } from './index';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => {
  const movieContextValue = MovieContext.useContextValue();
  const accountContextValue = AccountContext.useContextValue();

  return (
    <AccountContext.Provider value={accountContextValue}>
      <MovieContext.Provider value={movieContextValue}>
        {children}
      </MovieContext.Provider>
    </AccountContext.Provider>
  );
};
