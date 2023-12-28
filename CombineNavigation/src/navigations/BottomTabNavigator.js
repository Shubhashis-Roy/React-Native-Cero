import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notifications, Settings, Wallet} from '../screens';
import {ROUTES} from '../constants';

const Tap = createBottomTabNavigator();

function ButtonTapNavigator() {
  return (
    <Tap.Navigator screenOptions={{}}>
      <Tap.Screen name={ROUTES.HOME} component={Home} />
      <Tap.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tap.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tap.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tap.Navigator>
  );
}

export default ButtonTapNavigator;
