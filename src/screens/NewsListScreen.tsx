import React from 'react';
import { FlatList, TouchableOpacity, ActivityIndicator, RefreshControl, Text } from 'react-native';
import useNews from '../hooks/useNews';
import NewsListItem from '../components/NewsListItem';

const NewsListScreen = () => {
  const { data, isLoading, isError, refetch } = useNews();

  if (isLoading) return <ActivityIndicator size="large" className="flex-1" />;
  if (isError) return <Text className="flex-1 text-center">Error loading news</Text>;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsListItem article={item} />}
      keyExtractor={(item, index) => item.url + index}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    />
  );
};

export default NewsListScreen;
