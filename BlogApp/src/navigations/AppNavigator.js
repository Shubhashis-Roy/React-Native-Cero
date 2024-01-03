import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import routes from '../constants/routes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
