import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import huming from '../../../../assets/huming.png'
import { container, goback, logo1 } from "../../../CommonCss/paagecss";
import { formBtn, formHead2, formHead3, formInput } from "../../../CommonCss/formcss";

const SignUp_ChoosePassword = ({navigation}) => {
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
    <Text style={formHead2}>Choose a Strong Password</Text>
    <TextInput placeholder="Enter a Password" style={formInput} secureTextEntry={true}/>

    <TextInput placeholder="Confirm Password" style={formInput} secureTextEntry={true}/>

    <Text  style={formBtn} onPress={()=>navigation.navigate("SignUp_AccountCreated")}>Next</Text>
  </View>
  )
}

export default SignUp_ChoosePassword

const styles = StyleSheet.create({
  textData: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 2,
    },
})