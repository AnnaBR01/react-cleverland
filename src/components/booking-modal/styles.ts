import styled from 'styled-components';

import { Color, Media } from '../../ui';

const Title = styled.h6`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  white-space: pre-wrap;
  text-align: center;

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.GrayType5};
  border-radius: 50%;

  ${Media.SM} {
    width: 32px;
    height: 32px;
    top: 16px;
    right: 16px;
  }
`;

export { Title, CloseButton };
