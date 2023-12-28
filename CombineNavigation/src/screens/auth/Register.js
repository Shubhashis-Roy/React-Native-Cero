import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Register = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.text}>Register</Text>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 17,
    color: '#000000',
  },
});
