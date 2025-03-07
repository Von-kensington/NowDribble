import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profile}>
          <View>
            <Text style={styles.username}>Coach Cook</Text>
            <Text style={styles.welcome}>Welcome to Now Dribble!</Text>
          </View>
        </View>

        {/* Watch Intro Video Button */}
        <Pressable style={styles.watchButton} onPress={() => alert('Watch Intro Video')}>
          <Text style={styles.watchText}>Watch Intro Video</Text>
        </Pressable>

        {/* Empty Content Placeholder */}
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>Nothing has been posted here.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 14,
    color: 'gray',
  },
  watchButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
  },
  watchText: {
    color: '#ff66b2',
    fontWeight: 'bold',
  },
  emptyBox: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
  },
  emptyText: {
    color: 'gray',
    textAlign: 'center',
  },
});
