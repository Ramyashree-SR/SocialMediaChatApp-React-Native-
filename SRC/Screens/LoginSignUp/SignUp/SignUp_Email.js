import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import huming from '../../../../assets/huming.png'
import { container, goback, logo1 } from "../../../CommonCss/paagecss";
import { formBtn, formHead2, formInput } from "../../../CommonCss/formcss";


const SignUp_Email = ({ navigation }) => {
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
      <Text style={formHead2}>Create an new account</Text>
      <TextInput placeholder="Enter your Email" style={formInput}/>

      <Text  style={formBtn} onPress={()=>navigation.navigate("SignUp_verificationCode")}>Next</Text>
    </View>
  );
};

export default SignUp_Email;

const styles = StyleSheet.create({
  textData: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 2,
  },
});
