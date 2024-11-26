import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Tags = () => {
  const [selected, setSelected] = useState("Trending Now");
  const tags = ["Trending Now", "All", "New", "Fashion", "Mens"];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tags}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelected(item)}>
            <View
              style={[
                styles.tagContainer,
                item === selected ? styles.isSelected : null,
              ]}
            >
              <Text
                style={[
                  styles.tagText,
                  item === selected ? styles.selectedText : null,
                ]}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "pink",
  },

  tagContainer: {
    backgroundColor: "#DFDCDC",
    borderRadius: 16,
    marginHorizontal: 30, // Khoảng cách giữa các tag
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tagText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#938F8F",
    fontWeight: "700",
  },
  isSelected: {
    backgroundColor: "#E96E6E", // Màu nền khi được chọn
  },
  selectedText: {
    color: "#fff",
  },
});
