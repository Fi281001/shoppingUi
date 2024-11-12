import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";
const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];
const ProductDetailsScreen = ({}) => {
  const route = useRoute();
  const { image, title, id, price } = route.params;
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ marginTop: 20 }}>
        {/* Container cho ảnh */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>

        {/* Nội dung văn bản */}
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.fontText}>{title}</Text>
            <Text style={styles.fontText}>${price}</Text>
          </View>
        </View>

        {/* size */}
        <Text style={[styles.fontText, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("S")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "S" && styles.selectedText,
              ]}
            >
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("M")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "M" && styles.selectedText,
              ]}
            >
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("L")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "L" && styles.selectedText,
              ]}
            >
              L
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("XL")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "XL" && styles.selectedText,
              ]}
            >
              XL
            </Text>
          </TouchableOpacity>
        </View>
        {/* color */}
        <Text style={[styles.fontText, styles.sizeText]}>colors</Text>
        <View style={styles.colorContainer}>
          {colorsArray.map((color, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(color)}
              >
                <View
                  style={[
                    styles.borderColorCircle,
                    selectedColor === color && {
                      borderColor: color,
                      borderWidth: 2,
                      borderRadius: 24,
                    },
                  ]}
                >
                  <View
                    style={[styles.colorCircle, { backgroundColor: color }]}
                  ></View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  // Cập nhật lại phần ảnh
  imageContainer: {
    width: "100%", // Chiều rộng đầy đủ của container
    height: 413, // Chiều cao ảnh, có thể thay đổi tùy theo nhu cầu
    overflow: "hidden", // Đảm bảo ảnh không bị tràn ra ngoài
    justifyContent: "center", // Căn giữa ảnh trong container
    alignItems: "center", // Căn giữa ảnh trong container
  },
  image: {
    width: "100%", // Đảm bảo ảnh chiếm chiều rộng 100% của container
    height: "100%", // Chiều cao của ảnh tương ứng với container
    resizeMode: "cover", // Giữ tỷ lệ ảnh, không bị bóp méo
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "400",
    color: "#444444",
    color: "#444444",
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  sizeValueContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sizeValueText: {
    fontSize: 18,
    fontWeight: "700",
  },
  selectedText: {
    color: "#E55B5B",
    paddingHorizontal: 10,
  },
  colorContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  borderColorCircle: {
    height: 48,
    width: 48,
    padding: 5,
    marginHorizontal: 5,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
