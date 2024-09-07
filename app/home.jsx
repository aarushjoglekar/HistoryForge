import { View, Text, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import HomePageButton from "../components/HomePageButton";
import { router } from "expo-router";

export default function home() {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Text style={styles.title}>HistoryForge</Text>
        <HomePageButton text={"The Revolutionary War"} onPress={()=>router.navigate('/revHub')}/>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'title',
    fontSize: 40,
    alignSelf: 'center',
    lineHeight: 80,
  }
})
