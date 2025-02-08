import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-6">Welcome to NutriScan 🍎</Text>
      <TouchableOpacity
        className="bg-green-500 px-6 py-3 rounded-xl"
        onPress={() => router.push("/tabs/ScanScreen")}
      >
        <Text className="text-white font-semibold text-lg">Scan Food Label</Text>
      </TouchableOpacity>
    </View>
  );
}
