import React, { useContext, useEffect } from 'react';
import { Image, View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import FirebaseContext from '../../Context/firebase/firebaseContext';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Catalogo = () => {
  const navigation = useNavigation();
  const { menu, obtenerProducto } = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProducto();
  }, []);

  const renderPlato = ({ item }) => {
    const vehiculos = [];
    const marcas = ['Ferrari', 'RollsRoyce'];
    marcas.forEach((marca) => {
      if (item[marca]) {
        vehiculos.push(
          <TouchableOpacity onPress={() => navigation.navigate(`Detalles${marca}`)} key={marca}>
            <View style={styles.vehiculo}>
              <Image style={styles.image} source={{ uri: item[`Imagen${marca.charAt(0)}`] }} />
              <Text style={styles.titulo}>{item[marca]}</Text>
              <Text style={styles.descripcion}>{item[`Descripcion${marca.charAt(0)}`]}</Text>
            </View>
          </TouchableOpacity>
        );
      }
    });

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
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  vehiculo: {
    width: width * 0.45,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  descripcion: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Catalogo;
