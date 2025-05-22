import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Filme } from '../types/Filme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = {
  filme: Filme;
  onDelete: (id: number) => void;
};

export default function FilmeItem({ filme, onDelete }: Props) {
  
  console.log('Renderizando filme:', filme.titulo); 
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const confirmarDelete = () => {
    Alert.alert(
      'Deletar Filme',
      `Tem certeza que quer deletar "${filme.titulo}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Deletar', onPress: () => onDelete(filme.id) },
      ]
    );
  };

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('DetalhesFilme', { filme  })}
    >
      <View style={styles.card}>
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text>Ano: {filme.ano}</Text>
        <Text>Diretor: {filme.diretor}</Text>
        <TouchableOpacity onPress={confirmarDelete} style={styles.deleteButton}>
          <Text style={{ color: 'red' }}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
  deleteButton: { 
    marginTop: 8,
    alignSelf: 'flex-end'
  },
});