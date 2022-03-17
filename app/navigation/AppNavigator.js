import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NoticeScreen from "../screens/Student/NoticeScreen";
import StudentProfileScreen from "../screens/Student/StudentProfileScreen";
import StudentDashboardScreen from "../screens/Student/StudentDashboardScreen";
import LectrerDashboardScreen from "../screens/Lecture/LecturerDashboardScreen";
import DemoDashboardScreen from "../screens/Demo/DemoDashboardScreen";
import AdminDashboard from "../screens/Admin/AdminDashboardScreen";
import GpaCalScreen from "../screens/Student/GpaCalScreen";
import ChatBoxScreen from "../screens/Student/ChatBoxScreen";

import { useLogin } from "../context/loginProvider";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { whoIs } = useLogin();
  // console.log(whoIs);
  if (whoIs === "student") {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="StudentDashboard"
          component={StudentDashboardScreen}
        />
        <Tab.Screen name="Notices" component={NoticeScreen} />
        <Tab.Screen name="Profile" component={StudentProfileScreen} />
        <Tab.Screen name="Gpa" component={GpaCalScreen} />
        <Tab.Screen name="Chat" component={ChatBoxScreen} />
      </Tab.Navigator>
    );
  } else if (whoIs === "lecturer") {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="LectrereDashboard"
          component={LectrerDashboardScreen}
        />
      </Tab.Navigator>
    );
  } else if (whoIs === "demo") {
    return (
      <Tab.Navigator>
        <Tab.Screen name="DemoDashboard" component={DemoDashboardScreen} />
      </Tab.Navigator>
    );
  } else if (whoIs === "admin") {
    return (
      <Tab.Navigator>
        <Tab.Screen name="AdminDashboard" component={AdminDashboard} />
      </Tab.Navigator>
    );
  } else {
    return (
      // if (cont.whoIs)
      <Tab.Navigator>
        <Tab.Screen name="notice" component={NoticeScreen} />
        <Tab.Screen name="profile" component={StudentProfileScreen} />
      </Tab.Navigator>
    );
  }
}
