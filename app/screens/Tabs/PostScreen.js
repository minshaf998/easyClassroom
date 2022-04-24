import React from 'react';

import {View,Text,StyleSheet} from 'react-native';


export default function AdminPostScreen({Navigation}){
    return(
        <View style={styles.container}>
            <Text>PostScreen</Text>
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