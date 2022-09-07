import useMain from 'hooks/useMain';
import useQueriesTest from 'hooks/useQueriesTest';

import type { FC } from 'react';

const Main: FC = () => {
  const { firstLoading, secondLoading, thirdLoading, fourthLoading, first, second, third, fourth } = useMain();
  const { result } = useQueriesTest();
  console.log(result);
  return (
    <>
      {firstLoading || secondLoading || thirdLoading || fourthLoading ? 'loading...' : '데이터 로딩 완료'}
      {first && <div>{first.description}</div>}
      {second && <div>{second.description}</div>}
      {third && <div>{third.description}</div>}
      {fourth && <div>{fourth.description}</div>}
    </>
  );
};

export default Main;
