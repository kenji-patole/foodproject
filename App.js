/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useContext, useEffect, useState } from 'react'

import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FirebaseContext } from './FirebaseContext';

import Welcome from './components/Welcome';
import Login from './components/Login';
import Menu from './components/Menu';
import Detail from './components/Detail';
import Compte from './components/Compte';
import Register from './components/Register';


const Stack = createStackNavigator();

const App = () => {
  
  const {auth} = useContext(FirebaseContext)
  const [user, setUser] = useState(null)

  useEffect(() => {

    const authChange = auth.onAuthStateChanged(userAuth => {
      setUser(userAuth)
      console.log("user :", userAuth)
    })

    return () => {
      authChange
    }
  }, [])

  return (

    <NavigationContainer>
      
      { 
        user !== null ? 
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
        <Stack.Screen name="Menu" component={Menu}/>
          <Stack.Screen name="Detail" component={Detail}/>
          <Stack.Screen name="Compte" component={Compte}/>
          </Stack.Navigator>
        :
          <Stack.Navigator screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
          </Stack.Navigator>
    
      } 
      
    

    </NavigationContainer>
  );
};


export default App;
