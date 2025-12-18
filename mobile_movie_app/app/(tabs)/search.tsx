import MovieCard from "@/components/MovieCard";
import { images } from "@/constants/images";
import useFetch from "@/services/useFetch";
import React from "react";
import { FlatList, Image, View } from "react-native";
import { fetchMovies } from "./api";

const Search = () => {
  const {
    data: movies,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovies({ query: "" }));
  return (
    <View className=" flex-1 bg-primary">
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
      />
    </View>
  );
};

export default Search;
