import React from "react";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 mb-5 border-top"></div>
      <div className="row mt-5 pt-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div className="row mt-5 mb-5 p-5 d-flex">
        <div className="col-6">
          <div className="d-flex justify-content-center mb-3">
            <img
              src="media/images/nithinKamath.jpg"
              alt="Co-founder"
              style={{ width: "50%", borderRadius: "50%" }}
            />
          </div>
          <h2 className="d-flex justify-content-center fs-4">Nithin Kamath</h2>
          <h3 className="d-flex justify-content-center fs-5">Founder, CEO</h3>
        </div>
        <div className="col-6 mt-5">
          <p className="text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-muted">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted">Playing basketball is his zen.</p>
          <p className="text-muted">
            Connect on
            <a href="/"> Homepage </a> / <a href="/"> TradingQnA </a> / <a href="/"> Twitter </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
