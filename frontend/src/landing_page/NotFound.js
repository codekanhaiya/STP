import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      {/* 404 Heading */}
      <h1 className="display-4 text-danger fw-bold mb-3">Page Not Found</h1>

      {/* Description */}
      <p className="text-muted text-center mb-4">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>

      {/* Home Redirect Button */}
      <Link to="/" className="btn btn-primary px-4 py-2">
        Back to Home
      </Link>

      {/* Optional Illustration */}
      <img
        src={`images/404.svg`}
        alt="Page not found"
        className="img-fluid mt-4"
        style={{ maxWidth: "400px" }}
      />
    </div>
  );
}

export default NotFound;
