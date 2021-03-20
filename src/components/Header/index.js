import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../utils/condition';

export default function Header({background, weather}){

    let icon = condition(weather.results.condition_slug);

    return(
        <LinearGradient 
        style={styles.header}
        colors={background}
        >

            <Text style={styles.date_description}> {weather.results.date} </Text>
            <Text style={styles.city}> {weather.results.city_name} </Text>
            <Ionicons
                name={icon.name}
                color={icon.color}
                size={120}
            />
            <Text style={styles.date_description}> {weather.results.description} </Text>

            <Text style={styles.temp}> {weather.results.temp}° </Text>
            
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '95%',
        height: '58%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        
    },
    date_description: {
        color: '#FFF',
        fontSize: 17,
        marginTop: 11
    },
    city: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    temp: {
        color: '#FFF',
        fontSize: 75,
        fontWeight: 'bold'
    }
});