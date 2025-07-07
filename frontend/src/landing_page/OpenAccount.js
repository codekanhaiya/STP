import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10">
          {/* Heading */}
          <h1 className="mt-5 fs-2">Open a Zerodha Account</h1>

          {/* Subtext */}
          <p className="text-muted mt-3 mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>

          {/* Signup Button */}
          <Link to="/signup">
            <button className="btn btn-primary btn-lg px-4">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
