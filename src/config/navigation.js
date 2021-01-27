import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/signUp';
import Verification from '../screens/verification';
import Login from '../screens/login';
import Home from '../screens/home';
import Scroll from '../screens/scroll';

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
        {/* <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Scroll"
          component={Scroll}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
