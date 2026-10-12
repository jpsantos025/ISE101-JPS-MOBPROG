import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WelcomeMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hello, John Paul!</Text>
      <Text style={styles.section}>
        BSIS-3A
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  section: {
    fontSize: 16,
    marginTop: 5,
    color: "#555555",
  },
});
