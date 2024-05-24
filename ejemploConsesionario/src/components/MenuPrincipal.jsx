import React, { useState } from 'react';
import { View, StyleSheet, Image, Modal, TouchableOpacity, Text, Dimensions, ScrollView, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const MenuPrincipal = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        Linking.openURL('https://www.instagram.com/human_peak_/?hl=en');
      };

    const handleExit = () => {
        setModalVisible(false);
    };

    const menuItems = [
        { icon: 'https://cdn-icons-png.flaticon.com/512/284/284301.png', label: 'Agendar Taller', route: 'AgendarTaller' },
        { icon: 'https://th.bing.com/th/id/OIP.nioMBH4gmpXzHTIHIlkzQAHaHa?rs=1&pid=ImgDetMain', label: 'Busqueda Vehículos', route: 'BusquedaVehiculos' },
        { icon: 'https://th.bing.com/th/id/R.a0d2f485198396855a6f68c65a0d1604?rik=VT0TYeqsS7HVdQ&pid=ImgRaw&r=0', label: 'Catálogo', route: 'Catalogo' },
        { icon: 'https://th.bing.com/th/id/OIP.DteD5dSl04xh_BokLkvqMAHaHa?rs=1&pid=ImgDetMain', label: 'Solicitud Cotización', route: 'SolicitudCotizacion' },
        { icon: 'https://th.bing.com/th/id/OIP.qSf0ROBl2YISaOvtO3ZPhwHaHa?rs=1&pid=ImgDetMain', label: 'Solicitud Prueba de Manejo', route: 'SolicitudPruebaDeManejo' },
        { icon: 'https://th.bing.com/th/id/R.9ec763a873819b3bb7b96165f9982c0a?rik=XPOE1DyrOk6zPg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_408496.png&ehk=dbfVmy4hWPpQE8DwunDeHIIBOZsoWf6qDS4lCEaX%2fGw%3d&risl=&pid=ImgRaw&r=0', label: 'Historial', route: 'Historial' },
        { icon: 'https://icon-library.com/images/contacts-icon-png/contacts-icon-png-0.jpg', label: 'Contacto', route: 'Contacto' },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.navbar}>
                    <Text style={styles.navbarTitle}>Concesionario</Text>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => setModalVisible(true)}
                    >
                        <Image source={{ uri: 'https://kalytapartners.com/images/icon-menu.png' }} style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Bienvenido a concesionario</Text>
                <Text style={styles.subtitle}>El mejor catálogo de vehículos</Text>

                <View style={styles.containerIm}>
                    <Swiper autoplay autoplayTimeout={3} showsPagination={true}>
                        {['https://th.bing.com/th/id/OIP.JeJrXHqGlrDu_Uw_n8uRKQHaEK?rs=1&pid=ImgDetMain',
                            'https://www.dmarge.com/wp-content/uploads/2017/05/bmw1.jpg',
                            'https://th.bing.com/th/id/R.46c79932d2c758b43152344af3d0d46e?rik=LrRBjmhEcqM%2fVw&pid=ImgRaw&r=0']
                            .map((uri, index) => (
                                <TouchableOpacity key={index} onPress={() => navigation.navigate('Catalogo')}>
                                    <Image source={{ uri }} style={styles.image} resizeMode="contain" />
                                    
                                </TouchableOpacity>
                            ))}
                    </Swiper>
                </View>

                <View style={styles.servicesSection}>
                    <Text style={styles.sectionTitleS}>Nuestros Servicios</Text>
                    <View style={styles.servicesContainer}>
                        <View style={styles.serviceItem}>
                            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7839/7839906.png' }} style={styles.serviceIcon} />
                            <Text style={styles.serviceText}>Revisión Técnica</Text>
                        </View>
                        <View style={styles.serviceItem}>
                            <Image source={{ uri: 'https://i.pinimg.com/originals/75/96/8e/75968e1e1678a01511ea0148f5ad5413.png' }} style={styles.serviceIcon} />
                            <Text style={styles.serviceText}>Cambio de Aceite</Text>
                        </View>
                        <View style={styles.serviceItem}>
                            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3456/3456426.png' }} style={styles.serviceIcon} />
                            <Text style={styles.serviceText}>Diagnóstico </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.promotionsSection}>
                    <Text style={styles.sectionTitleP}>Promociones</Text>
                    <View style={styles.promotionsContainer}>
                        <Text style={styles.promoText}>¡Aprovecha un 20% de descuento en servicios de mantenimiento este mes!</Text>
                        <TouchableOpacity style={styles.promoButton}>
                            <Text style={styles.promoButtonText}>Ver Promociones</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Contacto: Andres.londono41@correo.tdea.edu.co | Tel: 66 666 666</Text>
                    <Text style={styles.footerText}>Síguenos en nuestras redes sociales:</Text>
                    <View style={styles.socialIcons}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' }} style={styles.socialIcon} />
                        <TouchableOpacity onPress={handlePress}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733558.png' }}
        style={styles.socialIcon}
      />
    </TouchableOpacity>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' }} style={styles.socialIcon} />
                    </View>
                </View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => {
                                setModalVisible(false);
                                navigation.navigate(item.route);
                            }}>
                                <View style={styles.menuItemContainer}>
                                    <Image source={{ uri: item.icon }} style={styles.menuItemIcon} />
                                    <Text style={styles.menuItemText}>{item.label}</Text>
                                </View>
                                {index < menuItems.length && <View style={styles.divider} />}
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={handleExit}>
                            <View style={styles.menuItemContainer}>
                                <View style={styles.Menusalir}>
                                    <Image source={{ uri: 'https://th.bing.com/th/id/R.2c60107316b7cc24e1000b68986723b1?rik=haTiosi7dmkraQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fexit%2fexit_PNG29.png&ehk=5XW9S9u5EpuPiY%2fLMdDQp5aOe5k3Sgmkx2U3lAxqzQY%3d&risl=&pid=ImgRaw&r=0' }} style={styles.menuItemIcon} />
                                    <Text style={styles.menuItemText}>Salir</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26272b',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#007AFF',
    },
    navbarTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginVertical: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Menusalir: {
        marginLeft: width * 0.33,
        marginTop: width * 0.25
    },
    subtitle: {
        fontSize: 16,
        color: '#bbb',
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    containerIm: {
        width: '90%',
        aspectRatio: 1.5,
        marginVertical: 20,
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    carouselText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuButton: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    menuIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: width * 0.3,
        margin: width * 0.1,
        width: '80%',
        height: '70%',
    },
    menuItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    menuItemIcon: {
        width: 36,
        height: 36,
        marginRight: 10,
    },
    menuItemText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 5,
    },
    servicesSection: {
        padding: 20,
    },
    sectionTitleS: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: width*0.25
    },
    sectionTitleP: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: width*0.30
    },
    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 1
    },
    serviceItem: {
        alignItems: 'center',
    },
    serviceIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    serviceText: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
    },
    promotionsSection: {
        padding: 20,
        backgroundColor: '#1f1f1f',
        marginVertical: 10,
    },
    promotionsContainer: {
        alignItems: 'center',
    },
    promoText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    promoButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    promoButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#26272b',
    },
    footerText: {
        color: '#bbb',
        marginBottom: 5,
        textAlign: 'center',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 5,
    },
});

export default MenuPrincipal;
