import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { Card, Icon } from "@rneui/themed";
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
// Define Workout Type
interface SavedWorkout {
  workout_id: number;
  category_id: number;
  name: string;
  description?: string;
  image_url: string;
  user_has_access: boolean;
}

// Mock Data (Simulated Saved Workouts)
const initialSavedWorkouts: SavedWorkout[] = [
  {
    workout_id: 1,
    category_id: 101,
    name: "Dribbling Basics",
    description: "Improve your ball-handling skills.",
    image_url: "https://picsum.photos/400/300?random=1",
    user_has_access: true,
  },
  {
    workout_id: 2,
    category_id: 102,
    name: "Advanced Shooting",
    description: "Perfect your jump shot technique.",
    image_url: "https://picsum.photos/400/300?random=2",
    user_has_access: true,
  },
  {
    workout_id: 3,
    category_id: 103,
    name: "Defensive Drills",
    description: "Learn how to improve your defense.",
    image_url: "https://picsum.photos/400/300?random=3",
    user_has_access: false,
  },
];

export default function SavedForLaterScreen() {
  const [savedWorkouts, setSavedWorkouts] = useState<SavedWorkout[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching saved workouts
    setSavedWorkouts(initialSavedWorkouts);
  }, []);

  // Function to remove a workout
  const removeWorkout = (id: number) => {
    setSavedWorkouts((prev) => prev.filter((workout) => workout.workout_id !== id));
  };

  // Confirm deletion before removing a workout
  const confirmDelete = (id: number) => {
    Alert.alert(
      "Remove Workout",
      "Are you sure you want to remove this workout from saved?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", onPress: () => removeWorkout(id), style: "destructive" },
      ]
    );
  };

  // Render each saved workout item
  const renderItem = ({ item }: { item: SavedWorkout }) => (
    <Swipeable containerStyle={styles.workoutContainer} renderRightActions={() =>
      <TouchableOpacity style={{ width: "50%", height: "100%" }} onPress={() => confirmDelete(item.workout_id)}><Card containerStyle={styles.deleteButton}><Icon name="delete" color={"black"} /></Card></TouchableOpacity>
    }>
      <Card containerStyle={styles.card}>
        <Card.Image source={{ uri: item.image_url }} style={styles.image} />
        <View style={styles.workoutInfo}>
          <Text style={styles.workoutName}>{item.name}</Text>
          <Text style={styles.workoutDescription}>{item.description}</Text>
        </View>
      </Card>
    </Swipeable >
  );

  return (
    <View style={styles.container}>
      {savedWorkouts.length === 0 ? (
        <Text style={styles.noWorkouts}>No saved workouts</Text>
      ) : (
        <FlatList
          data={savedWorkouts}
          keyExtractor={(item) => item.workout_id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  noWorkouts: {
    textAlign: "center",
    fontSize: 18,
    color: "#555",
    marginTop: 20,
  },
  workoutContainer: {
    width: "100%",
  },
  card: {
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  workoutInfo: {
    paddingVertical: 10,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  workoutDescription: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 50,
  },
});
