import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigator';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const isSignedIn = false;

  function VoidComponent() {
    return <></>;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        {isSignedIn ? (
          <>
            <RootStack.Screen name="Home" component={VoidComponent} />
          </>
        ) : (
          <>
            <RootStack.Screen name="SignIn" component={VoidComponent} />
            <RootStack.Screen name="SignUp" component={VoidComponent} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
