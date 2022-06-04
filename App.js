import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { StatusBar, View, StyleSheet } from "react-native";

export default function App() {
  const isLogedIn = true;
  return (
    <View style={styles.container}>
      <AuthNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
