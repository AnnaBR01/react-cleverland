import styled from 'styled-components';

import { Color, Media } from '../../ui';

const StyledSeparator = styled.div`
  width: 350px;
  height: 1px;
  background: ${Color.GrayType4};
  margin-block: 16px;

  ${Media.MD} {
    width: 307px;
  }

  ${Media.SM} {
    width: 100%;
    margin-block: 8px;
    background: ${Color.GrayType5};
  }
`;

export { StyledSeparator };
