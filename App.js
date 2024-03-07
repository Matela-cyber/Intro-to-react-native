import React from "react";
import { StatusBar, Image, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.leftcon}>
          <Image
            source={require("./profile.png")}
            style={styles.profilepicture}
          />
          <View style={styles.text}>
            <Text>Teboho Matela</Text>
            <Text>10hrs</Text>
          </View>
        </View>
        <Text>...</Text>
      </View>

      <Text>
        Software development is a complex process that involves various stages,
        methodologies, and models to ensure the successful delivery of
        high-quality software products. The software life cycle models provide a
        structured approach for the development, deployment, and maintenance of
        software systems.
      </Text>
      <Image source={require("./copy.png")} style={styles.copy} />
      <Text>62 likes</Text>
      <View style={styles.bottom}>
        <View>
          <AntDesign name="like1" size={24} color="black" />
          <Text>Likes</Text>
        </View>
        <View>
          <FontAwesome name="comment-o" size={24} color="black" />
          <Text>Comment</Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="share-outline"
            size={24}
            color="black"
          />
          <Text>Share</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  profilepicture: {
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  copy: {
    width: 400,
    height: 400,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftcon: {
    flexDirection: "row",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
