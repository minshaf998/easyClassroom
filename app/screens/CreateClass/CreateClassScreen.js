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
const CreateClassScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Email</Text>
        <View style={styles.action}>
          <TextInput placeholder="rahn325@gmail.com" style={styles.textinput} />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Password </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonLogin}
        title={"Login"}
        onPress={() => navigation.navigate("AdminDashboard")}
      >
        <Text style={styles.buttontext}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 200,
    backgroundColor: "#C0C0C0",
  },

  cardCont: {
    marginTop: 20,
  },

  cardtext: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  action: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    marginBottom: 5,
  },

  textinput: {
    color: "black",
    fontSize: 20,
  },

  buttonLogin: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "green",
    top: 40,
    alignSelf: "center",
  },

  buttontext: {
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 7,
  },
});

//make this component available to the app
export default CreateClassScreen;
