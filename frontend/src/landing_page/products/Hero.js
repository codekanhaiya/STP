import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mt-5 fs-2">Zerodha Products</h1>
        <p className="text-muted">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="text-muted">
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            investment offerings <i className="fa fa-long-arrow-right"></i>
          </a>
        </p>
      </div>
      <hr className="mt-5 mb-5" />
    </div>
  );
}

export default Hero;
