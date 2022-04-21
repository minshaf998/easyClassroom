import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";

export default function LoadingScreen({ navigation }){

  

    firebase.auth().onAuthStateChanged(function(user){
          if (user) {
             navigation.navigate('NavigateUser');

          }else {
              navigation.navigate('Home'); 
            }
          });


    


  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size='large' />
    </View>
  );


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
