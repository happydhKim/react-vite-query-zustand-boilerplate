import { memo } from 'react';
import { css } from '@emotion/react';

import type { FC } from 'react';
import type { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {
  const { color, size, children, disabled, onClick } = props;
  
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      css={css`
        cursor: pointer;
        height: 40px;
        width: 100%;
        text-align: center;
        border: 1px solid #ffde4d;
        border-radius: 5px;
        background-color: #fbca04;
        color: #191f28;
        padding: 0 10px;
        &:hover {
          background-color: #ffde4d;
        }
      `}
    >
      {children}
    </button>
  );
};

export default memo(Button);
