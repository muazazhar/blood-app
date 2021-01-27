import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/Feather';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// export const Card = () => {
//   return;
// };

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.homeTxt}>Home</Text>
        <View style={styles.section3}>
          {/* <ScrollView horizontal={true}> */}
          <View style={styles.card}></View>
          {/* <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View> */}
          {/* </ScrollView> */}
        </View>
        {/* <View style={styles.cardsView}>
          <View style={styles.cardSmall}></View>
          <View style={styles.cardSmall}></View>
          <View style={styles.cardSmall}></View>
        </View> */}
        <View style={styles.section4}>
          {/* <View style={styles.card2}></View> */}
        </View>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity onPress={() => alert('Home')} activeOpacity={1}>
          <Icon size={40} color="black" name="home" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Search')} activeOpacity={1}>
          <Icon size={40} color="black" name="search1" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Notifications')}
          activeOpacity={1}>
          <Icon size={40} color="black" name="bells" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('User')} activeOpacity={1}>
          <User size={40} color="black" name="user" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    flex: 9,
  },
  section2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  homeTxt: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
    marginLeft: 20,
    flex: 1,
  },
  section3: {
    flex: 4,
    backgroundColor: '#f23c5a',
  },
  section4: {
    flex: 4,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    // flex: 2,
    backgroundColor: 'black',
  },
  card: {
    // flex: 4,
    // width: '90%',
    width: (windowWidth * 90) / 100,
    height: '70%',
    marginHorizontal: '5%',
    marginVertical: '10%',
    backgroundColor: 'white',
    borderRadius: 25,
    opacity: 0.9,
    top: -15,
  },
  cardsView: {
    backgroundColor: 'white',
    position: 'absolute',
    // flex: 1,
    width: '100%',
    height: '15%',
    top: 352,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: '2%',
    // paddingVertical: '2%',
    zIndex: 2,
    // opacity: 0.5,
  },
  cardSmall: {
    // flex: 1,
    width: 110,
    height: 110,
    // marginHorizontal: '5%',
    // marginVertical: '10%',
    backgroundColor: 'white',
    borderRadius: 10,
    opacity: 1,
    marginLeft: 10,
    marginRight: 10,
    top: -30,
    // position: 'absolute',
    // zIndex: 6,
    // flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card2: {
    // flex: 4,
    width: '90%',
    height: '55%',
    marginHorizontal: '5%',
    marginVertical: '10%',
    backgroundColor: '#0c889b',
    borderRadius: 25,
    opacity: 0.9,
    top: 72,
  },
});
