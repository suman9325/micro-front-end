import { lazy } from 'react';
import { PRIVATE_ROUTE_PATTERNS, PUBLIC_ROUTES, PRIVATE_ROUTES } from '../constants/routes';

/** Lazy-loaded components for public routes */
export const publicRouteConfig = [
  {
    path: PUBLIC_ROUTES.LOGIN,
    Component: lazy(() => import('../pages/Login/Login')),
  },
  // Add more: { path: PUBLIC_ROUTES.FORGOT_PASSWORD, Component: lazy(() => import('auth/ForgotPassword')) },
] as const;

/** Lazy-loaded components for private routes */
export const privateRouteConfig = [
  {
    path: PRIVATE_ROUTES.DASHBOARD,
    Component: lazy(() => import('dashboard/App')),
  },
  {
    path: PRIVATE_ROUTE_PATTERNS.CATALOGUE,
    Component: lazy(() => import('catalogue/App')),
  },
  // Add more: { path: PRIVATE_ROUTES.ORDERS, Component: lazy(() => import('orders/App')) },
] as const;
