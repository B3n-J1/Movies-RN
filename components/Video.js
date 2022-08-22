import React from "react";
import { StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

class VideoPlayer extends React.PureComponent {
  render() {
    const { videoItem } = this.props.data.results[0];

    return (
      <Video
        ref={videoItem}
        style={styles.video}
        source={{
          uri: "https://youtu.be/o-qvJ2iUqvA",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        //onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
export default VideoPlayer;
