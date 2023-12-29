import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Tweet = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Text style={styles.header}>Tweet Page</Text>
      <Button
        title=" Tweet Details Page"
        onPress={() => navigate('TweetDetails', {Tweet})}
      />
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});
