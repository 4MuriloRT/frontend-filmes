import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AdicionarFilme from '../screens/AdicionarFilme';
import DetalhesFilme from '../screens/DetalhesFilme';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Corrigir import
import { RootStackParamList } from '../types/navigation'; // Adicionar import

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AdicionarFilme" component={AdicionarFilme} />
      <Stack.Screen name="DetalhesFilme" component={DetalhesFilme} />
    </Stack.Navigator>
  );
}