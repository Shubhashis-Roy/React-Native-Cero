import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';

const ActionCard = () => {
  const openWebSite = (webSiteLink: string) => {
    Linking.openURL(webSiteLink);
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={() =>
          openWebSite(
            'https://reactnative.dev/docs/linking?language=typescript#openurl',
          )
        }>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#50DBB4',
  },
});

export default ActionCard;
