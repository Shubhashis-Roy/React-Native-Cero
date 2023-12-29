import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';

function App(): JSX.Element {
  // check Auth
  return (
    // {isAuth ? AuthNavigator : DrawerNavigator}
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
