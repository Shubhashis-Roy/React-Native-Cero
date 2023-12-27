import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProfileDetails = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Text style={styles.header}>Profile Details</Text>
      <Button title=" Profile" onPress={() => navigate('Profile')} />
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});
