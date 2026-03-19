import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { isAuthenticated } from '../utils/auth';

/**
 * Wraps public-only routes (e.g. login, forgot-password).
 * Redirects authenticated users away to avoid showing auth pages when already logged in.
 */
export function PublicRoute() {
  if (isAuthenticated()) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
}
