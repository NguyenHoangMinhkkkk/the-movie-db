import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { basicStyles, colors, metrics } from '@themes';
import React from 'react';
import TabStack from './Tabs';
import ScreenStack from './Screens';
import { SImage } from '@elements';
import { ImageSrcs } from '@assets';
import { StyleSheet, View } from 'react-native';
import { createNavHeader } from '@navigation/components';

const NativeStack = createNativeStackNavigator();

export default () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <View style={basicStyles.flex}>
      <View style={styles.appHeader}>
        <SImage
          source={ImageSrcs.AppLogo}
          style={styles.imageLogo}
          resizeMode="contain"
        />
      </View>

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
        <NativeStack.Navigator>
          <NativeStack.Screen
            name="Tab"
            component={TabStack}
            options={{ headerShown: false }}
          />
          <NativeStack.Group screenOptions={createNavHeader()}>
            {ScreenStack()}
          </NativeStack.Group>
        </NativeStack.Navigator>
      </NavigationContainer>
    </View>
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
    height: APP_HEADER_HEIGHT - metrics.statusBarHeight - 20,
  },
});
