import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCards = ({user}) => {
  return (
    <View style={styles.chatCard}>
     <Image source={{ uri: user.profile_pics}} style={styles.image} />

<View style={styles.c1}>
  <Text style={styles.username}>{user.userName}</Text>
 
</View>
    </View>
  )
}

export default UserCards

const styles = StyleSheet.create({
    
    chatCard: {
        width: "100%",
        height: 70,
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor:"gray",
        alignItems:"center",
        // justifyContent:"center",
        flexDirection:"row"
      },
      image: {
        height: 55,
        width: 55,
        borderRadius: 50,
        marginLeft:10
      },
      c1:{
        marginLeft:10
      },
      username:{
      color:"#232323",
      },
})