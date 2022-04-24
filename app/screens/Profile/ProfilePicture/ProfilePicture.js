import React , { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UploadImage from '../ProfilePicture/UploadProfilePicture';
import * as firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ProfilePic() {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  

  useEffect(() => {
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('users')
      .doc(currentUserUID)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
        setLastName(dataObj.lastName) 
        setEmail(dataObj.email)
        setRole(dataObj.role)
      }
    }
    getUserInfo();
  })

 return (

    <SafeAreaView>
        <View style={styles.container}>

        <UploadImage/>

        </View>
        <View style = {styles.ProfileInformation}>
            <Text style = {styles.ProfileText}> First Name : {firstName} </Text>
            <Text style = {styles.ProfileText}> Last Name : {lastName} </Text>
            <Text style = {styles.ProfileText}> Email : {email} </Text>
            <Text style = {styles.ProfileText}> Role : {role} </Text>


        </View>


    </SafeAreaView>



 );
}

const styles = StyleSheet.create({
 container: {
   padding:50,
   backgroundColor: '#ffffff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 ProfileInformation :{
    
     alignItems : 'flex-start',
     backgroundColor : '#ffffff',
 },
 ProfileText :{
     marginLeft : 30,
     padding : 10,
     fontSize : 20,
     fontWeight : 'bold',
 }

});