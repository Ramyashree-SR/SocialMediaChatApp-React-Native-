import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const PostBigCards = ({ username, post, likes, profilepic, comments }) => {
  // console.log(username);
  // console.log(post);
  // console.log(comments);

  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{ uri: profilepic }} style={styles.profile} />
        <Text style={styles.username}>{username}</Text>
      </View>

      <Image source={{ uri: post }} style={styles.posts} />

      <View style={styles.sec1}>
        {liked ? (
          <View style={styles.sec11}>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={28}
              color="black"
              onPress={() => setLiked(false)}
              sytyle={styles.iconLiked}
            />
            <Text style={styles.liked}> {likes.length} Likes</Text>
          </View>
        ) : (
          <View>
            <MaterialCommunityIcons
              name="cards-heart"
              size={28}
              color="red"
              onPress={() => setLiked(true)}
              sytyle={styles.iconLiked}
            />
            <Text style={styles.notliked}> {likes.length + 1} Likes</Text>
          </View>
        )}

        <View style={styles.sec2}>
          <FontAwesome5
            name="comment"
            size={24}
            color="black"
            onPress={() => setShowComments(!showComments)}
          />
        </View>
      </View>

      {showComments == true && (
        <View style={styles.sec3}>
          {comments.map((item, index) => {
            return (
              <View style={styles.sec31} key={item.id}>
                <Text style={styles.commentuser}>{item.username}</Text>
                <Text style={styles.commentstext}>{item.comment}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default PostBigCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    // height:300,
    bordercolor: "black",
    marginVertical: 10,
    // borderWidth: 1,
    borderRadius: 10,
  },
  c1: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ECF0F1",
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    color: "#232323",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  posts: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  sec1: {
    flexDirection: "row",
    padding: 5,
    marginLeft: 5,
  },
  sec11: {
    flexDirection: "column",
  },

  notliked: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 0,
    fontSize: 15,
  },
  liked: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 0,
    fontSize: 15,
  },
  iconLiked: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 15,
  },
  sec2: {
    marginLeft: 0,
  },
  sec3: {
    width: "100%",
  },
  sec31: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  commentuser: {
    backgroundColor: "#FFFFFF",
    color: "#232323",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  commentstext: {
    backgroundColor: "#FFFFFF",
    color: "#118B65",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
});
// #1181B2
