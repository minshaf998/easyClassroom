import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../assets/logo.png")}
        ></Image>
        <Text style={styles.text}>TIME TO LEARN</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    width: "100%",
    backgroundColor: "blue",
    height: 70,
  },

  registerButton: {
    width: "100%",
    backgroundColor: "blue",
    height: 70,
    marginBottom: 180,
    marginTop: 10,
  },

  logo: {
    width: 150,
    height: 150,
  },

  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    // position: "absolute",
  },
});

export default WelcomeScreen;
