import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { css } from '@emotion/react';

import type { FC } from 'react';

const QUERY_KEY_REPO_DATA = 'repoData';

const Header: FC = () => {
  const { isLoading, error, data } = useQuery([QUERY_KEY_REPO_DATA], () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json())
  );

  console.log(isLoading, error, data);
  return (
    <header
      css={css`
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
      `}
    >
      <strong
        css={css`
          cursor: pointer;
          margin-left: 30px;
          padding: 16px 0;
          font-size: 20px;
        `}
      >
        Title 🐝
      </strong>
      <span>로그인</span>
    </header>
  );
};

export default memo(Header);
