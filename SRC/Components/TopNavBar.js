import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { logo2 } from "../CommonCss/paagecss";
import { Ionicons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";

const TopNavBar = ({ navigation, page }) => {
  console.log(page);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/huming.png")}
        style={[logo2, { fontSize: 30 }]}
      />
      {page === "MainPage" && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AllChats");
          }}
        >
          <Ionicons name="chatbubbles-sharp" size={34} color="black" />
        </TouchableOpacity>
      )}

      {page === "MyProfile" && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Ionicons name="settings-sharp" size={34} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#000000",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: 0,
    width: "100%",
    height: 50,
    zIndex: 90,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
