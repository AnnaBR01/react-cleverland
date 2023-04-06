import { ReactNode } from 'react';

import { useWindowSize } from '../../hooks';
import { getForgotPasswordInfo, getRegistrationUserInfo, getUserInfo, useAppSelector } from '../../store';
import { Breakpoint } from '../../ui';
import { Loader } from '..';

import { Logo, StyledAuthLayout, StyledForm, Title } from './styles';

interface IProps {
  children: ReactNode;
  paddingTop?: number;
  gapLg?: number;
  gapSm?: number;
  title: string;
}

export const AuthLayout = ({ children, gapLg = 46, gapSm = 8, title, paddingTop = 48 }: IProps) => {
  const { isLoadingForgotPassword } = useAppSelector(getForgotPasswordInfo);
  const { isLoadingAuthUser } = useAppSelector(getUserInfo);
  const { isLoadingRegistration } = useAppSelector(getRegistrationUserInfo);
  const { width = 0 } = useWindowSize();

  return (
    <StyledAuthLayout gapLg={gapLg} gapSm={gapSm} data-test-id='auth'>
      {(isLoadingForgotPassword || isLoadingAuthUser || isLoadingRegistration) &&
        (width < Breakpoint.SM ? <Loader size={42} /> : width < Breakpoint.MD ? <Loader size={64} /> : <Loader />)}
      <Logo>Cleverland</Logo>
      <StyledForm paddingTop={paddingTop}>
        <Title>{title}</Title>
        {children}
      </StyledForm>
    </StyledAuthLayout>
  );
};
