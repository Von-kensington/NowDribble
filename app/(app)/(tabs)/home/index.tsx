//import liraries
import { Avatar, makeStyles, Text } from "@rneui/themed";
import { View, TouchableOpacity } from "react-native";

import { Divider } from "@rneui/themed";
import { useRouter } from "expo-router";
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  avatarStyle: {
    backgroundColor: theme.colors.black,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  video: {
    width: "100%",
    backgroundColor: theme.colors.black,
    height: "30%",
  },
}));
const videoSource =
  "https://player.vimeo.com/video/555990347?h=05f5ad3427&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
const Home = () => {
  const styles = useStyles();
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Avatar
          rounded
          icon={{ name: "user", type: "feather" }}
          size={50}
          containerStyle={styles.avatarStyle}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 8 }}>
          Coach Cook
        </Text>
      </View>

      {/* Welcome Message */}
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Welcome to Now Dribble!
      </Text>

      {/* Watch Intro Video Button */}
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "../VideoPlayer",
            params: { url: videoSource },
          })
        }
        style={{ padding: 10 }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#E91E63",
            textAlign: "center",
            textDecorationLine: "underline",
          }}
        >
          Watch Intro Video
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <Divider style={{ marginVertical: 16 }} />

      {/* Empty State Message */}
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        Nothing has been posted here.
      </Text>
    </View>
  );
};

export default Home;
