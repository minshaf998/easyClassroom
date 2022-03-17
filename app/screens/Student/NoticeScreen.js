//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const NoticeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.test}>Notices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.test}>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.test}>GPA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.test}>Chat Box</Text>
      </TouchableOpacity>
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
  btn: {
    height: 60,
    backgroundColor: "blue",
    width: "85%",
    margin: 10,
    borderRadius: 5,
  },

  test: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
    alignSelf: "center",
    paddingTop: 8,
  },
});

//make this component available to the app
export default NoticeScreen;
