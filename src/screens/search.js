import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import database from '@react-native-firebase/database';
const windowWidth = Dimensions.get('window').width;

const Search = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState('Faisalabad');

  const searchBlood = (bloodType) => {
    setIsLoading(true);
    const donorsData = [];
    database()
      .ref('users')
      .orderByChild('bloodType')
      .equalTo(bloodType)
      .once('value')
      .then((results) => {
        results.forEach((snapshot) => {
          donorsData.push(snapshot.val());
        });
        setData(donorsData);
        setIsLoading(false);
        if (donorsData == '') {
          alert(`No Donor Available with ${bloodType} type`);
        }
      })
      .catch(() => {
        alert('no data found');
      });
  };
  const searchLocation = (location) => {
    setIsLoading(true);
    const donorsData = [];
    database()
      .ref('users')
      .orderByChild('location')
      .equalTo(location)
      .once('value')
      .then((results) => {
        results.forEach((snapshot) => {
          donorsData.push(snapshot.val());
        });
        setData(donorsData);
        setIsLoading(false);
        if (donorsData == '') {
          alert(`No Donor Available with at ${location}`);
        }
      })
      .catch((ee) => {});
  };
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#e32b49" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 0.8,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}>
          <Icon size={40} color="#000" name="west" />
        </TouchableOpacity>
        <Text style={styles.heroTxt}>Find Donors</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 2.2,
        }}>
        <Text style={{fontSize: 25, fontFamily: 'monospace'}}>
          Search with Blood Group
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '90%',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('A+')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                A+
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('A-')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                A-
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('B+')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                B+
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('B-')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                B-
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('O+')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                O+
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('O-')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                O-
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('AB+')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                AB+
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => searchBlood('AB-')}>
            <View style={{...styles.blood, borderRadius: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}>
                AB-
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: '15%',
        }}>
        <Text
          style={{fontSize: 25, fontFamily: 'monospace', textAlign: 'center'}}>
          Search with Location
        </Text>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={styles.input}
            placeholder="Location"
            keyboardType="phone-pad"
            textAlign={'center'}
            selectionColor="#1e2d50"
            value={location}
            onChangeText={(e) => setLocation(e)}
          />
          <TouchableOpacity
            onPress={() => searchLocation(location)}
            activeOpacity={1}
            style={styles.search}>
            <SearchIcon
              size={(windowWidth * 10) / 100}
              color="#fff"
              name="search1"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 5,
        }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{width: '95%'}}>
          {data?.map((v, i) => {
            return (
              <View key={v.uid} style={styles.card}>
                {v.photo && (
                  <Image
                    source={{uri: v.photo}}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 50,
                    }}
                  />
                )}
                <View style={{flex: 3, padding: 10}}>
                  <Text style={{fontSize: 25, color: '#f23c5a'}}>{v.name}</Text>
                  <Text style={{fontSize: 17, color: '#f23c5a'}}>
                    {v.location}
                  </Text>
                </View>
                <View style={styles.blood}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                    }}>
                    {v.bloodType}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    width: '97%',
    height: 120,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5.62,
    elevation: 4,
  },
  heroTxt: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginRight: 70,
  },
  blood: {
    height: 75,
    width: 75,
    backgroundColor: '#f23c5a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#fff',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d50',
    fontSize: 17,
  },
  search: {
    height: 60,
    width: 60,
    backgroundColor: '#f23c5a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5.62,
    elevation: 4,
  },
});
