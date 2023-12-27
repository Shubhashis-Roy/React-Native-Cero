import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Text style={styles.header}>Home Screen</Text>
      <Button title="Tweet" onPress={() => navigate('Tweet')} />
      <Button
        color="orange"
        title="Go to TweetDetails"
        onPress={() => navigate('TweetDetails')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});
