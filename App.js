import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import DetailScreen from "./Screens/DetailScreen";
import Screen01 from "./Screens/Screen01";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar auto backgroundColor="transparent"/>
      <ScrollView>
        <Screen01 />
        {/* <DetailScreen /> */}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f9f9",
  },
});
