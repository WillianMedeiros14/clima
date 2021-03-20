import React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Sobre(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={ () => navigation.navigate('Home') } >
                <Feather 
                    name="chevron-left"
                    size={32}
                    color="#000"
                />
                <Text style={{ fontSize: 22 }}> Voltar </Text>
            </TouchableOpacity>
            <FontAwesome5 
                name="cloud-sun" 
                size={80} 
                color="#1ED6FF" 
            />
           <Text style={styles.TituloPagina}> CLIMA </Text>
           <Text style={styles.texto}>
               Aplicativo Criado no React Native Insider 2.0, workshop gratúito realizado pelo Matheus Fraga do Sujeito Programador.
           </Text>
           <Text style={styles.texto}> Com o objetivo de mostrar como ocorre o desenvolvimento de um aplicativo, desde os conceitos
               mais básicos, até os mais avançados, como: navegação de páginas e consumo de api.
           </Text>
           <Text style={{ marginTop: 20, fontWeight: 'bold'}}> Versão 1.2</Text>
           <Text style={{ marginBottom: 20}}> Versão mais recente</Text>
           <Text> Autor: Willian Medeiros </Text>
           <Text> GitHub: https://github.com/WillianMedeiros14 </Text>
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '3%',
        backgroundColor: '#E8F0FF'
    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    TituloPagina: {
        fontSize: 22,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    texto: {
        fontSize: 15,
        paddingLeft: '3%',
        paddingRight: '3%',
        textAlign: 'center'
    }
})