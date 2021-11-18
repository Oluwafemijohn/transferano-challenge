import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaScreen from "./app/components/SafeAreaScreen";
import AppNavigation from "./app/navigation/AppNavigation";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    // <SafeAreaScreen style={styles.container}>
      
        <AppNavigation />

    // </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
