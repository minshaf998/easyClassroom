
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../Tabs/HomeScreen';
import SettingScreen from '../Tabs/SettingScreen';
import PostScreen from '../Tabs/PostScreen';
import FindScreen from '../Tabs/FindScreen';
import ChatScreen from '../Tabs/ChatScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileImage from "../CurryImagePicker";


const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

function TabNavigation(){
  return(
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel : false,
      tabBarStyle:{
        position :'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        backgroundColor: '#ffffff',
        borderRadius : 15,
        height : 90,

      }

    }}>
    <Tab.Screen name="AdminHome" component={HomeScreen}
     options = {{
     
       tabBarIcon :({focused}) => (
         <View style={{ alignItems:'center', justifyContent:'center',top :10}}>
           <FontAwesome name="home" size={30} color="blue" height = {5}  />
           <Text style = {{ color: 'black'}}>Home</Text>
         </View>
      ),
      headerShown:false,
       
     }}/>
    <Tab.Screen name="AdminPost" component={PostScreen}
    options = {{
      
      tabBarIcon :({focused}) => (
        <View style={{ alignItems:'center', justifyContent:'center',top :10}}>
         <FontAwesome name="newspaper-o" size={24} color="blue" />
          <Text style = {{ color: 'black'}}>Post</Text>
        </View>
     ),
     headerShown:false,
    
    }}/>
    <Tab.Screen name="AdminChat" component={ChatScreen}
    options = {{
      
      tabBarIcon :({focused}) => (
        <View style={{ alignItems:'center', justifyContent:'center',top :10}}>
         <Entypo name="chat" size={24} color="blue" />
          <Text style = {{ color: 'black'}}>Chat</Text>
        </View>
     ),
     headerShown:false,
    
    }}/>

    <Tab.Screen name="AdminSearch" component={FindScreen}
    options = {{
      
      tabBarIcon :({focused}) => (
        <View style={{ alignItems:'center', justifyContent:'center',top :10}}>
         <FontAwesome name="search" size={24} color="blue" />
          <Text style = {{   color: 'black'}}>Search</Text>
        </View>
     ),
     headerShown:false,
    
    }}/>

    <Tab.Screen name="AdminSettings" component={SettingScreen}
    options = {{
      
      tabBarIcon :({focused}) => (
        <View style={{ alignItems:'center', justifyContent:'center',top :10}}>
         <Ionicons name="settings" size={24} color="blue" />
          <Text style = {{ color: 'black'}}>Settings</Text>
        </View>
     ),
     headerShown:false,
    
    }}/>    

  </Tab.Navigator>

  )
}


export default function AdminDashboard({ navigation }) {


    
  return (
    <Draw.Navigator>
      <Draw.Screen name = 'firstItem' component= {TabNavigation } />
      <Draw.Screen name = 'proImage' component= { ProfileImage} />
    </Draw.Navigator>

   
      
  )
}

