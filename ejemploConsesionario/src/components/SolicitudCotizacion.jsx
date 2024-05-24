import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, DatePickerAndroid, na  } from 'react-native';
import firebase from '../../firebase';


const AgendarTaller = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState('');
  const [modelo, setModelo] = useState('');
  const [fecha, setFecha] = useState(new Date()); // Estado para almacenar la fecha
  

  

  const serviciosDisponibles = ['Motos', 'Carros'];
  const ModelosDisponibles = ['Nuevos', 'Usados'];

  const handleFechaChange = (value) => {
    setFecha(value);
  };
  
  const handleValidation = () => {
    if (!nombre || !apellidos || !email || !telefono  ) {
      Alert.alert('Campos requeridos', 'Por favor, complete todos los campos.');
    } else {
      handleAgendar();
    }
  };

  const handleInputChange = (setState, value, allowNumbers) => {
    if (
      (!allowNumbers && !/^[a-zA-Z\s]*$/.test(value)) ||
      (allowNumbers && !/^[0-9\s]*$/.test(value))
    ) {
      return;
    }
    setState(value);
  };

  const handleSelectServicio = (selectedServicio) => {
    setServicio(selectedServicio);
  };
  
  const handleSelectModelo = (selectedModelo) => {
    setModelo(selectedModelo);
  };
  const handleCotizacion = (precio) => {
    if (modelo === 'Nuevos' & servicio==='Motos'){
      precio = 'De 4.000.000 en adelante'
    }
    if (modelo === 'Nuevos' & servicio==='Carros'){
      precio = 'De 40.000.000 en adelante'
    }
    if (modelo === 'Usados' & servicio==='Motos'){
      precio = 'De 1.000.000 en adelante'
    }
    if (modelo === 'Usados' & servicio==='Carros'){
      precio = 'De 20.000.000 en adelante'
    }
    return precio;

    
  }
  

  const handleAgendar = async () => {
    try {
      await firebase.db.collection('Cotizacion').add({ 
        nombre,
        apellidos,
        email,
        telefono,
        servicio,
        modelo,
        fecha
      });
      Alert.alert('Éxito', 'Taller agendado correctamente.');

      
      setNombre('');
      setApellidos('');
      setEmail('');
      setTelefono('');
      setServicio('');
      setModelo('');
      setFecha(new Date()); // Reiniciar fecha después de agendar


    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al agendar el taller.');
      console.error('Error al agendar el taller:', error);
    }
  };
  const handleDatePick = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        mode: 'calendar'
      });
      if (action === DatePickerAndroid.dateSetAction) {
        setFecha(`${year}-${month + 1}-${day}`); 
      }
    } catch ({code, message}) {
      console.warn('No se pudo abrir el selector de fecha', message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Solicitud Cotizacion</Text>
      <View style={styles.formulario}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="gray"
            value={nombre}
            onChangeText={(value) => handleInputChange(setNombre, value)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Apellidos:</Text>
          <TextInput
            style={styles.input}
            placeholder="Apellidos"
            placeholderTextColor="gray"
            value={apellidos}
            onChangeText={(value) => handleInputChange(setApellidos, value)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo Electrónico:</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            keyboardType="phone-pad"
            placeholderTextColor="gray"
            value={telefono}
            onChangeText={(value) => handleInputChange(setTelefono, value, true)}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Fecha: {handleDatePick}</Text>
          <Button title={fecha ? ` ${fecha}` : 'Seleccionar fecha'}/>

        </View>



        <View style={styles.serviciosContainer}>
          <Text style={styles.label}>Servicio:</Text>
          <View style={styles.serviciosContainer}></View>
          {serviciosDisponibles.map((servicioItem, index) => (
            <Button
              key={index}
              title={servicioItem}
              onPress={() => handleSelectServicio(servicioItem)}
              color={servicio === servicioItem ? '#007bff' : 'gray'}
            />
          ))}
        </View>

        <View style={styles.serviciosContainer}>
          <Text style={styles.label}>Modelo</Text>
          <View style={styles.serviciosContainer}></View>
          {ModelosDisponibles.map((modeloItem, index) => (
            <Button
              key={index}
              title={modeloItem}
              onPress={() => handleSelectModelo(modeloItem)}
              color={modelo === modeloItem ? '#007bff' : 'gray'}
            />
          ))}
        </View>
        <View>
        <Text style={styles.label}>Cotizacion: </Text>
        <Text style={styles.label1}>{handleCotizacion()}</Text>
        </View>
        

        <Button title="Agendar" onPress={handleValidation} color="#007bff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  botonF : {
    marginBottom: 20,
    color: 'gray'

  },
  formulario: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  serviciosContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 0.5
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  label1: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'green',
  },
  icon: {
    marginRight: 10,
  },
  
});

export default AgendarTaller;
