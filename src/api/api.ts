import axios from 'axios'; 

const API_KEY = process.env.EXPO_PUBLIC_API_KEY; 

export const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  params: {
    apiKey: API_KEY,
    country: 'us',
  },
});

export const fetchNews = async () => {
  const response = await newsApi.get('/top-headlines');
  return response.data.articles;
};