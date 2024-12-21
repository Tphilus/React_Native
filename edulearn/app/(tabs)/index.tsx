import { HelloWave } from "@/components/HelloWave";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Category, SearchResponse } from "@/interface";
import axios from "axios";
import { password, username } from "@/utils/apikeys";
import { useQuery } from "@tanstack/react-query";

const categories: Category = [
  { id: "business", name: "Business", icon: "briefcase" },
  { id: "tech", name: "Tech", icon: "hardware-chip" },
  { id: "design", name: "Design", icon: "color-palette" },
  { id: "marketing", name: "Marketing", icon: "megaphone" },
  { id: "health", name: "Health", icon: "fitness" },
  { id: "music", name: "Music", icon: "musical-notes" },
  { id: "lifestyle", name: "Lifestyle", icon: "heart" },
];

const fetchCourses = async (searchTerm: string): Promise<SearchResponse> => {
  const response = await axios.get(`https://www.udemy.com/api-2.0/courses/`, {
    params: { search: searchTerm },

    auth: {
      username: username,
      password: password,
    },
  });

  return response.data
};

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Business");

  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ["searchCourses", selectedCategory],
    queryFn: () => fetchCourses(selectedCategory),
    enabled: true,
  })

  const renderCategory = ({ item }: { item: Category }) => (
    <Pressable
      onPress={() => setSelectedCategory(item.id)}
      className="mr-4 p-2 rounded-full items-center flex-col gap-4"
    >
      <View
        className={`p-4 rounded-full flex-row items-center ${
          selectedCategory === item.id
            ? "border border-blue-700"
            : "border border-gray-400"
        } `}
      >
        <Ionicons
          name={item.icon as any}
          size={24}
          color={selectedCategory === item.id ? "#1d4ed8" : "gray"}
        />
      </View>
      <Text
        style={{
          fontFamily:
            selectedCategory === item.id ? "BarlowBold" : "BarlowMedium",
        }}
      >
        {item.name}
      </Text>
    </Pressable>
  );

  return (
    <View className=" flex-1 bg-white">
      {/* Greetings  */}
      <View className=" px-6 pt-16 pb-6" style={{ backgroundColor: "#2563eb" }}>
        <Animated.View className="flex-row justify-between items-center">
          <View>
            <View className="flex-row items-end gap-2">
              <Text
                className=" text-white text-lg"
                style={{
                  fontFamily: "BarlowMedium",
                }}
              >
                Good Morning{" "}
              </Text>

              <View>
                <HelloWave />
              </View>
            </View>

            <Text
              className=" text-white text-2xl "
              style={{ fontFamily: "BarlowBold" }}
            >
              Marisson Kalao
            </Text>
          </View>

          <View>
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={30}
              color="white"
            />
          </View>
        </Animated.View>

        {/* Search Area  */}
        <Pressable onPress={() => router.push("/explore")}>
          <View className=" flex-row items-center bg-white/20 rounded-2xl p-4 mt-4">
            <MaterialCommunityIcons name="magnify" size={20} color="white" />
            <Text
              className=" text-white ml-2"
              style={{ fontFamily: "BarlowMedium" }}
            >
              What do you want to learn
            </Text>
          </View>
        </Pressable>
      </View>

      <ScrollView className=" flex-1 bg-white gap-4 ">
        {/* Categories  */}
        <Animated.View
          className="gap-6 "
          entering={FadeInDown.duration(500).delay(200).springify()}
        >
          <View className=" flex-row justify-between px-6 pt-4 items-center">
            <Text className=" text-xl " style={{ fontFamily: "BarlowBold" }}>
              Explore Topics
            </Text>
            <Text
              className=" text-blue-600"
              style={{
                fontFamily: "BarlowSemiBold",
              }}
            >
              See More
            </Text>
          </View>

          {/* Categories List  */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className=" mb-4 pl-4"
          >
            {categories.map((category: any) => (
              <View key={category.id} className="">
                {renderCategory({ item: category })}
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
