import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/Feather';
import DonorCard from '../assets/donorCard.svg';
import Booking from '../assets/Booking.svg';
import Donate from '../assets/donate.svg';
import Drive from '../assets/drive.svg';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.homeTxt}>Home</Text>
        <View style={styles.section3}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Settings');
                alert('Change Your donor status to "true" in settings');
              }}
              activeOpacity={0.9}>
              <View style={styles.card}>
                <View style={{flex: 1.5}}>
                  <Text style={styles.heroTxt}>
                    Everyone{' '}
                    <Text style={{fontSize: 35}}>
                      Could Be <Text style={{fontSize: 23}}>a </Text>
                      <Text>Hero</Text>
                    </Text>
                  </Text>
                  <Text style={[styles.heroTxt]}>BE A DONOR</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#ffbdc8',
                    borderRadius: 20,
                  }}>
                  <DonorCard />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Coming Soon...')}
              activeOpacity={0.9}>
              <View style={styles.card}>
                <View style={{flex: 1}}>
                  <Text style={styles.heroTxt}>
                    Schedule{' '}
                    <Text style={{fontSize: 30, lineHeight: 40}}>
                      Blood Donation
                      <Text style={{fontSize: 25}}>Date</Text>
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 20,
                  }}>
                  <Booking />
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.cardsView}>
          <TouchableOpacity
            style={styles.cardSmall}
            onPress={() => navigation.navigate('Search')}
            activeOpacity={1}>
            <Text>Find Donors</Text>
            <Icon
              size={(windowWidth * 10) / 100}
              color="#e32b49"
              name="search1"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardSmall}
            onPress={() => {
              navigation.navigate('Settings');
              alert('Change Your donor status to "true" in settings');
            }}
            activeOpacity={1}>
            <Text>Donate</Text>
            <Donate
              width={(windowWidth * 10) / 100}
              height={(windowWidth * 10) / 100}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardSmall}
            activeOpacity={1}
            onPress={() => navigation.navigate('Order')}>
            <Text>Order Blood</Text>
            <User
              size={(windowWidth * 10) / 100}
              color="#e32b49"
              name="droplet"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.section4}>
          <View style={styles.card2}>
            <View
              style={{
                flex: 2.5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'monospace',
                  fontSize: 20,
                  width: '95%',
                  margin: '10%',
                  marginBottom: 0,
                  marginTop: '7%',
                }}>
                Give The Gift Of
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'monospace',
                  fontSize: 23,
                  fontWeight: 'bold',
                }}>
                Life
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'monospace',
                  fontSize: 27,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                DONATE{' '}
                <Text style={{color: '#0c889b', backgroundColor: 'white'}}>
                  {' '}
                  BLOOD{' '}
                </Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 10,
              }}>
              <Drive />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity onPress={() => alert('Home')} activeOpacity={1}>
          <Icon size={(windowWidth * 10) / 100} color="#e32b49" name="home" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          activeOpacity={1}>
          <Icon
            size={(windowWidth * 10) / 100}
            color="#e32b49"
            name="search1"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          activeOpacity={1}>
          <User size={(windowWidth * 10) / 100} color="#e32b49" name="user" />
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
    flex: 10,
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

  card: {
    width: (windowWidth * 85) / 100,
    height: (windowHeight / 100) * 28,
    marginHorizontal: (windowWidth / 100) * 4,
    marginVertical: 35,
    backgroundColor: '#f7f7f7',
    borderRadius: 25,
    top: -15,
    padding: 15,
    flexDirection: 'row',
  },
  heroTxt: {
    color: '#f5627a',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  cardsView: {
    backgroundColor: '#fcfcfc',
    position: 'absolute',
    width: '100%',
    height: (windowHeight / 100) * 12,
    top: (windowHeight / 100) * 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 2,
  },
  cardSmall: {
    width: (windowWidth * 28) / 100,
    height: (windowHeight / 100) * 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    opacity: 1,
    marginLeft: 10,
    marginRight: 10,
    top: -30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card2: {
    width: (windowWidth * 93) / 100,
    height: (windowHeight / 100) * 20,
    marginHorizontal: (windowWidth / 100) * 4,
    marginVertical: 40,
    backgroundColor: '#0c889b',
    borderRadius: 25,
    opacity: 0.9,
    top: 72,
    flexDirection: 'row',
  },
});
