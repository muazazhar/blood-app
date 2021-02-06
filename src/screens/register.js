import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Otp from '../assets/otp2.svg';
import Waves from '../assets/waves.svg';
const windowHeight = Dimensions.get('window').height;
import database from '@react-native-firebase/database';

const SignUp = () => {
  const navigation = useNavigation();
  const fbLogin = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then((data) => {
        const User = {
          name: data.user.displayName,
          uid: data.user.uid,
          email: data.user.email,
          photo: data.user.photoURL,
          phoneNumber: '000',
          gender: 'Male',
          bloodType: 'O-',
          location: 'Faisalabad',
          age: 20,
          isDonor: false,
        };
        database().ref('/').child(`users/${User.uid}`).set(User);
        navigation.navigate('Home');
      })
      .catch((err) => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.otpText}>Welcome! </Text>
        <Otp />
      </View>
      <View style={styles.section2}>
        <View style={styles.section3}>
          <Text style={{textAlign: 'center', color: '#f23c5a', fontSize: 20}}>
            Sign In or Sign Up with
          </Text>
          <Text style={{textAlign: 'center', color: '#f23c5a', fontSize: 30}}>
            Facebook
          </Text>
          <TouchableOpacity
            style={styles.nextArrow}
            onPress={fbLogin}
            activeOpacity={0.9}>
            <Icon size={40} color="white" name="facebook" />
          </TouchableOpacity>
        </View>
        <View style={styles.wave}>
          <Waves />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    flex: 3,
    backgroundColor: '#f23c5a',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  section2: {
    flex: 2,
    backgroundColor: '#fafafa',
    width: '100%',
    alignItems: 'center',
  },
  section3: {
    flex: 1,
    backgroundColor: '#fff',
    width: '80%',
    height: '70%',
    borderRadius: 25,
    position: 'absolute',
    zIndex: 1,
    top: -40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 15,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d50',
    fontSize: 17,
  },
  otpText: {
    fontSize: 35,
    color: '#ffffff',
    fontFamily: 'sans-serif-light',
  },
  nextArrow: {
    backgroundColor: '#f23c5a',
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  wave: {
    width: '100%',
    marginTop: windowHeight / 3.7,
  },
});
