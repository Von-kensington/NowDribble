import { FlatList, TouchableOpacity } from "react-native";
import { Card, makeStyles, Text, useTheme } from "@rneui/themed";
import { useRouter } from "expo-router";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 10,
    height: 200,
    shadowOpacity: 0,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  captionText: {
    textAlign: "center",
    fontSize: 16,
    color: theme.colors.grey1,
  },
}));

const numbers = [
  {
    id: 1,
    caption: "Focus on a firm dribble on the outside of each foot.",
    url: "https://player.vimeo.com/video/736674821",
  },
  {
    id: 2,
    caption:
      "Keep your hand on top of ball to make your dribble strong and quick. Don't go past your center of mass.",
    url: "https://player.vimeo.com/video/736674812",
  },
  {
    id: 3,
    caption:
      "Focus on making your dribble quick and slightly rocking your body towards the direction of the ball, right to left.",
    url: "https://player.vimeo.com/video/736674798",
  },
  {
    id: 4,
    caption:
      "Same as 3, focus on making your dribble quick and slightly rocking your body towards the direction of the ball, right to left (body wrap).",
    url: "https://player.vimeo.com/video/736674775",
  },
  {
    id: 5,
    caption:
      "To speed up ball control, focus on crossing the ball quick and snappy between the center of your wide base without your arms too far outside your waist.",
    url: "https://player.vimeo.com/video/736674752",
  },
];

export default function Numbers() {
  const styles = useStyles();
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
      }}
      data={numbers}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/VideoPlayer",
              params: {
                url: item.url,
              },
            })
          }
        >
          <Card containerStyle={styles.cardContainer}>
            <Text h3 style={styles.numberText}>
              #{item.id}
            </Text>
            <Text style={styles.captionText}>
              {item.caption || "Nothing here yet!"}
            </Text>
          </Card>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
