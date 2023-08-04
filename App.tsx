import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function App() {
  return (
    <View style={styles.sectionContainer}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});

export default App;
