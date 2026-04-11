/** Public routes - accessible without authentication (e.g. login, forgot-password) */
export const PUBLIC_ROUTES = {
  LOGIN: '/login',
  // Add more: FORGOT_PASSWORD: '/forgot-password', REGISTER: '/register',
} as const;

/** Private routes - require authentication */
export const PRIVATE_ROUTES = {
  DASHBOARD: '/dashboard',
  /** Base path; nested /online and /offline are handled inside the catalogue remote */
  CATALOGUE: '/catalogue',
  CATALOGUE_ONLINE: '/catalogue/online',
  CATALOGUE_OFFLINE: '/catalogue/offline',
  COMMUNICATION: '/communication',
  // Add more as needed: ORDERS: '/orders', SETTINGS: '/settings',
} as const;

/**
 * React Router path pattern for the catalogue micro-frontend (nested routes live in the remote).
 * Use this in the host route table, not for NavLink `to`.
 */
export const PRIVATE_ROUTE_PATTERNS = {
  CATALOGUE: 'catalogue/*',
} as const;

export const ROUTES = {
  ROOT: '/',
  ...PUBLIC_ROUTES,
  ...PRIVATE_ROUTES,
} as const;
