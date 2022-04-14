//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useLogin } from "./../../context/loginProvider";

// create a component
const CreateClassScreen = ({ navigation }) => {
  const [className, setClasssName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setWhoIs, setIsLogedIn } = useLogin();

  async function handlePress() {
    const databody = {
      name: className,
      email: email,
      password: password
    }

    await fetch("http://192.168.8.145:3000/api/admins", {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(async res => {
        await res.json().then(res => console.log(res)).catch(err => console.log(err));
      })
      .catch(error => console.log("error from", error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Class name </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textinput}
            placeholder="Computer programming"
            onChangeText={setClasssName}
          />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Email</Text>
        <View style={styles.action}>
          <TextInput placeholder="rahn325@gmail.com" style={styles.textinput} onChangeText={setEmail} />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Password </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonLogin}
        title={"Login"}
        onPress={() => {
          setWhoIs("admin");
          setIsLogedIn(true);
          handlePress();
        }}
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
