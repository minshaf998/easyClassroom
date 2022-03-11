import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import PersonScreen from "../screens/Login/PersonScreen";
import StudentDashboardScreen from "../screens/Student/StudentDashboardScreen";
import LectrerDashboardScreen from "../screens/Lecture/LecturerDashboardScreen";
import DemoDashboardScreen from "../screens/Demo/DemoDashboardScreen";
import AdminDashboard from "../screens/Admin/AdminDashboardScreen";
import CreateClassScreen from "../screens/CreateClass/CreateClassScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Person" component={PersonScreen} />
    <Stack.Screen name="StudentDashboard" component={StudentDashboardScreen} />
    <Stack.Screen name="LectrereDashboard" component={LectrerDashboardScreen} />
    <Stack.Screen name="DemoDashboard" component={DemoDashboardScreen} />
    <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    <Stack.Screen name="createClass" component={CreateClassScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
