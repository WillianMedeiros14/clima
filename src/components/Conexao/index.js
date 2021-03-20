import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function Conexao(){
  return(
    
    <View style={styles.container}>
        <Text style={styles.text}> Você está sem conexão </Text>  
        <Feather
            name="wifi-off" 
            size={30} 
            color="#1ED6FF" 
        />
    </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    text: {
        fontSize: 17, 
        marginBottom: 10
    }
});