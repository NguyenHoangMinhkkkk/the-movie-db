import { colors } from '@themes';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors.transparent}
      />
      <GestureHandlerRootView>
        <Navigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
