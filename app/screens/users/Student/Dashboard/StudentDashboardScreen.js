//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CourseData } from "./CourseData";

// create a component
// for rendering courses
const StudentDashboardScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {CourseData.map((c) => {
          return (
            <TouchableOpacity style={styles.card} key={c.key}>
              <Text style={styles.text}>{c.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
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

  card: {
    width: "90%",
    height: 90,
    backgroundColor: "lightblue",
    borderRadius: 10,
    margin: 10,
  },

  text: {
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
  },
});

//make this component available to the app
export default StudentDashboardScreen;
