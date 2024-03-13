import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const BusquedaVehiculos = () => {
  return (
    <ImageBackground source={{ uri: 'https://th.bing.com/th/id/OIP.VgcW1RJi4lInA8271kfSDgHaNK?rs=1&pid=ImgDetMain' }} style={styles.backgroundImage}>
    <View>
    <Text style={styles.titulo}>Búsqueda de Vehículos</Text>
    <View style={styles.container}>
        
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Marca"
          placeholderTextColor="gray" 
        />

        <Button
          title="Buscar"
        />
      </View>
    </View>
    </View>
    </ImageBackground>
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
    color: 'white',
    paddingTop: 10,
  },
  formulario: {
    width: '90%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 50,
    color: 'black'

  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
});

export default BusquedaVehiculos;
