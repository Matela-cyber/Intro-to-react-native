import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import Stylee from "./stylee";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profiles}>
        <View style={styles.profile}>
          <Image source={require("./profile.png")} style={styles.image} />
          <Stylee label="Thabo Lebese" value="10hr" />
        </View>
        <View style={styles.topRight}>
          <Text>...</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  profile: { flexDirection: "row" },
  profiles: { flexDirection: "row", justifyContent: "space-between" },
  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingTop: 10,
    paddingRight: 10,
  },
});
