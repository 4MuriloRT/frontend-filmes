import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import api from "../services/api";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'AdicionarFilme'>;

export default function AdicionarFilme({ navigation }: Props){
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');
    const [diretor, setDiretor] = useState('');
    
    const salvarFilme = async () =>{
        if(!titulo || !ano || !diretor){
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }
        try{
            await api.post('/filmes', {titulo, ano: parseInt(ano), diretor});
            Alert.alert('Sucesso', 'Filme adicionado!');
            return;
        }catch(err){
            Alert.alert('Erro', 'Falha ao adicionar filme.');
        }
        navigation.goBack();
    };
    
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Título"
                value={titulo}
                onChangeText={setTitulo}
                style={styles.input}
            />
            <TextInput
                placeholder="Ano"
                value={ano}
                onChangeText={setAno}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Diretor"
                value={diretor}
                onChangeText={setDiretor}
                style={styles.input}
            />
            <Button title="Salvar" onPress={salvarFilme} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 16
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 12
    }
})