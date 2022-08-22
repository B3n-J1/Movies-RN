import React from "react";
import { View, Text, StyleSheet } from "react-native";

defaultProps = {
  err1: "Oops something went wrong !!",
  err2: "Make sur you are online and restart the App",
};
class Error extends React.PureComponent {
  render() {
    const { err1, err2 } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{err1}</Text>
        <Text style={styles.text}>{err2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight:'bold',
  }
})

export default Error;