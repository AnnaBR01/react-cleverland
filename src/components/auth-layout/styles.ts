import styled from 'styled-components';

import { Color, H3, H4, Media } from '../../ui';
import { ContainerFlexColumn } from '../../ui/containers';

interface IPropsAuth {
  gapLg: number;
  gapSm: number;
}

interface IPropsForm {
  paddingTop: number;
}

const StyledAuthLayout = styled(ContainerFlexColumn).attrs<IPropsAuth>((props) => ({
  gapLg: `${props.gapLg}px`,
  gapSm: `${props.gapSm}px`,
}))<IPropsAuth>`
  height: 100vh;
  align-items: center;
  justify-content: center;
  grid-gap: ${({ gapLg }) => gapLg};
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);

  ${Media.SM} {
    justify-content: start;
    grid-gap: ${({ gapSm }) => gapSm};
    padding-top: 16px;
    padding-inline: 16px;
  }
`;

const Logo = styled.p`
  color: ${Color.White};
  ${H3}
`;

const Title = styled.h3`
  ${H4}
`;

const StyledForm = styled.div.attrs<IPropsForm>((props) => ({
  paddingTop: `${props.paddingTop}px`,
}))<IPropsForm>`
  position: relative;
  max-width: 528px;
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: 48px;
  padding-inline: 56px;
  background: ${Color.White};
  border-radius: 16px;

  ${Media.SM} {
    max-width: 100%;
    padding-bottom: 24px;
    padding-inline: 16px;
  }
`;

export { StyledAuthLayout, Logo, StyledForm, Title };
