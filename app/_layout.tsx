import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const fonts = useFonts({
    'title': require('../assets/fonts/Inknut_Antiqua/InknutAntiqua-Regular.ttf'),
    'normal': require('../assets/fonts/Itim/Itim-Regular.ttf')
  })
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="revHub" />
    </Stack>
  );
}
