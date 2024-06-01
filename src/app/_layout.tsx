import { enableReactNativeComponents } from "@legendapp/state/config/enableReactNativeComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";
import { lightTheme } from "src/theme";

enableReactTracking({
  auto: true,
});

enableReactNativeComponents();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    nunito: require("../assets/fonts/nunito.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Slot />
    </ThemeProvider>
  );
}
