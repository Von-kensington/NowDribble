import { VideoView, useVideoPlayer } from "expo-video";
import { useLocalSearchParams } from "expo-router";
import { WebView } from "react-native-webview";
export default function VideoPlayer() {
  const { url } = useLocalSearchParams<{ url?: string }>();
  const player = useVideoPlayer(url || "", (player) => {
    player.play();
  });
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: url ? url : "" }}
      style={{ flex: 1 }}
    />
  );
}
