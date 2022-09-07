import { useQuery } from '@tanstack/react-query';
import { getFirst, getSecond, getThird, getFourth } from 'services/mainService';

const useMain = () => {
  const {
    isLoading: firstLoading,
    data: first,
    isError,
    error,
  } = useQuery(['first'], () => getFirst(), {
    retry: 10,
    onError: (err) => {
      console.error(err);
    },
  });
  const { isLoading: secondLoading, data: second } = useQuery(
    ['second', first],
    () => (first ? getSecond(first.depth) : null),
    {
      enabled: !!first,
      retry: 10,
      onError: (err) => {
        console.error(err);
      },
    }
  );
  const { isLoading: thirdLoading, data: third } = useQuery(
    ['third', second],
    () => (second ? getThird(second.depth) : null),
    { enabled: !!second, retry: 10 }
  );
  const { isLoading: fourthLoading, data: fourth } = useQuery(
    ['fourth', third],
    () => (third ? getFourth(third.depth) : null),
    { enabled: !!third, retry: 10 }
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
