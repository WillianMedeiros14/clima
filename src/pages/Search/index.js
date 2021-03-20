import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, FlatList, Button } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Modalize } from 'react-native-modalize';

import api, { key } from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

export default function Search(){
    const navigation = useNavigation();
    const modalizeRef = useRef(null);

    const [input, setInput] = useState('');
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    const [background, setBackground] = useState(['#1ED6FF', '#97C1FF']);
    

    function onOpen(){
        modalizeRef.current?.open();
    }

    async function handleSearch(){
       
        const response = await api.get(`/weather?key=${key}&city_name=${input}`);

        if(response.data.by === 'default') {
            setError('Humm, cidade não encontrada!'),
            setInput('');
            setCity(null);
            Keyboard.dismiss();
            return;
        }

        if(response.data.results.currently == 'noite') {
            setBackground(['#0C3741', '#0F2F61']);
        }

        setCity(response.data);
        setInput('');
        Keyboard.dismiss();

    }

    if(city){
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

                <View style={styles.searchBox}>
                    <TextInput
                        value={input}
                        onChangeText={ (valor) => setInput(valor) }
                        placeholder="Ex: capinas, SP"
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                        <Feather 
                            name="search"
                            size={22}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>

                <LinearGradient
                    style={styles.header}
                    colors={['#1ed6ff', '#97c1ff']}
                >
                    <Text style={styles.date} > {city.results.date} </Text>
                    <Text style={styles.city} > {city.results.city} </Text>
                    <View>
                        <Text style={styles.temp} > {city.results.temp}° </Text>
                    </View>

                </LinearGradient>

                <TouchableOpacity style={styles.ButtonDetalhes}  onPress={onOpen}>
                    <Text style={styles.textDetalhes}> Todos os detalhes </Text>
                </TouchableOpacity>
                
                <Modalize
                    ref={modalizeRef}
                    snapPoint={400}
                    childrenStyle={styles.modalize}
                >
                    <View style={styles.containerModalize}>
                        <Header background={background} weather={city}/>
                        <Conditions weather={city} />
                        
                        <FlatList 
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            contentContainerStyle={{ paddingRight: '3%' }}
                            style={styles.list}
                            data={city.results.forecast}
                            keyExtractor={ item => item.date }
                            renderItem={ ({item}) => <Forecast data={item}/> }
                        />
                        
                    </View>
                    
                </Modalize>
               

            </SafeAreaView>
        )
    }

    return(
        <View style={styles.container}>
           <TouchableOpacity style={styles.backButton} onPress={ () => navigation.navigate('Home') } >
               <Feather 
                name="chevron-left"
                size={32}
                color="#000"
               />
               <Text style={{ fontSize: 22 }}> Voltar </Text>
           </TouchableOpacity>

          
                  
            <View style={styles.searchBox}>
                <TextInput
                    value={input}
                    onChangeText={ (valor) => setInput(valor) }
                    placeholder="Ex: capinas, SP"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather 
                        name="search"
                        size={22}
                        color="#FFF"
                    />
                </TouchableOpacity>
            </View>

             

            { error && <Text style={{ marginTop: 25, fontSize: 18 }}> {error} </Text>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        backgroundColor: '#E8F0FF'
    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDD',
        width: '90%',
        height: 50,
        borderRadius: 8
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 7
    },
    icon: {
        width: '15%',
        backgroundColor: '#1ED6FF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    header: {
        marginTop: '5%',
        width: '90%',
        paddingTop: '5%',
        paddingBottom: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    date: {
        color: '#FFF',
        fontSize: 16
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    temp: {
        color: '#FFF',
        fontSize: 90,
        fontWeight: 'bold'
    },


    ButtonDetalhes: {
        marginTop: 10,
        padding: 5,
        backgroundColor: '#97c1ff',
        borderRadius: 20,
    },
    textDetalhes: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalize: {
        backgroundColor: '#E8F0FF',
        padding: 10
    },
    containerModalize: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E8F0FF',
        paddingTop: '6%'
    },
    
    list: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
 
})