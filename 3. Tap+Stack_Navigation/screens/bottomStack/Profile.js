import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Pressable onPress={() => navigate('ProfileDetails')}>
        <Text style={styles.header}>Profile main Page</Text>
      </Pressable>
      <Button
        title="Profile Details"
        onPress={() => navigate('ProfileDetails')}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});
