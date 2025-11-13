import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/login";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Usuario from "./pages/usuario";
import ChatList from "./pages/chatlist";
import ChatRoom from "./pages/chatroom";
import UpdateUser from "./pages/updateuser";


const Stack = createDrawerNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "black" }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, }}
        initialRouteName="Cadastro"
      >
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
        <Stack.Screen name="Usuario" component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>

  )

}