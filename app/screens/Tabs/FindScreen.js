import React from 'react';

import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import { loggingOut } from '../../../API/firebaseMethods/firebaseMethod';

export default function AdminFindScreen({navigation}){

  return(
    <View style={styles.container}>
        <Text>AdminChatScreen</Text>
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