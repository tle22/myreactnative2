import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeStack from "./navigations/HomeStack";
import BottomTab from "./navigations/BottomTab";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import Ex9 from "./screens/week2/Ex9";
import Travel from "./screens/week3/Travel";
import Health from "./screens/week5/Health";
import Home from "./screens/week6/Home";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigations/RootStack";
import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";
export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {/* <HomeStack /> */}
        {/* <BottomTab /> */}
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
