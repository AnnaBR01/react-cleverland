import styled from 'styled-components';

import { BODY_LARGE, Color } from '../../ui';

const StyledResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Text = styled.p`
  color: ${Color.GrayType1};
  ${BODY_LARGE}
`;

export { StyledResetPasswordForm, InputWrapper, Text };
