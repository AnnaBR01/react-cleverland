import styled from 'styled-components';

import { ContainerFlex, Media } from '../../ui';

const StyledDinamicStars = styled(ContainerFlex)`
  grid-gap: 19px;

  ${Media.SM} {
    grid-gap: 17px;
  }
`;

const ButtonStar = styled.button``;

export { StyledDinamicStars, ButtonStar };
