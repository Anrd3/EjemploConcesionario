import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SolicitudCotizacion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Solicitud de Cotización</Text>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="gray" 
          maxLength={20}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="gray"
          maxLength={20} 
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          placeholderTextColor="gray"
          maxLength={50} 
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          placeholderTextColor="gray"
          maxLength={20} 
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo de Vehículo (Nuevo/Usado)"
          placeholderTextColor="gray" 
        />
        <TextInput
          style={styles.input}
          placeholder="Modelo"
          placeholderTextColor="gray" 
        />
        <TextInput
          style={styles.input}
          placeholder="Año"
          keyboardType="numeric"
          placeholderTextColor="gray" 
        />
        <Button
          title="Solicitar Cotización"
          onPress={() =>{
            console.log("presionado")
            Alert.alert('xd');
          }}
        />
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
    marginTop: 20,
    color: 'black',
  },
  formulario: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black'
  },
});

export default SolicitudCotizacion;
