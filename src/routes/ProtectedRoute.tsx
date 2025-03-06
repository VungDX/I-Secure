// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface ProtectedRouteProps {
  isPrivate?: boolean; // true cho private route, false cho public route
  redirectTo?: string; // Đường dẫn để redirect khi không thỏa mãn điều kiện
}

const ProtectedRoute = ({ isPrivate = false, redirectTo = '/login' }: ProtectedRouteProps) => {
  const { user } = useAuth();

  // Nếu là private route: có user thì vào Outlet, không thì redirect
  // Nếu là public route: có user thì redirect, không thì vào Outlet
  const shouldRedirect = isPrivate ? !user : user;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default ProtectedRoute;