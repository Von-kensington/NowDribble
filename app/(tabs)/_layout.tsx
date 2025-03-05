import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false }} />
      <Tabs.Screen name="index" options={{ title: 'index' }} />
    </Tabs>
  );
}
