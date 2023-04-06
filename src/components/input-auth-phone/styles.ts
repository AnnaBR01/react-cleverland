import { InputMask } from 'primereact/inputmask';
import styled from 'styled-components';

import { Color, Media } from '../../ui';

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInputAuthPhone = styled(InputMask)<{ $errorInput: boolean }>`
  width: 100%;
  padding: 26px 12px 12px;
  margin-bottom: 36px;
  background: ${Color.GrayType5};
  border-radius: 4px;
  outline: none;
  border: none;
  border-bottom: ${({ $errorInput }) =>
    $errorInput ? `1px solid  ${Color.Negative}` : `1px solid ${Color.GrayType3}`};

  ${Media.SM} {
    margin-bottom: 44px;
  }
`;

const Placeholder = styled.p`
  position: absolute;
  left: 12px;
  pointer-events: none;
`;

export { StyledInputAuthPhone, Placeholder, InputWrapper };
