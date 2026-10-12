import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Task Manager</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#E8F5E9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#D0D0D0",
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
});
