import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen name="not-found" options={{}} />
      </Stack>
    </>
  );
}
