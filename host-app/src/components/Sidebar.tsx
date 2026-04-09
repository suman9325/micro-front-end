import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../constants/routes';
import './Sidebar.css';

const catalogueLinks = [
  { to: PRIVATE_ROUTES.CATALOGUE_ONLINE, label: 'Online' },
  { to: PRIVATE_ROUTES.CATALOGUE_OFFLINE, label: 'Offline' },
] as const;

export function Sidebar() {
  const location = useLocation();
  const underCatalogue = location.pathname.startsWith(PRIVATE_ROUTES.CATALOGUE);

  const [catalogueOpen, setCatalogueOpen] = useState(() => underCatalogue);

  return (
    <aside className="sidebar bg-light border-end">
      <nav className="nav flex-column nav-pills p-3 gap-1">
        <NavLink
          to={PRIVATE_ROUTES.DASHBOARD}
          className={({ isActive }) =>
            `nav-link rounded ${isActive ? 'active bg-primary' : 'text-dark'}`
          }
          end
        >
          Dashboard
        </NavLink>

        <div className="mt-2">
          <button
            type="button"
            className={`nav-link sidebar-catalogue-toggle rounded d-flex align-items-center w-100 text-start border-0 bg-transparent px-3 py-2 ${
              underCatalogue ? 'text-primary fw-semibold' : 'text-dark'
            }`}
            onClick={() => setCatalogueOpen((open) => !open)}
            aria-expanded={catalogueOpen}
            aria-controls="sidebar-catalogue-submenu"
            id="sidebar-catalogue-trigger"
          >
            <span>Catalogue</span>
            <span
              className={`sidebar-catalogue-chevron ms-auto small ${catalogueOpen ? 'is-open' : ''}`}
              aria-hidden
            >
              ▼
            </span>
          </button>

          <div
            id="sidebar-catalogue-submenu"
            role="region"
            aria-labelledby="sidebar-catalogue-trigger"
            className={catalogueOpen ? 'mt-1 d-flex flex-column gap-1' : 'd-none'}
          >
            {catalogueLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link rounded ms-2 ps-3 ${isActive ? 'active bg-primary' : 'text-dark'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
