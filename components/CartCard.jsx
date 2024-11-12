import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "../utils/fonts";

const CartCard = ({}) => {
  return (
    <View style={styles.card}>
      <Image source={require("../images/human.png")} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>ssssssss</Text>
        <Text style={styles.price}>$60</Text>
        <View style={styles.textCircleContainer}>
          <View style={[styles.circle, { backgroundColor: "red" }]}></View>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>xl</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
      //</View>onPress={() => handleDelete(item.id)}
      >
        <Image
          source={require("../images/delete.png")}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image: {
    height: 125,
    width: "30%",
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: "#797979",
    marginVertical: 7,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    padding: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  sizeContainer: {
    backgroundColor: "#FFFFFF",
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
  },
  textCircleContainer: {
    flexDirection: "row",
  },
  deleteIcon: {
    height: 30,
    width: 20,
    marginTop: 10,
  },
});
