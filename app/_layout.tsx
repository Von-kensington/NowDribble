import { Stack } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function Layout() {
  const router = useRouter();
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => { router.push('/savedWorkouts') }}>
              <MaterialIcons name="bookmark-border" size={28} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image source={require('../assets/images/logo.png')} style={{ width: 80, height: 30, resizeMode: 'contain' }} />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <FontAwesome name="user-circle" size={28} color="black" />
            </TouchableOpacity>
          ),
        }}
      >
      </Stack>
    </GestureHandlerRootView>
  );
}
