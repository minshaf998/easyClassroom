//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

// create a component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <View style={styles.card}>
        <Text style={styles.cardtext}> Email </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your email"
            style={styles.textinput}
            autoCapitalize="none"
          />
        </View>

        <Text style={[styles.cardtext,{marginTop:35}]}> Password </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your password"
            style={styles.textinput}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity  
          style={[styles.button, { backgroundColor: "lightgreen", marginTop: 5 }]}
          title={"Done"} 
          onPress={this.onpress}>
            <Text style={styles.buttontext}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity  
          style={[styles.button, { backgroundColor: "white", marginTop: 5 }]}
          title={"Signup"} 
          onPress={this.onpress}>
            <Text style={styles.buttontext}>SignUp</Text>
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
    backgroundColor: "#2c3e50",
  },

  card:{
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    top: 25
  
  },

  cardtext:{
    fontSize: 18,
    fontWeight: 'bold'
  },

  action:{
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5

  },

  textinput:{
    flex: 1,
    marginTop: 10,
    paddingLeft: 10,
    color: '#05375a'
  },

  button:{
    width: "85%",
    height: 50,
    borderRadius: 10,
    padding: 10,
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
