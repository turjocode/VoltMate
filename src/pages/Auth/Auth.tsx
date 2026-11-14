import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isRegistering, setIsRegistering] = useState(
    location.pathname === "/signup"
  );

  useEffect(() => {
    setIsRegistering(location.pathname === "/signup");
  }, [location.pathname]);

  const switchToRegister = () => {
    setIsRegistering(true);
    navigate("/signup");
  };

  const switchToLogin = () => {
    setIsRegistering(false);
    navigate("/login");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Backend authentication will be implemented later.
  };

  return (
    <div className="auth-page">
        <Link to="/" className="auth-home-button">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Home
        </Link>
      <div className={`auth-container ${isRegistering ? "active" : ""}`}>
        <div className="auth-form-box auth-login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p className="auth-subtitle">Welcome back to VoltMate.</p>

            <div className="auth-input-box">
              <input type="text" placeholder="Username" required />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="auth-input-box">
              <input type="password" placeholder="Password" required />
              <i className="fa-solid fa-lock"></i>
            </div>

            <div className="auth-forgot">
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="auth-btn">
              Login
            </button>

            <p className="auth-social-text">
              or login with social platforms
            </p>

            <div className="auth-social-icons">
              <a href="#" aria-label="Google"><i className="fa-brands fa-google"></i></a>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </form>
        </div>

        <div className="auth-form-box auth-register">
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <p className="auth-subtitle">Create your VoltMate account.</p>

            <div className="auth-input-box">
              <input type="text" placeholder="Username" required />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="auth-input-box">
              <input type="email" placeholder="Email" required />
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div className="auth-input-box">
              <input type="password" placeholder="Password" required />
              <i className="fa-solid fa-lock"></i>
            </div>

            <button type="submit" className="auth-btn">
              Register
            </button>

            <p className="auth-social-text">
              or register with social platforms
            </p>

            <div className="auth-social-icons">
              <a href="#" aria-label="Google"><i className="fa-brands fa-google"></i></a>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </form>
        </div>

        <div className="auth-toggle-box">
          <div className="auth-toggle-panel auth-toggle-left">
            <h1>Welcome Back!</h1>
            <p>Already have an account? Sign in and get connected.</p>
            <button
              type="button"
              className="auth-btn auth-register-btn"
              onClick={switchToRegister}
            >
              Register
            </button>
          </div>

          <div className="auth-toggle-panel auth-toggle-right">
            <h1>Hello, Welcome!</h1>
            <p>New to VoltMate? Create an account and stay powered.</p>
            <button
              type="button"
              className="auth-btn auth-login-btn"
              onClick={switchToLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;