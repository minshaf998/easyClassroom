import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from  '../Admin/AdminDashboard';
import FindScreen from  './FindScreen';
import ChatScreen from './ChatScreen';
import SettingScreen from './SettingScreen';
import PostScreen from './PostScreen';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
     
    </Tab.Navigator>
  );
}

export default Tabs;