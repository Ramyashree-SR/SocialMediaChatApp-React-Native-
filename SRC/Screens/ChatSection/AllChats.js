import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { formHead2 } from "../../CommonCss/formcss";
import ChatCard from "../../Cards/ChatCard";
import { searchbar } from "../../CommonCss/paagecss";

const AllChats = ({ navigation }) => {
  let chats = [
    {
      username: "samarth_Kumar",
      lastmessage: "Hello, How are you?",
      time: "12.00pm",
      profileImage:
        "data:image/png;base64,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",
    },
    {
      username: "Dhwani_b",
      lastmessage: "Hello, what's going on?",
      time: "2.00pm",
      profileImage:
        "data:image/png;base64,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",
    },
    {
      username: "pranjali_r",
      lastmessage: "Hello, How are you?",
      time: "4.00pm",
      profileImage:
        "data:image/png;base64,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",
    },
    {
      username: "Vihani_r",
      lastmessage: "Hello, How are you?",
      time: "4.00pm",
      profileImage:
        "data:image/png;base64,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",
    },
    {
      username: "Viren_s",
      lastmessage: "Hello, How are you?",
      time: "4.00am",
      profileImage:
        "data:image/png;base64,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",
    },
    {
      username: "Jeevika",
      lastmessage: "Hello, How are you?",
      time: "2.00am",
      profileImage:
        "data:image/png;base64,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",
    },
    {
      username: "Manvi_k",
      lastmessage: "Hey, How are you?",
      time: "3.00pm",
      profileImage:
        "data:image/png;base64,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",
    },
    {
      username: "Manogna_vs",
      lastmessage: "Hi, How are you?",
      time: "12.00pm",
      profileImage:
        "data:image/png;base64,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",
    },
  ];
  const [keyword, setKeyword] = useState("");
  // console.log(keyword);
  return (
    <ScrollView style={styles.container}>
      <Ionicons
        name="md-chevron-back-circle-outline"
        size={30}
        color="#FFFFFF"
        onPress={() => navigation.navigate("MainPage")}
        style={styles.gohomeicon}
      />

      <View style={styles.c1}>
        <Text style={[formHead2, { fontWeight: "bold" }]}>My Chats</Text>
        <TextInput
          placeholder="Search"
          style={searchbar}
          onChangeText={(text) => setKeyword(text)}
        />
      </View>

      <View style={{ padding: 10 }}>
        {chats
          .filter((chat) => {
            if (keyword == "") {
              return chat;
            } else if (
              chat.username.toLowerCase().includes(keyword.toLowerCase()) ||
              chat.lastmessage.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return chat;
            }
          })
          .map((chat) => {
            return <ChatCard key={chat.username} chat={chat} />;
          })}
      </View>
    </ScrollView>
  );
};

export default AllChats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  gohomeicon: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 10,
    color: "#232323",
  },
  c1: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#232323",
    // borderWidth:1,
    borderRadius: 20,
  },
});
