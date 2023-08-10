import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import React, {FC, useState} from 'react';
import InputText from '../components/InputText';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';
import {signInHandler} from '../service';

type NavigationProps = NativeStackScreenProps<StackParamList>;

const Login: FC<NavigationProps> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    signInHandler({email, password});
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.logoStyle}>eDriv</Text>
          <Text style={styles.screenTitleStyle}>Login</Text>
        </View>
        <View>
          <InputText
            value={email}
            placeholder="emeyili"
            onChangeText={value => setEmail(value)}
            keyboardType="default"
          />
          <InputText
            value={password}
            placeholder="Ijambo banga"
            onChangeText={value => setPassword(value)}
            keyboardType="visible-password"
          />
        </View>
        <Button title="Injira" onPress={handleLogin} />
        <View style={styles.bottomTextContainer}>
          <Text>Nta Konti?</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text>Yifungure</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenContainer: {
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
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Login;
