import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-4 p-5">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered discount broking and transparent pricing in India.
          </p>
          <a href="/" className="text-decoration-none">
            Explore our products <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        <div className="col-md-6 offset-md-2 p-5">
          <div className="row text-center">
            <div className="col-6 border p-4">
              <h2>&#8377; 0</h2>
              <p className="text-muted">Free equity delivery & mutual funds</p>
            </div>
            <div className="col-6 border p-4">
              <h2>&#8377; 20</h2>
              <p className="text-muted">Flat fee on intraday & F&O trades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
