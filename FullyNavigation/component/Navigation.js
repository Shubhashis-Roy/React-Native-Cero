import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/bottomStack/Home';
import Profile from '../screens/bottomStack/Profile';
import setting from '../screens/bottomStack/Setting';
import TweetDetails from '../screens/homeStake/TweetDetails';
import Tweet from '../screens/homeStake/Tweet';
import ProfileDetails from '../screens/homeStake/ProfileDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Payments from '../screens/drawer/Payments';

// Stack Navigation
const StackNavigation = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Home" component={Home} />
      <StackNavigation.Screen
        name="Tweet"
        component={Tweet}
        // options={{presentation: 'modal'}}
      />
      <StackNavigation.Screen name="TweetDetails" component={TweetDetails} />
    </StackNavigation.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Profile" component={Profile} />
      <StackNavigation.Screen
        name="ProfileDetails"
        component={ProfileDetails}
      />
    </StackNavigation.Navigator>
  );
};

// Bottom Navigation
const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false, tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Setting" component={setting} />
    </Tab.Navigator>
  );
};

// Drawer Navigation
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  <Drawer.Navigator>
    <Drawer.Screen name="TabGroup" component={TabGroup} />
    <Drawer.Screen name="Payments" component={Payments} />
  </Drawer.Navigator>;
};

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <TabGroup /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
}
