import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';
type NavigationProps = NativeStackScreenProps<StackParamList>;

const SignUp: FC<NavigationProps> = ({navigation}) => {
  const [names, setNames] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.logoStyle}>eDriv</Text>
          <Text style={styles.screenTitleStyle}>Sign Up</Text>
        </View>
        <View>
          <InputText
            value={names}
            placeholder="Amazina Yombi"
            onChangeText={value => setNames(value)}
            keyboardType="default"
          />
          <InputText
            value={phone}
            placeholder="Telefoni"
            onChangeText={value => setPhone(value)}
            keyboardType="default"
          />
          <InputText
            value={username}
            placeholder="izina ukoresha"
            onChangeText={value => setUsername(value)}
            keyboardType="default"
          />
          <InputText
            value={password}
            placeholder="Ijambo banga"
            onChangeText={value => setPassword(value)}
            keyboardType="visible-password"
          />
        </View>
        <Button title="Emeza" onPress={() => {}} />
        <View style={styles.bottomTextContainer}>
          <Text>Ufite Konti?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text>Injira</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
