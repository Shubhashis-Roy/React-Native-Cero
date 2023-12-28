import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Wallet = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text style={styles.text}>Wallet</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
    color: '#000000',
  },
});
