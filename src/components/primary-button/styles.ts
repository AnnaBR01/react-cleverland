import styled from 'styled-components';

import { BUTTON_SMALL, Color, Media } from '../../ui';

interface IProps {
  large: number;
  middle: number;
  small: number;
  padding: number;
  fontSize: number;
  isBig: boolean;
  allWidth: boolean;
}

const StyledPrimaryButton = styled.button.attrs<IProps>((props) => ({
  large: `${props.large}px`,
  middle: `${props.middle}px`,
  small: `${props.small}px`,
  padding: `${props.padding}px`,
  fontSize: `${props.fontSize}px`,
}))<IProps>`
  width: ${({ allWidth, large }) => (allWidth ? '100%' : large)};
  padding-block: ${({ padding }) => padding};
  padding-inline: 15px;
  background: ${Color.ButtonHover};
  border-radius: 20px;
  color: ${Color.White};
  ${BUTTON_SMALL}
  font-size: ${({ fontSize }) => fontSize};

  &:disabled {
    background: ${Color.GrayType4};
  }

  ${Media.MD} {
    width: ${({ isBig, middle, allWidth }) => (isBig || allWidth ? '100%' : middle)};
  }

  ${Media.SM} {
    width: 100%;
  }
`;

export { StyledPrimaryButton };
