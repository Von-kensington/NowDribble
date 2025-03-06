import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={headerOptions}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="train" options={{ title: 'Train' }} />
      <Tabs.Screen name="numbers" options={{ title: 'Numbers' }} />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    width: 150, // Explicit width (adjust as needed)
    height: 100, // Explicit height
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 100,
    height: 100
  },
});
const headerOptions = {
  headerStyle: styles.headerContainer,
  headerLeft: () => <Ionicons name="bookmark-outline" size={24} color="black" />,
  headerRight: () => <Ionicons name="person-circle" size={24} color="black" />,
  headerTitle: () => <Image style={styles.headerImage} source={require('../../assets/images/Vector-2.png')} resizeMode="contain" />
}


