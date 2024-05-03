import { ReactNode, memo } from 'react';
import { Navigate } from 'react-router-dom';
import config from '~/configs';

function PrivatedRoutes({ user, children }: PrivatedRoutesProps) {
  return user.email !== import.meta.env.VITE_EMAIL_ADMIN ? <Navigate to={config.routes.home} /> : children;
}

export default memo(PrivatedRoutes);
interface PrivatedRoutesProps {
  user: any;
  children: ReactNode;
}
