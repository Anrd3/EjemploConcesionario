import React from 'react';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native';


const catalogo = [
  {
    id: 1,
    nombre: 'Honda NSX Hybrid Super Car',
    descripcion: 'Descripción del Vehículo 1',
    precio: '?',
    imagenUrl: 'https://th.bing.com/th/id/OIP.JeJrXHqGlrDu_Uw_n8uRKQHaEK?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    nombre: 'BMW',
    descripcion: 'Descripción del Vehículo 2',
    precio: '?',
    imagenUrl: 'https://www.dmarge.com/wp-content/uploads/2017/05/bmw1.jpg',
  },
  {
    id: 3,
    nombre: 'Ferrari',
    descripcion: 'Descripción del Vehículo 3',
    precio: '?',
    imagenUrl: 'https://th.bing.com/th/id/R.43d9d7f765284bc64b1e660555e69891?rik=1hdSz%2bKOJYW9Ig&riu=http%3a%2f%2fcdn.carbuzz.com%2fgallery-images%2f1600%2f743000%2f300%2f743304.jpg&ehk=%2fcUTlfZ3gN0HhJuRJQrGH1ekzW6juBazUlJNdHNTi2E%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 4,
    nombre: 'Rolls Royce',
    descripcion: 'Descripción del Vehículo 4',
    precio: '?',
    imagenUrl: 'https://wallpaperaccess.com/full/423086.jpg',
  },


];

const Catalogo = () => {
  return (
    <View style={styles.container}>

      {catalogo.map(vehiculo => (
        <View key={vehiculo.id} style={styles.vehiculoContainer}>
          <Image
            source={{ uri: vehiculo.imagenUrl }}
            style={styles.imagenVehiculo}
          />
          <View style={styles.infoVehiculo}>
            <Text style={styles.nombreVehiculo}>{vehiculo.nombre}</Text>
            <Text style={styles.descripcionVehiculo}>{vehiculo.descripcion}</Text>
            <Text style={styles.precioVehiculo}>${vehiculo.precio}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  vehiculoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagenVehiculo: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 5,
  },
  infoVehiculo: {
    flex: 1,
  },
  nombreVehiculo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  descripcionVehiculo: {
    fontSize: 16,
    color: 'gray',
  },
  precioVehiculo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'red',
  },
  
});

export default Catalogo;
