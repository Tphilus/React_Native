import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
}

const SearchBar = ({ placeholder, onPress, value }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className=" size-5"
        resizeMethod="resize"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className=" flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
