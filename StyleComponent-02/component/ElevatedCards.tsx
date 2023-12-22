import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styels.headingText}>Elevated Cards</Text>
      <ScrollView style={styels.container} horizontal={true}>
        <View style={[styels.card, styels.bgCard]}>
          <Text>Tab Me</Text>
        </View>
        <View style={[styels.card, styels.bgCard]}>
          <Text>Tab</Text>
        </View>
        <View style={[styels.card, styels.bgCard]}>
          <Text>Tab</Text>
        </View>
        <View style={[styels.card, styels.bgCard]}>
          <Text>Tab-1</Text>
        </View>
        <View style={[styels.card, styels.bgCard]}>
          <Text>Tab-1</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styels = StyleSheet.create({
  headingText: {
    fontSize: 28,
    paddingHorizontal: 35,
    paddingTop: 15,
  },
  container: {},
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 7,
  },
  bgCard: {
    backgroundColor: '#0000FF',
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
});

export default ElevatedCards;
