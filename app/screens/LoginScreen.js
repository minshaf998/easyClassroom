//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// create a component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardtext}>Email</Text>
        <View style={styles.action}>
          <TextInput placeholder="rahn325@gmail.com" style={styles.textinput} />
        </View>

        <Text style={[styles.cardtext, { marginTop: 35 }]}>Password </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textinput}
            placeholder="Your password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonLogin}
            title={"Login"}
            // onPress={this.onpress}
          >
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSignup}
            title={"Signup"}
            // onPress={this.onpress}
          >
            <Text style={styles.buttontext}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#2c3e50",
    padding: 10,
    paddingBottom: 40,
  },

  card: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    borderRadius: 30,
    // paddingVertical: 30,
    paddingTop: 80,
    paddingLeft: 35,
    paddingHorizontal: 20,
    top: 25,
  },

  buttonContainer: {
    marginTop: 50,
    marginLeft: 20,
  },
  cardtext: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  textinput: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 10,
    color: "#05375a",
  },

  buttonSignup: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#808000",
    marginTop: 20,
  },

  buttonLogin: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#808000",
    // marginTop: 20,
  },

  buttontext: {
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 7,
  },
});

//make this component available to the app
export default LoginScreen;
