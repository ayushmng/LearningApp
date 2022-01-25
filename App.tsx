import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {isReadyRef, navigationRef} from '@navigation/RootNavigationRef';
import {store} from '@config/AppStore';
import {AppNavigation} from '@navigation/AppNavigation';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  });
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
