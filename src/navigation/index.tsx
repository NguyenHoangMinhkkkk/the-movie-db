import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors, metrics } from '@themes';
import React from 'react';
import TabStack from './Tabs';
import ScreenStack from './Screens';
import { SImage } from '@elements';
import { ImageSrcs } from '@assets';
import { StyleSheet, View } from 'react-native';

const NativeStack = createNativeStackNavigator();

export default () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: colors.white,
        },
      }}
    >
      <View style={styles.appHeader}>
        <SImage
          source={ImageSrcs.AppLogo}
          style={styles.imageLogo}
          resizeMode="contain"
        />
      </View>

      <NativeStack.Navigator>
        <NativeStack.Screen
          name="Tab"
          component={TabStack}
          options={{ headerShown: false }}
        />
        {ScreenStack()}
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

const APP_HEADER_HEIGHT = 130;

const styles = StyleSheet.create({
  appHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: metrics.statusBarHeight,
    height: APP_HEADER_HEIGHT,
  },
  imageLogo: {
    width: 80,
  },
});
