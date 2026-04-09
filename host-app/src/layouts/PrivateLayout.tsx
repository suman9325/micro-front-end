import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import './PrivateLayout.css';

/**
 * Remount the sidebar when the user moves between top-level app areas (first URL segment),
 * e.g. /dashboard ↔ /catalogue/... ↔ /orders/... — without listing each feature by name.
 * Sub-routes under the same segment (e.g. /catalogue/online → /catalogue/offline) keep the same key.
 */
function sidebarResetKey(pathname: string): string {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment ?? 'app';
}

export function PrivateLayout() {
  const location = useLocation();

  return (
    <div className="private-layout d-flex flex-column vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar key={sidebarResetKey(location.pathname)} />
        <main className="main-content flex-grow-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
