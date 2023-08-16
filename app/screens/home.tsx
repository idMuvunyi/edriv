import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {handleLogout} from '../service';
import {appColor} from '../theme/colors';

const Home = () => {
  const userDetails = auth().currentUser;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.usernameText}>
          Muraho 👋🏽, {userDetails?.displayName}
        </Text>
        <View style={styles.screenCardContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Murashaka Kwihugura iki</Text>
            <Text style={styles.headerText}>Kumategeko Y'umuhanda?</Text>
          </View>

          <TouchableOpacity style={styles.questionTextCard}>
            <View>
              <Text style={styles.cardHeaderText}>Amagambo</Text>
              <Text style={styles.cardContentText}>
                Ubazwa ibibazo 20 ku mategeko y'umuhanda, byose ubihabwa
                akokanya hadakurikijwe ikintu nakimwe. Gutsinda byibura ni
                amanota 12/20 Tangira nonaha!
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.questionTextCard, marginTop: 10}}>
            <Text style={styles.cardHeaderText}>Ibyapa</Text>
            <Text style={styles.cardContentText}>
              Ubazwa ibibazo 20 ku mategeko y'umuhanda, byose ubihabwa akokanya
              hadakurikijwe ikintu nakimwe. Gutsinda byibura ni amanota 12/20
              Tangira nonaha!
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Button title="Logout" onPress={handleLogout} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    margin: 24,
  },
  screenCardContainer: {
    marginTop: 20,
  },
  questionTextCard: {
    backgroundColor: appColor.primary['light'],
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: appColor.black.light,
  },
  cardHeaderText: {
    fontSize: 15,
    fontFamily: 'Inter-ExtraBold',
    marginBottom: 10,
  },
  headerTextContainer: {
    marginVertical: 30,
  },
  headerText: {
    fontSize: 22,
    fontFamily: 'Inter-SemiBold',
    color: appColor.black.light,
  },
  cardContentText: {
    fontSize: 16,
    fontFamily: 'Inter-Light',
    color: appColor.black.light,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: '300',
    color: appColor.black.hard,
    fontFamily: 'Inter-Regular',
  },
});
