export const AUTH_TOKEN_KEY = 'authToken';

function canUseLocalStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getStoredToken(): string | null {
  if (!canUseLocalStorage()) return null;
  return window.localStorage.getItem(AUTH_TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return Boolean(getStoredToken());
}

export function setAuthToken(token: string): void {
  if (!canUseLocalStorage()) return;
  window.localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  if (!canUseLocalStorage()) return;
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
}

