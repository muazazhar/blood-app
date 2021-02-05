import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Search = ({navigation}) => {
  let donorsData = [];
  database()
    .ref('users')
    .orderByChild('isDonor')
    .equalTo(true)
    .once('value')
    .then((results) => {
      results.forEach((snapshot) => {
        // console.log(snapshot.key, snapshot.val());
        //   console.log(snapshot.val());
        donorsData.push(snapshot.val());
      });
      console.log('aft', donorsData);
    });

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}>
          <Icon size={40} color="#000" name="west" />
        </TouchableOpacity>
        <Text style={styles.heroTxt}>Find Donors</Text>
      </View> */}
      <View
        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          flex: 8,
        }}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {/* <TouchableOpacity onPress={() => alert('hello there')}>
            <View style={styles.card}>
              <View style={{flex: 1.5}}>
                <Text style={styles.heroTxt}>Everyone</Text>
              </View>
            </View>
                  </TouchableOpacity> */}
        <Button
          title="get date"
          onPress={() =>
            alert(
              donorsData.map((v, i) => {
                return v.name;
              }),
            )
          }
          //       donorsData.map((v, i) => { return (<Text>{v.name}</Text>)}
          //
          //
        />
        {/* </ScrollView> */}
        {donorsData.map((v, i) => {
          return <Text key={i}>{v.name}</Text>;
        })}
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fda1b0',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  card: {
    width: (windowWidth * 85) / 100,
    height: (windowHeight / 100) * 18,
    // marginHorizontal: (windowWidth / 100) * 4,
    marginVertical: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 25,
    // opacity: 0.9,
    top: -15,
    padding: 15,
    flexDirection: 'row',
  },
  heroTxt: {
    // backgroundColor: 'yellow',
    // width: '40%',
    color: '#f5627a',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    // letterSpacing: 2,
  },
});