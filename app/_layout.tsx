import { AuthProvider } from "@/context/AuthContext";
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
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(app)" />
          <Stack.Screen name="login" />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
