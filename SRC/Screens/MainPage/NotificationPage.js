import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bottomnavbar from "../../Components/Bottomnavbar";
import { formHead } from "../../CommonCss/formcss";
import { container } from "../../CommonCss/paagecss";
import TopNavBar from "../../Components/TopNavBar";

const NotificationPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
      <Bottomnavbar navigation={navigation} page="NotificationPage" />
      <View style={styles.c1}>
        <View style={styles.notifiy}>
          <Text style={[formHead, { color: "#111111" }]}>Notification</Text>
        </View>
        <View style={styles.notifiy}>
          <Text style={[formHead, { color: "#111111" }]}>Notification</Text>
        </View>
        <View style={styles.notifiy}>
          <Text style={[formHead, { color: "#111111" }]}>Notification</Text>
        </View>
        <View style={styles.notifiy}>
          <Text style={[formHead, { color: "#111111" }]}>Notification</Text>
        </View>
        <View style={styles.notifiy}>
          <Text style={[formHead, { color: "#111111" }]}>Notification</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 50,
  },
  c1: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  notifiy: {
    width: "100%",
    height: 50,
    backgroundColor: "#D0D3D4",
    marginTop: 10,
    borderRadius: 10,
  },
});
