import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const BusquedaVehiculos = () => {
  const navigation = useNavigation();
  return (
    
   
    <View>
   
        <Image source= {{uri: 'https://5.imimg.com/data5/MJ/QE/MV/SELLER-21032740/work-under-maintenance-sign-board-500x500.jpg'}} style={styles.image}></Image>
        <View style= {styles.Container}>
        <Button style={styles.Button}
          title="Buscar"
          onPress={() => navigation.navigate('Catalogo')}

        />
        </View>

    </View>
   
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.8,
    resizeMode: 'cover',
  },
  Button: {
    marginTop: width*0.5,
    marginLeft: 1,
    marginRight: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,

  },
  Container: {
  
    padding: 20,
  }
  
});

export default BusquedaVehiculos;
