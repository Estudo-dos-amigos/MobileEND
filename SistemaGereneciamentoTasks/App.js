import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import RegistrarScreen from './src/components/RegistrarScreen';
import RecuperarSenhaScreen from './src/components/RecuperarSenhaScreen';
import HomeScreen from './src/components/HomeScreen';



const Stack = createStackNavigator();

function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RegistrarScreen" component={RegistrarScreen} options={{headerShown:false}} />
        <Stack.Screen name="RecuperarSenhaScreen" component={RecuperarSenhaScreen} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;