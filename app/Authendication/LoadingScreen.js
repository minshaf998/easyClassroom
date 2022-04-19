import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";

export default function LoadingScreen({ navigation }){

  

    firebase.auth().onAuthStateChanged(function(user){
          if (user) {
             navigation.replace('NavigateUser');

          }else {
              navigation.replace('Home'); 
            }
          });


    


  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
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

