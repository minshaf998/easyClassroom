import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StudentDashboardScreen from "../screens/Student/StudentDashboardScreen";
import GpaCalScreen from "../screens/Student/GpaCalScreen";
import ChatBoxScreen from "../screens/Student/ChatBoxScreen";
import NoticeScreen from "../screens/Student/NoticeScreen";
import StudentProfileScreen from "../screens/Student/StudentProfileScreen";

const Tab = createBottomTabNavigator();

export function Student() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="StudentDashboard" component={StudentDashboardScreen} />
      <Tab.Screen name="Notices" component={NoticeScreen} />
      <Tab.Screen name="Profile" component={StudentProfileScreen} />
      <Tab.Screen name="Gpa" component={GpaCalScreen} />
      <Tab.Screen name="Chat" component={ChatBoxScreen} />
    </Tab.Navigator>
  );
}
