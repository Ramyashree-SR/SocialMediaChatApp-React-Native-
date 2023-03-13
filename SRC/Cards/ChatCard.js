import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatCard = ({ chat }) => {
  // console.log(chat);
  return (
    <View style={styles.chatCard}>
      <Image source={{ uri: chat.profileImage }} style={styles.image} />

      <View style={styles.c1}>
        <Text style={styles.username}>{chat.username}</Text>
        <Text style={styles.lastmessage}>{chat.lastmessage}</Text>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  chatCard: {
    width: "100%",
    height: 70,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:"gray",
    alignItems:"center",
    // justifyContent:"center",
    flexDirection:"row"
  },
  image: {
    height: 55,
    width: 55,
  },
  c1:{
    
  },
  username:{
  color:"#232323",
  },
  lastmessage:{
    color:"#232323"
  }
});
