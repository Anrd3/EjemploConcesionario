import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,  } from 'react-native';
import firebase from '../../firebase';

const AgendarTaller = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const serviciosDisponibles = ['Motos', 'Carros', 'Otros'];

  const handleValidation = () => {
    if (!nombre || !apellidos || !email || !telefono || !descripcion ) {
      Alert.alert('Campos requeridos', 'Por favor, complete todos los campos.');
    } else {
      handleAgendar();
    }
  };

  const handleInputChange = (setState, value, allowNumbers) => {
    if (
      (!allowNumbers && !/^[a-zA-Z\s]*$/.test(value)) ||
      (allowNumbers && !/^[0-9\s]*$/.test(value))
    ) {
      return;
    }
    setState(value);
  };

  const handleSelectServicio = (selectedServicio) => {
    setServicio(selectedServicio);
  };
  

  const handleAgendar = async () => {
    try {
      await firebase.db.collection('talleres').add({ 
        nombre,
        apellidos,
        email,
        telefono,
        servicio,
        descripcion,
        fecha,
      });
      Alert.alert('Éxito', 'Taller agendado correctamente.');
      setNombre('');
      setApellidos('');
      setEmail('');
      setTelefono('');
      setServicio('');
      setDescripcion('');
      setFecha('');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al agendar el taller.');
      console.error('Error al agendar el taller:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agendar Taller</Text>
      <View style={styles.formulario}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="gray"
            value={nombre}
            onChangeText={(value) => handleInputChange(setNombre, value)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Apellidos:</Text>
          <TextInput
            style={styles.input}
            placeholder="Apellidos"
            placeholderTextColor="gray"
            value={apellidos}
            onChangeText={(value) => handleInputChange(setApellidos, value)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo Electrónico:</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            keyboardType="phone-pad"
            placeholderTextColor="gray"
            value={telefono}
            onChangeText={(value) => handleInputChange(setTelefono, value, true)}
          />
        </View>

        <View style={styles.serviciosContainer}>
          <Text style={styles.label}>Servicio:</Text>
          <View style={styles.serviciosContainer}></View>
          {serviciosDisponibles.map((servicioItem, index) => (
            <Button
              key={index}
              title={servicioItem}
              onPress={() => handleSelectServicio(servicioItem)}
              color={servicio === servicioItem ? '#007bff' : 'gray'}
            />
          ))}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descripción:</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Descripción"
            multiline
            numberOfLines={4}
            placeholderTextColor="gray"
            value={descripcion}
            onChangeText={(value) => handleInputChange(setDescripcion, value, true)}
          />
        </View>
        <Button title="Agendar" onPress={handleValidation} color="#007bff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  botonF : {
    marginBottom: 20

  },
  formulario: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  serviciosContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 0.5
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    marginRight: 10,
  },
  
});

export default AgendarTaller;
