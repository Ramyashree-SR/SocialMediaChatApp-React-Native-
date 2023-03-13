import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Bottomnavbar from "../../Components/Bottomnavbar";
import { formHead } from "../../CommonCss/formcss";
import { container } from "../../CommonCss/paagecss";
import TopNavBar from "../../Components/TopNavBar";
import FollowerRandomPosts from "../../Components/FollowerRandomPosts";

const MyProfile = ({ navigation }) => {
  const data = {
    username: "Dhwanika Bhnushali",
    followers: 10000,
    following: 1000,
    description: "Artist,Passionated towards painting",
    profile_pic: "https://picsum.photos/500/500",
    posts: [
      {
        id: 1,
        post_image: "https://picsum.photos/400/400",
      },
      {
        id: 2,
        post_image: "https://picsum.photos/300/300",
      },
      {
        id: 3,
        post_image: "https://picsum.photos/550/550",
      },
      {
        id: 4,
        post_image: "https://picsum.photos/350/350",
      },
      {
        id: 5,
        post_image: "https://picsum.photos/250/250",
      },
      {
        id: 6,
        post_image: "https://picsum.photos/450/450",
      },
    ],
  };

  console.log(data, "hshbhs");
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page="MyProfile" />
      <Bottomnavbar navigation={navigation} page="MyProfile" />
      <ScrollView>
        <View style={styles.c1}>
          <Image source={{ uri: data.profile_pic }} style={styles.profilepic} />
          <Text style={styles.txt}>@{data.username}</Text>

          <View style={styles.c11}>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Followers</Text>
              <Text style={styles.txt2}>{data.followers}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Following</Text>
              <Text style={styles.txt2}>{data.following}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Posts</Text>
              <Text style={styles.txt2}>{data.posts.length}</Text>
            </View>
          </View>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.txt1} x>
            Your Posts
          </Text>
          <View style={styles.c13}>
            {data.posts.map((item) => {
              return (
                <Image
                  key={item.id}
                  style={styles.postimage}
                  source={{ uri: item.post_image }}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 50,
  },
  c1: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#00000",
  },
  profilepic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
    borderWidth: 1,
    // backgroundColor: "#00000",
  },
  txt: {
    color: "#000000",
    fontsize: 20,
    fontWeight: "bold",
    margin: 10,
    backgroundColor: "#D0D3D4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
  },
  txt1: {
    // color: "#0000",
    fontSize: 20,
  },
  txt2: {
    // color: "#0000",
    fontSize: 15,
  },
  c11: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  c111: {
    alignItems: "center",
  },
  vr1: {
    width: 1,
    height: 50,
    backgroundColor: "#000000 ",
  },
  desc: {
    color: "#000000",
    fontSize: 19,
    marginVertical: 20,
    backgroundColor: "#D0D3D4",
    width: "100%",
    paddingVertical: 20,
    padding: 10,
    borderRadius: 20,
  },
  postimage: {
    width: "32%",
    height: 120,
    margin: 2,
  },
  c13: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
