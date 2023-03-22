import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import colors from "../config/colors";

export default function CameraScreen() {
  let cameraRef = useRef();
  const [hasCameraPermisison, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermision, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermisison === undefined) {
    return <Text>Requesting Permission...</Text>;
  } else if (!hasCameraPermisison) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.{" "}
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={sharePic}>
            <Feather name="share-2" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={savePhoto}>
            {hasMediaLibraryPermision ? (
              <Feather name="save" size={30} color="white" />
            ) : undefined}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPhoto(undefined)}>
            <Feather name="trash" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.cameraContainer} ref={cameraRef}>
      <View style={styles.buttonContainerTP}>
        <TouchableOpacity onPress={takePic}>
          <Feather name="camera" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cameraContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "contain",
    flex: 1,
  },
  buttonContainerTP: {
    backgroundColor: colors.bgColor,
    alignItems: "center",
    width: "20%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 50,
    margin: 20,
  },
  buttonContainer: {
    backgroundColor: colors.bgColor,
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});
