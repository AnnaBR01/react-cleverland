import { MouseEvent, ReactNode } from 'react';

import { StyledButtonOccupied } from './styles';

interface IProps {
  children: ReactNode;
  large?: number;
  middle?: number;
  small?: number;
  padding?: number;
  fontSize?: number;
  isBig?: boolean;
  dataTestId?: string;
  onClick?: (() => void) | ((event: MouseEvent<HTMLElement>) => void);
  allWidth?: boolean;
  disabled?: boolean;
}

export const ButtonOccupied = ({
  children,
  large = 166,
  middle = 166,
  small = 256,
  padding = 11,
  fontSize = 12,
  isBig = false,
  dataTestId,
  onClick,
  allWidth = false,
  disabled = false,
}: IProps) => (
  <StyledButtonOccupied
    large={large}
    middle={middle}
    small={small}
    padding={padding}
    fontSize={fontSize}
    isBig={isBig}
    data-test-id={dataTestId}
    onClick={onClick}
    allWidth={allWidth}
    disabled={disabled}
  >
    {children}
  </StyledButtonOccupied>
);
