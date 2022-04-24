//import liraries
import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors.js';


// create a component
const StudentProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperpart}>
        <FontAwesome
          name="user-circle-o"
          size={24}
          color="black" />
        <Text style={styles.username}>Ayoma Fernando</Text>
        <TouchableOpacity style={styles.editicon}>
          <MaterialCommunityIcons
            name="circle-edit-outline"
            size={10}
            color='colors.secondary' />
        </TouchableOpacity>
      </View>
      <View style={styles.lowerpart}>
        <View style={styles.card}>
          <Text style={styles.title}>MOBILE</Text>
          <Text style={styles.subtitle}>+94 70 623 6234</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>POSITION</Text>
          <Text style={styles.subtitle}>Student</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>EMAIL</Text>
          <Text style={styles.subtitle}>abc@mail.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 30,

  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },


  editicon: {
    width: 20,
    height: 20,
    position: "relative",
  },

  lowerpart: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },

  subtitle: {
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "gray",
    textAlign: "left",
    lineHeight: 30,
  },

  title: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
    textAlign: "left",
    lineHeight: 10,
  },

  upperpart: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },

  username: {
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
  },
});

//make this component available to the app
export default StudentProfileScreen;
