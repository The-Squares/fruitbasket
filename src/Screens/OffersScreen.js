import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function OffersScreen({ history }) {
  let handlePress = () => {
    history.push("/");
  };

  return (
    <View style={styles.container}>
      <Text>Offers Screen</Text>
      <Button title="go to home screen" onPress={handlePress}></Button>
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
