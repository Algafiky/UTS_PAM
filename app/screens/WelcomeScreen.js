import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  To,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.logoText}>Nura.Shope</Text>
      </View>

      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.bgColor,
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    padding: 5,
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
  loginButton: {
    width: 200,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  logo: {
    width: 150,
    height: 150,
    fontSize: 50,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    padding: 20,
  },

  logoText: {
    textAlign: "center",
    justifyContent: "center",
    padding: 20,
    color: "white",
    fontSize: 20,
  },

  registerButton: {
    width: 200,
    height: 60,
    backgroundColor: colors.secondary,
    marginBottom: 20,
    margin: 20,
    borderRadius: 50,
  },
});

export default WelcomeScreen;
