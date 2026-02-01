export { default as ContextContainer } from './ContextContainer';

import {
  default as MovieContext,
  type MovieContextValueType,
} from './movieContext';

export { MovieContext, type MovieContextValueType };

export const useMovieContext = MovieContext.useContext;
