import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../Context/CartContext";

const CartScreen = ({}) => {
  const nav = useNavigation();

  const handleBack = () => {
    nav.goBack();
  };

  const { carts, total } = useContext(CartContext);

  return (
    <View style={styles.cartcontainer}>
      {/* Header */}
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

      {/* Cart List */}
      <View style={styles.cartListContainer}>
        <FlatList
          data={carts}
          renderItem={({ item }) => <CartCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <View style={styles.bottomContentContainer}>
          <View style={styles.flexRowContainer}>
            <Text style={styles.titleText}>Total:</Text>
            <Text style={styles.priceText}>${total().toFixed(2)}</Text>
          </View>
          <View style={styles.flexRowContainer}>
            <Text style={styles.titleText}>Shipping:</Text>
            <Text style={styles.priceText}>$0.0</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.flexRowContainer}>
            <Text style={styles.titleText}>Grand Total:</Text>
            <Text style={[styles.priceText, styles.grandPriceText]}>
              ${total().toFixed(2)}
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
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: "#f9f9f9", // Màu nền tổng thể
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 20,
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
  },
  headertext: {
    fontSize: 28,
    fontWeight: "400",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  cartListContainer: {
    paddingHorizontal: 20,
    flex: 1, // Chiếm toàn bộ không gian còn lại
  },
  flexRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 10,
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
    height: 1,
    backgroundColor: "#C0C0C0",
    marginVertical: 10,
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
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  footerContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    width: "100%",
  },
});
