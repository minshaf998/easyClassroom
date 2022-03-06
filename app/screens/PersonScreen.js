//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const PersonScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <Text style={[styles.text, { color: "white" }]}>
          Welcome to EasyClassroom
        </Text>
      </View>

      < View>
        <TouchableOpacity  
          style={styles.box} 
          title={"Student"}
          onPress={this.onpress}>
            <Text style={styles.text}>I'M STUDENT</Text>
        </TouchableOpacity>

        <TouchableOpacity  
          style={styles.box}
          title={"Lecturer"} 
          onPress={this.onpress}>
            <Text style={styles.text}>I'M LECTURER</Text>
        </TouchableOpacity>

        <TouchableOpacity  
          style={styles.box}
          title={"Demostator"} 
          onPress={this.onpress}>
            <Text style={styles.text}>I'M DEMOSTRATOR</Text>
        </TouchableOpacity>

        <TouchableOpacity  
          style={styles.box}
          title={"Admin"}
          onPress={this.onpress}>
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
    backgroundColor: "lightgreen",
    width: "85%",
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    padding: 10,
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
