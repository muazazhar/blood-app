import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/signUp';
import Verification from '../screens/verification';
import Login from '../screens/login';
import Home from '../screens/home';
import Register from '../screens/register';
import CheckUser from '../screens/checkuser';
import Settings from '../screens/settingPage';
const Stack = createStackNavigator();

function AppNavigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="CheckUser"
          component={CheckUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
          navigation={navigation}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
