import styled from 'styled-components';

import { Color } from '../../ui';

const StyledHelpError = styled.span<{ $error: boolean }>`
  color: ${({ $error }) => ($error ? Color.Negative : Color.GrayType2)};
`;

export { StyledHelpError };
