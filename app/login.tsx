import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login, loading } = useAuth() || {}; // Use auth context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    try {
      if (!login) {
        throw new Error("Login function not found in context");
      }
      await login(email, password);
      router.replace("/"); // Redirect to home on success
    } catch (err: any) {
      setError(err.message);
      Alert.alert("Login Failed", err.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          width: "100%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: "100%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />

      {error && <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>}

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Sign In" onPress={handleLogin} />
      )}

      <Text
        style={{ marginTop: 15, color: "blue" }}
        onPress={() => router.push("/home")}
      >
        Don't have an account? Sign Up
      </Text>
    </View>
  );
}
