import { ImageSrcs } from '@assets';
import { SImage, SText } from '@elements';
import { colors, metrics } from '@themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  isError: boolean;
  isEmpty: boolean;
  isEmptySearch: boolean;
};

export default function ListEmpty(props: Props) {
  const renderCase = () => {
    if (props.isError) {
      return (
        <>
          <SImage
            resizeMode="contain"
            style={styles.image}
            source={ImageSrcs.ErrorPlaceholder}
          />
          <SText.Regular color={colors.gray.x5()}>
            {'Oops! Something went wrong. Try again in a moment.'}
          </SText.Regular>
        </>
      );
    }
    if (props.isEmptySearch) {
      return (
        <>
          <SImage
            resizeMode="contain"
            style={styles.image}
            source={ImageSrcs.SearchPlaceholder}
          />
          <SText.Regular color={colors.gray.x5()}>
            {'Nothing found. Try a different keyword.'}
          </SText.Regular>
        </>
      );
    }
    if (props.isEmpty) {
      return (
        <>
          <SImage
            resizeMode="contain"
            style={styles.image}
            source={ImageSrcs.EmptyPlaceholder}
          />
          <SText.Regular color={colors.gray.x5()}>
            {'No movies here yet. Check back soon.'}
          </SText.Regular>
        </>
      );
    }

    return null;
  };

  return <View style={styles.container}>{renderCase()}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 120,
    marginBottom: metrics.spacing.x2,
  },
});
