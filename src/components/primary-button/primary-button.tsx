import { MouseEvent, ReactNode } from 'react';

import { StyledPrimaryButton } from './styles';

interface IProps {
  children: ReactNode;
  large?: number;
  middle?: number;
  small?: number;
  padding?: number;
  fontSize?: number;
  isBig?: boolean;
  allWidth?: boolean;
  onClick?: (() => void) | ((event: MouseEvent<HTMLElement>) => void);
  disabled?: boolean;
  dataTestId?: string;
}

export const PrimaryButton = ({
  children,
  large = 166,
  middle = 166,
  small = 256,
  padding = 11,
  fontSize = 12,
  isBig = false,
  disabled = false,
  onClick,
  allWidth = false,
  dataTestId,
}: IProps) => (
  <StyledPrimaryButton
    data-test-id={dataTestId}
    large={large}
    middle={middle}
    small={small}
    padding={padding}
    fontSize={fontSize}
    isBig={isBig}
    allWidth={allWidth}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </StyledPrimaryButton>
);
