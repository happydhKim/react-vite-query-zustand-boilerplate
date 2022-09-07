import { useQueries } from '@tanstack/react-query';
import { getItemDetailInformation } from 'services/mainService';

const useQueriesTest = () => {
  const queries = [1, 2, 3, 4].map((item) => {
    return {
      queryKey: ['detailInformation', item],
      queryFn: () => getItemDetailInformation(item),
      onError: (err: unknown) => {
        console.error(err);
      },
      retry: 10,
      staleTime: Infinity,
    };
  });
  const results = useQueries({ queries });

  return {
    data: results,
  };
};

export default useQueriesTest;
