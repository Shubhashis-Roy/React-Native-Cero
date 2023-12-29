import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headindText}>Trending Image</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={
            require('../assets/native_0.png')
            // uri: 'https://legacy.reactjs.org/logo-og.png',
          }
          style={styles.cardImage}
        />
        <View style={styles.imgTextArea}>
          <Text style={styles.imgText}>This is a image</Text>
          <Text style={styles.imgText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headindText: {
    fontSize: 28,
    paddingHorizontal: 35,
    paddingTop: 15,
  },
  cardImage: {
    width: 330,
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  card: {
    width: 330,
    height: 320,
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#ADD8E6',
    borderRadius: 6,
  },
  cardElevated: {},
  imgText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgTextArea: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default FancyCard;
