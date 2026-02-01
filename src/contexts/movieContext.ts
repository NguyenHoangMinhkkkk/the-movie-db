import { StorageKey } from '@constants';
import { createContext } from '@hooks';
import { TMovie, MovieSortEnum, CategoryEnum, TLanguage } from '@types';
import { AppStorage } from '@utils';

export type MovieContextValueType = {
  sortKey: MovieSortEnum;
  categoryKey: CategoryEnum;
  watchList: TMovie[];
  languageConfig: TLanguage[];
};

type ContextActionType = {
  reset: () => void;
  setSort: (nextSort: MovieSortEnum) => void;
  setCategory: (nextCategory: CategoryEnum) => void;
  watchListAdd: (movieItem: TMovie) => void;
  watchListRemove: (movieId: number) => void;
  setLanguageConfig: (languageConfig: TLanguage[]) => void;
};
type ContextCustomActions = {
  itemExistInWatchList: (movieId: number) => boolean;
};

const DefaultContextValue: MovieContextValueType = {
  sortKey: MovieSortEnum['title.asc'],
  categoryKey: CategoryEnum.now_playing,
  watchList: [],
  languageConfig: [],
};

const getStorageData = (): MovieContextValueType => {
  try {
    const sortBy = AppStorage.getString(StorageKey.SORT_BY);
    const categoryBy = AppStorage.getString(StorageKey.CATEGORY_BY);
    const watchList = AppStorage.getString(StorageKey.WATCH_LIST);

    return {
      ...DefaultContextValue,
      sortKey: (sortBy as MovieSortEnum) || DefaultContextValue.sortKey,
      categoryKey:
        (categoryBy as CategoryEnum) || DefaultContextValue.categoryKey,
      watchList: watchList
        ? JSON.parse(watchList)
        : DefaultContextValue.watchList,
    };
  } catch (error) {
    return DefaultContextValue;
  }
};

export default createContext<
  MovieContextValueType,
  ContextActionType,
  ContextCustomActions
>(
  getStorageData(),
  () => ({
    reset: () => {
      return DefaultContextValue;
    },
    setSort: (state, nextSortKey) => {
      AppStorage.set(StorageKey.SORT_BY, nextSortKey);
      return { ...state, sortKey: nextSortKey };
    },
    setCategory: (state, nextCategory) => {
      AppStorage.set(StorageKey.CATEGORY_BY, nextCategory);
      return { ...state, categoryKey: nextCategory };
    },
    watchListAdd: (state, movieItem) => {
      const nextWatchList = [...state.watchList, movieItem];
      AppStorage.set(StorageKey.WATCH_LIST, JSON.stringify(nextWatchList));
      return { ...state, watchList: nextWatchList };
    },
    watchListRemove: (state, movieId) => {
      const nextWatchList = state.watchList.filter(item => item.id !== movieId);
      AppStorage.set(StorageKey.WATCH_LIST, JSON.stringify(nextWatchList));
      return { ...state, watchList: nextWatchList };
    },
    setLanguageConfig: (state, languageConfig) => {
      return { ...state, languageConfig: languageConfig };
    },
  }),
  (_, state) => ({
    itemExistInWatchList: movieId => {
      return state.watchList.some(item => item.id === movieId);
    },
  }),
);
