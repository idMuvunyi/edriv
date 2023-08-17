import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Login, Quiz, SignUp} from './app/screens';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type StackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Quiz: undefined;
};

const Stack = createNativeStackNavigator();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (initializing) {
        setInitializing(false);
      }
    });
  }, []);

  /**
   * Screens to be accessible if user is not logged in
   */

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  };

  /**
   * Screens to be presented if user is logged in
   */

  const AppStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{
            title: 'Ibazwa',
            headerShown: true,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
          name="Quiz"
          component={Quiz}
        />
      </Stack.Navigator>
    );
  };

  const RootNavigation = () => {
    if (initializing) {
      return (
        <View style={styles.loaderContainerStyle}>
          <ActivityIndicator size="large" />
          <Text>Tegereza...</Text>
        </View>
      );
    }

    if (!user) {
      return <AuthStack />;
    }

    return <AppStack />;
  };

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loaderContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
