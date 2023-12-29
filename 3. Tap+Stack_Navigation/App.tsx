import React from 'react';
import {View, Text} from 'react-native';
import Navigation from './component/Navigation';

import {enableScreens} from 'react-native-screens';
enableScreens();

function App(): JSX.Element {
  return <Navigation />;
}

export default App;
