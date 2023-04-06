import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BODY_LARGE, Color, INFO_LARGE, Media } from '../../ui';

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 16px;
  color: ${Color.GrayType1};
  ${BODY_LARGE}

  ${Media.SM} {
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 7px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: start;
  grid-gap: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${Color.Dark};
`;

const Auth = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ForgotPassword = styled(Link)`
  position: absolute;
  top: 76px;
  left: 12px;
  color: ${Color.GrayType2};
  ${INFO_LARGE}
`;

const ErrorAuthStatusWrapper = styled.div`
  position: absolute;
  top: 76px;
  left: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ${INFO_LARGE}
`;

const ErrorAuthStatus = styled.p`
  color: ${Color.Negative};
`;

const TextLink = styled(Link)`
  color: ${Color.Dark};
`;

export { Auth, InputWrapper, ForgotPassword, TextWrapper, Text, ErrorAuthStatusWrapper, ErrorAuthStatus, TextLink };
