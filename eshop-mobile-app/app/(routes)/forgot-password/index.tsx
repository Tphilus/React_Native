import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
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

interface ForgotPasswordFormData {
  email: string;
}

export default function ForgotPasswordScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitted] = useState<boolean>(false);
  // Login Forms
  const ForgotPasswordForm = useForm<ForgotPasswordFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const handleBackToLogin = () => {
    router.back();
  };

  const onForgotPasswordSubmit = (data: ForgotPasswordFormData) => {
    console.log("Forgot Password Data: ", data);
    setIsSubmitted(true);
  };

  const handleResendEmail = () => {
    const email = forgotPasswordFrom.getValues("email");
    if (email) {
      console.log("Resend email to: ", email);
    }
  };

  if (isSubmitting) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 px-6 justify-center">
          {/* Success Icons  */}
          <View className="items-center mb-8">
            <View className=" w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-6">
              <Ionicons name="mail-outline" size={40} color="#10B981" />
            </View>
          </View>
          <Text className="text-2xl font-bold text-green-900 mb-4 text-center">
            Check Your Email
          </Text>
          <Text className=" text-gray-500 text-base  ">
            We&apos;ve sent a password reset
            <Text className="font-medium text-gray-700">
              {/* {forgotPasswordFrom.getValues("email")} */}
            </Text>
          </Text>
        </View>

        {/* Intructions  */}
        <View className=" bg-gray-50 rounded-xl px-4 mb-8 ">
          <Text className="text-blue-800 font-medium text-sm mb-2">
            What&apos;s next?{" "}
          </Text>
          <Text className=" text-blue-700 text-sm leading-5">
            1. Check your email inbox {"\n"}
            2. Click on the reset link in the email {"\n"}
            3. Create a new password {"\n"}
            4. Sign in with your new password
          </Text>
        </View>

        {/* Resend Email  */}
        <TouchableOpacity
          onPress={handleResendEmail}
          className=" bg-blue-600 rounded-xl py-4 "
        >
          <Text className=" text-white text-center text-lg font-semibold ">
            Resend Email
          </Text>
        </TouchableOpacity>

        {/* Back to Login  */}
        <TouchableOpacity
          onPress={handleBackToLogin}
          className=" border border-gray-300 bg-blue-600 rounded-xl py-4 "
        >
          <Text className=" text-gray-700 text-center text-lg font-semibold ">
            Back to Login
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

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
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleBackToLogin}
              className="mr-2 p-2 -ml-2"
            >
              <Ionicons name="arrow-back" size={24} color="#374151" />
            </TouchableOpacity>
            <Text className="text-xl font-semibold text-gray-900">
              Forgot Password
            </Text>
          </View>

          {/* Main Content */}
          <View className="mt-8">
            <Text className="text-3xl font-bold text-gray-900 mb-4">
              Reset Your Password
            </Text>
            <Text className=" text-gray-500 text-base mb-8 leading-6">
              Enter your email address and we&apos;all send you a link reset
              your password.
            </Text>
          </View>

          <View>
            {/* Email Field  */}
            <View className=" mt-4">
              <Text className=" text-gray-800 font-medium text-base mb-2">
                Email Address
              </Text>
              <Controller
                control={ForgotPasswordForm.control}
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
                    className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-4 border ${ForgotPasswordForm.formState.errors.email ? "border-red-500" : "border-gray-200"}`}
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
                    {ForgotPasswordForm.formState.errors.email?.message && (
                      <Text className="text-red-500 text-sm mt-1">
                        {ForgotPasswordForm.formState.errors.email?.message}
                      </Text>
                    )}
                  </View>
                )}
              />
            </View>
          </View>

          {/* Submit Button  */}
          <TouchableOpacity
            className={` rounded-xl py-4 my-6 ${
              ForgotPasswordForm.formState.isValid
                ? "bg-blue-600"
                : "bg-gray-400"
            }`}
            // disabled={ForgotPasswordForm.handleSubmit(onlofinForm)}
            // disabled={!ForgotPasswordForm.formState.isValid || LogingMutation.isValid}
          >
            <Text className=" text-white text-center text-lg font-medium">
              Send Reset Link
            </Text>
          </TouchableOpacity>

          {/* Help Text */}
          <View className="rounded-xl p-4">
            <Text className="text-gray-600 text-sm text-center leading-5">
              Remember your password{" "}
              <Text
                className="text-blue-600 font-semibold"
                onPress={handleBackToLogin}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
