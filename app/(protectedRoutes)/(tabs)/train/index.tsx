import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Card } from "@rneui/themed";

// const API_URL = `${IP_ADDRESS}/Workout/GetEnabledUserCategories`;

// const fetchCategories = async () => {
//   try {
//     const token = await SecureStore.getItemAsync('userToken');
//     if (!token) throw new Error('Authentication error: Unable to retrieve token.');

//     const response = await fetch(API_URL, {
//       method: 'GET',
//       headers: { 'Authorization': `Bearer ${token}` },
//     });
//     if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

//     const data = await response.json();
//     return data.categories;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

const mockCategories = [
  {
    category_id: 1,
    name: "Strength Training",
    image_url: "https://via.placeholder.com/400",
    video_id: "sample-video-id-1",
    workout_count: 10,
  },
  {
    category_id: 2,
    name: "Cardio Blast",
    image_url: "https://via.placeholder.com/400",
    video_id: "sample-video-id-2",
    workout_count: 8,
  },
  {
    category_id: 3,
    name: "Flexibility & Mobility",
    image_url: "https://via.placeholder.com/400",
    video_id: "sample-video-id-3",
    workout_count: 5,
  },
];

const CategoryCard = ({ category }: any) => {
  const videoUrl = `https://drive.google.com/uc?export=download&id=${category.video_id}`;
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/+not-found");
      }}
    >
      <Card
        containerStyle={{
          margin: 10,
          borderRadius: 10,
          overflow: "hidden",
          padding: 0,
        }}
      >
        <View style={{ width: "100%", height: 200 }}></View>
        {/* <Video
          source={{ uri: videoUrl }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          useNativeControls
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        /> */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 10,
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {category.name.toUpperCase()}
          </Text>
          <Text style={{ color: "white" }}>
            {category.workout_count} exercises
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const TrainNowScreen = () => {
  const [categories, setCategories] = useState(mockCategories);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const loadCategories = async () => {
  //     try {
  //       const fetchedCategories = await fetchCategories();
  //       setCategories(fetchedCategories);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadCategories();
  // }, []);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (error) {
    Alert.alert("Error", error);
    return (
      <Text style={{ color: "red", textAlign: "center", marginTop: 50 }}>
        {error}
      </Text>
    );
  }

  return (
    <FlatList
      data={categories}
      contentContainerStyle={{ flex: 1 }}
      keyExtractor={(item) => item.category_id.toString()}
      renderItem={({ item }) => <CategoryCard category={item} />}
    />
  );
};

export default TrainNowScreen;
