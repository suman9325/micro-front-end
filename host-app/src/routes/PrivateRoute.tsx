import { Navigate, useLocation } from 'react-router-dom';
import { PrivateLayout } from '../layouts/PrivateLayout';
import { ROUTES } from '../constants/routes';
import { useAuth } from '../contexts/AuthContext';

/**
 * Protects routes that require authentication.
 * Redirects unauthenticated users to the login page, preserving the intended destination.
 */
export function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <PrivateLayout />;
}
