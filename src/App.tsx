import { colors } from '@themes';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import initialize from './initialize';
import { AppLoading } from '@components';
import { useAccountContext, useMovieContext } from '@contexts';

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  const { setLanguageConfig } = useMovieContext();
  const { setAccountData } = useAccountContext();

  React.useEffect(() => {
    initialize().then(({ languageConfig, accountInfo }) => {
      setLanguageConfig(languageConfig);
      setAccountData(accountInfo);
      setIsReady(true);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors.transparent}
      />
      <GestureHandlerRootView>
        {isReady ? <Navigation /> : <AppLoading />}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
