import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import InputText from '../components/InputText';
import Button from '../components/Button';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoStyle}>eDriv</Text>
        <Text style={styles.screenTitleStyle}>Login</Text>
      </View>
      <View>
        <InputText
          value={username}
          placeholder="Username"
          onChangeText={value => setUsername(value)}
          keyboardType="default"
        />
        <InputText
          value={password}
          placeholder="Password"
          onChangeText={value => setPassword(value)}
          keyboardType="visible-password"
        />
      </View>
      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  logoStyle: {
    fontSize: 30,
    fontWeight: '800',
  },
  screenTitleStyle: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
});

export default Login;
