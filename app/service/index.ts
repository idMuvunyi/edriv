import auth from '@react-native-firebase/auth';

interface UserCredentials {
  email: string;
  password: string;
}

/**
 * Sign up the app using email and password
 */
export const signUpHandler = ({email, password}: UserCredentials) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

/**
 * sign in handler function
 */
export const signInHandler = ({email, password}: UserCredentials) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('email address is not valid!');
      }

      if (error.code === 'auth/user-not-found') {
        console.log('there is no such user in our database!');
      }

      if (error.code === 'auth/wrong-password') {
        console.log('password do not match the email');
      }
    });
};
