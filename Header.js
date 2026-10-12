import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4CAF50",
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
