import { Stack } from 'expo-router';
import { Image, Pressable, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { PaperProvider } from "react-native-paper";
export default function Layout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable style={{ marginLeft: 15 }}>
              <MaterialIcons name="bookmark-border" size={28} color="black" />
            </Pressable>
          ),
          headerTitle: () => (
            <Image source={require('../assets/images/logo.png')} style={{ width: 80, height: 30, resizeMode: 'contain' }} />
          ),
          headerRight: () => (
            <Pressable style={{ marginRight: 15 }}>
              <FontAwesome name="user-circle" size={28} color="black" />
            </Pressable>
          ),
        }}
      />
    </PaperProvider>
  );
}
