import { useAuth } from "@/context/AuthContext";
import { Text, useTheme } from "@rneui/themed";
import { Redirect, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function App() {
  const { theme } = useTheme();
  const router = useRouter();
  const { user, authLoading } = useAuth();
  if (authLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!user) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack
      screenOptions={{
        title: "",
        contentStyle: {
          backgroundColor: theme.colors?.background,
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
