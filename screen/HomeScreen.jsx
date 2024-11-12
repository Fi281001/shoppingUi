import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import Header from "../components/Header";
import Tags from "../components/Tags";
import ProductCard from "../components/ProductsCard";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.headingText}>Match Your Style</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require("../images/Search.png")}
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.textInput} />
        </View>
      </View>
      <Tags />
      <View style={styles.productscontainer}>
        <ProductCard />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
    fontFamily: "Poppins-Regular",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  productscontainer: {
    height: "67%",
  },
});
