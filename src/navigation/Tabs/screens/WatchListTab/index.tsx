import { AccountInfo, MovieList } from '@components';
import { useMovieContext } from '@contexts';
import { SIcon, Spacing, SText, STouchable } from '@elements';
import { ScreenPropsType } from '@navigation/types';
import { basicStyles, colors, metrics } from '@themes';
import { TMovie } from '@types';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

type Props = ScreenPropsType<'watchListTab'>;

export default function WatchListTab({ navigation }: Props) {
  const { watchList, watchListRemove } = useMovieContext();
  const [state, setState] = React.useState({});

  function removeItemFromWatchList(movieId: number) {
    Alert.alert(
      'Remove from Watchlist',
      'Are you sure you want to remove this movie from your watchlist?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            watchListRemove(movieId);
          },
        },
      ],
    );
  }

  const renderFilterAndSort = () => {
    if (watchList.length === 0) {
      return null;
    }
    return (
      <View style={styles.filterAndSort}>
        <View style={basicStyles.rowAlignCenter}>
          <SText.Regular color={colors.gray.x5()}>Filter by:</SText.Regular>
          <STouchable
            style={styles.filterSelect}
            onPress={() => Alert.alert('Feature in development!')}
          >
            <SText.Semibold color={colors.sky.x5()} lineHeight="less">
              Title
            </SText.Semibold>
            <SIcon.Icon
              name="CaretDownIcon"
              weight="bold"
              color={colors.sky.x5()}
            />
          </STouchable>

          <Spacing vertical />

          <View style={basicStyles.rowAlignCenter}>
            <SText.Regular color={colors.gray.x5()}>Order by:</SText.Regular>
            <STouchable style={{}} onPress={() => {}}>
              <SIcon.Icon name="ArrowUpIcon" weight="bold" />
            </STouchable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AccountInfo />

      <View style={styles.filterAndSort}>
        <SText.Semibold>My Watchlist</SText.Semibold>
      </View>
      {renderFilterAndSort()}

      <MovieList
        canLoadmore={false}
        isRefreshing={false}
        isError={false}
        isFetching={false}
        isReady={true}
        isSearching={false}
        movieList={watchList}
        allowRemove={true}
        onRemove={removeItemFromWatchList}
        onPressItem={(movie: TMovie) => {
          navigation.navigate('detailMovieScreen', { movie: movie });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterAndSort: {
    paddingHorizontal: metrics.spacing.x6,
    paddingTop: metrics.spacing.x4,
    paddingBottom: metrics.spacing.x2,
  },
  filterSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: colors.sky.x5(),
    width: 80,
    justifyContent: 'space-between',
    marginHorizontal: metrics.spacing.x2,
  },
});
