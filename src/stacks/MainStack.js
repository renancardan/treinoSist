import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Preload from '../screens/preload';
import Home from '../screens/Home';
import Entrar from '../screens/Entrar';
import EntrarWhats from '../screens/EntrarWhats'
import RecupSenha from '../screens/RecupSenha'
import Financeiro from '../screens/Financeiro';
import Representante from '../screens/Representante';
import Empresa from '../screens/Empresa';
 
const Stack = createNativeStackNavigator();
export default function Ret() {

    
    return (
      <NavigationContainer  >
         
        <Stack.Navigator
      initialRouteName={"Preload"}

      >
       <Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: false
    }}   
     name="Preload" component={Preload} />
      <Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: false
    }}   
     name="Empresa" component={Empresa} />
       <Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: false
    }}   
     name="Representante" component={Representante} />
      <Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: false
    }}   
     name="Home" component={Home} />
       <Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: false
    }}   
     name="Financeiro" component={Financeiro} />

<Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: true
    }}   
     name="Entrar" component={Entrar} />
     <Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: true
    }}   
     name="EntrarWhats" component={EntrarWhats} />
       <Stack.Screen
     options={{
        title: 'TreinoSistem',
        headerShown: true
    }}   
     name="RecupSenha" component={RecupSenha} />

      </Stack.Navigator>
      
      </NavigationContainer>
    );
  }