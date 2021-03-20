import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { condition } from '../../utils/condition';

export default function Forecast({ data }){

    let icon = condition(data.condition);

    return(
        <View style={styles.container}>
            <Text style={styles.date}> {data.date} </Text>
            <View style={styles.viewDescription}>
                <Ionicons name={icon.name} color={icon.color} size={25} />
                <Text style={styles.description}> {data.description} </Text>
            </View>
            <View style={styles.temp}>
                <Text> {data.min} </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}> {data.max}° </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        paddingRight: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
    },    
    date: {
        fontSize: 14
    },
    viewDescription: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 12
    },
    temp: {
        alignItems: 'center',
    }
});