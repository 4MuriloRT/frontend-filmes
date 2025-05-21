import React, {useState, useEffect} from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import api from "../services/api";
import { Filme } from "../types/Filme";
import FilmeItem from "../components/FilmeItem";

export default function HomeScreen( ){
    const [filmes,setFilmes] = useState<Filme[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(()=>{
        async function carregarFilmes(){
            try{
                const response = await api.get<Filme[]>('/filmes');
                console.log( "Filmes carregados: ", response.data);
                setFilmes(response.data);
            } catch (err){
                console.error('Erro ao buscar filmes: ',err);
            }finally{
                setCarregando(false);
            }
        }

        carregarFilmes();
    }, []);

    if (carregando) {
    return (
        <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        </View>
    );
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Filmes</Text>
            {filmes.length === 0 ? (
            <Text style={styles.texto}>Nenhum filme encontrado.</Text>
            ) : (
            <FlatList
                data={filmes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <FilmeItem filme={item} />}
                contentContainerStyle={styles.lista}
                style={styles.lista}
            />
            )}
        </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12
    },
    texto: {
        fontSize: 16,
        textAlign: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lista: {
        flexGrow: 1,
    },
});