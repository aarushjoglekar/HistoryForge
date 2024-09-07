import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'

export default function leadingPage() {
  let params = useLocalSearchParams()
  params = params["args"]
  params = JSON.parse(params)
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Text style={styles.title}>Leading Events</Text>
        <TouchableOpacity disabled style={{alignSelf: 'center', backgroundColor: "white", width: 350, height: 650, borderRadius: 50,}}>
          <Text style = {{alignSelf: 'center', fontFamily: 'normal', width: 300, marginTop: 20,}}>{params.Text}</Text>
          <Text style={{fontFamily: 'normal', fontSize: 20, marginLeft: 20,}} onPress={()=>router.back()}>
            Back
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'title',
    fontSize: 40,
    alignSelf: 'center',
    lineHeight: 80,
  }
})