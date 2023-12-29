import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notifications, Wallet} from '../screens';
import {ROUTES} from '../constants';
import SettingNavigator from './SettingNavigator';
import HomeNavigator from './HomeNavigator';

const Tap = createBottomTabNavigator();

function ButtonTapNavigator() {
  return (
    <Tap.Navigator screenOptions={{}}>
      <Tap.Screen
        name={ROUTES.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{headerShown: false, title: 'Home'}}
      />
      <Tap.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tap.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tap.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingNavigator}
        options={{headerShown: false, title: 'Settings'}}
      />
    </Tap.Navigator>
  );
}

export default ButtonTapNavigator;
