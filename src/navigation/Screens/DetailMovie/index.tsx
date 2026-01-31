import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenPropsType } from '@navigation/types';

export type RouteType = {
  movieId: string;
};

type Props = ScreenPropsType<'detailMovieScreen'>;

export default function DetailMovieScreen({}: Props) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
