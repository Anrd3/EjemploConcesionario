import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AgendarTaller = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agendar Taller</Text>
      <View style={styles.formulario}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="gray" 
        />
        <Text style={styles.label}>Apellidos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="gray" 
        />
        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          placeholderTextColor="gray" 
        />
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          placeholderTextColor="gray" 
        />
        <Text style={styles.label}>Servicio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Servicio"
          placeholderTextColor="gray" 
        />
        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Descripción"
          multiline
          numberOfLines={4}
          placeholderTextColor="gray" 
        />
        <Button
          title="Agendar"
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
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
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
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default AgendarTaller;
