/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './src/navigation/rootNavigator';

import { store, persistor } from './src/store/store';

// CREATE YOUR CUSTOM LOADING COMPONENT A PUT IT IN THE LOADING PARAMETER

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <RootNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
