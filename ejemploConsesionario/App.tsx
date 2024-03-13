import React from 'react';
import { View, StyleSheet } from 'react-native';
import Catalogo from './src/components/Catalogo'; 
import BusquedaVehiculos from './src/components/BusquedaVehiculos'; // Importa el componente BusquedaVehiculos
import SolicitudPruebaManejo from './src/components/SolicitudPruebaDeManejo';
import SolicitudCotizacion from './src/components/SolicitudCotizacion';
import AgendarTaller from './src/components/AgendarTaller';
import HistorialServicios from './src/components/Historial';

const App = () => {
  return (
  <View style={styles.containerHistorial}>
    <HistorialServicios/>
  </View>
  );
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

  });



export default App;