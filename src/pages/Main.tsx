import useMain from 'hooks/useMain';

import type { FC } from 'react';

const Main: FC = () => {
  const { firstLoading, secondLoading, thirdLoading, fourthLoading, first, second, third, fourth } = useMain();

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
