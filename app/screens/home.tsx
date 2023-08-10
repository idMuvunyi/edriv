import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Home = () => {
  const userDetails = auth().currentUser;
  return (
    <View style={styles.container}>
      <Text>Welcome {userDetails?.email}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
