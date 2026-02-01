import { CircularProgress } from '@components';
import { useMovieContext } from '@contexts';
import { SIcon, Spacing, SText, STouchable } from '@elements';
import { basicStyles, colors, metrics } from '@themes';
import { TCreditCrewPerson, TMovie } from '@types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  movie: TMovie;
  crews: TCreditCrewPerson[];
};

export default function MovieOverview({ movie, crews }: Props) {
  const { itemExistInWatchList, watchListAdd, watchListRemove } =
    useMovieContext();

  const isInWatchlist = itemExistInWatchList(movie.id);

  const { userScore, directors, writers, overview, tagline } =
    React.useMemo(() => {
      return {
        userScore: movie?.vote_average ?? null,
        tagline: movie?.tagline || '',
        overview: movie?.overview || '',
        directors: crews
          ?.filter(crew => crew.job === 'Director')
          .map(c => c.name)
          .join(', '),
        writers: crews
          ?.filter(crew => crew.job === 'Writer')
          .map(c => c.name)
          .join(', '),
      };
    }, [movie?.vote_average, movie?.tagline, movie?.overview, crews]);

  const renderWatchlistButton = () => {
    if (isInWatchlist) {
      return (
        <View style={styles.removeWatchlist}>
          <SIcon.Icon
            name="CheckIcon"
            size={metrics.iconSize.x5}
            weight="bold"
          />
          <SText.Semibold> Added to the watchlist!</SText.Semibold>
          <Spacing space={metrics.spacing.x3} vertical />
          <STouchable
            onPress={() => {
              watchListRemove(movie.id);
            }}
          >
            <SText.Regular
              size="sm"
              style={basicStyles.textDecorationUnderLine}
              lineHeight="more"
            >
              Remove from watchlist
            </SText.Regular>
          </STouchable>
        </View>
      );
    }
    return (
      <STouchable
        style={styles.addWatchlist}
        onPress={() => {
          watchListAdd(movie);
        }}
      >
        <SIcon.Icon
          name="BookmarkIcon"
          weight="fill"
          size={metrics.iconSize.x5}
          color={isInWatchlist ? colors.yellow.x4() : colors.white}
        />
        <SText.Semibold color={colors.white}>
          {'Add to Watchlist'}
        </SText.Semibold>
      </STouchable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={basicStyles.row}>
        <View style={[basicStyles.flex, basicStyles.alignItemsStart]}>
          <View
            style={{
              backgroundColor: colors.sky.x95(),
              borderRadius: metrics.radius.max,
              padding: metrics.spacing.x1,
            }}
          >
            <CircularProgress
              lineWidth={3}
              size={54}
              percent={userScore * 10}
              backgroundLineWidth={3}
              capSize={3}
              tintColor={colors.green.x3()}
              backgroundColorLineColor={colors.gray.x6()}
            >
              <SText.Black size="xs" color={colors.white}>
                {(userScore * 10).toFixed(0)}%
              </SText.Black>
            </CircularProgress>
          </View>
          <Spacing space={metrics.spacing.x2} />
          <SText.Black size="lg" color={colors.white}>
            {'User Score'}
          </SText.Black>
        </View>
        <View style={styles.crew}>
          {directors ? (
            <View>
              <SText.Semibold color={colors.white}>{directors}</SText.Semibold>
              <SText.Regular color={colors.white}>Director</SText.Regular>
            </View>
          ) : null}
          {writers ? (
            <View>
              <SText.Semibold color={colors.white}>{writers}</SText.Semibold>
              <SText.Regular color={colors.white}>Writer</SText.Regular>
            </View>
          ) : null}
        </View>
      </View>

      <View style={{ marginVertical: metrics.spacing.x4 }}>
        <SText.Regular size="xl" color={colors.white}>
          {tagline}
        </SText.Regular>
      </View>

      <SText.Bold size="2xl" color={colors.white}>
        {'Overview'}
      </SText.Bold>

      <Spacing space={metrics.spacing.x2} />

      <SText.Regular color={colors.white}>{overview}</SText.Regular>

      {renderWatchlistButton()}
    </View>
  );
}

const ThemeColor = colors.sky.x4();

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor,
    padding: metrics.spacing.x6,
  },
  crew: {
    gap: metrics.spacing.x4,
    flex: 1,
  },
  removeWatchlist: {
    marginTop: metrics.spacing.x6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: metrics.spacing.x2,
  },
  addWatchlist: {
    marginTop: metrics.spacing.x6,
    borderWidth: metrics.lineWidth,
    borderColor: colors.white,
    padding: metrics.spacing.x4,
    paddingVertical: metrics.spacing.x2,
    borderRadius: metrics.radius.x2,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: metrics.spacing.x2,
  },
});
