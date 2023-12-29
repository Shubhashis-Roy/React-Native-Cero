import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants';

const Notifications = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text style={styles.text}>Notification!</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
    color: '#000000',
  },
});
