/* eslint-disable no-negated-condition */
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { getUserInfo, useAppSelector } from '../../store';

export const WithoutAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return !isAuth ? <Outlet /> : <Navigate to={`${ROUTE.AllBOOKS}`} />;
};
