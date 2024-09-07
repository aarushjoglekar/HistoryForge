import { router } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";

export default function WarHub({ Args }) {
  const title = Args["title"];
  const name1 = Args["n1"];
  const name2 = Args["n2"];
  const name3 = Args["n3"];
  const name4 = Args["n4"];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ justifyContent: "center" }}>
          <Text style={styles.title}>{title}</Text>

          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              router.navigate(`/leadingPage?args=${JSON.stringify(Args.p1a)}`)
            }}
          >
            <ImageBackground
              source={require("../assets/images/green.png")}
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                marginLeft: 25,
                marginTop: 40,
              }}
            >
              <Text style={styles.smallText}>{name1}</Text>
            </ImageBackground>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              router.navigate(`/decisionPage?args=${JSON.stringify(Args.p2a)}`)
              // router.navigate({
              //   pathname: "/decisionPage",
              //   params: {'h' : {Args.p2a}}
              // });
            }}
          >
            <ImageBackground
              source={require("../assets/images/green.png")}
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                marginLeft: 265,
                marginTop: 30,
              }}
            >
              <Text style={styles.smallText}>{name2}</Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              router.navigate(`/decisionPage?args=${JSON.stringify(Args.p3a)}`)
            }}
          >
            <ImageBackground
              source={require("../assets/images/green.png")}
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                marginLeft: 25,
                marginTop: 30,
              }}
            >
              <Text style={styles.smallText}>{name3}</Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              router.navigate(`/decisionPage?args=${JSON.stringify(Args.p4a)}`)
            }}
          >
            <ImageBackground
              source={require("../assets/images/green.png")}
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                marginLeft: 265,
                marginTop: 30,
              }}
            >
              <Text style={styles.smallText}>{name4}</Text>
            </ImageBackground>
          </Pressable>
          <Text style={{fontFamily: 'normal', fontSize: 20, marginLeft: 20,}} onPress={()=>router.back()}>
            Back
          </Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "title",
    fontSize: 30,
    alignSelf: "center",
    lineHeight: 70,
  },
  smallText: {
    textAlign: "center",
    fontFamily: "normal",
    fontSize: 15,
  },
});
