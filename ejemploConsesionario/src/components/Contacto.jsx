import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Contacto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informacion De Contacto</Text>
      <View style={styles.servicioContainer}>
      <View style={styles.servicio}>
      <Text style={styles.servicioTexto}>Nombre</Text>
        <Text style={styles.servicioTexto}>Direccion</Text>
        <Text style={styles.servicioTexto}>Telefono</Text>
        <Text style={styles.servicioTexto}>Correo Electronico</Text>
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
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
});

export default Contacto;