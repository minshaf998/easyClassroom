import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import PersonScreen from "../screens/Login/PersonScreen";
import CreateClassScreen from "../screens/CreateClass/CreateClassScreen";
import { useLogin } from "../context/loginProvider";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { isLogedIn } = useLogin();
  return !isLogedIn ? (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Person" component={PersonScreen} />
      <Stack.Screen name="createClass" component={CreateClassScreen} />
    </Stack.Navigator>
  ) : (
    <AppNavigator />
  );
};

export default AuthNavigator;
