//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
const PersonScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <Text style={[styles.text, { color: "white" }]}>
          Welcome to EasyClassroom
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>I'M STUDENT</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>I'M LECTURER</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>I'M DEMONSTRATE</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>I'M ADMIN</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },

  box: {
    backgroundColor: "lightgreen",
    width: "85%",
    marginTop: 20,
    height: 50,
    borderRadius: 10,
  },

  text: {
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 7,
  },

  titleText: {
    position: "absolute",
    top: 50,
  },
});

//make this component available to the app
export default PersonScreen;
