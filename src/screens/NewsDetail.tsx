import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Article } from '../../types';

type Props = {
  route: RouteProp<{ params: { article: Article } }, 'params'>;
};

const NewsDetail = ({ route }: Props) => {
  const { article } = route.params;

  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">{article.title}</Text>
      <Image
        source={{ uri: article.urlToImage }}
        className="w-full h-64 rounded-lg mb-4"
        resizeMode="cover"
      />
      <Text className="text-lg mb-4">{article.content}</Text>
      <Text className="text-gray-500">
        Published at: {new Date(article.publishedAt).toLocaleDateString()}
      </Text>
    </ScrollView>
  );
};

export default NewsDetail;