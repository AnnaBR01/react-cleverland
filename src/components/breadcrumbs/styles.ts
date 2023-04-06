import styled from 'styled-components';

import { Color, Media } from '../../ui';

const StyledBreadcrumbs = styled.div`
  position: absolute;
  top: 143px;
  left: 0;
  width: 100%;
  padding-block: 23px;
  background: ${Color.GrayType5};

  ${Media.MD} {
    top: 128px;
    padding-block: 20px;
  }

  ${Media.SM} {
    top: 84px;
  }
`;

const BreadcrumbsContent = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;

  ${Media.MD} {
    padding-inline: 64px;
  }

  ${Media.SM} {
    padding-inline: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  grid-gap: 11px;
  color: ${Color.GrayType2};

  ${Media.MD} {
    font-size: 16px;
    line-height: 24px;
  }

  ${Media.SM} {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

const Text = styled.p`
  color: ${Color.GrayType2};

  ${Media.MD} {
    font-size: 16px;
    line-height: 24px;
  }

  ${Media.SM} {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

export { StyledBreadcrumbs, BreadcrumbsContent, Wrapper, Text };
