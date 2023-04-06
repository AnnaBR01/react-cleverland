import styled from 'styled-components';

import { Color, ContainerFlex, Media } from '../../ui';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0px;
  border-top: 1px solid ${Color.GrayType3};
  background: ${Color.White};

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;

  ${Media.SM} {
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

const Text = styled.h3`
  ${Media.SM} {
    text-align: center;
  }
`;

const IconContainer = styled(ContainerFlex)`
  grid-gap: 28px;
`;

export { StyledFooter, Text, IconContainer, Box };
