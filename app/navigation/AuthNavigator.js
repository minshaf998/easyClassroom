import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import * as firebase from 'firebase';
import apiKeys from '../../config/keys';
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../Authendication/SignUp";
import SignIn from "../Authendication/SignIn";
import LoadingScreen from "../Authendication/LoadingScreen";
import NavigateUser from "../Authendication/NavigateUser";
import Admin from "../screens/Admin/AdminDashboard";
import Demo from "../screens/Demo/DemoDashboardScreen";
import Lecturer from "../screens/Lecture/LecturerDashboardScreen";
import Student from "../screens/Student/Dashboard/StudentDashboardScreen";




const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  return(
    <NavigationContainer  independent={true}>
      <Stack.Navigator>
      <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name={'Home'} component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name= {'Sign Up'} component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name= {'Sign In'}  component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name={'NavigateUser'} component={NavigateUser} options={{ headerShown: false }} />
      <Stack.Screen name={'Admin'} component={Admin} options={{ headerShown: false }} />
      <Stack.Screen name={'Demo'} component={Demo} options={{ headerShown: false }} />
      <Stack.Screen name={'Lecturer'} component={Lecturer} options={{ headerShown: false }} />
      <Stack.Screen name={'Student'} component={Student} options={{ headerShown: false }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


