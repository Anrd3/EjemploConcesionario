import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, Button } from 'react-native';

const Contacto = () => {
  const abrirRedSocial = (url) => {
    Linking.openURL(url);
  };

  const handleCall = () =>{
    Linking.openURL("tel:+573148468991")
  };

  const handleCor = () =>{
    Linking.openURL("mailto:Andres.londono41@correo.tdea.edu.co")
  };

  const horarios = [
    { dia: 'Lunes - Viernes', horario: '9:00 AM - 6:00 PM' },
    { dia: 'Sábado', horario: '9:00 AM - 2:00 PM' },
    { dia: 'Domingo', horario: 'Cerrado' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Información de Contacto</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitulo}>Concesionario </Text>
          <Text style={styles.infoTexto}>Tecnologico de Antioquia</Text>
          <TouchableOpacity style={styles.button} onPress={handleCall}>
            <Text style={styles.buttonText}>Llamar</Text>
          </TouchableOpacity>
          <Text style={styles.infoTexto}>Correo Electrónico: Andres.londono41@correo.tdea.edu.co</Text>
          <TouchableOpacity style={styles.button} onPress={handleCor}>
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
          <View style={styles.redesSociales}>
            <Text style={styles.redesTexto}>Síguenos en:</Text>
            <View style={styles.iconosRedes}>
              <TouchableOpacity onPress={() => abrirRedSocial('https://web.facebook.com/andres.londono.94849')}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' }} style={styles.iconoRed} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => abrirRedSocial('https://x.com/home')}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' }} style={styles.iconoRed} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => abrirRedSocial('https://www.instagram.com/human_peak_/?hl=en')}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733558.png' }} style={styles.iconoRed} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horariosContainer}>
            <Text style={styles.horariosTitulo}>Horarios de Atención:</Text>
            {horarios.map((item) => (
              <Text style={styles.horarioItem}>{item.dia}: {item.horario}</Text>
            ))}
          </View>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg' }} style={styles.imagenConcesionario} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    width: '100%',
  },
  infoItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoTexto: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  redesSociales: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  redesTexto: {
    fontSize: 16,
    marginRight: 10,
    color: '#555',
  },
  iconosRedes: {
    flexDirection: 'row',
  },
  iconoRed: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  horariosContainer: {
    marginTop: 20,
  },
  horariosTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  horarioItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  imagenConcesionario: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Contacto;
