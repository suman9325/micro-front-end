import { NavLink, useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../constants/routes';
import { clearAuthToken } from '../utils/auth';

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthToken();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-dark bg-primary shadow-sm w-100">
      <div className="container-fluid px-3 px-lg-4 d-flex justify-content-between align-items-center">
        <NavLink to={PRIVATE_ROUTES.DASHBOARD} className="navbar-brand fw-semibold mb-0">
          App
        </NavLink>
        <button
          type="button"
          className="btn btn-outline-light btn-sm"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
