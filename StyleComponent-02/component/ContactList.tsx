import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <View style={styles.contactList}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid}>
            <Image
              source={{
                uri: imageUrl,
              }}
            />
            <View style={styles.user}>
              <View style={styles.userSpace}>
                <Text style={styles.uid}> {uid}. </Text>
                <Text style={styles.name}> {name} </Text>
              </View>
              <Text style={styles.status}> {status} </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    paddingHorizontal: 35,
    paddingTop: 15,
  },
  contactList: {
    // backgroundColor: '#0A3D62',
    marginHorizontal: 16,
    marginBottom: 30,
  },
  user: {
    backgroundColor: '#0A3D62',
    marginVertical: 6,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  uid: {
    marginTop: 3,
  },
  userSpace: {
    flex: 1,
    flexDirection: 'row',
  },
  status: {
    marginLeft: 17,
  },
});

export default ContactList;
