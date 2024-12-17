import { Pressable, StyleSheet, Text } from "react-native";
import React, { act } from "react";
import { router } from "expo-router";

interface ButtonProps {
  title: string;
  action?: () => void;
}

export default function Button({ title, action }: ButtonProps) {
  return (
    <Pressable
      onPress={action}
      style={{
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
        width: "75%",
        backgroundColor: "#1E40AF", // Blue color
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
        {title}
      </Text>
    </Pressable>
  );
}
