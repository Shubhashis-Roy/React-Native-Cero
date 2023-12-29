import {createDrawerNavigator} from '@react-navigation/drawer';
import {Notifications, Settings} from '../screens';
import {COLORS, ROUTES} from '../constants';
import ButtonTapNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
      }}>
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={ButtonTapNavigator} />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
      />
      <Drawer.Screen name={ROUTES.SETTINGS_DETAIL} component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
