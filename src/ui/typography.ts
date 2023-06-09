import styled, { css } from 'styled-components';

import { Color } from './colors';
import { Media } from './media';

// TODO: Refactor by Style kit!!!

const H1 = css`
  font-weight: 500;
  font-size: 52px;
  line-height: 64px;
  letter-spacing: 0.2px;

  ${Media.SM} {
    font-size: 32px;
    line-height: 40px;
  }
`;

const H2 = css`
  font-weight: 600;
  font-size: 44px;
  line-height: 54px;

  ${Media.SM} {
    font-size: 26px;
    line-height: 36px;
  }
`;

const H3 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const H4 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1px;
`;

const H5 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
`;

const SUBTITLE_LARGE = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const SUBTITLE_SMALL = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
`;

const BODY_LARGE = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;

  ${Media.SM} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const BODY_SMALL = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;

  ${Media.SM} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const INFO_LARGE = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
`;

const INFO_SMALL = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
`;

const BUTTON_LARGE = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  ${Media.SM} {
    line-height: 20px;
  }
`;

const BUTTON_SMALL = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  ${Media.SM} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const TEXT_CONTENT_LARGE = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;

  ${Media.MD} {
    font-size: 14px;
    line-height: 18px;
  }

  ${Media.SM} {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

const TEXT_CONTENT_SMALL = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;

  ${Media.MD} {
    font-size: 14px;
    line-height: 18px;
  }

  ${Media.SM} {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

// TODO: Refactor by Style kit!!!

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  SUBTITLE_LARGE,
  SUBTITLE_SMALL,
  BODY_LARGE,
  BODY_SMALL,
  INFO_LARGE,
  INFO_SMALL,
  BUTTON_LARGE,
  BUTTON_SMALL,
  TEXT_CONTENT_LARGE,
  TEXT_CONTENT_SMALL,
};

const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: ${Color.Dark};

  ${Media.MD} {
    font-size: 24px;
    line-height: 30px;
  }

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const SecondarySmallTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;

  ${Media.MD} {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  ${Media.SM} {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
`;

export { Title, Text, SecondarySmallTitle };
