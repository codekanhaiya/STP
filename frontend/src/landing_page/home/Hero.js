import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mt-5 text-center">
      <img
        src="/images/homeHero.png"
        alt="Investing Platform"
        className="img-fluid mb-5"
        style={{ maxWidth: "80%" }}
      />
      <h1 className="fs-2 fw-bold">Invest in everything</h1>
      <p className="text-muted mb-4">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>
      <Link to="/signup">
        <button className="btn btn-primary btn-lg px-4">
          Sign up for free
        </button>
      </Link>
    </div>
  );
}

export default Hero;
