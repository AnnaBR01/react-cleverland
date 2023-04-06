import styled from 'styled-components';

import { Color, ContainerFlexColumn, ContainerFlexRowCenter, Media } from '../../ui';

const StyledModalOuter = styled(ContainerFlexRowCenter)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 3;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);

  ${Media.SM} {
    padding: 56px 16px;
  }
`;

const StyledModal = styled(ContainerFlexColumn)`
  position: relative;
  max-width: 528px;
  width: 100%;
  align-items: center;
  grid-gap: 32px;
  padding: 48px 56px;
  background: ${Color.White};
  border-radius: 16px;

  ${Media.SM} {
    max-width: 100%;

    grid-gap: 24px;
    padding: 42px 16px 32px;
  }
`;

export { StyledModalOuter, StyledModal };
