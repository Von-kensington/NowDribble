import { useAuth } from "@/context/AuthContext";
import { Text, useTheme } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function App() {
  const { theme } = useTheme();
  const { loading, user } = useAuth() || {};
  const router = useRouter();
  useEffect(() => {
    if (!user && !loading) {
      router.replace("/login");
    }
  }, [user, loading]);
  if (loading) {
    return <Text>Loading...</Text>;
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
