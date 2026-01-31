import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenPropsType } from '@navigation/types';
import { SText } from '@elements';

type Props = ScreenPropsType<'watchListTab'>;

export default function WatchListTab({ navigation }: Props) {
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
