
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signIn } from '../../API/firebaseMethods/firebaseMethod';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }

    signIn(email, password);
    setEmail('');
    setPassword('');
  };

  return (

    <View style={styles.container}>
       <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Email</Text>
        <View style={styles.action}>
          <TextInput  placeholder="Enter your email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none" style={styles.textinput} />
        </View>
      </View>

      <View style={styles.cardCont}>
        <Text style={styles.cardtext}>Password </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textinput}
            placeholder="Enter your password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
        </View>
      </View>

      
      <TouchableOpacity   style={styles.buttonLogin} onPress={handlePress}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 70,
    backgroundColor: "#C0C0C0",
  },

  cardCont: {
    marginTop: 20,
  },

  cardtext: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
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
    fontSize: 20,
  },

  buttonLogin: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#808000",
    top: 40,
    alignSelf: "center",
  },

  buttontext: {
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 7,
  },
});
