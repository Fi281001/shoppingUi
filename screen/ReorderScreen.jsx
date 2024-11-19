import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReorderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ReorderScreen</Text>
    </View>
  );
};

export default ReorderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ chiều cao màn hình
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    backgroundColor: "#f9f9f9", // Màu nền (tùy chọn)
  },
  text: {
    fontSize: 24, // Kích thước chữ
    fontWeight: "600", // Độ đậm
    color: "#333", // Màu chữ
  },
});
