import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';

const Order = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const donorsData = [];
    database()
      .ref('users')
      .orderByChild('isDonor')
      .equalTo(true)
      .once('value')
      .then((results) => {
        results.forEach((snapshot) => {
          donorsData.push(snapshot.val());
        });
        setData(donorsData);
        setIsLoading(false);
      });
  }, []);
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
        <Text style={styles.heroTxt}>All Donors</Text>
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

export default Order;
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
});
