import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const Scroll = () => {
  return (
    <>
      {/* <ScrollView
        style={{backgroundColor: 'pink', flex: 1, height: '100%'}}
        contentContainerStyle={{flexGrow: 1}}>
        <Text style={{fontSize: 55}}>
          lorem asd sad sadsa saqew sd dsadj hsadjs ashjd hahdsja hkjsa hsajdhsa
          jsahdjsa hkjsdhsa hjsahd kjsahsajdhsaj hadhsaj hsajhsa hsajdhs jahsajd
          haskjshad sahdjsahd jsahdjash jsahdjsah skja lolllllll
        </Text>
      </ScrollView> */}
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.ScrollView} horizontal={true}>
          <View style={styles.card}>
            <Text>asdas asdhs</Text>
          </View>
          <View style={styles.card}>
            <Text>asdas asdhs</Text>
          </View>
          <View style={styles.card}>
            <Text>asdas asdhs</Text>
          </View>
          <View style={styles.card}>
            <Text>asdas asdhs</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Scroll;
const styles = StyleSheet.create({
  card: {
    // flex: 1,
    width: 150,
    height: 200,
    marginHorizontal: 16,
    marginVertical: '10%',
    backgroundColor: 'grey',
    borderRadius: 25,
    opacity: 0.9,
    top: -15,
  },
  ScrollView: {
    // justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'pink',
    // flex: 1,
  },
});
