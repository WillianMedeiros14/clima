import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CustomDrawer( props ){
    return(

        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
            <View style={styles.viewTitulo}> 
                <FontAwesome5 
                    name="cloud-sun" 
                    size={50} 
                    color="#1ED6FF" 
                />
                <Text style={styles.TituloPagina}> CLIMA </Text>
            </View>
            <Drawer.Section style={styles.drawerSection}>
            
                <DrawerItem 
                    icon={({color, size}) => (
                        <FontAwesome5 
                            name="home" 
                            size={20} 
                            color="#1ED6FF" 
                        />
                    )}
                    label="Meu local atual"
                    onPress={() => {props.navigation.navigate('Home')}}
                />

                <DrawerItem 
                    icon={({color, size}) => (
                        <FontAwesome5 
                            name="search" 
                            size={20} 
                            color="#1ED6FF" 
                        />
                    )}
                    label="Procurar"
                    onPress={() => {props.navigation.navigate('Search')}}
                />  

                <DrawerItem 
                    icon={({color, size}) => (
                        <FontAwesome5 
                            name="info-circle" 
                            size={20} 
                            color="#1ED6FF" 
                        />
                    )}
                    label="Sobre o aplicativo"
                    onPress={() => {props.navigation.navigate('Sobre')}}
                /> 
                    
            </Drawer.Section>
        </DrawerContentScrollView>
        </View>
        
    )
}


const styles = StyleSheet.create({
    viewTitulo: {
        width: '100%',
        marginTop: 25,
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TituloPagina: {
        fontSize: 19,
    },
    drawerSection: {
        marginTop: 15,
    },
      

})