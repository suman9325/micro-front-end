import { Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import {
  privateRouteConfig,
  publicRouteConfig,
} from './config/routeConfig';
import { ROUTES } from './constants/routes';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import './App.css';

function RootRedirect() {
  const { isAuthenticated } = useAuth();
  return (
    <Navigate to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN} replace />
  );
}

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="d-flex align-items-center justify-content-center min-vh-100">
          Loading...
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootRedirect />,
  },
  {
    element: <PublicRoute />,
    children: publicRouteConfig.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
  },
  {
    element: <PrivateRoute />,
    children: privateRouteConfig.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.ROOT} replace />,
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
