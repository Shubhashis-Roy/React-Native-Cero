import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import RouteName from './config/RouteName';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: String};
};

const stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'homeTitle',
          }}
        />
        <stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'detailsTitle',
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
