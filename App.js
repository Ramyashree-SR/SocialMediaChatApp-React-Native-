import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./SRC/Screens/LoginSignUp/Login/Login";
import SignUp_Email from "./SRC/Screens/LoginSignUp/SignUp/SignUp_Email";
import SignUp_verificationCode from "./SRC/Screens/LoginSignUp/SignUp/SignUp_verificationCode";
import SignUp_ChooseUserName from "./SRC/Screens/LoginSignUp/SignUp/SignUp_ChooseUserName";
import SignUp_ChoosePassword from "./SRC/Screens/LoginSignUp/SignUp/SignUp_ChoosePassword";
import SignUp_AccountCreated from "./SRC/Screens/LoginSignUp/SignUp/SignUp_AccountCreated";

import ForgetPassword_VerificationCode from "./SRC/Screens/LoginSignUp/ForgetPassword/ForgetPassword_VerificationCode";

import ForgetPassword_AccountRecoverd from "./SRC/Screens/LoginSignUp/ForgetPassword/ForgetPassword_AccountRecoverd";
import ForgetPassword_Email from "./SRC/Screens/LoginSignUp/ForgetPassword/ForgetPassword_Email";
import ForgetPassword_ChoosePassword from "./SRC/Screens/LoginSignUp/ForgetPassword/ForgetPassword_ChoosePassword";
import MainPage from "./SRC/Screens/MainPage/MainPage";
import SearchPage from "./SRC/Screens/MainPage/SearchPage";
import NotificationPage from "./SRC/Screens/MainPage/NotificationPage";
import AllChats from "./SRC/Screens/ChatSection/AllChats";
import MyProfile from "./SRC/Screens/Profile/MyProfile";
import Settings from "./SRC/Screens/Settings/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen name="SignUp_Email" component={SignUp_Email} />
        <Stack.Screen
          name="SignUp_verificationCode"
          component={SignUp_verificationCode}
        />
        <Stack.Screen
          name="SignUp_ChooseUserName"
          component={SignUp_ChooseUserName}
        />
        <Stack.Screen
          name="SignUp_ChoosePassword"
          component={SignUp_ChoosePassword}
        />
        <Stack.Screen
          name="SignUp_AccountCreated"
          component={SignUp_AccountCreated}
        />

        <Stack.Screen
          name="ForgetPassword_Email"
          component={ForgetPassword_Email}
        />
        <Stack.Screen
          name="ForgetPassword_VerificationCode"
          component={ForgetPassword_VerificationCode}
        />
        <Stack.Screen
          name="ForgetPassword_ChoosePassword"
          component={ForgetPassword_ChoosePassword}
        />
        <Stack.Screen
          name="ForgetPassword_AccountRecoverd"
          component={ForgetPassword_AccountRecoverd}
        />

        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AllChats"
          component={AllChats}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="NotificationPage"
          component={NotificationPage}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
