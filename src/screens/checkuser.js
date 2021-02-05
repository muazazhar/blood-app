import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Register from '../screens/register';
import Home from '../screens/home';
// import Settings from '../screens/settingPage';

const CheckUser = (props) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Register />;
  }

  return <Home navigation={props.navigation} />;
};
export default CheckUser;
