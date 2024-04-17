import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductsItems = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }} // Utiliza la URL de la imagen del producto
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{product.name}</Text>
        <Text style={styles.textDescription}>{product.description}</Text>
        <Text style={styles.textPrice}>Price: ${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100, // Ajusta el tamaño de la imagen según sea necesario
    height: 100, // Ajusta el tamaño de la imagen según sea necesario
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textDescription: {
    fontSize: 16,
    marginBottom: 4,
  },
  textPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF', // Color azul para el precio
  },
});

export default ProductsItems;
