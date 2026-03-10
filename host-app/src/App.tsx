import { lazy} from 'react'
import './App.css'

function App() {

  const Login = lazy(() => import('auth-app/App'));

  return (
    <>
      <Login />
    </>
  )
}

export default App
