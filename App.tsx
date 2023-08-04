import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Login} from './app/screens';

function App() {
  return (
    <View style={styles.sectionContainer}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
