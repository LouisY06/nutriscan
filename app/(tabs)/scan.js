import { Camera } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View className="flex-1">
      <Camera ref={cameraRef} style={{ flex: 1 }} />
      <TouchableOpacity
        className="absolute bottom-10 bg-blue-500 px-6 py-3 rounded-full self-center"
        onPress={() => console.log("Capture button pressed")}
      >
        <Text className="text-white font-semibold text-lg">Capture</Text>
      </TouchableOpacity>
    </View>
  );
}
