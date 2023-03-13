import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import huming from '../../../../assets/huming.png'
import { container, goback, logo1 } from "../../../CommonCss/paagecss";
import { formBtn, formHead2, formHead3, formInput } from "../../../CommonCss/formcss";
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

const SignUp_AccountCreated = ({navigation}) => {
  return (
    <View style={container}>
    <TouchableOpacity
      onPress={() => navigation.navigate("Login")}>
      <View style={goback}>
     <AntDesign name="back" size={24} color="black" />
      <Text
        style={styles.textData}
      >
        Go Back
      </Text>
      </View>
    </TouchableOpacity>


    <Image source={huming} style={logo1}/>
    <MaterialCommunityIcons name="check-decagram" size={30} color="green" />
    <Text style={formHead2}>Account Created SuccessFully</Text>
    

    <Text  style={styles.button} onPress={()=>navigation.navigate("MainPage")}>Roll On   <AntDesign name="forward" size={20} color="black" />....</Text>
  </View>
  )
}
export default SignUp_AccountCreated

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#EE9119",
    width:"40%",
    borderRadius:10,
    borderColor:"black",
    borderWidth:1,
    color:"black",
    textAlign:"center",
    paddingVertical:10,
    marginVertical:10
  }
})