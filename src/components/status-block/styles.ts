import styled from 'styled-components';

import { BODY_LARGE, BUTTON_LARGE, Color, ContainerFlexColumn, H3, Media } from '../../ui';

interface IProps {
  gapLg: number;
  gapSm: number;
}

const StyledAuthLayout = styled(ContainerFlexColumn).attrs<IProps>((props) => ({
  gapLg: `${props.gapLg}px`,
  gapSm: `${props.gapSm}px`,
}))<IProps>`
  height: 100vh;
  align-items: center;
  grid-gap: ${({ gapLg }) => gapLg};
  padding-top: 180px;
  background: ${Color.ButtonHover};

  ${Media.SM} {
    grid-gap: ${({ gapSm }) => gapSm};
    padding-top: 16px;
    padding-inline: 16px;
  }
`;

const Logo = styled.p`
  ${H3}
  color: ${Color.White};
`;

const StyledStatusBlock = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 32px;
  padding: 48px 96px;
  background: ${Color.White};
  border-radius: 16px;

  ${Media.SM} {
    max-width: 100%;
    padding: 42px 16px 32px;
    grid-gap: 24px;
  }
`;

const Title = styled.h3`
  ${H3}
`;

const Message = styled.p`
  text-align: center;
  ${BODY_LARGE}
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: ${Color.ButtonHover};
  border-radius: 30px;
  ${Color.White}
  ${BUTTON_LARGE}


  ${Media.SM} {
    padding: 11px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export { StyledAuthLayout, Logo, StyledStatusBlock, Title, Message, Button };
