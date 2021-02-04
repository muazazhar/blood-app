import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingSvg from '../assets/setting.svg';
import auth from '@react-native-firebase/auth';
const windowHeight = Dimensions.get('window').height;

const Settings = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  //   const {navigate} = props.navigation;
  //   const settingF = () => {};
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: -50,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          //   onPress={() => navigation.goBack()}
          activeOpacity={0.9}>
          <Icon size={40} color="#000" name="west" />
        </TouchableOpacity>
        <Text style={styles.heroTxt}>Settings</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <SettingSvg />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 150,
        }}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.btnTxt}>Change Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={signOut}>
          <Text style={styles.btnTxt}>LogOut</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Number 03********"
              keyboardType="phone-pad"
              textAlign={'center'}
              selectionColor="#1e2d50"
              maxLength={11}
            />
            <TextInput
              style={styles.input}
              placeholder="gender"
              keyboardType="phone-pad"
              textAlign={'center'}
              selectionColor="#1e2d50"
              maxLength={11}
            />
            <TextInput
              style={styles.input}
              placeholder="Blood Type"
              keyboardType="phone-pad"
              textAlign={'center'}
              selectionColor="#1e2d50"
              maxLength={11}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              keyboardType="phone-pad"
              textAlign={'center'}
              selectionColor="#1e2d50"
              maxLength={11}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              keyboardType="phone-pad"
              textAlign={'center'}
              selectionColor="#1e2d50"
              maxLength={11}
            />
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'red',
                width: '100%',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 20}}>Want to donate? </Text>
              <TouchableOpacity style={{...styles.button, width: '20%'}}>
                <Text style={{color: '#fff'}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.button, width: '20%', marginLeft: 5}}>
                <Text style={{color: '#fff'}}>No</Text>
              </TouchableOpacity>
            </View>
            <TouchableHighlight
              style={{...styles.button, width: '80%'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Save Data</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fda1b0',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  heroTxt: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
    marginRight: 70,
  },
  button: {
    backgroundColor: '#f23c5a',
    width: '60%',
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1e2d50',
  },

  btnTxt: {
    fontSize: 27,
    color: '#fff',
  },
  input: {
    // borderColor: '#000',
    width: '100%',
    // marginBottom: 10,
    // width: 250,
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d50',
    fontSize: 17,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor: 'red',
  },
  modalView: {
    width: '80%',
    // height: '80%',
    height: (windowHeight / 100) * 75,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  modalText: {
    // marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
  },
});
