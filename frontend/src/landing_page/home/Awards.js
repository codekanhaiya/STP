import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center p-5">
          <img
            src="/images/largestBroker.svg"
            alt="Largest Stock Broker"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>
        <div className="col-md-6 p-5">
          <h2 className="fs-2">Largest stock broker in India</h2>
          <p className="text-muted mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures & Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="/images/pressLogos.png"
            alt="Media Mentions"
            className="img-fluid mt-4"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
