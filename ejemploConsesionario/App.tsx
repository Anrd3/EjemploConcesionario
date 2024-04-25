  import 'react-native-gesture-handler';
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import Catalogo from './src/components/Catalogo'; 
  import BusquedaVehiculos from './src/components/BusquedaVehiculos';
  import SolicitudPruebaDeManejo from './src/components/SolicitudPruebaDeManejo';
  import SolicitudCotizacion from './src/components/SolicitudCotizacion';
  import AgendarTaller from './src/components/AgendarTaller';
  import Historial from './src/components/Historial';
  import Contacto from './src/components/Contacto'
  import PedidoState from './Context/pedidos/pedidoState';
  import FirebaseState from './Context/firebase/firebaseStage';
  import MyDrawer from './Drawer/DrawerNavigation';



import MenuPrincipal from './src/components/MenuPrincipal';
  const App = () => {
    const Stack = createStackNavigator()
    return (
      
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='MenuPrincipal' component={MenuPrincipal}/>
              <Stack.Screen name='BusquedaVehiculos' component={BusquedaVehiculos}/>
              <Stack.Screen name='Catalogo' component={Catalogo}/>
              <Stack.Screen name='SolicitudPruebaDeManejo' component={SolicitudPruebaDeManejo}/>
              <Stack.Screen name='AgendarTaller' component={AgendarTaller}/>
              <Stack.Screen name='Historial' component={Historial}/>
              <Stack.Screen name='SolicitudCotizacion' component={SolicitudCotizacion}/>
              <Stack.Screen name='Contacto' component={Contacto}/>

            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>

    
    )
  }

  const styles = StyleSheet.create({
    containerBusqueda: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    containerCatalogo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    containerPrueba: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    containerCotizacion: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    containerAgenda: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    containerHistorial: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    containerContacto : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }

    });



  export default App;