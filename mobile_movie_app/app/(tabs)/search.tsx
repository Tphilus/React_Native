import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/services/useFetch";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { fetchMovies } from "./api";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className=" flex-1 absolute z-0 w-full"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item?.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className=" w-full flex-row justify-center items-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar placeholder="Search movies..." value={searchQuery}  />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-3 my-3   ">
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Search Result for{" "}
                <Text className=" text-accent">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default Search;
