import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AdicionarFilme from './src/screens/AdicionarFilme';
import DetalhesFilme from './src/screens/DetalhesFilme';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Lista de Filmes' }} 
        />
        <Stack.Screen 
          name="AdicionarFilme" 
          component={AdicionarFilme} 
          options={{ title: 'Adicionar Filme' }} 
        />
        <Stack.Screen 
          name="DetalhesFilme" 
          component={DetalhesFilme} 
          options={{ title: 'Detalhes do Filme' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}