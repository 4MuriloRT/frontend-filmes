import React, {useState, useEffect} from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button, Alert } from "react-native";
import api from "../services/api";
import { Filme } from "../types/Filme";
import FilmeItem from "../components/FilmeItem";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  AdicionarFilme: undefined;
  DetalhesFilme: { filme: Filme };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function HomeScreen({ navigation, route }: Props){
    const [filmes,setFilmes] = useState<Filme[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(()=>{
        carregarFilmes();

        if(route.params?.novoFilme){
            setFilmes(prevFilmes => [...prevFilmes, route.params.novoFilme]);
        }
        
    }, [route.params]);

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

    const deletarFilme = async (id: number) => {
    try {
        await api.delete(`/filmes/${id}`);
        setFilmes(filmes.filter(f => f.id !== id));
    } catch (err) {
        Alert.alert('Erro', 'Falha ao deletar filme.');
    }
    };

    if (carregando) {
    return (
        <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        </View>
    );
    }
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.titulo}>Filmes</Text>
                <Button 
                    title="Adicionar" 
                    onPress={() => navigation.navigate('AdicionarFilme')} 
                />
            </View>
            
                {filmes.length === 0 ? (
                <Text style={styles.texto}>Nenhum filme encontrado.</Text>
                ) : (
                <FlatList
                    data={filmes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <FilmeItem filme={item} onDelete={deletarFilme} />}
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
        marginTop: 20
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