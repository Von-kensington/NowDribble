import { Button, Input, Text } from "@rneui/themed";
import { View } from "react-native";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { router, useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, login, authLoading } = useAuth();

  const router = useRouter();
  const handleLogin = async () => {
    console.log("Logging in...");
    if (username && password) {
      setLoading(true);
    }
    try {
      await login(username, password);
      router.push("/");
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e.message);
    }
  };
  return authLoading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input
        placeholder="Email"
        onChangeText={(value) => setUsername(value)}
        textContentType="emailAddress"
      />
      <Input
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
        textContentType="password"
        secureTextEntry={true}
      />
      {error && <Text>{error}</Text>}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button onPress={() => handleLogin()}>Login</Button>
      )}
      <Button onPress={() => router.push("/register")}>Register</Button>
    </View>
  );
}
