import styled from 'styled-components';

import { BUTTON_SMALL, Color, Media } from '../../ui';

interface IProps {
  large: number;
  middle: number;
  small: number;
  padding: number;
  fontSize: number;
  isBig: boolean;
}

const StyledButtonOccupiedUntil = styled.button.attrs<IProps>((props) => ({
  large: `${props.large}px`,
  middle: `${props.middle}px`,
  small: `${props.small}px`,
  padding: `${props.padding}px`,
  fontSize: `${props.fontSize}px`,
}))<IProps>`
  width: ${({ large }) => large};
  padding-block: ${({ padding }) => padding};
  padding-inline: 15px;
  background: ${Color.GrayType5};
  border: 1px solid ${Color.GrayType3};
  border-radius: 20px;
  color: ${Color.GrayType2};
  ${BUTTON_SMALL}
  font-size: ${({ fontSize }) => fontSize};

  ${Media.MD} {
    width: ${({ middle }) => middle};
  }

  ${Media.SM} {
    width: 100%;
  }
`;

export { StyledButtonOccupiedUntil };
