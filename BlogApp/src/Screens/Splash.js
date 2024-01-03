import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Splash = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: '800', color: '#000000'}}>
        BlogApp
      </Text>
    </View>
  );
};

export default Splash;
