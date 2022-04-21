import React from 'react';

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { loggingOut } from '../../../API/firebaseMethods/firebaseMethod';

export default function AdminHomeScreen({navigation}){

    const handlePress = () => {
        loggingOut();
        navigation.replace('Home');
      };
    
 
    return(
        <View style={styles.container}>
      <Text style={styles.titleText}>Demo Dashboard</Text>
      <Text style={styles.text}>Hi </Text>
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
     
      backgroundColor: "white",
    }
})