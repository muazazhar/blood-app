import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfBoDXt63Qyt-vPinSX0utg8y9p403GXM',
  authDomain: 'fir-auth-d5c37.firebaseapp.com',
  projectId: 'fir-auth-d5c37',
  storageBucket: 'fir-auth-d5c37.appspot.com',
  messagingSenderId: '217818982960',
  appId: '1:217818982960:web:1c2cba12dd80a646485bf5',
  measurementId: 'G-KT9DZWMF77',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return {firebase, auth};
};
