import styled from 'styled-components';

import { ContainerFlexBeetween, Media } from '../../ui';

const StyledSuccess = styled(ContainerFlexBeetween)`
  position: fixed;
  top: 66px;
  left: 0;
  z-index: 5;
  width: 100%;

  ${Media.MD} {
    top: 62px;
    padding-inline: 64px;
  }

  ${Media.SM} {
    top: 56px;
    padding-inline: 20px;
  }
`;

const Container = styled(ContainerFlexBeetween)`
  max-width: 1110px;
  width: 1110px;
  grid-gap: 15px;
  margin: 0 auto;
  padding: 24px 32px;
  background-color: #ebf9f1;
  border: 1.5px solid #00ca71;
  border-radius: 5px;

  ${Media.MD} {
    padding: 24px 16px;
  }

  ${Media.SM} {
    align-items: flex-start;
    padding: 12px 16px;
  }
`;

const Text = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  ${Media.MD} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const ButtonClose = styled.button``;

export { StyledSuccess, Text, Container, ButtonClose };
