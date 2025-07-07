import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-5">
          <h2 className="mb-4">Trust with confidence</h2>

          <h5>Customer-first always</h5>
          <p className="text-muted">
            1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity
            investments.
          </p>

          <h5>No spam or gimmicks</h5>
          <p className="text-muted">
            No spam, push notifications, or gamification. Just quality apps.
          </p>

          <h5>The Zerodha universe</h5>
          <p className="text-muted">
            Ecosystem with 30+ fintech partners to meet your needs.
          </p>

          <h5>Do better with money</h5>
          <p className="text-muted">
            Initiatives like Nudge and Kill Switch guide your investment
            journey.
          </p>
        </div>

        <div className="col-md-6 p-5 text-center">
          <img
            src="/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />
          <div>
            <a href="/" className="btn btn-outline-primary m-2">
              Explore our products
            </a>
            <a href="/" className="btn btn-outline-secondary m-2">
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
