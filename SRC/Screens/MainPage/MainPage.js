import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bottomnavbar from "../../Components/Bottomnavbar";
import { formHead } from "../../CommonCss/formcss";
import { container } from "../../CommonCss/paagecss";
import TopNavBar from "../../Components/TopNavBar";
import FollowerRandomPosts from "../../Components/FollowerRandomPosts";

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page="MainPage" />
      <Bottomnavbar navigation={navigation} page="MainPage" />
      <FollowerRandomPosts />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 50,
  },
});
