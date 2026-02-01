import { requestApi } from '@api';
import { DEFAULT } from '@constants';
import { useNavHeader } from '@hooks';
import { ScreenPropsType } from '@navigation/types';
import { basicStyles, colors, metrics } from '@themes';
import { TCreditCastPerson, TCreditCrewPerson, TMovie } from '@types';
import { convertReleaseDateToCert } from '@utils';
import moment from 'moment';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MovieFacts from './MovieFacts';
import MovieOverview from './MovieOverview';
import MovieCasts from './MovieCasts';
import { Spacing } from '@elements';
export type RouteType = {
  movie: TMovie;
};

type Props = ScreenPropsType<'detailMovieScreen'>;
type States = {
  movie: TMovie;
  cert: string | null;
  credit: {
    cast: TCreditCastPerson[];
    crew: TCreditCrewPerson[];
  };
  isError: boolean;
  isRefreshing: boolean;
};

export default function DetailMovieScreen({ navigation, route }: Props) {
  const movieId = route.params?.movie?.id;

  const [movieState, setMovieState] = React.useState<States>({
    movie: route.params?.movie ?? {},
    credit: {
      cast: [],
      crew: [],
    },
    cert: null,
    isError: false,
    isRefreshing: false,
  });

  // default to region US

  const requestMovieDetail = async () => {
    const [responseDetail, responseReleaseDate, responseCredit] =
      await Promise.all([
        requestApi.requestGetMovieDetail(movieId, {
          language: DEFAULT.language,
        }),
        requestApi.requestGetMovieReleaseDates(movieId),
        requestApi.requestGetMovieCredit(movieId, {
          language: DEFAULT.language,
        }),
      ]);

    if (responseDetail.ok && responseReleaseDate.ok && responseCredit.ok) {
      const cert = convertReleaseDateToCert(
        DEFAULT.region,
        responseReleaseDate?.data?.results ?? [],
      );

      setMovieState(prevState => ({
        ...prevState,
        movie: { ...prevState.movie, ...responseDetail.data },
        cert: cert,
        credit: {
          cast: responseCredit.data?.cast ?? [],
          crew: responseCredit.data?.crew ?? [],
        },
        isError: false,
        isRefreshing: false,
      }));
    } else {
      setMovieState(prevState => ({
        ...prevState,
        isError: true,
        isRefreshing: false,
      }));
    }
  };

  React.useEffect(() => {
    if (movieId) requestMovieDetail();
  }, []);

  const { subTitle, movieTitle } = React.useMemo(() => {
    return {
      movieTitle: movieState.movie?.title || 'Movie Detail',
      subTitle: movieState.movie?.release_date
        ? `(${moment(movieState.movie?.release_date).format('YYYY')})`
        : undefined,
    };
  }, [movieState]);

  useNavHeader({
    navigation,
    title: movieTitle,
    customOptions: {
      subTitle: subTitle,
      headerShown: true,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: ScreenThemeColor,
      },
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: ScreenThemeColor }]}>
      <ScrollView style={basicStyles.flex}>
        <MovieFacts movie={movieState.movie} />

        <MovieOverview
          movie={movieState.movie}
          crews={movieState.credit.crew}
        />

        <MovieCasts casts={movieState.credit.cast} />

        <Spacing space={metrics.spacing.x8} />
      </ScrollView>
    </View>
  );
}

const ScreenThemeColor = colors.sky.x5();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ScreenThemeColor,
  },
  posterStyle: {
    width: 112,
    height: '100%',
    minHeight: 154,
    maxHeight: 200,
    backgroundColor: ScreenThemeColor,
    borderRadius: metrics.radius.x2,
    overflow: 'hidden',
  },
  generalInfo: {
    backgroundColor: ScreenThemeColor,
    padding: metrics.spacing.x6,
  },
  certText: {
    paddingVertical: metrics.spacing.x05,
    paddingHorizontal: metrics.spacing.x2,
    borderWidth: metrics.lineWidth * 2,
    borderRadius: metrics.radius.x1,
    borderColor: colors.whiteA(0.7),
  },
  facts: {
    flex: 1,
    paddingHorizontal: metrics.spacing.x4,
    gap: metrics.spacing.x1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
