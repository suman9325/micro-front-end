import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import './PrivateLayout.css';

export function PrivateLayout() {
  return (
    <div className="private-layout d-flex flex-column vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar />
        <main className="main-content flex-grow-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
