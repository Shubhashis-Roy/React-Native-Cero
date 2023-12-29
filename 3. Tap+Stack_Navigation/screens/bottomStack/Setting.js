import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <View>
      <Text style={styles.header}>setting </Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});
