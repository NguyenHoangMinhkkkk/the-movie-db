import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenPropsType } from '@navigation/types';
import { Spacing } from '@elements';
import { requestApi } from '@api';
import MovieCategory from './MovieCategory';
import MovieSort from './MovieSort';
import { CategoryEnum, MovieSortEnum, TMovie } from '@types';
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
  searchText: string;
};

export default function HomeTab({ navigation }: Props) {
  const { sortKey, setSort, categoryKey, setCategory } = useMovieContext();

  const [state, setState] = React.useState<States>({
    page: 1,
    totalPages: 1,
    movieList: [],
    searchText: '',
    isError: false,
    isReady: false,
    isFetching: false,
    isRefreshing: false,
  });

  const movieDBGetQueryString = async (
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
        sort_by: params.sortKey ?? sortKey,
        language: DEFAULT.language,
      },
    );

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
    movieDBGetQueryString();
  }, []);

  const debouncedSearch = debounce((text: string) => {
    setState(prevState => ({
      ...prevState,
      searchText: text,
    }));
  }, 300);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <MovieCategory
          disabled={state.isFetching}
          selectedCategory={categoryKey}
          onSelectCategory={newCategory => {
            setCategory(newCategory);
            movieDBGetQueryString(false, 1, { categoryKey: newCategory });
          }}
        />

        <MovieSort
          disabled={state.isFetching}
          selectedSortKey={sortKey}
          onSelectSortKey={newSortKey => {
            setSort(newSortKey);
            movieDBGetQueryString(false, 1, { sortKey: newSortKey });
          }}
        />

        <SearchBox
          searchText={state.searchText}
          onSearchTextChange={text => debouncedSearch(text)}
        />
      </View>

      <Spacing space={metrics.spacing.x4} />

      <MovieList
        isSearching={!!state.searchText}
        isError={state.isError}
        isReady={state.isReady}
        isFetching={state.isFetching}
        isRefreshing={state.isRefreshing}
        movieList={state.movieList}
        canLoadmore={state.page < state.totalPages}
        onPressItem={(movie: TMovie) => {
          navigation.navigate('detailMovieScreen', { movie: movie });
        }}
        onRefresh={() => movieDBGetQueryString(true)}
        onLoadmore={() => movieDBGetQueryString(false, state.page + 1)}
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
