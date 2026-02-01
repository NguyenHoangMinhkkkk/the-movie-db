import { MovieContext } from './index';
import React from 'react';
type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => {
  const movieContextValue = MovieContext.useContextValue();

  return (
    <MovieContext.Provider value={movieContextValue}>
      {children}
    </MovieContext.Provider>
  );
};
