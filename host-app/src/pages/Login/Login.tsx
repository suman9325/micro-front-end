import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { setAuthToken } from '../../utils/auth';

type LocationState = {
  // Matches what `PrivateRoute` sets on redirect.
  from?: {
    pathname: string;
  };
};

const DEMO_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUmFqZXNoIEt1bWFyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmFqZXNoLmt1bWFyQGNlc2MuY28uaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIkNvbXBhbnlJZCI6ImJiMTMxZTkxLTkyNjQtNGY1ZS1hZGYwLTQ4NGQwYjlmYTNlNyIsImV4cCI6MTc2ODYzMTkwMCwiaXNzIjoiUE1TLkFwaSIsImF1ZCI6IlBNUy5DbGllbnQifQ.Jwk3We9MM6-x72BYVGmqoCatXQvIie_qCwk3G-lz_Ew';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Validation states
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });

  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;
  const destination = state?.from?.pathname ?? ROUTES.DASHBOARD;

  // Validate email format
  const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
    return '';
  };

  // Validate password
  const validatePassword = (value: string) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleBlur = (field: 'email' | 'password') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      setEmailError(validateEmail(value));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (touched.password) {
      setPasswordError(validatePassword(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to show errors
    setTouched({ email: true, password: true });

    // Run full validation
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return;
    }

    // Demo login: store token and route to the intended destination.
    // (Replace with real API call later.)
    void rememberMe; // kept for parity with the UI
    setAuthToken(DEMO_TOKEN);
    navigate(destination, { replace: true });
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
          <div className="card-body p-4 text-center">
            <div
              className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
              style={{
                width: '72px',
                height: '72px',
                backgroundColor: '#0d6efd',
                fontSize: '1.25rem',
              }}
            >
              LOGO
            </div>
            <h3 className="mb-2 fw-semibold h5">Welcome Back!</h3>
            <p className="text-muted small mb-3">Sign in to your business account</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${emailError && touched.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => handleBlur('email')}
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>

              {touched.email && emailError && (
                <div className="text-danger text-start small mb-3 ms-1">{emailError}</div>
              )}

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${passwordError && touched.password ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={() => handleBlur('password')}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>

              {touched.password && passwordError && (
                <div className="text-danger text-start small mb-3 ms-1">{passwordError}</div>
              )}

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label text-muted" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none small text-primary">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-medium"
                style={{ backgroundColor: '#0d6efd', border: 'none' }}
              >
                Sign In
              </button>

              <p className="mt-4 text-muted small">
                Don't have an account?{' '}
                <a href="#" className="text-primary text-decoration-none fw-medium">
                  Sign up
                </a>
              </p>
            </form>
          </div>

          <div className="card-footer bg-transparent text-center py-3 border-0">
            <small className="text-muted">© 2025 Your Company. All rights reserved.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

