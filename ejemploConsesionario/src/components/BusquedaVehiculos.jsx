import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '@react-navigation/native';

const BusquedaVehiculos = () => {
  const navigation = useNavigation();
  return (
    
   
    <View>
   

        <Button style={styles.Button}
          title="Buscar"
          onPress={() => navigation.navigate('Catalogo')}
        />
     

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
  Button: {
    flex: 1,
    color: 'blue'

  }
  
});

export default BusquedaVehiculos;
