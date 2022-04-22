import React  from 'react';
import {
    View,
    Button,
    Image,
    StyleSheet,
    Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';




export default function ProfileImage(){

    const pickImageHandler = async () => {
        let result = await ImagePicker.launchCameraAsync();

        if(!result.cancelled){
            uploadImage(result.uri, "test-image" )
            .then(() => {
                Alert.alert("Success");

            })
            .catch((error) =>{
                Alert.alert('Error:',error.message);

            });
        }
    }

    const uploadImage = async (uri , imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("images/" + imageName);

        return ref.put(blob);

    }

    return(
        <View style = {StyleSheet.container}>
            <Button title = "choose image" onPress ={pickImageHandler}/>

        </View>
    ) 
}


const style = StyleSheet.create({
    container :{
       
        alignItems :'center'
    },
     
     

})
