import React, { useContext, useEffect } from 'react';
import { Image, View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import FirebaseContext from '../../Context/firebase/firebaseContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const Catalogo = () => {
  const navigation = useNavigation();
  const { menu, obtenerProducto } = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProducto();
  }, []);

  const renderPlato = ({ item }) => {
    const vehiculos = [];
  
    if (item.BMW) {
      vehiculos.push(
        <TouchableHighlight onPress={() => navigation.navigate('')} underlayColor="black">
        <View style={styles.Vehiculo} key="BMW">
          <Text style={styles.titulo}>{item.BMW}</Text>
          <Image style={styles.image} source={{ uri: item.Imagen }} />
          <Text style={styles.descripcion}>{item.Descripcion}</Text>
        </View>
            </TouchableHighlight>
      );
    }
  
    if (item.Ferrari) {
      vehiculos.push(
        <TouchableHighlight onPress={() => navigation.navigate('DetallesFerrari')} underlayColor="black">
        <View style={styles.Vehiculo} key="Ferrari">
          <Text style={styles.titulo}>{item.Ferrari}</Text>
          <Image style={styles.image} source={{ uri: item.ImagenF }} />
          <Text style={styles.descripcion}>{item.DescripcionF}</Text>
        </View>
        </TouchableHighlight>
      );
    }
  
    if (item.RollsRoyce) {
      vehiculos.push(
        <TouchableHighlight onPress={() => navigation.navigate('')} underlayColor="black">
        <View style={styles.Vehiculo} key="RollsRoyce">
          <Text style={styles.titulo}>{item.RollsRoyce}</Text>
          <Image style={styles.image} source={{ uri: item.ImagenR }} />
          <Text style={styles.descripcion}>{item.DescripcionR}</Text>
        </View>
        </TouchableHighlight>
      );
    }
    if (item.Renault) {
      vehiculos.push(
        <TouchableHighlight onPress={() => navigation.navigate('')} underlayColor="black">
        <View style={styles.Vehiculo} key="Renault">
        <Text style={styles.titulo}>{item.Renault }</Text>
        <Text></Text> 
        <Image style={styles.image} source={{ uri: item.ImagenRe }} />
        <Text style={styles.descripcion}>{item.DescripcionRe}</Text>
      </View>
      </TouchableHighlight>
      )
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
      numColumns={2} // Cambiado a 2 columnas para dos tarjetas por fila
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10, // Reducido el espacio horizontal
    paddingBottom: 10, // Reducido el espacio vertical
    
  },
  Vehiculo: {
    width: width * 0.45, // Ancho ajustado para dos tarjetas por fila
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    minHeight: 500, // Establecer una altura mínima deseada para los contenedores
    
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, // Reducido el espacio entre elementos
    textAlign: 'center',
    color: 'black',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 5, // Reducido el espacio entre elementos
  },
  descripcion: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  
});

export default Catalogo;

