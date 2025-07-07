import React from "react";
import { Link } from "react-router-dom";

function Reset() {
  return (
    <section className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Reset Your Password</h2>
        <p className="text-muted">
          Enter your registered email to receive a reset link
        </p>
      </div>

      {/* Reset Form */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-6">
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="resetEmail" className="form-label">
                Registered Email Address
              </label>
              <input
                type="email"
                id="resetEmail"
                name="email"
                className="form-control"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary btn-lg">
                Send Reset Link
              </button>
            </div>
          </form>

          {/* Navigation Link */}
          <p className="text-center text-muted mt-4">
            Remembered your password?{" "}
            <Link to="/signin" className="text-decoration-none">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reset;
