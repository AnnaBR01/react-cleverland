import styled from 'styled-components';

import { Color, ContainerFlexBeetween, Media, SUBTITLE_LARGE } from '../../ui';

const StyledError = styled(ContainerFlexBeetween)`
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
  background-color: ${Color.NegativeBackground};
  border: 1.5px solid ${Color.Negative};
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
  ${SUBTITLE_LARGE}

  ${Media.MD} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const ButtonClose = styled.button``;

export { StyledError, Text, Container, ButtonClose };
