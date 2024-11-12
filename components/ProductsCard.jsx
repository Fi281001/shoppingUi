import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import data from "../data/data.json";
import { useNavigation, useRoute } from "@react-navigation/native";
const ProductCard = () => {
  const [products, useProducts] = useState(data.products);
  const navigation = useNavigation();

  const goToProductDetail = (item) => {
    navigation.navigate("ProductDetails", {
      image: item.image,
      title: item.title,
      id: item.id,
      price: item.price,
    });
  };
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <TouchableOpacity onPress={() => goToProductDetail(item)}>
            <View style={styles.heartIconContainer}>
              <Image
                source={require("../images/favorite.png")}
                style={styles.heartIcon}
              />
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
      numColumns={2} // Display 2 products per row
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  productContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
    position: "relative",
  },
  heartIcon: {
    width: 20, // Adjust size
    height: 20, // Adjust size
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    right: 20,
    width: 34,
    height: 34,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    backgroundColor: "#fff",
    zIndex: 10,
  },
  image: {
    width: 167,
    height: 256,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
  price: {
    fontSize: 14,
    color: "#666",
    textAlign: "left",
  },
});
