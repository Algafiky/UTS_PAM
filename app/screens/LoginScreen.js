import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { keyboardProps } from "react-native-web/dist/cjs/modules/forwardedProps";

import colors from "../config/colors";

function LoginScreen({ navigation }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.textDefault}>
          Please Enter Your Username and Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          caretHidden={true}
          onChangeText={(val) => setName(val)}
        />
        <Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          caretHidden={true}
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
        <View style={styles.loginButton}>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Feather name="home" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <AntDesign name="back" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: colors.bgColor,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 15,
    padding: 10,
    width: 200,
    color: "white",
    bottom: "20%",
  },
  loginButton: {
    width: 200,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginBottom: 10,
    bottom: 50,
  },
  textDefault: {
    alignItems: "flex-end",
    color: "white",
    fontSize: 30,
    marginBottom: 30,
    position: "absolute",
    bottom: "75%",
  },
  textButton: {
    textAlign: "center",
    justifyContent: "center",
    padding: 5,
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
});

export default LoginScreen;
