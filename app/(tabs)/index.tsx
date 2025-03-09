import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card, Avatar, Button } from "@rneui/themed";
import { mockPosts, Post } from "@/components/mockData";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/base";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const renderPost = ({ item }: { item: Post }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.postHeader}>
        <Avatar rounded source={{ uri: item.profileImageURL }} size="medium" />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
      {item.image_url ? (
        <Card.Image source={{ uri: item.image_url }} style={styles.image} />
      ) : null}
    </Card>
  );

  return loading ? (<ActivityIndicator style={styles.loader} size="large" />) : (
    <View>
      <Card containerStyle={styles.card}>
        <View style={styles.postHeader}>
          <Avatar rounded source={{ uri: "https://i.pravatar.cc/100" }} size="medium" />
          <Text style={styles.name}>Antonio Cook!</Text>
        </View>
        <Text style={styles.content}>Welcome to Now Dribble!</Text>
        <Card.Divider />
        <Button title="Watch Intro Video" />
      </Card>
      <FlatList data={mockPosts} renderItem={renderPost} ListEmptyComponent={<Text style={styles.noPostsText}>Nothing to show here...</Text>} keyExtractor={(item) => item.id.toString()} />
    </View>
  )
}


const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginVertical: 10,
    padding: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  noPostsText: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  name: {
    marginLeft: 10,

  },
  content: {
    marginVertical: 10,
  },
  image: {
    marginVertical: 10,
  },
});