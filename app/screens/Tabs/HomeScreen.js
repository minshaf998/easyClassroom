import React from 'react';

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { loggingOut } from '../../../API/firebaseMethods/firebaseMethod';

export default function AdminHomeScreen({navigation}){

    
    
 
    return(
    <View style={styles.container}>
      <Text style={styles.titleText}>Home</Text>
      
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