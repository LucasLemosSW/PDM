import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthUserContext} from '../context/AuthUserProvider';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';

export default function Routes() {
  const {user, setUser} = useContext(AuthUserContext);

  useEffect(() => {
    const unsubscriber = auth().onIdTokenChanged(authUser => {
      authUser ? setUser(authUser) : setUser(null);
    });

    return unsubscriber;
  }, []);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
