import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';

function App() {
  const handleclick = () => {
    console.log('cliked');
    Alert.alert('button clicked');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello world ! </Text>
        <Text>Hello world ! </Text>
        <Text>Hello world ! </Text>
        <Button title="Clicked me" onPress={handleclick} />
      </View>
    </SafeAreaView>
  );
}

export default App;
