import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Filme } from '../types/Filme';

type Props = {
  filme: Filme;
};

export default function FilmeItem({ filme }: Props) {
  console.log('Renderizando filme:', filme.titulo); 
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{filme.titulo}</Text>
      <Text style={styles.texto}>Ano: {filme.ano}</Text>
      <Text style={styles.texto}>Diretor: {filme.diretor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: '#555',
  },
});