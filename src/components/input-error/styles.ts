import styled from 'styled-components';

import { Color, INFO_LARGE, Media } from '../../ui';

const StyledInputError = styled.p`
  position: absolute;
  top: 56px;
  left: 12px;
  color: ${Color.Negative};
  ${INFO_LARGE}

  ${Media.SM} {
    margin-bottom: 10px;
  }
`;

export { StyledInputError };
