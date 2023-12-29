import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Payments = () => {
  // const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.header}>Payments</Text>
      {/* <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Open Drawer" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});
