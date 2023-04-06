import { createGlobalStyle } from 'styled-components';

import { Color } from './colors';
import { Reset } from './reset';
import { BODY_SMALL } from './typography';

export const GlobalStyle = createGlobalStyle`

${Reset}

body {
  ${BODY_SMALL}
  height: 100%;
  justify-content: center;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  color: ${Color.Dark};
}
`;
