import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../assets/logo.png")}
        ></Image>
        <Text style={styles.text}>TIME TO LEARN</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red", marginTop: 5 }]}
          title="create class"
          onPress={() => navigation.navigate("createClass")}
        >
          <Text style={styles.buttonText}>Create Class Room</Text>
        </TouchableOpacity>
      </View>
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

  newButton: {
    width: "100%",
  },

  button: {
    backgroundColor: "blue",
    height: 50,
    borderRadius: 9,
    paddingTop: 5,
  },

  logo: {
    width: 150,
    height: 150,
  },

  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
  },

  text: {
    fontWeight: "bold",
    position: "absolute",
    top: 130,
    fontSize: 20,
  },

  buttonContainer: {
    width: "90%",
    marginBottom: 30,
  },
});

export default WelcomeScreen;
