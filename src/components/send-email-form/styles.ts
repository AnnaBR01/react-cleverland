import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BODY_LARGE, Color, INFO_LARGE, Media } from '../../ui';

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
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

const StyledSendEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  ${Media.SM} {
    margin-top: 20px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const TextLink = styled(Link)`
  color: ${Color.Dark};
`;

const ForgotError = styled.span`
  color: ${Color.Negative};
`;

const MessageForgot = styled.p`
  position: absolute;
  top: 56px;
  left: 12px;
  color: ${Color.GrayType2};
  ${INFO_LARGE}

  ${Media.SM} {
    margin-bottom: 10px;
  }
`;

export { StyledSendEmailForm, InputWrapper, TextWrapper, Text, TextLink, ForgotError, MessageForgot };
