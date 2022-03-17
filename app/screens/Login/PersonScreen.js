//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useLogin } from "../../context/loginProvider";

// create a component
const PersonScreen = ({ navigation }) => {
  const { setWhoIs } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <Text style={[styles.text, { color: "white" }]}>
          Welcome to EasyClassroom
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.box}
          title={"Student"}
          onPress={() => {
            navigation.navigate("Login");
            setWhoIs("student");
          }}
        >
          <Text style={styles.text}>I'M STUDENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          title={"Lecturer"}
          onPress={() => {
            navigation.navigate("Login");
            setWhoIs("lecturer");
          }}
        >
          <Text style={styles.text}>I'M LECTURER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          title={"Demostator"}
          onPress={() => {
            navigation.navigate("Login");
            setWhoIs("demo");
          }}
        >
          <Text style={styles.text}>I'M DEMOSTRATOR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          title={"Admin"}
          onPress={() => {
            navigation.navigate("Login");
            setWhoIs("admin");
          }}
        >
          <Text style={styles.text}>I'M ADMIN</Text>
        </TouchableOpacity>
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
    backgroundColor: "blue",
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    padding: 10,
  },

  text: {
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
    color: "white",
  },

  titleText: {
    position: "absolute",
    top: 50,
  },
});

export default PersonScreen;
