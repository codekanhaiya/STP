import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <section className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Login to Zerodha</h2>
        <p className="text-muted">Access your account securely</p>
      </div>

      {/* Login Form */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-6">
          <form>
            {/* Email Address */}
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                name="password"
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary btn-lg">
                Log In
              </button>
            </div>
          </form>

          {/* Navigation Links */}
          <p className="text-center mt-4 text-muted">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign up
            </Link>
          </p>
          <p className="text-center text-muted">
            <Link to="/reset" className="text-decoration-none">
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signin;
