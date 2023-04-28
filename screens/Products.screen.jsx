import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

const ProductsScreen = () => {
  let title = "Este es el titulo";
  let fullname = "Roxy la mejor de lo mejor";
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>Estamos en Productos</Text>
    </View>
  );
};

export default ProductsScreen;
