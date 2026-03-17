import { NavLink } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../constants/routes';

const navItems = [
  { to: PRIVATE_ROUTES.DASHBOARD, label: 'Dashboard' },
  { to: PRIVATE_ROUTES.CATALOGUE, label: 'Catalogue' },
] as const;

export function Sidebar() {
  return (
    <aside className="sidebar bg-light border-end">
      <nav className="nav flex-column nav-pills p-3 gap-1">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link rounded ${isActive ? 'active bg-primary' : 'text-dark'}`
            }
            end={to === PRIVATE_ROUTES.DASHBOARD}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
