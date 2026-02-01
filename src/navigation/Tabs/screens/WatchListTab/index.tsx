import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenPropsType } from '@navigation/types';
import { SText } from '@elements';
import { useMovieContext } from '@contexts';

type Props = ScreenPropsType<'watchListTab'>;

export default function WatchListTab({ navigation }: Props) {
  const { watchList } = useMovieContext();

  return (
    <View style={styles.container}>
      <SText.Regular>{'WatchListTab'}</SText.Regular>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
