import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import huming from '../../../../assets/huming.png'
import { container, goback, logo1 } from "../../../CommonCss/paagecss";
import { formBtn, formHead2, formHead3, formInput } from "../../../CommonCss/formcss";


const ForgetPassword_VerificationCode = ({ navigation }) => {
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
      <Text style={formHead3}>A verification code as sent to your email address</Text>
      <TextInput placeholder="Enter your 6-digit code here.." style={formInput}/>

      <Text  style={formBtn} onPress={()=>navigation.navigate("ForgetPassword_ChoosePassword")}>Next</Text>
    </View>
  );
};

export default ForgetPassword_VerificationCode

const styles = StyleSheet.create({})