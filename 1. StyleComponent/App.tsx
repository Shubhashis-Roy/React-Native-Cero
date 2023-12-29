import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Flatlist from './component/Flatlist';
import ElevatedCards from './component/ElevatedCards';
import FancyCard from './component/FancyCard';
import ActionCard from './component/ActionCard';
import ContactList from './component/ContactList';

function App() {
  return (
    <View>
      <ScrollView>
        <Flatlist />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </View>
  );
}

export default App;
