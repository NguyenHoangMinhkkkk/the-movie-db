import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenPropsType } from '@navigation/types';
import { SText } from '@elements';

type Props = ScreenPropsType<'homeTab'>;

export default function HomeTab({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <SText.Regular
        onPress={() => {
          navigation.navigate('detailMovieScreen', { movieId: 'dummy' });
        }}
      >
        {'Home Tab'}
      </SText.Regular>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
