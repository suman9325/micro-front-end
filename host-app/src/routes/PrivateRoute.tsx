import { Navigate, useLocation } from 'react-router-dom';
import { PrivateLayout } from '../layouts/PrivateLayout';
import { ROUTES } from '../constants/routes';
import { isAuthenticated } from '../utils/auth';

/**
 * Protects routes that require authentication.
 * Redirects unauthenticated users to the login page, preserving the intended destination.
 */
export function PrivateRoute() {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <PrivateLayout />;
}
