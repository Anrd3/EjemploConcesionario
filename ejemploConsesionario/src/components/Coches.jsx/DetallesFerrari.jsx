import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../../../Context/firebase/firebaseContext';

const { width } = Dimensions.get('window');

const DetallesFerrari = () => {
  const navigation = useNavigation();
  const { menu, obtenerProducto } = useContext(FirebaseContext);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <FlatList
  data={menu}
  renderItem={({ item }) => (
    item.Coche2 && item.Coche2Img && (
      <TouchableOpacity
        style={styles.container}
        onPress={() => toggleExpand(item)}
      >
        <View style={styles.vehiculo}>
          <Text style={styles.titulo}>{item.Coche2}</Text>
          <Image style={styles.image} source={{ uri: item.Coche2Img }} />
        </View>
        {expandedItem === item && (
          <View style={styles.expandedContainer}>
            <Text style={styles.descripcion}>{item.Coche2Descripcion}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FerrariCoches')}
            >
              <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    )
  )}
  keyExtractor={(item, index) => index.toString()}
/>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  vehiculo: {
    width: width * 0.9,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10
  },
  titulo: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  expandedContainer: {
    marginTop: 10,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  descripcion: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});






export default DetallesFerrari;

