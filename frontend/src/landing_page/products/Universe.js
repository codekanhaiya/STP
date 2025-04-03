import React from "react";

function Universe() {
  return (
    <div className="container  mt-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div
        className="row text-center text-muted p-5"
        style={{ fontSize: "0.75rem" }}
      >
        <div className="col-4 p-5">
          <img
            style={{ width: "50%" }}
            src="media/images/zerodhaFundhouse.png"
            alt="universe"
          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            style={{ width: "50%" }}
            src="media/images/sensibullLogo.svg"
            alt="universe"
          />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            style={{ width: "50%" }}
            src="media/images/tijori.svg"
            alt="universe"
          />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div
        className="row text-center text-muted p-5"
        style={{ fontSize: "0.75rem" }}
      >
        <div className="col-4 p-5">
          <img
            style={{ width: "50%" }}
            src="media/images/streakLogo.png"
            alt="universe"
          />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            style={{ width: "50%" }}
            src="media/images/smallcaseLogo.png"
            alt="universe"
          />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            style={{ width: "50%" }}
            src="media/images/dittoLogo.png"
            alt="universe"
          />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row text-center mb-5">
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
