import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
