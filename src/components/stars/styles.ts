import styled from 'styled-components';

import { Color, ContainerFlex } from '../../ui';

interface IProps {
  gap: number;
}

const StyledStars = styled(ContainerFlex).attrs<IProps>((props) => ({
  gap: `${props.gap}px`,
}))<IProps>`
  grid-gap: ${({ gap }) => gap};
`;

const Text = styled.p`
  color: ${Color.GrayType2};
  letter-spacing: 0.1px;
`;

export { StyledStars, Text };
