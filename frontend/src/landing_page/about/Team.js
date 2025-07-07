import React from "react";

function Team() {
  return (
    <div className="container my-5">
      <hr className="my-5" />

      <div className="text-center mb-5">
        <h2 className="fs-2 fw-bold">People</h2>
      </div>

      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 mb-4">
          <div className="text-center">
            <img
              src="images/nithinKamath.jpg"
              alt="Nithin Kamath, Founder of Zerodha"
              className="rounded-circle img-fluid"
              style={{ maxWidth: "250px" }}
            />
            <h3 className="mt-3 fs-4">Nithin Kamath</h3>
            <h5 className="text-muted fs-5">Founder & CEO</h5>
          </div>
        </div>

        {/* Info Column */}
        <div className="col-md-6">
          <p className="text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to solve the
            challenges he faced as a trader. Today, Zerodha has redefined the
            Indian broking industry.
          </p>
          <p className="text-muted">
            He is a member of SEBI’s Secondary Market Advisory Committee (SMAC)
            and Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted">Playing basketball is his zen.</p>
          <p className="text-muted">
            Connect:
            <a href="/" className="ms-2 me-2 text-decoration-underline">
              Homepage
            </a>
            <a href="/" className="me-2 text-decoration-underline">
              TradingQnA
            </a>
            <a href="/" className="text-decoration-underline">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
