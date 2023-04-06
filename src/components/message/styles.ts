import styled from 'styled-components';

import { Color, INFO_LARGE, Media } from '../../ui';

const StyledMessage = styled.p`
  position: absolute;
  top: 56px;
  left: 12px;
  color: ${Color.GrayType2};
  ${INFO_LARGE}

  ${Media.SM} {
    margin-bottom: 10px;
  }
`;

export { StyledMessage };
