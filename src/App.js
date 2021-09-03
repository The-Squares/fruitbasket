import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import HomeScreen from "./Screens/HomeScreen";
import OffersScreen from "./Screens/OffersScreen";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/offers" component={OffersScreen} />
        </Switch>
      </View>
    </NativeRouter>
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
