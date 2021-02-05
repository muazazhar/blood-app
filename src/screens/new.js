import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
// import Constants from 'expo-constants';
import database from '@react-native-firebase/database';

// const donorsData = [
//   {
//     isDonor: true,
//     name: 'Nadi',
//     photo: 'https://i.stack.imgur.com/t8vJf.jpg?s=328&g=1',
//     uid: '2ZE',
//     email: 'nadi@test.com',
//   },
//   {
//     email: 'mz@test.com',
//     isDonor: true,
//     name: 'Mz',
//     photo: 'https://i.stack.imgur.com/t8vJf.jpg?s=328&g=1',
//     uid: 'Cb',
//   },
// ];
let donorsData = [];
//   console.log('bef', donorsData);
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
export default function New() {
  let donorsData = [];
  //   console.log('bef', donorsData);
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
      {donorsData.map((v, i) => {
        return (
          <View
            key={v.uid}
            style={{
              backgroundColor: 'white',
              padding: 10,
              margin: 5,
              borderRadius: 10,
            }}>
            <Text>{v.name}</Text>
            <Text>{v.email}</Text>
            <Text>{v.email}</Text>
            <Image source={{uri: v.photo}} style={{height: 150, flex: 1}} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
