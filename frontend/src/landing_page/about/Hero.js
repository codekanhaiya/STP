import React from "react";

function Hero() {
  return (
    <div className="container my-5">
      <div className="text-center my-5 px-3">
        <h1 className="fs-2 fw-bold">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <hr className="my-5" />

      <div className="row gx-5">
        <div className="col-lg-6 mb-4">
          <p className="text-muted">
            We started operations on August 15, 2010, with the goal of breaking
            all barriers that traders and investors face in India—cost, support,
            and technology. The name Zerodha is a blend of "Zero" and "Rodha"
            (Sanskrit for barrier).
          </p>
          <p className="text-muted">
            Today, our disruptive pricing model and in-house technology have
            made us India’s largest stockbroker.
          </p>
          <p className="text-muted">
            Over 1+ Crore clients place millions of orders daily through our
            robust ecosystem, contributing over 15% of Indian retail trading
            volume.
          </p>
        </div>
        <div className="col-lg-6 mb-4">
          <p className="text-muted">
            We run multiple open online education and community platforms for
            retail investors and traders.
          </p>
          <p className="text-muted">
            <a href="/" className="text-decoration-underline">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in numerous startups
            to grow India’s capital markets.
          </p>
          <p className="text-muted">
            We're always building something new. Catch up with us on our{" "}
            <a href="/" className="text-decoration-underline">
              blog
            </a>{" "}
            or see what the{" "}
            <a href="/" className="text-decoration-underline">
              media
            </a>{" "}
            is saying.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
