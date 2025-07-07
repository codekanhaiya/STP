import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Create your Zerodha Account</h2>
        <p className="text-muted">
          Start investing with India’s leading platform
        </p>
      </div>

      {/* Image and Form */}
      <div className="row align-items-center justify-content-center">
        {/* Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src="/images/signup.png"
            alt="Signup Illustration"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
          <p className="text-muted mt-3">
            Join over 1 crore investors. Simple. Transparent. Powerful.
          </p>
        </div>

        {/* Form Section */}
        <div className="col-lg-6">
          <form>
            {/* Full Name */}
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="10-digit mobile number"
                required
                pattern="[0-9]{10}"
                maxLength="10"
                autoComplete="tel"
              />
            </div>

            {/* PAN */}
            <div className="mb-3">
              <label htmlFor="pan" className="form-label">
                PAN Number
              </label>
              <input
                type="text"
                className="form-control"
                id="pan"
                name="pan"
                placeholder="ABCDE1234F"
                required
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                style={{ textTransform: "uppercase" }}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Create Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Minimum 8 characters"
                minLength={8}
                required
                autoComplete="new-password"
              />
              <small className="form-text text-muted">
                Use at least 8 characters, including a number and a special
                character.
              </small>
            </div>

            {/* Submit */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign Up for Free
              </button>
            </div>
          </form>

          {/* Signin Prompt */}
          <p className="text-center mt-4 text-muted">
            Already have an account?{" "}
            <Link to="/signin" className="text-decoration-none">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
