import Tweet from '../screens/home/Tweet';
import {ROUTES} from '../constants';
import {Home} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TweetDetails from '../screens/home/TweetDetails';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.TWEET} component={Tweet} />
      <Stack.Screen name={ROUTES.TWEET_DETAILS} component={TweetDetails} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
