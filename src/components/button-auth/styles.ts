import styled from 'styled-components';

import { BUTTON_LARGE, Color, Media } from '../../ui';

interface IProps {
  marginTopLg?: number;
  marginBottom?: number;
  marginTopSm?: number;
}

const StyledButtonAuth = styled.button.attrs<IProps>((props) => ({
  marginTopLg: `${props.marginTopLg}px`,
  marginBottom: `${props.marginBottom}px`,
  marginTopSm: `${props.marginTopSm}px`,
}))<IProps>`
  width: 100%;
  padding: 14px;
  margin-top: ${({ marginTopLg }) => marginTopLg};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  background: ${Color.ButtonHover};
  border-radius: 30px;
  color: ${Color.White};
  ${BUTTON_LARGE}

  &:disabled {
    background: ${Color.GrayType4};
  }

  ${Media.SM} {
    padding: 11px;
    margin-top: ${({ marginTopSm }) => marginTopSm};
    font-size: 12px;
    line-height: 18px;
  }
`;

export { StyledButtonAuth };
