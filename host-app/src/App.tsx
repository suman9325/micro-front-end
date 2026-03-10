import { lazy, Suspense } from 'react'
import './App.css'

function App() {

  const Login = lazy(() => import('auth/App'));

  return (
    <Suspense fallback={<div className="d-flex align-items-center justify-content-center min-vh-100">Loading...</div>}>
      <Login />
    </Suspense>
  )
}

export default App
