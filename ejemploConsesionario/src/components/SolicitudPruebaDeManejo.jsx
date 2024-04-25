import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SolicitudPruebaManejo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Solicitud de Prueba de Manejo</Text>
      <View style={styles.formulario}>
        
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="gray" 
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="gray" 
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Solicitud"
          keyboardType="numeric"
          placeholderTextColor="gray" 
        />
        <TextInput
          style={styles.input}
          placeholder="CC"
          keyboardType="numeric"
          placeholderTextColor="gray" 
        />
        <TextInput
          style={styles.input}
          placeholder="Celular"
          keyboardType="phone-pad"
          placeholderTextColor="gray" 
        />
        <Button
          title="Solicitar Cita"
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
    marginTop: 50
  },
  titulo: {  //no aparece (solucionar)
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
    paddingHorizontal: 30,
    
  },
});

export default SolicitudPruebaManejo;
