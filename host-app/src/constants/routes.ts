/** Public routes - accessible without authentication (e.g. login, forgot-password) */
export const PUBLIC_ROUTES = {
  LOGIN: '/login',
  // Add more: FORGOT_PASSWORD: '/forgot-password', REGISTER: '/register',
} as const;

/** Private routes - require authentication */
export const PRIVATE_ROUTES = {
  DASHBOARD: '/dashboard',
  CATALOGUE: '/catalogue',
  // Add more as needed: ORDERS: '/orders', SETTINGS: '/settings',
} as const;

export const ROUTES = {
  ROOT: '/',
  ...PUBLIC_ROUTES,
  ...PRIVATE_ROUTES,
} as const;
