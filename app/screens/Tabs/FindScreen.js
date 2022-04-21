import React from 'react';

import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import { loggingOut } from '../../../API/firebaseMethods/firebaseMethod';

export default function AdminFindScreen({navigation}){

    const handlePress = () => {
        loggingOut();
        navigation.navigate('Welcome');
      };
    return(
        <View>
            <Text>AdminFindScreen</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress} >
            <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      paddingTop: 30,
     
      backgroundColor: "#C0C0C0",
    },
  
    cardCont: {
      marginTop: 20,
      
  
      
    },
  
    cardtext: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 2,
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
      fontSize: 15,
    },
  
    buttonSignup: {
      width: "30%",
      height: 50,
      borderRadius: 10,
      backgroundColor: "#808000",
      top: 40,
      marginBottom:5,
      alignSelf: "center",
    },
    buttonSignIn: {
      
      width: "30%",
      height: 35,
      borderRadius: 10,
      textAlign:'center',
      backgroundColor: "#808000",
      alignSelf: "center",
    },
  
    inlineText:{
      color:'blue',
      marginTop:35,
      
    },
  
    buttontext: {
      fontSize: 15,
      fontWeight: "500",
      alignSelf: "center",
      paddingTop: 7,
    },
  });