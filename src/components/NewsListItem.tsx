import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Article } from "../../types";
import { useNavigation } from "@react-navigation/native";

type Props = {
  article: Article;
};

const NewsListItem = ({ article }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="p-4 border-b border-gray-200"
      onPress={() => navigation.navigate("NewsDetail", { article })}
    >
      <Image
        source={{ uri: article.urlToImage }}
        className="w-full h-48 rounded-lg mb-2"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold">{article.title}</Text>
      <Text className="text-gray-600">{article.description}</Text>
    </TouchableOpacity>
  );
};

export default NewsListItem;
