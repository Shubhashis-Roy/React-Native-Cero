import React from 'react';
import {View, Text} from 'react-native';
import * as Yup from 'yup';

const PasswoedSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'min 4 char')
    .max(10, 'max 10 char')
    .required('password is required'),
});

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default App;
