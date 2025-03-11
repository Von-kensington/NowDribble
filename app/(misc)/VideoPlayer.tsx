import { VideoView, useVideoPlayer } from "expo-video";
import { useLocalSearchParams } from "expo-router";

export default function VideoPlayer() {
  const { url } = useLocalSearchParams<{ url?: string }>();
  const player = useVideoPlayer(url || "", (player) => {
    player.play();
  });
  return <VideoView player={player} style={{ flex: 1 }} />;
}
