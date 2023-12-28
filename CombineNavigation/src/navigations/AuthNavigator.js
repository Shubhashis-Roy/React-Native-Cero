import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, ROUTES} from '../constants';
import {Login, ForgotPassword, Register} from '../screens';
import ButtonTapNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          title: route.params.userName,
        })}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={ButtonTapNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
