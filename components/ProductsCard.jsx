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
import { useNavigation } from "@react-navigation/native";

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
    width: "100%", // Cập nhật chiều rộng cho 2 cột
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
    position: "relative",
    shadowOffset: { width: 0, height: 4 }, // Thêm bóng đổ cho container
  },
  heartIcon: {
    width: 20, // Điều chỉnh lại kích thước cho phù hợp
    height: 20, // Điều chỉnh lại kích thước cho phù hợp
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    right: 10, // Điều chỉnh vị trí icon sao cho vừa vặn với màn hình
    width: 34,
    height: 34,
    borderRadius: 17, // Điều chỉnh cho icon tròn
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
    width: "100%",
    height: 200, // Thay đổi chiều cao cho phù hợp với mọi màn hình
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
