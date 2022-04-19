
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../../API/firebaseMethods/firebaseMethod';
import * as firebase from "firebase";
import "firebase/firestore";
import RNPickerSelect from "react-native-picker-select";

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setRole('');
    setPassword('');
    setConfirmPassword('');
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert('First name is required');
    } else if (!email) {
      Alert.alert('Email field is required.');
    } else if (!role) {
        Alert.alert('Password field is required.');
    } else if (!password) {
      Alert.alert('Password field is required.');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
    } else {
      registration(
        email,
        role,
        password,
        lastName,
        firstName,
      );
      navigation.navigate('Loading');
      emptyState();
    }
  };

  return (
   
     <View style={styles.container}>
       <Text style={styles.text}>Create an account </Text>

        

       <View style={styles.cardCont}>
        <Text style={styles.cardtext}>First Name</Text>
        <View style={styles.action}>
          <TextInput  
           style={styles.textinput}
           placeholder="First name*"
           value={firstName}
           onChangeText={(name) => setFirstName(name)} />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Last Name</Text>
        <View style={styles.action}>
          <TextInput  
          style={styles.textinput}
          placeholder="Last name"
          value={lastName}
          onChangeText={(name) => setLastName(name)} />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Email</Text>
        <View style={styles.action}>
          <TextInput  
          style={styles.textinput}
          placeholder="Enter your email*"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none" />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>
        <Text>
                {role ?
                  `My role is ${role}` :
                    "Please select role"
                }
            </Text>
        </Text>
        <View style={styles.action}>
        <RNPickerSelect
          onValueChange={(role)  => setRole(role)}
         items={[
          { label: "Lecturer", value: "Lecturer" },
          { label: "Demo", value: "Demo" },
          { label: "Admin", value: "Admin" },
          { label: "Student", value: "Student" },
          
      ]} />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Password</Text>
        <View style={styles.action}>
          <TextInput  
         style={styles.textinput}
         placeholder="Enter your password*"
         value={password}
         onChangeText={(password) => setPassword(password)}
         secureTextEntry={true} />
        </View>
      </View>
         

         
      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Retype Password</Text>
        <View style={styles.action}>
          <TextInput  
          style={styles.textinput}
          placeholder="Retype your password to confirm*"
          value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true} />
        </View>
      </View>
        
      
         
          <TouchableOpacity  style={styles.buttonSignup} onPress={handlePress}>
           <Text style={styles.buttontext}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.inlineText}>Already have an account?</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.buttonSignIn}>Sign In</Text>
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
