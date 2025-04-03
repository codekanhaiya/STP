import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="fs-2">Pricing</h1>
        <p className="text-muted">
          Free equity investiments and flat &#8377; 20 traday and F&O trades
        </p>
      </div>
      <div className="row mt-5 p-5 text-center">
        <div className="col-4 p-5">
          <img
            style={{ width: "70%" }}
            src="media/images/pricingEquity.svg"
            alt="Pricing"
          />
          <h2 className="fs-3 mb-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            style={{ width: "70%" }}
            src="media/images/intradayTrades.svg"
            alt="Pricing"
          />
          <h2 className="fs-3 mb-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            style={{ width: "70%" }}
            src="media/images/pricingEquity.svg"
            alt="Pricing"
          />
          <h2 className="fs-3 mb-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
