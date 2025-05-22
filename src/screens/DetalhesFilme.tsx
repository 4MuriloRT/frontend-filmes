import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Filme } from '../types/Filme';

type RootStackParamList = {
  DetalhesFilme: { filme: Filme };
  Home: undefined;
  AdicionarFilme: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'DetalhesFilme'>;

export default function DetalhesFilme({ route, navigation }: Props) {
  const { filme } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{filme.titulo}</Text>
      <Text>Ano: {filme.ano}</Text>
      <Text>Diretor: {filme.diretor}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
});