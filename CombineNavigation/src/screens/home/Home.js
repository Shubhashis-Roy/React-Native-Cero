import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Tweet from './Tweet';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Button title=" Go to Tweet Page" onPress={() => navigate(Tweet)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
    color: '#000000',
  },
});
