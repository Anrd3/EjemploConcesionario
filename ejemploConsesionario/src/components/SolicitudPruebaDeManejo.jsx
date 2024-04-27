import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SolicitudPruebaManejo = () => {
  const [nombre,setNombre]= useState("")
  const [apellido,setApellido]= useState("")
  const [fechaSolicitud,setFechaSolicitud]= useState("")
  const [cedula,setCedula]= useState("")
  const [celular,setCelular]=useState("")

const handleChange = () => {
  if(!nombre || !apellido || !fechaSolicitud || !cedula || !celular){
    Alert.alert("Es necesario rellenar todos los campos")
  }
  else{
    Alert.alert("Todos los campos rellenados correctamente")
  }
}


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Solicitud de Prueba de Manejo</Text>
      <View style={styles.formulario}>
        
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="gray" 
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="gray" 
          value={apellido}
          onChangeText={(text) => setApellido(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Solicitud"
          keyboardType="numeric"
          placeholderTextColor="gray" 
          value={fechaSolicitud}
          onChangeText={(text) => setFechaSolicitud(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CC"
          keyboardType="numeric"
          placeholderTextColor="gray" 
          value={cedula}
          onChangeText={(text) => setCedula(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Celular"
          keyboardType="phone-pad"
          placeholderTextColor="gray" 
          value={celular}
          onChangeText={(text) => setCelular(text)}
        />
        <Button
          title="Solicitar Cita"
          onPress={handleChange}
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
    color: 'black'
    
  },
});

export default SolicitudPruebaManejo;
