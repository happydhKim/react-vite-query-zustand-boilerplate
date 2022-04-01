import { useQuery } from 'react-query';
import { getFirst, getSecond, getThird, getFourth } from 'services/mainService';

const useMain = () => {
  const {
    isLoading: firstLoading,
    data: first,
    isError,
    error,
  } = useQuery(['first'], async () => getFirst(), {
    retry: 5,
    onError: (err) => {
      console.error(err);
    },
  });
  const { isLoading: secondLoading, data: second } = useQuery(
    ['second', first],
    async () => (first ? getSecond(first.depth) : null),
    {
      enabled: !!first,
      retry: 3,
      onError: (err) => {
        console.error(err);
      },
    }
  );
  const { isLoading: thirdLoading, data: third } = useQuery(
    ['third', second],
    async () => (second ? getThird(second.depth) : null),
    { enabled: !!second, retry: 3 }
  );
  const { isLoading: fourthLoading, data: fourth } = useQuery(
    ['fourth', third],
    async () => (third ? getFourth(third.depth) : null),
    { enabled: !!third, retry: 3 }
  );
  console.log(isError, error);
  return {
    firstLoading,
    secondLoading,
    thirdLoading,
    fourthLoading,
    first,
    second,
    third,
    fourth,
  };
};

export default useMain;
