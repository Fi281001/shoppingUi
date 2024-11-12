import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CartCard from "../components/CartCard";
import { useNavigation } from "@react-navigation/native";
const CartScreen = () => {
  const nav = useNavigation();

  const handleBack = () => {
    nav.goBack();
  };
  return (
    <View style={styles.cartcontainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.appDrawerContainer}
          onPress={handleBack}
        >
          <Image
            source={require("../images/arrow_back_ios.png")}
            style={styles.appBackIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headertext}>My Cart</Text>
        <Image
          source={require("../images/Ellipse2.png")}
          style={styles.profileImage}
        />
      </View>
      {/* cart list */}
      <View style={styles.cart}>
        <CartCard />
      </View>

      {/* footer cart check out */}
      <View>
        <View style={styles.bottomContentContainer}>
          <View style={styles.flexRowContainer}>
            <Text style={styles.titleText}>Total:</Text>
            <Text style={styles.priceText}>$22222</Text>
          </View>
          <View style={styles.flexRowContainer}>
            <Text style={styles.titleText}>Shpping:</Text>
            <Text style={styles.priceText}>$0.0</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.flexRowContainer}>
            <Text style={styles.titleText}>Grand Total:</Text>
            <Text style={[styles.priceText, styles.grandPriceText]}>
              $hhhhh
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartcontainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appDrawerContainer: {
    backgroundColor: "white",
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  appBackIcon: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  headertext: {
    fontSize: 28,
    fontWeight: "400",
  },
  cart: {
    marginTop: 50,
  },
  flexRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "600",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: "#3C3C3C",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
