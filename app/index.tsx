import { router } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function Index() {
  const [loaded, error] = useFonts({
    'title': require('../assets/fonts/Inknut_Antiqua/InknutAntiqua-Regular.ttf'),
    'normal': require('../assets/fonts/Itim/Itim-Regular.ttf')
  })
  useEffect(() => {
    if (loaded || error) {
      return (
        router.navigate('/home')
      );
    }
  }, [loaded, error])
}