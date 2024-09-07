import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";

export default function ColoredCircle({color, mtop, mleft, text}){
  if (color == 'green'){
    return (
        <ImageBackground
          source={require("../assets/images/green.png")}
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            marginLeft: {mtop},
            marginTop: {mleft},
          }}
        >
          <Text style={styles.smallText}>{text}</Text>
        </ImageBackground>
    )
  } else {
    return (
        <ImageBackground
          source={require("../assets/images/red.png")}
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            marginLeft: {mtop},
            marginTop: {mleft},
          }}
        >
          <Text style={styles.smallText}>{text}</Text>
        </ImageBackground>
    )
  }
  
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
