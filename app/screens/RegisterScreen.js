//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>RegisterScrdeen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  textStyle: {
    fontSize: 23,
    color: "red",
  },
});

//make this component available to the app
export default RegisterScreen;
