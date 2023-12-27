import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type detailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({navigation}: detailsProps) => {
  const backToHome = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
      {/* <Button title="Home" onPress={backToHome} /> */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
