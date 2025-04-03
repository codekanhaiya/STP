import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 p-5">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="/"
            style={{ textDecoration: "none" }}
          >
            Explore our products <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5">
          <div className="row text-center">
            <div className="col-6 p-5 border">
              <h1 className="mb-4 fs-2">&#8377; 0</h1>
              <p className="text-muted">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-6 p-5 border">
              <h1 className="mb-4 fs-2">&#8377; 20</h1>
              <p className="text-muted">Itraday an F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
