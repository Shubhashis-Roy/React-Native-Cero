import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import {Settings, SettingsDetail} from '../screens';

const stack = createNativeStackNavigator();

function SettingNavigator() {
  return (
    <stack.Navigator>
      <stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </stack.Navigator>
  );
}

export default SettingNavigator;
