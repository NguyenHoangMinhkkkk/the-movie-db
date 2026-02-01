import { colors, metrics } from '@core/themes';
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

const background404 = require('./404.png');

export default function CatchException({}: { onRetry: () => void }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={colors.blue.x5()}
      />

      <Image
        source={background404}
        style={styles.imageContent}
        resizeMode="contain"
      />

      {/* Retry Button -> Restart App */}
      {/*Email & Hotline for Reporting Error */}

      <Text style={styles.textStyle}>{'Something went wrong!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: metrics.lineWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 12,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.blue.x5(),
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  contentContainer: {
    justifyContent: 'center',
    marginBottom: 24,
    paddingVertical: 16,
  },
  imageContent: {
    height: metrics.screenHeight / 3,
    width: metrics.screenWidth - 40,
  },
  textButtonStyle: {
    color: colors.blue.x5(),
    fontSize: 18,
    fontWeight: '400',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
});
