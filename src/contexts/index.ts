export { default as ContextContainer } from './ContextContainer';

import {
  default as MovieContext,
  type MovieContextValueType,
} from './movieContext';
import {
  default as AccountContext,
  type AccountContextValueType,
} from './accountContext';

export { MovieContext, type MovieContextValueType };
export { AccountContext, type AccountContextValueType };

export const useMovieContext = MovieContext.useContext;
export const useAccountContext = AccountContext.useContext;
