import { Tabs } from 'expo-router';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: 'white', height: 60 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#ff66b2',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        sceneStyle: {
          backgroundColor: "white"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="numbers"
        options={{
          title: 'Numbers',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="matrix" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="train"
        options={{
          title: 'Train Now',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="basketball" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

