import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ history }) {
  let handlePress = () => {
    history.push("/offers");
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="go to offers" onPress={handlePress}></Button>
      <StatusBar style="auto" />
    </View>
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
