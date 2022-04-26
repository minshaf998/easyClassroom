
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
    
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.text}>SignUp </Text>
      </View>
      <ScrollView style={styles.scrollView}>
   
     <View >
       

        

       <View style={styles.cardCont}>
        <Text style={styles.cardtext}>First Name</Text>
        <View style={styles.action}>
          <TextInput  
           style={styles.textinput}
           placeholder="First name"
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
          placeholder="Enter your email"
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
                    "Select Role"
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
         placeholder="Enter your password"
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
           <Text style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>

          
          <TouchableOpacity  onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.inlineText}>Already have an account?</Text>
          </TouchableOpacity>
      
     </View>
    </ScrollView>
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
   
    backgroundColor: "#ffffff",
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 1,
  },

  cardCont: {
    marginTop: 10,
    marginLeft: 20,
    padding : 5,
    width:'80%',
  },
  text :{
    marginBottom : 20,
    fontSize : 25,
    fontWeight: 'bold',
  },

  cardtext: {
    marginLeft : 3,
    fontSize: 20,
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
    marginLeft : 10,
    color: "black",
    fontSize: 15,
  },

  buttonSignup: {
    backgroundColor: "#34dbeb",
    alignSelf: "center",
    height: 50,
    borderRadius: 9,
    marginTop : 50,
    paddingTop: 3, 
    width : '70%',
    marginTop : 10,
    
  },
  
  SignUpText :{
    fontSize : 20,
    alignSelf: "center",
    fontWeight : 'bold',
  },
 

  inlineText:{
    color:'blue',
    marginTop:15,
    alignSelf: "center",
    
  },

  buttontext: {
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 7,
  },
});
