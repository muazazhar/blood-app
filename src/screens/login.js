import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
// import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
// import firebaseSetup from '../config/firebaseSetup';
const Login = () => {
  // const {auth} = firebaseSetup();
  const [number, setNumber] = useState('+92 306 8471693');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const signInWithPhoneNumber = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };
  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      alert('user signed in successfully');
    } catch (err) {
      console.log('Invalid code.', err);
    }
  };

  if (!confirm) {
    return (
      <View style={styles.container}>
        <Text>Otp verification</Text>
        <Button
          title="phone number sign in"
          onPress={() => {
            signInWithPhoneNumber('+92 306 8471693');
            console.log('pressed');
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>otp screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Number 03********"
        keyboardType="phone-pad"
        textAlign={'center'}
        selectionColor="#1e2d50"
        maxLength={13}
        value={code}
        onChangeText={(text) => setCode(text)}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="visible-password"
        textAlign={'center'}
        selectionColor="#1e2d50"
        maxLength={11}
        value={password}
        onChangeText={(text) => setPassword(text)}
      /> */}
      <Button title="confirm otp" onPress={() => confirmCode()} />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f07279',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 10,
    // width: 250,
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d50',
    fontSize: 17,
  },
});

// import React, {useState} from 'react';
// import {Button, TextInput} from 'react-native';
// import auth from '@react-native-firebase/auth';

// function Home() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+923068471693')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={(text) => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }
// export default Home;
