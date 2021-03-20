import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View, Modal, TouchableOpacity, Button} from 'react-native';
import * as Location from 'expo-location';
import {useNetInfo} from "@react-native-community/netinfo";

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import Conexao from '../../components/Conexao';

import api, { key } from '../../services/api';
import { Switch } from 'react-native-gesture-handler';


export default function Home(){

  const netInfo = useNetInfo();

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [background, setBackground] = useState(['#1ED6FF', '#97C1FF']);
  const [isModalVisible, setModalVisible] = useState(false);
  

  const abrir = () => {
    setModalVisible(true);
  };

  const fechar = () => {
    setModalVisible(false);
  };

  useEffect(()=>{
    
    if (netInfo.isConnected == true) {
      fechar();
      (async ()=>{
        let { status } = await Location.requestPermissionsAsync();
  
        if(status !== 'granted') {
          setErrorMsg('Permissão negada para acessar localização');
          setLoading(false);
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        
        const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
        console.log(response.data);
  
        setWeather(response.data);
  
        if(response.data.results.currently == 'noite') {
          setBackground(['#0C3741', '#0F2F61']);
        }

        setLoading(false);
  
      })();
  
    } else {
      abrir();
    }
   
  }, [netInfo]);

  if(loading) {
    return(
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: 'italic'}}> Carregando dados... </Text>
      </View>
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      
     <Menu/>

     <Header background={background} weather={weather}/>

      <Conditions weather={weather} />

      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%', paddingRight: '3%' }}
        style={styles.list}
        data={weather.results.forecast}
        keyExtractor={ item => item.date }
        renderItem={ ({item}) => <Forecast data={item}/> }
      />
     
      <Modal animationType="slid" visible={isModalVisible}>
        <Conexao />
      </Modal>

    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8F0FF',
        paddingTop: '6%'
    },
    list: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});