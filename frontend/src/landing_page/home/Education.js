import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center p-5">
          <img
            src="/images/education.svg"
            alt="Market Education"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        <div className="col-md-6 p-5">
          <h2 className="mb-4">Free and open market education</h2>
          <p className="text-muted">
            <strong>Varsity</strong> is the largest free stock market education
            resource — from beginner to expert.
          </p>
          <a href="/" className="text-decoration-none">
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="mt-4 text-muted">
            <strong>TradingQ&A</strong> is India’s most active trading &
            investing Q&A community.
          </p>
          <a href="/" className="text-decoration-none">
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
