import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // Login Forms
  const loginForm = useForm<LoginFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <SafeAreaView className=" flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1 px-6"
          showsVerticalScrollIndicator={false}
        >
          {/* Header  */}
          <View className="mt-16 mb-8">
            <Text className=" text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </Text>
            <Text className=" text-gray-900 text-base">
              Sign in to your account
            </Text>
          </View>

          {/* Form fields  */}
          <View className=" gap-6 mt-8">
            {/* Email Field  */}
            <View className="mt-6 ">
              <Text className=" text-gray-800 font-medium text-base mb-2">
                Email
              </Text>
              <Controller
                control={loginForm.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                    message: "Please enter a valid email",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-4 border ${loginForm.formState.errors.email ? "border-red-500" : "border-gray-200"}`}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={"9CA3AF"}
                    />
                    <TextInput
                      className="flex-1 ml-3 text-gray-800"
                      placeholder="Enter your email"
                      placeholderTextColor="#9CA3AF"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      //   editable={!loginMutation.isPending}
                    />
                    {loginForm.formState.errors.email?.message && (
                      <Text className="text-red-500 text-sm mt-1">
                        {loginForm.formState.errors.email?.message}
                      </Text>
                    )}
                  </View>
                )}
              />
            </View>

            {/* Password Field  */}
            <View className=" mt-2 ">
              <Text className=" text-gray-800 font-medium text-base mb-2">
                Password
              </Text>
              <Controller
                control={loginForm.control}
                name="password"
                rules={{
                  required: "Password is required",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-4 border ${loginForm.formState.errors.password ? "border-red-500" : "border-gray-200"}`}
                  >
                    <Ionicons
                      name="lock-closed-outline"
                      size={20}
                      color={"9CA3AF"}
                    />
                    <TextInput
                      className="flex-1 ml-3 text-gray-800"
                      placeholder="Enter your password"
                      placeholderTextColor="#9CA3AF"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      secureTextEntry={!showPassword}
                      //   editable={!loginMutation.isPending}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      // disabled={loginMutation.isPending}
                    >
                      <Ionicons
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={20}
                        color={"9CA3AF"}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
              {loginForm.formState.errors.password?.message && (
                <Text className="text-red-500 text-sm mt-1">
                  {loginForm.formState.errors.password?.message}
                </Text>
              )}
            </View>

            {/* Forgot Password  */}
            <TouchableOpacity
              className="self-end mt-2"
              onPress={() => router.push("/(routes)/forgot-password")}
              // disabled={loginMutation.isPending}
            >
              <Text className=" text-blue-600 font-medium ">
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>

          {/* Submit Button  */}
          <TouchableOpacity
            className={` rounded-xl py-4 mt-8 ${
              loginForm.formState.isValid ? "bg-blue-600" : "bg-gray-400"
            }`}
            // disabled={loginForm.handleSubmit(onlofinForm)}
            // disabled={!loginForm.formState.isValid || LogingMutation.isValid}
          >
            <Text className=" text-white text-center text-lg font-medium">
              {"Sign In"}
            </Text>
          </TouchableOpacity>

          {/* Divider  */}
          <View className="flex-row items-center my-8">
            <View className=" flex-1 h-px bg-gray-500 "></View>
            <Text className=" mx-4 text-gray-500 font-medium text-sm ">
              Or using other method
            </Text>
            <View className=" flex-1 h-px bg-gray-500 "></View>
          </View>

          {/* Socail Login Buttons  */}
          <View className=" flex-col gap-4 mb-8 ">
            {/* Facebook Sing In  */}
            <TouchableOpacity className=" flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4">
              <View className="w-6 h-6 mr-3">
                <Image
                  source={{
                    uri: "https://developers.google.com/identity/images/g-logo.png",
                  }}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-gray-800 text-base">
                Sign In with Google?
              </Text>
            </TouchableOpacity>

            {/* Facebook Sing In  */}
            <TouchableOpacity className=" flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4">
              <Ionicons
                name="logo-facebook"
                size={24}
                color="#1877F2"
                className="mr-3"
              />
              <Text className="text-gray-800 text-base">
                Sign In with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          {/* Switch to Sign Up Links */}
          <View className="flex-row justify-center mb-8">
            <Text>Don&apos;t have an account</Text>
          </View>
          <TouchableOpacity className="text-blue-600 font-medium text-sm">
            Sign Up
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
