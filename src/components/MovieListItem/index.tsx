import { DEFAULT } from '@constants';
import { SIcon, SImage, SText, STouchable } from '@elements';
import { basicStyles, colors, metrics } from '@themes';
import { TMovie } from '@types';
import { buildImageUrl } from '@utils';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  movie: TMovie;
  onPress: () => void;
  allowRemove?: boolean;
  onRemove: () => void;
};

export default function MovieListItem({
  movie,
  onPress,
  onRemove,
  allowRemove,
}: Props) {
  const imageUrl = !movie.poster_path
    ? ''
    : buildImageUrl(DEFAULT.mediaUrl, 'w185', movie.poster_path ?? '');

  return (
    <STouchable style={styles.container} onPress={() => onPress()}>
      <View style={styles.contentContainer}>
        <View style={basicStyles.flexRow}>
          <SImage
            source={{ uri: imageUrl }}
            style={styles.imageView}
            resizeMode="contain"
          />

          <View style={styles.movieInfor}>
            <View style={basicStyles.flex}>
              {movie.title || movie.original_title ? (
                <SText.Semibold>
                  {movie.title || movie.original_title}
                </SText.Semibold>
              ) : null}

              {movie.release_date ? (
                <SText.Regular size="sm" color={colors.gray.x5()}>
                  {moment(movie.release_date).format('D MMMM YYYY')}
                </SText.Regular>
              ) : null}
            </View>

            {movie.overview ? (
              <SText.Regular numberOfLines={2} size="sm">
                {movie.overview}
              </SText.Regular>
            ) : null}
          </View>
          {allowRemove ? (
            <STouchable
              style={styles.removeButton}
              onPress={() => onRemove?.()}
            >
              <SIcon.Icon name="XIcon" />
            </STouchable>
          ) : null}
        </View>
      </View>
    </STouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: metrics.lineWidth,
    borderRadius: metrics.radius.x2,
    borderColor: colors.gray.x3(),
    ...basicStyles.shadowStyle,
  },
  contentContainer: {
    borderRadius: metrics.radius.x2,
    overflow: 'hidden',
  },
  imageView: {
    height: 144,
    width: 95,
  },
  movieInfor: {
    flex: 1,
    padding: metrics.spacing.x4,
  },
  removeButton: {
    padding: metrics.spacing.x2,
    alignSelf: 'flex-start',
  },
});
