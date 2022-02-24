import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color, onClick, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onClick={onClick}
      onPress={() => navigation.navigate("Classes")}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});

export default AppButton;
