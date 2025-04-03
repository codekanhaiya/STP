import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-light p-3">
      <div className="container d-flex justify-content-between">
        <div>
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "25%" }}
            />
          </Link>
        </div>

        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse ms-5 ps-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active ps-3">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item active ps-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active ps-3">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item active ps-3">
              <Link className="nav-link" to="pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item active ps-3">
              <Link className="nav-link" to="support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
