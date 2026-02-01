import { CategoryEnum } from '@types';

export default {
  // ====================== Account
  getAccountInfo: (accountId: number) => `account/${accountId}`,
  // ====================== Configuration
  getConfigurationLanguages: () => `configuration/languages`,
  // ====================== Discover
  discoverMovieList: (type: CategoryEnum) => `movie/${type}`,

  // ====================== Search
  searchMovieList: () => `search/movie`,

  // ====================== Detail
  getMovieDetail: (movieId: number) => `movie/${movieId}`,
  getMovieReleaseDate: (movieId: number) => `movie/${movieId}/release_dates`,
  getMovieCredit: (movieId: number) => `movie/${movieId}/credits`,
};
