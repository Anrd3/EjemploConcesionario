import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HistorialServicios = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial de Servicios</Text>
      <Button
        title="Cargar Servicios del Cliente"
      />
      <View style={styles.servicioContainer}>
      <View style={styles.servicio}>
        <Text style={styles.servicioTexto}>Ejemplo</Text>
        <Text style={styles.servicioTexto}>Ejemplo</Text>
        <Text style={styles.servicioTexto}>Ejemplo</Text>
      </View>
      <View style={styles.servicio}>
        <Text style={styles.servicioTexto}>Fecha: 05/02/2023</Text>
        <Text style={styles.servicioTexto}>Tipo: Reparación</Text>
        <Text style={styles.servicioTexto}>Descripción: Reparación de frenos</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  servicio: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    
  },
  servicioContainer: {
    width: '100%',

  },
  servicioTexto: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
});

export default HistorialServicios;
