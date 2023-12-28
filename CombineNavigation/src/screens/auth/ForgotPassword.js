import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ForgotPassword = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ForgotPassword</Text>
      <Text style={styles.text}> Name: {route.params.userName} </Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    fontSize: 17,
    color: '#000000',
  },
});
