import { DEFAULT } from '@constants';
import { useMovieContext } from '@contexts';
import { SImage, SText } from '@elements';
import { basicStyles, colors, metrics } from '@themes';
import { TMovie } from '@types';
import { buildImageUrl, convertLanguageKey, minutesToRuntime } from '@utils';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  movie: TMovie;
};

export default function MovieFacts({ movie }: Props) {
  const { languageConfig } = useMovieContext();
  // default to region US
  const {
    genres,
    posterUrl,
    cert,
    releaseDate,
    runtime,
    status,
    originalLanguage,
  } = React.useMemo(() => {
    return {
      cert: movie.cert,
      runtime: minutesToRuntime(movie?.runtime),
      genres: (movie?.genres ?? []).map(g => g.name).join(', '),
      originalLanguage: convertLanguageKey(
        movie?.original_language,
        languageConfig,
      ),
      status: movie?.status || '',
      releaseDate: movie?.release_date
        ? moment(movie.release_date).format('DD/MM/YYYY')
        : '',
      posterUrl: movie?.poster_path
        ? buildImageUrl(DEFAULT.mediaUrl, 'w185', movie.poster_path)
        : '',
    };
  }, [
    movie?.cert,
    movie?.runtime,
    movie?.genres,
    movie?.original_language,
    movie?.status,
    movie?.release_date,
    movie?.poster_path,
    languageConfig,
  ]);

  return (
    <View style={styles.generalInfo}>
      <View style={basicStyles.row}>
        <SImage
          source={{ uri: posterUrl }}
          style={styles.posterStyle}
          resizeMode="cover"
        />
        <View style={styles.facts}>
          {cert ? (
            <View style={styles.certText}>
              <SText.Regular color={colors.whiteA(0.7)} lineHeight="less">
                {cert}
              </SText.Regular>
            </View>
          ) : null}

          {releaseDate || runtime ? (
            <SText.Regular>
              <SText.Regular color={colors.white}>{releaseDate}</SText.Regular>
              {runtime ? (
                <SText.Regular color={colors.white}>
                  {` • ${runtime}`}
                </SText.Regular>
              ) : null}
            </SText.Regular>
          ) : null}

          {genres ? (
            <SText.Regular color={colors.white}>{genres}</SText.Regular>
          ) : null}

          {status ? (
            <SText.Regular>
              <SText.Semibold color={colors.white}>{'Status: '}</SText.Semibold>
              <SText.Regular color={colors.white}>{status}</SText.Regular>
            </SText.Regular>
          ) : null}

          {originalLanguage ? (
            <SText.Regular>
              <SText.Semibold color={colors.white}>
                {'Original Language: '}
              </SText.Semibold>
              <SText.Regular color={colors.white}>
                {originalLanguage}
              </SText.Regular>
            </SText.Regular>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const ThemeColor = colors.sky.x5();

const styles = StyleSheet.create({
  posterStyle: {
    width: 112,
    height: '100%',
    minHeight: 154,
    maxHeight: 200,
    backgroundColor: ThemeColor,
    borderRadius: metrics.radius.x2,
    overflow: 'hidden',
  },
  generalInfo: {
    backgroundColor: ThemeColor,
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
