export type ApiDataResponse<T, E = any> = {
  ok: boolean;
  data: T;
  errorData?: E;
  message?: string;
  status?: number | string;
  statusCode?: number | string;
  code?: number | string;
};

export type TDiscoverMovie = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
};

export type TMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieQueryObject = {
  page: number;
  language: 'en-US';
};
export enum CategoryEnum {
  upcoming = 'upcoming',
  now_playing = 'now_playing',
  popular = 'popular',
}
export enum MovieSortEnum {
  'primary_release_date.asc' = 'primary_release_date.asc', // release date
  'title.asc' = 'title.asc', // alphabetical
  'vote_average.asc' = 'vote_average.asc', // rating
}
