import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
interface UserCredentials {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  username?: string;
}

/**
 * Sign up the app using email and password
 */
export const signUpHandler = async ({
  firstName,
  lastName,
  email,
  phone,
  username,
  password,
}: UserCredentials) => {
  let uid;
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential.user) {
          userCredential.user
            .updateProfile({
              displayName: lastName,
            })
            .catch(err => {
              console.log('Can not update the profile now');
            });

          uid = userCredential.user.uid;

          // create a related user data in firestore upon successful account creation
          if (uid) {
            firestore().collection('users').doc(uid).set({
              id: uid,
              FirstName: firstName,
              lastName: lastName,
              username: username,
              email: email,
              phone: phone,
              gender: '',
            });
          }
        }
      });
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    if (error.code === ' auth/weak-password') {
      console.log('Password is not strong');
    }
  }
};

/**
 * sign in handler function
 */
export const signInHandler = async ({email, password}: UserCredentials) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error: any) {
    if (error.code === 'auth/invalid-email') {
      console.log('email address is not valid!');
    }

    if (error.code === 'auth/user-not-found') {
      console.log('there is no such user in our database!');
    }

    if (error.code === 'auth/wrong-password') {
      console.log('password do not match the email');
    }
  }
};

/**
 * sign out in handler function
 */
export const handleLogout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log('Can not sign out now try again!' + error);
  }
};
