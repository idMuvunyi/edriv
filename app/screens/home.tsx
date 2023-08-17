import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {handleLogout} from '../service';
import {appColor} from '../theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<StackParamList>;

const Home: FC<NavigationProps> = ({navigation}) => {
  const userDetails = auth().currentUser;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.contentContainer}>
        <Text style={styles.usernameText}>
          Muraho 👋🏽, {userDetails?.displayName}
        </Text>
        <View style={styles.screenCardContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Murashaka Kwihugura iki</Text>
            <Text style={styles.headerText}>Kumategeko Y'umuhanda?</Text>
          </View>
          <TouchableOpacity
            style={styles.questionTextCard}
            onPress={() => navigation.navigate('Quiz')}>
            <View>
              <Text style={styles.cardHeaderText}>Amagambo</Text>
              <Text style={styles.cardContentText}>
                Ubazwa ibibazo 20 ku mategeko y'umuhanda, byose ubihabwa
                akokanya hadakurikijwe ikintu nakimwe. Gutsinda byibura ni
                amanota 12/20 Tangira nonaha!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.basicHitoryContainer}>
          <Text style={{...styles.cardHeaderText, fontSize: 16}}>
            Ibazwa Ryarangiye
          </Text>
        </View>
        <View>
          <Button title="Gusohoka" onPress={handleLogout} />
        </View>
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
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 15,
    elevation: 5,
  },
  cardHeaderText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    marginBottom: 10,
    color: appColor.primary.hard,
  },
  headerTextContainer: {
    marginVertical: 30,
  },
  headerText: {
    fontSize: 22,
    fontFamily: 'Inter-SemiBold',
    color: appColor.primary.light,
  },
  cardContentText: {
    fontSize: 16,
    fontFamily: 'Inter-Light',
    color: appColor.black.light,
    textAlign: 'justify',
  },
  usernameText: {
    fontSize: 18,
    fontWeight: '300',
    color: appColor.black.hard,
    fontFamily: 'Inter-Regular',
  },

  basicHitoryContainer: {
    marginVertical: 30,
  },
});
