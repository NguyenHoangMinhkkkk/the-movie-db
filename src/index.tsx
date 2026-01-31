import React from 'react';
import { StyleSheet, View } from 'react-native';

export type RouteType = {};
type Props = {};

export default function RootApp(_: Props) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
