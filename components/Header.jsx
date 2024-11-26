import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "../utils/fonts";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isCart }) => {
  //   const navigation = useNavigation();

  //   const handleBack = () => {
  //     navigation.navigate("HOME");
  //   };
  return (
    <View style={styles.header}>
      <View style={styles.appDrawerContainer}>
        <Image
          source={require("../images/apps.png")}
          style={styles.appDrawerIcon}
        />
      </View>
      <View>
        <Image
          source={require("../images/Ellipse2.png")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  appDrawerContainer: {
    backgroundColor: "white",
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  appDrawerIcon: {
    height: 30,
    width: 30,
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  profileImage: {
    height: 44,
    width: 44,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "red",
  },
  titleText: {
    fontSize: 28,
    fontFamily: fonts.regular,
    color: "#000000",
  },
});
