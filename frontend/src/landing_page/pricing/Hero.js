import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="text-center border-bottom pb-4 mb-5">
        <h1 className="fs-2">Pricing</h1>
        <p className="text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <img
            src="/images/pricingEquity.svg"
            alt="Equity Delivery"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h2 className="fs-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/images/intradayTrades.svg"
            alt="Intraday Trades"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h2 className="fs-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per order across equity,
            currency, and commodities. ₹20 for all option trades.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/images/pricingEquity.svg"
            alt="Mutual Funds"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h2 className="fs-4">Free direct mutual funds</h2>
          <p className="text-muted">
            All direct mutual fund investments are free — ₹0 commissions and DP
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
