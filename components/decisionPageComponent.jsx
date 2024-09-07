import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { router } from "expo-router";

export default function DecisionPageComponent({ Args }) {
  const [currentAnimation, setCurrentAnimation] = useState(
    Args.originalAnimation
  );
  const [topTitle, setTopTitle] = useState(Args.originalText);
  const [opacity, setOpacity] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const correctAnswerClicked = () => {
    setCurrentAnimation(Args.correctAnimation);
    setTopTitle(Args.correctExplanation);
    setOpacity(100);
    setDisabled(false);
  };
  const wrong1AnswerClicked = () => {
    setCurrentAnimation(Args.wrong1Animation);
    setTopTitle(Args.wrong1Explanation);
    setOpacity(0);
    setDisabled(true);
  };
  const wrong2AnswerClicked = () => {
    setCurrentAnimation(Args.wrong2Animation);
    setTopTitle(Args.wrong2Explanation);
    setOpacity(0);
    setDisabled(true);
  };
  const width = Dimensions.get("window").width;
  let decision1;
  let decision2;
  let decision3;
  if (Args["correctSlot"] == 1) {
    decision1 = Args["correctDecision"];
    decision2 = Args["wrong1Decision"];
    decision3 = Args["wrong2Decision"];
  } else if (Args["correctSlot"] == 2) {
    decision1 = Args["wrong1Decision"];
    decision2 = Args["correctDecision"];
    decision3 = Args["wrong2Decision"];
  } else {
    decision1 = Args["wrong1Decision"];
    decision2 = Args["wrong2Decision"];
    decision3 = Args["correctDecision"];
  }
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/bigScroll.png")}
          style={{
            width: 350,
            height: 140,
            alignSelf: "center",
            marginTop: 20,
            flex: 2,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 30,
              marginTop: 5,
              fontFamily: "normal",
              width: 280,
              alignSelf: "center",
              marginRight: 20,
            }}
          >
            {topTitle}
          </Text>
        </ImageBackground>
        <View style={{ flex: 6, justifyContent: "center" }}>
          <LottieView
            source={currentAnimation}
            autoPlay
            loop
            style={{ height: width, width: width, alignSelf: "center" }}
          />
          <TouchableOpacity
            style={{ opacity: opacity }}
            disabled={disabled}
            onPress={() => {
              router.back()
            }}
          >
            <Text
              style={{
                fontFamily: "normal",
                alignSelf: "flex-end",
                marginRight: 20,
              }}
            >
              Advance
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", flex: 2 }}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              if (Args.correctSlot == 1) {
                correctAnswerClicked();
              } else if (Args.wrong1Slot == 1) {
                wrong1AnswerClicked();
              } else {
                wrong2AnswerClicked();
              }
            }}
          >
            <ImageBackground
              source={require("../assets/images/smallScroll.png")}
              style={{ height: 150, width: 133, justifyContent: "center" }}
            >
              <Text
                style={{
                  fontFamily: "normal",
                  alignSelf: "center",
                  textAlign: "center",
                  width: 70,
                }}
              >
                {decision1}
              </Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              if (Args.correctSlot == 2) {
                correctAnswerClicked();
              } else if (Args.wrong1Slot == 2) {
                wrong1AnswerClicked();
              } else {
                wrong2AnswerClicked();
              }
            }}
          >
            <ImageBackground
              source={require("../assets/images/smallScroll.png")}
              style={{ height: 150, width: 133, justifyContent: "center" }}
            >
              <Text
                style={{
                  fontFamily: "normal",
                  alignSelf: "center",
                  textAlign: "center",
                  width: 70,
                }}
              >
                {decision2}
              </Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              if (Args.correctSlot == 3) {
                correctAnswerClicked();
              } else if (Args.wrong1Slot == 3) {
                wrong1AnswerClicked();
              } else {
                wrong2AnswerClicked();
              }
            }}
          >
            <ImageBackground
              source={require("../assets/images/smallScroll.png")}
              style={{ height: 150, width: 133, justifyContent: "center" }}
            >
              <Text
                style={{
                  fontFamily: "normal",
                  alignSelf: "center",
                  textAlign: "center",
                  width: 70,
                }}
              >
                {decision3}
              </Text>
            </ImageBackground>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
