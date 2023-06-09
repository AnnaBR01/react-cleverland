import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { getUserInfo, useAppSelector } from '../../store';

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={`${ROUTE.AUTH}`} />;
};
