import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import axios from 'axios';
import { router } from "expo-router";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



async function APIrequest(w, b) {
  const response = await axios.put('http://10.80.5.97:5555', {'b': b, 'w': w});
  console.log(response.data);
  let params = response.data
  let Ca = getRandomInt(1,3)
  var wrong;
  if (Ca == 1) {
    wrong = 2;
  } else {
    wrong = 1;
  }
  params['correctSlot'] = Ca
  params['wrong1Slot'] = wrong
  params['correctAnimation'] = 'hi'
  params['wrong1Animation'] = 'hi'
  params['wrong2Animation'] = 'hi'
  params['originalAnimation'] = 'hi'
  router.navigate(`/decisionPage?args=${JSON.stringify(params)}`)
}

export default function createYourOwn() {
  const [war, setWar] = useState("");
  const [battle, setBattle] = useState("");

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={{fontFamily: 'normal', marginLeft: 30, fontSize: 18}} onPress={()=>router.back()}>Back</Text>
        </View>
        <View style={{height: 550}}>
          
        </View>
        <TextInput
          placeholder="Name of War"
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 0.5,
          }}
          value={war}
          onChangeText={(newText) => setWar(newText)}
        />
        <View style={{height: 20}}/>
        <TextInput
          placeholder="Name of Battle"
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 0.5,
          }}
          value={battle}
          onChangeText={(newText) => setBattle(newText)}
        />
        <TouchableOpacity onPress={() => APIrequest(war, battle)}>
          <Text style={{alignSelf: 'center', marginTop: 30, fontFamily: 'normal', fontSize: 14,}}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
