import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VerifyOtp from '../assets/otp.svg';

const verification = () => {
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
        <VerifyOtp />
        <Text style={{color: '#ffffff', fontFamily: 'sans-serif-light'}}>
          We have sent an OTP on your number
        </Text>
      </View>
      <View style={styles.section2}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            textAlign={'center'}
            selectionColor="#1e2d50"
            maxLength={1}
            // caretHidden={true}
            selectionColor={'#f5f5f5'}
          />
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            textAlign={'center'}
            selectionColor="#1e2d50"
            maxLength={1}
            selectionColor={'#f5f5f5'}
          />
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            textAlign={'center'}
            selectionColor="#1e2d50"
            maxLength={1}
            selectionColor={'#f5f5f5'}
          />
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            textAlign={'center'}
            selectionColor="#1e2d50"
            maxLength={1}
            selectionColor={'#f5f5f5'}
          />
        </View>
        <View style={styles.resendView}>
          <Text style={{color: '#ffffff', fontFamily: 'sans-serif-light'}}>
            Didn't received OTP?
          </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.verifyBtn} activeOpacity={0.8}>
          <Text style={styles.verifyTxt}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default verification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f07279',
  },
  otpText: {
    fontSize: 25,
    color: '#ffffff',
    width: 200,
    fontFamily: 'sans-serif-light',
  },
  section1: {
    flex: 1,
    backgroundColor: '#f07279',
    // height: windowHeight / 2,
    // width: windowWidth,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: '#ffffff',
  },
  section2: {
    flex: 1,
    // backgroundColor: '#fafafa',
    // alignContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: '5%',
  },
  inputView: {
    width: '80%',
    height: 50,
    // backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    // borderColor: '#000',
    width: 50,
    height: 50,
    marginBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#1e2d50',
    backgroundColor: '#f79ca4',
    fontSize: 23,
    borderRadius: 10,
    color: '#f5f5f5',
  },
  resendView: {
    flexDirection: 'row',
  },
  resend: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#ffffff',
  },
  verifyBtn: {
    width: '60%',
    backgroundColor: '#f79ca4',
    // paddingHorizontal: '10%',
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1e2d50',
  },
  verifyTxt: {
    fontSize: 27,
    color: '#1e2d50',
  },
});
