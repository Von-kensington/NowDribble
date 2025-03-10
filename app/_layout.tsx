import { createTheme, ThemeProvider } from "@rneui/themed";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const theme = createTheme({
  lightColors: {
    primary: "#FF33A8", // Vibrant pink
    secondary: "#212c2b", // Dark teal-green shade from extraction
    background: "white", // Light background for contrast
  },
  darkColors: {
    primary: "#FF33A8", // Vibrant pink in dark mode too
    secondary: "#404040", // Dark gray from extracted colors
    background: "#212c2b", // Dark theme background
  },
  mode: "light", // Default mode
});

const App = () => {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor:
          theme.mode === "dark"
            ? theme.darkColors?.background
            : theme.lightColors?.background,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
