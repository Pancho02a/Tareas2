import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground, Image } from 'react-native';

const EclipseApp = () => {
  const animation = useRef(new Animated.Value(-200)).current; // Inicialmente fuera de la pantalla

  const startAnimation = () => {
    animation.setValue(-260); // Reiniciar la posición inicial
    Animated.timing(animation, {
      toValue: 300, // Mover el círculo a la derecha
      duration: 6000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground source={require('./space.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Eclipse 2024 🌒</Text>
        <View style={styles.sunContainer}>
          <Image source={require('./sun.png')} style={styles.sun}></Image>
          <Animated.Image
            source={require('./moon.png')}
            style={[
              styles.eclipse,
              {
                transform: [{ translateX: animation }],
              },
            ]}
          ></Animated.Image>
        </View>
        <TouchableOpacity style={styles.button} onPress={startAnimation}>
          <Text style={styles.buttonText}>Iniciar eclipse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sunContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sun: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  eclipse: {
    width: 151,
    height: 151,
    position: 'absolute',
    left: 8,
    top: 35,
  },
});

export default EclipseApp;
