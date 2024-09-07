import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function HomePageButton({ text, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 40,
    borderRadius: 11,
    borderWidth: 0.3,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
  },
  text: {
    fontFamily: 'normal',
    alignSelf: 'center',
    fontSize: 18,
  }
});
