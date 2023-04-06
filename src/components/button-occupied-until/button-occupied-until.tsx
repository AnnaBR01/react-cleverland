import { ReactNode } from 'react';

import { StyledButtonOccupiedUntil } from './styles';

interface IProps {
  children: ReactNode;
  large?: number;
  middle?: number;
  small?: number;
  padding?: number;
  fontSize?: number;
  isBig?: boolean;
  dataTestId?: string;
}

export const ButtonOccupiedUntil = ({
  children,
  large = 166,
  middle = 166,
  small = 256,
  padding = 11,
  fontSize = 12,
  isBig = false,
  dataTestId,
}: IProps) => (
  <StyledButtonOccupiedUntil
    large={large}
    middle={middle}
    small={small}
    padding={padding}
    fontSize={fontSize}
    isBig={isBig}
    disabled={true}
    data-test-id={dataTestId}
  >
    {children}
  </StyledButtonOccupiedUntil>
);
