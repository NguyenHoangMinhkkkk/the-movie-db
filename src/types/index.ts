export type ApiDataResponse<T, E = any> = {
  ok: boolean;
  data: T;
  errorData?: E;
  message?: string;
  status?: number | string;
  statusCode?: number | string;
  code?: number | string;
};

export type TAccount = {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: false;
  username: string;
};

export type TLanguage = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

export type TDiscoverMovieResponse = {
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
  genres?: { id: number; name: string }[];
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
  cert?: string | null;
  runtime?: number | null;
  status?: string;
  tagline?: string;
};

export type TCreditResponse = {
  id: number;
  cast: TCreditCastPerson[];
  crew: TCreditCrewPerson[];
};

export type TCreditCastPerson = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type TCreditCrewPerson = {
  id: number;
  name: string;
  original_name: string;
  job: string; // Director | Writer | ...
  department: string; // Directing | Writing
  known_for_department: string;
  profile_path: string | null;
  popularity: number;
  credit_id: string;
  gender: number;
  adult: boolean;
};

export type TReleaseDatesResponse = {
  id: number;
  results: TReleaseDate[];
};

export type TReleaseDate = {
  iso_3166_1: string;
  release_dates: ReleaseDateItem[];
};

export type ReleaseDateItem = {
  certification: string;
  descriptors: string[];
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
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
