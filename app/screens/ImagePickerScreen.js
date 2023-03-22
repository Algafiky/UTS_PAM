import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "./CameraScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import colors from "../config/colors";

export default function ImagePickerScreen({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      )}
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.buttonText}>Pick An Image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Text style={styles.buttonText}>Open Camera</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    justifyContent: "center",
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
    position: "absolute",
    bottom: 0,
  },
  textButton: {
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
  loginButton: {
    width: 200,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    padding: 5,
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
});
