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
                        source={{ uri: 'https://th.bing.com/th/id/R.46c79932d2c758b43152344af3d0d46e?rik=LrRBjmhEcqM%2fVw&pid=ImgRaw&r=0' }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </TouchableHighlight>
            </Swiper>
       
            <TouchableHighlight
                style={styles.menuButton}
                onPress={() => setModalVisible(true)}        
            >
                <Image
                    source={{ uri: ('https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/06_menu_stack-1024.png')}} 
                    style={styles.menuButtonImage}
                />
            </TouchableHighlight >
           <TouchableHighlight
           style={styles.menuButtonImage1}
           onPress={() => navigation.navigate('MenuPrincipal')} underlayColor="red"
           >
            <Image
            source={{ uri: ('https://th.bing.com/th/id/OIP.dn09HIppt-TGQOOBLpqLhwHaHa?w=626&h=626&rs=1&pid=ImgDetMain')}}
            style={styles.menuButtonImage1}
            />
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
                  <TouchableHighlight onPress={() =>  navigation.navigate('AgendarTaller')} underlayColor="gray">
                        <Text style= {styles.textStyle}> Agendar Taller</Text>
                      </TouchableHighlight>
                      </View>
                    <View style = {styles.textContainer} >
                    <TouchableHighlight onPress={() =>  navigation.navigate('BusquedaVehiculos')} underlayColor="gray">
                    <Text > Busqueda De Vehiculos</Text>
                    </TouchableHighlight>
                    </View>
                    
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('Catalogo')} underlayColor="gray">
                    <Text> Catalogo</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('Contacto')} underlayColor="gray"> 
                    <Text> Contacto</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('Historial')} underlayColor="gray">
                    <Text> Historial</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('SolicitudCotizacion')} underlayColor="gray"> 
                    <Text> Solicitud Cotizacion</Text>
                    </TouchableHighlight>
                    </View>
                    <View style = {styles.textContainer}>
                    <TouchableHighlight onPress={() =>  navigation.navigate('SolicitudPruebaDeManejo')} underlayColor="gray">
                    <Text> Solicitud Prueba De Manejo</Text>
                    </TouchableHighlight>
                    </View>
                    <TouchableHighlight
                            onPress={() => setModalVisible(!modalVisible)}
                            underlayColor="white"
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
        backgroundColor: '#26272b'
        
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
      backgroundColor: 'black', 
},
menuButtonImage: {
    width: 50, 
    height: 50, 
    position: 'absolute',
    top: 0,
    borderRadius: 20,
    
},
menuButtonImage1: {
    width: 100, 
    height: 60, 
    position: 'absolute',
    top: 0,
    borderRadius: 20,
    
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
  padding: 10
  

},
closeButton: {
  marginTop: 0,
  marginBottom: 5,
  padding: 10,
  borderRadius: 9,
  backgroundColor: 'black'
},
menuButton: {
position: 'absolute',
top: 0,
left: 0
},




});

export default MenuPrincipal;










