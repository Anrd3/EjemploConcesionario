import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SolicitudCotizacion = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');

  const handleSubmit = () => {
    if (!nombre || !apellidos || !email || !telefono || !tipoVehiculo || !modelo || !año) {
      Alert.alert('Todos los campos son obligatorios.');
    } else {
      Alert.alert('Solicitud de cotización enviada');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Solicitud de Cotización</Text>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="gray" 
          maxLength={20}
          onChangeText={(text) => setNombre(text)}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="gray"
          maxLength={20} 
          onChangeText={(text) => setApellidos(text)}
          value={apellidos}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          placeholderTextColor="gray"
          maxLength={50} 
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          placeholderTextColor="gray"
          maxLength={20} 
          onChangeText={(text) => setTelefono(text)}
          value={telefono}
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo de Vehículo (Nuevo/Usado)"
          placeholderTextColor="gray"
          onChangeText={(text) => setTipoVehiculo(text)}
          value={tipoVehiculo}
        />
        <TextInput
          style={styles.input}
          placeholder="Modelo"
          placeholderTextColor="gray"
          onChangeText={(text) => setModelo(text)}
          value={modelo}
        />
        <TextInput
          style={styles.input}
          placeholder="Año"
          keyboardType="numeric"
          placeholderTextColor="gray"
          onChangeText={(text) => setAño(text)}
          value={año}
        />
        <Button
          title="Solicitar Cotización"
          onPress={handleSubmit}
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

