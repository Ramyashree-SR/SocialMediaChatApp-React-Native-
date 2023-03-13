import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import huming from "../../../../assets/huming.png";
import { container, hr80, logo1 } from "../../../CommonCss/paagecss";
import {
    formBtn,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../../CommonCss/formcss";

const Login = ({ navigation }) => {
  return (
    <View style={container}>
      <Image source={huming} style={logo1} />
      <Text style={formHead}>Login</Text>
      <TextInput placeholder="Enter Your Email." style={formInput} />
      <TextInput
        placeholder="Enter Password.."
        style={formInput}
        secureTextEntry={true}
      />

      <Text
        style={formTextLinkRight}
        onPress={()=>navigation.navigate("ForgetPassword_Email")}
      >
        ForgetPassword?
      </Text>

      <Text style={formBtn} onPress={()=>navigation.navigate("MainPage")}>Submit</Text>

      <View style={hr80}/>

      <Text style={formTextLinkCenter}>Don't have an account?   <Text style={{color:"black"}} onPress={()=>navigation.navigate('SignUp_Email')}>SignUp</Text></Text>
    </View>
  );
};  

export default Login;

const styles = StyleSheet.create({});
