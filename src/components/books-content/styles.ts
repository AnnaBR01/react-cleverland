import styled from 'styled-components';

import { Color, ContainerFlexColumn, H3, Media } from '../../ui';

const StyledVerticalBooksContent = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(190px, 190px));
  grid-gap: 21.5px;

  ${Media.MD} {
    grid-gap: 35px;
  }

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHorizontalBooksContent = styled(ContainerFlexColumn)`
  grid-gap: 16px;
`;

const NoBooks = styled.p`
  margin-top: 200px;
  text-align: center;
  color: ${Color.GrayType2};
  ${H3}

  ${Media.MD} {
    margin-top: 226px;
  }

  ${Media.SM} {
    margin-top: 137px;
  }
`;

export { StyledVerticalBooksContent, StyledHorizontalBooksContent, NoBooks };
