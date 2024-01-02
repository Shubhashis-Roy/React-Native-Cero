import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
