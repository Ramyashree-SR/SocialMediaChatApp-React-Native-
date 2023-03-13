import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Bottomnavbar = ({ navigation, page }) => {
  // console.log(page);
  return (
    <View style={styles.container1}>
      {page === "MainPage" ? (
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="home"
            size={30}
            color="#FFFFFF"
            style={styles.activeIcon1}
            onPress={() => navigation.navigate("MainPage")}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="home"
            size={35}
            color="#232323"
            style={styles.icon1}
            onPress={() => navigation.navigate("MainPage")}
          />
        </TouchableOpacity>
      )}

      {page === "SearchPage" ? (
        <Ionicons
          name="search"
          size={30}
          color="#FFFFFF"
          style={styles.activeIcon1}
          onPress={() => navigation.navigate("SearchPage")}
        />
      ) : (
        <Ionicons
          name="search"
          size={35}
          color="#232323"
          onPress={() => navigation.navigate("SearchPage")}
        />
      )}

      {page === "NotificationPage" ? (
        <Foundation
          name="heart"
          size={30}
          color="#FFFFFF"
          style={styles.activeIcon1}
          onPress={() => navigation.navigate("NotificationPage")}
        />
      ) : (
        <Foundation
          name="heart"
          size={35}
          color="#232323"
          onPress={() => navigation.navigate("NotificationPage")}
        />
      )}

      {page === "MyProfile" ? (
        <FontAwesome
          name="user-circle"
          size={30}
          color="#FFFFFF"
          style={styles.activeIcon1}
          onPress={() => navigation.navigate("MyProfile")}
        />
      ) : (
        <FontAwesome
          name="user-circle"
          size={35}
          color="#232323"
          onPress={() => navigation.navigate("MyProfile")}
        />
      )}
    </View>
  );
};

export default Bottomnavbar;

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    zIndex: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  activeIcon1: {
    backgroundColor: "#232323",
    borderRadius: 40,
    padding: 10,
    fontSize: 25,
  },
});
