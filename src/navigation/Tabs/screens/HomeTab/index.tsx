import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenPropsType } from '@navigation/types';
import { Spacing } from '@elements';
import { requestApi } from '@api';
import MovieCategory from './MovieCategory';
import MovieSort from './MovieSort';
import {
  ApiDataResponse,
  CategoryEnum,
  MovieSortEnum,
  TDiscoverMovieResponse,
  TMovie,
} from '@types';
import { useMovieContext } from '@contexts';
import { metrics } from '@themes';
import { MovieList } from '@components';
import SearchBox from './SearchBox';
import { debounce, mergeArrayAndUniqueById } from '@utils';
import { DEFAULT } from '@constants';

type Props = ScreenPropsType<'homeTab'>;

type States = {
  page: number;
  totalPages: number;
  movieList: TMovie[];
  isError: boolean;
  isReady: boolean;
  isFetching: boolean;
  isRefreshing: boolean;
};

export default function HomeTab({ navigation }: Props) {
  const { sortKey, setSort, categoryKey, setCategory } = useMovieContext();

  const searchTextRef = React.useRef<string>('');

  const [state, setState] = React.useState<States>({
    page: 1,
    totalPages: 1,
    movieList: [],
    isError: false,
    isReady: false,
    isFetching: false,
    isRefreshing: false,
  });

  const requestSearchMovie = async (
    isRefresh: boolean = false,
    page: number = 1,
  ) => {
    setState(prevState => ({
      ...prevState,
      isFetching: !isRefresh,
      isRefreshing: isRefresh,
    }));

    const response = await requestApi.requestSearchMovieList({
      page: String(page),
      language: DEFAULT.language,
      query: encodeURIComponent(searchTextRef.current.trim()),
    });

    hanldingResponse(response, isRefresh, page);
  };

  const requestDiscoverMovieList = async (
    isRefresh: boolean = false,
    page: number = 1,
    params: {
      sortKey?: MovieSortEnum;
      categoryKey?: CategoryEnum;
    } = {
      sortKey,
      categoryKey,
    },
  ) => {
    setState(prevState => ({
      ...prevState,
      isFetching: !isRefresh,
      isRefreshing: isRefresh,
    }));

    const response = await requestApi.requestDiscoverMovieList(
      params.categoryKey ?? categoryKey,
      {
        page: String(page),
        language: DEFAULT.language,
      },
    );

    hanldingResponse(response, isRefresh, page);
  };

  const hanldingResponse = (
    response: ApiDataResponse<TDiscoverMovieResponse>,
    isRefresh: boolean,
    page: number,
  ) => {
    if (response.ok && Array.isArray(response.data.results)) {
      setState(prevState => ({
        ...prevState,
        page: page,
        isError: false,
        isReady: true,
        isFetching: false,
        isRefreshing: false,
        totalPages: response.data.total_pages ?? 1,
        movieList:
          isRefresh || page === 1
            ? response.data.results
            : mergeArrayAndUniqueById(
                prevState.movieList,
                response.data.results,
              ),
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        page: 1,
        totalPages: 1,
        movieList: [],
        isError: true,
        isReady: true,
        isFetching: false,
        isRefreshing: false,
      }));
    }
  };

  React.useEffect(() => {
    requestDiscoverMovieList();
  }, []);

  const debouncedSearch = debounce((text: string) => {
    searchTextRef.current = text.trim();
    if (searchTextRef.current) requestSearchMovie(false, 1);
    else requestDiscoverMovieList();
  }, 300);

  const onLoadmore = () => {
    if (searchTextRef.current) {
      requestSearchMovie(false, state.page + 1);
    } else {
      requestDiscoverMovieList(false, state.page + 1);
    }
  };

  const onRefresh = () => {
    if (searchTextRef.current) {
      requestSearchMovie(true);
    } else {
      requestDiscoverMovieList(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <MovieCategory
          disabled={state.isFetching}
          selectedCategory={categoryKey}
          onSelectCategory={newCategory => {
            setCategory(newCategory);
            requestDiscoverMovieList(false, 1, { categoryKey: newCategory });
          }}
        />

        <MovieSort
          disabled={state.isFetching}
          selectedSortKey={sortKey}
          onSelectSortKey={newSortKey => {
            setSort(newSortKey);
            requestDiscoverMovieList(false, 1, { sortKey: newSortKey });
          }}
        />

        <SearchBox onSearchTextChange={text => debouncedSearch(text)} />
      </View>

      <Spacing space={metrics.spacing.x4} />

      <MovieList
        isSearching={!!searchTextRef.current}
        isError={state.isError}
        isReady={state.isReady}
        isFetching={state.isFetching}
        isRefreshing={state.isRefreshing}
        movieList={state.movieList}
        canLoadmore={state.page < state.totalPages}
        onPressItem={(movie: TMovie) => {
          navigation.navigate('detailMovieScreen', { movie: movie });
        }}
        onRefresh={onRefresh}
        onLoadmore={onLoadmore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.spacing.x5,
  },
  filterContainer: {
    paddingHorizontal: metrics.spacing.x6,
    gap: metrics.spacing.x4,
  },
});
