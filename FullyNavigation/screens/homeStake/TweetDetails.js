import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TweetDetails = ({navigation}) => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Text style={styles.header}> Tweet Details Page</Text>
      <Button title=" Tweet page" onPress={() => navigate('Tweet')} />
      <Button
        color="orange"
        title=" Back to Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default TweetDetails;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});
