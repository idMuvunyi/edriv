import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';
import {signUpHandler} from '../service';
import {validateEmail} from '../utils';
type NavigationProps = NativeStackScreenProps<StackParamList>;

const SignUp: FC<NavigationProps> = ({navigation}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInputChange = setState => (value: string) => {
    setState(value);
  };

  const onSignUpPress = () => {
    // implement some validations
    const trimmedPass = password.trim();
    if (!firstName) {
      console.log('First Name required *');
      return;
    } else if (!lastName) {
      console.log('Last Name required *');
      return;
    } else if (!username) {
      console.log('Username is required *');
      return;
    } else if (!email) {
      console.log('Email required *');
      return;
    } else if (!trimmedPass || password.length < 6) {
      console.log('Weak password, minimum 6 chars');
      return;
    } else if (phone.trim().length < 10) {
      console.log('Incorect phone number');
      return;
    } else if (!validateEmail(email)) {
      console.log('Invalid Email');
      return;
    }

    signUpHandler({firstName, lastName, email, phone, username, password});
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.screenContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.logoStyle}>eDriv</Text>
            <Text style={styles.screenTitleStyle}>Sign Up</Text>
          </View>
          <View>
            <InputText
              value={firstName}
              placeholder="Izina"
              onChangeText={handleInputChange(setFirstName)}
              keyboardType="default"
            />
            <InputText
              value={lastName}
              placeholder="Izina Ry'umuryango"
              onChangeText={handleInputChange(setLastName)}
              keyboardType="default"
            />
            <InputText
              value={email}
              placeholder="Emeyili"
              onChangeText={handleInputChange(setEmail)}
              keyboardType="email-address"
            />
            <InputText
              value={phone}
              placeholder="Telefoni"
              onChangeText={handleInputChange(setPhone)}
              keyboardType="phone-pad"
            />
            <InputText
              value={username}
              placeholder="izina ukoresha"
              onChangeText={handleInputChange(setUsername)}
              keyboardType="default"
            />
            <InputText
              value={password}
              placeholder="Ijambo banga"
              onChangeText={handleInputChange(setPassword)}
              keyboardType="visible-password"
            />
          </View>
          <Button title="Emeza" onPress={onSignUpPress} />
          <View style={styles.bottomTextContainer}>
            <Text>Ufite Konti?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text>Injira</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    marginHorizontal: 24,
    marginBottom: 40,
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
