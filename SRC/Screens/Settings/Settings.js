import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { formHead } from "../../CommonCss/formcss";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="md-chevron-back-circle-outline"
        size={30}
        color="#232323"
        onPress={() => navigation.navigate("MyProfile")}
        style={styles.gohomeicon}
      />
      <Text style={formHead}>Settings</Text>
      <Text style={styles.txt1}>Edit Profile</Text>
      <Text style={styles.txt1}>Change Password</Text>
      <Text style={styles.txt1}>Customer Support</Text>
      <Text style={styles.txt1}>Edit Profile</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  txt1: {
    marginTop: 20,
    fontSize: 20,
    borderBottomColor: "#D0D3D4",
    borderBottomWidth: 1,
  },
});
