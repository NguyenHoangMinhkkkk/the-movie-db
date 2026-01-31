import { SText } from '@elements';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Root() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
