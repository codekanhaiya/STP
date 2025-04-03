import React from "react";

function Hero() {
  return (
    <div className="container  mt-5">
      <div className="row text-center d-flex justify-content-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="mb-5"
          style={{ width: "80%" }}
        />
        <h1 className="mt-5 fs-2">Invest in everything</h1>
        <p className="text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;
