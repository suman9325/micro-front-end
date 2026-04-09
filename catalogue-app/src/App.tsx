import { Navigate, Route, Routes } from 'react-router-dom';
import Offline from './pages/Offline';
import Online from './pages/Online';

/**
 * Nested routes for everything under /catalogue/* (host mounts this at catalogue/*).
 * Standalone dev: wrap with BrowserRouter in main.tsx.
 */
export default function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="online" replace />} />
      <Route path="online" element={<Online />} />
      <Route path="offline" element={<Offline />} />
    </Routes>
  );
}
