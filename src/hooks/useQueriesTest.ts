import { useQueries } from '@tanstack/react-query';
import { getItemDetailInformation } from 'services/mainService';

const useQueriesTest = (): any => {
  const queries = [1, 2, 3, 4].map((item) => {
    return {
      queryKey: ['detailInformation', item],
      queryFn: () => getItemDetailInformation(item),
      onError: (err: unknown) => {
        console.error(err);
      },
    };
  });
  const results = useQueries({ queries });

  return {
    results,
  };
};

export default useQueriesTest;
