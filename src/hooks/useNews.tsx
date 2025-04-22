import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../api/api';

const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });
};

export default useNews;
