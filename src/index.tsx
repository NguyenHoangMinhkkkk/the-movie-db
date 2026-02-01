import { colors } from '@themes';
import React from 'react';
import { uiTouchEvent } from '@hooks';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import initialize from './initialize';
import { AppLoading } from '@components';
import { ContextContainer } from '@contexts';

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    initialize().then(() => setIsReady(true));
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors.transparent}
      />
      <GestureHandlerRootView>
        <ContextContainer>
          {isReady ? <Navigation /> : <AppLoading />}
        </ContextContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
