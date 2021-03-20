import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';
import Sobre from './pages/Sobre';
import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator
        drawerContent={CustomDrawer}
        >
           <Drawer.Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'Meu Local atual'
                }}
            />

            <Drawer.Screen 
                name="Search"
                component={Search}
                options={{
                    title: 'Procurar'
                }}
            />

            <Drawer.Screen 
                name="Sobre"
                component={Sobre}
                options={{
                    title: 'Sobre o aplicativo'
                }}
            />
            
        </Drawer.Navigator>
    )
}

export default Routes;