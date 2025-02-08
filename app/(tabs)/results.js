import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { imageUri } = route.params || {};

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Results</Text>
      {imageUri && <Image source={{ uri: imageUri }} className="w-64 h-64 rounded-lg" />}
      <Text className="mt-4 text-lg text-gray-600">
        AI-powered analysis coming soon...
      </Text>
      <TouchableOpacity
        className="mt-6 bg-green-500 px-6 py-3 rounded-xl"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-white font-semibold text-lg">Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}
