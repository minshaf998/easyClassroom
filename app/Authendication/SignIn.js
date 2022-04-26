
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,SafeAreaView, Alert ,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signIn } from '../../API/firebaseMethods/firebaseMethod';

export default function SignIn({ navigation }) {
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
    
  
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
        source={require("./../assets/logo.png")}
        ></Image>
      <Text style={styles.text}>TIME TO LEARN</Text>
      </View>

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
        <Text style={styles.buttontext}>SignIn</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.inlineText}>Don't have an account?</Text>
          </TouchableOpacity>
    </SafeAreaView>
    
  );
    
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    backgroundColor: "#ffffff",
    
  },

  cardCont: {
    marginTop: 10,
    marginLeft: 20,
    padding : 5,
    width:'80%',
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },

  cardtext: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inlineText:{
    color:'blue',
    marginTop:15,
    alignSelf: "center",
    
  },

  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    top: 20,
    marginBottom : 70,
    alignItems: "center",
    padding: 10,
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
    backgroundColor: "#34dbeb",
    alignSelf: "center",
    height: 50,
    borderRadius: 9,
    marginTop : 50,
    paddingTop: 3, 
    width : '70%',
    alignItems : 'center',
  },

  buttontext: {
    fontSize: 22,
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 7,
  },
});
