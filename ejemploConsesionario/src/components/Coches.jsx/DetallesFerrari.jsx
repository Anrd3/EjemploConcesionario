import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ImageBackground } from "react-native"
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../../../Context/firebase/firebaseContext';

const imageB = {uri: 'https://listcarbrands.com/wp-content/uploads/2015/12/Ferrari-Emblem.jpg'};

const { width } = Dimensions.get('window');
const DetallesFerrari = () =>{
    const navigation = useNavigation();
    const { menu, obtenerProducto } = useContext(FirebaseContext);
    useEffect(() => {
        obtenerProducto();
      }, []);
      const renderPlato = ({ item }) => {
        const vehiculos = [];
        
        if (item.Coche1) {
          vehiculos.push(
            <View style={styles.Vehiculo} key="Coche1">
            <Text style={styles.titulo}>{item.Coche1}</Text>
            <Image style={styles.image} source={{ uri: item.Coche1Img}} />
            <Text style= {styles.precio}>Desde ${item.Coche1Precio}</Text>

            </View>
          );
        }
        if (item.Coche2) {
            vehiculos.push(
              <View style={styles.Vehiculo} key="Coche2">
              <Text style={styles.titulo}>{item.Coche2}</Text>
              <Image style={styles.image} source={{ uri: item.Coche2Img}} />
              <View style={styles.contenedorDescripcion}>
                <Text style={styles.descripcion}>{item.Coche2Descripcion}</Text>
              </View>
              <View style={styles.contenedorPrecio}>
              <Text style= {styles.precio}>Desde ${item.Coche2Precio}</Text>
              </View>
              </View>
            );
          }
          if (item.Coche3) {
            vehiculos.push(
              <View style={styles.Vehiculo} key="Coche3">
              <Text style={styles.titulo}>{item.Coche3}</Text>
              <Image style={styles.image} source={{ uri: item.Coche3Img}} />
              <Text style= {styles.precio}>Desde ${item.Coche3Precio}</Text>
              </View>
            );
          }
      
        return (
          <View style={styles.container}>
            {vehiculos}
          </View>
        );
      };
    

  return (
            <FlatList
              data={menu}
              renderItem={renderPlato}
              keyExtractor={( index) => index.toString()}
              numColumns={2} 
              contentContainerStyle={styles.flatListContainer}
            />
          );
    
}

const styles = StyleSheet.create({

    flatListContainer: {
        justifyContent: 'center',
        paddingHorizontal: 10, // Reducido el espacio horizontal
        paddingBottom: 10, // Reducido el espacio vertical
        
      },
      Vehiculo: {
        width: width * 0.93, // Ancho ajustado para dos tarjetas por fila
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 35,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.80,
        shadowRadius: 10,
        elevation: 50,
        borderColor: 'black',
        borderWidth: 0.5,
        backgroundColor: 'white'

        
      },
      titulo:{
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        width: 60,
        marginLeft: width * 0.35,
        shadowColor: 'red',
        shadowOpacity: 20,
        shadowRadius: 100,
        elevation: 1,
      
      },
      image: {
        width: '100%',
        height: 150,
        width: 300,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 20, // Reducido el espacio entre elementos
        marginLeft: 50,
        borderWidth: 1,
        borderColor: 'black'
        
      },
      contenedorPrecio:{
       borderColor: 'black',
       borderWidth: 1,
        shadowColor: '#000',
        borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.50,
    shadowRadius: 15,
    elevation: 5,
    marginLeft: width * 0.22,
    width: '50%',
    height: 30

    
      },
      descripcion: {
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
      

      },
      imageB: {
        flex: 1,
        justifyContent: 'center',
      },
      contenedorDescripcion: {
       borderWidth: 1,
       borderRadius: 20,
       marginBottom: 5, 
        shadowOffset: { width: 1, height: 20 },
       shadowOpacity: 1,
       shadowRadius: 10,
       elevation: 30,

      },
      precio: {
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
      }
      


});

export default DetallesFerrari