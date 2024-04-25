import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Modal, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const MenuPrincipal = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Swiper
                autoplay
                autoplayTimeout={3}
                showsPagination={true}
            >
                <TouchableHighlight onPress={() => navigation.navigate('Catalogo')} underlayColor="red">
                    <Image
                        source={{ uri: 'https://th.bing.com/th/id/OIP.JeJrXHqGlrDu_Uw_n8uRKQHaEK?rs=1&pid=ImgDetMain' }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('Catalogo')}underlayColor="red">
                    <Image
                        source={{ uri: 'https://www.dmarge.com/wp-content/uploads/2017/05/bmw1.jpg' }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('Catalogo')} underlayColor="red">
                    <Image
                        source={{ uri: 'https://www.dmarge.com/wp-content/uploads/2017/05/bmw1.jpg' }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </TouchableHighlight>
            </Swiper>
            <TouchableHighlight
                style={styles.menuButton}
                onPress={() => setModalVisible(true)}        
            >
                <Text style={styles.menuButton}>Abrir Menú</Text>
            </TouchableHighlight>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                  <View style={styles.modalContainer}>
                  <View style = {styles.textContainer} >
                  <TouchableHighlight onPress={() =>  navigation.navigate('AgendarTaller')}>
                        <Text style= {styles.textStyle}> Agendar Taller</Text>
                      </TouchableHighlight>
                      </View>
                    <View style = {styles.textContainer} >
                    <TouchableHighlight onPress={() =>  navigation.navigate('BusquedaVehiculos')}>
                    <Text > Busqueda De Vehiculos</Text>
                    </TouchableHighlight>
                    </View>
                    
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('Catalogo')}>
                    <Text> Catalogo</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('Contacto')}>
                    <Text> Contacto</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('Historial')}>
                    <Text> Historial</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('SolicitudCotizacion')}>
                    <Text> Solicitud Cotizacion</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('SolicitudPruebaDeManejo')}>
                    <Text> Solicitud Prueba De Manejo</Text>
                    </TouchableHighlight>
                    </View>
                    <TouchableHighlight
                            onPress={() => setModalVisible(!modalVisible)}
                            underlayColor="#DDDDDD"
                            style={styles.closeButton}
                        >
                            <Text style={styles.closeButton}>Cerrar</Text>
                        </TouchableHighlight>
                  </View>
            </Modal>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '90%',
        aspectRatio: 1,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 20,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
    marginTop: 1,
    marginBottom: 1
    
},
textStyle: {
  color:'black'
},
textContainer: {
  flex: 1,
  marginBottom: 20,
  marginTop: 20,
  width: 100,
  height: 100,
  padding: 5
  

},
closeButton: {
  marginTop: 0,
  marginBottom: 5,
  backgroundColor: 'black',
  padding: 5,
  borderRadius: 9,
},
});

export default MenuPrincipal;










