import React, { useEffect, useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { Card } from "@rneui/themed";
import { useRouter } from "expo-router";

interface Category {
  id: string;
  name: string;
  image_url?: string;
  workout_count: number;
}
const mockCategory: Category = {
  id: "1",
  name: "Strength Training",
  image_url: "https://fakeimg.pl/600x400",
  workout_count: 15,
};
const mockCategory1: Category = {
  id: "1",
  name: "Strength Training",
  image_url: "",
  workout_count: 15,
};
export const fetchCategories = async () => {
  return [mockCategory, mockCategory1];
};
const TrainNowView = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadCategories();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />;
  }

  if (errorMessage) {
    Alert.alert("Error", errorMessage, [{ text: "OK", onPress: () => setErrorMessage(null) }]);
  }

  return (
    <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
      {categories.map((category: Category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => { }}
        >
          {category.image_url ? (
            <SuccessView category={category} />
          ) : (
            <FailView category={category} />
          )}
        </TouchableOpacity>
      ))}
      <View style={{ height: 80 }} />
    </ScrollView>
  );
};

const SuccessView = ({ category }: { category: Category }) => {
  return (
    <Card containerStyle={{ borderRadius: 10, overflow: "hidden" }}>
      <Image
        source={{ uri: category.image_url }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
        resizeMode="cover"
      />
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0, 0, 0, 0.3)", padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>{category.name.toUpperCase()}</Text>
        <Text style={{ fontSize: 14, color: "white" }}>{category.workout_count} exercises</Text>
      </View>
    </Card>
  );
};

const FailView = ({ category }: { category: Category }) => {
  return (
    <Card containerStyle={{ borderRadius: 10, backgroundColor: "#ccc", alignItems: "center", justifyContent: "center", height: 200 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{category.name.toUpperCase()}</Text>
      <Text style={{ fontSize: 14, color: "white" }}>{category.workout_count} exercises</Text>
    </Card>
  );
};

export default TrainNowView;
