//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NoticeData } from "./NoticeData";

// console.log(NoticeData);
// create a component
const NoticeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {NoticeData.map((c) => {
          return (
            <TouchableOpacity style={styles.card} key={c.key}>
              <Text style={styles.text}>From {c.from}</Text>
              <Text style={styles.textNote}>{c.content}</Text>
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
    backgroundColor: "lightyellow",
  },
  card: {
    width: "90%",
    height: 90,
    backgroundColor: "indigo",
    borderRadius: 10,
    margin: 10,
  },

  text: {
    fontSize: 26,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
    color: "white",
  },

  textNote: {
    fontSize: 18,
    padding: 5,
    color: "white",
  },
});

//make this component available to the app
export default NoticeScreen;
