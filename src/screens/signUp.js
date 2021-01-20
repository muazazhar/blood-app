import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Otp from '../assets/otp2.svg';
import Waves from '../assets/waves.svg';
const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon size={40} color="white" name="west" />
          <Text style={styles.otpText}>OTP Verification</Text>
        </View>
        <Otp style={{marginBottom: 40}} />
      </View>
      <View style={styles.section2}>
        <View style={styles.section3}>
          <TextInput
            style={styles.input}
            placeholder="Enter Number 03********"
            keyboardType="phone-pad"
            textAlign={'center'}
            selectionColor="#1e2d50"
            maxLength={11}
          />
          <Text style={{textAlign: 'center', fontSize: 16, color: '#1e2d50'}}>
            We will send you one time password on this mobile number(OTP)
          </Text>
          <Text style={{textAlign: 'center', color: '#b6555a'}}>
            Carrier rates may apply
          </Text>
          {/* <View style={styles.nextArrowView}> */}
          <TouchableOpacity
            style={styles.nextArrow}
            onPress={() => navigation.navigate('Verification')}
            activeOpacity={0.9}>
            <Icon size={40} color="white" name="east" />
          </TouchableOpacity>
          {/* </View> */}
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
    // height: windowHeight,
    // width: windowWidth,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  section1: {
    flex: 1,
    backgroundColor: '#f07279',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  section2: {
    flex: 1,
    backgroundColor: '#fafafa',
    width: '100%',
    // alignContent: 'flex-end',
    alignItems: 'center',
  },
  section3: {
    flex: 1,
    backgroundColor: '#fff',
    width: '80%',
    height: '80%',
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
    // borderColor: '#000',
    width: '100%',
    marginBottom: 10,
    // width: 250,
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d50',
    fontSize: 17,
  },
  otpText: {
    fontSize: 25,
    color: '#ffffff',
    width: 200,
    fontFamily: 'sans-serif-light',
  },
  //   nextArrowView: {
  //     borderRightWidth: 20,
  //     borderRightColor: 'black',
  //   },
  nextArrow: {
    backgroundColor: '#f07279',
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
    // left: 'auto',
  },
  wave: {
    flex: 1,
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    // zIndex: 5,
    marginTop: '68.5%',
  },
});
