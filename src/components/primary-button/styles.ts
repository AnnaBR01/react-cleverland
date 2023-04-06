import styled from 'styled-components';

import { Color } from '../../ui';
import { Media } from '../../ui/media';

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
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  border-radius: 20px;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 150%;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #ffffff;

  &:disabled {
    background: ${Color.GrayType4};
  }

  ${Media.MD} {
    width: ${({ isBig, middle, allWidth }) => (isBig || allWidth ? '100%' : middle)};
  }

  ${Media.SM} {
    width: 100%;
    font-size: 12px;
  }
`;

export { StyledPrimaryButton };
