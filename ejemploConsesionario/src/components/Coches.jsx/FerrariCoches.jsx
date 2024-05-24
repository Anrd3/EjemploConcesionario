import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback , FlatList} from 'react-native';

import FirebaseContext from '../../../Context/firebase/firebaseContext';

const { width, height } = Dimensions.get('window');

const FerrariCoches = () => {
  const { menu, obtenerProducto } = useContext(FirebaseContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [contador, setContador] = useState(0);

  const handlePress = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  
  const calcularPrecioTotal = () => {
    return selectedItem.Coche2Precio * contador;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          item.Coche2 && item.Coche2Img && (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Image style={styles.image} source={{ uri: item.Coche2Img }} />
            </TouchableOpacity>
          )
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        visible={selectedItem !== null}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        {selectedItem && (
          <View style={styles.modalContent}>
            <Text style={styles.titulo}>{selectedItem.Coche2}</Text>
            
            <Text style={styles.descripcion}>{selectedItem.Coche2Descripcion}</Text>
            <Text style={styles.precioUnitario}>Precio unitario: ${selectedItem.Coche2Precio}</Text>
            <View style={styles.contadorContainer}>
              <TouchableOpacity onPress={decrementarContador} style={styles.botonContador}>
                <Text style={styles.botonTexto}>-</Text>
              </TouchableOpacity>
              <Text style={styles.contadorTexto}>{contador}</Text>
              <TouchableOpacity onPress={incrementarContador} style={styles.botonContador}>
                <Text style={styles.botonTexto}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalTexto}>Precio total:</Text>
              <Text style={styles.totalValor}>${calcularPrecioTotal()}</Text>
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: width,
    height: height * 0.8,
    resizeMode: 'cover',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titulo: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  precioUnitario: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
  },
  contadorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  botonContador: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  botonTexto: {
    fontSize: 20,
    color: 'white',
  },
  contadorTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight: width*0.25
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  totalValor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default FerrariCoches;
