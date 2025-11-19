import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Sobre from './src/screens/Sobre';
import Integrantes from './src/screens/Integrantes';
// Cria a pilha de navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Biscoito da Sorte' }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: 'Sobre o App' }}
        />
        <Stack.Screen
          name="Integrantes"
          component={Integrantes}
          options={{ title: 'Integrantes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}