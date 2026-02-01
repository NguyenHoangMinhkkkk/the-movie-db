export default {
  // ====================== Discover
  discoverMovieList: (type: CategoryEnum) => `movie/${type}`,

  // ====================== Search
  searchMovieList: () => `search/movie`,

  // ====================== Detail
  getMovieDetail: (movieId: string) => `movie/${movieId}`,
};
