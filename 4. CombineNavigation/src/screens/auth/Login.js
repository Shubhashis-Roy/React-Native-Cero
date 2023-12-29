import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const Login = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.main}>
      <Button
        title="Login"
        onPress={() => navigate(ROUTES.HOME)}
        style={styles.button1}
      />
      <Button
        onPress={() => navigate(ROUTES.REGISTER)}
        title="SingUp"
        color="#FF0000"
      />
      <Pressable>
        <Text
          onPress={() => navigate(ROUTES.FORGOT_PASSWORD, {userName: 'Subha'})}
          style={styles.text}>
          Forgot Password
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 25,
  },
  button1: {
    backgroundColor: '#FF0000',
    // borderRadius: 40,
    margin: 10,
  },
  text: {
    margin: 10,
    fontSize: 17,
    color: '#000000',
  },
});
