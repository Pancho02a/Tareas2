import React, {useState} from 'react';
import {FlatList} from "react-native";
import ProductsItems from "./ProductsItems";

const ProductsList = ({ products }) => {
    return (
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()} // Convertir el ID a cadena
        renderItem={({ item }) => {
          return <ProductsItems product={item} />; // Añadir un return aquí
        }}
      />
    );
  };
  

export default ProductsList;